import { createContext } from "react";

interface LanguageContextType {
    language: string;
}
export const LanguageContext = createContext<LanguageContextType>(
    {} as LanguageContextType
);
