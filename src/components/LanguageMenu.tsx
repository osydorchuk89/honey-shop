import { Menu } from "@headlessui/react";
import { Button } from "./Button";

export const LanguageMenu = () => {
    return (
        <Menu as="div" className="rounded-[32px]">
            <Menu.Button className="z-10">
                <Button style="outlined">
                    <p className="text-white text-[18px] leading-[20.67px]">
                        EN
                    </p>
                </Button>
            </Menu.Button>
            <Menu.Items>
                <Menu.Item>
                    <p className="bg-gold text-black text-[18px] leading-[20.67px] text-center px-8 py-3">
                        NO
                    </p>
                </Menu.Item>
            </Menu.Items>
        </Menu>
    );
};
