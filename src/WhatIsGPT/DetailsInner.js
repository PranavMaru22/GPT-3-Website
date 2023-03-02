import React from 'react'
import "./DetailsInner.css"


function DetailsInner({heading,content}) {
  return (
    <div>
        <div className='flex__container'>
          <div className='linear__border'></div>
            <h2>{heading}</h2>
            <p>{content}</p>
        </div>
    </div>
  )
}

export default DetailsInner