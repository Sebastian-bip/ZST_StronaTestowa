// ==============================
// Rejestr linków
// ==============================
// Centralny katalog WSZYSTKICH stron w aplikacji.
// Każda strona (sekcja, podsekcja, artykuł) istnieje tylko w jednym miejscu – jedno źródło prawdy.
// 
// STRUKTURA WPISU:
// - id: unikalna nazwa klucza (camelCase)
// - label: nazwa strony wyświetlana w UI
// - href: ścieżka URL strony
// - description: opis treści STRONY (dla SEO, BFS, breadcrumbów, sitemap)
//   * MUSI zawsze istnieć (może być pusty string)
//   * NIE jest opisem menu – to jest zawartość strony
// - meta.flags: flagi semantyczne (np. 'section', 'subSection')
//
// WAŻNE:
// - Ten plik definiuje RZECZYWISTE STRONY aplikacji
// - Nie zawiera żadnych danych związanych z menu (menuDescription itp.)
// - Linki mogą być wielokrotnie używane w menu.js poprzez LINKS.xxx
// - Pogrupowanie wg sekcji to tylko dla czytelności kodu

export const LINKS = {
  // =========================================================================
  // SEKCJE GŁÓWNE (strony zborcze sekcji)
  // =========================================================================
  // Każda sekcja ma swoją stronę zbiorczą (landing page).
  
  szkola: {
    id: 'szkola',
    label: 'Szkoła',
    href: '/szkola',
    description: 'Główna strona sekcji poświęconej Zespołowi Szkół Technicznych – prezentacja szkoły, jej misji i wartości.',
    meta: { flags: ['section'] }
  },

  dokumenty: {
    id: 'dokumenty',
    label: 'Dokumenty',
    href: '/dokumenty',
    description: 'Zbiór oficjalnych dokumentów, regulaminów i polityk obowiązujących w szkole.',
    meta: { flags: ['section'] }
  },

  informacje: {
    id: 'informacje',
    label: 'Informacje',
    href: '/informacje',
    description: 'Ogólne informacje o szkole, aktualności, komunikaty i ważne ogłoszenia.',
    meta: { flags: ['section'] }
  },

  rekrutacja: {
    id: 'rekrutacja',
    label: 'Rekrutacja',
    href: '/rekrutacja',
    description: 'Wszystko o rekrutacji do ZST – oferta edukacyjna, harmonogram, zasady naboru.',
    meta: { flags: ['section'] }
  },

  // =========================================================================
  // PODSEKCJE (strony zborcze podsekcji)
  // =========================================================================

  oSzkole: {
    id: 'oSzkole',
    label: 'O szkole',
    href: '/o-szkole',
    description: 'Poznaj historię, misję i wizję naszej szkoły oraz zapoznaj się z kadrą pedagogiczną.',
    meta: { flags: ['subSection'] }
  },
  
  regulaminy: {
    id: 'regulaminy',
    label: 'Regulaminy',
    href: '/regulaminy',
    description: 'Kompletny wykaz regulaminów obowiązujących w Zespole Szkół Technicznych.',
    meta: { flags: ['subSection'] }
  },

  archiwum: {
    id: 'archiwum',
    label: 'Archiwum',
    href: '/archiwum',
    description: 'Archiwum dokumentów, materiałów i zasobów historycznych szkoły.',
    meta: { flags: ['subSection'] }
  },

  strewaUcznia: {
    id: 'strewaUcznia',
    label: 'Uczniowie',
    href: '/uczniowie',
    description: 'Strefa ucznia: plany lekcji, materiały edukacyjne, ważne informacje dla uczniów.',
    meta: { flags: ['subSection'] }
  },

  strewaRodzica: {
    id: 'strewaRodzica',
    label: 'Rodzice',
    href: '/rodzice',
    description: 'Strefa rodzica: komunikaty, terminy zebrań, kontakt z nauczycielami.',
    meta: { flags: ['subSection'] }
  },

  strefaNauczyciela: {
    id: 'strefaNauczyciela',
    label: 'Nauczyciele',
    href: '/nauczyciele',
    description: 'Strefa nauczyciela: narzędzia, plany lekcji, materiały i informacje dla kadry.',
    meta: { flags: ['subSection'] }
  },

  nabor: {
    id: 'nabor',
    label: 'Nabór',
    href: '/nabor',
    description: 'Informacje o procesie naboru do szkoły, wymagania i procedury.',
    meta: { flags: ['subSection'] }
  },

  // =========================================================================
  // SZKOŁA - podstrony
  // =========================================================================
  
  historiaSzkoly: {
    id: 'historiaSzkoly',
    label: 'Historia szkoły',
    href: '/historia-szkoly',
    description: 'Poznaj historię, tradycje i osiągnięcia Zespołu Szkół Technicznych.',
    meta: { flags: [] }
  },

  kadra: {
    id: 'kadra',
    label: 'Kadra',
    href: '/kadra',
    description: 'Prezentacja kadry pedagogicznej i pracowników szkoły.',
    meta: { flags: [] }
  },

  patron: {
    id: 'patron',
    label: 'Patron szkoły',
    href: '/patron',
    description: 'Informacje o patronie szkoły, jego sylwetce i znaczeniu dla społeczności.',
    meta: { flags: [] }
  },

  // =========================================================================
  // DOKUMENTY - podstrony
  // =========================================================================

  statut: {
    id: 'statut',
    label: 'Statut Szkoły',
    href: '/statut-zst',
    description: 'Statut ZST – podstawowy dokument określający zasady funkcjonowania szkoły.',
    meta: { flags: [] }
  },

  rodo: {
    id: 'rodo',
    label: 'RODO',
    href: '/rodo',
    description: 'Zasady ochrony danych osobowych (RODO) obowiązujące w szkole.',
    meta: { flags: [] }
  },

  politykaPrywatnosci: {
    id: 'politykaPrywatnosci',
    label: 'Polityka prywatności',
    href: '/polityka-prywatnosci',
    description: 'Polityka prywatności i bezpieczeństwa danych w ZST.',
    meta: { flags: [] }
  },

  // ─── Regulaminy ───
  regulaminyParking: {
    id: 'regulaminyParking',
    label: 'Regulamin Parkingu',
    href: '/parking',
    description: 'Zasady korzystania z parkingu szkolnego dla uczniów i pracowników.',
    meta: { flags: [] }
  },

  regulaminyMundurowka: {
    id: 'regulaminyMundurowka',
    label: 'Regulamin Grupy Mundurowej',
    href: '/grupa-mundurowa',
    description: 'Regulamin funkcjonowania i obowiązki członków grupy mundurowej.',
    meta: { flags: [] }
  },

  regulaminyStrzelnica: {
    id: 'regulaminyStrzelnica',
    label: 'Regulamin Strzelnicy',
    href: '/strzelnica',
    description: 'Zasady bezpieczeństwa i korzystania ze strzelnicy szkolnej.',
    meta: { flags: [] }
  },

  // ─── Archiwum ───
  archiwumStaraStrona: {
    id: 'archiwumStaraStrona',
    label: 'Stara strona ZST',
    href: '/old',
    description: 'Archiwalna wersja poprzedniej strony internetowej szkoły.',
    meta: { flags: [] }
  },

  // =========================================================================
  // INFORMACJE - podstrony
  // =========================================================================

  komunikaty: {
    id: 'komunikaty',
    label: 'Komunikaty i ogłoszenia',
    href: '/komunikaty',
    description: 'Aktualne komunikaty, ogłoszenia i ważne informacje dla społeczności szkolnej.',
    meta: { flags: [] }
  },

  // ─── Uczniowie ───
  planLekciUczen: {
    id: 'planLekciUczen',
    label: 'Plan lekcji',
    href: '/plan-lekcji?type=uczen',
    description: 'Aktualny plan lekcji dla uczniów wszystkich klas.',
    meta: { flags: [] }
  },

  wykazPodrecznikow: {
    id: 'wykazPodrecznikow',
    label: 'Wykaz Podręczników',
    href: '/wykaz-podrecznikow',
    description: 'Lista podręczników obowiązujących w bieżącym roku szkolnym.',
    meta: { flags: [] }
  },

  wymaganiaEdukacyjne: {
    id: 'wymaganiaEdukacyjne',
    label: 'Wymagania edukacyjne',
    href: '/wymagania-edukacujne',
    description: 'Wymagania edukacyjne dla przedmiotów i klas w ZST.',
    meta: { flags: [] }
  },

  // ─── Rodzice ───
  zebrania: {
    id: 'zebrania',
    label: 'Terminy zebrań',
    href: '/zebrania',
    description: 'Harmonogram zebrań z rodzicami i opiekunami uczniów.',
    meta: { flags: [] }
  },

  godzinyDostepnosciRodzice: {
    id: 'godzinyDostepnosciRodzice',
    label: 'Godziny dostępności dla nauczycieli',
    href: '/godziny-dostepnosci',
    description: 'Godziny konsultacji nauczycieli dla rodziców i opiekunów.',
    meta: { flags: [] }
  },

  dziennikRodzic: {
    id: 'dziennikRodzic',
    label: 'Dziennik elektroniczny - Vulcan',
    href: '/dziennik-rodzic',
    description: 'Dostęp do elektronicznego dziennika ucznia dla rodziców.',
    meta: { flags: [] }
  },

  // ─── Nauczyciele ───
  planLekcjiNauczyciela: {
    id: 'planLekcjiNauczyciela',
    label: 'Plan lekcji nauczyciela',
    href: '/plan-lekcji?type=nauczyciele',
    description: 'Plan lekcji i zajęć dla nauczycieli ZST.',
    meta: { flags: [] }
  },

  planLekcjiSale: {
    id: 'planLekcjiSale',
    label: 'Plan lekcji sal lekcyjnych',
    href: '/plan-lekcji?type=sala',
    description: 'Harmonogram wykorzystania sal lekcyjnych w szkole.',
    meta: { flags: [] }
  },

  projektyUe: {
    id: 'projektyUe',
    label: 'Projekty UE',
    href: '/projekty-ue',
    description: 'Informacje o projektach współfinansowanych ze środków Unii Europejskiej.',
    meta: { flags: [] }
  },

  // =========================================================================
  // REKRUTACJA - podstrony
  // =========================================================================

  naszaOferta: {
    id: 'naszaOferta',
    label: 'Nasza oferta',
    href: '/oferta',
    description: 'Szczegółowa oferta edukacyjna ZST – kierunki, profile, specjalizacje.',
    meta: { flags: [] }
  },

  harmonogramRekrutacji: {
    id: 'harmonogramRekrutacji',
    label: 'Harmonogram rekrutacji',
    href: '/harmonogram-rekrutacji',
    description: 'Terminy i etapy procesu rekrutacyjnego do szkoły.',
    meta: { flags: [] }
  },

  naborElektroniczny: {
    id: 'naborElektroniczny',
    label: 'Nabór elektroniczny',
    href: '/nabor',
    description: 'System elektronicznego naboru kandydatów do ZST.',
    meta: { flags: [] }
  },

  naborSzkolaBranzowa2stopnia: {
    id: 'naborSzkolaBranzowa2stopnia',
    label: 'Nabór do Branżowej Szkoły 2 Stopnia',
    href: '/nabor-szkola-branzowa-2stopnia',
    description: 'Zasady i informacje o naborze do Branżowej Szkoły II Stopnia.',
    meta: { flags: [] }
  },

  // =========================================================================
  // GŁÓWNE LINKI (top-level, bez sekcji nadrzędnej)
  // =========================================================================

  artykuly: {
    id: 'artykuly',
    label: 'Artykuły ',
    href: '/artykuly',
    description: 'Publikacje, artykuły i relacje z wydarzeń szkolnych.',
    meta: { flags: [] }
  },

  wydarzenienia: {
    id: 'wydarzenienia',
    label: 'Wydarzenia',
    href: '/wydarzenia',
    description: 'Przegląd wydarzeń, imprez i akcji organizowanych przez szkołę',
    meta: { flags: [] }
  },

  kontakt: {
    id: 'kontakt',
    label: 'Kontakt',
    href: '/kontakt',
    description: 'Dane kontaktowe szkoły: adres, telefon, godziny pracy sekretariatu.',
    meta: { flags: [] }
  },
};
