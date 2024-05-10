import { jsx as _jsx } from "react/jsx-runtime";
import clsx from "clsx";
import { useTunnels } from "../../context/tunnels";
import "./FooterCenter.scss";
import { useUIAppState } from "../../context/ui-appState";
const FooterCenter = ({ children }) => {
    const { FooterCenterTunnel } = useTunnels();
    const appState = useUIAppState();
    return (_jsx(FooterCenterTunnel.In, { children: _jsx("div", { className: clsx("footer-center zen-mode-transition", {
                "layer-ui__wrapper__footer-left--transition-bottom": appState.zenModeEnabled,
            }), children: children }) }));
};
export default FooterCenter;
FooterCenter.displayName = "FooterCenter";
