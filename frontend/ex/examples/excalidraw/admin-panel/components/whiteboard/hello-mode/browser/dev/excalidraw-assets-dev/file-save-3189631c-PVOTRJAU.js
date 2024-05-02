import {
  init_define_import_meta_env
} from "./chunk-YRUDZAGT.js";
import "./chunk-F3UQABQJ.js";

// ../../node_modules/browser-fs-access/dist/file-save-3189631c.js
init_define_import_meta_env();
var e = async (e2, t = {}) => {
  Array.isArray(t) && (t = t[0]);
  const n = document.createElement("a");
  let a = e2;
  "body" in e2 && (a = await async function(e3, t2) {
    const n2 = e3.getReader(), a2 = new ReadableStream({ start: (e4) => async function t3() {
      return n2.read().then(({ done: n3, value: a3 }) => {
        if (!n3)
          return e4.enqueue(a3), t3();
        e4.close();
      });
    }() }), r2 = new Response(a2), c2 = await r2.blob();
    return n2.releaseLock(), new Blob([c2], { type: t2 });
  }(e2.body, e2.headers.get("content-type"))), n.download = t.fileName || "Untitled", n.href = URL.createObjectURL(await a);
  const r = () => {
    "function" == typeof c && c();
  }, c = t.legacySetup && t.legacySetup(r, () => c(reject), n);
  return n.addEventListener("click", () => {
    setTimeout(() => URL.revokeObjectURL(n.href), 3e4), r();
  }), n.click(), null;
};
export {
  e as default
};
//# sourceMappingURL=file-save-3189631c-PVOTRJAU.js.map
