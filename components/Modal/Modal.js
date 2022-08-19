import React, { useEffect, useState, useContext } from "react";
import { ContextStore } from "../../Context/context";
import PostsModal from "../Posts/PostsModal";
import Link from "next/link";
import Image from "next/image";

export default function Modal({ showModal, setShowModal }) {
  const ga4Img =
    "https://res.cloudinary.com/juniorwembopa243/image/upload/v1660688758/google-analytics-nameG-1920_qfl2c7.png";
  const [arrPost, setArrPost] = useState([]);
  const [arrPostSearch, setArrPostSearch] = useState("");

  const { postModal } = useContext(ContextStore);

  useEffect(() => {
    setArrPost(postModal);
  }, [postModal]);

  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-full   flex p-4 items-center my-6 mx-auto max-w-6xl">
              {/*content*/}
              <div
                className="border-0 h-[95vh] w-full rounded-lg shadow-lg  flex flex-col  bg-white
              dark:bg-gray-900  outline-none focus:outline-none "
              >
                <div className=" flex justify-end px-6 mt-2">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 15 15"
                    onClick={() => setShowModal(false)}
                    className="text-gray-500 transition ease-out duration-300 cursor-pointer hover:text-black"
                  >
                    <path
                      fill="currentColor"
                      d="M3.64 2.27L7.5 6.13l3.84-3.84A.92.92 0 0 1 12 2a1 1 0 0 1 1 1a.9.9 0 0 1-.27.66L8.84 7.5l3.89 3.89A.9.9 0 0 1 13 12a1 1 0 0 1-1 1a.92.92 0 0 1-.69-.27L7.5 8.87l-3.85 3.85A.92.92 0 0 1 3 13a1 1 0 0 1-1-1a.9.9 0 0 1 .27-.66L6.16 7.5L2.27 3.61A.9.9 0 0 1 2 3a1 1 0 0 1 1-1c.24.003.47.1.64.27Z"
                    ></path>
                  </svg>
                </div>
                <div className="relative p-6 flex-auto overflow-y-scroll">
                  <input
                    type="text"
                    name=""
                    id=""
                    className="w-full h-10 p-5 mb-10 bg-slate-100 focus:ring-2 ring-green-200 outline-none rounded-md"
                    placeholder="Rechercher un post"
                    onChange={(e) => setArrPostSearch(e.target.value)}
                  />
                  <div className="flex flex-col h-auto  sm:grid grid-cols-2 gap-4 xl:md:grid-cols-4  ">
                    {arrPost
                      .filter((val) => {
                        if (arrPostSearch === "") {
                          return val;
                        } else if (
                          val.node.title
                            .toLowerCase()
                            .includes(arrPostSearch.toLowerCase())
                        ) {
                          return val;
                        }
                      })
                      .map((post, i) => (
                        <div key={i} className=" h-40 ">
                          <div className=" h-full relative">
                            <button className="bg-white font-Montserrat text-black shadow-lg capitalize absolute z-30 p-2 left-3 top-3 rounded-md ">
                              {post.node.slug}
                            </button>
                            <Link href={`/post/${post.node.slug}`}>
                              <Image
                                src={
                                  post.node.featuredPicture
                                    ? post.node.featuredPicture.url
                                    : ga4Img
                                }
                                // src={ga4Img}
                                alt="Google analytics image"
                                layout="fill"
                                objectFit="cover"
                                onClick={() => setShowModal(false)}
                                className=" scale-100 hover:scale-105 ease-out duration-500 cursor-pointer"
                              />
                            </Link>
                          </div>
                        </div>
                      ))}
                  </div>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6  ">
                  <button
                    className="bg-gray-800 text-white active:bg-gray-900 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:bg-black hover:shadow-lg dark:bg-white dark:text-black outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Fermer
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}
