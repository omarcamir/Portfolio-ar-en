import { useTranslations } from "next-intl";
import BackgroundWord from "../atoms/BackgroundWord";
import SectionTitle from "../atoms/SectionTitle";
import Image from "next/image";

const PageHeader = ({ page, imgSrc }) => {
  const t = useTranslations(page);
  const homeTitle = useTranslations("home");
  return (
    <div className="relative">
      <div className="z-0">
        <BackgroundWord
          position="top-[-22%] md:top-[-10%] left-2 md:left-10"
          word={t("title")}
        />
        <div className="w-full h-full "></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 py-5 items-center z-30">
        <div className="col-span-1">
          <div className="flex items-center space-x-2">
            <div className="line w-[76px] h-0.5 bg-main-color me-[32px]"></div>
            <SectionTitle title={t("title")} />
          </div>
          <h2 className="text-h3 md:text-h2 font-bold break-words">
            {t("title")}
          </h2>
          <p className="text-body text-text-color break-words mb-5">
            {t("content")}
          </p>
          <p className="text-h5 break-words">
            {homeTitle("title")} /{" "}
            <span className="text-main-color">{t("title")}</span>
          </p>
        </div>
        {imgSrc && (
          <div className="col-span-1">
            <Image
              src={imgSrc}
              alt={t("title")}
              className="w-full h-auto object-contain"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
