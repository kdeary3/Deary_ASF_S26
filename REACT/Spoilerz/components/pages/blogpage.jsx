import { CURRENT_POSTS } from "../../src/utils/fakeData.js"
import {Postcontainer} from "../postcontainer.jsx";

const Blog = () => {
    const navbarStyles = {
        border: "2px green solid",
        margin: "5px auto"
    }
    return (
        <div style={{border: "purple 5px solid"}}>
        <h1 style={navbarStyles}>this is my blogpage</h1>
        <h2 style={navbarStyles}>this is my blogheader</h2>
        {/* Need to have CURRENT_POSTS downflow. Grandparent/parent might need to see content. */}
        <Postcontainer doggy={CURRENT_POSTS}/>
        </div>
    )
}

export default Blog;