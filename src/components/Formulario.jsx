// import { useState } from "react";
import useClima from "../hooks/useClima";
import toast, { Toaster } from "react-hot-toast";

function Formulario() {
  const { busqueda, datosBusqueda, consultarClima } = useClima();
  const { ciudad, pais } = busqueda;
  // const [alerta, setAlerta] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.values(busqueda).includes("")) {
      toast.error("Todos los campos son obligatorios");
      return;
    }
    consultarClima(busqueda);
  };
  return (
    <div className="contenedor">
      <Toaster />
      <form action="" onSubmit={handleSubmit}>
        <div className="campo">
          <label htmlFor="ciudad">Ciudad</label>
          <input
            type="text"
            id="ciudad"
            name="ciudad"
            onChange={datosBusqueda}
            value={ciudad}
          />
        </div>
        <div className="campo">
          <label htmlFor="pais">Pais</label>
          <select name="pais" id="pais" value={pais} onChange={datosBusqueda}>
            <option value="">-- Seleccione un Pais--</option>
            <option value="HN">Honduras</option>
            <option value="US">Estados Unidos</option>
            <option value="MX">Mexico</option>
            <option value="AR">Argentina</option>
            <option value="CO">Colombia</option>
            <option value="CR">Costa Rica</option>
            <option value="ES">España</option>
            <option value="PE">Peru</option>
          </select>
        </div>
        <input type="submit" value="Consultar Clima" />
      </form>
    </div>
  );
}

export default Formulario;
