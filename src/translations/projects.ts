interface ProjectDescriptionTranslation {
  title: string;
  description: string;
  category: string;
}

const en: Record<number, ProjectDescriptionTranslation> = {
  1: {
    title: "Rent A Tap",
    description: "Location-tireuse.fr is a comprehensive service designed to enhance your events with professional beer tap rental. It offers high-quality beer dispensers, real-time monitoring of beer levels, and customizable options for various events, including weddings, birthdays, and corporate gatherings. With a focus on artisanal beer kegs, location-tireuse.fr ensures a seamless and enjoyable beverage experience for all your guests..",
    category: "Event Industry",
  },
  2: {
    title: "TrackLoisirs",
    description: "TrackLoisirs is a digital solution designed to streamline rental activities. It offers remote control of electric motors, real-time equipment tracking, detailed rental statistics, and anti-theft notifications. The system is customizable for various leisure activities, including boating, cycling, and adventure sports. TrackLoisirs helps manage and optimize rental operations efficiently.",
    category: "Renting Industry",
  },
};

const fr: Record<number, ProjectDescriptionTranslation> = {
  1: {
    title: "Location Tireuse",
    description: "Location-tireuse.fr est un service complet conçu pour améliorer vos événements avec la location de tireuses à bière professionnelles. Il propose des distributeurs de bière de haute qualité, un suivi en temps réel des niveaux de bière et des options personnalisables pour divers événements, notamment les mariages, anniversaires et rassemblements d'entreprise. Avec un accent sur les fûts de bière artisanale, location-tireuse.fr garantit une expérience fluide et agréable pour tous vos invités.",
    category: "Event Industry",
  },
  2: {
    title: "TrackLoisirs",
    description: "TrackLoisirs est une solution numérique conçue pour simplifier les activités de location. Elle permet le contrôle à distance des moteurs électriques, le suivi en temps réel des équipements, des statistiques détaillées sur les locations et des notifications anti-vol. Le système est personnalisable pour diverses activités de loisirs, telles que le nautisme, le cyclisme et les sports d'aventure. TrackLoisirs aide à gérer et optimiser les opérations de location de manière efficace.",
    category: "Renting Industry",
  },
};

const de: Record<number, ProjectDescriptionTranslation> = {
  1: {
    title: "Rent A Tap",
    description: "Location-tireuse.fr ist ein umfassender Service, der entwickelt wurde, um Ihre Veranstaltungen mit professioneller Bier-Zapfanlagen-Vermietung zu bereichern. Es bietet hochwertige Bier-Dispenser, Echtzeitüberwachung der Bierstände und anpassbare Optionen für verschiedene Veranstaltungen, einschließlich Hochzeiten, Geburtstagen und Firmenveranstaltungen. Mit einem Fokus auf handwerklich gebraute Bierfässer stellt location-tireuse.fr sicher, dass Ihre Gäste ein nahtloses und angenehmes Getränkeerlebnis genießen.",
    category: "Event Industry",
  },
  2: {
    title: "TrackLoisirs",
    description: "TrackLoisirs ist eine digitale Lösung, die entwickelt wurde, um Freizeitaktivitäten zu rationalisieren. Sie bietet Fernsteuerung von Elektromotoren, Echtzeit-Verfolgung von Ausrüstung, detaillierte Mietstatistiken und Diebstahlbenachrichtigungen. Das System ist für verschiedene Freizeitaktivitäten wie Bootfahren, Radfahren und Abenteuersportarten anpassbar. TrackLoisirs hilft dabei, Mietvorgänge effizient zu verwalten und zu optimieren.",
    category: "Renting Industry",
  },
}


const projectsTranslation = {
  en,
  fr,
  de
}


const projects = [
  {
    id: 1,
    image: "/techify/images/rentatap.png",
    status: "Live",
    partners: 7,
    website: 'https://www.location-tireuse.fr/',
    date: "2024-01-22"
  },
  {
    id: 2,
    image: "/techify/images/track-loisirs.png",
    status: "Live",
    partners: 16,
    website: 'https://www.trackloisirs.com/',
    date: "2023-11-15"
  },
];

export const getProjects = ({ languageCode = 'en' }: { languageCode: string}) => {
  return projects.map(project => {
    const translation = projectsTranslation[languageCode][project.id]
    if (!translation) {
      return null;
    }
    const { title, description, category } = translation;
    return { ...project, title, description, category }
  }).filter(p => !!p)
}