import { jsx as _jsx } from "react/jsx-runtime";
import * as RadixTabs from "@radix-ui/react-tabs";
import { useRef } from "react";
import { useExcalidrawSetAppState } from "../App";
import { isMemberOf } from "../../utils";
const TTDDialogTabs = (props) => {
    const setAppState = useExcalidrawSetAppState();
    const rootRef = useRef(null);
    const minHeightRef = useRef(0);
    return (_jsx(RadixTabs.Root, { ref: rootRef, className: "ttd-dialog-tabs-root", value: props.tab, onValueChange: (
        // at least in test enviros, `tab` can be `undefined`
        tab) => {
            if (!tab) {
                return;
            }
            const modalContentNode = rootRef.current?.closest(".Modal__content");
            if (modalContentNode) {
                const currHeight = modalContentNode.offsetHeight || 0;
                if (currHeight > minHeightRef.current) {
                    minHeightRef.current = currHeight;
                    modalContentNode.style.minHeight = `min(${minHeightRef.current}px, 100%)`;
                }
            }
            if (props.dialog === "settings" &&
                isMemberOf(["text-to-diagram", "diagram-to-code"], tab)) {
                setAppState({
                    openDialog: { name: props.dialog, tab, source: "settings" },
                });
            }
            else if (props.dialog === "ttd" &&
                isMemberOf(["text-to-diagram", "mermaid"], tab)) {
                setAppState({
                    openDialog: { name: props.dialog, tab },
                });
            }
        }, children: props.children }));
};
TTDDialogTabs.displayName = "TTDDialogTabs";
export default TTDDialogTabs;
