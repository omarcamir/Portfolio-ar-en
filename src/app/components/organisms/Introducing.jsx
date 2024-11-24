import { useTranslations } from "next-intl";
import BackgroundWord from "../atoms/BackgroundWord";
import SectionTitle from "../atoms/SectionTitle";
import SocialMedia from "../molecules/SocialMedia";
import MainButton from "../atoms/MainButton";
import Image from "next/image";
import personImg from "../../../assets/images/person.webp";

const Introducing = () => {
  const t = useTranslations("home");
  return (
    <div className="relative container mx-auto py-10">
      <div className="z-0">
        <BackgroundWord
          position="top-[-15%] md:top-[-10%] left-2 md:left-10"
          word={t("Creative")}
        />
        <BackgroundWord
          position="top-[50%] right-0"
          word={t("Portfolio")}
          strokeColor="#696969E8"
        />
        <div className="w-full h-full "></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-5 items-center z-30">
        <div className="col-span-1">
          <div className="flex items-center space-x-2">
            <div className="line w-[76px] h-0.5 bg-main-color me-[32px]"></div>
            <SectionTitle title={t("Introducing.title")} />
          </div>
          <h2 className="text-h3 md:text-h2 font-bold break-words">
            {t("Introducing.description")}
          </h2>
          <p className="text-body text-text-color break-words mb-5">
            {t("Introducing.subtitle")}
          </p>
          <MainButton title={t("Introducing.VIEW PORTFOLIO")} path={`/about`} />
        </div>
        <div className="col-span-1 flex justify-center items-center gap-5">
          <div className="w-full h-[400px] md:h-[600px]  ">
            <Image src={personImg} alt={t("Introducing.title")} className="w-full my-3" />
          </div>
          <SocialMedia />
        </div>
      </div>
    </div>
  );
};

export default Introducing;
