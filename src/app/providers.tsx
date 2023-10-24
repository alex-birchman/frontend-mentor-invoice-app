"use client";

import * as React from "react";
import { Provider } from "react-redux";

import store from "@/store";

type Props = {
  children: React.ReactNode;
};

function Providers({ children }: Props) {
  return <Provider store={store}>{children}</Provider>;
}

export default Providers;
