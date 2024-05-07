import { jsx as _jsx } from "react/jsx-runtime";
import * as RadixTabs from "@radix-ui/react-tabs";
export const TTDDialogTab = ({ tab, children, ...rest }) => {
    return (_jsx(RadixTabs.Content, { ...rest, value: tab, children: children }));
};
TTDDialogTab.displayName = "TTDDialogTab";
