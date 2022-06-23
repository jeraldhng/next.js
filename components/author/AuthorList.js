import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const AuthorList = (props) => {
  const responseRouter = useRouter("");
  const authorItemEmpty = !props.AuthorData ? true : false;
  // console.log(props, "props.authorlist");

  const onClickDeleteHandler = (event) => {
    props.onDeleteAuthor(event.target.value);
  };

  // const showDetailHandler = (event) => {
  //   responseRouter.push(event.target.value+'/AuthorDetail')

  // }

  return (
    <div>
      <table className="w-full">
        <thead className="bg-gray-50 border-b-2 border-gray-200">
          <tr>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Author Name
            </th>
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              created_at
            </th>
          
            <th className="p-3 text-sm font-semibold tracking-wide text-left">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {authorItemEmpty &&
            props.authorsItem.map((item) => (
              <tr key={item.id} className="bg-gray-200">
                <td className="p-3 text-sm text-grey-700">{item.name}</td>
                <td className="p-3 text-sm text-grey-700">{item.created_at}</td>
                <td className="p-3 text-sm text-grey-700">
                  <Link href={'/Author/'+item.id} key={item.id}>
                    <button

                      value={item.id}
                      className="border-slate-400 border-solid border-2 shadow-md p-0 w-12 h-12 rounded rounded-lg"
                    >
                      view
                    </button>
                  </Link>
                  <button
                    className="border-slate-400 border-solid border-2 shadow-md p-0 w-12 h-12 rounded rounded-lg"
                    value={item.id}
                    onClick={onClickDeleteHandler}
                  >
                    delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      {!authorItemEmpty && <h1>No Data</h1>}
    </div>
  );
};

export default AuthorList;
