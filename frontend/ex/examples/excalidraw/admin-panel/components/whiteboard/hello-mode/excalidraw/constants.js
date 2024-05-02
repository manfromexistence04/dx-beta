import cssVariables from "./css/variables.module.scss";
import { COLOR_PALETTE } from "./colors";
export const isDarwin = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
export const isWindows = /^Win/.test(navigator.platform);
export const isAndroid = /\b(android)\b/i.test(navigator.userAgent);
export const isFirefox = "netscape" in window &&
    navigator.userAgent.indexOf("rv:") > 1 &&
    navigator.userAgent.indexOf("Gecko") > 1;
export const isChrome = navigator.userAgent.indexOf("Chrome") !== -1;
export const isSafari = !isChrome && navigator.userAgent.indexOf("Safari") !== -1;
export const isIOS = /iPad|iPhone/.test(navigator.platform) ||
    // iPadOS 13+
    (navigator.userAgent.includes("Mac") && "ontouchend" in document);
// keeping function so it can be mocked in test
export const isBrave = () => navigator.brave?.isBrave?.name === "isBrave";
export const supportsResizeObserver = typeof window !== "undefined" && "ResizeObserver" in window;
export const APP_NAME = "Excalidraw";
export const DRAGGING_THRESHOLD = 10; // px
export const LINE_CONFIRM_THRESHOLD = 8; // px
export const ELEMENT_SHIFT_TRANSLATE_AMOUNT = 5;
export const ELEMENT_TRANSLATE_AMOUNT = 1;
export const TEXT_TO_CENTER_SNAP_THRESHOLD = 30;
export const SHIFT_LOCKING_ANGLE = Math.PI / 12;
export const DEFAULT_LASER_COLOR = "red";
export const CURSOR_TYPE = {
    TEXT: "text",
    CROSSHAIR: "crosshair",
    GRABBING: "grabbing",
    GRAB: "grab",
    POINTER: "pointer",
    MOVE: "move",
    AUTO: "",
};
export const POINTER_BUTTON = {
    MAIN: 0,
    WHEEL: 1,
    SECONDARY: 2,
    TOUCH: -1,
    ERASER: 5,
};
export const POINTER_EVENTS = {
    enabled: "all",
    disabled: "none",
    // asserted as any so it can be freely assigned to React Element
    // "pointerEnvets" CSS prop
    inheritFromUI: "var(--ui-pointerEvents)",
};
export var EVENT;
(function (EVENT) {
    EVENT["COPY"] = "copy";
    EVENT["PASTE"] = "paste";
    EVENT["CUT"] = "cut";
    EVENT["KEYDOWN"] = "keydown";
    EVENT["KEYUP"] = "keyup";
    EVENT["MOUSE_MOVE"] = "mousemove";
    EVENT["RESIZE"] = "resize";
    EVENT["UNLOAD"] = "unload";
    EVENT["FOCUS"] = "focus";
    EVENT["BLUR"] = "blur";
    EVENT["DRAG_OVER"] = "dragover";
    EVENT["DROP"] = "drop";
    EVENT["GESTURE_END"] = "gestureend";
    EVENT["BEFORE_UNLOAD"] = "beforeunload";
    EVENT["GESTURE_START"] = "gesturestart";
    EVENT["GESTURE_CHANGE"] = "gesturechange";
    EVENT["POINTER_MOVE"] = "pointermove";
    EVENT["POINTER_DOWN"] = "pointerdown";
    EVENT["POINTER_UP"] = "pointerup";
    EVENT["STATE_CHANGE"] = "statechange";
    EVENT["WHEEL"] = "wheel";
    EVENT["TOUCH_START"] = "touchstart";
    EVENT["TOUCH_END"] = "touchend";
    EVENT["HASHCHANGE"] = "hashchange";
    EVENT["VISIBILITY_CHANGE"] = "visibilitychange";
    EVENT["SCROLL"] = "scroll";
    // custom events
    EVENT["EXCALIDRAW_LINK"] = "excalidraw-link";
    EVENT["MENU_ITEM_SELECT"] = "menu.itemSelect";
    EVENT["MESSAGE"] = "message";
    EVENT["FULLSCREENCHANGE"] = "fullscreenchange";
})(EVENT || (EVENT = {}));
export const YOUTUBE_STATES = {
    UNSTARTED: -1,
    ENDED: 0,
    PLAYING: 1,
    PAUSED: 2,
    BUFFERING: 3,
    CUED: 5,
};
export const ENV = {
    TEST: "test",
    DEVELOPMENT: "development",
};
export const CLASSES = {
    SHAPE_ACTIONS_MENU: "App-menu__left",
};
// 1-based in case we ever do `if(element.fontFamily)`
export const FONT_FAMILY = {
    Virgil: 1,
    Helvetica: 2,
    Cascadia: 3,
    Assistant: 4,
};
export const THEME = {
    LIGHT: "light",
    DARK: "dark",
};
export const FRAME_STYLE = {
    strokeColor: "#bbb",
    strokeWidth: 2,
    strokeStyle: "solid",
    fillStyle: "solid",
    roughness: 0,
    roundness: null,
    backgroundColor: "transparent",
    radius: 8,
    nameOffsetY: 3,
    nameColorLightTheme: "#999999",
    nameColorDarkTheme: "#7a7a7a",
    nameFontSize: 14,
    nameLineHeight: 1.25,
};
export const WINDOWS_EMOJI_FALLBACK_FONT = "Segoe UI Emoji";
export const MIN_FONT_SIZE = 1;
export const DEFAULT_FONT_SIZE = 20;
export const DEFAULT_FONT_FAMILY = FONT_FAMILY.Virgil;
export const DEFAULT_TEXT_ALIGN = "left";
export const DEFAULT_VERTICAL_ALIGN = "top";
export const DEFAULT_VERSION = "{version}";
export const DEFAULT_TRANSFORM_HANDLE_SPACING = 2;
export const SIDE_RESIZING_THRESHOLD = 2 * DEFAULT_TRANSFORM_HANDLE_SPACING;
// a small epsilon to make side resizing always take precedence
// (avoids an increase in renders and changes to tests)
const EPSILON = 0.00001;
export const DEFAULT_COLLISION_THRESHOLD = 2 * SIDE_RESIZING_THRESHOLD - EPSILON;
export const COLOR_WHITE = "#ffffff";
export const COLOR_CHARCOAL_BLACK = "#1e1e1e";
// keep this in sync with CSS
export const COLOR_VOICE_CALL = "#a2f1a6";
export const CANVAS_ONLY_ACTIONS = ["selectAll"];
export const GRID_SIZE = 20; // TODO make it configurable?
export const IMAGE_MIME_TYPES = {
    svg: "image/svg+xml",
    png: "image/png",
    jpg: "image/jpeg",
    gif: "image/gif",
    webp: "image/webp",
    bmp: "image/bmp",
    ico: "image/x-icon",
    avif: "image/avif",
    jfif: "image/jfif",
};
export const ALLOWED_PASTE_MIME_TYPES = ["text/plain", "text/html"];
export const MIME_TYPES = {
    json: "application/json",
    // excalidraw data
    excalidraw: "application/vnd.excalidraw+json",
    excalidrawlib: "application/vnd.excalidrawlib+json",
    // image-encoded excalidraw data
    "excalidraw.svg": "image/svg+xml",
    "excalidraw.png": "image/png",
    // binary
    binary: "application/octet-stream",
    // image
    ...IMAGE_MIME_TYPES,
};
export const EXPORT_IMAGE_TYPES = {
    png: "png",
    svg: "svg",
    clipboard: "clipboard",
};
export const EXPORT_DATA_TYPES = {
    excalidraw: "excalidraw",
    excalidrawClipboard: "excalidraw/clipboard",
    excalidrawLibrary: "excalidrawlib",
    excalidrawClipboardWithAPI: "excalidraw-api/clipboard",
};
export const EXPORT_SOURCE = window.EXCALIDRAW_EXPORT_SOURCE || window.location.origin;
// time in milliseconds
export const IMAGE_RENDER_TIMEOUT = 500;
export const TAP_TWICE_TIMEOUT = 300;
export const TOUCH_CTX_MENU_TIMEOUT = 500;
export const TITLE_TIMEOUT = 10000;
export const VERSION_TIMEOUT = 30000;
export const SCROLL_TIMEOUT = 100;
export const ZOOM_STEP = 0.1;
export const MIN_ZOOM = 0.1;
export const MAX_ZOOM = 30.0;
export const HYPERLINK_TOOLTIP_DELAY = 300;
// Report a user inactive after IDLE_THRESHOLD milliseconds
export const IDLE_THRESHOLD = 60_000;
// Report a user active each ACTIVE_THRESHOLD milliseconds
export const ACTIVE_THRESHOLD = 3_000;
export const THEME_FILTER = cssVariables.themeFilter;
export const URL_QUERY_KEYS = {
    addLibrary: "addLibrary",
};
export const URL_HASH_KEYS = {
    addLibrary: "addLibrary",
};
export const DEFAULT_UI_OPTIONS = {
    canvasActions: {
        changeViewBackgroundColor: true,
        clearCanvas: true,
        export: { saveFileToDisk: true },
        loadScene: true,
        saveToActiveFile: true,
        toggleTheme: null,
        saveAsImage: true,
    },
    tools: {
        image: true,
    },
};
// breakpoints
// -----------------------------------------------------------------------------
// md screen
export const MQ_MAX_WIDTH_PORTRAIT = 730;
export const MQ_MAX_WIDTH_LANDSCAPE = 1000;
export const MQ_MAX_HEIGHT_LANDSCAPE = 500;
// sidebar
export const MQ_RIGHT_SIDEBAR_MIN_WIDTH = 1229;
// -----------------------------------------------------------------------------
export const LIBRARY_SIDEBAR_WIDTH = parseInt(cssVariables.rightSidebarWidth);
export const MAX_DECIMALS_FOR_SVG_EXPORT = 2;
export const EXPORT_SCALES = [1, 2, 3];
export const DEFAULT_EXPORT_PADDING = 10; // px
export const DEFAULT_MAX_IMAGE_WIDTH_OR_HEIGHT = 1440;
export const MAX_ALLOWED_FILE_BYTES = 2 * 1024 * 1024;
export const SVG_NS = "http://www.w3.org/2000/svg";
export const ENCRYPTION_KEY_BITS = 128;
export const VERSIONS = {
    excalidraw: 2,
    excalidrawLibrary: 2,
};
export const BOUND_TEXT_PADDING = 5;
export const ARROW_LABEL_WIDTH_FRACTION = 0.7;
export const ARROW_LABEL_FONT_SIZE_TO_MIN_WIDTH_RATIO = 11;
export const VERTICAL_ALIGN = {
    TOP: "top",
    MIDDLE: "middle",
    BOTTOM: "bottom",
};
export const TEXT_ALIGN = {
    LEFT: "left",
    CENTER: "center",
    RIGHT: "right",
};
export const ELEMENT_READY_TO_ERASE_OPACITY = 20;
// Radius represented as 25% of element's largest side (width/height).
// Used for LEGACY and PROPORTIONAL_RADIUS algorithms, or when the element is
// below the cutoff size.
export const DEFAULT_PROPORTIONAL_RADIUS = 0.25;
// Fixed radius for the ADAPTIVE_RADIUS algorithm. In pixels.
export const DEFAULT_ADAPTIVE_RADIUS = 32;
// roundness type (algorithm)
export const ROUNDNESS = {
    // Used for legacy rounding (rectangles), which currently works the same
    // as PROPORTIONAL_RADIUS, but we need to differentiate for UI purposes and
    // forwards-compat.
    LEGACY: 1,
    // Used for linear elements & diamonds
    PROPORTIONAL_RADIUS: 2,
    // Current default algorithm for rectangles, using fixed pixel radius.
    // It's working similarly to a regular border-radius, but attemps to make
    // radius visually similar across differnt element sizes, especially
    // very large and very small elements.
    //
    // NOTE right now we don't allow configuration and use a constant radius
    // (see DEFAULT_ADAPTIVE_RADIUS constant)
    ADAPTIVE_RADIUS: 3,
};
export const ROUGHNESS = {
    architect: 0,
    artist: 1,
    cartoonist: 2,
};
export const STROKE_WIDTH = {
    thin: 1,
    bold: 2,
    extraBold: 4,
};
export const DEFAULT_ELEMENT_PROPS = {
    strokeColor: COLOR_PALETTE.black,
    backgroundColor: COLOR_PALETTE.transparent,
    fillStyle: "solid",
    strokeWidth: 2,
    strokeStyle: "solid",
    roughness: ROUGHNESS.artist,
    opacity: 100,
    locked: false,
};
export const LIBRARY_SIDEBAR_TAB = "library";
export const DEFAULT_SIDEBAR = {
    name: "default",
    defaultTab: LIBRARY_SIDEBAR_TAB,
};
export const LIBRARY_DISABLED_TYPES = new Set([
    "iframe",
    "embeddable",
    "image",
]);
// use these constants to easily identify reference sites
export const TOOL_TYPE = {
    selection: "selection",
    rectangle: "rectangle",
    diamond: "diamond",
    ellipse: "ellipse",
    arrow: "arrow",
    line: "line",
    freedraw: "freedraw",
    text: "text",
    image: "image",
    eraser: "eraser",
    hand: "hand",
    frame: "frame",
    magicframe: "magicframe",
    embeddable: "embeddable",
    laser: "laser",
};
export const EDITOR_LS_KEYS = {
    OAI_API_KEY: "excalidraw-oai-api-key",
    // legacy naming (non)scheme
    MERMAID_TO_EXCALIDRAW: "mermaid-to-excalidraw",
    PUBLISH_LIBRARY: "publish-library-data",
};
/**
 * not translated as this is used only in public, stateless API as default value
 * where filename is optional and we can't retrieve name from app state
 */
export const DEFAULT_FILENAME = "Untitled";
