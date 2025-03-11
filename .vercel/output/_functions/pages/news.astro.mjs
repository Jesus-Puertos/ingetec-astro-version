import { c as createComponent, a as createAstro, m as maybeRenderHead, d as addAttribute, u as unescapeHTML, r as renderTemplate, b as renderComponent } from '../chunks/astro/server_BcuW9ioE.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$Layout } from '../chunks/Layout_6i14B8FQ.mjs';
import { a as getLatestPost } from '../chunks/wp_BuWiwmHb.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$BlogPost = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BlogPost;
  const { title, excerpt, featuredImage, date, slug } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div> ${renderTemplate`<div class="post"> <img${addAttribute(featuredImage, "src")} alt="hola"> <h3>${title}</h3> <p class="">${unescapeHTML(excerpt)}</p> <a${addAttribute(`/post/${slug}`, "href")}>Leer más</a> </div>`} </div>`;
}, "C:/Users/226w0/dev/ingetec-astro-version/src/components/BlogPost.astro", void 0);

const $$Categories = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="cate"> <h2>Categorias</h2> <hr> <a href="#">Ponencias</a> <hr> <a href="#">Publicaciones</a> <hr> <a href="#">Investigación</a> <hr> <a href="#">Desarrollo</a> <hr> <a href="#">Eventos</a> <hr> </div>`;
}, "C:/Users/226w0/dev/ingetec-astro-version/src/components/Categories.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const url = new URL(Astro2.request.url);
  const currentPage = Number(url.searchParams.get("page")) || 1;
  const perPage = 3;
  const posts = await getLatestPost({ page: currentPage, perPage });
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Noticias de Ingetec", "data-astro-cid-xzrtoo6z": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="about-home" data-astro-cid-xzrtoo6z> <h2 data-astro-cid-xzrtoo6z>Noticias <span class="title-blue" data-astro-cid-xzrtoo6z>INGE</span>TEC</h2> </section> <section class="blog-container" data-astro-cid-xzrtoo6z> <div class="blogs" data-astro-cid-xzrtoo6z> ${posts.map((post) => renderTemplate`${renderComponent($$result2, "BlogPost", $$BlogPost, { ...post, "data-astro-cid-xzrtoo6z": true })}`)} <div class="pagination" data-astro-cid-xzrtoo6z> ${currentPage > 1 && renderTemplate`<a${addAttribute(`?page=${currentPage - 1}`, "href")} class="prev" data-astro-cid-xzrtoo6z>Anterior</a>`} <span data-astro-cid-xzrtoo6z>Página ${currentPage}</span> ${posts.length === perPage && renderTemplate`<a${addAttribute(`?page=${currentPage + 1}`, "href")} class="next" data-astro-cid-xzrtoo6z>Siguiente</a>`} </div> </div> ${renderComponent($$result2, "Categories", $$Categories, { "data-astro-cid-xzrtoo6z": true })} </section>  ` })} `;
}, "C:/Users/226w0/dev/ingetec-astro-version/src/pages/news/index.astro", void 0);

const $$file = "C:/Users/226w0/dev/ingetec-astro-version/src/pages/news/index.astro";
const $$url = "/news";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
