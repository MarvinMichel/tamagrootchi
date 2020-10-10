import React, { useEffect } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import './index.css';

const Character = () => {
  useEffect(() => {
    let scene,
      renderer,
      camera,
      model,
      possibleAnims,
      mixer,
      idle,
      danceAnim,
      waveAnim,
      kickAnim,
      clock = new THREE.Clock(),
      loaderAnim = document.getElementById('js-loader');

    init();

    function init() {
      // Initialize model
      const MODEL_PATH = 'model/groot.glb';

      const canvas = document.querySelector('#c');
      const backgroundColor = 0xf1f1f1;

      // Initialize scene, background and fog
      scene = new THREE.Scene();
      scene.background = new THREE.Color(backgroundColor);
      scene.fog = new THREE.Fog(backgroundColor, 60, 100);

      // Initialize renderer
      renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
      renderer.shadowMap.enabled = true;
      renderer.setPixelRatio(window.devicePixelRatio);
      document.body.appendChild(renderer.domElement);

      // Initialize camera
      camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 1000);
      camera.position.z = 30;
      camera.position.x = 0;
      camera.position.y = -3;

      // Add texture materials
      let groot_txt = new THREE.TextureLoader().load('model/textures/groot_diffuse.png');

      groot_txt.flipY = false;

      const groot_mtl = new THREE.MeshPhongMaterial({
        map: groot_txt,
        color: 0xffffff,
        skinning: true,
      });

      // Create loader
      var loader = new GLTFLoader();

      loader.load(
        MODEL_PATH,
        gltf => {
          // Function that runs when model is loaded
          model = gltf.scene;
          let fileAnimations = gltf.animations;

          // Find meshs
          model.traverse(o => {
            if (o.isMesh) {
              o.castShadow = true;
              o.recieveShadow = true;
              o.material = groot_mtl;
            }
          });

          // Set models initial scale
          model.scale.set(2, 2, 2);

          // Make model stand on floor
          model.position.y = -11;

          scene.add(model);
          loaderAnim.remove();

          mixer = new THREE.AnimationMixer(model);

          // Extract all animations from model exept idle
          let clips = fileAnimations.filter(val => val.name !== 'idle');

          possibleAnims = clips.map(val => {
            let clip = THREE.AnimationClip.findByName(clips, val.name);
            clip.tracks.splice(3, 3);
            clip.tracks.splice(9, 3);
            clip = mixer.clipAction(clip);
            return clip;
          });
          [danceAnim, kickAnim, waveAnim] = possibleAnims;

          let idelAnim = THREE.AnimationClip.findByName(fileAnimations, 'idle');

          idle = mixer.clipAction(idelAnim);
          idle.play();
        },
        undefined,
        error => console.error(error)
      );

      // Initalize lights
      let hemiLight = new THREE.HemisphereLight(0xffffff, 0xffffff, 0.61);
      hemiLight.position.set(0, 50, 0);
      scene.add(hemiLight);

      let d = 8.25;
      let dirLight = new THREE.DirectionalLight(0xffffff, 0.54);
      dirLight.position.set(-8, 12, 8);
      dirLight.castShadow = true;
      dirLight.shadow.mapSize = new THREE.Vector2(1024, 1024);
      dirLight.shadow.camera.near = 0.1;
      dirLight.shadow.camera.far = 1500;
      dirLight.shadow.camera.left = d * -1;
      dirLight.shadow.camera.right = d;
      dirLight.shadow.camera.top = d;
      dirLight.shadow.camera.bottom = d * -1;
      scene.add(dirLight);

      // Initialize floor
      let floorGeometry = new THREE.PlaneGeometry(5000, 5000, 1, 1);
      let floorMaterial = new THREE.MeshPhongMaterial({
        color: 0xeeeeee,
        shininess: 0,
      });

      let floor = new THREE.Mesh(floorGeometry, floorMaterial);
      floor.rotation.x = -0.5 * Math.PI;
      floor.recieveShadow = true;
      floor.position.y = -11;
      scene.add(floor);

      let geometry = new THREE.SphereGeometry(8, 32, 32);
      let material = new THREE.MeshBasicMaterial({ color: 13940595 });
      let sphere = new THREE.Mesh(geometry, material);
      sphere.position.z = -15;
      sphere.position.y = -2.5;
      sphere.position.x = -0.25;
      scene.add(sphere);
    }

    function update() {
      if (mixer) {
        mixer.update(clock.getDelta());
      }

      if (resizeRendererToDisplaySize(renderer)) {
        const canvas = renderer.domElement;
        camera.aspect = canvas.clientWidth / canvas.clientHeight;
        camera.updateProjectionMatrix();
      }
      renderer.render(scene, camera);
      requestAnimationFrame(update);
    }
    update();

    // Resize scene with canvas
    function resizeRendererToDisplaySize(renderer) {
      const canvas = renderer.domElement;
      let width = window.innerWidth;
      let height = window.innerHeight;
      let canvasPixelWidth = canvas.width / window.devicePixelRatio;
      let canvasPixelHeight = canvas.height / window.devicePixelRatio;

      const needResize = canvasPixelWidth !== width || canvasPixelHeight !== height;
      if (needResize) {
        renderer.setSize(width, height, false);
      }
      return needResize;
    }

    const buttons = document.querySelectorAll('.button');
    const danceButton = document.querySelector('.button.dance');
    danceButton.addEventListener('click', e => {
      e.preventDefault();
      playModifierAnimation(idle, 0.25, danceAnim, 0.25);
    });

    const waveButton = document.querySelector('.button.wave');
    waveButton.addEventListener('click', e => {
      e.preventDefault();
      playModifierAnimation(idle, 0.25, waveAnim, 0.25);
    });

    const kickButton = document.querySelector('.button.kick');
    kickButton.addEventListener('click', e => {
      e.preventDefault();
      playModifierAnimation(idle, 0.25, kickAnim, 0.25);
    });

    function toggleButtons(flag = false) {
      buttons.forEach(button => {
        button.classList.toggle('disabled');
        if (flag) {
          button.setAttribute('disabled', flag);
        } else {
          button.removeAttribute('disabled');
        }
      });
    }

    function playModifierAnimation(from, fSpeed, to, tSpeed) {
      to.reset();
      to.setLoop(THREE.LoopOnce);
      to.play();
      from.crossFadeTo(to, fSpeed, true);
      toggleButtons(true);
      setTimeout(() => {
        from.enabled = true;
        to.crossFadeTo(from, tSpeed, true);
        toggleButtons();
      }, to._clip.duration * 1000 - (tSpeed + fSpeed) * 1000);
    }
  });

  return <canvas id="c"></canvas>;
};

export default Character;
