import React from "react";
import tunnel from "tunnel-rat";
export const TunnelsContext = React.createContext(null);
export const useTunnels = () => React.useContext(TunnelsContext);
export const useInitializeTunnels = () => {
    return React.useMemo(() => {
        return {
            MainMenuTunnel: tunnel(),
            WelcomeScreenMenuHintTunnel: tunnel(),
            WelcomeScreenToolbarHintTunnel: tunnel(),
            WelcomeScreenHelpHintTunnel: tunnel(),
            WelcomeScreenCenterTunnel: tunnel(),
            FooterCenterTunnel: tunnel(),
            DefaultSidebarTriggerTunnel: tunnel(),
            DefaultSidebarTabTriggersTunnel: tunnel(),
            OverwriteConfirmDialogTunnel: tunnel(),
            TTDDialogTriggerTunnel: tunnel(),
            jotaiScope: Symbol(),
        };
    }, []);
};
