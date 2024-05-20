import "./Error.css";

function Error({ errorMessage }) {
  return (
    <p className="err-msg" style={{ color: "red" }}>
      {errorMessage}
    </p>
  );
}

export default Error;
