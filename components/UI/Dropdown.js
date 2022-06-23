
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { useEffect } from "react";
const Dropdown = (props) => {
  const [show, setIsShow] = useState(false);
  const [token, setToken] = useState("");
  const pageRouter = useRouter();
  let getToken = "";

  const [username, setUsername] = useState("");

  //   useEffect(() => {
  //     // Perform localStorage action
  //     const getToken = localStorage.getItem("token");
  //     setToken(getToken);
  //     if (getToken == null) {
  //       router.push("/LoginPage");
  //     }
  //   }, []);

  async function getUserName(token) {
    const getToken = localStorage.getItem("token");

    axios.defaults.headers["X-ACCESS-ID"] =
      "ef74855d-e9d1-41ea-9823-f295ebbad24e";
    axios.defaults.headers.Authorization = getToken;
    axios.defaults.headers["Content-Type"] = "application/json";
    axios.defaults.headers["Accept"] = "*/*";

    const url = "https://api.bookstore.griter.io/api/v1/accounts/";
    const resp = await axios.get(url);
    let respondData = [];
    // console.log(resp, "resp");
    if (resp) {
      console.log(resp.data.user, "add success");
      setUsername(resp.data.user.name);
    } else {
      //  console.log(resp);
      respondData = null;
    }
  }
  useEffect(() => {
    // Perform localStorage action
    const item = localStorage.getItem("token");
    const name = localStorage.getItem("name");
    if (item == null) {
      pageRouter.push("LoginPage");
    } else {
      setUsername(name);
      setToken(item);
      getUserName(token);
    }
  }, [token]);

  const onClickHandler = () => {
    setIsShow((prev) => !prev);
  };

  // if (typeof window !== 'undefined') {
  //     // Perform localStorage action
  //     getToken = localStorage.getItem('token')
  //   }

  // console.log(username, "username");
  // console.log(token,"dropdown")

  const onLogoutHandler = async () => {
    axios.defaults.headers["X-ACCESS-ID"] =
      "ef74855d-e9d1-41ea-9823-f295ebbad24e";
    axios.defaults.headers.Authorization = token;

    const url = "https://api.bookstore.griter.io/api/v1/logout";
    const resp = await axios.delete(url);
    localStorage.removeItem("loginName");
    localStorage.removeItem("token");
    pageRouter.push("LoginPage");
  };

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          onClick={onClickHandler}
          className="inline-flex justify-center w-full rounded-md  shadow-md shadow-black border border-gray-300  px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
          id="menu-button"
          aria-expanded="true"
          aria-haspopup="true"
        >
          <p className=" font-serif font-bold ">welcome, {username}</p>

          {props.children}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {show && (
        <div
          className="origin-top-right absolute z-10 right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
          tabIndex="-1"
        >
          <div className="py-1" role="none">
            <button
              className="text-gray-700 block px-4 py-2 text-sm"
              role="menuitem"
              tabIndex="-1"
              id="menu-item-0"
              onClick={onLogoutHandler}
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default Dropdown;
