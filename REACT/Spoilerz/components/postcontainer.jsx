import Posts from "./posts.jsx";
import Postheader from "./pages/blogheader.jsx";
import {CURRENT_POSTS} from "../src/utils/fakeData.js";

// pull
export const Postcontainer = ({doggy}) => {
    // .map() returns a NEW array
    let results = doggy.map((post) => {
        return <Posts kitty={post}/> // passing individual post down to create a new post
    });
    return (
        <div style={{border: "yellow 5px solid",margin:"5px auto"}}>
        <h1>Post Container</h1>
        <Postheader />
            {results}
        </div>
    )
}