import React from 'react'
import { useSelector } from 'react-redux'

const ResourcesDisplay = () => {
    const {cereal, wood, stone, iron} = useSelector(state => state.resources)
  return (
    <div  className='resources'>
      <div>cereal: {cereal}</div>
      <div>wood: {wood}</div>
      <div>stone: {stone}</div>
      <div>iron: {iron}</div>
    </div>
  )
}

export default ResourcesDisplay
