"use client";

import { Provider } from "react-redux";
import { store } from "./Store";

export default function ReduxProvider({ children }) {
  return <Provider store={store}>{children}</Provider>;
}
