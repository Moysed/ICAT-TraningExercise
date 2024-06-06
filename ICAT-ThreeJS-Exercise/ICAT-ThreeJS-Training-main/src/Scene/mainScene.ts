import * as THREE from 'three';
import { Cube } from '../object/cube';

export class MainScene{
    scene: THREE.Scene;
    renderer: THREE.WebGLRenderer;
    camera:THREE.PerspectiveCamera
    container:HTMLElement;

    cube : THREE.Mesh | null = null;

    cubeClass1: Cube | null =null;
    cubeClass2: Cube | null =null;
    cubeClass3: Cube | null =null;
    
    
    constructor(container : HTMLElement){
        
        this.scene = new THREE.Scene;
        this.renderer = new THREE.WebGLRenderer
        this.container = container;
        this.camera = new THREE.PerspectiveCamera(75 , this.container.clientWidth / this.container.clientHeight , 0.1 ,1000)
        

        //Config Renderer
        this.renderer.setSize(this.container.clientWidth,this.container.clientHeight);
        this.container.appendChild(this.renderer.domElement)

        this.Onstart();

        this.container.addEventListener('click',this.onClick)
        document.addEventListener('resize',this.onWindowResize)
        //Render
        // this.renderer.render(this.scene , this.camera);
        this.renderer.setAnimationLoop(this.render)
    } 

    onWindowResize = ()=>{
        
    }

    onClick = (event:any)=>{
        const rectBox = this.container.getBoundingClientRect();
        const mousePositionNormalize ={
            x: (event.x / rectBox.width) * 2 -1,
            y: -(event.y / rectBox.height) * 2 + 1
        }
        //Create raycaster and config 
        const rayCaster = new THREE.Raycaster();
        rayCaster.setFromCamera(new THREE.Vector2(mousePositionNormalize.x,mousePositionNormalize.y), this.camera);
        const intersects = rayCaster.intersectObjects(this.scene.children)
      
                intersects[0].object.position.x = Math.random() *5;
                intersects[0].object.position.y = Math.random() *5;

                       
        
    }

    Onstart = ()=>{
        const geometry = new THREE.BoxGeometry(1,1,1);
        const material = new THREE.MeshBasicMaterial({color: 0x00f0});

        this.cube = new THREE.Mesh(geometry,material)

        this.scene.add(this.cube);
        this.camera.position.z = 6;
        this.camera.position.y = 2;
        this.camera.position.x = 2;

    const v0 = new THREE.Vector3(0,0,0)
    // const v1 = new THREE.Vector3(1,1,1);
    // const v2 = new THREE.Vector3(2,2,2);
      
    // //Vector.add() means  v1 + ()
    // //AddScalar() means v เเต่ละตัว (x,y,z) + ตามจำนวนที่ใส่ใน parameter
    // //V3.copy () means ลอก Vector ตัวที่อยู่ใน Parameter

    this.cube.position.copy(v0);

    this.cubeClass1 =new Cube(this.scene);
    this.cubeClass2 =new Cube(this.scene);
    this.cubeClass3 =new Cube(this.scene);


    }

    render = ()=>{
        this.cube?.rotateY(Math.PI / 360);

        this.cubeClass1?.render();
        this.cubeClass2?.render();
        this.cubeClass3?.render();

        this.renderer.render(this.scene,this.camera)
    }

    
}

