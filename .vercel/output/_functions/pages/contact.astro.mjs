import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_BcuW9ioE.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_6i14B8FQ.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Contact" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="about-home"> <h2>Contacto <span class="title-blue">INGE</span>TEC</h2> </section>  <section class="contact"> <div class="getin"> <h2>Pongase en contacto con nosotros</h2> <p>¿Necesitas ayuda? Buscanos y encontraremos la forma de orientarte</p> <div class="getin-details"> <h3>Ubicación</h3> <div> <i class="fa-solid fa-location-dot get"></i> <p>Av. Benito Juárez 296A, Aquiles Serdan, 94720 Nogales, Ver.</p> </div> <h3>Telefono</h3> <div> <i class="fa-solid fa-phone get"></i> <p>(01)272 727 04 49</p> </div> <h3>Correo</h3> <div> <i class="fa-regular fa-envelope get"></i> <p>caingetec@zongolica.tecnm.mx</p> </div> <h3>Website ITSZ</h3> <div> <i class="fa-solid fa-up-right-from-square get"></i> <p>caingetec@zongolica.tecnm.mx</p> </div> <h3>Siguenos</h3> <div class="pro-links"> <i class="fab fa-facebook-f"></i> <i class="fab fa-instagram"></i> <i class="fab fa-twitter"></i> <i class="fab fa-linkedin-in"></i> </div> </div> </div> <div class="form"> <h4>Contactanos</h4> <p>Rellena este formulario para enviarnos un mensaje</p> <form id="contact-form" action="https://formsubmit.co/226w0496@zongolica.tecnm.mx" method="POST"> <input type="hidden" name="_template" value="table"> <div class="form-row"> <input type="text" placeholder="Tu Nombre" name="name" id="name"> <input type="email" placeholder="Tu Correo" name="email" id="email"> </div> <div class="form-col"> <input type="text" placeholder="Asunto" name="subject" id="subject"> </div> <div class="form-col"> <textarea name="message" id="message" cols="30" rows="8" placeholder="Tu mensaje"></textarea> </div> <div class="form-col"> <button type="submit" value="enviar">Enviar Mensaje</button> <input type="hidden" name="_next" value="http://127.0.0.1:5500/contacto.html"> <input type="hidden" name="_captcha" value="false"> </div> </form> </div> </section> <section class="map"> <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236.03511830482856!2d-97.16352752708151!3d18.817667944889948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c502befcd458fb%3A0x3e2e404f65c378aa!2sInstituto%20Tecnol%C3%B3gico%20Superior%20de%20Zongolica%20Sede%20Nogales!5e0!3m2!1ses-419!2smx!4v1699255634700!5m2!1ses-419!2smx" style="border: 0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> </section> ` })}`;
}, "C:/Users/226w0/dev/ingetec-astro-version/src/pages/contact/index.astro", void 0);

const $$file = "C:/Users/226w0/dev/ingetec-astro-version/src/pages/contact/index.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
