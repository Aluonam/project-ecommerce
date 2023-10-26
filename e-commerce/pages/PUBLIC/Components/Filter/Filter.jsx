import React from 'react'
import styleCSS from '@/pages/PUBLIC/Components/Filter/Filter.module.css'
import Button from '../Button/Button'

const Filter = ({setData}) => {
  return (
    <div className={styleCSS.filter}>
      <Button buttonName={"electrónica"} categoryId={2} setData={setData}></Button>
    </div>
  )
}

export default Filter