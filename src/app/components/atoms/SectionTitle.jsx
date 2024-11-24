import React from "react";

const SectionTitle = ({ title, hash, headTitle }) => {
  return (
    <div>
      {title && (
        <h6 className="text-h6 text-main-color font-bold uppercase">
          {hash && <span className="me-2">#</span>}
          {title}
        </h6>
      )}
      {headTitle && (
        <h3 className="text-h4 md:text-h3 font-bold mt-2 break-words uppercase">
          {headTitle}
        </h3>
      )}
    </div>
  );
};

export default SectionTitle;
