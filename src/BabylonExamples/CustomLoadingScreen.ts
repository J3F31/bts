import { ILoadingScreen } from "@babylonjs/core";

export class CustomLoadingScreen implements ILoadingScreen {

  loadingUIBackgroundColor!: string;
  loadingUIText!: string;

  constructor(private loadingBar: HTMLElement, private percentLoader: HTMLElement, private loader: HTMLElement) {

  }

  displayLoadingUI(): void {
    this.loadingBar.style.width = "0%";
    this.percentLoader.innerText = "0%";
  }

  hideLoadingUI(): void {
    //this.loader.id = "loaded";
  }

}