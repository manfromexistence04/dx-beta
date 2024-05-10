import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useTunnels } from "../../context/tunnels";
import DropdownMenu from "../dropdownMenu/DropdownMenu";
import { useExcalidrawSetAppState } from "../App";
import { brainIcon } from "../icons";
import { t } from "../../i18n";
import { trackEvent } from "../../analytics";
export const TTDDialogTrigger = ({ children, icon, }) => {
    const { TTDDialogTriggerTunnel } = useTunnels();
    const setAppState = useExcalidrawSetAppState();
    return (_jsx(TTDDialogTriggerTunnel.In, { children: _jsxs(DropdownMenu.Item, { onSelect: () => {
                trackEvent("ai", "dialog open", "ttd");
                setAppState({ openDialog: { name: "ttd", tab: "text-to-diagram" } });
            }, icon: icon ?? brainIcon, children: [children ?? t("labels.textToDiagram"), _jsx(DropdownMenu.Item.Badge, { children: "AI" })] }) }));
};
TTDDialogTrigger.displayName = "TTDDialogTrigger";
