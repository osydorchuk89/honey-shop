import { Uniqueness } from "./sections/Uniqueness";
import { Header } from "./sections/Header";
import { About } from "./sections/About";
import { Menu } from "./sections/Menu";
import { ContactUs } from "./sections/ContactUs";
import { Contacts } from "./sections/Contacts";
import { Footer } from "./sections/Footer";

export const App = () => {
    return (
        <main>
            <Header />
            <Uniqueness />
            <About />
            <Menu />
            <ContactUs />
            <Contacts />
            <Footer />
        </main>
    );
};
