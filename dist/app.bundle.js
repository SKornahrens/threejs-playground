/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/three/build/three.module.js":
/*!**************************************************!*\
  !*** ./node_modules/three/build/three.module.js ***!
  \**************************************************/
/*! exports provided: WebGLRenderTargetCube, WebGLRenderTarget, WebGLRenderer, ShaderLib, UniformsLib, UniformsUtils, ShaderChunk, FogExp2, Fog, Scene, Sprite, LOD, SkinnedMesh, Skeleton, Bone, Mesh, LineSegments, LineLoop, Line, Points, Group, VideoTexture, DataTexture, CompressedTexture, CubeTexture, CanvasTexture, DepthTexture, Texture, CompressedTextureLoader, DataTextureLoader, CubeTextureLoader, TextureLoader, ObjectLoader, MaterialLoader, BufferGeometryLoader, DefaultLoadingManager, LoadingManager, JSONLoader, ImageLoader, ImageBitmapLoader, FontLoader, FileLoader, Loader, LoaderUtils, Cache, AudioLoader, SpotLightShadow, SpotLight, PointLight, RectAreaLight, HemisphereLight, DirectionalLightShadow, DirectionalLight, AmbientLight, LightShadow, Light, StereoCamera, PerspectiveCamera, OrthographicCamera, CubeCamera, ArrayCamera, Camera, AudioListener, PositionalAudio, AudioContext, AudioAnalyser, Audio, VectorKeyframeTrack, StringKeyframeTrack, QuaternionKeyframeTrack, NumberKeyframeTrack, ColorKeyframeTrack, BooleanKeyframeTrack, PropertyMixer, PropertyBinding, KeyframeTrack, AnimationUtils, AnimationObjectGroup, AnimationMixer, AnimationClip, Uniform, InstancedBufferGeometry, BufferGeometry, Geometry, InterleavedBufferAttribute, InstancedInterleavedBuffer, InterleavedBuffer, InstancedBufferAttribute, Face3, Object3D, Raycaster, Layers, EventDispatcher, Clock, QuaternionLinearInterpolant, LinearInterpolant, DiscreteInterpolant, CubicInterpolant, Interpolant, Triangle, Math, Spherical, Cylindrical, Plane, Frustum, Sphere, Ray, Matrix4, Matrix3, Box3, Box2, Line3, Euler, Vector4, Vector3, Vector2, Quaternion, Color, ImmediateRenderObject, VertexNormalsHelper, SpotLightHelper, SkeletonHelper, PointLightHelper, RectAreaLightHelper, HemisphereLightHelper, GridHelper, PolarGridHelper, FaceNormalsHelper, DirectionalLightHelper, CameraHelper, BoxHelper, Box3Helper, PlaneHelper, ArrowHelper, AxesHelper, Shape, Path, ShapePath, Font, CurvePath, Curve, ShapeUtils, WebGLUtils, WireframeGeometry, ParametricGeometry, ParametricBufferGeometry, TetrahedronGeometry, TetrahedronBufferGeometry, OctahedronGeometry, OctahedronBufferGeometry, IcosahedronGeometry, IcosahedronBufferGeometry, DodecahedronGeometry, DodecahedronBufferGeometry, PolyhedronGeometry, PolyhedronBufferGeometry, TubeGeometry, TubeBufferGeometry, TorusKnotGeometry, TorusKnotBufferGeometry, TorusGeometry, TorusBufferGeometry, TextGeometry, TextBufferGeometry, SphereGeometry, SphereBufferGeometry, RingGeometry, RingBufferGeometry, PlaneGeometry, PlaneBufferGeometry, LatheGeometry, LatheBufferGeometry, ShapeGeometry, ShapeBufferGeometry, ExtrudeGeometry, ExtrudeBufferGeometry, EdgesGeometry, ConeGeometry, ConeBufferGeometry, CylinderGeometry, CylinderBufferGeometry, CircleGeometry, CircleBufferGeometry, BoxGeometry, BoxBufferGeometry, ShadowMaterial, SpriteMaterial, RawShaderMaterial, ShaderMaterial, PointsMaterial, MeshPhysicalMaterial, MeshStandardMaterial, MeshPhongMaterial, MeshToonMaterial, MeshNormalMaterial, MeshLambertMaterial, MeshDepthMaterial, MeshDistanceMaterial, MeshBasicMaterial, LineDashedMaterial, LineBasicMaterial, Material, Float64BufferAttribute, Float32BufferAttribute, Uint32BufferAttribute, Int32BufferAttribute, Uint16BufferAttribute, Int16BufferAttribute, Uint8ClampedBufferAttribute, Uint8BufferAttribute, Int8BufferAttribute, BufferAttribute, ArcCurve, CatmullRomCurve3, CubicBezierCurve, CubicBezierCurve3, EllipseCurve, LineCurve, LineCurve3, QuadraticBezierCurve, QuadraticBezierCurve3, SplineCurve, REVISION, MOUSE, CullFaceNone, CullFaceBack, CullFaceFront, CullFaceFrontBack, FrontFaceDirectionCW, FrontFaceDirectionCCW, BasicShadowMap, PCFShadowMap, PCFSoftShadowMap, FrontSide, BackSide, DoubleSide, FlatShading, SmoothShading, NoColors, FaceColors, VertexColors, NoBlending, NormalBlending, AdditiveBlending, SubtractiveBlending, MultiplyBlending, CustomBlending, AddEquation, SubtractEquation, ReverseSubtractEquation, MinEquation, MaxEquation, ZeroFactor, OneFactor, SrcColorFactor, OneMinusSrcColorFactor, SrcAlphaFactor, OneMinusSrcAlphaFactor, DstAlphaFactor, OneMinusDstAlphaFactor, DstColorFactor, OneMinusDstColorFactor, SrcAlphaSaturateFactor, NeverDepth, AlwaysDepth, LessDepth, LessEqualDepth, EqualDepth, GreaterEqualDepth, GreaterDepth, NotEqualDepth, MultiplyOperation, MixOperation, AddOperation, NoToneMapping, LinearToneMapping, ReinhardToneMapping, Uncharted2ToneMapping, CineonToneMapping, UVMapping, CubeReflectionMapping, CubeRefractionMapping, EquirectangularReflectionMapping, EquirectangularRefractionMapping, SphericalReflectionMapping, CubeUVReflectionMapping, CubeUVRefractionMapping, RepeatWrapping, ClampToEdgeWrapping, MirroredRepeatWrapping, NearestFilter, NearestMipMapNearestFilter, NearestMipMapLinearFilter, LinearFilter, LinearMipMapNearestFilter, LinearMipMapLinearFilter, UnsignedByteType, ByteType, ShortType, UnsignedShortType, IntType, UnsignedIntType, FloatType, HalfFloatType, UnsignedShort4444Type, UnsignedShort5551Type, UnsignedShort565Type, UnsignedInt248Type, AlphaFormat, RGBFormat, RGBAFormat, LuminanceFormat, LuminanceAlphaFormat, RGBEFormat, DepthFormat, DepthStencilFormat, RGB_S3TC_DXT1_Format, RGBA_S3TC_DXT1_Format, RGBA_S3TC_DXT3_Format, RGBA_S3TC_DXT5_Format, RGB_PVRTC_4BPPV1_Format, RGB_PVRTC_2BPPV1_Format, RGBA_PVRTC_4BPPV1_Format, RGBA_PVRTC_2BPPV1_Format, RGB_ETC1_Format, RGBA_ASTC_4x4_Format, RGBA_ASTC_5x4_Format, RGBA_ASTC_5x5_Format, RGBA_ASTC_6x5_Format, RGBA_ASTC_6x6_Format, RGBA_ASTC_8x5_Format, RGBA_ASTC_8x6_Format, RGBA_ASTC_8x8_Format, RGBA_ASTC_10x5_Format, RGBA_ASTC_10x6_Format, RGBA_ASTC_10x8_Format, RGBA_ASTC_10x10_Format, RGBA_ASTC_12x10_Format, RGBA_ASTC_12x12_Format, LoopOnce, LoopRepeat, LoopPingPong, InterpolateDiscrete, InterpolateLinear, InterpolateSmooth, ZeroCurvatureEnding, ZeroSlopeEnding, WrapAroundEnding, TrianglesDrawMode, TriangleStripDrawMode, TriangleFanDrawMode, LinearEncoding, sRGBEncoding, GammaEncoding, RGBEEncoding, LogLuvEncoding, RGBM7Encoding, RGBM16Encoding, RGBDEncoding, BasicDepthPacking, RGBADepthPacking, CubeGeometry, Face4, LineStrip, LinePieces, MeshFaceMaterial, MultiMaterial, PointCloud, Particle, ParticleSystem, PointCloudMaterial, ParticleBasicMaterial, ParticleSystemMaterial, Vertex, DynamicBufferAttribute, Int8Attribute, Uint8Attribute, Uint8ClampedAttribute, Int16Attribute, Uint16Attribute, Int32Attribute, Uint32Attribute, Float32Attribute, Float64Attribute, ClosedSplineCurve3, SplineCurve3, Spline, AxisHelper, BoundingBoxHelper, EdgesHelper, WireframeHelper, XHRLoader, BinaryTextureLoader, GeometryUtils, ImageUtils, Projector, CanvasRenderer, SceneUtils, LensFlare */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\nconst scene = new three__WEBPACK_IMPORTED_MODULE_0__[\"Scene\"]();\n\nvar camera = new three__WEBPACK_IMPORTED_MODULE_0__[\"PerspectiveCamera\"]( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );\n\nvar renderer = new three__WEBPACK_IMPORTED_MODULE_0__[\"WebGLRenderer\"]();\nrenderer.setSize( window.innerWidth, window.innerHeight );\ndocument.body.appendChild( renderer.domElement );\n\nvar geometry = new three__WEBPACK_IMPORTED_MODULE_0__[\"BoxGeometry\"]( 1, 2, 1 );\nvar material = new three__WEBPACK_IMPORTED_MODULE_0__[\"MeshBasicMaterial\"]( { color: 0x00ff00 } );\nvar cube = new three__WEBPACK_IMPORTED_MODULE_0__[\"Mesh\"]( geometry, material );\nscene.add( cube );\n\nvar geometry = new three__WEBPACK_IMPORTED_MODULE_0__[\"CircleGeometry\"]( 1, 64, 1 );\nvar material = new three__WEBPACK_IMPORTED_MODULE_0__[\"MeshBasicMaterial\"]( { color: 0xffff00 } );\nvar circle = new three__WEBPACK_IMPORTED_MODULE_0__[\"Mesh\"]( geometry, material );\nscene.add( circle );\n\ncamera.position.z = 5;\n\nvar animate = function () {\n  requestAnimationFrame( animate );\n\n  circle.rotation.x += 0.01;\n  circle.rotation.y += 0.01;\n\n  cube.rotation.x += 0.01;\n  cube.rotation.y += 0.01;\n\n  renderer.render(scene, camera);\n};\n\nanimate();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYXBwLmpzPzExMTIiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZFQUE2QyxrQkFBa0I7QUFDL0Q7QUFDQTs7QUFFQTtBQUNBLDZFQUE2QyxrQkFBa0I7QUFDL0Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBIiwiZmlsZSI6Ii4vc3JjL2FwcC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJztcbmNvbnN0IHNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XG5cbnZhciBjYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoIDc1LCB3aW5kb3cuaW5uZXJXaWR0aC93aW5kb3cuaW5uZXJIZWlnaHQsIDAuMSwgMTAwMCApO1xuXG52YXIgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcigpO1xucmVuZGVyZXIuc2V0U2l6ZSggd2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCApO1xuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCggcmVuZGVyZXIuZG9tRWxlbWVudCApO1xuXG52YXIgZ2VvbWV0cnkgPSBuZXcgVEhSRUUuQm94R2VvbWV0cnkoIDEsIDIsIDEgKTtcbnZhciBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCggeyBjb2xvcjogMHgwMGZmMDAgfSApO1xudmFyIGN1YmUgPSBuZXcgVEhSRUUuTWVzaCggZ2VvbWV0cnksIG1hdGVyaWFsICk7XG5zY2VuZS5hZGQoIGN1YmUgKTtcblxudmFyIGdlb21ldHJ5ID0gbmV3IFRIUkVFLkNpcmNsZUdlb21ldHJ5KCAxLCA2NCwgMSApO1xudmFyIG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKCB7IGNvbG9yOiAweGZmZmYwMCB9ICk7XG52YXIgY2lyY2xlID0gbmV3IFRIUkVFLk1lc2goIGdlb21ldHJ5LCBtYXRlcmlhbCApO1xuc2NlbmUuYWRkKCBjaXJjbGUgKTtcblxuY2FtZXJhLnBvc2l0aW9uLnogPSA1O1xuXG52YXIgYW5pbWF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCBhbmltYXRlICk7XG5cbiAgY2lyY2xlLnJvdGF0aW9uLnggKz0gMC4wMTtcbiAgY2lyY2xlLnJvdGF0aW9uLnkgKz0gMC4wMTtcblxuICBjdWJlLnJvdGF0aW9uLnggKz0gMC4wMTtcbiAgY3ViZS5yb3RhdGlvbi55ICs9IDAuMDE7XG5cbiAgcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpO1xufTtcblxuYW5pbWF0ZSgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/app.js\n");

/***/ })

/******/ });