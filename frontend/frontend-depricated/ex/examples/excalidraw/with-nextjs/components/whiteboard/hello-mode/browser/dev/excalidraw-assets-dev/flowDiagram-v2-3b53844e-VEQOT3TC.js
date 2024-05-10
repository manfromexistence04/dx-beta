import {
  flowRendererV2,
  flowStyles
} from "./chunk-FH34AXGM.js";
import {
  flowDb,
  parser$1
} from "./chunk-5LGVP34G.js";
import "./chunk-WSS3RTXW.js";
import "./chunk-OYJWL5N2.js";
import "./chunk-TNXD2RPN.js";
import "./chunk-7K4AA6J5.js";
import "./chunk-QQT3OOIF.js";
import {
  require_dayjs_min,
  require_dist,
  require_purify,
  setConfig
} from "./chunk-UALFRALV.js";
import {
  init_define_import_meta_env
} from "./chunk-YRUDZAGT.js";
import {
  __toESM
} from "./chunk-F3UQABQJ.js";

// ../../node_modules/mermaid/dist/flowDiagram-v2-3b53844e.js
init_define_import_meta_env();
var import_dayjs = __toESM(require_dayjs_min(), 1);
var import_sanitize_url = __toESM(require_dist(), 1);
var import_dompurify = __toESM(require_purify(), 1);
var diagram = {
  parser: parser$1,
  db: flowDb,
  renderer: flowRendererV2,
  styles: flowStyles,
  init: (cnf) => {
    if (!cnf.flowchart) {
      cnf.flowchart = {};
    }
    cnf.flowchart.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
    setConfig({ flowchart: { arrowMarkerAbsolute: cnf.arrowMarkerAbsolute } });
    flowRendererV2.setConf(cnf.flowchart);
    flowDb.clear();
    flowDb.setGen("gen-2");
  }
};
export {
  diagram
};
//# sourceMappingURL=flowDiagram-v2-3b53844e-VEQOT3TC.js.map
