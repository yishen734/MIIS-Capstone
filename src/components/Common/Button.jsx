import React from 'react'

const Button = ({ classes, text, onClick }) => {
  const style = `bg-indigo-600 text-white focus:outline-none hover:bg-indigo-700 ${classes}`
  return (
    <button onClick={onClick} className={style}>
      {text}
    </button>
  )
}

export default Button
