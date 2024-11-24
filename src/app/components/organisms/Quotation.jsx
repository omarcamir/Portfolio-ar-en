import { useTranslations } from "next-intl";
import bg from "../../../../public/qouteBg.webp";
import { FaQuoteRight } from "react-icons/fa";
const Quotation = () => {
  const t = useTranslations("qoute");
  return (
    <div
      style={{
        backgroundImage: `url('${bg.src}')`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center", 
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-8 items-start gap-5 w-full h-full container mx-auto py-10 bg-black/70">
        <div className="icon col-span-1">
          <FaQuoteRight className="text-h1 text-main-color" />
        </div>
        <div className="col-span-1 md:col-span-7 flex flex-col justify-between items-start">
          <div className="flex flex-col items-start">
            <div className="line h-0.5 w-[120px] bg-main-color mb-5"></div>
            <p className="text-h4">
              {t("content")}
            </p>
          </div>
          <div className="text-start mt-5">
            <h5 className="text-h4">{t("name")}</h5>
            <h6 className="text-h5 text-main-color">{t("major")}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quotation;
