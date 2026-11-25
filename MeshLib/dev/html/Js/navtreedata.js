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
"__all_8d_8mts.html#a20c1908567899222ab759cb2b4270b2ba6eeb5cc55c030bc8233b16b6f11de558",
"__all_8d_8mts.html#a33f47ec0f1bbcd5b0aba9a6776cb5439",
"__all_8d_8mts.html#a46203586623c8b6e0f0a4390cf3b1a1d",
"__all_8d_8mts.html#a5c08a32bfc8942e34f33006c4563cffe",
"__all_8d_8mts.html#a744289f46f180d00f410c5f09b97b774",
"__all_8d_8mts.html#a877d8f5b7643ee3ddd1d58f6f3d8efbb",
"__all_8d_8mts.html#a9a867ee6333d762e02027df55a0ceb33",
"__all_8d_8mts.html#aadd8a59529ffbfe86014e2cf03c23dd3",
"__all_8d_8mts.html#ac53703e13cb52e026f08e7bc250bee79",
"__all_8d_8mts.html#ada6717c6c21089b2501d59cc7175a486",
"__all_8d_8mts.html#aedbd292273d51febab1511c1f5f3293e",
"__all_8d_8mts.html#afee9c075924d48c8b5c38fd714c69efb",
"classAABBTreeWideLeafTri.html#aef1241ec2100e9a22b78b18653e39f13",
"classAddVisualProperties__MR__FeatureObject__MR__DimensionsVisualizePropertyType__diameter__MR__39aa344e4d984b5e84a0ec28f85ea294.html#adef55a2a4174296d9a8fc10ac5189241",
"classAngleMeasurementObject.html#a3b2227f4ef325d938b4210db4668d877",
"classBallPivotCandidate.html#a69608c6f2f2c2b94cbb3cd4be8798ced",
"classBooleanResult.html#a04f51ac0890099470f9e843705b03e37",
"classBox2f.html#acab0e80638bd7b895a9346a1e467400f",
"classBox__unsigned__short.html#aceeff542f31d3cd810dc9010a9e1ad7f",
"classBuffer__MR__TextureId__MR__TextureId.html#a52504f1dee17534c4b1fcf322fb991fe",
"classChangeLinesColorMapAction.html#a041ccb83eb292a3bcbabc455539a6284",
"classChangeXfAction.html#a47cd3ac3467f842f3c10f8721343aeb8",
"classCompensateRadiusParams.html#a643eb03622a0fb6e4f1d55e5b31af832",
"classConstantCuspParams.html#a310e5a5cc61a8a301d796e4db85ac3b5",
"classCylinderObject.html#a52314f704005a08af57c7196a36a2325",
"classDentalId.html#a656df846f828301d3a18cd6dd1444c95",
"classDistanceMeasurementObject.html#a58436468179c714c5d3e664e648beea3",
"classEdgeBitSet.html#af55f14d8714b07d58c8bb99640e34cfe",
"classEdgePointd.html#a4d64e3a04aecf0e11245429bbb6b1930",
"classFace2RegionMap.html#aa56fb811d94ee110a37c3fde46d62d79",
"classFaceMap.html#a7caaeedbbe368830eae355bccb88264a",
"classFeatureObject.html#a9eac3767b7ecdf1bb0fa5668cca9e682",
"classFeatures_1_1Primitives_1_1Plane.html#a06c7b06cb703b42a029b659da3285bb3",
"classFindInnerShellSettings.html#a09f7a416351d8e69003dfa0097b6bbc1",
"classGcodeProcessor.html#a7f6a3e1fdc1bdcd1680f14ba4e42ffec",
"classGraphVertBitSet.html#a7df47c5305f606946808192ac5745af2",
"classICPPairData.html#afd7e32f10953da4d40ec282c79fdd01e",
"classIntersectionPrecomputes__double.html",
"classLineObject.html#a3f18f97e860bf98c98ab74a507cfdbb2",
"classMakeBridgeResult.html#a9fda82dc3462d875ad12407eabb64723",
"classMatrix3__unsigned__char__QR.html#a8c58b08ceeb03fdccc3aa42ea4a0e58d",
"classMatrix__float.html#a6fd0439237fe44b71d6e3eefd173f019",
"classMesh.html#a852f4f094c80b08e80d8b21bce3ae6fa",
"classMeshBuilder_1_1VertexIdentifier.html#a81e376cbca237b17313e4874b0ab27cc",
"classMeshOnVoxelsT__MR__Mesh__MR__SimpleVolumeMinMax.html#aacda61d122751fd1e2fdf146af27b22c",
"classMeshSave_1_1CtmSaveOptions.html#a6c263145c35484f6b78026444582ab94",
"classMeshTopology.html#af56b167d1bbba2bdf1e005f338763278",
"classNarrowNeckSegmentPolicy.html",
"classNoCtor__MR__UndirectedEdgeId.html",
"classNoInitNodeId.html#a44858b9666c0f2fef952e6bbe8e842e7",
"classObjKindTraits__MR__FeaturesObjectKind__Circle.html#a3243d9db51e38746f070ae23ba3ad5a0",
"classObjectDistanceMap.html#a3f1853e586aa870ac13f31dfaedb5313",
"classObjectGcode.html#ac28a0a2b4681b928e8f84e79737f6a3e",
"classObjectLines.html#a936821dc4fd6687479fbecddbad3ed6b",
"classObjectMesh.html#a61f3c01290c3e688fd79a9edfad95bab",
"classObjectMeshHolder.html#a95cf6cd34d2d9b798bd221ebe6f354d5",
"classObjectPointsHolder.html#a1fe181547a7c660e1b1ea3c8e7d84e30",
"classObjectVoxels.html#a7b6de5baa3664f9b2105c35bd0419fe9",
"classOutlierParams.html#a82d24bee57e9cb8f243566d60bbc77e8",
"classPlanarTriangulation_1_1IntersectionInfo.html#adc4f52811ba3c6b04b901fc7774c1ce2",
"classPointAccumulator.html#a2e67a9d61596007e23973fc2a5d0f512",
"classPointObject.html#a26cf12ffaebd52aa56fbb332878fe369",
"classPointsLoad_1_1NamedCloud.html#a9361d5ad955f73e6a6ff3799b55a701a",
"classPolylineProjectionResult2.html#a931f52f53855fdba5c386e3d19f6e958",
"classPolynomial__float__5.html#aa122f276119901ff763ee5c3f7f351a0",
"classRadiusMeasurementObject.html#a65d7c74199982ef0c48ac053204d37b3",
"classRegionId.html#a191cf282e73bbfb81bfb0888854a32b1",
"classSceneRootObject.html#ac4c6698560cf5531d03079dea7095d59",
"classSharpOffsetParameters.html#ae3ed7acd6ffdba01d7bb78b485fa76d8",
"classSphere2d.html",
"classSubdivideSettings.html#a93da62447379ba3bf7eb3c96c548283e",
"classSymMatrix3i64.html#add66fe1ccfb782b334eb6aed71be0985",
"classTextureBitSet.html#a95704662cb40c56cfc278fef88bedbed",
"classTriMeshPart.html#a87dc8c973c60d81efc8d330c0481a901",
"classTrimWithPlaneParams.html#a89ab7aad5ba9560f7f5d7b147a27081d",
"classUndirectedEdge2RegionMap.html#abbd23add9b7cb73a7500070add712caf",
"classUndirectedEdgeScalars.html#a5879cee079657efe6ef3d4a998221616",
"classVector2d.html#af9a8b2d974368378e1574cd427a506ac",
"classVector__MR__AABBTreeNode__MR__AABBTreeTraits__MR__UndirectedEdgeTag__MR__Box2f__MR__NodeId.html#ae27a4cd56b06e101d9717d14e8186c78",
"classVector__MR__BallPivotCandidate.html#a67d850cf42fa1dcf0b285c636961b5cc",
"classVector__MR__EdgeId__MR__FaceId.html#aea57eb3efdddaf5bee56b6cb6888dbf2",
"classVector__MR__GraphVertId__MR__GraphVertId.html#af97979667702b8883fdfb4ec08b7480a",
"classVector__MR__MeshBuilder__VertSpan__MR__FaceId.html#a66a513ac9b61f1e1588ce387523dd4a7",
"classVector__MR__NodeId__MR__NodeId.html#a17e97f76d8f65409cc8ddf7163a69918",
"classVector__MR__PixelId__MR__PixelId.html#a507648472d6ae910ea0b40accc116ce1",
"classVector__MR__ThreeVertIds.html#aa6c27a26c35dddaa57310b9adbee0528",
"classVector__MR__Vector__MR__ICPGroupPairs__MR__Id__MR__ICPElemtTag__MR__Id__MR__ICPElemtTag.html#aeae4ced3034cf80ec803fb2430c892d6",
"classVector__MR__VertId__MR__EdgeId.html#a3cc7440884fcf1dc95de3a42484518c8",
"classVector__MR__WatershedGraph__BdInfo__MR__GraphEdgeId.html#a5f54bcff580e4e3ab9af2f43a57d8dab",
"classVector__int__MR__FaceId.html#a83b4ea7f3dc55116f3c79f6af158accf",
"classVector__int__MR__VertId.html#a95757511286848a46263d5e429d5133b",
"classVector__std__pair__MR__EdgeId__MR__EdgeId.html#acc1684d69621912c3c30242699c0d4f8",
"classVertBMap.html",
"classVertCoords2.html#af3cc002ea46a6318eb43dd56f89d0b9d",
"classViewportProperty__MR__Matrix3f.html#a5e8b4babcaedd01b208069073e83c45d",
"classVoxelBitSet.html#a1908e0bd032dad542681842af9dfdcb2",
"classVoxelsLoad_1_1RawParameters.html#a1c3ae92356bf8bef61b0970fbf59e314",
"classWholeEdgeBMap.html#a6ea3106aef76f96efc533e7b778d2f94",
"classexpected__MR__Nesting__NestingResult__std__string.html",
"classexpected__MR__Vector__MR__Nesting__NestingResult__MR__ObjId__std__string.html#a25111bba5bc660cdde0ea2b4de501dda",
"classexpected__std__vector__MR__PointsLoad__NamedCloud__std__string.html#a3c45f512595ae51cc81038f933bf1a37",
"classphmap_1_1phmap__flat__hash__map__MR__GraphVertId__MR__GraphVertId__phmap__Hash__MR__GraphVead8e35b658dd9793a2004e8a6e1b406d.html#a12dbce63efbd21ae2b2981a805bf1b4e",
"classphmap_1_1phmap__flat__hash__map__MR__PixelId__MR__PixelId__phmap__Hash__MR__PixelId__phmap_e2d0f257e8e70e671c4c1aaa990afab5.html#a2ced30d53f783f285e6b581f087f7d5c",
"classphmap_1_1phmap__flat__hash__map__MR__UndirectedEdgeId__int__phmap__Hash__MR__UndirectedEdgea27d323b048a685b16f679f6d794542d.html#ae3133c677cfae189d4a15a0def927638",
"classphmap_1_1phmap__flat__hash__map__int__MR__Box3i__phmap__Hash__int32__t__phmap__EqualTo__int6f69d2ddd78d60cdc8504075cca6edbb.html#ac343a1f304d6f8d4b56c07e8737dacaa",
"classstd__array__MR__SimpleVolumeMinMax__3.html",
"classstd__function__bool__from__MR__EdgeId__const__MR__Vector3f__ref.html#aedf1539b215537c2a1c26971676665fa",
"classstd__function__float__from__size__t__size__t.html#a0a618d943a9417c3c7d423c0b9a2b806",
"classstd__optional__MR__Box1f.html",
"classstd__optional__MR__Vector3f.html#a19e14dabf1e440315490c1fe685cabc9",
"classstd__pair__MR__Vector3f__MR__Vector3f.html#ae3e71a2d61465775382fdfbcdc669c78",
"classstd__pair__std__vector__MR__FaceBitSet__int.html#af6d34310c59bb28a6f90115880f84aa1",
"classstd__shared__ptr__MR__ChangeLinesColorMapAction.html#a7208c4f74bc7941effdc67b4b39ae539",
"classstd__shared__ptr__MR__ChangeOneNormalInCloudAction.html#ad1b35d7c02115cf676e144153a2d3e58",
"classstd__shared__ptr__MR__ChangeXfAction.html#a821feec4efd70de138d082cd306c96f7",
"classstd__shared__ptr__MR__LineObject.html#a1200ccc2a882d155b1f8b440894abf0b",
"classstd__shared__ptr__MR__ObjectPoints.html#aebb68aa1fabbfc0a3bf8c31de9b45c60",
"classstd__shared__ptr__MR__SceneRootObject.html#a7777c7b8a4deef6788d7343a7aa2214b",
"classstd__variant__MR__FaceMap__phmap__flat__hash__map__MR__FaceId__MR__FaceId__phmap__Hash__MR_b48ad3e3ea373164e028ef048542c23a.html#a3cc7d4e11d2bad46a8889e8532ef1f93",
"classstd__vector__MR__AABBTreeWideLeafTri__MR__Allocator__MR__AABBTreeWideLeafTri.html#a1c63ab00d675810ac93271e90193d136",
"classstd__vector__MR__CNCMachineSettings__RotationAxisName.html#acd7eb4fe00241118763b61834547c6c7",
"classstd__vector__MR__EdgeSegment.html#ac238bbde6523bd9c2bb494fdfa093151",
"classstd__vector__MR__FillHoleItem.html#a2343df1e25c0edb55f1be14692040400",
"classstd__vector__MR__Heap__float__MR__GraphVertId__std__greater__float__Element.html#a349b3c3626172f556a94165e05a31b0a",
"classstd__vector__MR__MeshBuilder__MeshPiece.html#a3ca5d8f99d29e1f6ed016ed9eab76a75",
"classstd__vector__MR__Nesting__BoxNestingCorner.html#a2f7de7cfbe2a74b2ae87cc19416299e6",
"classstd__vector__MR__OneMeshIntersection__MR__Allocator__MR__OneMeshIntersection.html#afc29a0d62293b23a94b5315fe8e8006c",
"classstd__vector__MR__RigidXf3d.html#a150072b4b2856a031ee5f26fa3fe9311",
"classstd__vector__MR__UnorientedTriangle.html#a10644128a4ef389a3635047a0e56d6ee",
"classstd__vector__MR__Vector3i.html#a53a13ba608314487bede6fcfe7674c4f",
"classstd__vector__MR__VoxelBitSet.html#a4d9dec7a112c590890ca80eb50b39f35",
"classstd__vector__double__MR__Allocator__double.html#a645730aba7625fcef161c06ae1325ab6",
"classstd__vector__std__array__MR__Vector3f__3__MR__Allocator__std__array__MR__Vector3f__3.html#a3a9b13cd39e40481a8dbd52964cfb7e2",
"classstd__vector__std__pair__size__t__size__t.html#a70806b22e39eb1d43d036aeddfb4026a",
"classstd__vector__std__shared__ptr__MR__ObjectVoxels.html#a24e51fcf3c49b12d933134861a80ba76",
"classstd__vector__std__vector__MR__Vector2d.html#a6b9f5f3290ddcf6139bde4679f68ff23",
"functions_vars_o.html",
"index_8d_8mts.html#a167ab6b783221908c9779cd833b84859",
"index_8d_8mts.html#a398c85c8019d438da38f70676c385f7c",
"index_8d_8mts.html#a5cff7f7f09b8c4cdb5182288df83330a",
"index_8d_8mts.html#a81ca193d4df667201d325e95ede01eff",
"index_8d_8mts.html#aa3ec4b9e2bda5206f4b83f1484a57806",
"index_8d_8mts.html#acca89eefe7b5956f01c4ccc191cbde39",
"index_8d_8mts.html#af1d5f6c1ff3495af8ca743f8dc7cc35c",
"namespaceLinesLoad.html#a3cf324c079ddd174cd5d5cbcc040f4f2",
"namespaceMeshSave.html#a5cf7bc6fd27c28a0928f8b98e6567ec7",
"namespaceVoxelsLoad.html#a12a9a294e8d697571c0e4c900ae1969a"
];

var SYNCONMSG = 'click to disable panel synchronization';
var SYNCOFFMSG = 'click to enable panel synchronization';
var LISTOFALLMEMBERS = 'List of all members';