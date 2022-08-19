import React, { useRef, useState } from "react";
import { submitEmail } from "../../services/index";

const FormContact = () => {
  const [showSuccessMesage, setShowSuccessMesage] = useState(false);
  const [error, setError] = useState(false);
  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();

  const handleCommentSubmission = () => {
    setError(false);

    const { value: message } = commentEl.current;
    const { value: name } = nameEl.current;
    const { value: email } = emailEl.current;

    if (!message || !name || !email) {
      setError(true);
      return;
    }
    const commentObj = {
      name,
      email,
      message,
    };

    submitEmail(commentObj).then((res) => {
      setShowSuccessMesage(true);
      setTimeout(() => {
        setShowSuccessMesage(false);
        commentEl.current.value = "";
        nameEl.current.value = "";
        emailEl.current.value = "";
      }, 3000);
    });
  };
  return (
    <div className="lg:absolute z-20 top-[20em] lg:flex lg:justify-center  w-full">
      <div className="h-[640px] lg:bg-white dark:bg-black lg:w-[60%] flex flex-col justify-between mt-20 px-4 ">
        <div className="lg:mt-5">
          <h3 className="text-lg font-bold">Besoin de conseil</h3>
        </div>
        {error && (
          <p className="text-xs text-red-500">Tous les champs sont requis.</p>
        )}

        <form className="flex flex-col md:flex-row ">
          <input
            type="text"
            className="border border-gray-400 w-full h-12 p-5"
            placeholder="Nom"
            ref={nameEl}
            name="name"
          />
          <input
            type="email"
            id=""
            className="border border-gray-400 w-full h-12 p-5 mt-3 md:mt-0 md:ml-5"
            placeholder="Email"
            ref={emailEl}
            name="email"
          />
        </form>
        <textarea
          name="comment"
          id=""
          cols="30"
          rows="10"
          className=" p-5 border border-gray-400 w-full"
          placeholder="Votre message"
          ref={commentEl}
        ></textarea>
        <div className="flex flex-col items-end ">
          <button
            type="button"
            onClick={handleCommentSubmission}
            className="bg-black h-14 w-[50%] rounded-md text-white p-3 font-semibold dark:text-black dark:bg-white lg:mb-5"
          >
            Envoyez votre message
          </button>

          {showSuccessMesage && (
            <span className="text-xl  font-semibold text-green-500">
              Message soumis à Junior.
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

export default FormContact;
