
import { ItemListContainer } from "./Components/ItemListContainer/ItemListContainer"
import { NavBar } from "./Components/NavBar/NavBar"

export const App = () => {
  return (
    <>
    <NavBar />
    <ItemListContainer message={"Bienvenidos a la mejor librería de alguna galaxia!"} />
    </>

  )
}