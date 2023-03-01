import React from 'react'
import "./Details.css"
import DetailsInner from "./DetailsInner"

function Details() {
  return (
    <div>
        <div>
            <h3>What is GPT-3</h3>
            <p>We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</p>
        </div>
        <div>
            <h2>The possibilities are beyond your imagination</h2>
            <p>Explore the Library</p>
        </div>
        <div>
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