
const Modal = (props) => {
  return (
    <div className="flex justify-center items-center bg-black bg-opacity-50 absolute inset-0 ">
      <div className="bg-gray-200 rounded py-1 px-2  w-96">
        <div>
          {props.headerType === "add" && (
            <h4 className="text-lg font-bold">Add</h4>
          )}
          {props.headerType === "delete" && (
            <h4 className="text-lg font-bold">Confirm Delete?</h4>
          )}
          <div className="mt-2">
            {/* <p>i dont relate to you dddddddddddddddddddddddddddddddddddddddddddddddddd</p> */}
            {/* {console.log(props.children)} */}
            {props.children}
          </div>
          {/* <div className="mt-3 flex justify-end space-x-3">
            <button
              onClick={props.onClose}
              className="px-3 py-1 hover:bg-red-300 hover:bg-opacity-50 hover:text-red-900  rounded"
            >
              discard
            </button>
            <Button type="submit" >{props.buttonText}</Button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Modal;
