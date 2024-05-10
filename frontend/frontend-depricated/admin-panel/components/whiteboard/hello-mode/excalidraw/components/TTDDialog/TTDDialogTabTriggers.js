import { jsx as _jsx } from "react/jsx-runtime";
import * as RadixTabs from "@radix-ui/react-tabs";
export const TTDDialogTabTriggers = ({ children, ...rest }) => {
    return (_jsx(RadixTabs.List, { className: "ttd-dialog-triggers", ...rest, children: children }));
};
TTDDialogTabTriggers.displayName = "TTDDialogTabTriggers";
