import React, { useEffect, useState } from "react";
import * as timeago from "timeago.js";
import TimeAgo from "timeago-react";
import fr from "timeago.js/lib/lang/fr";
import parse from "html-react-parser";
import { getComments } from "../../services/index";

timeago.register("fr", fr);

const Comment = ({ slug }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    getComments(slug).then((result) => setComments(result));
  }, []);

  return (
    <>
      {comments.length > 0 && (
        <>
          {comments.length > 1 ? (
            <h1 className="text-xl font-extrabold">
              {comments.length} Commentaires
            </h1>
          ) : (
            <h1 className="text-xl font-extrabold">
              {comments.length} Commentaire
            </h1>
          )}

          {comments.map((comment, i) => (
            <div key={i} className="mt-8">
              <div className="flex">
                <span className=" font-bold">{comment.name}</span>
                <p className="mx-3">-</p>
                <span className="text-gray-500">
                  <TimeAgo datetime={comment.createdAt} locale="fr" />
                </span>
              </div>
              <div className=" break-all font-Montserrat text-justify">
                {parse(comment.comment)}
              </div>
            </div>
          ))}
        </>
      )}
    </>
  );
};

export default Comment;
