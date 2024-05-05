import { FacebookIcon, EmailIcon, InstagramIcon, YoutubeIcon } from "./Icons";

const socialMediaItems = [
    { name: "Facebook", component: FacebookIcon, href: "#" },
    { name: "Email", component: EmailIcon, href: "#" },
    { name: "Instagram", component: InstagramIcon, href: "#" },
    { name: "Youtube", component: YoutubeIcon, href: "#" },
];

export const SocialMediaBox = () => {
    return (
        <div className="flex justify-between gap-[72px]">
            {socialMediaItems.map((item) => (
                <a key={item.name} href="#">
                    <item.component />
                </a>
            ))}
        </div>
    );
};
