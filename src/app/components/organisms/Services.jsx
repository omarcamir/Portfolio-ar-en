import { useTranslations } from "next-intl";
import BackgroundWord from "../atoms/BackgroundWord";
import SectionTitle from "../atoms/SectionTitle";
import ArrowLink from "../atoms/ArrowLink";
import ServicesCards from "../molecules/ServicesCards";
import { cookies } from "next/headers";

const Services = () => {
  const t = useTranslations("home.Services");
  const cookieStore = cookies();
  const currentLocale = cookieStore.get('NEXT_LOCALE')?.value || 'en'; // Default to 'en' if cookie not found
  
  return (
    <div className="relative container mx-auto py-10">
      <div className="z-0">
        <BackgroundWord
          position="top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
          word={t("title")}
        />
        <div className="w-full h-full "></div>
      </div>
      <div className="z-30">
        <div className="">
          <div className="flex items-center justify-between flex-wrap">
            <SectionTitle
              title={t("title")}
              hash={true}
              headTitle={t("headTitle")}
            />
            <ArrowLink
              title={t("VIEW PORTFOLIO")}
              path={`/services`}
              isArrow={true}
              currentLocale={currentLocale}
            />
          </div>
        </div>
        <div className="mt-6">
        <ServicesCards />
        </div>
      </div>
    </div>
  );
};

export default Services;
