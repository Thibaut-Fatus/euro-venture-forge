const en = [
  "Local technical support and development",
  "Open source technologies prioritized",
  "European data centers and infrastructure",
  "GDPR-compliant by design",
  "No dependency on non-European tech giants",
  "Data security and sovereignty guaranteed",
];

const fr = [
  "Support technique et développement locaux",
  "Priorité aux technologies open source",
  "Centres de données et infrastructures européens",
  "Conformité au RGPD dès la conception",
  "Aucune dépendance aux géants technologiques non européens",
  "Sécurité et souveraineté des données garanties",
];

const de = [
  "Lokaler technischer Support und Entwicklung",
  "Priorität für Open-Source-Technologien",
  "Europäische Rechenzentren und Infrastruktur",
  "DSGVO-konform durch Design",
  "Keine Abhängigkeit von nicht-europäischen Technologie-Giganten",
  "Datensicherheit und -souveränität garantiert",
];

const featuresTranslation = {
  en,
  fr,
  de,
};

export const getFeatures = ({
  languageCode = "en",
}: {
  languageCode: string;
}) => {
  return featuresTranslation[languageCode];
};

const reasonsEn = [
  "Compliance with EU regulations",
  "Support for the European tech ecosystem",
  "Long-term resilience for your business",
  "Protection from foreign legislation",
];

const reasonsFr = [
  "Conformité avec les réglementations de l'UE",
  "Soutien à l'écosystème technologique européen",
  "Résilience à long terme pour votre entreprise",
  "Protection contre la législation étrangère",
];

const reasonsDe = [
  "Einhaltung der EU-Vorschriften",
  "Unterstützung des europäischen Technologie-Ökosystems",
  "Langfristige Widerstandsfähigkeit für Ihr Unternehmen",
  "Schutz vor ausländischer Gesetzgebung",
];

const reasonsTranslation = {
  en: reasonsEn,
  fr: reasonsFr,
  de: reasonsDe,
};

export const getReasons = ({
  languageCode = "en",
}: {
  languageCode: string;
}) => {
  return reasonsTranslation[languageCode];
};
