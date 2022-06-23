import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Sidebar from "../components/UI/sidebar";

import Layout from "../components/UI/layout";
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
    }, []);
   


  return (
    <Fragment>
      <Layout />
      <Sidebar></Sidebar>
    </Fragment>
  );
}

