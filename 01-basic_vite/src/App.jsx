import Youtube from "./YouTube"

function App() {
  const username = "Arham"
  return (
    <>
      <h2>Vite React App {2 * 3} </h2>
      <h2>Vite React App {username === "Arham" ? "Yes" : "No"} </h2>
      <Youtube />
    </>
  )
}

export default App
