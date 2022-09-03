import React from 'react'

// Debemos importar el listado de objetos del archivo JSON para usarlos como array a la hora de crear cada Item.
// El componente Listado es el padre de:
// - varios Item
// ESTADO: Listado no necesita manejar un estado.
// MÉTODOS: Listado no requiere de métodos.
// PROPS: Listado recibe el método para aumentar el estado de App y se lo pasa a cada uno de sus hijos.

import Item from './Item';
import info from './data.json';

export default function Listado({update}) {
return (
  <div className='container'>
  {info.map((item) => (
    <Item
    key={item.id}
    id={item.id}
    producto={item.producto}
    stock={item.stock}
    update= {(stock) => update(stock)}
    />
  ))}
  </div>
);
}
