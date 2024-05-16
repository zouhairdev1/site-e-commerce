import { Provider } from "react-redux";
import { store } from "./Store";
export default function ProviderStore({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
