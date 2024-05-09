import { useState } from "react";
import { Sort } from "./sections/Sort";
import { Header } from "./sections/Header";
import { About } from "./sections/About";
import { Honey } from "./sections/Honey";
import { ContactUs } from "./sections/ContactUs";
import { Contacts } from "./sections/Contacts";
import { Footer } from "./sections/Footer";
import { LanguageContext } from "./context/LanguageContext";
import { NavigationContext } from "./context/NavigationContext";

window.onbeforeunload = () => {
    window.scrollTo(0, 0);
};

const chosenLanguage = localStorage.getItem("lang");
const hasNorwegianLanguage = ["no", "nb", "nn"].some((item) =>
    navigator.languages.includes(item)
);
const inferredLanguage = hasNorwegianLanguage ? "no" : "en";
const initialLanguage = chosenLanguage ?? inferredLanguage;

export const App = () => {
    const [language, _] = useState({
        language: initialLanguage,
    });
    const [section, setSection] = useState("none");
    const navigationContextValue = {
        section,
        changeSection: (section: string) => setSection(section),
    };

    return (
        <NavigationContext.Provider value={navigationContextValue}>
            <LanguageContext.Provider value={language}>
                <Header />
                <Sort />
                <About />
                <Honey />
                <ContactUs />
                <Contacts />
                <Footer />
            </LanguageContext.Provider>
        </NavigationContext.Provider>
    );
};
