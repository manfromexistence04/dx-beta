import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from "clsx";
import { memo, useEffect, useRef, useState } from "react";
import { useDevice } from "./App";
import "./LibraryUnit.scss";
import { CheckboxItem } from "./CheckboxItem";
import { PlusIcon } from "./icons";
import { useLibraryItemSvg } from "../hooks/useLibraryItemSvg";
export const LibraryUnit = memo(({ id, elements, isPending, onClick, selected, onToggle, onDrag, svgCache, }) => {
    const ref = useRef(null);
    const svg = useLibraryItemSvg(id, elements, svgCache);
    useEffect(() => {
        const node = ref.current;
        if (!node) {
            return;
        }
        if (svg) {
            node.innerHTML = svg.outerHTML;
        }
        return () => {
            node.innerHTML = "";
        };
    }, [svg]);
    const [isHovered, setIsHovered] = useState(false);
    const isMobile = useDevice().editor.isMobile;
    const adder = isPending && (_jsx("div", { className: "library-unit__adder", children: PlusIcon }));
    return (_jsxs("div", { className: clsx("library-unit", {
            "library-unit__active": elements,
            "library-unit--hover": elements && isHovered,
            "library-unit--selected": selected,
            "library-unit--skeleton": !svg,
        }), onMouseEnter: () => setIsHovered(true), onMouseLeave: () => setIsHovered(false), children: [_jsx("div", { className: clsx("library-unit__dragger", {
                    "library-unit__pulse": !!isPending,
                }), ref: ref, draggable: !!elements, onClick: !!elements || !!isPending
                    ? (event) => {
                        if (id && event.shiftKey) {
                            onToggle(id, event);
                        }
                        else {
                            onClick(id);
                        }
                    }
                    : undefined, onDragStart: (event) => {
                    if (!id) {
                        event.preventDefault();
                        return;
                    }
                    setIsHovered(false);
                    onDrag(id, event);
                } }), adder, id && elements && (isHovered || isMobile || selected) && (_jsx(CheckboxItem, { checked: selected, onChange: (checked, event) => onToggle(id, event), className: "library-unit__checkbox" }))] }));
});
export const EmptyLibraryUnit = () => (_jsx("div", { className: "library-unit library-unit--skeleton" }));
