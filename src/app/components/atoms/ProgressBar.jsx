const ProgressBar = ({ icon, title, progress }) => {
  return (
    <div className=" flex items-center gap-5 w-full mt-3">
      <div className="border border-main-color p-2 w-10 h-10 rounded-full flex justify-center items-center">
        {icon}
      </div>
      <div className="bar w-full">
        <div className="flex justify-between items-center mb-2">
          <p>{title}</p>
          <p className="text-main-color">{progress}%</p>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="bg-main-color h-3 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
