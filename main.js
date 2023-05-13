// Tạo một đối tượng Scene mới
const scene = new THREE.Scene();

// Tạo một camera để xem scene
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

// Tạo một renderer mới
const renderer = new THREE.WebGLRenderer({canvas: document.getElementById("canvas")});

// Đặt màu nền của renderer là màu xanh dương
renderer.setClearColor(0x0000ff);

// Đặt kích thước của renderer là kích thước của cửa sổ trình duyệt
renderer.setSize(window.innerWidth, window.innerHeight);

// Thêm một hình hộp đơn giản vào scene
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({color: 0xffffff});
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Đặt camera sao cho nó nhìn thấy hình hộp
camera.position.z = 5;

// Vẽ scene với camera
function render() {
  requestAnimationFrame(render);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}
render();
