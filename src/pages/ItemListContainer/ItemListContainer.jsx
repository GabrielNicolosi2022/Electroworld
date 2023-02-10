// agrego prop greeting y muestro el mensaje dentro del contenedor con el styling integrado.
import "./ItemListContainer.css";
export default function ItemListContainer({ greeting }) {
  return (
    <div className="ItemListContainer">
      <h1 style={{ backgroundColor: "orange", textAlign: "center" }}>
        Bienvenido a nuestra app, {greeting}.
      </h1>
    </div>
  );
}
