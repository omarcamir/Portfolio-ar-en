import { useTranslations } from "next-intl";

const Statistics = () => {
  const t = useTranslations("Statistics");
  const statisticsData = [
    {
      num: 89,
      title: t("Project Done"),
    },
    {
      num: 57,
      title: t("Award Won"),
    },
    {
      num: 12,
      title: t("Years Experience"),
    },
    {
      num: 136,
      title: t("Happy Clients"),
    },
  ];
  const splitTitle = (title) => {
    return title.split(' ').map((word, index) => (
      <span key={index}>
        {word}
        <br />
      </span>
    ));
  };
  return (
    <div className="container mx-auto py-10">
      <div className="grid grid-cols-1 md:grid-cols-4 justify-center items-center">
        {statisticsData.map((stat, index) => (
          <div className="col-span-1 flex items-center justify-center gap-3" key={index}>
            <h3 className="text-h1 text-main-color cursor-default hover:text-line-color transition-all duration-200">
              {stat.num}
            </h3>
            <h6 className="break-all text-h5">{splitTitle(stat.title)}</h6>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statistics;
