"use client";
import { MdArrowForward, MdArrowBack } from "react-icons/md";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const MainButton = ({
  title,
  onClick,
  currentLocale,
  buttonLocale,
  isArrow,
  path,
}) => {
  const isActive = currentLocale === buttonLocale;
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
    <button
      className={`border border-main-color transition-all duration-200 py-2 px-4 flex items-center
        ${
          isActive && buttonLocale && currentLocale
            ? "bg-main-color text-white"
            : ""
        }
        hover:bg-main-color hover:text-overlay-bg-1 hover:border-text-overlay-bg-1
      `}
      onClick={handleClick}
    >
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

export default MainButton;
