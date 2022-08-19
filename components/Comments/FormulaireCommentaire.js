import React, { useEffect, useState, useRef } from "react";
import { submitComment } from "../../services/index";

const FormulaireCommentaire = ({ slug }) => {
  const [error, setError] = useState(false);
  const [localStorage, setLocalStorage] = useState(null);
  const [showSuccessMesage, setShowSuccessMesage] = useState(false);
  const commentEl = useRef();
  const nameEl = useRef();
  const emailEl = useRef();
  const storeDataEl = useRef();

  useEffect(() => {
    nameEl.current.value = window.localStorage.getItem("name");
    emailEl.current.value = window.localStorage.getItem("email");
  }, []);

  const handleCommentSubmission = () => {
    setError(false);

    const { value: comment } = commentEl.current;
    const { value: name } = nameEl.current;
    const { value: email } = emailEl.current;
    const { checked: storeData } = storeDataEl.current;

    if (!comment || !name || !email) {
      setError(true);
      return;
    }
    const commentObj = {
      name,
      email,
      comment,
      slug,
    };

    if (storeData) {
      window.localStorage.setItem("name", name);
      window.localStorage.setItem("email", email);
    } else {
      window.localStorage.removeItem("name", name);
      window.localStorage.removeItem("email", email);
    }

    submitComment(commentObj).then((res) => {
      setShowSuccessMesage(true);
      setTimeout(() => {
        setShowSuccessMesage(false);
      }, 3000);
    });
  };
  return (
    <div className=" h-[640px] flex flex-col justify-between mt-20">
      <div>
        <h3 className="text-lg font-bold">Laissez un commentaire</h3>
        <small className="text-gray-400">
          Votre email ne seras pas publier.
        </small>
      </div>
      {error && (
        <p className="text-xs text-red-500">Tous les champs sont requis.</p>
      )}
      <div className="flex flex-col md:flex-row ">
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
      </div>
      {/* <input type="text" className="border border-gray-400 w-full h-12 p-5" /> */}
      <textarea
        name="comment"
        id=""
        cols="30"
        rows="10"
        className=" p-5 border border-gray-400 w-full"
        placeholder="Votre message"
        ref={commentEl}
      ></textarea>
      <div className="w-full flex justify-end ">
        <div className="flex  items-start md:items-center justify-end w-[50%] ">
          <input
            type="checkbox"
            ref={storeDataEl}
            name="storeData"
            id="storeData"
          />
          <label
            htmlFor="storeData"
            className="text-xs text-right ml-2 text-gray-500"
          >
            Sauvegarder mon email et nom pour les prochains commentaires.
          </label>
        </div>
      </div>
      <div className="flex flex-col items-end ">
        <button
          type="button"
          onClick={handleCommentSubmission}
          className="bg-black h-14 w-[50%] rounded-md text-white p-3 font-semibold dark:text-black dark:bg-white "
        >
          Postez votre commentaire
        </button>
        {showSuccessMesage && (
          <span className="text-xl mt-3 font-semibold text-green-500">
            Commentaire soumis pour vérification.
          </span>
        )}
      </div>
    </div>
  );
};

export default FormulaireCommentaire;
