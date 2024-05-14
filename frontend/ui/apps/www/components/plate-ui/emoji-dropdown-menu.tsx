import React from 'react';
import {
  EmojiDropdownMenuOptions,
  useEmojiDropdownMenuState,
} from '@udecode/plate-emoji';

import { Icons } from '@/components/icons';

import { emojiCategoryIcons, emojiSearchIcons } from './emoji-icons.jsx';
import { EmojiPicker } from './emoji-picker.jsx';
import { EmojiToolbarDropdown } from './emoji-toolbar-dropdown.jsx';
import { ToolbarButton } from './toolbar.jsx';

type EmojiDropdownMenuProps = {
  options?: EmojiDropdownMenuOptions;
} & React.ComponentPropsWithoutRef<typeof ToolbarButton>;

export function EmojiDropdownMenu({
  options,
  ...props
}: EmojiDropdownMenuProps) {
  const { isOpen, setIsOpen, emojiPickerState } =
    useEmojiDropdownMenuState(options);

  return (
    <EmojiToolbarDropdown
      control={
        <ToolbarButton pressed={isOpen} isDropdown tooltip="Emoji" {...props}>
          <Icons.emoji />
        </ToolbarButton>
      }
      isOpen={isOpen}
      setIsOpen={setIsOpen}
    >
      <EmojiPicker
        {...emojiPickerState}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        icons={{
          categories: emojiCategoryIcons,
          search: emojiSearchIcons,
        }}
        settings={options?.settings}
      />
    </EmojiToolbarDropdown>
  );
}
