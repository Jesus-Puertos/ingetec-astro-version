import { c as createComponent, m as maybeRenderHead, r as renderTemplate, b as renderComponent } from '../chunks/astro/server_BcuW9ioE.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_6i14B8FQ.mjs';
import 'clsx';
import { $ as $$HeroForPage } from '../chunks/HeroForPage_BKlOaio6.mjs';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="about-container"> <div class="about-img"> <img src="./img/integrantes/IMG_5749.JPG" alt="Integrantes de INGETEC"> </div> <div class="about-text"> <h2>Un Poco De Nosotros</h2> <p class="justify">
INGETEC es el Cuerpo Académico del 
      Instituto Tecnológico Superior de Zongolica. Nos dedicamos a la investigación, 
      el desarrollo tecnológico y la innovación en el área de ingeniería y computación, 
      promoviendo el conocimiento y la formación de futuros profesionales altamente capacitados.
</p> <div class="about-fe hidden"> <img src="./img/fe1.svg" alt="Investigación"> <div class="fe-text"> <h5>Compromiso con la investigación</h5> <p>
Buscamos generar conocimiento a través de proyectos de investigación aplicada 
          que contribuyan al desarrollo académico y tecnológico en nuestra comunidad.
</p> </div> </div> <div class="about-fe hidden"> <img src="./img/f2.svg" alt="Innovación tecnológica"> <div class="fe-text"> <h5>Innovación y desarrollo tecnológico</h5> <p>
Fomentamos la implementación de soluciones tecnológicas avanzadas en 
          distintos sectores, promoviendo el uso de herramientas de vanguardia 
          como la inteligencia artificial, la nube y el desarrollo web moderno.
</p> </div> </div> </div> </section>`;
}, "C:/Users/226w0/dev/ingetec-astro-version/src/sections/about-us/About.astro", void 0);

const $$MisionAndVision = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="features"> <h1>Nuestra Misión y Nuestra Visión</h1> <div class="fea-base"> <div class="fea-box hidden"> <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-books" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M5 4m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"></path> <path d="M9 4m0 1a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1v14a1 1 0 0 1 -1 1h-2a1 1 0 0 1 -1 -1z"></path> <path d="M5 8h4"></path> <path d="M9 16h4"></path> <path d="M13.803 4.56l2.184 -.53c.562 -.135 1.133 .19 1.282 .732l3.695 13.418a1.02 1.02 0 0 1 -.634 1.219l-.133 .041l-2.184 .53c-.562 .135 -1.133 -.19 -1.282 -.732l-3.695 -13.418a1.02 1.02 0 0 1 .634 -1.219l.133 -.041z"></path> <path d="M14 9l4 -1"></path> <path d="M16 16l3.923 -.98"></path> </svg> <h3 class="text-center">Misión</h3> <p class="">
Generar conocimiento de calidad, por medio de las herramientas y
        técnicas de investigación básica y aplicada que contribuyan al impacto
        de las áreas de los sistemas computacionales, formación académica de
        recursos humanos especializados y altamente competitivos por medio del
        programa educativo de Ingeniería en Sistemas Computacionales, así como
        publicar y difundir los resultados de las investigaciones.
</p> </div> <div class="fea-box hidden"> <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-school" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"> <path stroke="none" d="M0 0h24v24H0z" fill="none"></path> <path d="M22 9l-10 -4l-10 4l10 4l10 -4v6"></path> <path d="M6 10.6v5.4a6 3 0 0 0 12 0v-5.4"></path> </svg> <h3 class="text-center">Visión</h3> <p class="">
Ser un Cuerpo Académico reconocido y en consolidación, que integre y
        genere productos académicos y de desarrollo tecnológico de calidad de
        manera colegiada reconocidos a nivel nacional e internacional y con
        integrantes con un alto nivel de especialización. Además de favorecer la
        formación de recursos humanos y el mejoramiento del perfil de los
        egresados del programa educativo de ingeniería en sistemas
        computacionales.
</p> </div> </div> </section>`;
}, "C:/Users/226w0/dev/ingetec-astro-version/src/sections/about-us/MisionAndVision.astro", void 0);

const $$Adwards = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="trust"> <h1>Nuestros premios</h1> <p>Mira todos nuestros premios que hemos ganado</p> <div class="trust-img"> <img src="./img/medalla_primerLugar.png" alt="Premio 1"> <img src="./img/medalla_primerLugar.png" alt="Premio 1"> <img src="./img/medalla_primerLugar.png" alt="Premio 1"> <img src="./img/medalla_primerLugar.png" alt="Premio 1"> <img src="./img/medalla_primerLugar.png" alt="Premio 1"> <img src="./img/medalla_primerLugar.png" alt="Premio 1"> </div> </section>`;
}, "C:/Users/226w0/dev/ingetec-astro-version/src/sections/about-us/Adwards.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "About Us" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroForPage", $$HeroForPage, { "title": "Sobre El Cuerpo Acad\xE9mico", "highlight": "INGE" })}  ${renderComponent($$result2, "About", $$About, {})}  ${renderComponent($$result2, "MisionAndVision", $$MisionAndVision, {})}  ${renderComponent($$result2, "Adwards", $$Adwards, {})} ` })}`;
}, "C:/Users/226w0/dev/ingetec-astro-version/src/pages/about-us/index.astro", void 0);

const $$file = "C:/Users/226w0/dev/ingetec-astro-version/src/pages/about-us/index.astro";
const $$url = "/about-us";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
