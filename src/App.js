import AuthPages from "./apps/Auth";
import LayoutPages from "./apps/Layout";

function App() {
  const users = true

  return users ? <LayoutPages/> : <AuthPages/>
}

export default App;