// 引入three
import * as THREE from 'three';
// GLTF加载器
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';//相机控件
import model from './model'
// 1.添加场景
const scene = new THREE.Scene();
scene.add(model);
// 辅助坐标系
const axesHeper = new THREE.AxesHelper(400);
scene.add(axesHeper)
// 2物体的创建
//创建一个长方体几何对象Geometry
// const geometry = new THREE.BoxGeometry(30, 30, 30); 
//材质
//2.2创建一个材质对象Material
// const material = new THREE.MeshLambertMaterial({//漫反射材质
// color:0x808080,//0x808080设置材质颜色为灰色
// }); 
// 两个参数分别为几何体geometry、材质material
//模型对象创建
// const mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
// //设置网格模型在三维空间中的位置坐标，默认是坐标原点
// mesh.position.set(0,10,0);//模型位置
// scene.add(mesh);//模型加载
// 3.光源
// const pointLight =new THREE.PointLight(0xffffff ,0.7);//点光源
// pointLight.position.set(200,200,200);//光源位置
// scene.add(pointLight);//将光源添加到场景

// 平行光
const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight.position.set(1750, 1750, 1750);
scene.add(directionalLight);
// 第二个平行 灯光
const directionalLight2 = new THREE.DirectionalLight(0xffffff, 0.8);
directionalLight2.position.set(-1750, -1750, -1750);
scene.add(directionalLight2);
//环境光（无方向光源）
// const ambient = new THREE.AmbientLight(0xffffff, 0.5);
// scene.add(ambient)//光源添加到场景
const ambient = new THREE.AmbientLight(0x404040); // soft white light
scene.add(ambient);
// 4.画布大小
// 占满屏幕
// const width = window.innerWidth;
// const height = window.innerHeight;
// 自定义大小
const width = 1263;
const height = 580;
// 5、创建相机
const camera = new THREE.PerspectiveCamera(30, width / height, 0.1, 3000);
// 相机位置1050 850 800
camera.position.set(1050, 850, 800);
// 相机观察的目标
camera.lookAt(0, 0, 0);

// 6.渲染器创建
const renderer = new THREE.WebGLRenderer();//
renderer.setSize(width, height);//画布尺寸
// renderer.render(scene, camera);//渲染场景和相机
renderer.setClearColor('rgba(255, 255, 255,0.5)',1.0); //渲染的画布背景色
// 渲染器编码方式
renderer.outputEncoding = THREE.sRGBEncoding;
//7.渲染循环（模型自转）
function render() {
    // mesh.rotateY(0.01);//每次旋转度数
    model.rotateY(0.01);
    renderer.render(scene, camera);//渲染场景和相机
    requestAnimationFrame(render);//周期旋转动作
}
render()
// 8.相机轨道控件（鼠标可以控制模型相机）
const controls = new OrbitControls(camera, renderer.domElement)//创建相机控件对象
//鼠标点击控制时间
controls.addEventListener('change', () => {
    // renderer.render(scene, camera);
})
// 画布跟随动态变化
// window.onresize = () => {
//   render.setSize(window.innerWidth, window.innerHeight);
//   camera.aspect = window.innerWidth / window.innerHeight;
//   camera.updateProjectionMatrix();
// }
const active = () => {
    const dom = document.querySelector('.firstbox')
    // console.log(dom)
    dom?.appendChild?.(renderer.domElement);
}
export default function Modelshow() {
    return active()
}
