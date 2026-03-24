// components
const AnimalLover = ({data, data2, data3, data4}) => {

    let array = data4.map( (index) => {
        return <li>{index}</li>
    })

    return (
        <ul>
            <li>{data}</li>
            <li>{data2}</li>
            <li>{data3}</li>
            <li>{array}</li>
        </ul>
    )
}

export default AnimalLover;