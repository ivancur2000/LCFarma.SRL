import React from "react";
import { useSession } from "../../hooks/useSession";
import "../../public/css/homeAdmin.css";

export const HomeAdmin = () => {
  const [userSession] = useSession();

  const { user, email } = userSession;

  return (
    <div className="max-vw-100">
      <div className="imageAdmin mw-75 text-center py-3 mb-3 row mx-0">
        <div className="container col-md-6 align-self-center presentAdmin">
          <h1>Bienvenido {user ? user : email}</h1>
          <p>
            Como administrador de este sitio web tu podrás modificar a tu gusto
            el contenido de la mismo. Podrás modificar tu catálogo de productos,
            la información de tu empresa, podrás poner las preguntas frecuentes
            de la misma y muchas otras cosas más, adelante echa un vistazo
          </p>
          <a
            className="btn btn-outline-success"
            role="button"
            data-bs-toggle="offcanvas"
            href="/#slidebar"
            aria-controls="slidebar"
          >
            Ver mis opciones
          </a>
        </div>
      </div>
      <div className="row w-75 mb-5 mx-auto">
        <div className="col-md-4">
          <h2 className="text-center">
            Modifica la información básica de tu empresa
          </h2>
          <hr />
          <p>
            Podrás modificar la historia, la visión, misión y ponerle una
            traducción al ingles para mostrar a tus clientes
          </p>
        </div>
        <div className="col-md-4">
          <h2 className="text-center">
            Modifica tu catálogo de productos cuando quieras
          </h2>
          <hr />
          <p>
            En cualquier momento podrás modificar la lista de productos y su
            información básica
          </p>
        </div>
        <div className="col-md-4">
          <h2 className="text-center">
            Agrega las preguntas más frecuentes que tus clientes realizan
          </h2>
          <hr />
          <p>
            Podrás agregar las preguntas frecuentes que tus clientes realizan
            con facilidad
          </p>
        </div>
      </div>
    </div>
  );
};
