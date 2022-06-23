import { Fragment, useEffect } from "react";
import Modal from "../UI/modal";
import { useRef } from "react";
import { useState } from "react";
import axios from "axios";

const AddBookData = (props) => {
  const [createObjectURL, setCreateObjectURL] = useState(null);
  const [base64, setBase64] = useState(null);
  const [authorList, setAuthorList] = useState([]);
  const [genreList, setGenreList] = useState([]);
  const titleRef = useRef("");
  const authorIdRef = useRef("");
  const genreIdRef = useRef("");
  const serialNumberRef = useRef("");
  const publishYearRef = useRef("");
  const fictionRef = useRef("");

  // console.log(genreList, "genreList.length ");

  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const image = event.target.files[0];

      // console.log(image, "imagesges");
      setCreateObjectURL(URL.createObjectURL(image));
      const reader = new FileReader();
      reader.readAsDataURL(image);

      reader.onload = (event) => {
        setBase64(event.target.result);
       
        // setFormObj(form);
        // console.log(event.target.result, "base64");
      };
      
    }
  };
 
  const onSubmitHandler = (event) => {
    event.preventDefault();

    const enteredTitle = titleRef.current.value;
    const enteredAuthorId = authorIdRef.current.value;
    const enteredGenreId = genreIdRef.current.value;
    const enteredSerialNumber = serialNumberRef.current.value;
    const enteredPublicYear = publishYearRef.current.value;
    const enteredFiction = fictionRef.current.value;

    // console.log(enteredTitle, "enteredTitle");
    // console.log(enteredAuthorId, "enteredAuthorId");
    // console.log(enteredGenreId, "enteredGenreId");
    // console.log(enteredSerialNumber, "enteredSerialNumber");
    // console.log(enteredPublicYear, "enteredPublicYear");
    // console.log(enteredFiction, "enteredFiction");
    // console.log(base64, "base64");

    const sendBookData = {
      title:enteredTitle,
      authorId:enteredAuthorId,
      genreId:enteredGenreId,
      serialNumber:enteredSerialNumber,
      public_year:enteredPublicYear,
      fiction:enteredFiction,
      image:base64,
    }

    props.onAddBook(sendBookData)
    // console.log(author,"author");
    // console.log(props, "props");
    // props.onAddAuthor(author)
  };

  // get author
  const getAuthor = () => {
    const getToken = localStorage.getItem("token");
    axios.defaults.headers["X-ACCESS-ID"] =
      "ef74855d-e9d1-41ea-9823-f295ebbad24e";
    axios.defaults.headers.Authorization = `${getToken}`;
    axios.defaults.headers["Content-Type"] = "application/json";
    axios.defaults.headers["Accept"] = "*/*";
    const url = "https://api.bookstore.griter.io/api/v1/authors";

    axios
      .get(url)
      .then(function (response) {
        // console.log(response, "response fetch author");
        setAuthorList(
          response.data.authors.map((obj) => ({
            value: obj.name,
            id: obj.id,
          }))
        );
      })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          // console.log(error.response.data);
          // console.log(error.response.status);
          // console.log(error.response.headers);
        }
      });
  };

  // get genre
  const getGenre = () => {
    
    const getToken = localStorage.getItem("token");
    axios.defaults.headers["X-ACCESS-ID"] =
      "ef74855d-e9d1-41ea-9823-f295ebbad24e";
    axios.defaults.headers.Authorization = `${getToken}`;
    axios.defaults.headers["Content-Type"] = "application/json";
    axios.defaults.headers["Accept"] = "*/*";
    const url = "https://api.bookstore.griter.io/api/v1/genres";

    axios
      .get(url)
      .then(function (response) {
        // console.log(response, "response fetch Genre");
        if (response.data.genres.length == 0) {
          setGenreList([]);
        } else {
          // console.log(response.data.genres, "response.data.genres");
          // console.log(genreList, "authorList123");
          setGenreList(
            response.data.genres.map((obj) => ({
              value: obj.name,
              id: obj.id,
            }))
          );

          const data = response.data.genres((obj) => ({
            value: obj.name,
            id: obj.id,
          }));
          // console.log(data, "datadatata");
        }
        // setAuthorList(response.data.authors);
      })
      .catch(function (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          // console.log(error.response.data);
          // console.log(error.response.status);
          // console.log(error.response.headers);
        }
      });
  };

  useEffect(() => {
    getAuthor();
    getGenre();
  }, []);

  return (
    <Modal onClose={props.onClose}>
      <div className="block bg-slate-50 pt-0 p-6 rounded-xl  ">
        <div className="flex items-center">
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
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
            />
          </svg>
          <p className="text-gray-700 font-semibold my-4 text-base">
            New Author
          </p>
        </div>

        <form onSubmit={onSubmitHandler}>
          {/* first name */}

          <div className="w-3/4  mr-1">
            <label htmlFor="title">title</label>
            <input
              ref={titleRef}
              className="h-8 w-full rounded-md border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-lg shadow-slate-300"
              type="text"
              id="text"
              required
            />
          </div>

          <div className="w-3/4 mr-1">
            <label htmlFor="Author">Author</label>
            {authorList.length != 0 && (
              <select
                ref={authorIdRef}
                className="h-8 w-full rounded-md border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-lg shadow-slate-300"
                type="text"
                id="text"
                required
              >
                {authorList.map((author) => (
                  <option value={author.id} key={author.id}>
                    {author.value}
                  </option>
                ))}
              </select>
            )}
            {authorList.length == 0 && (
              <select
                className="h-8 w-full rounded-md border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-lg shadow-slate-300"
                type="text"
                id="text"
                required
              >
                <option value="Empty go to add Author" ref={authorIdRef}>
                  Empty go to add Author
                </option>
              </select>
            )}
          </div>

          <div className="w-3/4 mr-1">
            <label htmlFor="genre">Genre</label>
            {genreList.length != 0 && (
              <select
                className="h-8 w-full rounded-md border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-lg shadow-slate-300"
                type="text"
                id="text"
                required
              >
                {genreList.map((genreObj) => (
                  <option
                    ref={genreIdRef}
                    value={genreObj.id}
                    key={genreObj.id}
                  >
                    {genreObj.value}
                  </option>
                ))}
              </select>
            )}
            {genreList.length == 0 && (
              <select
                className="h-8 w-full rounded-md border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-lg shadow-slate-300"
                type="text"
                id="text"
                required
              >
                <option value="Empty go to add genre" ref={genreIdRef}>
                  Empty go to add genre
                </option>
              </select>
            )}
          </div>

          <div className="w-3/4 mr-1">
            <label htmlFor="Serial Number">Serial Number</label>
            <input
              ref={serialNumberRef}
              className="h-8 w-full rounded-md border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-lg shadow-slate-300"
              type="text"
              id="text"
              required
            />
          </div>

          <div className="flex flex-row">
            <div className="w-3/4 mr-1">
              <label htmlFor="publishYear">Publish year</label>
              <input
                ref={publishYearRef}
                className="h-8 w-full rounded-md border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-lg shadow-slate-300"
                type="text"
                id="text"
                min="1000"
                max="4000"
                required
              />
            </div>

            <div className="w-3/4 mr-1">
              <label htmlFor="fiction">fiction</label>
              <select
                ref={fictionRef}
                className="h-8 w-full rounded-md border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-lg shadow-slate-300"
                type="text"
                id="text"
                required
              >
                <option
                  value="true"
                  className="h-8 w-full rounded-md border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-lg shadow-slate-300"
                  type="text"
                  id="text"
                  required
                >
                  true
                </option>
                <option
                  value="false"
                  className="h-8 w-full rounded-md border-slate-300 text-sm pl-2 bg-transparent outline-blue-600 shadow-lg shadow-slate-300"
                  type="text"
                  id="text"
                  required
                >
                  false
                </option>
              </select>
            </div>
          </div>

          <div className="w-3/4 mr-1">
            <label htmlFor="fiction">imageUpload</label>
            <img src={createObjectURL} className="w-20 h-10" />
            <h4>Select Image</h4>
            <input type="file" name="myImage" onChange={uploadToClient} />
          </div>

          <div className="mt-3 flex justify-end space-x-3">
            <button
              onClick={props.onClose}
              className="px-3 py-1 hover:bg-red-300 hover:bg-opacity-50 hover:text-red-900  rounded"
            >
              Discard
            </button>
            <button className="px-3 py-1 bg-red-800 font-white rounded">
              Add Book
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default AddBookData;
