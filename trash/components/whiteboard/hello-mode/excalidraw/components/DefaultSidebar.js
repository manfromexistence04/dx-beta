import { createElement as _createElement } from "react";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from "clsx";
import { DEFAULT_SIDEBAR, LIBRARY_SIDEBAR_TAB } from "../constants";
import { useTunnels } from "../context/tunnels";
import { useUIAppState } from "../context/ui-appState";
import { t } from "../i18n";
import { composeEventHandlers } from "../utils";
import { useExcalidrawSetAppState } from "./App";
import { withInternalFallback } from "./hoc/withInternalFallback";
import { LibraryMenu } from "./LibraryMenu";
import { Sidebar } from "./Sidebar/Sidebar";
const DefaultSidebarTrigger = withInternalFallback("DefaultSidebarTrigger", (props) => {
    const { DefaultSidebarTriggerTunnel } = useTunnels();
    return (_jsx(DefaultSidebarTriggerTunnel.In, { children: _jsx(Sidebar.Trigger, { ...props, className: "default-sidebar-trigger", name: DEFAULT_SIDEBAR.name }) }));
});
DefaultSidebarTrigger.displayName = "DefaultSidebarTrigger";
const DefaultTabTriggers = ({ children, ...rest }) => {
    const { DefaultSidebarTabTriggersTunnel } = useTunnels();
    return (_jsx(DefaultSidebarTabTriggersTunnel.In, { children: _jsx(Sidebar.TabTriggers, { ...rest, children: children }) }));
};
DefaultTabTriggers.displayName = "DefaultTabTriggers";
export const DefaultSidebar = Object.assign(withInternalFallback("DefaultSidebar", ({ children, className, onDock, docked, ...rest }) => {
    const appState = useUIAppState();
    const setAppState = useExcalidrawSetAppState();
    const { DefaultSidebarTabTriggersTunnel } = useTunnels();
    return (_createElement(Sidebar, { ...rest, name: "default", key: "default", className: clsx("default-sidebar", className), docked: docked ?? appState.defaultSidebarDockedPreference, onDock: 
        // `onDock=false` disables docking.
        // if `docked` passed, but no onDock passed, disable manual docking.
        onDock === false || (!onDock && docked != null)
            ? undefined
            : // compose to allow the host app to listen on default behavior
                composeEventHandlers(onDock, (docked) => {
                    setAppState({ defaultSidebarDockedPreference: docked });
                }) },
        _jsxs(Sidebar.Tabs, { children: [_jsxs(Sidebar.Header, { children: [rest.__fallback && (_jsx("div", { style: {
                                color: "var(--color-primary)",
                                fontSize: "1.2em",
                                fontWeight: "bold",
                                textOverflow: "ellipsis",
                                overflow: "hidden",
                                whiteSpace: "nowrap",
                                paddingRight: "1em",
                            }, children: t("toolBar.library") })), _jsx(DefaultSidebarTabTriggersTunnel.Out, {})] }), _jsx(Sidebar.Tab, { tab: LIBRARY_SIDEBAR_TAB, children: _jsx(LibraryMenu, {}) }), children] })));
}), {
    Trigger: DefaultSidebarTrigger,
    TabTriggers: DefaultTabTriggers,
});
