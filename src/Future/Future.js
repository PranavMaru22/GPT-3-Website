import React from 'react'
import "./Future.css"
import FutureInner from './FutureInner'

function Future() {
    return (
        <div className='flex__future__container'>
            <div className='future__container'>
                <h2>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h2>
                <p>Request Early Access to Get Started</p>
            </div>
            <div>
                <FutureInner 
                    heading={"Improving end distrusts instantly "}
                    content={"From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."}
                />
                <FutureInner 
                    heading={"Become the tended active"}
                    content={"Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to."}
                />
                <FutureInner 
                    heading={"Message or am nothing"}
                    content={"Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address."}
                />
                <FutureInner 
                    heading={"Really boy law county"}
                    content={"Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush."}
                />
            </div>
        </div>
    )
}

export default Future