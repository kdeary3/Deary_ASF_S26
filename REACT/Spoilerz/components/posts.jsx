import Replies from "./pages/replies.jsx";

const Posts = ({kitty}) => {

    const navbarStyles = {
        border: "5px green solid",
        width: "50vw",
        margin: "0 auto"
    }

    let {src, alt, content, date } = kitty // pull comment from Postcontainer's doggy.map()

    return (
        <div style={navbarStyles}>
            <img src={src} alt={alt}/>
            <p>{date}</p>
            <p style={{ textAlign: 'left' }}>{content}</p>
            <div>
                <button>Like</button>
                <button>Dislike</button>
            </div>
            <div>
                {<button>REPLY</button>}
            </div>
            <div>
                <Replies />
                <Replies />
                <Replies />
            </div>
        </div>
    )
}

export default Posts