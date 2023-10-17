import React from 'react'
import styleCSS from '@/pages/PUBLIC/Components/Button/ButtonStyle.module.css'

const Button = () => {
  return (
    <>
    <button onClick={()=>{}} className={styleCSS.button}>Ropa de hombre</button>
    <button onClick={()=>{}} className={styleCSS.button}>Ropa de mujer</button>
    <button onClick={()=>{}} className={styleCSS.button}>Precio de menor a mayor</button>
    <button onClick={()=>{}} className={styleCSS.button}>Precio de mayor a menor</button>
    <button onClick={()=>{}} className={styleCSS.button}>Joyería</button>
    <button onClick={()=>{}} className={styleCSS.button}>Electrónica</button>
    <button onClick={()=>{}} className={styleCSS.button}>Ropa con algodón</button>
    </>
  )
}

export default Button