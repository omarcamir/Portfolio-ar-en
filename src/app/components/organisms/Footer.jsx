import { useTranslations } from "next-intl";
import Logo from "../atoms/Logo";
import { navLinks } from "@/utils/paths";
import Link from "next/link";
import SocialMedia from "../molecules/SocialMedia";

const Footer = ({ locale }) => {
  const t = useTranslations("footer");
  return (
    <div className=" py-10 container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
        <div className="col-span-1">
          <Logo />
          <p className="mt-4">{t("description")}</p>
        </div>
        <div className="col-span-1 md:col-span-2 flex flex-col items-end text-center">
          <div className="flex gap-6 md:gap-10 flex-wrap">
            {navLinks?.map((link) => (
              <Link
                key={link.nameE}
                href={link.path}
                className="hover:text-main-color transition-all duration-200"
              >
                {locale === "ar" ? link.nameA : link.nameE}
              </Link>
            ))}
          </div>
        <div className="flex justify-end items-center h-full my-4 md:my-0">
          <SocialMedia iconsDir="flex-row" />
        </div>
        </div>
      </div>
      <div className="line h-0.5 mt-5 bg-line-color"></div>
      <p className="text-center mt-5 text-main-color">{t("copyright")}</p>
    </div>
  );
};

export default Footer;
