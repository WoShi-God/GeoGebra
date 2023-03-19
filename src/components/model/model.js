import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'; //外部模型导入加载器
//2. 外部添加3D模型
const loader = new GLTFLoader();

const model = new THREE.Group();//导出model组
loader.load( '../../../public/model/Lfd.glb', function ( gltf ) {
  // console.log(gltf.scene);
  
	model.add( gltf.scene);//场景上引用
 
})
  export default model;