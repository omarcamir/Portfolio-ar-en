
const IconLink = ({ link, icon }) => {
  return (
    <a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="border border-main-color p-2 w-10 h-10 rounded-full flex justify-center items-center hover:bg-main-color/50"
  >
    {icon}
  </a>
  );
};

export default IconLink;
