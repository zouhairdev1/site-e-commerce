import { RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import routes from "./router";

function App() {
  return <RouterProvider router={routes} />;
}

export default App;
