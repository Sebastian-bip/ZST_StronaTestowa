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
    description: 'Strona główna sekcji informacji o szkole',
    meta: { flags: ['section'] }
  },

  dokumenty: {
    id: 'dokumenty',
    label: 'Dokumenty',
    href: '/dokumenty',
    description: 'Strona główna sekcji dokumentów i regulaminów',
    meta: { flags: ['section'] }
  },

  informacje: {
    id: 'informacje',
    label: 'Informacje',
    href: '/informacje',
    description: 'Strona główna sekcji informacji ogólnych',
    meta: { flags: ['section'] }
  },

  rekrutacja: {
    id: 'rekrutacja',
    label: 'Rekrutacja',
    href: '/rekrutacja',
    description: 'Strona główna sekcji rekrutacji',
    meta: { flags: ['section'] }
  },

  // =========================================================================
  // PODSEKCJE (strony zborcze podsekcji)
  // =========================================================================
  
  regulaminy: {
    id: 'regulaminy',
    label: 'Regulaminy',
    href: '/regulaminy',
    description: 'Przegląd wszystkich regulaminów obowiązujących w placówce',
    meta: { flags: ['subSection'] }
  },

  archiwum: {
    id: 'archiwum',
    label: 'Archiwum',
    href: '/archiwum',
    description: 'Archiwum materiałów i zasobów ZST',
    meta: { flags: ['subSection'] }
  },

  strewaUcznia: {
    id: 'strewaUcznia',
    label: 'Uczniowie',
    href: '/uczniowie',
    description: 'Strefa dla uczniów – plany lekcji, materiały edukacyjne',
    meta: { flags: ['subSection'] }
  },

  strewaRodzica: {
    id: 'strewaRodzica',
    label: 'Rodzice',
    href: '/rodzice',
    description: 'Strefa dla rodziców – informacje, terminy zebrań, dostępność nauczycieli',
    meta: { flags: ['subSection'] }
  },

  strefaNauczyciela: {
    id: 'strefaNauczyciela',
    label: 'Nauczyciele',
    href: '/nauczyciele',
    description: 'Strefa dla nauczycieli – plany lekcji, narzędzia administracyjne',
    meta: { flags: ['subSection'] }
  },

  nabor: {
    id: 'nabor',
    label: 'Nabór',
    href: '/nabor',
    description: 'Strona główna procedury rekrutacji i naboru do szkoły',
    meta: { flags: ['subSection'] }
  },

  // =========================================================================
  // SZKOŁA - podstrony
  // =========================================================================
  
  historiaSzkoly: {
    id: 'historiaSzkoly',
    label: 'Historia szkoły',
    href: '/historia-szkoly',
    description: 'Historia i tradycje Zespołu Szkół Technicznych',
    meta: { flags: [] }
  },

  kadra: {
    id: 'kadra',
    label: 'Kadra',
    href: '/kadra',
    description: 'Skład kadry pedagogicznej i pracowniczej szkoły',
    meta: { flags: [] }
  },

  patron: {
    id: 'patron',
    label: 'Patron szkoły',
    href: '/patron',
    description: 'Informacje o patronie szkoły i jego znaczeniu',
    meta: { flags: [] }
  },

  // =========================================================================
  // DOKUMENTY - podstrony
  // =========================================================================

  statut: {
    id: 'statut',
    label: 'Statut Szkoły',
    href: '/statut-zst',
    description: 'Statut i regulamin Zespołu Szkół Technicznych',
    meta: { flags: [] }
  },

  rodo: {
    id: 'rodo',
    label: 'RODO',
    href: '/rodo',
    description: 'Informacje o przetwarzaniu danych osobowych i polityka RODO',
    meta: { flags: [] }
  },

  politykaPrywatnosci: {
    id: 'politykaPrywatnosci',
    label: 'Polityka prywatności',
    href: '/polityka-prywatnosci',
    description: 'Polityka prywatności i zasady bezpieczeństwa danych',
    meta: { flags: [] }
  },

  // ─── Regulaminy ───
  regulaminyParking: {
    id: 'regulaminyParking',
    label: 'Regulamin Parkingu',
    href: '/parking',
    description: 'Regulamin korzystania z parkingu szkolnego',
    meta: { flags: [] }
  },

  regulaminyMundurowka: {
    id: 'regulaminyMundurowka',
    label: 'Regulamin Grupy Mundurowej',
    href: '/grupa-mundurowa',
    description: 'Regulamin i zasady działania grupy mundurowej',
    meta: { flags: [] }
  },

  regulaminyStrzelnica: {
    id: 'regulaminyStrzelnica',
    label: 'Regulamin Strzelnicy',
    href: '/strzelnica',
    description: 'Regulamin bezpieczeństwa i używania strzelnicy szkolnej',
    meta: { flags: [] }
  },

  // ─── Archiwum ───
  archiwumStaraStrona: {
    id: 'archiwumStaraStrona',
    label: 'Stara strona ZST',
    href: '/old',
    description: 'Archiwalna wersja strony internetowej szkoły',
    meta: { flags: [] }
  },

  // =========================================================================
  // INFORMACJE - podstrony
  // =========================================================================

  komunikaty: {
    id: 'komunikaty',
    label: 'Komunikaty i ogłoszenia',
    href: '/komunikaty',
    description: 'Bieżące komunikaty, ogłoszenia i wiadomości ze szkoły',
    meta: { flags: [] }
  },

  // ─── Uczniowie ───
  planLekciUczen: {
    id: 'planLekciUczen',
    label: 'Plan lekcji',
    href: '/plan-lekcji?type=uczen',
    description: 'Plan lekcji dla uczniów poszczególnych klas',
    meta: { flags: [] }
  },

  wykazPodrecznikow: {
    id: 'wykazPodrecznikow',
    label: 'Wykaz Podręczników',
    href: '/wykaz-podrecznikow',
    description: 'Lista wymaganych podręczników na poszczególne klasy',
    meta: { flags: [] }
  },

  wymaganiaEdukacyjne: {
    id: 'wymaganiaEdukacyjne',
    label: 'Wymagania edukacyjne',
    href: '/wymagania-edukacujne',
    description: 'Wymagania edukacyjne dla poszczególnych przedmiotów i klas',
    meta: { flags: [] }
  },

  // ─── Rodzice ───
  zebrania: {
    id: 'zebrania',
    label: 'Terminy zebrań',
    href: '/zebrania',
    description: 'Harmonogram zebrań rodziców i opiekunów',
    meta: { flags: [] }
  },

  godzinyDostepnosciRodzice: {
    id: 'godzinyDostepnosciRodzice',
    label: 'Godziny dostępności dla nauczycieli',
    href: '/godziny-dostepnosci',
    description: 'Godziny, w których nauczyciele są dostępni dla rodziców',
    meta: { flags: [] }
  },

  dziennikRodzic: {
    id: 'dziennikRodzic',
    label: 'Dziennik elektroniczny - Vulcan',
    href: '/dziennik-rodzic',
    description: 'Informacje o dostępie do elektronicznego dziennika ucznia',
    meta: { flags: [] }
  },

  // ─── Nauczyciele ───
  planLekcjiNauczyciela: {
    id: 'planLekcjiNauczyciela',
    label: 'Plan lekcji nauczyciela',
    href: '/plan-lekcji?type=nauczyciele',
    description: 'Plan lekcji dla nauczycieli poszczególnych przedmiotów',
    meta: { flags: [] }
  },

  planLekcjiSale: {
    id: 'planLekcjiSale',
    label: 'Plan lekcji sal lekcyjnych',
    href: '/plan-lekcji?type=sala',
    description: 'Harmonogram wykorzystania sal lekcyjnych',
    meta: { flags: [] }
  },

  projektyUe: {
    id: 'projektyUe',
    label: 'Projekty UE',
    href: '/projekty-ue',
    description: 'Informacje o współfinansowanych projektach unijnych',
    meta: { flags: [] }
  },

  // =========================================================================
  // REKRUTACJA - podstrony
  // =========================================================================

  naszaOferta: {
    id: 'naszaOferta',
    label: 'Nasza oferta',
    href: '/oferta',
    description: 'Przegląd oferty edukacyjnej i kierunków kształcenia',
    meta: { flags: [] }
  },

  harmonogramRekrutacji: {
    id: 'harmonogramRekrutacji',
    label: 'Harmonogram rekrutacji',
    href: '/harmonogram-rekrutacji',
    description: 'Harmonogram i terminy procedury rekrutacyjnej',
    meta: { flags: [] }
  },

  naborElektroniczny: {
    id: 'naborElektroniczny',
    label: 'Nabór elektroniczny',
    href: '/nabor',
    description: 'System elektronicznego naboru kandydatów do szkoły',
    meta: { flags: [] }
  },

  naborSzkolaBranzowa2stopnia: {
    id: 'naborSzkolaBranzowa2stopnia',
    label: 'Nabór do Branżowej Szkoły 2 Stopnia',
    href: '/nabor-szkola-branzowa-2stopnia',
    description: 'Informacje o naborze do Branżowej Szkoły 2 Stopnia',
    meta: { flags: [] }
  },

  // =========================================================================
  // GŁÓWNE LINKI (top-level, bez sekcji nadrzędnej)
  // =========================================================================

  wydarzenia: {
    id: 'wydarzenia',
    label: 'Wydarzenia',
    href: '/wydarzenia',
    description: 'Przegląd wydarzeń, imprez i akcji organizowanych przez szkołę',
    meta: { flags: [] }
  },

  kontakt: {
    id: 'kontakt',
    label: 'Kontakt',
    href: '/kontakt',
    description: 'Dane kontaktowe szkoły, adres, godziny urzędowania',
    meta: { flags: [] }
  },
};
