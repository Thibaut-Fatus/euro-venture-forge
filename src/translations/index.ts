
export type TranslationKey = 
  | 'heroTitle1'
  | 'heroTitle2'
  | 'heroSubtitle'
  | 'submitProject'
  | 'learnMore'
  | 'howItWorks'
  | 'howItWorksSubtitle'
  | 'benefits'
  | 'benefitsSubtitle'
  | 'login'
  | 'navHowItWorks'
  | 'navBenefits'
  | 'navProjects'
  | 'navAbout'
  | 'navFaq';

type Translations = {
  [key in TranslationKey]: string;
};

type TranslationsMap = {
  [languageCode: string]: Translations;
};

export const translations: TranslationsMap = {
  en: {
    heroTitle1: 'Transform small business',
    heroTitle2: 'challenges into opportunities',
    heroSubtitle: 'EuroVentureForge helps European small businesses develop shared technology solutions at a fraction of the cost, turning common challenges into sustainable ventures with ongoing revenue.',
    submitProject: 'Submit Your Project',
    learnMore: 'Learn More',
    howItWorks: 'How It Works',
    howItWorksSubtitle: 'We transform small business pain points into sustainable solutions through our unique studio model',
    benefits: 'Small Business Benefits',
    benefitsSubtitle: 'Our studio model delivers unique advantages designed specifically for European small businesses',
    login: 'Log in',
    navHowItWorks: 'How It Works',
    navBenefits: 'Benefits',
    navProjects: 'Projects',
    navAbout: 'About',
    navFaq: 'FAQ'
  },
  fr: {
    heroTitle1: 'Transformez les défis des petites entreprises',
    heroTitle2: 'en opportunités',
    heroSubtitle: 'EuroVentureForge aide les petites entreprises européennes à développer des solutions technologiques partagées à moindre coût, transformant les défis communs en ventures durables avec des revenus continus.',
    submitProject: 'Soumettez Votre Projet',
    learnMore: 'En Savoir Plus',
    howItWorks: 'Comment Ça Marche',
    howItWorksSubtitle: 'Nous transformons les difficultés des petites entreprises en solutions durables grâce à notre modèle de studio unique',
    benefits: 'Avantages pour les PME',
    benefitsSubtitle: 'Notre modèle de studio offre des avantages uniques conçus spécifiquement pour les petites entreprises européennes',
    login: 'Connexion',
    navHowItWorks: 'Comment Ça Marche',
    navBenefits: 'Avantages',
    navProjects: 'Projets',
    navAbout: 'À Propos',
    navFaq: 'FAQ'
  },
  es: {
    heroTitle1: 'Transforma los desafíos de pequeñas empresas',
    heroTitle2: 'en oportunidades',
    heroSubtitle: 'EuroVentureForge ayuda a las pequeñas empresas europeas a desarrollar soluciones tecnológicas compartidas a una fracción del costo, convirtiendo desafíos comunes en empresas sostenibles con ingresos continuos.',
    submitProject: 'Enviar Tu Proyecto',
    learnMore: 'Saber Más',
    howItWorks: 'Cómo Funciona',
    howItWorksSubtitle: 'Transformamos los problemas de las pequeñas empresas en soluciones sostenibles a través de nuestro modelo de estudio único',
    benefits: 'Beneficios para Pequeñas Empresas',
    benefitsSubtitle: 'Nuestro modelo de estudio ofrece ventajas únicas diseñadas específicamente para pequeñas empresas europeas',
    login: 'Iniciar Sesión',
    navHowItWorks: 'Cómo Funciona',
    navBenefits: 'Beneficios',
    navProjects: 'Proyectos',
    navAbout: 'Acerca De',
    navFaq: 'Preguntas Frecuentes'
  },
  de: {
    heroTitle1: 'Verwandeln Sie Herausforderungen kleiner Unternehmen',
    heroTitle2: 'in Chancen',
    heroSubtitle: 'EuroVentureForge hilft europäischen Kleinunternehmen, gemeinsame Technologielösungen zu einem Bruchteil der Kosten zu entwickeln und verwandelt gemeinsame Herausforderungen in nachhaltige Unternehmungen mit laufenden Einnahmen.',
    submitProject: 'Projekt Einreichen',
    learnMore: 'Mehr Erfahren',
    howItWorks: 'Wie Es Funktioniert',
    howItWorksSubtitle: 'Wir verwandeln Schmerzpunkte kleiner Unternehmen in nachhaltige Lösungen durch unser einzigartiges Studiomodell',
    benefits: 'Vorteile für Kleinunternehmen',
    benefitsSubtitle: 'Unser Studiomodell bietet einzigartige Vorteile, die speziell für europäische Kleinunternehmen entwickelt wurden',
    login: 'Anmelden',
    navHowItWorks: 'Wie Es Funktioniert',
    navBenefits: 'Vorteile',
    navProjects: 'Projekte',
    navAbout: 'Über Uns',
    navFaq: 'FAQ'
  },
  it: {
    heroTitle1: 'Trasforma le sfide delle piccole imprese',
    heroTitle2: 'in opportunità',
    heroSubtitle: 'EuroVentureForge aiuta le piccole imprese europee a sviluppare soluzioni tecnologiche condivise a una frazione del costo, trasformando sfide comuni in imprese sostenibili con entrate continue.',
    submitProject: 'Invia Il Tuo Progetto',
    learnMore: 'Scopri di Più',
    howItWorks: 'Come Funziona',
    howItWorksSubtitle: 'Trasformiamo i problemi delle piccole imprese in soluzioni sostenibili attraverso il nostro modello di studio unico',
    benefits: 'Vantaggi per le Piccole Imprese',
    benefitsSubtitle: 'Il nostro modello di studio offre vantaggi unici progettati specificamente per le piccole imprese europee',
    login: 'Accedi',
    navHowItWorks: 'Come Funziona',
    navBenefits: 'Vantaggi',
    navProjects: 'Progetti',
    navAbout: 'Chi Siamo',
    navFaq: 'FAQ'
  },
  pt: {
    heroTitle1: 'Transforme os desafios de pequenas empresas',
    heroTitle2: 'em oportunidades',
    heroSubtitle: 'EuroVentureForge ajuda pequenas empresas europeias a desenvolver soluções tecnológicas compartilhadas a uma fração do custo, transformando desafios comuns em empreendimentos sustentáveis com receita contínua.',
    submitProject: 'Envie Seu Projeto',
    learnMore: 'Saiba Mais',
    howItWorks: 'Como Funciona',
    howItWorksSubtitle: 'Transformamos os desafios das pequenas empresas em soluções sustentáveis através do nosso modelo de estúdio único',
    benefits: 'Benefícios para Pequenas Empresas',
    benefitsSubtitle: 'Nosso modelo de estúdio oferece vantagens únicas projetadas especificamente para pequenas empresas europeias',
    login: 'Entrar',
    navHowItWorks: 'Como Funciona',
    navBenefits: 'Benefícios',
    navProjects: 'Projetos',
    navAbout: 'Sobre',
    navFaq: 'FAQ'
  },
  nl: {
    heroTitle1: 'Transformeer uitdagingen van kleine bedrijven',
    heroTitle2: 'in kansen',
    heroSubtitle: 'EuroVentureForge helpt Europese kleine bedrijven bij het ontwikkelen van gedeelde technologische oplossingen tegen een fractie van de kosten, waarbij gemeenschappelijke uitdagingen worden omgezet in duurzame ondernemingen met doorlopende inkomsten.',
    submitProject: 'Dien Uw Project In',
    learnMore: 'Meer Informatie',
    howItWorks: 'Hoe Het Werkt',
    howItWorksSubtitle: 'We transformeren pijnpunten van kleine bedrijven in duurzame oplossingen via ons unieke studiomodel',
    benefits: 'Voordelen voor Kleine Bedrijven',
    benefitsSubtitle: 'Ons studiomodel biedt unieke voordelen speciaal ontworpen voor Europese kleine bedrijven',
    login: 'Inloggen',
    navHowItWorks: 'Hoe Het Werkt',
    navBenefits: 'Voordelen',
    navProjects: 'Projecten',
    navAbout: 'Over Ons',
    navFaq: 'FAQ'
  }
};

export const getTranslation = (key: TranslationKey, languageCode: string): string => {
  return translations[languageCode]?.[key] || translations.en[key];
};
