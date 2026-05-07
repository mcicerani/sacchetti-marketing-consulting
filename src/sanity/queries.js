export const TEAM_QUERY = `*[_type == "teamMember"] | order(order asc) {
  name, role, photo, linkedin
}`;

export const SERVICES_QUERY = `*[_type == "service"] | order(order asc) {
  title, description, iconName
}`;

export const TESTIMONIALS_QUERY = `*[_type == "testimonial"] | order(order asc) {
  testo, nome, ruolo
}`;

export const FAQ_QUERY = `*[_type == "faqItem"] | order(order asc) {
  domanda, risposta
}`;

export const STATS_QUERY = `*[_type == "siteSettings"][0] {
  stats[]{ value, label }
}`;

export const HERO_QUERY = `*[_type == "siteSettings"][0] {
  heroText, heroButton
}`;

export const ABOUT_QUERY = `*[_type == "siteSettings"][0] {
  aboutColumns[]{ iconName, title, text }
}`;

export const FOOTER_QUERY = `*[_type == "siteSettings"][0] {
  footerAddress, footerMapsUrl,
  footerPhones[]{ person, number },
  footerEmails,
  footerInstagram, footerFacebook, footerPiva
}`;

export const PORTFOLIO_PROJECTS_QUERY = `*[_type == "portfolioProject"] | order(order asc) {
  title, description, image
}`;

export const CLIENTI_QUERY = `*[_type == "clienteLogo"] | order(order asc) {
  name, logo, url
}`;
