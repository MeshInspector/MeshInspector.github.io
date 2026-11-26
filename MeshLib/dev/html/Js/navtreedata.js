/*
 @licstart  The following is the entire license notice for the JavaScript code in this file.

 The MIT License (MIT)

 Copyright (C) 1997-2020 by Dimitri van Heesch

 Permission is hereby granted, free of charge, to any person obtaining a copy of this software
 and associated documentation files (the "Software"), to deal in the Software without restriction,
 including without limitation the rights to use, copy, modify, merge, publish, distribute,
 sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in all copies or
 substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING
 BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
 DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

 @licend  The above is the entire license notice for the JavaScript code in this file
*/
var NAVTREE =
[
  [ "MeshLib JavaScript Docs", "index.html", [
    [ "About", "../index.html", null ],
    [ "Live Demo", "^https://demo.meshlib.io/", null ],
    [ "Getting Started", "../InstallationGuide.html", [
      [ "Python", "../MeshLibPythonSetupGuide.html", null ],
      [ "C++", "../MeshLibCppSetupGuide.html", null ],
      [ "C#", "../MeshLibCSharpSetupGuide.html", null ],
      [ "C", "../MeshLibCSetupGuide.html", null ],
      [ "JavaScript", "../MeshLibJsSetupGuide.html", null ],
      [ "Rust", "../MeshLibRustSetupGuide.html", null ],
      [ "Java", "../MeshLibJavaSetupGuide.html", null ],
      [ "CMake", "../MeshLibCmakeSetupGuide.html", null ]
    ] ],
    [ "License", "../License.html", null ],
    [ "How to cite", "../Citation.html", null ],
    [ "Tutorials", "../Tutorials.html", [
      [ "Create First Plugin using C++", "../FirstPluginTutorial.html", null ],
      [ "Support Generator Tool using C++", "../SupportGeneratorTutorial.html", null ]
    ] ],
    [ "Examples", "../Examples.html", [
      [ "C++ Application Based on MeshLib", "../Examples.html#CppApplication", [
        [ "Application Based on MeshLib", "../BasedApplication.html", null ]
      ] ],
      [ "General Samples", "../Examples.html#GeneralExamples", [
        [ "Mesh Load and Save", "../ExampleMeshLoadSave.html", null ],
        [ "Export Raw Triangles", "../ExampleMeshExport.html", null ],
        [ "Mesh Modification", "../ExampleMeshModification.html", null ],
        [ "Mesh Boolean", "../ExampleMeshBoolean.html", null ],
        [ "Mesh Decimate", "../ExampleMeshDecimate.html", null ],
        [ "Mesh Offset", "../ExampleMeshOffset.html", null ],
        [ "Mesh Weighted Offset", "../ExampleMeshOffsetWeighted.html", null ],
        [ "Mesh Fill Hole", "../ExampleMeshFillHole.html", null ],
        [ "Mesh Stitch Holes", "../ExampleMeshStitchHole.html", null ],
        [ "Mesh Fix Degeneracies", "../ExampleMeshFixDegeneracies.html", null ],
        [ "Signed Distance", "../ExampleSignedDistance.html", null ],
        [ "Signed Distance Point To Mesh", "../ExampleSignedDistancePointToMesh.html", null ],
        [ "Signed Distances", "../ExampleSignedDistances.html", null ],
        [ "Global Registration", "../ExampleGlobalRegistration.html", null ],
        [ "Mesh ICP", "../ExampleMeshICP.html", null ],
        [ "Mesh Extrude", "../ExampleMeshExtrude.html", null ],
        [ "Mesh Free Form Deformation", "../ExampleFreeForm.html", null ],
        [ "Mesh Laplacian Deformation", "../ExampleLaplacian.html", null ],
        [ "Mesh Denoise", "../ExampleNoiseDenoise.html", null ],
        [ "Triangulation", "../ExampleTriangulation.html", null ],
        [ "Points to Mesh", "../ExamplePointsToMesh.html", null ],
        [ "Contour Triangulation", "../ExampleContourTriangulation.html", null ],
        [ "Terrain Triangulation", "../ExampleTerrainTriangulation.html", null ],
        [ "Fusion", "../ExampleFusion.html", null ],
        [ "Text to Mesh", "../ExampleMeshFromText.html", null ]
      ] ],
      [ "Collisions", "../Examples.html#Collisions", [
        [ "Detect Collisions", "../ExampleDetectCollisions.html", null ],
        [ "Detect Collisions Precise", "../ExampleDetectCollisionsPrecise.html", null ],
        [ "Detect Self-Intersections", "../ExampleDetectSelfIntersections.html", null ]
      ] ],
      [ "Python Specific Samples", "../Examples.html#PythonSpecificExamples", [
        [ "Viewer", "../ExampleViewer.html", null ],
        [ "Volume Rendering", "../ExampleViewerVolumeRender.html", null ],
        [ "Plotly Visualization", "../ExamplePlotly.html", null ],
        [ "Using Numpy", "../ExampleNumpy.html", null ],
        [ "Numpy Triangulation", "../ExampleNumpyTriangulation.html", null ],
        [ "Offset with Cuda", "../ExampleCudaOffset.html", null ],
        [ "Open Dicom Files", "../ExampleDicomFiles.html", null ]
      ] ]
    ] ],
    [ "Switching from Other Libraries", "../SwitchingFromOtherLibraries.html", null ],
    [ "Package Overview", "../PackageOverview.html", [
      [ "File Format Support", "../FileFormatSupport.html", null ],
      [ "Mesh Structure", "../MeshStructureOverview.html", null ],
      [ "Basic Math Types", "../BasicMathTypesOverview.html", null ],
      [ "Float vs Double", "../FloatVSDouble.html", null ],
      [ "Data Model Class Hierarchy", "../DataModel.html", null ],
      [ "Spaces and Transformations", "../SpacesHelp.html", null ],
      [ "How to use С++ Example Plugin", "../ExamplePluginOverview.html", null ],
      [ "State Plugins Overview", "../StatePluginsHelp.html", null ],
      [ "How to Add Plugin", "../HowtoAddPluginOverview.html", null ],
      [ "Internationalization Guide", "../I18nGuide.html", null ]
    ] ],
    [ "API", "../APIPage.html", [
      [ "C++", "../Cpp/APICppPage.html", null ],
      [ "Python", "../Py/APIPyPage.html", null ],
      [ "C", "../C/APICPage.html", null ],
      [ "C#", "../Csharp/APICsharpPage.html", null ],
      [ "JavaScript", "APIJsPage.html", [
        [ "Namespace List", "namespaces.html", [
          [ "Namespace List", "namespaces.html", "namespaces_dup" ],
          [ "Namespace Members", "namespacemembers.html", [
            [ "All", "namespacemembers.html", "namespacemembers_dup" ],
            [ "Functions", "namespacemembers_func.html", "namespacemembers_func" ],
            [ "Enumerations", "namespacemembers_enum.html", null ],
            [ "Enumerator", "namespacemembers_eval.html", null ]
          ] ]
        ] ],
        [ "Class List", "annotated.html", [
          [ "Class List", "annotated.html", "annotated_dup" ],
          [ "Class Index", "classes.html", null ],
          [ "Class Hierarchy", "hierarchy.html", "hierarchy" ],
          [ "Class Members", "functions.html", [
            [ "All", "functions.html", "functions_dup" ],
            [ "Functions", "functions_func.html", "functions_func" ],
            [ "Variables", "functions_vars.html", "functions_vars" ]
          ] ]
        ] ],
        [ "File List", "files.html", [
          [ "File List", "files.html", "files_dup" ],
          [ "File Members", "globals.html", [
            [ "All", "globals.html", "globals_dup" ],
            [ "Functions", "globals_func.html", "globals_func" ],
            [ "Enumerations", "globals_enum.html", null ],
            [ "Enumerator", "globals_eval.html", "globals_eval" ]
          ] ]
        ] ]
      ] ],
      [ "Rust", "../Rust/APIRustPage.html", null ],
      [ "Java", "../Java/APIJavaPage.html", null ]
    ] ],
    [ "Third-Party Dependencies", "../ThirdParty.html", null ]
  ] ]
];

var NAVTREEINDEX =
[
"../APIPage.html",
"__all_8d_8mts.html#a0b993bb61567c9fff83fa12a0a4b118a",
"__all_8d_8mts.html#a20c1908567899222ab759cb2b4270b2ba50ba2acfd483f395e71abb80f687463e",
"__all_8d_8mts.html#a33624123210baec74af9f698993abf5c",
"__all_8d_8mts.html#a45ac1d3e8ce2f5f7f32210f5c5937be8",
"__all_8d_8mts.html#a5b17bdae4d0d11ad89879e31add0472f",
"__all_8d_8mts.html#a73ad601c1beae344e0d5b80f87ee99e1",
"__all_8d_8mts.html#a866abe9588caac4669c3b5ebf16b9721",
"__all_8d_8mts.html#a996f73e1a227829c8b3a05a6fc27f5e6",
"__all_8d_8mts.html#aac637eaf4da8390e1909b413fa93519ea4da202338f118b9e57137036fa2d3ca6",
"__all_8d_8mts.html#ac1ac701b5d0ef2949b8f88a47c552923",
"__all_8d_8mts.html#ad835e0b8d567d5c51333e75a1c5e48db",
"__all_8d_8mts.html#aeb740c6b42c0aee57c1f79b52f8c724d",
"__all_8d_8mts.html#afcadc5f0767772e40cefd054e4278155",
"classAABBTreePolyline3.html#a46bf528d81bd83ae6d96340f809dc0e1",
"classAddVisualProperties__MR__FeatureObject__MR__DimensionsVisualizePropertyType__diameter__MR__39aa344e4d984b5e84a0ec28f85ea294.html#aa0aa1d12b9551f4927b5935ad17e80b7",
"classAngleMeasurementObject.html#a05302762998eaea3af3a30f16329b041",
"classBSplineSurfaceFitSettings.html#a04455ce31a137da6cbd447072f3a5d8b",
"classBitSet.html#ab9767ae7ef347d600f25d3007e80297c",
"classBox1i64.html#af0361d54b9852e2bb694b2876d256bb7",
"classBox3i64.html#a17942c31c10c4fed5c7450d01ca5b88d",
"classBuffer__MR__NodeId__MR__NodeId.html#ac4227790fa2c03f52bd432731fbe27ad",
"classCameraPointsTriangulationSettings.html#ae28cb4eee58a3d77e5cdbb03e9ba5ecb",
"classChangePolylineAction.html#aa677a93c5b6a59f6ed4749c36481a5aa",
"classCmpOld.html#a53db35d68ae2c1b2be86e133043880a2",
"classConeObject.html#aad2dd0eb6d70fc198d3c0f3142536a82",
"classCylinder3d.html#abb686e511ca46ec58b86b99691b18d4f",
"classDeloneFlipsCache.html#a36b5ae49e204f5ba6935db2a6630b23a",
"classDistanceMapSaveSettings.html#abc0248ab75b686a30b1c0b98432040f5",
"classEdgeBitSet.html#a3337d1c32b374d379f64d77e7174e376",
"classEdgePathsBuilderT__MR__TrivialMetricToPenalty.html#a497264e56125a9e29aea4e60a0e2db0d",
"classEndMillTool.html",
"classFaceFace.html#ac327bfba23f81b65ed466969e7fd95eb",
"classFeatureObject.html#a136bf033110ef22db1f352d01f409f21",
"classFeatures_1_1MeasureResult__Distance.html#ac0aa8b3cd819d7c06919fd13dd0081c6",
"classFillingSurface_1_1CellularSurface_1_1Params.html#a009a194bcb2f4b188f82dd31191aeedb",
"classFlowAggregator.html#a193a100b3eac47c4ac446141ae83d3e0",
"classGraphEdgeBitSet.html#aa1caf301a5b5da0a69fcbbec31195aa8",
"classHistoryAction.html",
"classInSphereSearchSettings.html#a0c923f927a1f69b191016db82aa8fff6",
"classLine3Mesh__double.html#ad30112f2f0fc79f26813cd45d4a288fd",
"classLoadedMeshData.html#a450f38f0a194c0b71cafd8f829fb1c07",
"classMatrix2f.html#a8315812004886651ec8eb4ab7ddb65b0",
"classMatrix4f.html#a15fa7e022531cc5b6ac4527e9a3f58cf",
"classMesh.html#a1e3fab99540a3abf8063f6e72aff0329",
"classMeshBuilder_1_1UniteCloseParams.html#ae5fab40b027a3191c5ff2cfbe1bcc0cc",
"classMeshLoad_1_1ObjLoadSettings.html",
"classMeshPointAndDistance.html#a176aa81d28fd20f78d2f051ee813faf0",
"classMeshTopology.html#a4ee2af6e64bfbada00bbc579ac836fe1",
"classMovementBuildBodyParams.html#a863ecd5c8870fefa23c94012a9d444bc",
"classNesting_1_1TetrisDensifyOptions.html#a599e71a33324623c3af03dc2a41f249d",
"classNoDefInit__MR__RegionId.html",
"classObjBitSet.html#a3aef2366bf5c69472942b1695c51f202",
"classObjectComparableWithReference.html",
"classObjectGcode.html#a2f4e88df30f72eb57f36fde2536d2e56",
"classObjectLabel.html#ae8bb97851bc1fe0432e7cef4924fa02f",
"classObjectLinesHolder.html#ad81509b7c096573073cde82ef50708a0",
"classObjectMeshHolder.html#a216f57a5fae773907d114267e6e8d6d9",
"classObjectPoints.html#a9d82357c5b6dab4e047b13459c5bfe58",
"classObjectVoxels.html#a290bef56ec6a3d8a4e5cf9b0d2dc953e",
"classOffsetContoursRestoreZParams.html",
"classPixelBitSet.html#aab19a1ff536d0ced2130804b97779870",
"classPlaneObject.html#a8c346af5c5c91e073ff3214db4b03715",
"classPointMeasurementObject.html#a782fbf1a4b6f6dca10b27905d287ee27",
"classPointToPlaneAligningTransform.html#a0d4725061c74d01242db58b8fa5c7b90",
"classPolyline3.html",
"classPolynomial__double__1.html#a6c8be55f3256e0fa35e08a6db4cfbc27",
"classQuaterniond.html#af0e1d8ce56d0b490cb0024a79858aed3",
"classRefineParameters.html#abc5852aa581722622f0ab827773e1f51",
"classSceneColors.html",
"classSetBitIteratorT__MR__NodeBitSet.html#aeb0943214bd11bd5725e51f776516b94",
"classSimpleVolumeU16.html#abf8e2c8ceb9f7f76b0a6647022535850",
"classSphereObject.html#ae5b5de5fd11bd3b7eb958f4f026e963a",
"classSymMatrix3d.html#a0156c0eeefa83dc6db5a498d8827c05d",
"classSystemPath.html#af06d4ce78775b0950dffeda8e98cc210",
"classTorus3d.html#a2453dd1e2244f0f7899476656fc45ef3",
"classTriangulation.html#ad01912657f7bf5d6619af51493505c4b",
"classTypedBitSet__MR__Id__MR__SurfaceDistanceStartTag.html#a5704d03b92668c92f2c189cdf9b859b1",
"classUndirectedEdgeColors.html#a8e6c99fa29587bd6719fde843a9af068",
"classUnitInfo.html#aeb450f75fd55c7fb3c4dafadffbbab60",
"classVector4__unsigned__char.html#a6006c2f7b31d9db9b10a4cf2263ff875",
"classVector__MR__AABBTreeWideLeafTri.html#aff72fdac92f9f6715c3bca77b37e1038",
"classVector__MR__BoxedLeaf__MR__AABBTreeTraits__MR__UndirectedEdgeTag__MR__Box3f.html#a60d8fd3c85f6af3a498bb02f94703910",
"classVector__MR__FanRecord__MR__VertId.html#a9a763b3434df0931a7edefb134485e26",
"classVector__MR__Id__MR__ICPElemtTag__MR__Id__MR__ICPElemtTag.html#af0809a172d56f2c939516b6ed5dd3b81",
"classVector__MR__MeshTexture__MR__TextureId.html#a6ca198e1af3b475c56d106ec96ac34f7",
"classVector__MR__ObjId__MR__VoxelId.html",
"classVector__MR__QuadraticForm2f__MR__VertId.html#a77f826896a0532dd19cc6bea980f2c99",
"classVector__MR__VarEdgeTri.html#aae30478dfffcca3c10fd44a317444863",
"classVector__MR__Vector3i__MR__VertId.html#aa57e2d3c37896ef5fced90a1241f3b3e",
"classVector__MR__VertId.html#a13b3759b14c30787d5caaf194c661731",
"classVector__MR__WatershedGraph__BasinInfo__MR__GraphVertId.html#a1498537d8c8b203927e01b5c23c76121",
"classVector__float__MR__Id__MR__SurfaceDistanceStartTag.html#a7a2638671b8537549b67be489a99a8ba",
"classVector__int__MR__RegionId.html#a815758df0a6c6e705b179c6b4f54638a",
"classVector__std__array__float__33__MR__VertId.html#aa12a0997b7b00c5d4269dc8d47fac8de",
"classVector__unsigned__short__MR__VoxelId.html#a03fc96c1c948059a48e436446124e6d2",
"classVertColors.html#ae1135aa15ab396b5c7b9fa2b24e203e7",
"classVertScalars.html#ad57502ebea3e0416b3556c8030e7b68a",
"classVisualObject.html#a8d180539510c2a7294052afa84dbdc5c",
"classVoxelScalars.html#abf89966de432b46355e7e573dff79aa3",
"classWeightedShell_1_1DistanceVolumeCreationParams.html#a2f2970eb53f61b124beb5e243b194c98",
"classexpected__MR__FaceBitSet__std__string.html#a6d9d3ae496eb79b0b6a1565800b23877",
"classexpected__MR__SimpleVolumeMinMaxU16__std__string.html#a678b61825bdc89a739177c67809385e2",
"classexpected__std__array__MR__SimpleVolumeMinMax__3__std__string.html#a92a5f65fa4e353fd7ccdffc2db6f5eb5",
"classphmap_1_1phmap__flat__hash__map__MR__EdgeId__MR__EdgeId__phmap__Hash__MR__EdgeId__phmap__Eqb8942045c9aeb4dec9f640db605dd84e.html#ad05f58f1b6e9f1ef76a5086b64584c56",
"classphmap_1_1phmap__flat__hash__map__MR__Id__MR__SurfaceDistanceStartTag__MR__Id__MR__SurfaceDi8209c443cc432da3a966031229a761cb.html#a15402eb6af58aa773b1bdb72f9263890",
"classphmap_1_1phmap__flat__hash__map__MR__UndirectedEdgeId__MR__EdgeId__phmap__Hash__MR__Undirec5486d11576c891b34217f3b24fda7dcf.html#a9296a9d24a4ab2b43ab25f46f19b55f3",
"classphmap_1_1phmap__flat__hash__map__MR__VertId__MR__VertPathInfo__phmap__Hash__MR__VertId__phm4ab454b36134eb2f4ca486436e67bafe.html#a5e1a037e8b7ee50c4ab1b370dd231c5d",
"classphmap_1_1phmap__flat__hash__map__std__filesystem__path__std__string__phmap__Hash__std__file7fdcc8246726adcea056d07728750a15.html#a0488712b7f66e0b66eb59697a62a5ed1",
"classstd__function__MR__MeshTriPoint__from__size__t.html#a3e66fb4830d8974266c4a09c243c6188",
"classstd__function__double__from__MR__VertId__MR__VertId__MR__VertId__MR__VertId.html#aa05190667ac9e405e1f779af13ffe160",
"classstd__function__void__from__MR__SceneLoad__Result.html#ac6ac040013f5fa8c54a1edbafe108284",
"classstd__optional__MR__LengthUnit.html",
"classstd__optional__MR__VertScalars.html#a06714506214ef992602b29b2c750f83e",
"classstd__pair__const__MR__GraphEdgeId__MR__GraphEdgeId.html#aa3386f03d5decf8280f506195582ddb9",
"classstd__shared__ptr__MR__AddVisualProperties__MR__FeatureObject__MR__DimensionsVisualizeProper668f39795a2d30725df52f1da960e10b.html#aec8b6ba9a881e3df26730bae7c0c745d",
"classstd__shared__ptr__MR__ChangeMeshDataAction.html#a47cce41b0b89ae0ac725b2e10bf3e155",
"classstd__shared__ptr__MR__ChangePointCloudNormalsAction.html#a2131e225c39819f079f29fb5c9063632",
"classstd__shared__ptr__MR__ComputePointsToDistanceVolume.html#ad1cb11f4b986512ba7a537abf09b7341",
"classstd__shared__ptr__MR__Mesh.html#a5fb9739004a05b94982209b38accfea0",
"classstd__shared__ptr__MR__PartialChangeMeshAction.html",
"classstd__shared__ptr__MR__VisualObject.html#a8c3f5287f430ac2a1f55596376a47580",
"classstd__variant__MR__Polynomial__float__0__MR__Polynomial__float__1__MR__Polynomial__float__2_ae3b0a1d42de0eaddc403a8daeed3d7f.html#a433e2567f0219e9aea79bfc9b2a854c3",
"classstd__vector__MR__AffineXf3f__MR__Allocator__MR__AffineXf3f.html#a57e8a75621b1cd74e174261a0f350fbb",
"classstd__vector__MR__Color__MR__Allocator__MR__Color.html#ae771b41489a0e87695f9e538cd6ebb91",
"classstd__vector__MR__FaceBitSet__MR__Allocator__MR__FaceBitSet.html#a3e728d719b198ebb0351cf5885f4564f",
"classstd__vector__MR__FlowOrigin.html#a9a6453600dfb0e3dc500dcbf88432c51",
"classstd__vector__MR__ICPGroupPair.html#af010c492b377a38f97e94279e863f1b2",
"classstd__vector__MR__MeshBuilder__VertDuplication.html#ac684e460d73a74872478d1c6fbbe6065",
"classstd__vector__MR__Nesting__MeshXf__MR__Allocator__MR__Nesting__MeshXf.html#a96d70c59f3552351601868352ee05b2b",
"classstd__vector__MR__PixelId__MR__Allocator__MR__PixelId.html#a319549b1cce304fe2cb7234327965dca",
"classstd__vector__MR__RigidXf3d.html#a710a7036d76ed8d945d742d4a7478cb6",
"classstd__vector__MR__UnorientedTriangle.html#aa6d05048ee5976e2ce8343d9cd98c83c",
"classstd__vector__MR__Vector3f__MR__Allocator__MR__Vector3f.html#ab14d75d7663901b33a30cca791c4ca68",
"classstd__vector__MR__ViewportMask.html#a9b9b928edf9221163fdc77aa19723c49",
"classstd__vector__double.html#a96f9fd29e32fb369e1211f249396210b",
"classstd__vector__std__array__MR__Vector3f__3.html#a9ecaa85a483ba49e07ee447373543735",
"classstd__vector__std__pair__double__int.html#ab351d0d94a8f53155918a54f8f799823",
"classstd__vector__std__shared__ptr__MR__ObjectPointsHolder.html#a93ed2636f2e9ce187b775b55f40e70fe",
"classstd__vector__std__vector__MR__PlanarTriangulation__IntersectionInfo.html#a757e3b8bd4767f2b6a3b8e3f09f6349f",
"functions_v.html",
"index_8d_8mts.html#a151e6dac77a25fa31cc2fc8e881b31d3",
"index_8d_8mts.html#a3673ab32c48432a29dc92065b99da442",
"index_8d_8mts.html#a5acc8f8836500c5b371b7593c2b0a794",
"index_8d_8mts.html#a7f077cec4fc7277759342cac49a107b2",
"index_8d_8mts.html#a9e2e689c88e86863af840372d60061f6",
"index_8d_8mts.html#ac7c2893508cca54975283c47be8b03c6",
"index_8d_8mts.html#aece27dda8b73bf88f803ce7ed91d7f3d",
"namespaceGcodeSave.html#a98684962dd8748e1d7efa12ad7b89d5e",
"namespaceMeshLoad.html#afa6538893ea22a7dab057b2ee1b08ba5",
"namespacePolylineComponents.html#ade9ea597d26c732ed81b12a7c6cb6399"
];

var SYNCONMSG = 'click to disable panel synchronization';
var SYNCOFFMSG = 'click to enable panel synchronization';
var LISTOFALLMEMBERS = 'List of all members';