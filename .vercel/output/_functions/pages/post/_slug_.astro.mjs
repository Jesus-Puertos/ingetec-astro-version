import { c as createComponent, a as createAstro, b as renderComponent, r as renderTemplate, m as maybeRenderHead, u as unescapeHTML } from '../../chunks/astro/server_BcuW9ioE.mjs';
import 'kleur/colors';
import { g as getPostInfo } from '../../chunks/wp_BuWiwmHb.mjs';
import { $ as $$Layout } from '../../chunks/Layout_6i14B8FQ.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
const prerender = false;
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const slug = Astro2.params.slug;
  if (!slug) {
    return { status: 404 };
  }
  const { title, content } = await getPostInfo(slug);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="blog-container"> <div class="blogs blogpost"> <article class="post"> <h1>${title}</h1> <div>${unescapeHTML(content)}</div> <a href="#">Leer Siguiente Post</a> </article> </div> </section> ` })}`;
}, "C:/Users/226w0/dev/ingetec-astro-version/src/pages/post/[slug].astro", void 0);

const $$file = "C:/Users/226w0/dev/ingetec-astro-version/src/pages/post/[slug].astro";
const $$url = "/post/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
