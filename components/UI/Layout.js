import { useState } from "react";
import Dropdown from "./Dropdown";


function Layout(props) {
const [name,setName] = useState('')







    return (
      <nav  className="flex justify-between p-6 bg-gray-600  w-full m-0">
          <p className="text-2xl text-white font-serif font-bold">library</p>
        
          <div>
              
              <Dropdown><p className="text-white">user name</p></Dropdown>
          </div>
      </nav>
    );
  }
  
  export default Layout;