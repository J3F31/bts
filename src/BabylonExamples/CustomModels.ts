import { Scene, Engine, FreeCamera, Vector3, HemisphericLight, MeshBuilder, CubeTexture, PBRMaterial, Texture, SceneLoader } from "@babylonjs/core";
import "@babylonjs/loaders/glTF";

export class CustomModels {

  scene: Scene;
  engine: Engine;

  constructor(private canvas: HTMLCanvasElement){
    this.engine = new Engine(this.canvas, true);
    this.scene = this.CreateScene();
    //this.CreateBarrel();
    this.CreateCampfire();
    //this.CreateGround();

    this.engine.runRenderLoop(() => {
      this.scene.render();
    });
  }

  CreateScene(): Scene {
    const scene = new Scene(this.engine);

    const camera = new FreeCamera("camera", new Vector3(0, 1, -5), this.scene);
    camera.attachControl();
    camera.speed = .25;

    const hemiLight = new HemisphericLight("hemiLight", new Vector3(0, 1, 0), this.scene);
    hemiLight.intensity = .5;

    const envTex = CubeTexture.CreateFromPrefilteredData("./environment/environment.env", scene);
    
    scene.environmentTexture = envTex;

    scene.createDefaultSkybox(envTex, true);

    scene.environmentIntensity = 1;

    

    return scene;
  }

  CreateGround(): void {
    const ground = MeshBuilder.CreateGround("ground", {width: 10, height: 10}, this.scene);

    ground.material = this.CreateAsphalt();
  }

  CreateAsphalt(): PBRMaterial {
    const pbr = new PBRMaterial("pbr", this.scene);

    pbr.albedoTexture = new Texture("./textures/asphalt/asphalt_diffuse.jpg", this.scene);

    pbr.bumpTexture = new Texture("./textures/asphalt/asphalt_normal.jpg", this.scene);

    pbr.invertNormalMapX = true;
    pbr.invertNormalMapY = true;

    pbr.useAmbientOcclusionFromMetallicTextureRed = true;
    pbr.useRoughnessFromMetallicTextureGreen = true;
    pbr.useMetallnessFromMetallicTextureBlue = true;

    pbr.metallicTexture = new Texture("./textures/asphalt/asphalt_ao_rough_metal.jpg", this.scene);

    pbr.roughness = 1;

    return pbr;
  }

  async CreateBarrel(): Promise<void> {
    //SceneLoader.ImportMesh("", "./models/", "barrel.glb", this.scene, function(meshes) {
    //  console.log("meshes", meshes);
    //});
    const models = await SceneLoader.ImportMeshAsync("", "./models/", "barrel.glb");
    console.log("meshes", models);
  }

  async CreateCampfire(): Promise<void> {
    const models = await SceneLoader.ImportMeshAsync("", "./models/", "campfire.glb");

    models.meshes[0].position = new Vector3(0, 0, 2);

    console.log("models", models);
  }
}