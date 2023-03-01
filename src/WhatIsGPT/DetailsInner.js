import React from 'react'

function DetailsInner({heading,content}) {
  return (
    <div>
        <div>
            <h2>{heading}</h2>
            <p>{content}</p>
        </div>
    </div>
  )
}

export default DetailsInner