"use client"
import { MdArrowForward, MdArrowBack } from "react-icons/md";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const ArrowLink = ({
  title,
  onClick,
  currentLocale,
  isArrow,
  path,
}) => {
  useEffect(() => {}, [currentLocale]);
  const router = useRouter();
  const handleClick = () => {
    if (path) {
      router.push(path);
    } else if (onClick) {
      onClick();
    }
  };
  return (
    <button onClick={handleClick} className="flex items-center">
      <span
        className={`${
          isArrow ? "hover:me-4 me-2 transition-all duration-200 " : ""
        }`}
      >
        {title}
      </span>
      {isArrow && (
        currentLocale === "ar" ? (
          <MdArrowBack
            className={`transition-all duration-200 hover:mr-2`}
          />
        ) : (
          <MdArrowForward
            className={`transition-all duration-200 hover:ml-2`}
          />
        )
      )}
    </button>
  );
};

export default ArrowLink;
