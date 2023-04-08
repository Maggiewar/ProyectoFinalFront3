import React from "react";

const Form = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <form className="container" name="Iniciar Sesión">
        <label htmlFor="">
          Nombre
          <br />    
          <input type="text" />
        </label>
        <br />
        <label htmlFor="">
          Número de identificación
          <br />
          <input type="number" />
        </label>
        <br />
        <select name="Perfil" id="">
          <option value="">Afiliado</option>
          <option value="">Independiente</option>
          <option value="">Plan Complementario</option>
          <option value="">Especialistas en Odontológicos</option>
        </select>
        <button type="submit">Iniciar Sesión</button>
      </form>
      Form
    </div>
  );
};

export default Form;
