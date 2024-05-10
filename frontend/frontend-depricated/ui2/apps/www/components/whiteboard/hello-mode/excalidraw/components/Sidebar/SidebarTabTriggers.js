import { jsx as _jsx } from "react/jsx-runtime";
import * as RadixTabs from "@radix-ui/react-tabs";
export const SidebarTabTriggers = ({ children, ...rest }) => {
    return (_jsx(RadixTabs.List, { className: "sidebar-triggers", ...rest, children: children }));
};
SidebarTabTriggers.displayName = "SidebarTabTriggers";
