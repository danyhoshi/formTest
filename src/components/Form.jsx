import React, { useEffect } from "react";

function Form({ login, pass, handleChange, handleSunmit, error, btnActivo }) {
  return (
    <form action="" onSubmit={handleSunmit} className={"formSt"}>
      <input
        type="email"
        placeholder="name@email.com"
        onChange={handleChange}
        value={login}
        name="email"
      />
      {error.email && <p style={{ color: "red" }}>{error.email}</p>}
      <input
        type="password"
        placeholder="password"
        onChange={handleChange}
        name="pass"
        value={pass}
      />
      {error.pass && <p style={{ color: "red" }}>{error.pass}</p>}
      <button
        type="submit"
        style={{ backgroundColor: !btnActivo ? "gray" : "black" }}
        disabled={!btnActivo}
      >
        Go
      </button>
    </form>
  );
}

export default Form;
