// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"elbaT":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "4943a1030f289648";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"gNc1f":[function(require,module,exports,__globalThis) {
var _styleScss = require("./styles/style.scss");
const loginTemplate = `
  <h2>\u{1F510} Login</h2>
  <form id="login-form">
    <div class="error-message" id="login-error"></div>
    <input type="email" id="login-email" placeholder="Email" required />
    <input type="password" id="login-password" placeholder="Password" required />
    <button type="submit">Login</button>
  </form>
  <p>Don't have an account? <a href="#" data-link="register">Register</a></p>
`;
const registerTemplate = `
  <h2>\u{1F4DD} Register</h2>
  <form id="register-form">
    <div class="error-message" id="register-error"></div>
    <input type="text" id="register-name" placeholder="Name" required />
    <input type="email" id="register-email" placeholder="Email" required />
    <input type="password" id="register-password" placeholder="Password" required />
    <select id="register-role" required>
      <option value="">Select Role</option>
      <option value="admin">Admin</option>
      <option value="worker">Worker</option>
    </select>
    <button type="submit">Register</button>
  </form>
  <p>Already have an account? <a href="#" data-link="login">Login</a></p>
`;
const dashboardTemplate = `
  <h2>\u{1F4CB} Work Shifts Dashboard</h2>

  <div id="shift-actions" class="hidden">
    <button id="add-shift-btn">\u{2795} Add New Shift</button>
  </div>

  <div id="shift-list">Loading shifts...</div>

  <div id="overlay" class="overlay hidden"></div>

  <div id="add-popup" class="popup hidden">
    <form id="add-form">
      <h3>Add New Shift</h3>
      <input type="date" id="new-date" required />
      <input type="time" id="new-start" required />
      <input type="time" id="new-end" required />
      <input type="text" id="new-assigned" placeholder="User ID" required />
      <button type="submit">Create</button>
      <button type="button" id="cancel-add">Cancel</button>
    </form>
  </div>

  <div id="edit-popup" class="popup hidden"> ... </div>

  <p><a href="#" data-link="login">Logout</a></p>
`;
function attachLinkListeners() {
    document.querySelectorAll("[data-link]")?.forEach((el)=>{
        el.addEventListener("click", async (e)=>{
            e.preventDefault();
            const target = e.currentTarget.getAttribute("data-link");
            if (target === "login") localStorage.removeItem("token");
            if (target === "login" || target === "register" || target === "dashboard") await loadPage(target);
        });
    });
}
function showLoginError(message) {
    const errorEl = document.getElementById("login-error");
    if (errorEl) {
        errorEl.textContent = message;
        errorEl.setAttribute("style", "display: block");
    }
}
function showRegisterError(message) {
    const errorEl = document.getElementById("register-error");
    if (errorEl) {
        errorEl.textContent = message;
        errorEl.setAttribute("style", "display: block");
    }
}
const app = document.getElementById("app");
const loadPage = async (page)=>{
    if (page === "dashboard") {
        app.innerHTML = dashboardTemplate;
        attachLinkListeners();
        const shiftList = document.getElementById("shift-list");
        const token = localStorage.getItem("token");
        const popup = document.getElementById("edit-popup");
        const overlay = document.getElementById("overlay");
        if (!token) {
            shiftList.innerHTML = "<p>\u26D4 Not logged in</p>";
            return;
        }
        try {
            const res = await fetch("http://localhost:5000/api/shifts", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const shifts = await res.json();
            if (!Array.isArray(shifts)) {
                shiftList.innerHTML = "<p>\u26A0\uFE0F Failed to load shifts</p>";
                return;
            }
            if (shifts.length === 0) {
                shiftList.innerHTML = "<p>No shifts found.</p>";
                return;
            }
            const role = localStorage.getItem("role");
            shiftList.innerHTML = shifts.map((shift)=>`
        <div class="shift-card" data-id="${shift._id}">
          <p><strong>Date:</strong> ${new Date(shift.date).toLocaleDateString()}</p>
          <p><strong>Time:</strong> ${shift.startHour} - ${shift.endHour}</p>
          <p><strong>Assigned to:</strong> ${shift.assignedTo?.name || "N/A"}</p>
          <p><strong>Created by:</strong> ${shift.createdBy?.name || "N/A"}</p>
          ${role === "admin" ? `
            <button class="edit-btn">\u{270F}\u{FE0F} Edit</button>
            <button class="delete-btn">\u{1F5D1}\u{FE0F} Delete</button>
          ` : ""}
        </div>
      `).join("");
            if (role === "admin") {
                document.getElementById("shift-actions")?.classList.remove("hidden");
                const addBtn = document.getElementById("add-shift-btn");
                const addPopup = document.getElementById("add-popup");
                const editPopup = document.getElementById("edit-popup");
                const addForm = document.getElementById("add-form");
                const cancelAdd = document.getElementById("cancel-add");
                addBtn.addEventListener("click", ()=>{
                    addPopup.classList.remove("hidden");
                    overlay.classList.remove("hidden");
                    setTimeout(()=>{
                        addPopup.classList.add("show");
                        overlay.classList.add("show");
                    }, 10);
                });
                cancelAdd.addEventListener("click", ()=>{
                    addPopup.classList.remove("show");
                    overlay.classList.remove("show");
                    setTimeout(()=>{
                        addPopup.classList.add("hidden");
                        overlay.classList.add("hidden");
                    }, 300);
                });
                overlay.addEventListener("click", ()=>{
                    addPopup.classList.remove("show");
                    editPopup.classList.remove("show");
                    overlay.classList.remove("show");
                    setTimeout(()=>{
                        addPopup.classList.add("hidden");
                        editPopup.classList.add("hidden");
                        overlay.classList.add("hidden");
                    }, 300);
                });
                addForm.addEventListener("submit", async (e)=>{
                    e.preventDefault();
                    const date = document.getElementById("new-date").value;
                    const startHour = document.getElementById("new-start").value;
                    const endHour = document.getElementById("new-end").value;
                    const assignedTo = document.getElementById("new-assigned").value;
                    const token = localStorage.getItem("token");
                    try {
                        const res = await fetch("http://localhost:5000/api/shifts", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                                Authorization: `Bearer ${token}`
                            },
                            body: JSON.stringify({
                                date,
                                startHour,
                                endHour,
                                assignedTo
                            })
                        });
                        if (res.ok) await loadPage("dashboard");
                        else alert("\u274C Failed to create shift.");
                    } catch (err) {
                        console.error("\u274C Error creating shift:", err);
                    }
                });
                document.querySelectorAll(".delete-btn").forEach((btn)=>{
                    btn.addEventListener("click", async (e)=>{
                        const parent = e.currentTarget.closest(".shift-card");
                        const id = parent?.getAttribute("data-id");
                        const token = localStorage.getItem("token");
                        if (id && token) {
                            const confirmed = confirm("Are you sure you want to delete this shift?");
                            if (!confirmed) return;
                            try {
                                const res = await fetch(`http://localhost:5000/api/shifts/${id}`, {
                                    method: "DELETE",
                                    headers: {
                                        Authorization: `Bearer ${token}`
                                    }
                                });
                                if (res.ok) {
                                    parent?.remove();
                                    const remainingShifts = document.querySelectorAll(".shift-card");
                                    if (remainingShifts.length === 0) shiftList.innerHTML = "<p>No shifts found.</p>";
                                } else alert("\u274C Failed to delete shift.");
                            } catch (err) {
                                console.error("\u274C Error deleting shift:", err);
                            }
                        }
                    });
                    document.querySelectorAll(".edit-btn").forEach((btn)=>{
                        btn.addEventListener("click", (e)=>{
                            const parent = e.currentTarget.closest(".shift-card");
                            const id = parent?.getAttribute("data-id");
                            const date = parent?.querySelector("p:nth-child(1)")?.textContent?.split(": ")[1] || "";
                            const startEnd = parent?.querySelector("p:nth-child(2)")?.textContent?.split(": ")[1]?.split(" - ") || [
                                "",
                                ""
                            ];
                            const assignedTo = parent?.querySelector("p:nth-child(3)")?.textContent?.split(": ")[1] || "";
                            popup.classList.remove("hidden");
                            overlay.classList.remove("hidden");
                            setTimeout(()=>{
                                popup.classList.add("show");
                                overlay.classList.add("show");
                            }, 10);
                            document.getElementById("edit-date").value = new Date(date).toISOString().split("T")[0];
                            document.getElementById("edit-start").value = startEnd[0];
                            document.getElementById("edit-end").value = startEnd[1];
                            document.getElementById("edit-assigned").value = assignedTo;
                            popup.setAttribute("data-id", id);
                        });
                    });
                    document.getElementById("edit-form")?.addEventListener("submit", async (e)=>{
                        e.preventDefault();
                        const id = popup.getAttribute("data-id");
                        const token = localStorage.getItem("token");
                        const date = document.getElementById("edit-date").value;
                        const startHour = document.getElementById("edit-start").value;
                        const endHour = document.getElementById("edit-end").value;
                        const assignedTo = document.getElementById("edit-assigned").value;
                        try {
                            const res = await fetch(`http://localhost:5000/api/shifts/${id}`, {
                                method: "PUT",
                                headers: {
                                    "Content-Type": "application/json",
                                    Authorization: `Bearer ${token}`
                                },
                                body: JSON.stringify({
                                    date,
                                    startHour,
                                    endHour,
                                    assignedTo
                                })
                            });
                            if (res.ok) {
                                popup.classList.remove("show");
                                overlay.classList.remove("show");
                                setTimeout(()=>{
                                    popup.classList.add("hidden");
                                    overlay.classList.add("hidden");
                                }, 300);
                                await loadPage("dashboard");
                            } else alert("Failed to update shift.");
                        } catch (err) {
                            console.error("\u274C Error updating shift:", err);
                        }
                    });
                    document.getElementById("cancel-edit")?.addEventListener("click", ()=>{
                        popup.classList.remove("show");
                        overlay.classList.remove("show");
                        setTimeout(()=>{
                            popup.classList.add("hidden");
                            overlay.classList.add("hidden");
                        }, 300);
                    });
                });
                overlay.addEventListener("click", ()=>{
                    popup.classList.remove("show");
                    overlay.classList.remove("show");
                    setTimeout(()=>{
                        popup.classList.add("hidden");
                        overlay.classList.add("hidden");
                    }, 300);
                });
            }
        } catch (err) {
            console.error("\u274C Failed to fetch shifts:", err);
            shiftList.innerHTML = "<p>\uD83D\uDEA8 Error loading shifts</p>";
        }
    }
    if (page === "login") {
        app.innerHTML = loginTemplate;
        const form = document.getElementById("login-form");
        form?.addEventListener("submit", async (e)=>{
            e.preventDefault();
            const email = document.getElementById("login-email").value;
            const password = document.getElementById("login-password").value;
            try {
                const res = await fetch("http://localhost:5000/api/auth/login", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        email,
                        password
                    })
                });
                const data = await res.json();
                if (!res.ok) {
                    showLoginError(data.message || "Login failed");
                    return;
                }
                localStorage.setItem("token", data.token);
                localStorage.setItem("role", data.user.role);
                await loadPage("dashboard");
            } catch (err) {
                console.error("\u274C Error during login:", err);
                showLoginError("Something went wrong. Please try again.");
            }
        });
    }
    if (page === "register") {
        app.innerHTML = registerTemplate;
        const form = document.getElementById("register-form");
        form?.addEventListener("submit", async (e)=>{
            e.preventDefault();
            const name = document.getElementById("register-name").value;
            const email = document.getElementById("register-email").value;
            const password = document.getElementById("register-password").value;
            const role = document.getElementById("register-role").value;
            try {
                const res = await fetch("http://localhost:5000/api/auth/register", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({
                        name,
                        email,
                        password,
                        role
                    })
                });
                const data = await res.json();
                if (!res.ok) {
                    showRegisterError(data.message || "Registration failed");
                    return;
                }
                console.log("\u2705 Registered successfully:", data);
                await loadPage("login");
            } catch (err) {
                console.error("\u274C Error during registration:", err);
                showRegisterError("Something went wrong. Please try again.");
            }
        });
    }
    document.querySelectorAll("[data-link]")?.forEach((el)=>{
        el.addEventListener("click", async (e)=>{
            e.preventDefault();
            const target = e.currentTarget.getAttribute("data-link");
            if (target === "login") localStorage.removeItem("token");
            if (target === "login" || target === "register") loadPage(target);
        });
    });
};
(async ()=>{
    await loadPage("login");
})();

},{"./styles/style.scss":"9v7yy"}],"9v7yy":[function() {},{}]},["elbaT","gNc1f"], "gNc1f", "parcelRequire10c2", {})

//# sourceMappingURL=frontend.0f289648.js.map
