import AnimalLover from "./components/AnimalLover.jsx"
import {animals} from "./utils/data.js"

// components
const App = () => {
  return (
      <>
        <h1>First Componentz</h1>
        <AnimalLover
            data={"Keno hates animals?"}
            data2={"Second line"}
            data3={true}
            data4={animals}
        />
      </>
  )
}

export default App
