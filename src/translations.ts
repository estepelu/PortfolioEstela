export type Lang = 'en' | 'sv' | 'es'

interface UIStrings {
  nav: { portfolio: string; resume: string; research: string }
  hero: { line1: string; accent1: string; line2: string; accent2: string; subtitle: string; cta1: string; cta2: string }
  about: { heading: string; p1: string; p2: string; p3: string; missionTitle: string; missionText: string; interestsTitle: string }
  projects: { heading: string; subtitle: string; readCase: string; searchPlaceholder: string }
  partners: { heading: string; subtitle: string }
  contact: { heading: string; subtitle: string; email: string; linkedin: string }
  footer: string
  resume: {
    experience: string; education: string; expertise: string; languages: string; leadership: string
    coreStack: string; methods: string; experimental: string; tools: string
    leadershipItems: string[]
    profile: string
  }
  modal: { context: string; action: string; results: string; insight: string; skills: string; tools: string; evidence: string }
  research: {
    heading: string; source: string; citations: string; citationsSince: string
    hIndex: string; hIndexSince: string; i10: string; i10Since: string; papers: string; peerReviewed: string
    citationTrend: string; citationKey: string; high: string; medium: string; low: string
    interests: string; publications: string; total: string; showAll: string; showFewer: string
    updatedNote: string
    keywords: string[]
  }
}

export const translations: Record<Lang, UIStrings> = {
  en: {
    nav: { portfolio: 'portfolio', resume: 'resume', research: 'research profile' },
    hero: {
      line1: 'Turning',
      accent1: 'complex systems',
      line2: 'into decisions, products, and',
      accent2: 'customer outcomes',
      subtitle: "I'm estela, a PhD-level data scientist and systems thinker. I bridge deep technical expertise with commercial delivery across the full spectrum from predictive models and validation pipelines to go-to-market strategy and customer success.",
      cta1: 'Learn More',
      cta2: 'Get in touch',
    },
    about: {
      heading: 'about me',
      p1: "I'm a PhD-level data scientist and systems thinker with 5+ years of experience connecting technical depth with real-world impact across the full spectrum: predictive modelling, data pipelines, customer-facing delivery, and go-to-market execution.",
      p2: "I lead cross-functional projects end-to-end: scoping the problem, building the evidence, and translating findings into decisions that stick. I've partnered with Volvo, Scania, and international research institutes, and co-founded a hardware startup where I managed everything from prototyping to investor communications.",
      p3: 'Whether the role is technical, commercial, or at the boundary I bring the same toolkit: rigorous analysis, clear communication, and a bias for outcomes over outputs.',
      missionTitle: 'My Mission',
      missionText: 'To contribute to real-world problems by connecting the dots between complex systems and human needs.',
      interestsTitle: 'Interests',
    },
    projects: {
      heading: 'strategic projects',
      subtitle: 'High-impact initiatives driving system optimization and user-centric design.',
      readCase: 'Read Case Study',
      searchPlaceholder: 'search projects...',
    },
    partners: {
      heading: 'collaborators & partners',
      subtitle: 'Institutions and organisations I have worked with across research, industry, and ventures.',
    },
    contact: {
      heading: "let's collaborate",
      subtitle: "Interested in data science, autonomous systems, or human factors research? I'd love to hear from you.",
      email: 'Email Me',
      linkedin: 'LinkedIn',
    },
    footer: 'built with scandinavian care.',
    resume: {
      experience: 'Professional Experience',
      education: 'Education',
      expertise: 'Technical Expertise',
      languages: 'Languages',
      leadership: 'Leadership & Awards',
      coreStack: 'Core Stack',
      methods: 'Methods',
      experimental: 'Experimental',
      tools: 'Tools',
      leadershipItems: [
        'Elected Student Representative & Board Member, representing 40+ PhD students in university governance.',
        'Recipient of multiple international grants and travel awards supporting research dissemination.',
      ],
      profile: 'Profile',
    },
    modal: {
      context: 'Context & Challenge',
      action: 'Action',
      results: 'Results',
      insight: 'Key Insight',
      skills: 'Skills',
      tools: 'Tools',
      evidence: 'Evidence',
    },
    research: {
      heading: 'Research Profile',
      source: 'Data pulled from',
      citations: 'Citations',
      citationsSince: 'since 2020',
      hIndex: 'h-index',
      hIndexSince: 'since 2020',
      i10: 'i10-index',
      i10Since: 'since 2020',
      papers: 'Papers',
      peerReviewed: 'peer-reviewed',
      citationTrend: 'Citation Trend',
      citationKey: 'Citation Key',
      high: '\u2265 10 citations',
      medium: '\u2265 4 citations',
      low: '< 4 citations',
      interests: 'Research Interests',
      publications: 'Publications',
      total: 'total',
      showAll: 'Show all {n} papers',
      showFewer: 'Show fewer',
      updatedNote: 'Updated April 2026.',
      keywords: [
        'Predictive Modelling', 'Simulation Validation', 'Digital Human Modelling',
        'Human Motion Analysis', 'Multi-objective Optimisation', 'Posture Prediction',
        'Motion Capture & Sensing', 'Experimental Design', 'Automotive Ergonomics',
        'Validation & Verification', 'Data Pipelines', 'DHM Tools',
      ],
    },
  },

  sv: {
    nav: { portfolio: 'portfolio', resume: 'CV', research: 'forskningsprofil' },
    hero: {
      line1: 'Omvandlar',
      accent1: 'komplexa system',
      line2: 'till beslut, produkter och',
      accent2: 'kundresultat',
      subtitle: 'Jag \u00e4r estela, en datavetare p\u00e5 doktorandniv\u00e5 och systemt\u00e4nkare. Jag kopplar samman djup teknisk expertis med kommersiellt leverans \u00f6ver hela spektrumet \u2013 fr\u00e5n prediktiva modeller och valideringspipelines till marknadsf\u00f6ringsstrategi och kundframg\u00e5ng.',
      cta1: 'L\u00e4s mer',
      cta2: 'Kontakta mig',
    },
    about: {
      heading: 'om mig',
      p1: 'Jag \u00e4r en datavetare p\u00e5 doktorandniv\u00e5 och systemt\u00e4nkare med 5+ \u00e5rs erfarenhet av att koppla tekniskt djup till verklig p\u00e5verkan \u00f6ver hela spektrumet: prediktiv modellering, datapipelines, kundorienterad leverans och marknadsf\u00f6ring.',
      p2: 'Jag leder tv\u00e4rfunktionella projekt fr\u00e5n b\u00f6rjan till slut: definierar problemet, bygger evidensen och \u00f6vers\u00e4tter resultat till beslut som h\u00e5ller. Jag har samarbetat med Volvo, Scania och internationella forskningsinstitut, samt grundat en h\u00e5rdvarustartup d\u00e4r jag ansvarade f\u00f6r allt fr\u00e5n prototyp till investerarkommunikation.',
      p3: 'Oavsett om rollen \u00e4r teknisk, kommersiell eller p\u00e5 gr\u00e4nsen d\u00e4remellan anv\u00e4nder jag samma verktygsupps\u00e4ttning: rigor\u00f6s analys, tydlig kommunikation och fokus p\u00e5 resultat framf\u00f6r output.',
      missionTitle: 'Mitt uppdrag',
      missionText: 'Att bidra till verkliga problem genom att koppla samman komplexa system med m\u00e4nskliga behov.',
      interestsTitle: 'Intressen',
    },
    projects: {
      heading: 'strategiska projekt',
      subtitle: 'H\u00f6geffektiva initiativ som driver systemoptimering och anv\u00e4ndarcentrerad design.',
      readCase: 'L\u00e4s fallstudie',
      searchPlaceholder: 's\u00f6k projekt...',
    },
    partners: {
      heading: 'samarbetspartners',
      subtitle: 'Institutioner och organisationer jag har arbetat med inom forskning, industri och f\u00f6retagande.',
    },
    contact: {
      heading: 'l\u00e5t oss samarbeta',
      subtitle: 'Intresserad av datavetenskap, autonoma system eller human factors-forskning? Jag h\u00f6r g\u00e4rna fr\u00e5n dig.',
      email: 'Skicka e-post',
      linkedin: 'LinkedIn',
    },
    footer: 'byggd med skandinavisk omsorg.',
    resume: {
      experience: 'Yrkeserfarenhet',
      education: 'Utbildning',
      expertise: 'Teknisk kompetens',
      languages: 'Spr\u00e5k',
      leadership: 'Ledarskap & utm\u00e4rkelser',
      coreStack: 'K\u00e4rnteknologier',
      methods: 'Metoder',
      experimental: 'Experimentellt',
      tools: 'Verktyg',
      leadershipItems: [
        'Vald studentrepresentant och styrelseledamot, representerade 40+ doktorander i universitetsstyrning.',
        'Mottagare av flera internationella anslag och resebidrag f\u00f6r forskningsspridning.',
      ],
      profile: 'Profil',
    },
    modal: {
      context: 'Kontext & utmaning',
      action: 'Genomf\u00f6rande',
      results: 'Resultat',
      insight: 'Nyckelinsikt',
      skills: 'Kompetenser',
      tools: 'Verktyg',
      evidence: 'Evidens',
    },
    research: {
      heading: 'Forskningsprofil',
      source: 'Data h\u00e4mtad fr\u00e5n',
      citations: 'Citeringar',
      citationsSince: 'sedan 2020',
      hIndex: 'h-index',
      hIndexSince: 'sedan 2020',
      i10: 'i10-index',
      i10Since: 'sedan 2020',
      papers: 'Artiklar',
      peerReviewed: 'peer-reviewed',
      citationTrend: 'Citeringstrend',
      citationKey: 'Citeringsnyckel',
      high: '\u2265 10 citeringar',
      medium: '\u2265 4 citeringar',
      low: '< 4 citeringar',
      interests: 'Forskningsintressen',
      publications: 'Publikationer',
      total: 'totalt',
      showAll: 'Visa alla {n} artiklar',
      showFewer: 'Visa f\u00e4rre',
      updatedNote: 'Uppdaterad april 2026.',
      keywords: [
        'Prediktiv modellering', 'Simuleringsvalidering', 'Digital m\u00e4nniskomodellering',
        'R\u00f6relseanalys', 'Fler\u00e5lsoptimering', 'Hållningsf\u00f6rutsägelse',
        'R\u00f6relsefångst & sensorer', 'Experimentell design', 'Fordonsergonomi',
        'Validering & verifiering', 'Datapipelines', 'DHM-verktyg',
      ],
    },
  },

  es: {
    nav: { portfolio: 'portfolio', resume: 'curr\u00edculum', research: 'perfil investigador' },
    hero: {
      line1: 'Transformando',
      accent1: 'sistemas complejos',
      line2: 'en decisiones, productos y',
      accent2: 'resultados para el cliente',
      subtitle: 'Soy estela, cient\u00edfica de datos con doctorado y pensadora de sistemas. Conecto la experiencia t\u00e9cnica profunda con la entrega comercial en todo el espectro: desde modelos predictivos y pipelines de validaci\u00f3n hasta estrategia de mercado y \u00e9xito del cliente.',
      cta1: 'Saber m\u00e1s',
      cta2: 'Contactar',
    },
    about: {
      heading: 'sobre m\u00ed',
      p1: 'Soy cient\u00edfica de datos con doctorado y pensadora de sistemas con m\u00e1s de 5 a\u00f1os de experiencia conectando profundidad t\u00e9cnica con impacto real en todo el espectro: modelado predictivo, pipelines de datos, entrega orientada al cliente y ejecuci\u00f3n de estrategia de mercado.',
      p2: 'Lidero proyectos multifuncionales de principio a fin: definiendo el problema, construyendo la evidencia y traduciendo hallazgos en decisiones que perduran. He colaborado con Volvo, Scania e institutos de investigaci\u00f3n internacionales, y cofund\u00e9 una startup de hardware donde gestion\u00e9 todo, desde el prototipado hasta la comunicaci\u00f3n con inversores.',
      p3: 'Ya sea un rol t\u00e9cnico, comercial o en la frontera entre ambos, aporto el mismo conjunto de herramientas: an\u00e1lisis riguroso, comunicaci\u00f3n clara y un enfoque en resultados por encima de la producci\u00f3n.',
      missionTitle: 'Mi misi\u00f3n',
      missionText: 'Contribuir a problemas del mundo real conectando los puntos entre sistemas complejos y necesidades humanas.',
      interestsTitle: 'Intereses',
    },
    projects: {
      heading: 'proyectos estrat\u00e9gicos',
      subtitle: 'Iniciativas de alto impacto que impulsan la optimizaci\u00f3n de sistemas y el dise\u00f1o centrado en el usuario.',
      readCase: 'Ver caso de estudio',
      searchPlaceholder: 'buscar proyectos...',
    },
    partners: {
      heading: 'colaboradores y socios',
      subtitle: 'Instituciones y organizaciones con las que he trabajado en investigaci\u00f3n, industria y emprendimiento.',
    },
    contact: {
      heading: 'colaboremos',
      subtitle: '\u00bfInteresado en ciencia de datos, sistemas aut\u00f3nomos o investigaci\u00f3n en factores humanos? Me encantar\u00eda saber de ti.',
      email: 'Env\u00edame un email',
      linkedin: 'LinkedIn',
    },
    footer: 'hecho con cuidado escandinavo.',
    resume: {
      experience: 'Experiencia profesional',
      education: 'Formaci\u00f3n acad\u00e9mica',
      expertise: 'Competencias t\u00e9cnicas',
      languages: 'Idiomas',
      leadership: 'Liderazgo y reconocimientos',
      coreStack: 'Tecnolog\u00edas principales',
      methods: 'M\u00e9todos',
      experimental: 'Experimental',
      tools: 'Herramientas',
      leadershipItems: [
        'Representante estudiantil electa y miembro de junta directiva, representando a m\u00e1s de 40 doctorandos en la gobernanza universitaria.',
        'Receptora de m\u00faltiples becas internacionales y ayudas de viaje para la difusi\u00f3n de investigaci\u00f3n.',
      ],
      profile: 'Perfil',
    },
    modal: {
      context: 'Contexto y desaf\u00edo',
      action: 'Acci\u00f3n',
      results: 'Resultados',
      insight: 'Aprendizaje clave',
      skills: 'Competencias',
      tools: 'Herramientas',
      evidence: 'Evidencia',
    },
    research: {
      heading: 'Perfil investigador',
      source: 'Datos obtenidos de',
      citations: 'Citas',
      citationsSince: 'desde 2020',
      hIndex: 'h-index',
      hIndexSince: 'desde 2020',
      i10: 'i10-index',
      i10Since: 'desde 2020',
      papers: 'Art\u00edculos',
      peerReviewed: 'revisados por pares',
      citationTrend: 'Tendencia de citas',
      citationKey: 'Clave de citas',
      high: '\u2265 10 citas',
      medium: '\u2265 4 citas',
      low: '< 4 citas',
      interests: 'Intereses de investigaci\u00f3n',
      publications: 'Publicaciones',
      total: 'en total',
      showAll: 'Mostrar los {n} art\u00edculos',
      showFewer: 'Mostrar menos',
      updatedNote: 'Actualizado en abril de 2026.',
      keywords: [
        'Modelado predictivo', 'Validaci\u00f3n de simulaciones', 'Modelado digital humano',
        'An\u00e1lisis de movimiento humano', 'Optimizaci\u00f3n multiobjetivo', 'Predicci\u00f3n postural',
        'Captura de movimiento y sensores', 'Dise\u00f1o experimental', 'Ergonom\u00eda automotriz',
        'Validaci\u00f3n y verificaci\u00f3n', 'Pipelines de datos', 'Herramientas DHM',
      ],
    },
  },
}
