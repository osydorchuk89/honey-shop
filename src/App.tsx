import { Provider } from "react-redux";
import { store } from "./store";
import { Sort } from "./sections/Sort";
import { Header } from "./sections/Header";
import { About } from "./sections/About";
import { Honey } from "./sections/Honey";
import { ContactUs } from "./sections/ContactUs";
import { Contacts } from "./sections/Contacts";
import { Footer } from "./sections/Footer";
import { SuccessPopUp } from "./components/SuccessPopUp";
import { FailurePopUp } from "./components/FailurePopUp";

window.onbeforeunload = () => {
    window.scrollTo(0, 0);
};

export const App = () => {
    return (
        <Provider store={store}>
            <Header />
            <Sort />
            <About />
            <Honey />
            <ContactUs />
            <Contacts />
            <Footer />
            <SuccessPopUp />
            <FailurePopUp />
        </Provider>
    );
};
