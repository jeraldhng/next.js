import Sidebar from "../components/UI/sidebar";
import Layout from "../components/UI/layout";
import { Fragment } from "react";
import axios from "axios";
import Panel from "../components/UI/Panel";
import Modal from "../components/UI/modal";
import AuthorList from "../components/author/AuthorList";
import { useRouter } from "next/router";
import Router from 'next/router'
import { useEffect, useState } from "react";

function AuthorPage(props) {
  const routerResponse = useRouter();
  const dummy_data = [
    {
      id: "e1",
      name: "Toilet Paper",
      created_at: "2022-06-13T01:04:34.442+08:00",
      updated_at: "2022-06-13T01:04:34.442+08:00",
    },
  ];
  const [authorData, setAuthorData] = useState([]);
  const [token, setToken] = useState("");
  const [isGenerated, setGenerated] = useState(false);
  let getToken = "";
  // if (typeof window !== "undefined") {
  //   // Perform localStorage action
  //   getToken = localStorage.getItem("token");
  // }
  useEffect(() => {
    // Perform localStorage action
    getToken = localStorage.getItem("token");
    setToken(getToken);
    if (getToken == null) {
      responseRouter.push("LoginPage");
    }
  }, []);

  // console.log(props, "AuthorPage.props");

  // console.log(token, "token");
  

  // Add request
  async function addAuthorHandler(author) {
   
    let getToken = "";
    if (typeof window !== "undefined") {
      // Perform localStorage action
      getToken = localStorage.getItem("token");
    }

    axios.defaults.headers["X-ACCESS-ID"] =
      "ef74855d-e9d1-41ea-9823-f295ebbad24e";
    axios.defaults.headers["Content-Type"] = "application/json";
    axios.defaults.headers.Authorization = getToken;
    axios.defaults.headers["Accept"] = "*/*";

    const url = "https://api.bookstore.griter.io/api/v1/authors";
    const data = {
      author: {
        name: author.name,
      },
    };
    const resp = await axios.post(url, data);
    console.log(resp, "success");
    if (!resp) {
      // console.log(resp);
    }
   
    routerResponse.push("/AuthorPage");

    // console.log(author, "authorpage");
    Router.reload('AuthorPage');
  }

  //delete request
  async function deleteAuthorHandler(AuthorId) {
    // console.log(AuthorId, "AuthorId");

    let getToken = "";
    if (typeof window !== "undefined") {
      // Perform localStorage action
      getToken = localStorage.getItem("token");
    }

    axios.defaults.headers["X-ACCESS-ID"] =
      "ef74855d-e9d1-41ea-9823-f295ebbad24e";
    axios.defaults.headers["Content-Type"] = "application/json";
    axios.defaults.headers.Authorization = getToken;
    axios.defaults.headers["Accept"] = "*/*";

    const url = `https://api.bookstore.griter.io/api/v1/authors/${AuthorId}`;

    const resp = await axios.delete(url);
    // console.log(resp, "Delete success");

    if (!resp) {
      // console.log(resp, "delete fail");
    }
    Router.reload('AuthorPage');
    routerResponse.push("AuthorPage");

    // props.onDelete();
  }

  async function fetchData(token) {

    if (token != null) {
      // console.log(token, "token1");
      axios.defaults.headers["X-ACCESS-ID"] =
        "ef74855d-e9d1-41ea-9823-f295ebbad24e";
      axios.defaults.headers.Authorization = `${token}`;
      axios.defaults.headers["Content-Type"] = "application/json";
      axios.defaults.headers["Accept"] = "*/*";
      const url = "https://api.bookstore.griter.io/api/v1/authors";
      const resp = await axios.get(url);
      let respondData = [];
      if (resp) {
        // console.log(resp.data.authors, "resp");

        respondData = resp.data.authors.map(
          (obj) =>
            (obj = {
              id: obj.id,
              name: obj.name,
              created_at: obj.created_at,
              updated_at: obj.updated_at,
            })
        );
        // console.log(respondData, "respondData");
        setAuthorData(respondData);
      } else {
        respondData = null;
      }
    }
  }

  useEffect(() => {
    const getToken = localStorage.getItem("token");

    fetchData(getToken);
  }, [getToken]);

  return (
    <Fragment>
      <Layout />
      <Sidebar
        isAuthorlist={true}
        authorsItem={authorData}
        onAddAuthor={addAuthorHandler}
        onDeleteAuthor={deleteAuthorHandler}
      ></Sidebar>
      {/* use condition to trigger modal */}
    </Fragment>
  );
}

// export async function getStaticProps() {
//   // const dummy_data = [
//   //   {
//   //     id: "e1",
//   //     name: "Toilet Paper",
//   //     created_at: "2022-06-13T01:04:34.442+08:00",
//   //     updated_at: "2022-06-13T01:04:34.442+08:00",
//   //   },
//   // ];

//   // props: {
//   //     meetupData: {
//   //       id: selectedMeetup._id.toString(),
//   //       title: selectedMeetup.title,
//   //       address: selectedMeetup.address,
//   //       image: selectedMeetup.image,
//   //       description: selectedMeetup.description,
//   //     },
//   //   },
//   console.log(respondData, "respondData");
//   return {
//     props: {
//       authorsItem:respondData
//       // authorsItem: dummy_data,
//     },
//   };
// }

export default AuthorPage;
