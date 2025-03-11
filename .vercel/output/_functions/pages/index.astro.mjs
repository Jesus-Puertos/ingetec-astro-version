import { c as createComponent, m as maybeRenderHead, u as unescapeHTML, r as renderTemplate, d as addAttribute, b as renderComponent, a as createAstro } from '../chunks/astro/server_BcuW9ioE.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_6i14B8FQ.mjs';
import 'clsx';
import { b as getPageInfo } from '../chunks/wp_BuWiwmHb.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(async ($$result, $$props, $$slots) => {
  const { title, content } = await getPageInfo("about");
  return renderTemplate`<!-- Home -->${maybeRenderHead()}<section class="home"> <h2>${title}</h2> <p class="">${unescapeHTML(content)}</p> <div class="btn"> <a class="blue" href="/about-us">Saber mas</a> <a class="yellow" href="/proyects">Ver proyectos</a> </div> </section>`;
}, "C:/Users/226w0/dev/ingetec-astro-version/src/sections/Hero.astro", void 0);

const $$LinesOfInvestigation = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="features" data-astro-cid-ibghnzyf> <h1 data-astro-cid-ibghnzyf>Líneas de investigación</h1> <p class="" data-astro-cid-ibghnzyf>
Ante el Tecnológico Nacional de México TECNM se tienen registradas tres
    líneas de investigación de la carrera de Ingeniería en Sistemas
    Computacionales del ITSZ
</p> <div class="fea-base" data-astro-cid-ibghnzyf> <div class="fea-box hidden" data-astro-cid-ibghnzyf> <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-share" width="52" height="52" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-ibghnzyf> <path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-ibghnzyf></path> <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" data-astro-cid-ibghnzyf></path> <path d="M6 21v-2a4 4 0 0 1 4 -4h3" data-astro-cid-ibghnzyf></path> <path d="M16 22l5 -5" data-astro-cid-ibghnzyf></path> <path d="M21 21.5v-4.5h-4.5" data-astro-cid-ibghnzyf></path> </svg> <h3 class="text-center" data-astro-cid-ibghnzyf>
Computación Ubicua y Desarrollo de Interfaces Persona Ordenador
</h3> <p class="" data-astro-cid-ibghnzyf>
El mundo cada vez más se está convirtiendo en un tablero de juego
        electrónico, conforme aumentan las aplicaciones, el desarrollo de
        tecnologías inalámbricas y dispositivos computacionales móviles y, a la
        vez, su uso se vuelve más fácil y más “natural” para todo tipo de
        usuarios, lo que provoca que las personas de todas las edades dependan
        de la tecnología.
</p> </div> <div class="fea-box hidden" data-astro-cid-ibghnzyf> <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-analytics" width="52" height="52" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-ibghnzyf> <path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-ibghnzyf></path> <path d="M3 4m0 1a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1z" data-astro-cid-ibghnzyf></path> <path d="M7 20l10 0" data-astro-cid-ibghnzyf></path> <path d="M9 16l0 4" data-astro-cid-ibghnzyf></path> <path d="M15 16l0 4" data-astro-cid-ibghnzyf></path> <path d="M8 12l3 -3l2 2l3 -3" data-astro-cid-ibghnzyf></path> </svg> <h3 class="text-center" data-astro-cid-ibghnzyf>
Tecnologías Emergentes de la Información y Comunicación
</h3> <p class="" data-astro-cid-ibghnzyf>
Tecnologías emergentes o tecnologías convergentes son términos usados
        para señalar la emergencia y convergencia de nuevas tecnologías,
        respectivamente, con potencial de demostrarse como tecnologías
        disruptivas. Y entre ellas, deben citarse la nanotecnología, la
        biotecnología, las tecnologías de la información y la comunicación, la
        ciencia cognitiva, la robótica, y la inteligencia artificial.
</p> </div> <div class="fea-box hidden" data-astro-cid-ibghnzyf> <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-cloud-computing" width="52" height="52" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-astro-cid-ibghnzyf> <path stroke="none" d="M0 0h24v24H0z" fill="none" data-astro-cid-ibghnzyf></path> <path d="M6.657 16c-2.572 0 -4.657 -2.007 -4.657 -4.483c0 -2.475 2.085 -4.482 4.657 -4.482c.393 -1.762 1.794 -3.2 3.675 -3.773c1.88 -.572 3.956 -.193 5.444 1c1.488 1.19 2.162 3.007 1.77 4.769h.99c1.913 0 3.464 1.56 3.464 3.486c0 1.927 -1.551 3.487 -3.465 3.487h-11.878" data-astro-cid-ibghnzyf></path> <path d="M12 16v5" data-astro-cid-ibghnzyf></path> <path d="M16 16v4a1 1 0 0 0 1 1h4" data-astro-cid-ibghnzyf></path> <path d="M8 16v4a1 1 0 0 1 -1 1h-4" data-astro-cid-ibghnzyf></path> </svg> <h3 class="text-center" data-astro-cid-ibghnzyf>Cómputo en la Nube</h3> <p class="" data-astro-cid-ibghnzyf>
La computación en la nube es la disponibilidad a pedido de los recursos
        del sistema informático, especialmente el almacenamiento de datos y la
        capacidad de cómputo, sin una gestión activa directa por parte del
        usuario. El término se usa generalmente para describir los centros de
        datos disponibles desde cualquier lugar para muchos usuarios a través de
        Internet desde cualquier dispositivo móvil o fijo.
</p> </div> </div> </section> `;
}, "C:/Users/226w0/dev/ingetec-astro-version/src/sections/LinesOfInvestigation.astro", void 0);

const $$ProfileCard = createComponent(($$result, $$props, $$slots) => {
  const profiles = [
    {
      name: "Dr. Roberto Ruiz",
      img: "/img/integrantes/integrante-1.png",
      description: "Ingeniero en sistemas y experto en Java",
      links: [
        { icon: "fab fa-facebook-f", url: "https://www.facebook.com/" },
        { icon: "fab fa-github", url: "" },
        { icon: "fab fa-linkedin-in", url: "" }
      ]
    },
    {
      name: "Dr. Arturo Rayon",
      img: "/img/integrantes/integrante-2.png",
      description: "Ingeniero en sistemas y experto en Java",
      links: [
        { icon: "fab fa-facebook-f", url: "https://www.facebook.com/" },
        { icon: "fab fa-github", url: "" },
        { icon: "fab fa-linkedin-in", url: "" }
      ]
    },
    {
      name: "Ing. Ricardo Garc\xEDa Castro",
      img: "/img/integrantes/integrante-3.png",
      description: "Ingeniero en sistemas y experto en Java",
      links: [
        { icon: "fab fa-facebook-f", url: "https://www.facebook.com/" },
        { icon: "fab fa-github", url: "" },
        { icon: "fab fa-linkedin-in", url: "" }
      ]
    },
    {
      name: "Dr. Mart\xEDn Contreras de la Cruz",
      img: "/img/integrantes/integrante-4.png",
      description: "Ingeniero en sistemas y experto en Java",
      links: [
        { icon: "fab fa-facebook-f", url: "https://www.facebook.com/" },
        { icon: "fab fa-github", url: "" },
        { icon: "fab fa-linkedin-in", url: "" }
      ]
    },
    {
      name: "Ing. Raygoza",
      img: "/img/integrantes/integrante-5.png",
      description: "Ingeniero en sistemas y experto en Java",
      links: [
        { icon: "fab fa-facebook-f", url: "https://www.facebook.com/" },
        { icon: "fab fa-github", url: "" },
        { icon: "fab fa-linkedin-in", url: "" }
      ]
    }
  ];
  return renderTemplate`${profiles.map((profile) => renderTemplate`${maybeRenderHead()}<div class="profile hidden" data-astro-cid-c7gr6yg2><img${addAttribute(profile.img, "src")}${addAttribute(profile.name, "alt")} data-astro-cid-c7gr6yg2><h6 data-astro-cid-c7gr6yg2>${profile.name}</h6><p data-astro-cid-c7gr6yg2>${profile.description}</p><div class="pro-links" data-astro-cid-c7gr6yg2>${profile.links.map((link) => renderTemplate`<i${addAttribute(link.icon, "class")} data-astro-cid-c7gr6yg2></i>`)}</div></div>`)}`;
}, "C:/Users/226w0/dev/ingetec-astro-version/src/components/ProfileCard.astro", void 0);

const $$Profiles = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- profiles -->${maybeRenderHead()}<section class="profiles"> <h1>Integrantes</h1> <p>Conoce a nuestros integrantes 🧐📲</p> <div class="prof-box"> ${renderComponent($$result, "ProfileCard", $$ProfileCard, {})} </div> </section>`;
}, "C:/Users/226w0/dev/ingetec-astro-version/src/sections/Profiles.astro", void 0);

const $$ProyectCard = createComponent(($$result, $$props, $$slots) => {
  const proyects = [
    {
      img: "/img/projects/100-terminos-computacionales.png",
      description: "Logrado por Martin",
      title: "100 T\xE9rminos b\xE1sicos computacionales Bilingues"
    },
    {
      img: "/img/projects/reconocimiento-congreso.png",
      description: "Logrado por Ricardo",
      title: "Reconocimiento primer congreso."
    },
    {
      img: "/img/projects/certificado-derechos-autor.png",
      description: "Logrado por Martin",
      title: "Reconocimiento de derechos de autor"
    },
    {
      img: "/img/projects/constancia.png",
      description: "Logrado por Martin",
      title: "Constancia por ponencia"
    }
  ];
  return renderTemplate`${proyects.map((proyect) => renderTemplate`${maybeRenderHead()}<article class="card__article hidden"><img${addAttribute(proyect.img, "src")} alt="image" class="card__img"><div class="card__data"><span class="card__description">${proyect.description}</span><h2 class="card__title">${proyect.title}</h2></div></article>`)}`;
}, "C:/Users/226w0/dev/ingetec-astro-version/src/components/ProyectCard.astro", void 0);

const $$Proyects = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Proyects -->${maybeRenderHead()}<section class="proyects container" data-astro-cid-vftjdh54> <div class="ola" data-astro-cid-vftjdh54> <h1 class="proyects__title border" data-astro-cid-vftjdh54>Producción académica</h1> <h1 class="proyects__title wave" data-astro-cid-vftjdh54>Producción académica</h1> </div> <p data-astro-cid-vftjdh54>
En esta sección, te invitamos a explorar la rica producción académica de
    INGETEC, nuestro destacado cuerpo académico. Aquí encontrarás una amplia
    variedad de investigaciones, publicaciones y proyectos que reflejan nuestro
    compromiso con el avance del conocimiento y la excelencia en el ámbito
    académico.
</p> <div class="card__container" data-astro-cid-vftjdh54> ${renderComponent($$result, "ProyectCard", $$ProyectCard, { "data-astro-cid-vftjdh54": true })} </div> </section> `;
}, "C:/Users/226w0/dev/ingetec-astro-version/src/sections/Proyects.astro", void 0);

const $$Inicio = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Hero", $$Hero, {})} ${renderComponent($$result, "LinesOfInvestigation", $$LinesOfInvestigation, {})} ${renderComponent($$result, "Proyects", $$Proyects, {})} ${renderComponent($$result, "Profiles", $$Profiles, {})}`;
}, "C:/Users/226w0/dev/ingetec-astro-version/src/sections/Inicio.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Inicio CA | INGETEC" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Inicio", $$Inicio, {})} ` })}`;
}, "C:/Users/226w0/dev/ingetec-astro-version/src/pages/index.astro", void 0);

const $$file = "C:/Users/226w0/dev/ingetec-astro-version/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
