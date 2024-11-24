import { cookies } from 'next/headers';
import { MdTv, MdPalette, MdImage, MdLightbulb } from "react-icons/md";
import { getServicesContent } from "@/utils/API";
import ServiceCard from "../atoms/ServiceCard";

const iconMap = {
  pc: <MdTv size={50} className="text-main-color" />,
  art: <MdPalette size={50} className="text-main-color" />,
  img: <MdImage size={50} className="text-main-color" />,
  lamp: <MdLightbulb size={50} className="text-main-color" />
};

const ServicesCards = async () => {
  const cookieStore = cookies();
  const locale = cookieStore.get('NEXT_LOCALE')?.value || 'en';
  
  const services = await getServicesContent();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
      {services?.map((service) => (
        <div className="col-span-1" key={service.id}>
          <ServiceCard
            icon={iconMap[service?.icon]}
            title={locale === "ar" ? service?.titleA : service?.titleE}
            text={locale === "ar" ? service?.textA : service?.textE}
          />
        </div>
      ))}
    </div>
  );
};

export default ServicesCards;