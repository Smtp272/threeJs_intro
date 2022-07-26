const scene = new THREE.Scene()
//CUBE
const geometry = new THREE.BoxGeometry(1,1,1)
const material = new THREE.MeshBasicMaterial({color:"blue"})
const mesh = new THREE.Mesh(geometry,material)


scene.add(mesh)

// Sizes
const sizes={
    width:800,
    height:600
}

//Camera
const camera = new THREE.PerspectiveCamera(75,sizes.width/sizes.height)
camera.position.z = 4
camera.position.y = 2
camera.position.x = 2
scene.add(camera)

//Renderer
// const canvas = $("#webGL")
const canvas = document.querySelector("#webGL")
const renderer =  new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width,sizes.height)
renderer.render(scene,camera)

