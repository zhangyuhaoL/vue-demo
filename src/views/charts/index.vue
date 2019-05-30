<template>
  <div>
    <div>
      <div id="content"></div>
      <div id="box" ref="box"></div>
    </div>
  </div>
</template>
<script>
import * as THREE from "three";

export default {
  name: "charts",
  data() {
    return {
      renderer: null,
      width: 0,
      height: 0,
      camera: null,
      scene: null,
      light: null
    };
  },
  mounted() {
    this.initChart();
    this.paintChart();
  },
  methods: {
    initChart() {
      const domBox = document.getElementById("content");

      let scene = new THREE.Scene();
      let camera = new THREE.PerspectiveCamera(75, 200 / 200, 0.1, 1000);
      let renderer = new THREE.WebGLRenderer();

      renderer.setSize(200, 200);

      domBox.appendChild(renderer.domElement);

      let geometry = new THREE.CubeGeometry(1, 1, 1);
      let material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      let cube = new THREE.Mesh(geometry, material);
      scene.add(cube);
      camera.position.z = 5;

      function render() {
        requestAnimationFrame(render);
        cube.rotation.x += 0.1;
        cube.rotation.y += 0.1;
        renderer.render(scene, camera);
      }
      render();
    },
    paintChart() {
      this.drawPic();
    },
    drawPic() {
      const initThree = () => {
        this.width = this.$refs.box.clientWidth;
        this.height = this.$refs.box.clientHeight;
        this.renderer = new THREE.WebGLRenderer({
          antialias: true
        });
        this.renderer.setSize(this.width, this.height);
        this.$refs.box.appendChild(this.renderer.domElement);
        this.renderer.setClearColor(0xffffff, 1.0);
      };
      const initCamera = () => {
        this.camera = new THREE.PerspectiveCamera(
          45,
          this.width / this.height,
          1,
          10000
        );
        this.camera.position.x = 0;
        this.camera.position.y = 1000;
        this.camera.position.z = 0;
        this.camera.up.x = 0;
        this.camera.up.y = 0;
        this.camera.up.z = 1;
        this.camera.lookAt({
          x: 0,
          y: 0,
          z: 0
        });
      };
      const initScene = () => {
        this.scene = new THREE.Scene();
      };
      const initLight = () => {
        this.light = new THREE.DirectionalLight(0xff0000, 1.0, 0);
        this.light.position.set(100, 100, 200);
        this.scene.add(this.light);
      };
      // let cube;
      const initObject = () => {
        let geometry = new THREE.Geometry();
        let material = new THREE.LineBasicMaterial({ vertexColors: true });
        let color1 = new THREE.Color(0x444444),
          color2 = new THREE.Color(0xff0000);

        // 线的材质可以由2点的颜色决定
        let p1 = new THREE.Vector3(-100, 0, 100);
        let p2 = new THREE.Vector3(100, 0, -100);
        geometry.vertices.push(p1);
        geometry.vertices.push(p2);
        geometry.colors.push(color1, color2);

        let line = new THREE.Line(geometry, material, THREE.LineSegments);
        this.scene.add(line);
      };

      initThree();
      initCamera();
      initScene();
      initLight();
      initObject();
      console.log(87, this.width);
      this.renderer.clear();
      this.renderer.render(this.scene, this.camera);
    }
  }
};
</script>
<style lang="less" scoped>
#content {
  width: 200px;
  height: 200px;
}
#box {
  width: 200px;
  height: 200px;
}
</style>

