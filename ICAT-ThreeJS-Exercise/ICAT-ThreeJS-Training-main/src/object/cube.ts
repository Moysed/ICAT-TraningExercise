import * as THREE from 'three';

export class Cube{
    cube: THREE.Mesh | null = null;

    constructor(scene: THREE.Scene){
        const geometry = new THREE.BoxGeometry(1, 1, 1);
        const material = new THREE.MeshBasicMaterial({color: 0xffc0});
        const v0 = new THREE.Vector3(Math.random(),Math.random())
        this.cube = new THREE.Mesh(geometry, material);
        this.cube?.position.copy(v0);
        scene.add(this.cube);
    }

    render = () => {
        
        this.cube?.rotateY(-Math.PI / 360);
        
    }
}