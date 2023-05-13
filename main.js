// Khởi tạo Scene, Camera, Renderer
const scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Khởi tạo Cube
const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

let isOrthographic = false; // Khởi tạo biến để lưu trạng thái hiện tại của camera

// Hàm xử lý sự kiện bàn phím
function handleKeyDown(event) {
  if (event.code === "Space") {
    isOrthographic = !isOrthographic; // Thay đổi giá trị biến isOrthographic khi ấn phím Space

    if (isOrthographic) {
      // Nếu đang sử dụng phép chiếu phối cảnh thì chuyển sang phép chiếu song song
      camera = new THREE.OrthographicCamera(
        window.innerWidth / -16,
        window.innerWidth / 16,
        window.innerHeight / 16,
        window.innerHeight / -16,
        0.1,
        1000
      );
    } else {
      // Nếu đang sử dụng phép chiếu song song thì chuyển sang phép chiếu phối cảnh
      camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      camera.position.z = 5;
    }

    // Cập nhật ma trận chiếu của camera
    camera.updateProjectionMatrix();
  }

  if (event.code === "ArrowLeft") {
    cube.rotation.y += 0.1;
  }

  if (event.code === "ArrowRight") {
    cube.rotation.y -= 0.1;
  }

  if (event.code === "ArrowUp") {
    cube.rotation.x += 0.1;
  }

  if (event.code === "ArrowDown") {
    cube.rotation.x -= 0.1;
  }
}

// Thêm sự kiện bàn phím vào document
document.addEventListener("keydown", handleKeyDown);

// Hàm vẽ Scene
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
