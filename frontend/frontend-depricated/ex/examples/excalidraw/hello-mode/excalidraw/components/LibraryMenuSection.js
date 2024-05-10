import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { memo, useEffect, useState } from "react";
import { EmptyLibraryUnit, LibraryUnit } from "./LibraryUnit";
import { useTransition } from "../hooks/useTransition";
export const LibraryMenuSectionGrid = ({ children, }) => {
    return _jsx("div", { className: "library-menu-items-container__grid", children: children });
};
export const LibraryMenuSection = memo(({ items, onItemSelectToggle, onItemDrag, isItemSelected, onClick, svgCache, itemsRenderedPerBatch, }) => {
    const [, startTransition] = useTransition();
    const [index, setIndex] = useState(0);
    useEffect(() => {
        if (index < items.length) {
            startTransition(() => {
                setIndex(index + itemsRenderedPerBatch);
            });
        }
    }, [index, items.length, startTransition, itemsRenderedPerBatch]);
    return (_jsx(_Fragment, { children: items.map((item, i) => {
            return i < index ? (_jsx(LibraryUnit, { elements: item?.elements, isPending: !item?.id && !!item?.elements, onClick: onClick, svgCache: svgCache, id: item?.id, selected: isItemSelected(item.id), onToggle: onItemSelectToggle, onDrag: onItemDrag }, item?.id ?? i)) : (_jsx(EmptyLibraryUnit, {}, i));
        }) }));
});
