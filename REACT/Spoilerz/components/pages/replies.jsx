const Replies = () => {
    const navbarStyles = {
        border: "2px red solid",
        width: "50vw",
        margin: "0 auto"
    }
    return (
        <div style={navbarStyles}>
            <img src="" alt="avatar"/>
            <p>Date: 30 MAR 26</p>
            <p style={{ textAlign: 'left' }}>Reply Body: This is a reply.</p>
            <div>
                <button>Like</button>
                <button>Dislike</button>
            </div>
        </div>
    )
}

export default Replies