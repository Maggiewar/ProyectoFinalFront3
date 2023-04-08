import React from "react";

const Contacto = () => {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <form className="container" name="contacto">
        <label htmlFor="">
          Nombre
          <br />
          <input type="text" />{" "}
        </label>
        <br />
        <label htmlFor="">
          Número de identificación
          <br />
          <input type="number" />
        </label>
        <br />
        <select name="Perfil" id="tipo de suscripción">
          <br />
          <label htmlFor="">Tipo de suscripción
          </label>
          <br />
          <option value="">Afiliado</option>
          <option value="">Independiente</option>
          <option value="">Plan Complementario</option>
        </select>
        <br />
        <label htmlFor="">
          <br />
          Comentario
          <br />
          <input type="text" />{" "}
        </label>
        <button type="submit">Enviar</button>
      </form>
      Form
    </div>
  );
};

export default Contacto;
