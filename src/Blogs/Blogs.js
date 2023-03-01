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
        <div>
            <h1>A lot is happening, We are blogging about it.</h1>
            <div>
                <Blog 
                    src={BLOG01}
                    para={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}
                    date={"Sept 26, 2021"}
                />
                <Blog 
                    src={BLOG02}
                    para={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}
                    date={"Sept 26, 2021"}
                />
                <Blog 
                    src={BLOG03}
                    para={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}
                    date={"Sept 26, 2021"}
                />
                <Blog 
                    src={BLOG04}
                    para={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}
                    date={"Sept 26, 2021"}
                />
                <Blog 
                    src={BLOG05}
                    para={"GPT-3 and Open  AI is the future. Let us exlore how it is?"}
                    date={"Sept 26,2021"}
                />
            </div>
        </div>
    )
}

export default Blogs