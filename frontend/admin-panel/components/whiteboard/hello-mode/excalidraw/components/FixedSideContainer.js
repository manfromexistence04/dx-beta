import { jsx as _jsx } from "react/jsx-runtime";
import "./FixedSideContainer.scss";
import clsx from "clsx";
export const FixedSideContainer = ({ children, side, className, }) => (_jsx("div", { className: clsx("FixedSideContainer", `FixedSideContainer_side_${side}`, className), children: children }));
