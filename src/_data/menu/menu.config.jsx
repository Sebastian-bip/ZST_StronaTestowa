import { LINKS } from '@/_data/links.config.jsx';

// ==============================
// Struktura menu głównego
// ==============================
// Czysty hierarchiczny schemat nawigacji aplikacji.
// Ten plik NIE definiuje stron – tylko strukturę i relacje między nimi.
// Może być używana w:
// - Desktop: mega-menu (Harvard style)
// - Mobile: kolapsowalne menu boczne
// - Footer: listy linków
//
// NAJWAŻNIEJSZA ZASADA:
// Każdy element menu MUSI być utworzony przez rozłożenie obiektu z LINKS:
//   ...LINKS.xxx
//
// To gwarantuje, że:
// - label, href, id pochodzą z jedynego źródła prawdy (links.js)
// - menu nie duplikuje danych
// - wszelkie zmiany w links.js automatycznie oddziaływają na menu
//
// RÓŻNICA:
// - description w links.js: opisuje TREŚĆ STRONY (SEO, sitemap)
// - meta.menuDescription w menu.js: opisuje sekcję WYŁĄCZNIE W KONTEKŚCIE MENU
//   (pokazywany pod nagłówkiem sekcji w mega-menu)
//
// STRUKTURA SEKCJI MENU:
// {
//   ...LINKS.xxx,                  // Rozpakowanie wszystkich właściwości strony
//   meta: {
//     menuDescription: '...'        // Opis dodatkowy dla menu (opcjonalnie)
//   },
//   children: [ LINKS.xxx, ... ]   // Podrzędne linki lub podsekcje
// }

export const MENU = [
  // =========================================================================
  // SEKCJA: SZKOŁA
  // =========================================================================
  // Rozpakowanie całego obiektu LINKS.szkola (id, label, href, description, meta)
  // Dodanie menu-specyficznych metadanych i podrzędnych linków
  {
    ...LINKS.szkola,
    meta: {
      ...LINKS.szkola.meta,
      // Opis wyświetlany WYŁĄCZNIE w menu (pod nagłówkiem sekcji w mega-menu)
      // Inny niż description w links.js, które opisuje samą stronę
      menuDescription: 'Poznaj naszą szkołę, historię, kadrę i patrona',
      sideContent: null,
    },
    children: [
      LINKS.historiaSzkoly,
      LINKS.kadra,
      LINKS.patron,
    ],
  },

  // =========================================================================
  // SEKCJA: DOKUMENTY
  // =========================================================================
  {
    ...LINKS.dokumenty,
    meta: {
      ...LINKS.dokumenty.meta,
      menuDescription: 'Dokumenty, regulaminy i archiwum szkoły',
      sideContent: null,
    },
    children: [
      LINKS.statut,
      LINKS.rodo,
      LINKS.politykaPrywatnosci,

      // PODSEKCJA: Regulaminy
      // Zagnieżdżona podsekcja z własnymi dziećmi
      {
        ...LINKS.regulaminy,
        meta: {
          ...LINKS.regulaminy.meta,
          flags: ['subSection'],
          menuDescription: 'Regulaminy obowiązujące w placówce',
          sideContent: null,
        },
        children: [
          LINKS.regulaminyParking,
          LINKS.regulaminyMundurowka,
          LINKS.regulaminyStrzelnica,
        ],
      },

      // PODSEKCJA: Archiwum
      {
        ...LINKS.archiwum,
        meta: {
          ...LINKS.archiwum.meta,
          flags: ['subSection'],
          menuDescription: 'Archiwalne materiały i zasoby ZST',
          sideContent: null,
        },
        children: [
          LINKS.archiwumStaraStrona,
        ],
      },
    ],
  },

  // =========================================================================
  // SEKCJA: INFORMACJE
  // =========================================================================
  {
    ...LINKS.informacje,
    meta: {
      ...LINKS.informacje.meta,
      menuDescription: 'Komunikaty, strefy dla uczniów, rodziców i nauczycieli',
      sideContent: null,
    },
    children: [
      LINKS.komunikaty,

      // PODSEKCJA: Uczniowie
      {
        ...LINKS.strewaUcznia,
        meta: {
          ...LINKS.strewaUcznia.meta,
          flags: ['subSection'],
          menuDescription: 'Plany lekcji, materiały edukacyjne, wymagania',
          sideContent: null,
        },
        children: [
          LINKS.planLekciUczen,
          LINKS.wykazPodrecznikow,
          LINKS.wymaganiaEdukacyjne,
        ],
      },

      // PODSEKCJA: Rodzice
      {
        ...LINKS.strewaRodzica,
        meta: {
          ...LINKS.strewaRodzica.meta,
          flags: ['subSection'],
          menuDescription: 'Terminy zebrań, dostępność nauczycieli, dziennik elektroniczny',
          sideContent: null,
        },
        children: [
          LINKS.zebrania,
          LINKS.godzinyDostepnosciRodzice,
          LINKS.dziennikRodzic,
        ],
      },

      // PODSEKCJA: Nauczyciele
      {
        ...LINKS.strefaNauczyciela,
        meta: {
          ...LINKS.strefaNauczyciela.meta,
          flags: ['subSection'],
          menuDescription: 'Plany lekcji dla nauczycieli i sal',
          sideContent: null,
        },
        children: [
          LINKS.planLekcjiNauczyciela,
          LINKS.planLekcjiSale,
        ],
      },

      // Bezpośredni link bez podsekcji
      LINKS.projektyUe,
    ],
  },

  // =========================================================================
  // SEKCJA: REKRUTACJA
  // =========================================================================
  {
    ...LINKS.rekrutacja,
    meta: {
      ...LINKS.rekrutacja.meta,
      menuDescription: 'Oferta edukacyjna, harmonogram i procedura naboru',
      sideContent: null,
    },
    children: [
      LINKS.naszaOferta,

      // PODSEKCJA: Nabór
      {
        ...LINKS.nabor,
        meta: {
          ...LINKS.nabor.meta,
          flags: ['subSection'],
          menuDescription: 'Harmonogram, nabór elektroniczny, kierunki branżowe',
          sideContent: null,
        },
        children: [
          LINKS.harmonogramRekrutacji,
          LINKS.naborElektroniczny,
          LINKS.naborSzkolaBranzowa2stopnia,
        ],
      },
    ],
  },

  // =========================================================================
  // LINKI GŁÓWNE (bez sekcji nadrzędnej)
  // =========================================================================
  // Bezpośrednie linki wyświetlane na poziomie głównym menu.
  // Brak children – to strony docelowe bez zagnieżdżenia.
  {
    ...LINKS.wydarzenia,
    meta: {
      ...LINKS.wydarzenia.meta,
      sideContent: null,
    },
    children: null,
  },

  {
    ...LINKS.kontakt,
    meta: {
      ...LINKS.kontakt.meta,
      sideContent: null,
    },
    children: null,
  },
];
