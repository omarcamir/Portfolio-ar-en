import Image from "next/image";
import React from "react";
import img from "../../../assets/images/person3.webp";
import pdfImg from "../../../assets/images/prime_file-pdf.svg";
import {
  FaWordpress,
  FaHtml5,
  FaCss3,
  FaAngular,
  FaJsSquare,
  FaMagic,
} from "react-icons/fa";
import { FaCropSimple } from "react-icons/fa";
import ProgressBar from "../atoms/ProgressBar";
import BackgroundWord from "../atoms/BackgroundWord";
import { useTranslations } from "next-intl";
import SectionTitle from "../atoms/SectionTitle";
import ArrowLink from "../atoms/ArrowLink";
const MySkills = () => {
  const skills = [
    {
      name: "Wordpress",
      percentage: 95,
    },
    {
      name: "HTML",
      percentage: 85,
    },
    {
      name: "CSS",
      percentage: 70,
    },
    {
      name: "Angular",
      percentage: 76,
    },
    {
      name: "JavaScript",
      percentage: 50,
    },
    {
      name: "illustrator",
      percentage: 46,
    },
  ];

  const iconMap = {
    Wordpress: <FaWordpress className="text-3xl" />,
    HTML: <FaHtml5 className="text-3xl" />,
    CSS: <FaCss3 className="text-3xl" />,
    Angular: <FaAngular className="text-3xl" />,
    JavaScript: <FaJsSquare className="text-3xl" />,
    illustrator: <FaMagic className="text-3xl" />,
  };
  const t = useTranslations("Skills");
  return (
    <div className="relative container mx-auto py-10">
      <div className="z-0">
        <BackgroundWord position="top-[50%] left-0" word={t("title")} />
        <div className="w-full h-full "></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 container mx-auto py-10 items-start z-30">
        <div className="col-span-1 flex flex-col justify-between h-full">
          <div>
            <SectionTitle
              title={t("subtitle")}
              headTitle={t("title")}
              hash={true}
            />
            <ArrowLink path="/about" isArrow={true} title={t("VIEW MORE")} />
          </div>
          <a 
          href="/Omar-Samir-Frontend-Developer-CV.pdf"
          download='Omar-Samir-Frontend-Developer-CV.pdf'
          className="flex items-center gap-1 hover:text-main-color duration-150 transition-all">
            <Image src={pdfImg} alt="" className="h-12 " />
            <p>
              {t("Brant Connor")}
            <p className="text-xs">
              {t("Download CV")}<br />
              Resume PDF
            </p>
            </p>
          </a>
        </div>
        <div className="col-span-1">
          {skills.map((skill) => (
            <div key={skill?.name}>
              <ProgressBar
                icon={iconMap[skill?.name]}
                title={skill?.name}
                progress={skill?.percentage}
              />
            </div>
          ))}
        </div>
        <div className="col-span-1">
          <Image src={img} alt="" className="h-full" />
        </div>
      </div>
    </div>
  );
};

export default MySkills;
