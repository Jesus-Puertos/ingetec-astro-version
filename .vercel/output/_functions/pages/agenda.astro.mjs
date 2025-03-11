import { c as createComponent, a as createAstro, m as maybeRenderHead, d as addAttribute, r as renderTemplate, b as renderComponent } from '../chunks/astro/server_BcuW9ioE.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_6i14B8FQ.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$EventTable = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$EventTable;
  const { events, currentPage, totalPages } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="table-widget"> <table> <caption>
Calendario
<span class="table-row-count">(${events.length})</span> </caption> <thead> <tr> <th>Nombre</th> <th>Evento</th> <th>Estado</th> <th>Fecha</th> </tr> </thead> <tbody id="table-rows"> ${events.map((teamMember) => renderTemplate`<tr> <td class="team-member-profile"> <img${addAttribute(teamMember.src, "src")}${addAttribute(teamMember.name, "alt")}> <span class="profile-info"> <span class="profile-info__name">${teamMember.name}</span> <span class="profile-info__alias">${teamMember.email}</span> </span> </td> <td>${teamMember.type}</td> <td> <span${addAttribute(`status status--${teamMember.status}`, "class")}> ${teamMember.status} </span> </td> <td> ${new Date(teamMember.date).toLocaleDateString("es-mx", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "numeric"
  })} </td> </tr>`)} </tbody> <tfoot> <tr> <td colspan="4"> <ul class="pagination"> ${Array.from({ length: totalPages }, (_, i) => renderTemplate`<li> <a${addAttribute(`?page=${i + 1}`, "href")}${addAttribute(i + 1 === currentPage ? "active1" : "", "class")}${addAttribute(`page ${i + 1}`, "title")}> ${i + 1} </a> </li>`)} </ul> </td> </tr> </tfoot> </table> </div>`;
}, "C:/Users/226w0/dev/ingetec-astro-version/src/components/EventTable.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const events = [
    {
      src: "./img/integrantes/integrante-1.png",
      name: "Ricardo Garc\xEDa Castro",
      alias: "@Martin",
      type: "Presentaci\xF3n libro impreso de 'Conceptos Computacionales Nahualt \u2013 Espa\xF1ol'.",
      email: "example@zongolica.tecnm.mx",
      status: "Proximamente",
      date: "2023-10-22T13:12:00Z"
    },
    {
      src: "./img/integrantes/integrante-2.png",
      name: "Martin Contreras de la Cruz",
      alias: "@Martin",
      type: "Entrega de premios a evento Laguna Hack 2022 y Conferencia de Ciberseguridad.",
      email: "example@zongolica.tecnm.mx",
      status: "Terminado",
      date: "2023-10-22T13:12:00Z"
    },
    {
      src: "./img/integrantes/integrante-3.png",
      name: "Ana Gonz\xE1lez",
      alias: "@Ana",
      type: "Charla sobre Innovaci\xF3n Tecnol\xF3gica en el ITSZ.",
      email: "ana@example.com",
      status: "Pendiente",
      date: "2023-11-10T14:30:00Z"
    },
    {
      src: "./img/integrantes/integrante-4.png",
      name: "Jos\xE9 P\xE9rez",
      alias: "@JoseP",
      type: "Hackathon 2023: Desarrollo de Apps con IA.",
      email: "jose@example.com",
      status: "En Proceso",
      date: "2023-09-15T09:00:00Z"
    },
    {
      src: "./img/integrantes/integrante-5.png",
      name: "Mar\xEDa L\xF3pez",
      alias: "@Maria",
      type: "Seminario de Ciberseguridad para Empresas.",
      email: "maria@example.com",
      status: "Proximamente",
      date: "2023-12-05T16:45:00Z"
    },
    {
      src: "./img/integrantes/integrante-6.png",
      name: "Carlos Ram\xEDrez",
      alias: "@CarlosR",
      type: "Curso de Desarrollo Web con Astro.js.",
      email: "carlos@example.com",
      status: "Terminado",
      date: "2023-08-22T11:00:00Z"
    },
    {
      src: "./img/integrantes/integrante-7.png",
      name: "Luis Mart\xEDnez",
      alias: "@LuisM",
      type: "Lanzamiento de la App de Turismo Digital.",
      email: "luis@example.com",
      status: "Pendiente",
      date: "2023-10-30T13:15:00Z"
    },
    {
      src: "./img/integrantes/integrante-8.png",
      name: "Andrea Guti\xE9rrez",
      alias: "@AndreaG",
      type: "Exposici\xF3n de Proyectos de Innovaci\xF3n 2023.",
      email: "andrea@example.com",
      status: "Proximamente",
      date: "2023-11-25T17:30:00Z"
    },
    {
      src: "./img/integrantes/integrante-9.png",
      name: "Fernando D\xEDaz",
      alias: "@FerD",
      type: "Conferencia: El futuro de la Programaci\xF3n.",
      email: "fernando@example.com",
      status: "Terminado",
      date: "2023-07-18T08:00:00Z"
    },
    {
      src: "./img/integrantes/integrante-10.png",
      name: "Patricia Hern\xE1ndez",
      alias: "@PatyH",
      type: "Taller de Machine Learning para Principiantes.",
      email: "patricia@example.com",
      status: "Pendiente",
      date: "2023-12-15T10:00:00Z"
    },
    {
      src: "./img/integrantes/integrante-11.png",
      name: "Roberto Ch\xE1vez",
      alias: "@RobertoC",
      type: "Hackathon ITSZ: Creaci\xF3n de Startups Tecnol\xF3gicas.",
      email: "roberto@example.com",
      status: "Proximamente",
      date: "2023-11-05T09:30:00Z"
    },
    {
      src: "./img/integrantes/integrante-12.png",
      name: "Daniela Torres",
      alias: "@DaniT",
      type: "Mesa Redonda sobre \xC9tica en la IA.",
      email: "daniela@example.com",
      status: "Terminado",
      date: "2023-06-22T12:00:00Z"
    },
    {
      src: "./img/integrantes/integrante-13.png",
      name: "Jorge Salazar",
      alias: "@JorgeS",
      type: "Presentaci\xF3n de Videojuegos Desarrollados por Estudiantes.",
      email: "jorge@example.com",
      status: "Pendiente",
      date: "2023-10-12T15:45:00Z"
    },
    {
      src: "./img/integrantes/integrante-14.png",
      name: "Gabriela Medina",
      alias: "@GabyM",
      type: "Curso Intensivo de UX/UI para Startups.",
      email: "gabriela@example.com",
      status: "En Proceso",
      date: "2023-09-29T14:00:00Z"
    },
    {
      src: "./img/integrantes/integrante-15.png",
      name: "Hugo V\xE1zquez",
      alias: "@HugoV",
      type: "Taller de Desarrollo de APIs con Node.js.",
      email: "hugo@example.com",
      status: "Proximamente",
      date: "2023-11-18T09:00:00Z"
    },
    {
      src: "./img/integrantes/integrante-16.png",
      name: "Beatriz Castro",
      alias: "@BeaC",
      type: "Panel de Expertos en Big Data y Analytics.",
      email: "beatriz@example.com",
      status: "Terminado",
      date: "2023-07-25T11:30:00Z"
    },
    {
      src: "./img/integrantes/integrante-17.png",
      name: "Ricardo Mendoza",
      alias: "@RicardoM",
      type: "Exposici\xF3n de Inteligencia Artificial en Educaci\xF3n.",
      email: "ricardo@example.com",
      status: "Pendiente",
      date: "2023-12-01T16:00:00Z"
    },
    {
      src: "./img/integrantes/integrante-18.png",
      name: "F\xE1tima R\xEDos",
      alias: "@FatimaR",
      type: "Simposio Internacional de Innovaci\xF3n Tecnol\xF3gica.",
      email: "fatima@example.com",
      status: "En Proceso",
      date: "2023-09-08T13:45:00Z"
    },
    {
      src: "./img/integrantes/integrante-19.png",
      name: "Diego Su\xE1rez",
      alias: "@DiegoS",
      type: "Charla sobre Blockchain y Criptomonedas.",
      email: "diego@example.com",
      status: "Proximamente",
      date: "2023-11-20T10:30:00Z"
    },
    {
      src: "./img/integrantes/integrante-20.png",
      name: "Claudia Navarro",
      alias: "@ClaudiaN",
      type: "Taller de Rob\xF3tica para Principiantes.",
      email: "claudia@example.com",
      status: "Terminado",
      date: "2023-08-10T14:15:00Z"
    }
  ];
  const itemsOnPage = 5;
  const currentPage = Number(new URL(Astro2.url).searchParams.get("page") || 1);
  const totalPages = Math.ceil(events.length / itemsOnPage);
  const paginatedEvents = events.slice(
    (currentPage - 1) * itemsOnPage,
    currentPage * itemsOnPage
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Agenda del IngeTec" }, { "default": ($$result2) => renderTemplate`  ${maybeRenderHead()}<section class="about-home"> <h2>Agenda <span class="title-blue">INGE</span>TEC</h2> </section>  <section class="container"> ${renderComponent($$result2, "EventTable", $$EventTable, { "events": paginatedEvents, "currentPage": currentPage, "totalPages": totalPages })} </section> ` })}`;
}, "C:/Users/226w0/dev/ingetec-astro-version/src/pages/agenda/index.astro", void 0);

const $$file = "C:/Users/226w0/dev/ingetec-astro-version/src/pages/agenda/index.astro";
const $$url = "/agenda";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
