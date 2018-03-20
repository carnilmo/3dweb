var clock, container, camera, scene, renderer, controls, listener;

var ground, character;
var mesh;
var material;
var light;
var textureLoader = new THREE.TextureLoader();
var loader = new THREE.JSONLoader();
var isLoaded = false;
var action = {}, mixer;

var actualAnimation = 0;

init();

function init () {
  clock = new THREE.Clock();

  scene = new THREE.Scene();

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);

  container = document.getElementById('container');
  container.appendChild(renderer.domElement);

  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(.3, 1.5, 2);
  listener = new THREE.AudioListener();
  camera.add(listener);

  controls = new THREE.OrbitControls(camera, renderer.domElement);
  controls.target = new THREE.Vector3(0, 0.6, 0);
  // Lights
  light = new THREE.AmbientLight(0xffffff, 3);
  scene.add(light);


  loader.load( './models/draft.json', function ( geometry, materials ) {
      //mesh = new THREE.Mesh( geometry, new THREE.MeshFaceMaterial( materials ) );
      mixer = new THREE.AnimationMixer(mesh);

      //material = new THREE.MeshFaceMaterial(materials);
      material = new THREE.MeshNormalMaterial();
      mesh = new THREE.Mesh(geometry, material);

      scene.add( mesh );
      window.addEventListener('resize', onWindowResize, false);
      isLoaded = true;
      animate();
  });

}


function fadeAction (name) {
  var from = action[ activeActionName ].play();
  var to = action[ name ].play();

  from.enabled = true;
  to.enabled = true;

  if (to.loop === THREE.LoopOnce) {
    to.reset();
  }

  from.crossFadeTo(to, 0.3);
  activeActionName = name;

}

function onWindowResize () {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
}


function animate () {
  requestAnimationFrame(animate);
  controls.update();
  render();

}

function render () {
  var delta = clock.getDelta();
  mixer.update(delta);
  renderer.render(scene, camera);
}
