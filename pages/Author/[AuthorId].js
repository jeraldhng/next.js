import axios from "axios";
import { useRouter } from "next/router";
import { Fragment, useEffect, useState } from "react";
import AuthorDetailComponent from "../../components/author/AuthorDetailComponent";

const AuthorDetailEdit = () => {
  const [getAuthorData, setAuthorData] = useState([]);
  const [token, setToken] = useState("");
  const router = useRouter();
  const { AuthorId } = router.query;

  console.log({ router });
  let authorData = [];

  // token
  useEffect(() => {
    // Perform localStorage action
    const getToken = localStorage.getItem("token");
    setToken(getToken);
    if (getToken == null) {
      router.push("/LoginPage");
    }
  }, [router]);

  // console.log(token,"tokentoken")

  async function fetchdata() {
    const getToken = localStorage.getItem("token");

    axios.defaults.headers["X-ACCESS-ID"] =
      "ef74855d-e9d1-41ea-9823-f295ebbad24e";
    axios.defaults.headers.Authorization = getToken;
    axios.defaults.headers["Content-Type"] = "application/json";
    axios.defaults.headers["Accept"] = "*/*";

    //   const url1 = `https://api.bookstore.griter.io/api/v1/authors/id=${authorId}`;
    //   //   const data = { author_id: {} };
    //   const resp1 = await axios.get(url1);
    //   console.log(resp1.data.authors.name, "resp1 name");

    const url = `https://api.bookstore.griter.io/api/v1/books`;
    //   const data = {author_id:{authorId} };
    const resp = await axios.get(url, { author_id: AuthorId });

    if (resp.data.books.length > 0) {
      authorData = resp.data.books.map((book) => ({
        seriesId: book.id,
        title: book.title,
        authorId: book.author_id,
        genre: book.genre.name,
        published_year: book.published_year,
        published_year: book.published_year,
        fiction: book.fiction,
      }));
      //   console.log(resp.data.books[0].genre, "resp books");
      // console.log(authorData, "authorData[authorId]");
    } else {
      authorData = { authorId: AuthorId, empty: true };
    }
    setAuthorData(authorData);
  }

  useEffect(() => {
    fetchdata();
  }, [AuthorId,fetchdata]);

  // console.log(getAuthorData,"[getAuthorData]")

  // edit
  async function editAuthorHandler(props) {
    const { name, bookId } = props;
    // console.log(name, "editAuthorProps");
    const getToken = localStorage.getItem("token");
    // console.log(AuthorId, "editAuthorProps,AuthorId");

    axios.defaults.headers["X-ACCESS-ID"] =
      "ef74855d-e9d1-41ea-9823-f295ebbad24e";
    axios.defaults.headers.Authorization = getToken;
    axios.defaults.headers["Content-Type"] = "application/json";
    axios.defaults.headers["Accept"] = "*/*";

    const url = `https://api.bookstore.griter.io/api/v1/authors/${AuthorId}`;
    // const data = { author: { name: name } };
    const data = {
      author: {
        name: name,
      },
    };
    const resp = await axios.put(url, data);
    router.reload("/Author/" + AuthorId);
  }
  return (
    <AuthorDetailComponent
      AuthorData={getAuthorData}
      AuthorId={AuthorId}
      onEdit={editAuthorHandler}
      //   onEdit={editAuthorHandler}
      //   onDelete={deleteAuthor}
    ></AuthorDetailComponent>
  );
};

export default AuthorDetailEdit;
