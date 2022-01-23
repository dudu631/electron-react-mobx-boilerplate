import { CommonStore } from "./CommonStore";
import { CommunicationStore } from "./CommunicationStore";

const { ipcRenderer } = window.require("electron");

export class RootStore {
  commonStore: CommonStore;
  communicationStore: CommunicationStore;

  constructor() {
    this.commonStore = new CommonStore(this);
    this.communicationStore = new CommunicationStore(this, ipcRenderer);
  }
}
