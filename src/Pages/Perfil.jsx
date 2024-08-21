import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../Context/Context";

const Perfil = () => {
  const { state, dispatch } = useUserContext();

  const navigate = useNavigate()

  const iniciales = (nombre) => {
    let nombreSeparado = nombre.split(" ");
    return nombreSeparado[0].charAt(0) + nombreSeparado[1].charAt(0);
  };

  return (
    <div className="perfil">
      <h2 className="perfilStyle">{iniciales(state.user.name)}</h2>
      <div className="infoperfil">
        <h3>{state.user.name}</h3>
        <h3>{state.user.email}</h3>
        <h3>{state.user.phone}</h3>
        <h3>{state.user.website}</h3>
      </div>
      <div>
        <Link to={"/perfil/editar"}>
          <button>Editar perfil</button>
        </Link>
        <button onClick={() => (dispatch({ type: "LOG_OUT" }, navigate("/")))}>
          Cerrar sesión
        </button>
      </div>
    </div>
  );
};

export default Perfil;