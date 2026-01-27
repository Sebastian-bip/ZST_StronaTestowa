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
      menuDescription: 'Sekcja poświęcona tożsamości, tradycji i wartościom Zespołu Szkół Technicznych.',
      sideContent: null,
    },
    children: [
      LINKS.wydarzenienia,
      {
        ...LINKS.oSzkole,
        meta: {
          ...LINKS.oSzkole.meta,
          flags: ['subSection'],
          menuDescription: 'Poznaj historię, misję i wizję naszej szkoły oraz zapoznaj się z kadrą pedagogiczną.',
          sideContent: null,
        },
        children: [
          LINKS.historiaSzkoly,
          LINKS.patron,
          LINKS.kadra,
        ],
      }
    ],
  },

  // =========================================================================
  // SEKCJA: DOKUMENTY
  // =========================================================================
  {
    ...LINKS.dokumenty,
    meta: {
      ...LINKS.dokumenty.meta,
      menuDescription: 'Zbiór najważniejszych dokumentów, zasad i materiałów formalnych dotyczących funkcjonowania szkoły.',
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
          menuDescription: 'Sekcja dotycząca zasad, przepisów i regulacji obowiązujących w szkole.',
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
          menuDescription: 'Archiwalne materiały i zasoby związane z historią oraz działalnością szkoły.',
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
      menuDescription: 'Informacje i komunikaty dla całej społeczności szkolnej – uczniów, rodziców i nauczycieli.',
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
          menuDescription: 'Obszar przeznaczony dla uczniów – wsparcie, materiały i ważne informacje.',
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
          menuDescription: 'Strefa dla rodziców – komunikacja, wsparcie i dostęp do istotnych informacji.',
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
          menuDescription: 'Sekcja dla nauczycieli – narzędzia, materiały i informacje wspierające pracę dydaktyczną.',
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
      menuDescription: 'Informacje o rekrutacji, ofercie edukacyjnej i możliwościach dołączenia do szkoły.',
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
          menuDescription: 'Wszystko o procesie naboru i zasadach przyjęć do szkoły.',
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
    ...LINKS.artykuly,
    meta: {
      ...LINKS.artykuly.meta,
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
