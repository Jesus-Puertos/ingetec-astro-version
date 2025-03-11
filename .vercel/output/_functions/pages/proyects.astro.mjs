import { c as createComponent, b as renderComponent, r as renderTemplate } from '../chunks/astro/server_BcuW9ioE.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_6i14B8FQ.mjs';
import { $ as $$HeroForPage } from '../chunks/HeroForPage_BKlOaio6.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Proyectos" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroForPage", $$HeroForPage, { "title": "Sitio en", "highlight": "Construccion " })} ` })}`;
}, "C:/Users/226w0/dev/ingetec-astro-version/src/pages/proyects/index.astro", void 0);

const $$file = "C:/Users/226w0/dev/ingetec-astro-version/src/pages/proyects/index.astro";
const $$url = "/proyects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
