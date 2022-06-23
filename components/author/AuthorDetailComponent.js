
import { Fragment, useEffect, useState } from "react";
import Layout from "../UI/Layout";

import axios from "axios";
import AuthorEdit from "./AuthorEdit";

const AuthorDetailComponent = (props) => {
  const [name, setName] = useState("");
  const [token, setToken] = useState("");

  const authorItemEmpty = props.AuthorData.empty;
  console.log(props, "AuthorDetailComponent");
  console.log(props.AuthorId, "AuthorDetailComponent props.AuthorData");
  // const authorId = props.AuthorData[0].authorId

  useEffect(() => {
    // Perform localStorage action
    const getToken = localStorage.getItem("token");
    setToken(getToken);
    if (getToken == null) {
      router.push("/LoginPage");
    }
  }, []);

  const author_id = props.AuthorId;

  async function fetch() {
    axios.defaults.headers["X-ACCESS-ID"] =
      "ef74855d-e9d1-41ea-9823-f295ebbad24e";
    axios.defaults.headers.Authorization = token;
    axios.defaults.headers["Content-Type"] = "application/json";
    axios.defaults.headers["Accept"] = "*/*";

    const url = `https://api.bookstore.griter.io/api/v1/authors/${author_id}`;
    const resp = await axios.get(url);
    console.log(resp.data.author.name, "resp1 name");

    setName(resp.data.author.name);
  }

  useEffect(() => {
    fetch();
  }, [props.AuthorId]);

  const [isModal, setIsModal] = useState(false);

  const onShowModalHandler = () => {
    setIsModal(true);
  };

  const onCloseHandler = () => {
    setIsModal(false);
  };

  const onDeleteHandler = (event) => {
    props.onDelete(event.target.value, author_id);
  };

  //   console.log(author_id, "author_id_AuthorDetailComponent");

  return (
    <Fragment>
      <Layout />
      <div className="flex justify-start items-center mx-8">
        <div className="pr-4">
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
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
        </div>
        <div className="bg-white shadow px-2 pr-24 mt-5 mb-5">
          <h1 className="font-black italic">{name}</h1>
        </div>
        <button
          onClick={onShowModalHandler}
          className=" shadow-zinc-500 border-slate-400 border-solid border-2 shadow-md p-0 w-36 rounded-full  h-12 rounded  "
        >
          Edit Name
        </button>
      </div>

      <div>
        <table className="w-full">
          <thead className="bg-gray-500 border-b-2 border-gray-200">
            <tr>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Series Id
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                title
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                published_year
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                fiction
              </th>
              <th className="p-3 text-sm font-semibold tracking-wide text-left">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {!authorItemEmpty &&
              props.AuthorData.map((item) => (
                <tr key={item.seriesId} className="bg-gray-200">
                  <td className="p-3 text-sm text-grey-700">{item.seriesId}</td>
                  <td className="p-3 text-sm text-grey-700">{item.title}</td>
                  <td className="p-3 text-sm text-grey-700">
                    {item.published_year}
                  </td>
                  <td className="p-3 text-sm text-grey-700">
                    {item.fiction.toString()}
                  </td>
                  <td className="p-3 text-sm text-grey-700">
                    <button
                      className="border-slate-400 border-solid border-2 shadow-md p-0 w-12 h-12 rounded rounded-lg"
                      value={item.seriesId}
                      onClick={onDeleteHandler}
                    >
                      delete
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
        {authorItemEmpty && <h1>No Data</h1>}
        {isModal && (
          <AuthorEdit
            onEdit={props.onEdit}
            author_id={author_id}
            onClose={onCloseHandler}
          ></AuthorEdit>
        )}
      </div>
    </Fragment>
  );
};
export default AuthorDetailComponent;
