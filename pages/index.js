
import Sidebar from "../components/UI/Sidebar";

import Layout from "../components/UI/Layout";
import { Fragment,useEffect } from "react";
import { useRouter } from "next/router";


export default function Home(props) {

  const pageRouter = useRouter()
  let getToken = "";
  if (typeof window !== 'undefined') {
      // Perform localStorage action
      getToken = localStorage.getItem('token')
    }
    useEffect(() => {
      // Perform localStorage action
      const item = localStorage.getItem("token");
      if (item == null) {
        pageRouter.push("LoginPage");
      }else{
        
      }
    }, [pageRouter]);
   


  return (
    <Fragment>
      <Layout />
      <Sidebar></Sidebar>
    </Fragment>
  );
}

