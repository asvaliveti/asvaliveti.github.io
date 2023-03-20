import React, { Component } from "react";
import * as THREE from "three";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

class Desk extends Component {
    componentDidMount() {
        let scene = new THREE.Scene();
        let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        let renderer = new THREE.WebGLRenderer();
        scene.background = new THREE.Color( 0xffffff );
        renderer.setSize(window.innerWidth, window.innerHeight);
        // document.body.appendChild( renderer.domElement );
        // use ref as a mount point of the Three.js scene instead of the document.body
        this.mount.appendChild(renderer.domElement);
        const loader = new GLTFLoader();

        loader.load(
            // resource URL
            './scene.gltf',
            // called when the resource is loaded
            function (gltf) {
                scene.add(gltf.scene);
            },
            // called while loading is progressing
            function (xhr) {
                console.log((xhr.loaded / xhr.total * 100) + '% loaded');
            },
            function (error) {
                console.log('An error happened' + error);
            }
        );

        let animate = () => {
            requestAnimationFrame( animate );
            renderer.render( scene, camera );
        }
        animate();
    }

    render() {
        return (
            <div ref={ref => (this.mount = ref)} />
        )
    }
}

export default Desk;