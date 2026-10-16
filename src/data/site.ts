// ─────────────────────────────────────────────────────────────────────────────
// ALL COPY IN THIS FILE IS VERBATIM FROM THE LIVE SITE https://www.tavancontractors.co.uk
// (every page fetched 14 Oct 2026). Nothing here is invented.
//  • Spelling slips were corrected; each one is listed in TYPO_FIXES at the bottom and in the
//    delivery note, so the client can veto any of them.
//  • The three reviews were published on the old homepage only as screenshots of Rated People
//    review cards; they are transcribed here word for word.
//  • Dropped on purpose: "Created by Social Media Startup" (old agency credit) and the 4th phone
//    number 07818 531799 that sat behind several old "Phone us" links (see delivery note).
// ─────────────────────────────────────────────────────────────────────────────

export const company = {
  name: 'Tavan Contractors',
  legal: 'Tavan Contractors Ltd',
  tagline: 'Domestic & Commercial Roofing', // text inside the logo badge
  companyNumber: '12387224',
  address: ['28 Mills Chase', 'Bracknell', 'RG12 9RE'],
  social: {
    facebook: 'https://www.facebook.com/tavancontractorsltd',
    instagram: 'https://www.instagram.com/tavancontractors/',
  },
};

// The old site shows these three numbers in its header, footer and contact page.
export const phones = {
  free: { label: 'Free Phone', display: '0800 779 7784', tel: '+448007797784' },
  office: { label: 'Office', display: '0203 538 6994', tel: '+442035386994' },
  mobile: { label: 'Mobile', display: '07741 586 705', tel: '+447741586705' },
};
// Shown everywhere on the old site. (Its mailto links pointed at two other addresses — see note.)
export const email = 'sales@tavancontractors.co.uk';

export const areas = ['Bracknell', 'Reading', 'Wokingham', 'Berkshire', 'Thames Valley', 'Surrey', 'South London'];

// Old footer heading copy
export const footer = {
  servicesHead: 'Domestic Services',
  areasHead: 'Areas we cover',
  contactHead: 'Contact',
  privacy: 'Privacy Policy',
  cookies: 'Cookie Policy',
  companyNumber: 'Company number 12387224',
};

export type ListBlock = { head?: string; items: string[] };
export type Service = {
  slug: string;
  oldUrl: string;
  name: string; // short name used in nav/footer of the old site
  heading: [string, string]; // old two-tone page heading, e.g. "Slate" + "ROOF"
  title: string; // exact old <title>
  description: string; // old meta description
  kicker?: string; // old H3 under the heading
  body: string[];
  lists: ListBlock[];
  after?: string[]; // paragraphs after the lists
  extraLists?: ListBlock[]; // a second list after `after`
  subsections?: { head: string; body: string }[];
  ctaQuestion: [string, string]; // old "Do you require…" H3 pair
  ctaLine: string; // old "Call or email to arrange a FREE quotation"
  hero: string;
  gallery: string[];
};

export const services: Service[] = [
  {
    slug: 'slate-roof',
    oldUrl: '/slate-roof-specialist-berkshire',
    name: 'Slate Roof',
    heading: ['Slate', 'Roof'],
    title: 'Slate Roof, Berkshire, Thames Valley',
    description: 'Tavan Contractors slate roofing specialists. Berkshire, Thames Valley, Surrey, South London, FREE quote',
    body: [
      'Slate roofing (slating) is very popular. This natural rock can bring a beautiful roofscape to any home and has the added extra of being completely fireproof so, therefore, giving you added peace of mind.',
    ],
    lists: [
      {
        head: 'The benefits of a slate roof are:',
        items: ['Very long lifespan', 'Good fire protection', 'Low maintenance', 'Invulnerable to rot and insects'],
      },
    ],
    ctaQuestion: ['Do you require slate roofing services in', 'Berkshire, Thames Valley, Surrey or South London?'],
    ctaLine: 'Call or email to arrange a FREE quotation',
    hero: '40d087e',
    gallery: ['262a419', '869cda9', '124524c', '5315d64', 'ee8df62', '8a95403', '4bb73c7', 'ec74751', '7bafd65', '9e6f505'],
  },
  {
    slug: 'flat-roof',
    oldUrl: '/flat-roof-specialist-berkshire',
    name: 'Flat Roof',
    heading: ['Flat', 'Roof'],
    title: 'Flat Roof | Roofing Specialists. Berkshire, Thames Valley, Surrey, South London',
    description: 'Tavan Contractors flat roofing and single ply flat roofing specialists. Berkshire, Thames Valley, Surrey, South London, FREE quote',
    body: [
      'Flat roofing is very popular due to its high durability and near to low maintenance. We can either repair, maintain or completely replace. Our team will advise you on the best type of flat roof for your property and budget.',
    ],
    lists: [
      {
        head: 'We install flat roofs for any sized property, no matter how large or small, along with flat roofs for:',
        items: ['Extensions', 'Garages', 'Porches', 'Dormers', 'Garden sheds', 'Garden rooms'],
      },
    ],
    after: [
      'We also specialise in single-ply flat roofs. This is a versatile material and is often used for roofs of any shape. It is weatherproof, durable and quick and easy to install.',
    ],
    ctaQuestion: ['Talk to our team to find the best flat roofing solution for your house in', 'Berkshire, Thames Valley, Surrey or South London'],
    ctaLine: 'Call or email to arrange a FREE quotation',
    hero: '50d7bc4',
    gallery: ['d5d1d15', 'b3cebf9', '04373cc', '9f4fbc3', 'c262b84', '7fdde72', 'e3b88df'],
  },
  {
    slug: 'new-roof',
    oldUrl: '/new-roof-specialist-berkshire',
    name: 'New Roof',
    heading: ['New', 'Roof'],
    title: 'New Roof, Roof Specialist Berkshire, Surrey, Thames Valley, South London',
    description: 'Tavan Contractors roofing specialists. New build, Roof replacement, Roof for extensions. Pitched and Flat roofs. Berkshire, Thames Valley, Surrey, South London, FREE quote',
    body: [
      'The average homeowner spends between £2200 and £7500 on replacing a roof. Factors that will influence the price of your roof are:',
    ],
    lists: [
      {
        items: [
          'The size of your roof',
          'The type of tiles you want to use',
          'The complexity of the roof design',
          'Damage to the original support structure',
        ],
      },
    ],
    after: ['At Tavan we understand that this is a large investment and therefore we guarantee 100% satisfaction in our workmanship.'],
    extraLists: [
      {
        head: 'The benefits of re-roofing are:',
        items: [
          'It can be less expensive than having to repair your roof multiple times per year',
          'Severe damage due to fallen trees or weather conditions',
          'General wear and tear due to the age of the roof',
        ],
      },
    ],
    ctaQuestion: ['Planning to replace your roof in', 'Berkshire, Thames Valley, Surrey or South London?'],
    ctaLine: 'Call or email us to arrange a FREE quotation',
    hero: '85dc11e',
    gallery: ['90c82a0', '46f209e', '4d01619', '336ccfd', '509b97c', '7fdde72', '7bafd65', '2883874', 'accc1c3', '93a966d', '5e1ec45', 'a2b4ea9'],
  },
  {
    slug: 'roof-repairs',
    oldUrl: '/roof-repair-specialist-berkshire',
    name: 'Roof Repairs',
    heading: ['Roof', 'Repairs'],
    title: 'Roof Repairs | Specialist-Berkshire, Surrey, South London',
    description: 'Tavan carries out all aspects of roofing repair from fixing slipped tiles, fixing leaks, repointing to repairing major damage caused by high winds and storms.',
    kicker: 'Is your roof in need of repair?',
    body: [
      'Over the years your roof will need a little bit of TLC. Tavan carries out all aspects of roofing repair from fixing slipped tiles, fixing leaks, repointing to repairing major damage caused by high winds and storms.',
    ],
    lists: [],
    subsections: [
      {
        head: 'Need a quote for your insurance?',
        body: 'No worries! We can also work with your insurance company if your roofing repair is part of an insurance claim, helping you to reduce the stress of getting your roof fixed.',
      },
    ],
    ctaQuestion: ['Do you require roofing repair services in', 'Berkshire, Thames Valley, Surrey or South London?'],
    ctaLine: 'Call or email to arrange a FREE quotation',
    hero: 'bb35755',
    gallery: ['cb6f457', '1b10652', '5e1ec45', 'd4457f2', 'd775dec', '42b5b18', '863c645', 'f0be6a5', '262a419'],
  },
  {
    slug: 'lead-work',
    oldUrl: '/lead-work-roof-specialist-berkshire',
    name: 'Lead Work',
    heading: ['Lead', 'Work'],
    title: 'Lead work |Roof-Specialist-Berkshire, Surrey, South London, Thames Valley',
    description: 'Our highly skilled lead work team can supply you with long lasting cost effective replacement or maintenance of your lead work.',
    body: [
      'Lead work is proven to be cost effective, long lasting and reliable. We can shape lead to fit any contours.',
      'Our highly skilled lead work team can supply you with long lasting cost effective replacement or maintenance of your lead work.',
      'All our lead work comply with the BS EN 12588 standard.',
    ],
    lists: [
      {
        head: 'The lead-works we undertake include:',
        items: [
          'Lead sheet roofs',
          'Lead side cheeks to dormers',
          'Lead box gutters',
          'Lead box windows',
          'Chimney gutters',
          'Flashings to parapet walls and chimney stacks.',
          'Installation of lead slates for flue pipes that penetrate slate, tile or flat roofs.',
        ],
      },
    ],
    ctaQuestion: ['Do you require lead-work services in', 'Berkshire, Thames Valley, Surrey or South London?'],
    ctaLine: 'Call or email to arrange a FREE quotation',
    hero: '5ca43f7',
    gallery: ['7b6d654', '8dae341', 'b7821d4', 'ba79d60', '689a7d3', 'c262b84', '7bafd65', 'f0be6a5', 'd5d1d15'],
  },
  {
    slug: 'chimney-repairs',
    oldUrl: '/chimney-tavanroofingcontractors',
    name: 'Chimney Repairs',
    heading: ['Chimney', 'Repairs'],
    title: 'Chimney Repairs  Roof-Specialist-Berkshire',
    description: 'We can fully investigate the state of your chimney and recommend the best solution to keep your chimney safe and in working condition, while still keeping it in place with the look and feel of your house.',
    kicker: 'Is your chimney safe?',
    body: [
      'Chimneys can be one of the most troublesome parts of a roof if it is not maintained or repaired correctly. Your chimney really goes through the mill on a daily basis. It is hit with all-weather conditions and has to withstand any conditions mother nature throws at it. It is important that you check the structural integrity of your chimney to ensure that it’s not in danger of collapsing and damaging the rest of your house. Problems due to damaged chimneys are leaking gasses into the building, water leaks and a risk of collapse.',
    ],
    lists: [{ head: 'Our services include:', items: ['Chimney repairs', 'Chimney rebuild', 'Chimney capping', 'Chimney removal'] }],
    after: [
      'We can fully investigate the state of your chimney and recommend the best solution to keep your chimney safe and in working condition, while still keeping it in place with the look and feel of your house.',
    ],
    ctaQuestion: ['Do you require chimney repair services in', 'Berkshire, Thames Valley, Surrey or South London?'],
    ctaLine: 'Call or email to arrange a FREE quotation',
    hero: '0164323',
    gallery: ['5ca43f7', '689a7d3', 'b7821d4', 'ba79d60'],
  },
  {
    slug: 'fascias-soffits-guttering',
    oldUrl: '/fascias-soffits-guttering-berkshire',
    name: 'Fascias/Soffits/Guttering',
    heading: ['Fascias', 'Guttering'],
    title: 'Fascias/Soffits/Guttering  | Roofing Specialists. Berkshire, Thames Valley',
    description: 'We offer high-quality repairs and replacement of guttering, soffits and fascias boards to brighten up your property and protect it from water damage.',
    kicker: 'Looking to repair or replace your roof-line?',
    body: [
      'We offer high-quality repairs and replacement of guttering, soffits and fascias boards to brighten up your property and protect it from water damage.',
    ],
    lists: [
      {
        head: 'Our services include:',
        items: [
          'Regular gutter cleaning and unblocking',
          'Replacing leaky or damaged gutter joints and pipes',
          'Insurance work',
          'Installing new fascias and soffits',
        ],
      },
    ],
    after: [
      'As part of our professional service, we will recommend different products to you to ensure that your new fascias, soffits and guttering brightens up your property while staying true to the character and period of your house.',
    ],
    ctaQuestion: ['Do you need to replace your roofline in', 'Berkshire, Thames Valley, Surrey or South London?'],
    ctaLine: 'Call or email to arrange a FREE quotation',
    hero: '47ce754',
    gallery: ['46f209e', '5e1ec45', '0f627bb', '124524c', '7d25da9', '8dae341'],
  },
  {
    slug: 'velux-skylights',
    oldUrl: '/velux-skylights-berkshire-surrey',
    name: 'Velux/Skylights',
    heading: ['Velux', 'Skylights'],
    title: 'Velux/Skylights  | Roofing Specialists. Berkshire, Thames Valley, South London',
    description: 'Velux windows and skylights bring daylight and fresh air into any loft conversion or flat roof. They can be fitted to both old and modern properties and can transform a dark space into a light-flooded, well-ventilated living area, giving your room a new lease of life.',
    body: [
      'Velux windows and skylights bring daylight and fresh air into any loft conversion or flat roof. They can be fitted to both old and modern properties and can transform a dark space into a light-flooded, well-ventilated living area, giving your room a new lease of life.',
    ],
    lists: [
      {
        head: 'There are a variety of different options available:',
        items: [
          'Flat roof windows',
          'Centre pivot roof windows',
          'Integra roof windows',
          'Conservation roof windows',
          'Roof flashings',
          'Sun tunnels',
          'Top hung windows',
        ],
      },
    ],
    after: ["Our team can help you decide what's the best option for your roof type, project and budget."],
    ctaQuestion: ['Do you want to add more light to your property in', 'Surrey, Berkshire or South London?'],
    ctaLine: 'Call or email to arrange a FREE quotation',
    hero: '84c1f99',
    gallery: ['0a1415c', '7fdde72', 'e61a222', '8c9cc12', '1b10652', '11aa848'],
  },
];

// Old homepage service tile labels (H2s under OUR SERVICES), kept for reference/search copy.
export const homeServiceTiles = ['Slate roof', 'lead work', 'Flat roof', 'Chimney repairs', 'New Roof', 'Roof repair', 'Fascias', 'guttering', 'Velux'];

export const home = {
  title: 'Roofing | Tavan Roofing Contractors | Bracknell',
  description:
    'Tavan Contractors residential, commercial, industrial roofing specialists. Slate roof, Flat Roof, Single ply flat roof, New roof installation, Roof repairs, Lead work, Chimney Repairs, Fascias &gutter cleaning/repair, Velux/skylight installation/repair. Berkshire, Thames Valley, Surrey, South London',
  headline: ['Reputable', 'Reliable', 'Results'],
  intro: [
    'Your roof is your protection against the elements so it’s understandable that when there\'s a problem with your roof you would like to have it fixed as soon as possible by reliable professionals that will provide you with high-quality service and craftsmanship.',
    'Our team of professionals is experienced in all aspects of residential, commercial, and industrial roofing.',
    'So whether you are looking to install a new roof, repairing your roof after storm damage, cleaning your gutters, or upgrading the light in your house by adding skylights, we can guarantee you reputable, reliable results.',
  ],
  quoteLine: 'Contact us for a FREE no-obligation quote',
  quoteBtn: 'FREE Quote',
  servicesHead: ['Our', 'Services'],
  aboutHead: ['About', 'Us'],
  about: [
    'At Tavan we offer a competitively priced, professional roofing service, combined with over 100 man-years of experience and knowledge in the roofing industry.',
    'We carry out roof repairs and install new roofs of all types. Tavan also offers replacement and remedial services for guttering and chimneys.',
    'We are based in Bracknell and operate throughout the home counties and M4 corridor.',
  ],
  clientsHead: ['Our', 'Clients'],
  viewWork: 'View Our Work',
  whatHead: ['What', 'We Do'],
  residential: {
    head: 'Residential',
    body: 'We offer a wide range of residential roofing services, from replacing fascias and gutters to larger repairs and installing new roofs.',
    cta: 'Our Domestic Services',
  },
  commercial: {
    head: 'Commercial',
    body: 'Our commercial roofing team undertakes all aspects of commercial and industrial roofing, including maintenance, refurbishment and complete re-roofing.',
    cta: 'Our Commercial Services',
  },
  estimateHead: ['Request A', 'FREE Estimate'],
  estimateBtn: 'Get a Quote Now',
};

export const domestic = {
  title: 'Domestic roofing build, repair, flat, pitched, slate',
  description:
    'Tavan Contractors are residential, domestic, roofing specialists. Slate roof, Flat Roof, Single ply flat roofs, New roof installation, Roof repairs, Lead work, Chimney Repairs, Fascias & gutter cleaning/ repair, Velux/skylight installation and repair. Berkshire, Thames Valley, Surrey, South London',
  heading: ['Domestic', 'Services'],
  sub: ['High Quality', 'Roofing'],
  body: [
    'Our experienced friendly team undertake all aspects of domestic and commercial roofing. From small domestic extensions, roofing repairs, new roofs to 1000 m² office/industrial buildings.',
    'View all our services below. You can request a FREE no-obligation quote online or if you prefer to talk to the team then please call us.',
  ],
  servicesHead: ['Our', 'Services'],
  // Old card labels on this page (H6s)
  cards: ['Slate Roof', 'Flat Roof', 'New Roof', 'Roof Repair', 'Lead Work', 'Chimney Repair', 'Fascias/Guttering', 'Velux'],
  hero: '244d713',
  gallery: ['92d7510', 'ee8df62', 'd5d1d15', '259b17e', 'd775dec', 'f0be6a5', '0164323', '47ce754', '0a1415c'],
};

export const commercial = {
  title: 'Commercial Services | Roofing Specialists. Berkshire, Thames Valley, Surrey',
  description:
    'Over the past few years we have partnered up with a variety of property specialists to deliver top quality roofing at affordable prices. Warehouses, commercial premises, blocks of flats, council estates, leisure facilities, town centres & schools. Berkshire, Thames Valley, South London, Surrey',
  heading: ['Commercial', 'Services'],
  sub: ['Professional', 'Partners'],
  body: [
    'Over the past few years we have partnered up with a variety of property specialists to deliver top quality roofing at affordable prices. Our work covers warehouses, commercial premises, blocks of flats, council estates, leisure facilities, town centres and schools in and around Berkshire, Thames Valley, Surrey and South London.',
    'Our commercial roofing team undertake a variety of repair and new build projects to help our partners deliver their project on time and within budget.',
  ],
  survey: 'If you would like a free survey contact Dean.',
  surveyBtn: 'Free Survey',
  workWithHead: ['We work', 'with'],
  partners: [
    {
      head: 'Property Developers',
      body: 'Property developers and management companies stripping and re-tiling pitched and flat roofs. We also offer ongoing maintenance service which will give you peace of mind.',
    },
    {
      head: 'Construction Companies',
      body: 'Construction companies sub contract the roofing construction to us as we have the necessary skills to help get the project done on time and within budget.',
    },
    {
      head: 'Architects',
      body: 'Architects call on us to help them construct new builds, extensions and renovations especially if they are working with unusual shapes or materials.',
    },
    { head: 'Insurance companies', body: 'Insurance companies regularly use us to repair damaged and leaking roofs.' },
  ],
  discussHead: ['Discuss', 'your project'],
  discussBtn: 'Contact Dean',
  workHead: ['Our', 'Work'],
  hero: '31edd10',
  gallery: [
    'f1c6ea0', '52416ac', 'e61e908', 'b459fa7', '5b9cda5', '72b614e', 'becfe11', '33d09f7', '5315d64', 'd5d1d15', 'f43d5e1',
    '336ccfd', '449aca2', '4d34de8', '7da831b', '0164323', '7fdde72', 'ba79d60', '5ca43f7', 'c677789', '2883874', 'd4457f2',
    '68f3f63', 'e692de9', '244d713', '2d68f52',
  ],
};

export const work = {
  title: 'Our Work |Roofing Specialists. Berkshire, Thames Valley, Surrey, South London',
  description:
    'We are roofing specialist that deliver high standard roofing repairs, roof, gutter chimney maintenance. We also install new roofs to extension and replace roofs. Gallery.',
  heading: ['Our', 'Work'],
  body: [
    'We are roofing specialist that deliver high standard roofing repairs, roof, gutter chimney maintenance.',
    'We also install new roofs to extension and replace roofs.',
    'Below are samples of our work.',
  ],
  // Old gallery order first (scaffold-1207389_1920.jpg left out: a stock photo by its file name).
  gallery: [
    '46f209e', '1c30e75', '0a1415c', '11aa848', 'c262b84', 'f43d5e1', 'd5d1d15', 'b3cebf9', '0f627bb', '85dc11e', '509b97c',
    '869cda9', '9e6f505', '449aca2', '7fdde72', '50d7bc4', '0164323', '262a419', '689a7d3', '52416ac', '0a86a79', '2883874',
    '8dae341', '90c82a0',
  ],
};

export const contactPage = {
  title: 'Contact | Roofing Specialists. Berkshire, Thames Valley, Surrey, South London',
  description:
    'We cover all aspects of roofing. FREE QUOTE. Slate roof, Flat Roof, Single ply flat roof, New roof installation, Roof repairs, Lead work, Chimney Repairs, Fascias &gutter cleaning/repair, Velux/skylight installation/repair.',
  heading: ['Contact', 'Us'],
  // Old form fields: Name, Email, Phone, "Type your message here..." and the button "GET YOUT QUOTE!"
  fields: { name: 'Name', email: 'Email', phone: 'Phone', message: 'Type your message here...' },
  submit: 'Get your quote!',
  hero: '509b97c',
};

export type Review = { stars: 5; date: string; job: string; text: string; who: string; service?: string };
// Transcribed word for word from the three Rated People review cards on the old homepage slideshow.
export const reviews: Review[] = [
  {
    stars: 5,
    date: '01 Sep 2020',
    job: 'Roof Cleaning',
    text: 'Dean and his team did a great job. Turned up within an hour of our speaking and did the job immediately, at a very reasonable price. He showed us photos of the work he had done to make sure we were happy with it (we couldn’t see the part of the roof in question!). All in all, very satisfied and would thoroughly recommend.',
    who: 'E, SW19',
  },
  {
    stars: 5,
    date: '14 Nov 2019',
    job: 'Velux / Skylight Window',
    text: 'Super service, very professional, squeezed us in as emergency job to sort out leaking roof. Great value for money',
    who: 'Carola, TW2',
    service: 'velux-skylights',
  },
  {
    stars: 5,
    date: '01 Nov 2019',
    job: 'Leadwork',
    text: 'Dean arrived on site at bang on 2pm and was able to fix the issue there and then. Nice polite team, very thorough, I have no hesitation in recommending them to anyone else.',
    who: 'Jon, GU15',
    service: 'lead-work',
  },
];
export const ratedPeople = { alt: 'Proud Member Of RatedPeople.com — for quality, local tradesmen' };

// ── Blog ──────────────────────────────────────────────────────────────────────
export type Block =
  | { t: 'p'; x: string }
  | { t: 'h2'; x: string }
  | { t: 'h3'; x: string }
  | { t: 'ul'; x: string[] }
  | { t: 'img'; id: string; alt: string };

export const blog = {
  title: 'Blog | Tavan Roofing Contractors | Bracknell',
  description:
    'Replacing and repairing your roof can be a daunting job. We help you choose the perfect roof for your house, extension or outdoor building. Residential and commercial roofing contractors',
  heading: ['Our', 'Blog'],
  allPosts: 'All Posts',
};

export const posts = [
  {
    slug: 'how-to-choose-a-skylight',
    oldUrl: '/post/how-to-choose-a-skylight',
    title: 'How to choose a skylight',
    description:
      'Over the last year, we had spent a lot of time in our houses. If you are one of the many who are thinking about building an extension, do a loft conversion or just add a few skylights to bring the light into your house then we know how confusing it can be to choose the correct skylight for your project.',
    author: 'Dean Rainton',
    date: '2021-03-19',
    dateLabel: 'Mar 19, 2021',
    read: '2 min read',
    excerpt:
      'Over the last year, we had spent a lot of time in our houses. If you are one of the many who are thinking about building an extension, do...',
    cover: '7fdde72',
    service: 'velux-skylights',
    blocks: [
      { t: 'p', x: 'Over the last year, we had spent a lot of time in our houses. If you are one of the many who are thinking about building an extension, do a loft conversion or just add a few skylights to bring the light into your house then we know how confusing it can be to choose the correct skylight for your project.' },
      { t: 'h2', x: 'What type of skylight should I buy?' },
      { t: 'p', x: 'Skylights may be plastic or glass, fixed or operable, and made in any number of sizes and styles. They can have insulated glazing, UV-blocking capabilities, louvers, shades, and more. Generally, glass is preferred for skylights as they are more elegant, offer a clear view, and don’t get scratched.' },
      { t: 'p', x: 'Skylight manufacturers test their products for heat loss, solar heat gain, and blockage of the sun’s ultraviolet (UV) rays.' },
      { t: 'p', x: 'Here are five of the measurements used to classify skylights.' },
      { t: 'ul', x: [
        'U-value, which depends not only on the glazing but also on the frame and all related parts, measures the rate of heat flow (from either side) through a skylight. This measurement does not include solar heat gain. The lower the U-value, the better the product resists heat flow.',
        'R-value measures a material’s insulation value—the resistance a material has to heat flow. This value is usually normally placed on the glazing. The higher the R-value, the better it insulates.',
        'Shading coefficient measures solar heat gain through glass. This coefficient compares a particular glazing with a single pane of 1/8-inch-thick, double-strength glass. A low shading coefficient means low solar heat gain.',
        'UV blockage is a value approximated by glazing manufacturers, expressed as a percentage of ultraviolet rays blocked by the glazing.',
        'Visible light transmittance (VLT) is a measurement used by some manufacturers of the percentage of visible light a skylight transmits. If you want plenty of natural light, opt for high VLT values. Tinted glazing, which blocks glare by letting in less light, has low VLT ratings.',
      ] },
      { t: 'h2', x: 'How do you decide where to put skylights?' },
      { t: 'p', x: "The position of your skylights will have a big impact on how much solar heat and how much light is let into your house. For example, installing your skylight on a north-facing roof will offer a consistent amount of natural light year-round. If you're interested in energy savings, we recommend installing your skylight so it faces south." },
      { t: 'h2', x: 'How do I know what size skylight I need?' },
      { t: 'p', x: 'It is important to keep your skylights energy efficient. There are no fixed rules but as a rule of thumb you can use the following:' },
      { t: 'ul', x: [
        'Room with many windows - Your skylight should be approximately 5 percent of the floor square footage.',
        'Room with few windows - Your skylight should be approximately 15 percent of the floor square footage.',
      ] },
      { t: 'h2', x: 'Need guidance or support?' },
      { t: 'p', x: 'If you are planning a project right now, whatever stage you are at, contact us for free expert advice.' },
    ] as Block[],
  },
  {
    slug: 'how-to-choose-the-right-roof-for-your-house-or-extension',
    oldUrl: '/post/how-to-choose-the-right-roof-for-your-house-or-extension',
    title: 'How to choose the right roof for your house or extension?',
    description:
      'Things to take into consideration when choosing a roof for your home or extension. Tavan Contractors specialise in Roof Maintenance & New Roofs. Pitched slate or tile, Flat, Fascias,Velux/skylight',
    author: 'Dean Rainton',
    date: '2021-02-01',
    dateLabel: 'Feb 1, 2021',
    read: '5 min read',
    excerpt:
      'There are many things to take into consideration when it comes to choosing a roof for your home. Your roof is exposed to all that mother...',
    cover: '9e6f505',
    service: 'new-roof',
    tags: ['Flat Roof', 'Fascias & gutter cleaning and repair', 'Chimney Repairs', 'New roof installation', 'Single ply flat roofs', 'Roof repairs', 'Slate roof', 'Velux/skylight installation and repair', 'Lead work'],
    blocks: [
      { t: 'p', x: 'There are many things to take into consideration when it comes to choosing a roof for your home. Your roof is exposed to all that mother nature can throw at it, for example, fallen trees and storm damage (loose tiles).' },
      { t: 'p', x: 'Tavan Contractors can help you with all things roof related. We specialise in general roof maintenance, new and extension roofs. Making the wrong choice can lead to a complicated and expensive error.' },
      { t: 'h2', x: 'What to look for in a roof?' },
      { t: 'p', x: 'When choosing your roof there are many factors to take into consideration.' },
      { t: 'ul', x: ['How long will it last?', 'Will hold its own under extreme weather conditions?', 'Do you want a pitched or flat roof?', 'What will the cost be?', 'Will the final look complement not only the house but also the surrounding environment?'] },
      { t: 'h2', x: 'Pitched roof options' },
      { t: 'h3', x: 'Slate roof' },
      { t: 'p', x: 'Slate roofing tiles have their upsides, mostly the fact that it’s a natural source of the highest quality and is long-lasting and gives a beautiful finish to any home.' },
      { t: 'img', id: '9e6f505', alt: 'Slate roof and dormer by Tavan Contractors' },
      { t: 'h3', x: 'Pros of slate are:' },
      { t: 'ul', x: ['It is fire resistant', 'It has a long life if fitted correctly', 'It can come in a wide range of colours including grey, purple and black', 'It is environmentally friendly – made from natural materials', 'It is long-lasting and durable'] },
      { t: 'h3', x: 'Cons of slate are:' },
      { t: 'ul', x: ['Cost – it is one of the more expensive materials to be used and needs specialist fitters to install', 'They are heavier than your normal roof tile so a good, strong structure is a must', 'Can only be used on sloped roofs'] },
      { t: 'h3', x: 'There are various types of slate:' },
      { t: 'ul', x: ['Naturally sourced', 'Fibre cement which made from cement and other elements', 'Man-made which is mostly made from reconstituted slate'] },
      { t: 'h3', x: 'Tile roof' },
      { t: 'p', x: 'Tile roofs are beautiful and very durable. Traditionally most roofs were made out of slate, fired clay or terra cotta but today’s modern rooftrees are made out of moulded concrete which can be tinted.' },
      { t: 'h3', x: 'Pros of tiles are:' },
      { t: 'img', id: 'bb35755', alt: 'Tiled hip roof by Tavan Contractors' },
      { t: 'ul', x: ['Long lasting for up to 100 years', 'Impervious to rot and insect damage', 'Environmentally friendly material', 'Energy efficient', 'Low maintenance', 'Plenty of style and colour choice'] },
      { t: 'h3', x: 'The cons of tiles are:' },
      { t: 'ul', x: ['Can be expensive', 'Has to be installed by professional roofing contractors', 'Heavyweight so you need a good structure to support the weight', 'Not suitable for slopes of roofs'] },
      { t: 'h2', x: 'Flat roof' },
      { t: 'h3', x: 'Single ply flat roof' },
      { t: 'p', x: 'This is created from a very strong and flexible material made from a synthetic polymer. A flat roof is in fact, not completely flat; it has a very low slope which helps with draining water.' },
      { t: 'h3', x: 'The pros of a flat roof:' },
      { t: 'ul', x: ['Repair costs are relatively low (they take up less space so use fewer materials)', 'They can be versatile – why not turn yours into a roof garden?', 'They are energy efficient. Less overhead space for stagnant air.', 'The material used (normally rubber) is reliable and durable and sustainable'] },
      { t: 'h3', x: 'The cons of a flat roof:' },
      { t: 'ul', x: ['Higher chance of early replacement – life expectancy of a flat roof is around 10 years', 'Unreliable in cold weather; water is more likely to accumulate.'] },
      { t: 'h3', x: 'Felt flat roof' },
      { t: 'p', x: 'Felt roofing is normally used on sheds, garages and extensions. The felt material is often integrated with 2 – 3 layers forming a water-resistant finish.' },
      { t: 'img', id: 'e3b88df', alt: 'Flat roof with rooflights by Tavan Contractors' },
      { t: 'h3', x: 'The pros of felt roofing:' },
      { t: 'ul', x: ['It is one of the cheapest materials to use therefore easy on your pocket', 'It is very versatile and can be used on most properties', 'It is very easy to repair and this will not affect the aesthetics of it'] },
      { t: 'h3', x: 'The cons of felt:' },
      { t: 'ul', x: ['Not great when used in an area with heavy foot traffic', 'Any small area of damage can be disastrous. Ensure items like ladders have padding when using on felt roofing'] },
      { t: 'p', x: 'Felt can last around 15 years and can be recycled so makes this a great eco-friendly material to use.' },
      { t: 'h3', x: 'Fibreglass flat roofing' },
      { t: 'p', x: 'Fibreglass roof is a combination of materials mixed together to form a laminate.' },
      { t: 'h3', x: 'The pros of fibreglass:' },
      { t: 'ul', x: ['It is an incredibly strong material', 'It is lightweight and so will not add too much weight to your structure', 'They are very durable and can last up to 25 years', 'Very easy to repair'] },
      { t: 'h3', x: 'The cons of fibreglass:' },
      { t: 'ul', x: ['Fibreglass is not the cheapest flat roof option', 'It is not suitable for very large areas', 'It’s a fussy material. You cannot install it in any weather, you have to wait for the right conditions'] },
      { t: 'h3', x: 'Rubber flat roofing' },
      { t: 'p', x: 'Rubber roofing is made from material combining recycled tyres, slate and sawdust. It can come either in a roll where it is overlapped or it is available in shingle that has the look of slate tiles.' },
      { t: 'h3', x: 'The pros of rubber:' },
      { t: 'ul', x: ['It is one of the cheaper materials to use', 'It is lightweight and very easy to install', 'It has a long life and can last over 30 years', 'Is fire resistant so gives you added peace of mind'] },
      { t: 'h3', x: 'The cons of rubber:' },
      { t: 'ul', x: ['The colour can fade over time therefore not as attractive as other materials', 'It is another fussy material and can only be installed in dry conditions', 'It is rather delicate and therefore more prone to damage from falling branches etc'] },
      { t: 'h2', x: 'Finishing off your roof' },
      { t: 'p', x: 'Subtle finishes to your roof can make all the difference and really complement your new roof.' },
      { t: 'h3', x: 'Fascias and soffits' },
      { t: 'p', x: 'These are essential to finish your roof and helps protect the roofline and loft area from the elements.' },
      { t: 'h3', x: 'Fascia boards' },
      { t: 'p', x: 'There are 3 types of fascia boards available. The materials used are vinyl, aluminium and timber. Each one has its own quality and each should be considered before choosing.' },
      { t: 'ul', x: ['Timber – gives an eye-pleasing finish, is affordable and is mostly water-resistant', 'Aluminium – easy to install and complements other materials but is slightly more expensive', 'uPVC – very cost-effective, easy to clean and maintain, very durable against the elements and quick to install'] },
      { t: 'h3', x: 'Soffits' },
      { t: 'p', x: 'As with fascias, there are a small selection of soffits available. It is best to consider certain things before investing, for example, your local climate and budget.' },
      { t: 'p', x: 'Again there are various materials used; timber, steel, fibre cement, uPVC and aluminium.' },
      { t: 'ul', x: ['Timber – gives a natural and timeless finish, is recyclable and therefore eco-friendly.', 'Steel – is a long-lasting and durable material, stands up to the elements and can come in a range of colours', 'Fibre cement – is a lightweight material, withstands all the elements and is very affordable', 'uPVC – easy to install and very cost-effective, rot and water-resistant', 'Aluminium – low maintenance, easy installation, can withstand high levels of moisture and does not crack or chip'] },
      { t: 'h3', x: 'Loft windows' },
      { t: 'p', x: 'Loft conversions are a great way to add another room to your property without having to move. There are various types of loft conversion style windows.' },
      { t: 'img', id: '0a1415c', alt: 'Velux roof windows fitted by Tavan Contractors' },
      { t: 'ul', x: [
        'Velux (roof light) – these can be used in your loft space without having to change the original shape. Velux windows are designed to fit flush with the roof. Great if you do not want to spend a fortune.',
        'Casement windows - A more traditional hinged loft extension window like those you probably have in the rest of your house. These loft conversion windows are ideal for dormer conversions and hip to gable conversions where there is a straight wall on at least one part of the roof.',
        'Juliet balcony – perfect for a dormer or gable. This is a tall window with a metal or glass barrier across the front of it. Great if the conversion is overlooking the garden or offers beautiful views and gives plenty of fresh air.',
        'Velux Cabrio balcony – when closed on a pitched roof this looks like a skylight but when opened up it transforms into a small balcony you can step out onto. Great for smaller, compact conversions.',
      ] },
      { t: 'p', x: 'Contact us today for a FREE no obligation quote' },
    ] as Block[],
  },
];

// ── Legal ─────────────────────────────────────────────────────────────────────
export const privacy = {
  title: 'Privacy Policy | Roofing Specialists. Berkshire, Thames Valley, Surrey',
  description: 'Tavan Contractors Privacy Policy',
  heading: 'Privacy Policy',
  sub: 'Internet Privacy & Cookies Policy',
  blocks: [
    { t: 'p', x: 'This is the internet privacy policy for Tavan Contractor Ltd website (the “Website”)' },
    { t: 'p', x: 'This website is the property of Tavan Contractor Ltd . We take the privacy of all visitors to this Website very seriously and therefore set out in this privacy and cookies policy our position regarding certain privacy matters and the use of cookies on this Website.' },
    { t: 'p', x: 'This policy covers all data that is shared by a visitor with us whether directly via https://www.tavancontractor.co.uk or via email. This policy is occasionally updated by us so we suggest you re-review from time to time.' },
    { t: 'p', x: 'This policy provides an explanation as to what happens to any personal data that you share with us, or that we collect from you either directly via this Website or via email.' },
    { t: 'p', x: 'Certain businesses are required under the data protection act to have a data controller. For the purpose of the Data Protection Act 1998 our data controller is Dean Rainton and can be contacted via email at tavancontractorsltd@gmail.com.' },
    { t: 'h2', x: '1. Information we collect' },
    { t: 'p', x: 'In operating our Website we may collect and process the following data about you:' },
    { t: 'p', x: '1.1 Details of your visits to our Website and the resources that you access including, but not limited to, traffic data, location data, weblog statistics and other communication data.' },
    { t: 'p', x: '1.2 Information that you provide by filling in forms on our Website, such as when you register to receive information such as a newsletter or contact us via the contact us page.' },
    { t: 'p', x: '1.3 Information provided to us when you communicate with us for any reason.' },
    { t: 'h2', x: '2. Use of cookies' },
    { t: 'p', x: 'On occasion, we may gather information about your computer for our services, and to provide statistical information regarding the use of our Website to our advertisers.' },
    { t: 'p', x: 'Such information will not identify you personally, it is statistical data about our visitors and their use of our site. This statistical data does not identify any personal details whatsoever. It is used by us to analyse how visitors interact with the Website so that we can continue to develop and improve this Website.' },
    { t: 'p', x: 'We may gather information about your general Internet use by using a cookie file that is downloaded to your computer. Where used, these cookies are downloaded to your computer automatically. This cookie file is stored on the hard drive of your computer as cookies contain information that is transferred to your computer’s hard drive. They help us to improve our Website and the service that we provide to you.' },
    { t: 'p', x: 'All computers have the ability to decline cookies. This can be done by activating the setting on your browser which enables you to decline the cookies. Please note that should you choose to decline cookies, you may be unable to access particular areas of our Website.' },
    { t: 'p', x: 'Any advertising featured on this Website may also incorporate cookies, over which we have no control. Such cookies (if used) would be downloaded once you click on advertisements on our Website.' },
    { t: 'p', x: 'For more information on cookies you can read the guidance at All About Cookies.' },
    { t: 'h2', x: '3. Use of your information' },
    { t: 'p', x: 'The information that we collect and store relating to you is primarily used to enable us to provide our services to you. In addition, we may use the information for the following purposes:' },
    { t: 'p', x: '3.1 To provide you with information requested from us relating to our products or services and to provide information on other products which we feel may be of interest to you if you have consented to receive such information.' },
    { t: 'p', x: '3.2 To meet our contractual commitments to you.' },
    { t: 'p', x: '3.3 To notify you about any changes to our Website, such as improvements or service/product changes, that may affect our service.' },
    { t: 'p', x: '3.4 If you are an existing customer, we may contact you with information about goods and services similar to those which were the subject of a previous sale to you.' },
    { t: 'p', x: '3.5 We may use your data, or permit selected third parties to use your data, so that you can be provided with information about unrelated goods and services which we consider may be of interest to you. We or they may contact you about these goods and services by any of the methods that you consented to at the time your information was collected.' },
    { t: 'p', x: '3.6 If you are a new customer, we will only contact you or allow third parties to contact you only when you have provided consent and only by those means you provided consent for.' },
    { t: 'p', x: '3.7 If you do not want us to use your data for ourselves or third parties you will have the opportunity to withhold your consent to this when you provide your details to us on the form on which we collect your data.' },
    { t: 'p', x: '3.8 Please be advised that we do not reveal information about identifiable individuals to our advertisers but we may, on occasion, provide them with aggregate statistical information about our visitors such as your area of residence or age group.' },
    { t: 'h2', x: '4. Storing your personal data' },
    { t: 'p', x: '4.1 We may transfer data that we collect from you to locations outside of the European Economic area for processing and storing. In addition, it may be processed by staff operating outside the European Economic area who work for us or for one of our suppliers. For example, such staff may be engaged in the processing and concluding of your order, the processing of your payment details and the provision of support services. By submitting your personal data, you agree to this transfer, storing or processing. We will take all reasonable steps to make sure that your data is treated securely and in agreement with this privacy policy.' },
    { t: 'p', x: '4.2 Data that is provided to us is stored on our secure servers. Details relating to any transactions entered into via our site will be encrypted to ensure its safety.' },
    { t: 'p', x: '4.3 The transmission of information via the internet is not completely secure and therefore we cannot guarantee the security of data sent to us electronically and the transmission of such data is entirely at your own risk. Where we have given you (or where you have chosen) a password so that you can access certain areas of our site, you are responsible for keeping this password confidential.' },
    { t: 'h2', x: '5. Disclosing your information' },
    { t: 'p', x: '5.1 Where applicable, we may disclose your personal information to any member of our group. This includes, where applicable, our subsidiaries, our holding company and its other subsidiaries.' },
    { t: 'p', x: '5.2 We may also disclose your personal information to third parties:' },
    { t: 'p', x: '5.2.1 Where we sell any or all of our business and/or our assets to a third party.' },
    { t: 'p', x: '5.2.2 Where we are legally required to disclose your information.' },
    { t: 'p', x: '5.2.3 To assist fraud protection and minimise credit risk.' },
    { t: 'h2', x: '6. Third party links' },
    { t: 'p', x: 'You might find links to third party websites on our Website. These websites should have their own privacy policies which you should check. We do not accept any responsibility or liability for their policies whatsoever as we have no control over them.' },
    { t: 'h2', x: '7. Access to information' },
    { t: 'p', x: 'The Data Protection Act 1998 gives you the right to access the information that we hold about you. Please note that any demand for access may be subject to payment of a fee of £10 which covers our costs in providing you with the information requested. Should you wish to receive details that we hold about you please contact us using the contact details below.' },
    { t: 'h2', x: '8. Contacting us' },
    { t: 'p', x: 'We welcome any queries, comments or requests you may have regarding this policy please do not hesitate to contact us at tavancontractorsltd@gmail.com' },
    { t: 'p', x: 'If you would prefer to write to us then our contact address is 28 Mills Chase, Bracknell, RG12 9RE.' },
  ] as Block[],
};

export const cookies = {
  title: 'Cookie Policy | Roofing Specialists. Berkshire, Thames Valley, Surrey',
  description: 'Tavan Contractors Privacy policy',
  heading: 'Cookie Policy',
  sub: 'Cookies Policy',
  blocks: [
    { t: 'p', x: 'This cookie policy ("Policy") describes what cookies are and how Tavan Contractors Ltd (“Tavan Contractors Ltd.", "we", "us" or "our") uses them on the Tavancontractors.co.uk website and any of its products or services (collectively, "Website" or "Services").' },
    { t: 'p', x: 'You should read this Policy so you can understand what type of cookies we use, the information we collect using cookies and how that information is used. It also describes the choices available to you regarding accepting or declining the use of cookies. For further information on how we use, store and keep your personal data secure, see our Privacy Policy.' },
    { t: 'h2', x: 'What are cookies?' },
    { t: 'p', x: 'Cookies are small pieces of data stored in text files that are saved on your computer or other devices when websites are loaded in a browser. They are widely used to remember you and your preferences, either for a single visit (through a "session cookie") or for multiple repeat visits (using a "persistent cookie"). Session cookies are temporary cookies that are used during the course of your visit to the Website, and they expire when you close the web browser. Persistent cookies are used to remember your preferences within our Website and remain on your desktop or mobile device even after you close your browser or restart your computer. They ensure a consistent and efficient experience for you while visiting our Website or using our Services. Cookies may be set by the Website ("first-party cookies"), or by third parties, such as those who serve content or provide advertising or analytics services on the website ("third party cookies"). These third parties can recognise you when you visit our website and also when you visit certain other websites.' },
    { t: 'h2', x: 'What type of cookies do we use?' },
    { t: 'h3', x: 'Necessary cookies.' },
    { t: 'p', x: 'Necessary cookies allow us to offer you the best possible experience when accessing and navigating through our Website and using its features. For example, these cookies let us recognise that you have created an account and have logged into that account to access the content.' },
    { t: 'h3', x: 'Functionality cookies.' },
    { t: 'p', x: 'Functionality cookies let us operate the Website and our Services in accordance with the choices you make. For example, we will recognise your username and remember how you customised the Website and Services during future visits.' },
    { t: 'h3', x: 'Analytical cookies.' },
    { t: 'p', x: 'These cookies enable us and third-party services to collect aggregated data for statistical purposes on how our visitors use the Website. These cookies do not contain personal information such as names and email addresses and are used to help us improve your user experience of the Website.' },
    { t: 'h3', x: 'Advertising cookies.' },
    { t: 'p', x: 'Advertising cookies allow us and third parties serve relevant ads to you more effectively and help us collect aggregated audit data, research, and performance reporting for advertisers. They also enable us to understand and improve the delivery of ads to you and know when certain ads have been shown to you. Your web browser may request advertisements directly from ad network servers, these networks can view, edit, or set their own cookies, just as if you had requested a web page from their website.' },
    { t: 'p', x: 'Although we do not use cookies to create a profile of your browsing behaviour on third-party sites, we do use aggregate data from third parties to show you relevant, interest-based advertising. We do not provide any personal information that we collect to advertisers.' },
    { t: 'h2', x: 'Do we use web beacons or tracking pixels?' },
    { t: 'p', x: 'Our emails may contain a "web beacon" (or "tracking pixel") to tell us whether our emails are opened and verify any clicks through to links or advertisements within the email. We may use this information for purposes including determining which of our emails are more interesting to users and to query whether users who do not open our emails wish to continue receiving them. The pixel will be deleted when you delete the email. If you do not wish the pixel to be downloaded to your device, you should read the email in plain text view or with images disabled. We also use Facebook and Google pixels to track activity on our website.' },
    { t: 'h2', x: 'What are your cookie options?' },
    { t: 'p', x: "If you don't like the idea of cookies or certain types of cookies, you can change your browser's settings to delete cookies that have already been set and to not accept new cookies. To learn more about how to do this or to learn more about cookies, visit internetcookies.org. Please note, however, that if you delete cookies or do not accept them, you might not be able to use all of the features our Website and Services offer." },
    { t: 'h2', x: 'Changes and amendments.' },
    { t: 'p', x: 'We reserve the right to modify this Policy relating to the Website or Services at any time, effective upon posting of an updated version of this Policy on the Website. When we do we will revise the updated date at the bottom of this page. Continued use of the Website after any such changes shall constitute your consent to such changes.' },
    { t: 'h2', x: 'Acceptance of this policy.' },
    { t: 'p', x: 'You acknowledge that you have read this Policy and agree to all its terms and conditions. By using the Website or its Services you agree to be bound by this Policy. If you do not agree to abide by the terms of this Policy, you are not authorised to use or access the Website and its Services.' },
    { t: 'h2', x: 'What is a cookie?' },
    { t: 'p', x: 'A “cookie” is a piece of information that is stored on your computer’s hard drive and which records how you move your way around a website so that, when you revisit that website, it can present tailored options based on the information stored about your last visit. Cookies can also be used to analyse traffic and for advertising and marketing purposes. Cookies are used by nearly all websites and do not harm your system. If you want to check or change what types of cookies you accept, this can usually be altered within your browser settings. You can block cookies at any time by activating the setting on your browser that allows you to refuse the setting of all or some cookies. However, if you use your browser settings to block all cookies (including essential cookies) you may not be able to access all or parts of our site.' },
    { t: 'h2', x: 'More information about cookies' },
    { t: 'p', x: 'Useful information about cookies, including information about deleting or blocking cookies, can be found at: https://www.allaboutcookies.org' },
    { t: 'p', x: 'A guide to behavioural advertising and online privacy has been produced by the internet advertising industry which can be found at: http://www.youronlinechoices.com' },
    { t: 'p', x: "The UK Information Commissioner's Office (ICO) cookie guide can be found on the ICO website: https://ico.org.uk/your-data-matters/online/cookies" },
    { t: 'h2', x: 'Contact Us' },
    { t: 'p', x: 'We hope the information in this policy provides you with clear information about the purposes for which we use them, but it you have any additional questions, or require any additional information, please review our Privacy Policy, or contact us at tavancontractorsltd@gmail.com' },
    { t: 'p', x: 'If you would prefer to write to us then our contact address is 28 Mills Chase, Bracknell, RG12 9RE.' },
  ] as Block[],
};

// ── Every correction made to the old copy (old → new, where). Reported in the delivery note.
export const TYPO_FIXES: [string, string, string][] = [
  ['council estaes, leirure facilities', 'council estates, leisure facilities', 'Commercial page + meta description'],
  ['Our Commercial Servises', 'Our Commercial Services', 'Home (button)'],
  ['GET YOUT QUOTE!', 'Get your quote!', 'Contact form button'],
  ['We also in stall new roofs', 'We also install new roofs', 'Our Work intro + meta description'],
  ['Invulnerably to rot and insects', 'Invulnerable to rot and insects', 'Slate Roof list'],
  ['Flat roof winds', 'Flat roof windows', 'Velux/Skylights list'],
  ['Planning to replace your in', 'Planning to replace your roof in', 'New Roof call-to-action'],
  ['Call or email us arrange', 'Call or email us to arrange', 'New Roof call-to-action'],
  ['Talk our team', 'Talk to our team', 'Flat Roof call-to-action'],
  ['fixing a slipped tiles', 'fixing slipped tiles', 'Roof Repairs copy + meta description'],
  ['if your your roofing repair', 'if your roofing repair', 'Roof Repairs copy'],
  ['parts of a roof it is not maintained', 'parts of a roof if it is not maintained', 'Chimney Repairs copy'],
  ['give you piece of mind', 'give you peace of mind', 'Commercial page (Property Developers)'],
  ['couldn&rsquo;t', 'couldn’t', 'Review by E, SW19 (HTML code showing in the screenshot)'],
  ['weather conditions7?', 'weather conditions?', 'Blog: right roof'],
  ['What will be cost be?', 'What will the cost be?', 'Blog: right roof'],
  ['compliment (the house / your new roof)', 'complement', 'Blog: right roof (2×)'],
  ['Pitches roof options', 'Pitched roof options', 'Blog: right roof'],
  ['Pro of tiles are:', 'Pros of tiles are:', 'Blog: right roof'],
  ['so your need a good structure', 'so you need a good structure', 'Blog: right roof'],
  ['stagnates air', 'stagnant air', 'Blog: right roof'],
  ['life expectancy 6of a flat roof', 'life expectancy of a flat roof', 'Blog: right roof'],
  ['in a roil', 'in a roll', 'Blog: right roof'],
  ['Facias (heading and text)', 'Fascias', 'Blog: right roof (2×)'],
  ['when opened up in transformers into', 'when opened up it transforms into', 'Blog: right roof'],
  ['don’t get scratch', 'don’t get scratched', 'Blog: skylight'],
  ['how must solar heat', 'how much solar heat', 'Blog: skylight'],
];
