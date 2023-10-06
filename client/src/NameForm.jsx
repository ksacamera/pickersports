import { useState } from "react";
import { useDispatch } from "react-redux";
import { setName } from "./redux/userNameSlice";

const NameForm = () => {
  const [formName, setFormName] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setName(formName));
    setFormName("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={formName}
          onChange={(e) => setFormName(e.target.value)}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default NameForm;
