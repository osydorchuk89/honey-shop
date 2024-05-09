import { createContext } from "react";

interface NavigationContextType {
    section: string;
    changeSection: (section: string) => void;
}
export const NavigationContext = createContext<NavigationContextType>(
    {} as NavigationContextType
);
