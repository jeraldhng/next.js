import Link from "next/link";
import { useRef } from "react";
import { Fragment } from "react";

const register = (props) => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const nameInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;
    const enteredName = nameInputRef.current.value;
    const userRegisterobj = {
      email: enteredEmail,
      password: enteredPassword,
      name: enteredName,
    };
    // console.log(userRegisterobj, "userRegisterobj");
    props.onAddUser(userRegisterobj);
  };
  return (
    <Fragment>
    <div className="flex justify-center items-center h-screen bg-neutral-400">
      <div className="block bg-slate-50 p-6 rounded-xl shadow-md shadow-slate-300 w-90">
        <h1 className="text-gray-700 text-3xl font-semibold my-4">
          Register To library
        </h1>
        <form onSubmit={submitHandler}>
          {/* first name */}
          <div className="flex flex-row">
            <div className="w-1/2 mr-1">
              <label htmlFor="email">Your Email</label>
              <input
                className="h-8 w-full rounded-md border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm"
                type="email"
                id="email"
                required
                ref={emailInputRef}
              />
            </div>

            {/* lName */}
            <div className="w-1/2 mr-1">
              <label htmlFor="email">Name</label>
              <input
                className="h-8 w-full rounded-md border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm"
                type="text"
                id="Name"
                required
                ref={nameInputRef}
              />
            </div>
          </div>

          {/* email */}

          <label htmlFor="password">Password</label>
          <input
            className="h-8 w-full rounded-md border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm"
            type="password"
            id="password"
            required
            ref={passwordInputRef}
          />


        
            <button className=" h-10 w-full flex justify-center rounded-md border-neutral-300 text-sm pl-2 bg-neutral-500  shadow-sm cursor-pointer text-white rounded-md hover:bg-blue-600 hover:bg-blue-600 hover:outline outline-2 outline-blue-600 outline-offset-2 text-lg">Sign up</button>
        
          <p className="text-xs my-2">Already have a account?<Link href="/LoginPage" className="text-blue-600">Login</Link></p>
        </form>
      </div>
    </div>
  </Fragment>
  );
};

export default register;
