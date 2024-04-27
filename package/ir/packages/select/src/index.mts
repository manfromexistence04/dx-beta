import {
  createPrompt,
  useState,
  useKeypress,
  usePrefix,
  usePagination,
  useRef,
  useMemo,
  isBackspaceKey,
  isEnterKey,
  isUpKey,
  isDownKey,
  isNumberKey,
  Separator,
  ValidationError,
  makeTheme,
  type Theme,
} from '@inquirer/core';
import type { PartialDeep } from '@inquirer/type';
import chalk from 'chalk';
import figures from '@inquirer/figures';
import ansiEscapes from 'ansi-escapes';
// import input from '/workspace/dx-beta/package/ir/packages/input/src/index.mts';

type InputConfig = {
  message: string;
  default?: string;
  transformer?: (value: string, { isFinal }: { isFinal: boolean }) => string;
  validate?: (value: string) => boolean | string | Promise<string | boolean>;
  theme?: PartialDeep<Theme>;
};

type SelectTheme = {
  icon: { cursor: string };
  style: { disabled: (text: string) => string };
  helpMode: 'always' | 'never' | 'auto';
};

const selectTheme: SelectTheme = {
  icon: { cursor: figures.pointer },
  style: { disabled: (text: string) => chalk.dim(`- ${text}`) },
  helpMode: 'auto',
};

type Choice<Value> = {
  value: Value;
  name?: string;
  description?: string;
  disabled?: boolean | string;
  type?: never;
};

type SelectConfig<Value> = {
  commandUser?: any;
  message?: string;
  choices: ReadonlyArray<Choice<Value> | Separator>;
  pageSize?: number;
  loop?: boolean;
  default?: string;
  theme?: PartialDeep<Theme<SelectTheme>>;
  validate?: (value: string) => boolean | string | Promise<string | boolean>;
  transformer?: (value: string, { isFinal }: { isFinal: boolean }) => string;
};

type Item<Value> = Separator | Choice<Value>;

function isSelectable<Value>(item: Item<Value>): item is Choice<Value> {
  return !Separator.isSeparator(item) && !item.disabled;
}

export default createPrompt(
  <Value,>(config: SelectConfig<Value>, done: (value: Value) => void): string => {
    const { choices: items, loop = true, pageSize = 12 } = config;
    const firstRender = useRef(true);
    const theme = makeTheme<SelectTheme>(selectTheme, config.theme);
    const prefix = usePrefix({ theme });
    const [status, setStatus] = useState('pending');
    const searchTimeoutRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

    const bounds = useMemo(() => {
      const first = items.findIndex(isSelectable);
      const last = items.findLastIndex(isSelectable);

      if (first < 0) {
        throw new ValidationError(
          '[select prompt] No selectable choices. All choices are disabled.',
        );
      }

      return { first, last };
    }, [items]);

    const defaultItemIndex = useMemo(() => {
      if (!('default' in config)) return -1;
      return items.findIndex(
        (item) => isSelectable(item) && item.value === config.default,
      );
    }, [config.default, items]);

    const [active, setActive] = useState(
      defaultItemIndex === -1 ? bounds.first : defaultItemIndex,
    );

    // Safe to assume the cursor position always point to a Choice.
    const selectedChoice = items[active] as Choice<Value>;

    useKeypress((key, rl) => {
      clearTimeout(searchTimeoutRef.current);

      if (isEnterKey(key)) {
        setStatus('done');
        done(selectedChoice.value);
      } else if (isUpKey(key) || isDownKey(key)) {
        rl.clearLine(0);
        if (
          loop ||
          (isUpKey(key) && active !== bounds.first) ||
          (isDownKey(key) && active !== bounds.last)
        ) {
          const offset = isUpKey(key) ? -1 : 1;
          let next = active;
          do {
            next = (next + offset + items.length) % items.length;
          } while (!isSelectable(items[next]!));
          setActive(next);
        }
      } else if (isNumberKey(key)) {
        rl.clearLine(0);
        const position = Number(key.name) - 1;
        const item = items[position];
        if (item != null && isSelectable(item)) {
          setActive(position);
        }
      } else if (isBackspaceKey(key)) {
        rl.clearLine(0);
      } else {
        // Default to search
        // const searchTerm = rl.line.toLowerCase();
        // const matchIndex = items.findIndex((item) => {
        //   if (Separator.isSeparator(item) || !isSelectable(item)) return false;

        //   return String(item.name || item.value)
        //     .toLowerCase()
        //     .startsWith(searchTerm);
        // });

        // if (matchIndex >= 0) {
        //   setActive(matchIndex);
        // }

        // searchTimeoutRef.current = setTimeout(() => {
        //   rl.clearLine(0);
        // }, 700);
        // rl.clearLine(0);
        // setValue(rl.line);
        // setError(undefined);
      }
    });

    // const message = theme.style.message(config.message);
    // const message = `${config.message}`

    let helpTipTop = '';
    let helpTipBottom = '';
    if (
      theme.helpMode === 'always' ||
      (theme.helpMode === 'auto' && firstRender.current)
    ) {
      firstRender.current = false;

      if (items.length > pageSize) {
        helpTipBottom = `\n${theme.style.help('(Use arrow keys to reveal more choices, type to filter)')}`;
      } else {
        helpTipTop = theme.style.help('(Use arrow keys, type to filter)');
      }
    }

    const page = usePagination<Item<Value>>({
      items,
      active,
      renderItem({ item, isActive }: { item: Item<Value>; isActive: boolean }) {
        if (Separator.isSeparator(item)) {
          return ` ${item.separator}`;
        }

        const line = item.name || item.value;
        if (item.disabled) {
          const disabledLabel =
            typeof item.disabled === 'string' ? item.disabled : '(disabled)';
          return theme.style.disabled(`${line} ${disabledLabel}`);
        }

        const color = isActive ? theme.style.highlight : (x: string) => x;
        const cursor = isActive ? theme.icon.cursor : ` `;
        return color(`${cursor} ${line}`);
      },
      pageSize,
      loop,
    });

    if (status === 'done') {
      const answer =
        selectedChoice.name ||
        // TODO: Could we enforce that at the type level? Name should be defined for non-string values.
        String(selectedChoice.value);
      return `${prefix} ${prefix} ${theme.style.answer(answer)}`;
    }

    const choiceDescription = selectedChoice.description
      ? `\n${selectedChoice.description}`
      : ``;

    // async () => {
    //   const answer = await input({ message: 'Enter your name' });
    // }

    // Input
    const { validate = () => true } = config;
    // const theme = makeTheme(config.theme);
    // const [status, setStatus] = useState<string>('pending');
    const [defaultValue = '', setDefaultValue] = useState<string | undefined>(
      config.default,
    );
    const [errorMsg, setError] = useState<string | undefined>(undefined);
    const [value, setValue] = useState<string>('');

    const isLoading = status === 'loading';
    // const prefix = usePrefix({ isLoading, theme });

    useKeypress(async (key, rl) => {
      // Ignore keypress while our prompt is doing other processing.
      if (status !== 'pending') {
        return;
      }

      if (isEnterKey(key)) {
        const answer: any = value || defaultValue;
        setStatus('loading');
        const isValid = await validate(answer);
        if (isValid === true) {
          setValue(answer);
          setStatus('done');
          done(answer);
        } else {
          // Reset the readline line value to the previous value. On line event, the value
          // get cleared, forcing the user to re-enter the value instead of fixing it.
          rl.write(value);
          setError(isValid || 'You must provide a valid value');
          setStatus('pending');
        }
      } else if (isBackspaceKey(key) && !value) {
        setDefaultValue(undefined);
      } else if (key.name === 'tab' && !value) {
        setDefaultValue(undefined);
        rl.clearLine(0); // Remove the tab character.
        rl.write(defaultValue);
        setValue(defaultValue);
      } else {
        setValue(rl.line);
        setError(undefined);
      }
    });

    const message: any = theme.style.message(config.commandUser);
    let formattedValue = value;
    if (typeof config.transformer === 'function') {
      formattedValue = config.transformer(value, { isFinal: status === 'done' });
    } else if (status === 'done') {
      formattedValue = theme.style.answer(value);
    }

    let defaultStr;
    if (defaultValue && status !== 'done' && !value) {
      defaultStr = theme.style.defaultAnswer(defaultValue);
    }

    let error = '';
    if (errorMsg) {
      error = theme.style.error(errorMsg);
    }


    // return `${[prefix, message, helpTipTop].filter(Boolean).join(' ')}${ansiEscapes.cursorHide}`;
    // return `${choiceDescription}\n${page}${helpTipBottom}${ansiEscapes.cursorHide}`;
    // return `${choiceDescription}\n${page}${helpTipBottom}${ansiEscapes.cursorHide}`;
    return `${[message, defaultStr, formattedValue]
      .filter((v) => v !== undefined)
      .join(' ')}${page}${helpTipBottom}${ansiEscapes.cursorHide}${ansiEscapes.cursorHide}`;
  },
);

export { Separator };

