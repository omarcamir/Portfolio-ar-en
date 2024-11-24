const BackgroundWord = ({ position, word, strokeColor = "#FA5D36" }) => {
  return (
    <div
      // className={`${position} absolute text-transparent text-h2 md:text-[80px] xl:text-[100px] 2xl::text-background-text leading-[281.76px] font-bold`}
      className={`${position} absolute text-transparent md:text-[80px] xl:text-[100px] 2xl:text-background-text leading-[281.76px] font-bold`}
      style={{
        WebkitTextStrokeWidth: "1px",
        WebkitTextStrokeColor: strokeColor,
        zIndex: "-1 ",
      }}
    >
      {word}
    </div>
  );
};

export default BackgroundWord;
