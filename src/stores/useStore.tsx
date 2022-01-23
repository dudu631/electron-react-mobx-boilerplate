import React, { FC, createContext, ReactNode, ReactElement } from "react";
import { RootStore } from "./RootStore";

const singletonRoot = new RootStore();

export const getRootStore = (): RootStore => {
  return singletonRoot;
};

export const StoreContext = createContext<RootStore>(getRootStore());

export type StoreComponent = FC<{
  store: RootStore,
  children: ReactNode,
}>;

export const StoreProvider: StoreComponent = ({
  children,
  store,
}): ReactElement => {
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
