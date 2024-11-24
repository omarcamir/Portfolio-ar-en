const ServiceCard = ({ icon, title, text }) => {
  return (
    <div className="flex flex-col items-start gap-5 h-full">
      {icon}
      <h3 className="text-h5 md:text-h4 font-bold mt-2">{title}</h3>
      <p className="text-body">{text}</p>
    </div>
  );
};

export default ServiceCard;
