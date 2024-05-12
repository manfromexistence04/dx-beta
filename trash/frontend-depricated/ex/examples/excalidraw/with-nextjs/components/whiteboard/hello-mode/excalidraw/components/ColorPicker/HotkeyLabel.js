import { jsxs as _jsxs } from "react/jsx-runtime";
import { getContrastYIQ } from "./colorPickerUtils";
const HotkeyLabel = ({ color, keyLabel, isCustomColor = false, isShade = false, }) => {
    return (_jsxs("div", { className: "color-picker__button__hotkey-label", style: {
            color: getContrastYIQ(color, isCustomColor),
        }, children: [isShade && "⇧", keyLabel] }));
};
export default HotkeyLabel;
