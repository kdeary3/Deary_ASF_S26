import {useState} from "react";

const App = () => {

  const initialData = {
      fname: "",
      password: "",
      age: 0
  }

  const [data, setData] = useState(initialData)

  const handleChange = (event) => {
      event.preventDefault()
      setData(
          {...data, [event.target.name]: event.target.value}
      )
      console.log(data)
  }

    const handleSubmit = (event) => {
        event.preventDefault()

        let options = {
            method: "post",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json",
            }
        }

        fetch(endpoint, options)
            .then(response)
            .then(parsedData)
            .catch(errors)
        console.log("submit")
        setData(initialData)
    }

    return (
        <>
            <h1>Form</h1>
            <form onSubmit={handleSubmit} method="post"> {/*get will show in url, post won't show in url*/}
                <label > Name:
                    <input type="text" name="fname" minLength="3" maxLength="24"
                           onChange={handleChange}
                           value ={data.fname}
                           autoComplete={"off"}/>
                </label> <br/>
                <label> Password:
                    <input type="password" name="password" minLength="3" maxLength="24"
                           pattern={"^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"}
                           onChange={handleChange}
                           value ={data.password}/>
                </label> <br/>
                <label> Age:
                    <input type="number" name="age"
                           onChange={handleChange}
                           value ={data.age}/>
                </label> <br/>
                <button type="submit">Submit</button> <br/>
                <button type="reset">Reset</button>

            </form>
        </>
    );
};

export default App;