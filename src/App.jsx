import { useState, useRef, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Form from "./components/Form";
function App() {
  const isFirstRender = useRef(true);
  const [login, setLogin] = useState("");
  const [pass, setPass] = useState("");
  const [btnActivo, SetBtnActivo] = useState(false);
  const handleChange = (e) => {
    const name = e.target.getAttribute("name");
    console.log("name: ", name);
    if (name === "email") setLogin(e.target.value);
    else setPass(e.target.value);

    console.log("EN EL HANDLECHANGE");
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Welcome");
    setLogin("");
    setPass("");
  };
  const [error, setError] = useState({ email: "", pass: "" });

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = login === "" && pass === "";
      // alert("primer renderizado");
      return;
    }
    if (!isFirstRender.current) {
      console.log("Lo que vale ", isFirstRender.current);
      if (login.length < 5) {
        setError((prevState) => {
          return {
            ...prevState,
            email: "The email must have leaft 5 characters",
          };
        });
        console.log("ENTREEEEEE");
      }
      if (pass.length < 8) {
        setError((prevState) => {
          return {
            ...prevState,
            pass: "The password must have leaft 8 characters",
          };
        });
      }
      if (login.length >= 5) {
        setError((prevState) => {
          return {
            ...prevState,
            email: "",
          };
        });
      }
      if (pass.length >= 8) {
        setError((prevState) => {
          return {
            ...prevState,
            pass: "",
          };
        });
      }
    }
    if (login.length >= 5 && pass.length >= 8) SetBtnActivo(true);
  }, [login, pass]);
  return (
    <main>
      <Form
        login={login}
        pass={pass}
        handleChange={handleChange}
        handleSunmit={handleSubmit}
        isFirstRender={isFirstRender}
        error={error}
        btnActivo={btnActivo}
      />
    </main>
  );
}

export default App;
