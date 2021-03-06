import { ipcMain, IpcMainEvent } from "electron";
import { topicNames } from "./channels";

export const listenAndDelegateEvents = () => {
  ipcMain.on(topicNames.TOPIC_1, async (event: IpcMainEvent, arg) => {
    console.log(topicNames.TOPIC_1, arg);
  });
};

module.exports = { listenAndDelegateEvents };
