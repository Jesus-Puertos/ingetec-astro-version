import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_C-bEWLY2.mjs';
import { manifest } from './manifest_CDwMCtzL.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about-us.astro.mjs');
const _page2 = () => import('./pages/agenda.astro.mjs');
const _page3 = () => import('./pages/contact.astro.mjs');
const _page4 = () => import('./pages/news.astro.mjs');
const _page5 = () => import('./pages/post/_slug_.astro.mjs');
const _page6 = () => import('./pages/proyects.astro.mjs');
const _page7 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about-us/index.astro", _page1],
    ["src/pages/agenda/index.astro", _page2],
    ["src/pages/contact/index.astro", _page3],
    ["src/pages/news/index.astro", _page4],
    ["src/pages/post/[slug].astro", _page5],
    ["src/pages/proyects/index.astro", _page6],
    ["src/pages/index.astro", _page7]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "5034a91a-6da9-4030-b1c0-cb9bf889888c",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
