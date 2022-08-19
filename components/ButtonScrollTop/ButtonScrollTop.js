import React from "react";

const ButtonScrollTop = () => {
  const goToTheTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <button
      className="bg-black opacity-70  hover:opacity-100 dark:bg-white shadow-lg h-12 w-12 flex justify-center items-center cursor-pointer transition duration-300 ease
    
    "
      onClick={goToTheTop}
    >
      <svg
        // width="1.6em"
        // height="1.6em"
        viewBox="0 0 24 24"
        className="text-white dark:text-black w-8 h-8 "
      >
        <path
          fill="currentColor"
          d="M12 20q-.425 0-.712-.288Q11 19.425 11 19V7.825L6.125 12.7q-.3.3-.713.3Q5 13 4.7 12.7t-.3-.7q0-.4.3-.7l6.6-6.6q.15-.15.325-.213q.175-.062.375-.062t.388.062q.187.063.312.213l6.6 6.6q.3.3.3.7q0 .4-.3.7q-.3.3-.713.3q-.412 0-.712-.3L13 7.825V19q0 .425-.287.712Q12.425 20 12 20Z"
        ></path>
      </svg>
    </button>
  );
};

export default ButtonScrollTop;
