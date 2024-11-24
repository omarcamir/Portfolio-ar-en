"use client";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import MainButton from "../atoms/MainButton";
import LanguageSwitcher from "../atoms/LanguageSwitcher";
import Link from "next/link";
import { navLinks } from "@/utils/paths";
import Logo from "../atoms/Logo";
import { scrollToTop } from "@/utils/utils";

// const NavBar = ({locale}) => {
//   return (
//     <div className="flex gap-1 bg-slate-600 border p-3">
//         <Link href="/en" className="font-xl border border-black p-2 bg-white">en</Link>
//         <div>|</div>
//         <Link href="/ar" className="font-xl border border-black p-2 bg-white">ar</Link>
//     </div>
//   )
// }

// export default NavBar

const NavBar = ({ locale }) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavLinkClick = () => {
    setIsOpen(!isOpen);
    scrollToTop();
  };
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <nav className="z-40 py-2 sticky top-0 shadow-sm bg-overlay-bg-1">
      <div className="container mx-auto flex items-center justify-between flex-wrap">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <Logo locale={locale} />
        </div>
        <div className="block lg:hidden">
          <button
            onClick={toggleMenu}
            className="flex items-center px-3 py-2 border rounded text-main-color border-main-color hover:text-white hover:border-white"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div
          className={`w-full lg:flex lg:items-center lg:w-auto transition-all duration-300 pb-5 pt-2 md:py-0 ${
            isOpen ? "" : "hidden"
          }`}
        >
          <div className="ms-auto lg:flex-grow">
            {navLinks.map((navLink, index) => (
              <Link
                key={index}
                href={navLink.path}
                className={`block mt-4 lg:inline-block lg:mt-0 hover:text-main-color ml-4 transition duration-300 ${
                  pathname === navLink.path
                    ? "text-main-color font-semibold"
                    : "text-bg-color"
                }`}
                onClick={handleNavLinkClick}
              >
                {locale === "ar" ? navLink.nameA : navLink.nameE}
              </Link>
            ))}
          </div>
          <div className="justify-between items-center gap-2 mt-3 flex lg:hidden">
            <LanguageSwitcher />
            <MainButton
              title={locale === "ar" ? "تواصل معي" : "Contact Me"}
              isArrow={true}
              path="/contact" // Add the button's path
              pathname={pathname} // Pass the current path
              currentLocale={locale}
            />
          </div>
        </div>
        <div className="justify-between items-center gap-3 hidden lg:flex">
          <LanguageSwitcher />
          <MainButton
            title={locale === "ar" ? "تواصل معي" : "Contact Me"}
            isArrow={true}
            path="/contact" // Add the button's path
            currentLocale={locale}
          />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
