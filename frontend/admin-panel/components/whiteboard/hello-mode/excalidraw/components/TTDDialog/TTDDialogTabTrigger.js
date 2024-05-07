import { jsx as _jsx } from "react/jsx-runtime";
import * as RadixTabs from "@radix-ui/react-tabs";
export const TTDDialogTabTrigger = ({ children, tab, onSelect, ...rest }) => {
    return (_jsx(RadixTabs.Trigger, { value: tab, asChild: true, onSelect: onSelect, children: _jsx("button", { type: "button", className: "ttd-dialog-tab-trigger", ...rest, children: children }) }));
};
TTDDialogTabTrigger.displayName = "TTDDialogTabTrigger";
