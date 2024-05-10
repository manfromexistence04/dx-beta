import { jsx as _jsx } from "react/jsx-runtime";
import React from "react";
import "./Spinner.scss";
const Spinner = ({ size = "1em", circleWidth = 8, synchronized = false, }) => {
    const mountTime = React.useRef(Date.now());
    const mountDelay = -(mountTime.current % 1600);
    return (_jsx("div", { className: "Spinner", children: _jsx("svg", { viewBox: "0 0 100 100", style: {
                width: size,
                height: size,
                // fix for remounting causing spinner flicker
                ["--spinner-delay"]: synchronized ? `${mountDelay}ms` : 0,
            }, children: _jsx("circle", { cx: "50", cy: "50", r: 50 - circleWidth / 2, strokeWidth: circleWidth, fill: "none", strokeMiterlimit: "10" }) }) }));
};
export default Spinner;
