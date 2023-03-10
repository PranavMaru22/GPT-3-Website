import React from 'react'
import "./Details.css"
import DetailsInner from "./DetailsInner"

function Details() {
  return (
    <div className='gpt__container'>
        <div className='what__is__gpt'>
            <div className='heading__container'>
                <div className='linear__border'>
                </div>
                <h3>What is GPT-3</h3>
            </div>
            <p>We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</p>
        </div>
        <div className='gpt__explore'>
            <h2>The possibilities are beyond your imagination</h2>
            <p>Explore the Library</p>
        </div>
        <div className='details__flex'>
            <DetailsInner 
                heading={"Chatbots"}
                content={"We so opinion friends me message as delight. Whole front do of plate heard oh ought. "}
            />
            <DetailsInner 
                heading={"Knowledgebase"}
                content={"At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"}
            />
            <DetailsInner 
                heading={"Education"}
                content={"At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b"}
            />
        </div>
    </div>
  )
}

export default Details