import { CubeTexture, Engine, FreeCamera, Scene, SceneLoader, Vector3 } from "@babylonjs/core";
import "@babylonjs/loaders";
import { CustomLoadingScreen } from "./CustomLoadingScreen";

export class CustomLoading {
  engine: Engine;
  scene: Scene;
  loadingScreen: CustomLoadingScreen;

  constructor(private canvas: HTMLCanvasElement, private loadingBar: HTMLElement, private percentLoader: HTMLElement, private loader: HTMLElement) {
    this.engine = new Engine(this.canvas, true);
    this.loadingScreen = new CustomLoadingScreen(loadingBar, percentLoader, loader);

    this.engine.loadingScreen = this.loadingScreen;
    this.engine.displayLoadingUI();

    this.scene = this.CreateScene();
    this.CreateEnvironment();

    this.engine.runRenderLoop(() => {
      this.scene.render();
    });
  }

  CreateScene(): Scene {
    const scene = new Scene(this.engine);
    const camera = new FreeCamera("camera", new Vector3(0, 1, -4), this.scene);
    camera.attachControl();
    camera.speed = 0.25;

    const envTex = CubeTexture.CreateFromPrefilteredData("./environment/environment.env", scene);
    scene.environmentTexture = envTex;
    scene.createDefaultSkybox(envTex, true);
    scene.environmentIntensity = 0.5;

    return scene;
  }

  async CreateEnvironment(): Promise<void> {
    await SceneLoader.ImportMeshAsync("", "./models/", "LightingScene.glb");
    this.engine.hideLoadingUI();
  }
}