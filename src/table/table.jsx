import React from 'react'

function Tab ({produit}) {
  return (
    <>
       <tr>
        <td>{produit.id}</td>
        <td>{produit.title}</td>
        <td>{produit.price}</td>
        <td>{produit.description}</td>
        <td>{produit.category}</td>
        <td><img src={produit.image} alt="c'est une image" /></td>
       </tr>
    </>
  )
}

export default Tab