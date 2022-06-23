const Button= (props) => {

    return (
        <button
        className="px-3 py-1 bg-red-800 rounded"
          type={props.type || "button"}
          onClick={props.onClick}
        >
            {props.children}
        </button>
      );
}
export default  Button;