import { FacebookIcon, EmailIcon, InstagramIcon, YoutubeIcon } from "./Icons";

const socialMediaItems = [
    {
        name: "Facebook",
        component: FacebookIcon,
        href: "https://www.facebook.com/DimaKazantsev1986/",
    },
    {
        name: "Email",
        component: EmailIcon,
        href: "mailto:smahonning@gmail.com",
    },
    {
        name: "Instagram",
        component: InstagramIcon,
        href: "https://www.instagram.com/honning_alpane/",
    },
    {
        name: "Youtube",
        component: YoutubeIcon,
        href: "https://www.youtube.com/channel/UCddC0zIcUYIanSZ217X1v_w",
    },
];

export const SocialMediaBox = () => {
    return (
        <div className="flex justify-between lg:gap-[72px] sm:gap-16 gap-12">
            {socialMediaItems.map((item) => (
                <a key={item.name} href={item.href} target="_blank">
                    <item.component />
                </a>
            ))}
        </div>
    );
};
