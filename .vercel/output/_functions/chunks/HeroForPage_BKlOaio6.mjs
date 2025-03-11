import { c as createComponent, a as createAstro, m as maybeRenderHead, r as renderTemplate } from './astro/server_BcuW9ioE.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$HeroForPage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$HeroForPage;
  const { title, highlight } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="about-home"> <h2>${title} <span class="title-blue">${highlight}</span>TEC</h2> </section>`;
}, "C:/Users/226w0/dev/ingetec-astro-version/src/components/HeroForPage.astro", void 0);

export { $$HeroForPage as $ };
