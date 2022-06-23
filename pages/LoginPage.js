import LoginPage from "../components/login";
import Sidebar from "../components/UI/sidebar";
import axios from "axios";
import { Router, useRouter } from "next/router";
import BookListpage from "./BookListpage";
import { useEffect } from "react";
function login() {
  const pageRouter = useRouter();
  const setToken = (token, name) => {
    localStorage.setItem("token", token);
    localStorage.setItem("loginName", name);
    pageRouter.push("BookListpage");
  };
  let getToken = "";
  // if (typeof window !== 'undefined') {
  //     // Perform localStorage action
  //     getToken = localStorage.getItem('token')
  //   }

  useEffect(() => {
    // Perform localStorage action
    getToken = localStorage.getItem("token");
    if (getToken == null) {
      pageRouter.push("LoginPage");
    } else {
      // pageRouter.push("BookListpage");
    }
  }, []);

  const loginHandler = (loginCredential) => {
    // console.log(loginCredential, "userobj");

    axios.defaults.headers["X-ACCESS-ID"] =
      "ef74855d-e9d1-41ea-9823-f295ebbad24e";
    axios.defaults.headers["Content-Type"] = "application/json";
    //   axios.defaults.headers.Authorization = getToken
    axios.defaults.headers["Accept"] = "*/*";

    const url = "https://api.bookstore.griter.io/api/v1/login";
    const data = {
      user: {
        email: loginCredential.email,
        password: loginCredential.password,
      },
    };

    axios({
      method: "post",
      url: url,
      data: data,
    })
      .then((res) => {
        // console.log(res, "loginResponds");
        if (res.headers.authorization) {
          setToken(res.headers.authorization, res.data.user.name);
          // console.log(res.data);
        }
        // pageRouter.push('BookListpage')
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <LoginPage onLogin={loginHandler}></LoginPage>
      {/* {   getToken &&<BookListpage onLogin={loginHandler}></BookListpage>} */}
    </div>
  );
}

export default login;