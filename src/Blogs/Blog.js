import React from 'react'
import "./Blog.css"

function Blog({src,para,date,subPara}) {
    return (
        <div className='blog__card'>
            <div className='blog__image'>
                <img
                    src={src}
                    alt="blog--example"
                    className='individual__pic'
                />
            </div>
            <div className='blog__content'>
                <span>{date}</span>
                <h3>{para}</h3>
                {subPara && <p>{subPara}</p>}
                <h4>Read Full Article</h4>
            </div>
        </div>
    )
}

export default Blog