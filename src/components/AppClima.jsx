import Formulario from "./Formulario";
import Resumen from "./Resumen";
import useClima from "../hooks/useClima";
import Spinner from "./Spinner";

function AppClima() {
  const { resultado, cargando, noResultado } = useClima();
  return (
    <>
      <main className="dos-columnas">
        <Formulario />
        {cargando ? (
          <Spinner />
        ) : resultado?.name ? (
          <Resumen />
        ) : noResultado ? (
          <p>{noResultado}</p>
        ) : (
          <p>El clima se va a mostrar aqui</p>
        )}
      </main>
    </>
  );
}

export default AppClima;
