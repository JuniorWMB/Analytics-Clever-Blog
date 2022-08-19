import React from "react";
import Comment from "./Comment";
import FormulaireCommentaire from "./FormulaireCommentaire";

const CommentsForm = ({ slug }) => {
  return (
    <div>
      <Comment slug={slug} />
      <FormulaireCommentaire slug={slug} />
    </div>
  );
};

export default CommentsForm;
