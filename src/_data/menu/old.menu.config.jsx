export const MENU =[
    {
        // do zroniania na razie mało wazne
        // wazne zeby byle co bylo i to co najbardziej potrzebne 
        id: 'szkola', type: 'section',
        title: 'Szkoła',
        section: [
            {id: 'oSzkole', type: 'subSection',
             sectionHref:null,
             title: 'O szkole', subTitle: 'test',
             subSection: [
                 // nw gdzie dać
                {id: 'historiaSzkoly', type:'link',href:'/historia-szkoly', title:'Historia szkoły',},
                {id: 'kadra', type:'link',href:'/kadra', title:'Kadra',},
                {id: 'patron', type:'link', href:'/patron', title:'Patron szkoły',},
             ],}
        ],},
    {
        id: 'docs', type: 'section',
        title: 'Dokumenty',
        section: [
            {id: 'statut', type: 'link',href: '/statut-zst',title: 'Statut Szkoły',subTitle: null,},
            {id: 'rodo', type: 'link',href: '/rodo',title: 'RODO',subTitle: null,},
            {id: 'politykaPrywatnosci', type: 'link',href: '/polityka-prywatnosci',title: 'Polityka prywatności',subTitle: null,},
            {id: 'regulaminy', type: 'subSection',
             sectionHref:'/regulaminy',
             title: 'Regulaminy', subTitle: 'Regulaminy obowiazujace w placówce',
             subSection: [
                {id: 'regulaminyParking', type:'link',href:'/parking', title:'Regulamin Parkingu',},
                {id: 'regulaminyMundurowka', type:'link',href:'/grupa-mundurowa', title:'Regulamin Grupy Mundurowej',},
                {id: 'regulaminyStrzelnica', type:'link', href:'/strzelnica', title:'Regulamin Strzelnicy',},
                // przycisk do strony ogólnej
                {id: 'regulaminyZobaczWszysko', type:'linkToAll', href:null, title:'Zobacz wszysko',},
             ],},
            {id: 'archiwum', type: 'subSection',
             sectionHref:null,
             title: 'Archiwum', subTitle: 'Archiwum ZST',
             subSection: [
                {id: 'archiwumStaraStrona', type:'link',href:'/old', title:'Stara strona ZST',},
             ],},
        ],},
    {
        id: 'info', type: 'section',
        title: 'Informacje',
        section: [
            {id: 'komunikaty', type:'link',href:'/komunikaty', title:'Komunikaty i ogłoszenia',},
            {id: 'uczen', type: 'subSection',
             sectionHref:null,
             title: 'Uczniowie', subTitle: 'Strefa ucznia',
             subSection: [
                // zrobic tak zeby dawalo na strone z planem lekcji ale dla ucznow (chyba ?type=uczen)
                {id: 'planLekciUczen', type:'link',href:'/plan-lekcji?type=uczen', title:'Plan lekcji',},
                {id: 'wykazPodrecznikow', type:'link',href:'/wykaz-podrecznikow', title:'Wykaz Podreczników',},
                {id: 'wymaganiaEdukacyjeUczen', type:'link',href:'/wymagania-edukacujne', title:'Wymagania edukacyjne',},
            ],},
            {id: 'rodzic', type: 'subSection',
             sectionHref:null,
             title: 'Rodzice', subTitle: 'Strefa rodzica',
             subSection: [
                {id: 'zebrania', type:'link',href:'/zebrania', title:'Terminy zebrań',},
                {id: 'godzinydostepnosciRodzice', type:'link',href:'/godziny-dostepnosci', title:'Godziny dostepnosci dla nauczycieli',},
                {id: 'dziennikRodzic', type:'link',href:'/dziennik-rodzic', title:'Dziennik elektroniczny - Vulcan',},
            ],},
            {id: 'nauczciel', type: 'subSection',
             sectionHref:null,
             title: 'Nauczyciele', subTitle: 'Strefa nauczyciela',
             subSection: [
                {id: 'planLekcjiNauczycie', type:'link',href:'/plan-lekcji?type=nauczyciele', title:'Plan lekcji nauczyciela',},
                {id: 'planLekcjiSale', type:'link',href:'/plan-lekcji?type=sala', title:'Plan lekcji sal lekcyjncyh',},
            ],},
            {id: 'projektyUe', type:'link',href:'/projekty-ue', title:'Projekty UE',},
        ],},
        {
            id: 'rekrutacja', type: 'section',
            title: 'Rekrutacja',
            section: [
                {id: 'naszaOferta', type:'link',href:'/oferta', title:'Nasza oferta',},
                {id: 'nabor', type: 'subSection',
                 sectionHref:null,
                 title: 'Nabór', subTitle: '',
                 subSection: [
                    {id: '', type:'link',href:'/harmonogram-rekrutacji', title:'Harmonogram rekrutacji',},
                    {id: '', type:'link',href:'/nabor', title:'Nabór elektroniczny',},
                    {id: '', type:'link',href:'/nabor-szkola-branzowa-2stopnia', title:'Nabór do Branzowej Szkoły 2 Stopnia',},
                ],},
        ],},
    {id: 'wydarzenia', type: 'link',href: '/wydarzenia',title: 'Wydarzenia',subTitle: null,},
    {id: 'kontakt', type: 'link',href: '/kontakt',title: 'Kontakt',subTitle: null,},
];