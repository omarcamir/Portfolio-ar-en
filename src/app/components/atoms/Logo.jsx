import Link from "next/link";
import LogoImg from "../../../assets/images/logo.webp";
import Image from "next/image";

const Logo = ({ locale }) => {
  return (
    <Link
      href={"/"}
      className="flex items-center flex-shrink-0 text-white mr-6"
    >
      <Image
        className="w-40"
        src={LogoImg}
        alt={locale === "ar" ? "عمر" : "Omar - Portfolio"}
      />
    </Link>
  );
};

export default Logo;
