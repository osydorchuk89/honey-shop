export interface LanguageContent {
    title: string;
    text?: string;
    firstParagraph?: string;
    secondParagraph?: string;
    inputOne?: string;
    inputTwo?: string;
    inputThree?: string;
}

interface SectionText {
    en: LanguageContent[] | LanguageContent;
    no: LanguageContent[] | LanguageContent;
}

export const navLinks = [
    { text: { en: "Sort", no: "Sortere" }, href: "#sort" },
    { text: { en: "About", no: "Om" }, href: "#about" },
    { text: { en: "Honey", no: "Honning" }, href: "#honey" },
    { text: { en: "Contact", no: "Kontakt" }, href: "#contact" },
];

export const headerText = {
    en: "Delicious honey from the heart of Norway for you and your family",
    no: "Nydelig honning fra hjertet av Norge til deg og din familie",
};

export const sortText = {
    en: [
        {
            title: "Heather honey",
            text: "Heather honey is considered to be a very special kind: it is characterized by tart deep taste (with a bitter, which increases with time) and saturated aroma. Honey has a dark color and thick texture.",
        },
        {
            title: "Difference",
            text: "Heather honey is a valuable variety, combining unusual taste and healing properties. Bees are active in heather harvesting in Norway in August until September in the Sunnmøre mountain valleys and forests.",
        },
        {
            title: "Summer honey",
            text: "Norwegian summer honey consists of summer nectar flowers that bloom in the Sunnmøre mountain meadows from May to July. These are dandelions, wild raspberries, fruit trees and summer flowers.",
        },
        {
            title: "Taste",
            text: "The taste of flowery honey is quite pronounced and sweet, but at the same time very delicate and delicate with a long herbal aftertaste.",
        },
    ],
    no: [
        {
            title: "Lynghonning",
            text: "Lynghonning anses å være en veldig spesiell type: den er preget av syrlig dyp smak (med en bitter, som øker med tiden) og mettet aroma. Honning har en mørk farge og tykk tekstur.",
        },
        {
            title: "Forskjell",
            text: "Lynghonning er en verdifull sort som kombinerer uvanlig smak og helbredende egenskaper. I Norge er biene aktive i lyngplukking i august til september i Sunnmøres fjelldaler og skoger.",
        },
        {
            title: "Sommerhonning",
            text: "Norsk sommerhonning består av sommerblomster som blomstrer i Sunnmøre fjellenger fra mai til juli. Dette er løvetann, villbringebær, frukttrær og sommerblomster.",
        },
        {
            title: "Smak",
            text: "Smaken av blomsterhonning er ganske uttalt og søt, men samtidig veldig delikat og delikat med en lang urteaktig ettersmak.",
        },
    ],
};

export const aboutText: SectionText = {
    en: {
        title: "The secrets of beekeeping: the way from flower to jar of honey",
        firstParagraph:
            "Beekeeping started in 2015. Every year interest in bees and nature only increased. Now I’m a member of the Norwegian Association of Beekeepers and I took a certified course for beekeepers in Norway.",
        secondParagraph:
            "The hives are located near the city of Sykkylven in the area of the beautiful Sunmersky Alps, so I called my honey Sunnmørealpane honning. This region is famous for its good ecology, clean water from the mountain peaks (water is also needed for bees to produce honey) and mountain meadows, which grow many colors, fruit trees and heather.",
    },
    no: {
        title: "Birøktens hemmeligheter: veien fra blomst til honningkrukke",
        firstParagraph:
            "Jeg begynte med birøkt i 2015. Interessen for bier og naturen bare økte for hvert år. Nå er jeg medlem av Norges Birøkterlag, og jeg har tatt et sertifisert kurs for birøktere i Norge. ",
        secondParagraph:
            "Bikubene står i nærheten av byen Sykkylven i området rundt de vakre Sunmerskijalpene, så jeg har kalt honningen min Sunnṁrealpane honning. Denne regionen er kjent for sin gode økologi, rent vann fra fjelltoppene (vann er også nødvendig for at biene skal kunne produsere honning) og fjellenger, der det vokser mange farger, frukttrær og lyng.",
    },
};

export const honeyText: SectionText = {
    en: {
        title: "Health and taste in every drop",
        firstParagraph:
            "Heather honey has an intense amber hue and a delicate floral bouquet, reminding of the warm summer day and the purity of nature. Each drop of heather honey is a true product of nature, giving you taste and benefit in the same way.",
        secondParagraph:
            "Summer flower honey, collected in fields and forests of Norway, covered with various colors. This honey is filled with bright shades and intense aroma, taking you to the world of summer holiday and serenity. Summer flower honey is not just a product, it is a source of joy and health that gives you energy and prosperity in every drop",
    },
    no: {
        title: "Helse og smak i hver dråpe",
        firstParagraph:
            "Lynghonning har en intens ravfarget fargetone og en delikat blomsterbukett som minner om varme sommerdager og naturens renhet. Hver dråpe lynghonning er et ekte naturprodukt, som gir deg smak og nytte på samme måte.",
        secondParagraph:
            "Sommerblomsthonning, samlet i åkre og skoger i Norge, dekket med forskjellige farger. Denne honningen er fylt med lyse nyanser og intens aroma, som tar deg med til en verden av sommerferie og ro. Sommerblomsthonning er ikke bare et produkt, det er en kilde til glede og helse som gir deg energi og velstand i hver eneste dråpe.",
    },
};

export const contactUsText: SectionText = {
    en: {
        title: "Contact us and we will tell you more",
        firstParagraph:
            "Enter your contact details and we will reply within 24 hours",
        inputOne: "Name",
        inputTwo: "Phone",
        inputThree: "Your question",
    },
    no: {
        title: "Kontakt oss, så forteller vi deg mer",
        firstParagraph:
            "Skriv inn kontaktopplysningene dine, så svarer vi deg innen 24 timer",
        inputOne: "Navn",
        inputTwo: "Telefon",
        inputThree: "Ditt spørsmål",
    },
};
