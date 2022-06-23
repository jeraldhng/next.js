import { Fragment } from "react/cjs/react.production.min";

const BookItem = (props) => {
    return(
        <Fragment>
                <div className="flex justify-center items-center h-screen bg-neutral-200">
        <div className="block bg-slate-50 p-6 rounded-xl shadow-md shadow-slate-300 w-90">
          <h1 className="text-gray-700 text-3xl font-semibold my-4">
            sign in to continue to library
          </h1>
          <form onSubmit={submitHandler}>
            {/* first name */}
            <div className="flex flex-row">
              <div className="w-1/2 mr-1">
                <label htmlFor="email">first name</label>
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
                <label htmlFor="email">Last name</label>
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

            <label htmlFor="password">email</label>
            <input
              className="h-8 w-full rounded-md border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm"
              type="password"
              id="password"
              required
              ref={passwordInputRef}
            />

            <label htmlFor="password">Password</label>
            <input
              className="h-8 w-full rounded-md border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm"
              type="password"
              id="password"
              required
              ref={passwordInputRef}
            />

            <label htmlFor="password">confirm passowrd</label>
            <input
              className="h-8 w-full rounded-md border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-sm"
              type="password"
              id="password"
              required
              ref={passwordInputRef}
            />

            <div className="h-10 w-full flex justify-center rounded-md border-neutral-300 text-sm pl-2 bg-neutral-500  shadow-sm cursor-pointer text-white rounded-md hover:bg-blue-600 hover:bg-blue-600 hover:outline outline-2 outline-blue-600 outline-offset-2 ">
              <button className="text-lg">Sign up</button>
            </div>
            <p className="text-xs my-2">Already have a account?<a href="" className="text-blue-600">Login</a></p>
          </form>
        </div>
      </div>
        </Fragment>
    )
}
export default BookItem;