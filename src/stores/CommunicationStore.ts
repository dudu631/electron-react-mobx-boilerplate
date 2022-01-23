import { makeAutoObservable } from "mobx";
import { topicNames } from "../shared/topics";
import { RootStore } from "./RootStore";

import { IpcRenderer } from "electron";

export class CommunicationStore {
  rootStore: RootStore;
  ipcRenderer: IpcRenderer;

  constructor(rootStore: RootStore, ipcRenderer: IpcRenderer) {
    this.rootStore = rootStore;
    this.ipcRenderer = ipcRenderer;
    makeAutoObservable(this);

    ipcRenderer.on(topicNames.TOPIC_1, (event, arg) => {
      console.log(topicNames.TOPIC_1, arg);
    });
  }

  example_v1 = "";

  setExampleV1(val: string): void {
    this.example_v1 = val;
  }
}
