import React from 'react'
import '../css/Widgets.css'
import { FiberManualRecord, Info } from '@material-ui/icons'

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecord />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  )
  return (
    <div className='widgets'>
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <Info />
      </div>
      {newsArticle('PAPA React is back', 'Top News - 678 Reader')}
      {newsArticle('Coronavirus Updates', 'Top News - 545 Reader')}
      {newsArticle('Coronavirus Updates', 'Top News - 545 Reader')} 
      {newsArticle('Coronavirus Updates', 'Top News - 545 Reader')} 
      {newsArticle('Coronavirus Updates', 'Top News - 545 Reader')} 
    </div>
  )
}

export default Widgets
