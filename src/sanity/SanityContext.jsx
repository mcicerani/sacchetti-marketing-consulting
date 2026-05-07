import React, { createContext, useContext, useEffect, useState } from 'react';
import { client } from './client';

const SITE_QUERY = `{
  "siteSettings": *[_type == "siteSettings"][0] {
    stats, heroText, heroButton, aboutColumns,
    footerAddress, footerMapsUrl, footerPhones[]{ person, number },
    footerEmails, footerInstagram, footerFacebook, footerPiva,
    servizioSteps, portfolioSubtitle, clientiTitle,
    whatsappNumber, whatsappMessage
  },
  "services": *[_type == "service"] | order(order asc) { title, description, iconName },
  "testimonials": *[_type == "testimonial"] | order(order asc) { testo, nome, ruolo },
  "faqs": *[_type == "faqItem"] | order(order asc) { domanda, risposta },
  "team": *[_type == "teamMember"] | order(order asc) { name, role, photo, linkedin },
  "clienti": *[_type == "clienteLogo"] | order(order asc) { name, logo, url },
  "portfolio": *[_type == "portfolioProject"] | order(order asc) { title, description, image, size }
}`;

const SanityContext = createContext({ data: null, loading: true });

export function SanityProvider({ children }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!client) { setLoading(false); return; }
    client.fetch(SITE_QUERY)
      .then(setData)
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <SanityContext.Provider value={{ data, loading }}>
      {children}
    </SanityContext.Provider>
  );
}

export function useSiteData() {
  return useContext(SanityContext);
}
