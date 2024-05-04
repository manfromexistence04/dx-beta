import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useDevice, useExcalidrawSetAppState } from "../App";
import DropdownMenu from "../dropdownMenu/DropdownMenu";
import * as DefaultItems from "./DefaultItems";
import { UserList } from "../UserList";
import { t } from "../../i18n";
import { HamburgerMenuIcon } from "../icons";
import { withInternalFallback } from "../hoc/withInternalFallback";
import { composeEventHandlers } from "../../utils";
import { useTunnels } from "../../context/tunnels";
import { useUIAppState } from "../../context/ui-appState";
const MainMenu = Object.assign(withInternalFallback("MainMenu", ({ children, onSelect, }) => {
    const { MainMenuTunnel } = useTunnels();
    const device = useDevice();
    const appState = useUIAppState();
    const setAppState = useExcalidrawSetAppState();
    const onClickOutside = device.editor.isMobile
        ? undefined
        : () => setAppState({ openMenu: null });
    return (_jsx(MainMenuTunnel.In, { children: _jsxs(DropdownMenu, { open: appState.openMenu === "canvas", children: [_jsx(DropdownMenu.Trigger, { onToggle: () => {
                        setAppState({
                            openMenu: appState.openMenu === "canvas" ? null : "canvas",
                        });
                    }, "data-testid": "main-menu-trigger", className: "main-menu-trigger", children: HamburgerMenuIcon }), _jsxs(DropdownMenu.Content, { onClickOutside: onClickOutside, onSelect: composeEventHandlers(onSelect, () => {
                        setAppState({ openMenu: null });
                    }), children: [children, device.editor.isMobile && appState.collaborators.size > 0 && (_jsxs("fieldset", { className: "UserList-Wrapper", children: [_jsx("legend", { children: t("labels.collaborators") }), _jsx(UserList, { mobile: true, collaborators: appState.collaborators, userToFollow: appState.userToFollow?.socketId || null })] }))] })] }) }));
}), {
    Trigger: DropdownMenu.Trigger,
    Item: DropdownMenu.Item,
    ItemLink: DropdownMenu.ItemLink,
    ItemCustom: DropdownMenu.ItemCustom,
    Group: DropdownMenu.Group,
    Separator: DropdownMenu.Separator,
    DefaultItems,
});
export default MainMenu;
