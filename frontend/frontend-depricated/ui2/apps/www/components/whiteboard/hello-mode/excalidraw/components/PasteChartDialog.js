import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import oc from "open-color";
import React, { useLayoutEffect, useRef, useState } from "react";
import { trackEvent } from "../analytics";
import { renderSpreadsheet } from "../charts";
import { t } from "../i18n";
import { exportToSvg } from "../scene/export";
import { useApp } from "./App";
import { Dialog } from "./Dialog";
import "./PasteChartDialog.scss";
const ChartPreviewBtn = (props) => {
    const previewRef = useRef(null);
    const [chartElements, setChartElements] = useState(null);
    useLayoutEffect(() => {
        if (!props.spreadsheet) {
            return;
        }
        const elements = renderSpreadsheet(props.chartType, props.spreadsheet, 0, 0);
        setChartElements(elements);
        let svg;
        const previewNode = previewRef.current;
        (async () => {
            svg = await exportToSvg(elements, {
                exportBackground: false,
                viewBackgroundColor: oc.white,
            }, null);
            svg.querySelector(".style-fonts")?.remove();
            previewNode.replaceChildren();
            previewNode.appendChild(svg);
            if (props.selected) {
                previewNode.parentNode.focus();
            }
        })();
        return () => {
            previewNode.replaceChildren();
        };
    }, [props.spreadsheet, props.chartType, props.selected]);
    return (_jsx("button", { className: "ChartPreview", onClick: () => {
            if (chartElements) {
                props.onClick(props.chartType, chartElements);
            }
        }, children: _jsx("div", { ref: previewRef }) }));
};
export const PasteChartDialog = ({ setAppState, appState, onClose, }) => {
    const { onInsertElements } = useApp();
    const handleClose = React.useCallback(() => {
        if (onClose) {
            onClose();
        }
    }, [onClose]);
    const handleChartClick = (chartType, elements) => {
        onInsertElements(elements);
        trackEvent("paste", "chart", chartType);
        setAppState({
            currentChartType: chartType,
            pasteDialog: {
                shown: false,
                data: null,
            },
        });
    };
    return (_jsx(Dialog, { size: "small", onCloseRequest: handleClose, title: t("labels.pasteCharts"), className: "PasteChartDialog", autofocus: false, children: _jsxs("div", { className: "container", children: [_jsx(ChartPreviewBtn, { chartType: "bar", spreadsheet: appState.pasteDialog.data, selected: appState.currentChartType === "bar", onClick: handleChartClick }), _jsx(ChartPreviewBtn, { chartType: "line", spreadsheet: appState.pasteDialog.data, selected: appState.currentChartType === "line", onClick: handleChartClick })] }) }));
};
