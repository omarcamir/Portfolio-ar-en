import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { getSocialMedia } from "@/utils/API";
import IconLink from "../atoms/IconLink";

const iconMap = {
  facebook: <FaFacebook size={25} className="text-xl text-white" />,
  instagram: <FaInstagram size={25} className="text-xl text-white" />,
  twitter: <FaTwitter size={25} className="text-xl text-white" />,
  youtube: <FaYoutube size={25} className="text-xl text-white" />,
};

const SocialMedia = async ({ iconsDir = "flex-col" }) => {
  const socialMedia = await getSocialMedia();
  return (
    <div className="flex flex-col justify-between items-center gap-5">
      {iconsDir === "flex-col" && (
        <div className="line h-[76px] w-0.5 bg-main-color"></div>
      )}
      <div className={`flex ${iconsDir} justify-between items-center gap-5`}>
        {socialMedia?.map((link) => (
          <div key={link.id}>
            <IconLink
            key={link?.name}
            link={link?.link}
            icon={iconMap[link?.name]}
          />
          </div>
        ))}
      </div>

      {iconsDir === "flex-col" && (
        <div className="line h-[76px] w-0.5 bg-main-color"></div>
      )}
    </div>
  );
};

export default SocialMedia;
