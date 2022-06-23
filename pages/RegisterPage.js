import { Fragment, useRef } from "react";
import { getServerSideProps } from ".";
import Register from "../components/register";
import axios from "axios";
import { useState } from "react";
import { getStaticProps } from "./AuthorPage";
import { Router, useRouter } from "next/router";
import BookListpage from "./BookListpage";

function RegisterPage() {
  const pageRouter = useRouter();

  

  const setToken = (token, name) => {
    localStorage.setItem("token", token);
    localStorage.setItem("loginName", name);
    pageRouter.push("BookListpage");
  };
  const loginHandler = (token, name) => {
    // console.log(token);
    setToken(token);
    localStorage.setItem("token", token);
    localStorage.setItem("LoginName", name);
    pageRouter.push("BookListpage");
  };

  const addUserHandler = (userobj) => {
    // console.log(userobj, "userobj");

    axios.defaults.headers["X-ACCESS-ID"] =
      "ef74855d-e9d1-41ea-9823-f295ebbad24e";
    axios.defaults.headers["Content-Type"] = "application/json";
    axios.defaults.headers["Accept"] = "*/*";

    const url = "https://api.bookstore.griter.io/api/v1/register";
    const data = {
      user: {
        email: userobj.email,
        password: userobj.password,
        name: userobj.name,
      },
    };

    axios({
      method: "post",
      url: url,
      data: data,
    })
      .then((res) => {
        console.log(res);

        if (res.headers.authorization) {
          loginHandler(res.headers.authorization, res.data.user.name);
        }
      })
      .catch((err) => console.log(err));

    // axios
    //   .post(url, data,)
    //   .then((res) => console.log(res))
    //   .catch((err) => console.log(err));

    // axios.get("https://localhost:3000/api/v1/books", {
    //   "user": {
    //   "email": "Jeraldhng@gmail.com",
    //   "password": "123",
    //   "name": "dd"
    //   }
    //   })
    //   .then(function (response) {
    //     console.log(response);
    //   });

    //     fetch('https://http://localhost:3000/api/v1/accounts/X-ACCESS-ID:ef74855d-e9d1-41ea-9823-f295ebbad24e')
    //     .then((respond)=> console.log(respond,"respond"))
    // .catch(function (error) {
    //   if (error.response) {
    //     // The request was made and the server responded with a status code
    //     // that falls out of the range of 2xx
    //     console.log(error.response.data);
    //     console.log(error.response.status);
    //     console.log(error.response.headers);
    //   } else if (error.request) {
    //     // The request was made but no response was received
    //     // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    //     // http.ClientRequest in node.js
    //     console.log(error.request,"dsdsdsd");
    //   } else {
    //     // Something happened in setting up the request that triggered an Error
    //     console.log('Error', error.message);
    //   }
    //   console.log(error.config);
    // });
  };

  return (
    <Fragment>
      <Register onAddUser={addUserHandler} onLogin={loginHandler}></Register>
    </Fragment>
  );
}

export default RegisterPage;
