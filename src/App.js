import axios from "axios";
import AuthPages from "./apps/Auth";
import LayoutPages from "./apps/Layout";

axios.defaults.baseURL = 'https://cryxxen.pythonanywhere.com/'

function App() {
  const users = true

  return users ? <LayoutPages/> : <AuthPages/>
}

export default App;