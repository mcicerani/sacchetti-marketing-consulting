import { createClient } from '@sanity/client';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.join(__dirname, '..', 'public');

const client = createClient({
  projectId: process.env.VITE_SANITY_PROJECT_ID,
  dataset: process.env.VITE_SANITY_DATASET || 'production',
  token: process.env.SANITY_WRITE_TOKEN,
  apiVersion: '2024-01-01',
  useCdn: false,
});

// --- DATA ---

const siteSettings = {
  _id: 'siteSettings',
  _type: 'siteSettings',
  stats: [
    { _key: 'stat-0', value: '42+', label: 'Clienti soddisfatti' },
    { _key: 'stat-1', value: '5+',  label: 'Anni di esperienza' },
    { _key: 'stat-2', value: '6',   label: 'Servizi offerti' },
    { _key: 'stat-3', value: '3',   label: 'Professioniste' },
  ],
  aboutColumns: [
    { _key: 'about-0', iconName: 'FaUsers', title: 'Chi siamo',
      text: 'Professioniste del Marketing e della Comunicazione. Dal 2019, nella nostra agenzia, aiutiamo aziende e professionisti a distinguersi nel mercato. Grazie a un mix di creatività e strategia, trasformiamo le idee in progetti concreti e di successo.' },
    { _key: 'about-1', iconName: 'FaBullseye', title: 'La nostra mission',
      text: "Vogliamo mostrare agli imprenditori l'importanza di una strategia di comunicazione solida nell'era digitale. Crediamo che un brand vincente nasca da una comunicazione efficace, capace di raggiungere il pubblico giusto al momento giusto." },
    { _key: 'about-2', iconName: 'FaLightbulb', title: 'Cosa facciamo',
      text: 'Ascoltiamo le esigenze dei nostri clienti e, insieme a loro, creiamo piani su misura. Dalla gestione dei contenuti digitali alle campagne pubblicitarie, progettiamo soluzioni innovative che portano risultati concreti.' },
  ],
  heroText: 'Scegli, Pubblica e Comunica con Noi!',
  heroButton: 'Scopri i nostri servizi',
  footerAddress: 'Via Lungolinea Pio VI, 120\n04019 Terracina (LT)',
  footerMapsUrl: 'https://maps.google.com/?q=Via+Lungolinea+Pio+VI+120+04019+Terracina+LT',
  footerPhones: [
    { _key: 'phone-0', person: 'Martina', number: '+39 320 6030 417' },
    { _key: 'phone-1', person: 'Chiara', number: '+39 339 6943 158' },
  ],
  footerEmails: [
    'sacchetti.mktconsulting@gmail.com',
    'sacchetti.marketingconsulting@pec.it',
  ],
  footerInstagram: 'https://www.instagram.com/sacchettimktconsulting/',
  footerFacebook: 'https://www.facebook.com/profile.php?id=61559447582233',
  footerPiva: '03139530590',
};

const services = [
  { title: 'Social Media Manager', iconName: 'FaHeart', order: 1,
    description: 'Apertura e gestione periodica dei social network con pubblicazione di contenuti.' },
  { title: 'Siti Web', iconName: 'TbWorldWww', order: 2,
    description: 'Realizzazione di siti web, blog, landing page con testi redatti in ottica SEO e SEM. Gestione e manutenzione periodica.' },
  { title: 'Foto, Video e Grafica', iconName: 'FaPhotoVideo', order: 3,
    description: 'Organizzazione e realizzazione di shooting fotografici e video con fotografi professionisti. Grafica digitale e cartacea: volantini, brochure, locandine e gadget.' },
  { title: 'Organizzazione Eventi', iconName: 'FaCalendar', order: 4,
    description: 'Ci occupiamo di eventi a 360°: ricerca location, moderatori e relatori, sponsorizzazioni, permessi burocratici, allestimento e comunicazione.' },
  { title: 'Consulenza Aziendale', iconName: 'TbBusinessplan', order: 5,
    description: 'Valutazione e redazione del piano di marketing. Sviluppo strategie, monitoraggio, misurazione e supporto. Lancio di nuovi prodotti e progetti.' },
  { title: 'Ufficio Stampa', iconName: 'GrAnnounce', order: 6,
    description: 'Redazione di comunicati stampa, monitoraggio della brand reputation, scrittura testi per il web e la stampa. Organizzazione di conferenze stampa.' },
];

const teamMembers = [
  { name: 'Martina Sacchetti', role: 'Marketing Manager', order: 1,
    linkedin: 'https://www.linkedin.com/in/martina-sacchetti/', photo: 'martina.png' },
  { name: 'Chiara Sacchetti', role: 'Copywriter', order: 2,
    linkedin: 'https://www.linkedin.com', photo: 'chiara.png' },
  { name: 'Emanuela Cittarelli', role: 'Graphic Designer', order: 3,
    linkedin: 'https://www.linkedin.com/in/emanuela-cittarelli-9b8500263/', photo: 'emanuela.png' },
];

const testimonials = [
  { order: 1,
    testo: "Affidarci a Sacchetti Marketing è stata la scelta migliore per la nostra azienda. In pochi mesi abbiamo triplicato le interazioni sui social e acquisito nuovi clienti grazie alla loro strategia.",
    nome: 'Mario Rossi', ruolo: 'Titolare, Studio Germani' },
  { order: 2,
    testo: "Team professionale, creativo e sempre disponibile. Hanno capito subito la nostra identità e l'hanno trasformata in una comunicazione efficace e riconoscibile.",
    nome: 'Laura Bianchi', ruolo: 'CEO, In Salute' },
  { order: 3,
    testo: 'Gestiscono i nostri profili social come se fossero i loro. Risultati concreti, tempi rispettati e un\'attenzione ai dettagli fuori dal comune.',
    nome: 'Giuseppe Verdi', ruolo: 'Direttore Marketing, Newton' },
];

const faqs = [
  { order: 1,
    domanda: 'Come funziona il processo di collaborazione?',
    risposta: 'Iniziamo sempre con un incontro conoscitivo gratuito per capire le tue esigenze. Poi analizziamo il tuo mercato e i competitor, pianifichiamo la strategia e la mettiamo in pratica. Ti teniamo aggiornato con report periodici sull\'andamento.' },
  { order: 2,
    domanda: 'Lavorate solo con aziende di Terracina?',
    risposta: 'No, lavoriamo con aziende e professionisti di tutta Italia. Grazie agli strumenti digitali possiamo collaborare a distanza senza problemi. La maggior parte dei nostri clienti si trova nel Lazio, ma non è un limite.' },
  { order: 3,
    domanda: 'È possibile richiedere un singolo servizio?',
    risposta: 'Assolutamente sì. Puoi affidarci un singolo servizio — come la gestione dei social o la realizzazione di un sito — oppure costruire un pacchetto su misura con più servizi combinati.' },
  { order: 4,
    domanda: 'In quanto tempo si vedono i risultati?',
    risposta: 'Dipende dal servizio e dal punto di partenza. Per i social media, i primi miglioramenti di visibilità si notano entro 4-8 settimane. Per campagne pubblicitarie i risultati sono più immediati. Ti forniremo sempre aspettative realistiche prima di iniziare.' },
  { order: 5,
    domanda: 'Come si richiede un preventivo?',
    risposta: 'Compila il form nella sezione Contatti oppure scrivici direttamente su WhatsApp o via email. Il preventivo è gratuito e senza impegno. Ti risponderemo entro 24 ore lavorative.' },
  { order: 6,
    domanda: 'Offrite contratti a lungo termine o mensili?',
    risposta: 'Proponiamo sia contratti mensili che pacchetti trimestrali o annuali con condizioni vantaggiose. Non ti obblighiamo a vincoli lunghi finché non sei convinto dei risultati.' },
];

const clientLogos = [
  { name: 'In Salute',                    file: '1.svg'  },
  { name: 'Diet Natural',                  file: '2.svg'  },
  { name: 'Studio Germani',                file: '3.svg'  },
  { name: 'Newton',                        file: '4.svg'  },
  { name: 'Centro Servizi Appia',          file: '5.svg'  },
  { name: 'Città Della Salute',            file: '6.svg'  },
  { name: 'Analysis',                      file: '7.svg'  },
  { name: 'Le Vie di Feronia',             file: '8.svg'  },
  { name: 'Metronotte',                    file: '9.svg'  },
  { name: 'ITREST',                        file: '10.svg' },
  { name: 'Atenia Consulting',             file: '11.svg' },
  { name: 'Armonia & Benessere',           file: '12.svg' },
  { name: 'Newton Autoscuola',             file: '13.svg' },
  { name: 'Delegazione ACI Newton Roma',   file: '14.svg' },
  { name: 'Basket Virtus Fondi',           file: '15.svg' },
  { name: 'Basket Virtus Terracina',       file: '16.svg' },
  { name: 'Nautica Newton',                file: '17.svg' },
  { name: 'Black Mamba',                   file: '18.svg' },
  { name: 'Natur House',                   file: '19.svg' },
  { name: 'Multi Sport Camp',              file: '20.svg' },
  { name: 'Sandro Di Mauro',              file: '21.svg' },
  { name: 'Buttafoco 2.0',                 file: '22.svg' },
  { name: 'Visit Terracina',               file: '23.svg' },
  { name: 'Circe Immobiliare',             file: '24.png' },
  { name: 'La Magic Paint',                file: '25.svg' },
  { name: 'Power 360',                     file: '26.svg' },
  { name: 'Red Baron Club',                file: '27.svg' },
  { name: 'Copy Center',                   file: '28.svg' },
  { name: 'Comune di Terracina',           file: '29.svg' },
  { name: 'Terracina Summer Village',      file: '30.svg' },
  { name: 'Pontina Tec',                   file: '31.svg' },
  { name: 'De Angelis Arredamenti',        file: '32.svg' },
  { name: 'Dea Yachting',                  file: '33.svg' },
  { name: 'Eco Mixed',                     file: '34.svg' },
  { name: 'Polo Museale di Terracina',     file: '35.svg' },
  { name: 'Conti Consulenze',              file: '36.svg' },
  { name: 'SPE International',             file: '37.svg' },
  { name: 'Illusion Dinner',               file: '38.svg' },
  { name: 'Fondazione Città di Terracina', file: '39.svg' },
  { name: 'EvenGarden',                    file: '40.svg' },
  { name: 'SoleMar',                       file: '41.svg' },
  { name: 'EdilPiEmme',                    file: '42.svg' },
];

// --- HELPERS ---

function contentType(filename) {
  if (filename.endsWith('.svg')) return 'image/svg+xml';
  if (filename.endsWith('.png')) return 'image/png';
  if (filename.endsWith('.jpg') || filename.endsWith('.jpeg')) return 'image/jpeg';
  return 'application/octet-stream';
}

async function uploadImage(filename) {
  const filepath = path.join(PUBLIC_DIR, filename);
  if (!fs.existsSync(filepath)) {
    console.warn(`  ⚠ File not found, skipping: ${filename}`);
    return null;
  }
  const buffer = fs.readFileSync(filepath);
  const asset = await client.assets.upload('image', buffer, {
    filename,
    contentType: contentType(filename),
  });
  return asset._id;
}

function imageRef(assetId) {
  return { _type: 'image', asset: { _type: 'reference', _ref: assetId } };
}

// --- SEED ---

async function seed() {
  console.log('Connecting to project:', process.env.VITE_SANITY_PROJECT_ID);

  // 1. Base text content (services, testimonials, faqs, siteSettings)
  console.log('\n1. Seeding text content...');
  const tx = client.transaction();
  tx.createOrReplace(siteSettings);
  services.forEach((s) => tx.createOrReplace({ _id: `service-${s.order}`, _type: 'service', ...s }));
  testimonials.forEach((t) => tx.createOrReplace({ _id: `testimonial-${t.order}`, _type: 'testimonial', ...t }));
  faqs.forEach((f) => tx.createOrReplace({ _id: `faq-${f.order}`, _type: 'faqItem', ...f }));
  await tx.commit();
  console.log('  ✓ Text content seeded');

  // 2. Team members with photos
  console.log('\n2. Uploading team photos...');
  for (const member of teamMembers) {
    console.log(`  Uploading ${member.photo}...`);
    const assetId = await uploadImage(member.photo);
    const doc = {
      _id: `team-${member.order}`,
      _type: 'teamMember',
      name: member.name,
      role: member.role,
      order: member.order,
      linkedin: member.linkedin,
    };
    if (assetId) doc.photo = imageRef(assetId);
    await client.createOrReplace(doc);
    console.log(`  ✓ ${member.name}`);
  }

  // 3. Client logos
  console.log('\n3. Uploading client logos...');
  for (let i = 0; i < clientLogos.length; i++) {
    const { name, file } = clientLogos[i];
    const order = i + 1;
    console.log(`  Uploading ${file} (${name})...`);
    const assetId = await uploadImage(file);
    const doc = {
      _id: `cliente-${order}`,
      _type: 'clienteLogo',
      name,
      order,
    };
    if (assetId) doc.logo = imageRef(assetId);
    await client.createOrReplace(doc);
    console.log(`  ✓ ${name}`);
  }

  console.log('\n✓ Seed completato');
}

seed().catch((err) => { console.error(err); process.exit(1); });
