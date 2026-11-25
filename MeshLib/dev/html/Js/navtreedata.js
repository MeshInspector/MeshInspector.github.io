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
"classTextureBitSet.html#ac0309069c72e773e0bdbdd2b1665ca93",
"classTriPointd.html#a2ddcbfbda6eba4c707e30844bb224634",
"classTrivialMetricToPenalty.html#a7eb669cb7bceeeffba8d86a0aa5220a5",
"classUndirectedEdge2RegionMap.html#ad25d6ea3ccf3ed89f5458ac85bb42289",
"classUndirectedEdgeScalars.html#a6ac7661caa35dc3042a83f24d1f6f2d2",
"classVector2f.html#a42aee0034c2349153fd57dd1f993befb",
"classVector__MR__AABBTreeNode__MR__AABBTreeTraits__MR__UndirectedEdgeTag__MR__Box3f__MR__NodeId.html#a0bc6fb86f4954f136ed18479aaca302d",
"classVector__MR__BallPivotCandidate.html#a9a2d4a40abb21eaec7f2e4920dd1a184",
"classVector__MR__EdgeId__MR__FaceId.html#af6352780ab69f34b097034da9ccdeedb",
"classVector__MR__Graph__EndVertices__MR__GraphEdgeId.html#a13d3f8c7156b224523dab8b761de8d44",
"classVector__MR__MeshBuilder__VertSpan__MR__FaceId.html#a88cea08903d9de6e3589e2ee7e01c407",
"classVector__MR__NodeId__MR__NodeId.html#a3e50c7d1865b7a088bcf52730c10b1dc",
"classVector__MR__PixelId__MR__PixelId.html#a7d25f9cebd5b3a5c457151338b433271",
"classVector__MR__ThreeVertIds.html#ad083170025c816a8bf19d0ed82df0124",
"classVector__MR__Vector__MR__ICPGroupPairs__MR__Id__MR__ICPElemtTag__MR__Id__MR__ICPElemtTag.html#af9a913405ad24cbad5d62b43686d7ea9",
"classVector__MR__VertId__MR__EdgeId.html#a52d4f5aa4ddebc5b3e873ff691969c34",
"classVector__MR__WatershedGraph__BdInfo__MR__GraphEdgeId.html#a8922f3125ec37e2330608d1ed56abb93",
"classVector__int__MR__FaceId.html#a99180472b6b9c561ff51af1f6f74a41d",
"classVector__int__MR__VertId.html#ab3759da695e4d1dd8c10eed3b52f1ff9",
"classVector__std__vector__MR__EdgePoint__MR__VertId.html",
"classVertBMap.html#ad6d19b8f1104c26fb0cc4c27b1f0b2d9",
"classVertCoordsDiff.html#abe7bff1483b2be67d4ffaf1372bbe2be",
"classViewportProperty__MR__Matrix3f.html#ac3bbff700a15dce01c77c2d1fb47b03f",
"classVoxelBitSet.html#a25ac35e738befc8811ea353fcd016d43",
"classVoxelsLoad_1_1RawParameters.html#a68b8890f1115f4cc34eaae97207a2170",
"classWholeEdgeMap.html#a24b230f2c9abba8c14481a8623ebbe25",
"classexpected__MR__Nesting__NestingResult__std__string.html#aa1147f641f4f96a904ce0a8e69df071e",
"classexpected__MR__Vector__MR__Nesting__NestingResult__MR__ObjId__std__string.html#ac9506dba0531fbaa28cd62a73e58dfd8",
"classexpected__std__vector__MR__PointsLoad__NamedCloud__std__string.html#ab4d72f86748f617fb3f79fe60cc8b1a0",
"classphmap_1_1phmap__flat__hash__map__MR__GraphVertId__MR__GraphVertId__phmap__Hash__MR__GraphVead8e35b658dd9793a2004e8a6e1b406d.html#a2b1907ef226e8758a4836f6d8ca1dde6",
"classphmap_1_1phmap__flat__hash__map__MR__PixelId__MR__PixelId__phmap__Hash__MR__PixelId__phmap_e2d0f257e8e70e671c4c1aaa990afab5.html#a85f8090a85f48b32a8fc096effd5f30a",
"classphmap_1_1phmap__flat__hash__map__MR__VertId__MR__FlowAggregator__Flows__phmap__Hash__MR__Ve3e4c11a889ca78c5d87818044367be39.html#a072ee06320bdb4caab2098722c533785",
"classphmap_1_1phmap__flat__hash__map__int__MR__Box3i__phmap__Hash__int32__t__phmap__EqualTo__int6f69d2ddd78d60cdc8504075cca6edbb.html#ad5acddba02c5b70ecb6e7442dfe934c7",
"classstd__array__MR__SimpleVolumeMinMax__3.html#ab8141306973e7f4057484566b4a8c310",
"classstd__function__bool__from__MR__FaceId.html#abf3783e907ab69ef2bac392b88451378",
"classstd__function__float__from__size__t__size__t.html#af858d6e6c7a3eb1a41ec86105da691a5",
"classstd__optional__MR__Box1f.html#ac5782cdd68cf381a0d4a3e7fd84066ee",
"classstd__optional__MR__Vector3f.html#adaebeb79780a3beeaa9fe5d1ac6c142a",
"classstd__pair__MR__VertId__MR__FaceId.html#a5e8526b0a8d9bc07569f874a88ebe6e5",
"classstd__pair__std__vector__MR__UndirectedEdgeBitSet__int.html#a688aad222948ed716fb3e84f48f52f44",
"classstd__shared__ptr__MR__ChangeLinesColorMapAction.html#ace4e096f367a382a41e05c80721d83e7",
"classstd__shared__ptr__MR__ChangeOnePointInCloudAction.html#a1f4a93390b2f42f3440743ba8a9d90c5",
"classstd__shared__ptr__MR__ChangeXfAction.html#aca99c349e23457682a7c028a0db64789",
"classstd__shared__ptr__MR__LineObject.html#a703e97470b71513f9251b7a11398c77b",
"classstd__shared__ptr__MR__ObjectPointsHolder.html#a2b689d877c7fcf86cb05c1fd98d0ff22",
"classstd__shared__ptr__MR__SceneRootObject.html#ac0d190cbd1967c2ab649c6e1f17b8dde",
"classstd__variant__MR__FaceMap__phmap__flat__hash__map__MR__FaceId__MR__FaceId__phmap__Hash__MR_b48ad3e3ea373164e028ef048542c23a.html#aab7e02029f0da2ddff1342580d3447d5",
"classstd__vector__MR__AABBTreeWideLeafTri__MR__Allocator__MR__AABBTreeWideLeafTri.html#a7fc2980607ec5e0e7702d11da43ca82d",
"classstd__vector__MR__Color.html#a11cfe03d30f1af9daf92de67c7d0a469",
"classstd__vector__MR__EdgeTri.html",
"classstd__vector__MR__FillHoleItem.html#a767bdb7466f32d9f7bad78060b6dfca9",
"classstd__vector__MR__Heap__float__MR__GraphVertId__std__greater__float__Element.html#a97eb1de8e51b3e0912ea156135a61cdf",
"classstd__vector__MR__MeshBuilder__MeshPiece.html#a88b6604900cd42a0829b01acdf8025b9",
"classstd__vector__MR__Nesting__BoxNestingCorner.html#a82414497ba3c13a998d567f2969dbf75",
"classstd__vector__MR__OutEdge.html#a33b16a48ae1239bcfce00f54ac67e800",
"classstd__vector__MR__RigidXf3d.html#a53b7819cbd97b286429e35f51ab31547",
"classstd__vector__MR__UnorientedTriangle.html#a50de072ac7ed3a4c53f8e93a38326b5e",
"classstd__vector__MR__Vector3i.html#a8647f5d463ec303f371117c32b8583df",
"classstd__vector__MR__VoxelBitSet.html#a9be6e87ea63885841a3e503ea5d2cacc",
"classstd__vector__double__MR__Allocator__double.html#a9ca232b8f12d969c3d6a31ab98203a9f",
"classstd__vector__std__array__MR__Vector3f__3__MR__Allocator__std__array__MR__Vector3f__3.html#a78222ac103dac62409f089a667f87e8f",
"classstd__vector__std__pair__size__t__size__t.html#ac2f396e0499af464b9d013a6a305bac3",
"classstd__vector__std__shared__ptr__MR__ObjectVoxels.html#a8318c5212ca57530149633ff871e6200",
"classstd__vector__std__vector__MR__Vector2d.html#a9dab0fd00925eaaa7a4d21670da7512a",
"functions_vars_u.html",
"index_8d_8mts.html#a16ccd676eda11e140b48caa657570a20",
"index_8d_8mts.html#a3a63189e68a844d409ac22cba98713e8",
"index_8d_8mts.html#a5e4517582e247ee0d59b5efb61b34950",
"index_8d_8mts.html#a8259c4ac77d089243ae8345d22b71560",
"index_8d_8mts.html#aa4a2cfda38898c429b229a7f9eb3ffcd",
"index_8d_8mts.html#acd47d6840aaaa956217bdee7ccc3965c",
"index_8d_8mts.html#af2c6edd4a152c73a94c62a059abb46b6",
"namespaceLinesLoad.html#a8e1ef7b77dc81c124ef8b8ef0d291df0",
"namespaceMeshSave.html#a6784df764977051b607b1b9322e28426",
"namespaceVoxelsLoad.html#a44b318750e9262b11ae0f2dea22a8ec6"
];

var SYNCONMSG = 'click to disable panel synchronization';
var SYNCOFFMSG = 'click to enable panel synchronization';
var LISTOFALLMEMBERS = 'List of all members';