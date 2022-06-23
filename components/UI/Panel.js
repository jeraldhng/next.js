
import { useState } from "react";
import AddBookData from "../book/addBookData";

import AddAuthorData from "../author/AddAuthorData";
const Panel = (props) => {

  // console.log(props,'props_panel')

  // const {onShowModalHandler: onAuthorShowModalHandler, onCloseHandler: onAuthorCloseModalHandler} = useModal('Author')
        const [isModal, setIsModal] = useState(false)

        const onShowModalHandler = () => {
                setIsModal(true);
        }

        const onCloseHandler = () => {
            setIsModal(false);
    }




  return (



    <div className="flex-1 ml-1">
      {/* props.header */}
      <div className="flex justify-between items-center ">
        <div className="bg-white shadow px-2 py-4 mt-5 mb-5">{props.header}</div>
        <button onClick={onShowModalHandler} className=" shadow-zinc-500 border-slate-400 border-solid border-2 shadow-md p-0 w-40 h-12 rounded rounded-lg ">{props.buttonText}</button>
      </div>
      <div className="flex items-center justify-items-center bg-gray-200">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-7 w-10 pr-2 "
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input
          type="text"
          placeholder="search"
          className="bg-gray-200 form-control w-full  px-3
          py-3.5"
        />
      </div>

      {/* <div className="p-3 text-cyan-700 font-extrabold h-7">content</div> */}
      {/* Booklistitem table with data */}
     
      
    {props.children}

  { props.authorModal && isModal &&  <AddAuthorData onClose={onCloseHandler} onAddAuthor={props.onAddAuthor}/>} 
      { props.bookModal && isModal &&  <AddBookData onClose={onCloseHandler} onAddBook={props.onAddBook}/>} 
    
    </div>
  );
};


export default Panel;


