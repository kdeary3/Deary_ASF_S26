import Button from 'react-bootstrap/Button'

import {useState, useEffect} from "react";

const App = () => {

    const [imgPath, setImagePath] = useState("")
    useEffect( ()=>{
        let endpoint = "https://dog.ceo/api/breeds/image/random"
        fetch(endpoint)
            .then(response => {
                if(response.ok) return response.json()
                else throw Error("keno is an idiot")
            })
            .then(parsedData => {
                console.log(parsedData.message)
                setImagePath(parsedData.message)
            })
            .catch( error => {
                console.error(error)
            })
    }, [imgPath])

    const handleClick = () => {
        let endpoint = "https://dog.ceo/api/breeds/image/random"
        fetch(endpoint)
            .then(response => {
                if(response.ok) return response.json()
                else throw Error("keno is an idiot")
            })
            .then(parsedData => {
                console.log(parsedData.message)
                setImagePath(parsedData.message)
            })
            .catch( error => {
                console.error(error)
            })
    }

  return (
    <>
      <h1>Dog Image Generator React</h1>
        <Button variant="warning" onClick={handleClick}>Click for Random Dog</Button>
        <br/><br/>
        <img src={imgPath} alt="dog image"/>
    </>
  )
}

export default App