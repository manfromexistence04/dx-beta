import { jsx as _jsx } from "react/jsx-runtime";
import * as RadixTabs from "@radix-ui/react-tabs";
export const SidebarTab = ({ tab, children, ...rest }) => {
    return (_jsx(RadixTabs.Content, { ...rest, value: tab, "data-testid": tab, children: children }));
};
SidebarTab.displayName = "SidebarTab";
