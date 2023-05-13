// Khởi tạo Scene, Camera, Renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// Khởi tạo Cube
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial( { color: 0xffffff, wireframe: true } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

// Xử lý sự kiện bàn phím
document.addEventListener('keydown', (event) => {
    if (event.code === 'Space') {
        if (camera.position.z === 5) {
            camera.position.z = 50;
        } else {
            camera.position.z = 5;
        }
    }

    if (event.code === 'ArrowLeft') {
        cube.rotation.y += 0.1;
    }

    if (event.code === 'ArrowRight') {
        cube.rotation.y -= 0.1;
    }

    if (event.code === 'ArrowUp') {
        cube.rotation.x += 0.1;
    }

    if (event.code === 'ArrowDown') {
        cube.rotation.x -= 0.1;
    }
});

// Hàm vẽ Scene
function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
}
animate();
