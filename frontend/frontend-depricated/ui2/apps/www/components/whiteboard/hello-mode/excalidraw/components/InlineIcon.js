import { jsx as _jsx } from "react/jsx-runtime";
export const InlineIcon = ({ icon }) => {
    return (_jsx("span", { style: {
            width: "1em",
            margin: "0 0.5ex 0 0.5ex",
            display: "inline-block",
            lineHeight: 0,
            verticalAlign: "middle",
        }, children: icon }));
};
