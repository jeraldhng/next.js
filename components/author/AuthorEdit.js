import Modal from "../UI/modal";
import { useRef } from "react";
const AuthorEdit = (props) => {
    const authorNameRef = useRef("");

    const onSubmitHandler = (event) => {
        event.preventDefault();
        const enteredAuthorName = authorNameRef.current.value;
    
        const author = {name: enteredAuthorName ,authorId:props.author_id}
        // console.log(author,"author");
        // console.log(props,"props.AuthorEdit");
        props.onEdit(author);
      }

return(  <Modal onClose={props.onClose}>
    <div className="block bg-slate-50 pt-0 p-6 rounded-xl  ">
      <div className="flex items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
          />
        </svg>
        <p className="text-gray-700 font-semibold my-4 text-base">
          Edit Author
        </p>
      </div>

      <form onSubmit={onSubmitHandler}>
        {/* first name */}
        <div className="flex flex-row">
          <div className="w-1/2 mr-1">
            <label htmlFor="email">Author name</label>
            <input
              ref={authorNameRef}
              className="h-8 w-full rounded-md border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-lg shadow-slate-300"
              type="text"
              id="text"
              required
            />
          </div>
        </div>
        <div className="mt-3 flex justify-end space-x-3">
          <button
            onClick={props.onClose}
            className="px-3 py-1 hover:bg-red-300 hover:bg-opacity-50 hover:text-red-900  rounded"
          >
            close
          </button>
          <button className="px-3 py-1 bg-red-800 rounded">Edit Author</button>
        </div>
      </form>
    </div>
  </Modal>)
}
export default AuthorEdit;