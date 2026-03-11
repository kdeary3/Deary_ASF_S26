let button = document.querySelector("button")
let img = document.getElementsByTagName("img")[0]
img.setAttribute("src", "img.png")

button.addEventListener(
    "click",
    ()=>{
        let endpoint = "https://dog.ceo/api/breeds/image/random"
        fetch(endpoint)
            .then((jsonData) => {
                if (jsonData.ok) {
                    return jsonData.json()
                }
                else {
                    throw Error("keno is an idiot")
                }
            })
            .then(parsedData => {
                img.setAttribute("src",parsedData.message)
            })
            .catch(errors =>{
                console.log(errors)
            })
    }
)