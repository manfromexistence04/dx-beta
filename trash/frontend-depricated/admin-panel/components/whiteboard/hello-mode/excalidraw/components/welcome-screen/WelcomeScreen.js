import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Center } from "./WelcomeScreen.Center";
import { MenuHint, ToolbarHint, HelpHint } from "./WelcomeScreen.Hints";
import "./WelcomeScreen.scss";
const WelcomeScreen = (props) => {
    return (_jsx(_Fragment, { children: props.children || (_jsxs(_Fragment, { children: [_jsx(Center, {}), _jsx(MenuHint, {}), _jsx(ToolbarHint, {}), _jsx(HelpHint, {})] })) }));
};
WelcomeScreen.displayName = "WelcomeScreen";
WelcomeScreen.Center = Center;
WelcomeScreen.Hints = { MenuHint, ToolbarHint, HelpHint };
export default WelcomeScreen;
