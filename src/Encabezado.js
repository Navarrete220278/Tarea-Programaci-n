import { Link } from 'react-router-dom'

export default function Encabezado() {
  return (
    <div>
      <h1>Programación III</h1>
      <ul>
        <li>
          <Link to="/">Inicio</Link>
        </li>
        <li>
          <Link to="/contacto">Contacto</Link>
        </li>
        <li>
          <Link to="/productos">Productos</Link>
        </li>
      </ul>
      <hr/>
    </div>
  )
}