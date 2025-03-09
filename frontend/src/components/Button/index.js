import React from 'react'

export default function index({title, className}) {
  return (
    <button className={className}>{title}</button>
  )
}
