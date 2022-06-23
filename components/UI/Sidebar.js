import react from "react";
import Panel from "./Panel";
import Link from "next/link";
import { useState } from "react";
import AuthorList from "../author/AuthorList";
import ReadBookList from "../book/ReadBookList";

import { useRouter } from "next/dist/client/router";
const Sidebar = (props) => {
// console.log(props,"propssidebar")


  const [isReadBookList, setReadBookList] = useState(false);
  const [isAuthorList, setAuthorList] = useState(false);
 

  const pageRouter = useRouter();
  
  const bookListHandler = () => {
    setAuthorList(false);
    
    setReadBookList(true);
    pageRouter.push("BookListpage")
  };

  const genreListHandler = () => {
    setReadBookList(false);
    setAuthorList(false);
   
  
  };

//  console.log(props,'props_sidebar')

  return (
    <div className="relative flex min-h-screen ">
      {/* { sidebar} */}
      <div className="border-solid shadow-gray-400 shadow-lg  text-black w-64 ">
        {/* header */}
        <div className="flex item-center mt-6 mt-8">
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
              d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
            />
          </svg>
          <span className="text-xl font-extrabold  text-black">
            Book management
          </span>
        </div>
        {/* link/item */}
        <nav>
          <Link
             href="/BookListpage"
            className="flex item-center mr-0 py-3 px-4 grow min-w-full mt-8 hover:bg-slate-500/50"
          >
              <div className="flex  item-center min-w-full py-3 px-4 mt-6 mt-8  hover:bg-slate-500/50">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
            </svg>
            <span className="text-black">Book List</span>
            </div>
          </Link>
         
          <Link
            // onClick={authorListHandler}
            href="/AuthorPage"
            className="flex item-center min-w-full py-3 px-4 mt-6 mt-8 "
          >
              <div className="flex  item-center min-w-full py-3 px-4 mt-6 mt-8 hover:bg-slate-500/50 ">
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
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
                  
              </svg>
                  Author
             
              </div>
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
           

              <span className="text-black">Author</span> */}
            
          </Link>
        </nav>
      </div>
      {/* maincontent */}
      {/* <Panel authorsItem={props.authorsItem}>
       
       {isReadBookList && <ReadBookList />}
       {isAuthorList && <AuthorList />}
       {isGenreList && <GenreList />}
     </Panel> */}

      {props.isReadBookList && (
        <Panel  header='Book Listing'  buttonText="Add Book" bookModal={true} onAddBook={props.onAddBook}>
          <ReadBookList bookData={props.bookData} />
        </Panel>
      )}

{props.isAuthorlist && (
        <Panel  header='Author Listing' buttonText="Add Author" authorModal={true} onAddAuthor={props.onAddAuthor}>
          <AuthorList  authorsItem={props.authorsItem}  onDeleteAuthor={props.onDeleteAuthor}/>
        </Panel>
      )}



    
    </div>
  );
};

export default Sidebar;
