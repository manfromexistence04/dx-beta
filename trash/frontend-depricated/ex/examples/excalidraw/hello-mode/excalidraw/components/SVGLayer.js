import { jsx as _jsx } from "react/jsx-runtime";
import { useEffect, useRef } from "react";
import "./SVGLayer.scss";
export const SVGLayer = ({ trails }) => {
    const svgRef = useRef(null);
    useEffect(() => {
        if (svgRef.current) {
            for (const trail of trails) {
                trail.start(svgRef.current);
            }
        }
        return () => {
            for (const trail of trails) {
                trail.stop();
            }
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, trails);
    return (_jsx("div", { className: "SVGLayer", children: _jsx("svg", { ref: svgRef }) }));
};
