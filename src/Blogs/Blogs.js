import React from 'react'
import "./Blogs.css"
import Blog from "./Blog"
const BLOG01 = require("../gpt-3 assets/blog01.png")
const BLOG02 = require("../gpt-3 assets/blog02.png")
const BLOG03 = require("../gpt-3 assets/blog03.png")
const BLOG04 = require("../gpt-3 assets/blog04.png")
const BLOG05 = require("../gpt-3 assets/blog05.png")


function Blogs() {
    return (
        <div className='blogs__flex'>
            <h1>A lot is happening, We are blogging about it.</h1>
            <div className='blogs__container'>
                <div className='item-1'>
                    <Blog 
                        src={BLOG01}
                        para={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}
                        subPara={"“For instance, the new AI-powered features will allow an employee building an e-commerce app to describe a programming goal using conversational language like ‘find products where the name starts with “kids.”’ A fine-tuned GPT-3 model[emphasis mine] then offers choices for transfor…"}
                        date={"Sept 26, 2021"}
                    />
                </div>
                <div className='item-2'>
                    <Blog 
                    src={BLOG02}
                    para={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}
                    subPara={""}
                    date={"Sept 26, 2021"}
                    />
                </div>
                <div className='item-3'>
                    <Blog 
                        src={BLOG03}
                        para={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}
                        subPara={""}
                        date={"Sept 26, 2021"}
                    />
                </div>
                <div className='item-4'>
                    <Blog 
                        src={BLOG04}
                        para={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}
                        subPara={""}
                        date={"Sept 26, 2021"}
                    />
                </div>
                <div className='item-5'>
                    <Blog 
                        src={BLOG05}
                        para={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}
                        subPara={""}
                        date={"Sept 26,2021"}
                    />
                </div>
            </div>
        </div>
    )
}

export default Blogs