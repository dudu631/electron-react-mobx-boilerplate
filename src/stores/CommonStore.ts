import { makeAutoObservable } from "mobx";
import { RootStore } from "./RootStore";

export class CommonStore {
  rootStore;

  constructor(rootStore: RootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }

  error = false;
}
