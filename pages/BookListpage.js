import Sidebar from "../components/UI/Sidebar";
import Layout from "../components/UI/Layout";
import { Fragment } from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function BookListpage(props) {
  const [token, setToken] = useState("");
  const [bookData, setBookdata] = useState([]);
  let getToken= '';
  // if (typeof window !== "undefined") {
  //   // Perform localStorage action
  //   getToken = localStorage.getItem("token");
  // }

 const addBookHandler=( async (bookObj)=>{
  let getToken = "";
  if (typeof window !== "undefined") {
    // Perform localStorage action
    getToken = localStorage.getItem("token");
  }
  // console.log(getToken,"getToken")

  axios.defaults.headers["X-ACCESS-ID"] =
    "ef74855d-e9d1-41ea-9823-f295ebbad24e";
  axios.defaults.headers["Content-Type"] = "application/json";
  axios.defaults.headers.Authorization = getToken;
  axios.defaults.headers["Accept"] = "*/*";

  // console.log(bookObj.public_year,"bookObj")
  // console.log(bookObj.title,"bookObj")
  const url = "https://api.bookstore.griter.io/api/v1/books";
  const data = {
    book: {
      title: bookObj.title,
      author_id:bookObj.authorId,
      genre_id:bookObj.genreId,
      serial_number:bookObj.serialNumber,
      published_year:bookObj.public_year,
      cover_photo:bookObj.image,
      fiction:bookObj.fiction
    },
  };
  try{
  const resp = await axios.post(url, data);
  }catch(err){
    // console.log(err,"addBookHandler request error")
  }

 
  // routerResponse.push("/AuthorPage");

  // console.log(author, "authorpage");
  Router.reload('AuthorPage');
 })

  

  async function getBookdata(token) {
   
    axios.defaults.headers["X-ACCESS-ID"] =
      "ef74855d-e9d1-41ea-9823-f295ebbad24e";
    axios.defaults.headers.Authorization = token;
    axios.defaults.headers["Content-Type"] = "application/json";
    axios.defaults.headers["Accept"] = "*/*";

    const url = "https://api.bookstore.griter.io/api/v1/books";
    const data = {
      items: 1,
    };

    let respondData = [];
    try {
      const resp = await axios.get(url);

      // console.log(resp, "ifddddddddddddddddddddddddddddddd");
      // console.log(resp.data.books, "if");
      if (resp.data.books.length > 0) {
        respondData = resp.data.books.map(
          (obj) =>
            (obj = {
              id: obj.id,
              title: obj.title,
              author: obj.author.name,
              publishYear: obj.published_year,
              fiction:obj.fiction
            })
        );
        setBookdata(respondData)
       
      } else {
        respondData = {empty:null}
      }
    } catch (err) {
      // console.log(err);
    }
  }

  











  useEffect(() => {
    const getToken = localStorage.getItem("token");
    getBookdata(getToken);
  }, []);
  // console.log("respondDataBook",bookData)
  // console.log("respondDataBook")

  // useEffect(() => {
  //   // Perform localStorage action
  //    getToken = localStorage.getItem("token");
  //   if (getToken == null) {
  //     responseRouter.push("LoginPage");
  //   } else {
  //     setToken(getToken);
  //   }
  // }, [getToken]);

 
  return (
    <Fragment>
      <Layout />
      <Sidebar isReadBookList={true} bookData={bookData} onAddBook={addBookHandler}></Sidebar>
      {/* use condition to trigger modal */}
    </Fragment>
  );
}

export default BookListpage;
