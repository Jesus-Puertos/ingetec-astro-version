import 'kleur/colors';
import { g as decodeKey } from './chunks/astro/server_BcuW9ioE.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_DkDFyv-p.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/226w0/dev/ingetec-astro-version/","cacheDir":"file:///C:/Users/226w0/dev/ingetec-astro-version/node_modules/.astro/","outDir":"file:///C:/Users/226w0/dev/ingetec-astro-version/dist/","srcDir":"file:///C:/Users/226w0/dev/ingetec-astro-version/src/","publicDir":"file:///C:/Users/226w0/dev/ingetec-astro-version/public/","buildClientDir":"file:///C:/Users/226w0/dev/ingetec-astro-version/dist/client/","buildServerDir":"file:///C:/Users/226w0/dev/ingetec-astro-version/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"a[data-astro-cid-sz7xmlte]{text-decoration:none;color:#fff;&:hover{color:#f1c40f;text-decoration:underline}}html,body{margin:0;width:100%;height:100%}\n"}],"routeData":{"route":"/about-us","isIndex":true,"type":"page","pattern":"^\\/about-us\\/?$","segments":[[{"content":"about-us","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about-us/index.astro","pathname":"/about-us","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"a[data-astro-cid-sz7xmlte]{text-decoration:none;color:#fff;&:hover{color:#f1c40f;text-decoration:underline}}html,body{margin:0;width:100%;height:100%}\n"}],"routeData":{"route":"/agenda","isIndex":true,"type":"page","pattern":"^\\/agenda\\/?$","segments":[[{"content":"agenda","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/agenda/index.astro","pathname":"/agenda","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"a[data-astro-cid-sz7xmlte]{text-decoration:none;color:#fff;&:hover{color:#f1c40f;text-decoration:underline}}html,body{margin:0;width:100%;height:100%}\n"}],"routeData":{"route":"/contact","isIndex":true,"type":"page","pattern":"^\\/contact\\/?$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact/index.astro","pathname":"/contact","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"a[data-astro-cid-sz7xmlte]{text-decoration:none;color:#fff;&:hover{color:#f1c40f;text-decoration:underline}}html,body{margin:0;width:100%;height:100%}\n.pagination[data-astro-cid-xzrtoo6z]{display:flex;justify-content:center;margin-top:20px}.pagination[data-astro-cid-xzrtoo6z] a[data-astro-cid-xzrtoo6z]{margin:0 10px;padding:8px 16px;border:1px solid #ddd;text-decoration:none;color:#333}.pagination[data-astro-cid-xzrtoo6z] a[data-astro-cid-xzrtoo6z]:hover{background:#007bff;color:#fff}\n"}],"routeData":{"route":"/news","isIndex":true,"type":"page","pattern":"^\\/news\\/?$","segments":[[{"content":"news","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/news/index.astro","pathname":"/news","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"a[data-astro-cid-sz7xmlte]{text-decoration:none;color:#fff;&:hover{color:#f1c40f;text-decoration:underline}}html,body{margin:0;width:100%;height:100%}\n"}],"routeData":{"route":"/post/[slug]","isIndex":false,"type":"page","pattern":"^\\/post\\/([^/]+?)\\/?$","segments":[[{"content":"post","dynamic":false,"spread":false}],[{"content":"slug","dynamic":true,"spread":false}]],"params":["slug"],"component":"src/pages/post/[slug].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"a[data-astro-cid-sz7xmlte]{text-decoration:none;color:#fff;&:hover{color:#f1c40f;text-decoration:underline}}html,body{margin:0;width:100%;height:100%}\n"}],"routeData":{"route":"/proyects","isIndex":true,"type":"page","pattern":"^\\/proyects\\/?$","segments":[[{"content":"proyects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/proyects/index.astro","pathname":"/proyects","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"inline","content":"a[data-astro-cid-sz7xmlte]{text-decoration:none;color:#fff;&:hover{color:#f1c40f;text-decoration:underline}}html,body{margin:0;width:100%;height:100%}\np[data-astro-cid-ibghnzyf]{line-height:1.5;text-align:left}img[data-astro-cid-c7gr6yg2]{mask-image:linear-gradient(yellow 90%,transparent);width:100%;object-fit:cover}p[data-astro-cid-vftjdh54]{text-align:left;max-width:800px;margin:0 auto;margin-bottom:2rem}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/226w0/dev/ingetec-astro-version/src/pages/about-us/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/226w0/dev/ingetec-astro-version/src/pages/agenda/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/226w0/dev/ingetec-astro-version/src/pages/contact/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/226w0/dev/ingetec-astro-version/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/226w0/dev/ingetec-astro-version/src/pages/news/index.astro",{"propagation":"none","containsHead":true}],["C:/Users/226w0/dev/ingetec-astro-version/src/pages/post/[slug].astro",{"propagation":"none","containsHead":true}],["C:/Users/226w0/dev/ingetec-astro-version/src/pages/proyects/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/contact/index@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/post/[slug]@_@astro":"pages/post/_slug_.astro.mjs","\u0000@astro-page:src/pages/proyects/index@_@astro":"pages/proyects.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/agenda/index@_@astro":"pages/agenda.astro.mjs","\u0000@astro-page:src/pages/news/index@_@astro":"pages/news.astro.mjs","\u0000@astro-page:src/pages/about-us/index@_@astro":"pages/about-us.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","C:/Users/226w0/dev/ingetec-astro-version/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_BmNv0PHq.mjs","\u0000@astrojs-manifest":"manifest_CDwMCtzL.mjs","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/favicon.svg","/css/global.css","/img/about-hero.jpg","/img/f2.svg","/img/fe1.svg","/img/Ingetec-Integrantes.png","/img/Ingetec-Logo-removebg.png","/img/Ingetec-Logo.png","/img/Ingetec-navLogo-removebg.png","/img/Ingetec-navLogo.jpeg","/img/Ingetec-navLogo.png","/img/istzlogo-circular.png","/img/istzlogo.png","/img/itsz-ingeTec.jpg","/img/itsz-teq.png","/img/laguna-cartel.jpeg","/img/lagunahack-logo.png","/img/medalla_primerLugar.png","/img/medalla_segundoLugar.png","/img/menu-2.svg","/img/project-1.jpg","/img/project-2.png","/img/project-3.jpg","/js/purify.min.js","/img/favicon_io/android-chrome-192x192.png","/img/favicon_io/android-chrome-512x512.png","/img/favicon_io/apple-touch-icon.png","/img/favicon_io/favicon-16x16.png","/img/favicon_io/favicon-32x32.png","/img/favicon_io/favicon.ico","/img/favicon_io/site.webmanifest","/img/integrantes/avatar-1.png","/img/integrantes/avatar-2.png","/img/integrantes/avatar-3.png","/img/integrantes/IMG_5749.JPG","/img/integrantes/integrante-1.png","/img/integrantes/integrante-2.png","/img/integrantes/integrante-3.png","/img/integrantes/integrante-4.png","/img/integrantes/integrante-5.png","/img/projects/100-terminos-computacionales.png","/img/projects/2.1.1-portada.jpg","/img/projects/3.1.4.2-constancia.jpg","/img/projects/3.2.4-indautor-a.jpg","/img/projects/certificado-derechos-autor.png","/img/projects/constancia.png","/img/projects/constanciaPre.jpeg","/img/projects/reconocimiento-congreso.png"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"Zp699XYKHf5lCxdlLONeY++YbvgPaVv73OfY4rTqyYE="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
