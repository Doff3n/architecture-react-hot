import { action, whyRun } from "mobx";
import { Store } from "./store";

export const changeColor = action((newColor: string) => {
  if (Store.color != newColor) {
    console.log("color to", newColor);
    Store.color = newColor;
  }
});

export const tick = action(() => {
  Store.time = new Date().toUTCString();
});
