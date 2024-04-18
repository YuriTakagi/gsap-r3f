import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import gsap from "gsap";
import { useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useControls } from "leva";

const Loadoff = () => {
  const snail = useGLTF("/loadoff-logo-snail.gltf");
  const vortex = useGLTF("/loadoff-logo-vortex.gltf");
  const 〆 = useGLTF("/loadoff-logo-〆.gltf");
  const { scene, camera } = useThree();
  console.log(camera.position);
  const timeline = gsap.timeline();
  // デバッグ用
  // const { cameraPosition, scenePosition, sceneRotation } = useControls({
  //   cameraPosition: {
  //     value: { x: 3.5, y: 1, z: 3.5 },
  //     step: 0.05,
  //   },
  //   scenePosition: {
  //     value: { x: 1, y: 0, z: -1 },
  //     step: 0.05,
  //   },
  //   sceneRotation: {
  //     value: { x: 0, y: 0, z: 0 },
  //     step: 0.01,
  //   },
  // });

  useLayoutEffect(() => {
    new ScrollTrigger({});
    timeline
      .to(camera.position, {
        x: 0.5,
        y: -1,
        z: -4.5,
        scrollTrigger: {
          trigger: ".second-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
          // markers: true, // デバッグ用
        },
      })
      .to(scene.position, {
        x: 2,
        y: -1,
        z: 0,
        scrollTrigger: {
          trigger: ".second-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
          // markers: true, // デバッグ用
        },
      })
      .to(scene.rotation, {
        x: 6,
        y: 0,
        z: 0,
        scrollTrigger: {
          trigger: ".second-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
          // markers: true, // デバッグ用
        },
      })
      .to(camera.position, {
        x: 4,
        y: -1,
        z: 3,
        scrollTrigger: {
          trigger: ".third-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
          // markers: true, // デバッグ用
        },
      })
      .to(scene.position, {
        x: 4,
        y: -2,
        z: -4,
        scrollTrigger: {
          trigger: ".third-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
          // markers: true, // デバッグ用
        },
      })
      .to(scene.rotation, {
        x: 0,
        y: -2,
        z: 0,
        scrollTrigger: {
          trigger: ".third-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
          // markers: true, // デバッグ用
        },
      })
      .to(camera.position, {
        x: 2,
        y: 4,
        z: 3,
        scrollTrigger: {
          trigger: ".fourth-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
          // markers: true, // デバッグ用
        },
      })
      .to(scene.position, {
        x: -2,
        y: 1,
        z: 1,
        scrollTrigger: {
          trigger: ".fourth-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
          // markers: true, // デバッグ用
        },
      })
      .to(scene.rotation, {
        x: 0,
        y: 5,
        z: -6,
        scrollTrigger: {
          trigger: ".fourth-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
          // markers: true, // デバッグ用
        },
      })
      .to(camera.position, {
        x: 4.5,
        y: 2,
        z: 5.5,
        scrollTrigger: {
          trigger: ".fifth-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
          // markers: true, // デバッグ用
        },
      })
      .to(scene.position, {
        x: 3.5,
        y: 0.3,
        z: 2,
        scrollTrigger: {
          trigger: ".fifth-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
          // markers: true, // デバッグ用
        },
      })
      .to(scene.rotation, {
        x: 6,
        y: 7,
        z: 6,
        scrollTrigger: {
          trigger: ".fifth-section",
          start: "top bottom",
          end: "top top",
          scrub: true,
          immediateRender: false,
          // markers: true, // デバッグ用
        },
      });
  }, []);

  // デバッグ用
  // useFrame(() => {
  //   camera.position.x = cameraPosition.x;
  //   camera.position.y = cameraPosition.y;
  //   camera.position.z = cameraPosition.z;
  //   scene.position.x = scenePosition.x;
  //   scene.position.y = scenePosition.y;
  //   scene.position.z = scenePosition.z;
  //   scene.rotation.x = sceneRotation.x;
  //   scene.rotation.y = sceneRotation.y;
  //   scene.rotation.z = sceneRotation.z;
  // });

  return (
    <>
      <group position={[2, 0, 0]}>
        <primitive object={snail.scene} scale={0.02} position={[0, 0, 0]} />
        <primitive object={vortex.scene} scale={0.02} position={[0.8, 0, 0]} />
        <primitive object={〆.scene} scale={0.02} position={[0.6, 0.4, 0]} />
      </group>
    </>
  );
};

export default Loadoff;
