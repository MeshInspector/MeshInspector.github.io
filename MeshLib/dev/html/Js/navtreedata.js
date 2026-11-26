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
"__all_8d_8mts.html#ac1c4f0ef6426b199a76f97876f37574e",
"__all_8d_8mts.html#ad8455e52df27d3cd73d0d396564d1807",
"__all_8d_8mts.html#aeb9d5c12436c065ddb8c4916264a2ee7",
"__all_8d_8mts.html#afcb3da09afb9a4fba1ca3582395d7bf7",
"classAABBTreePolyline3.html#a4c58a00f7573b7a85975f7d9272bc63d",
"classAddVisualProperties__MR__FeatureObject__MR__DimensionsVisualizePropertyType__diameter__MR__39aa344e4d984b5e84a0ec28f85ea294.html#aa22c26ba411580a65d40aff1634abb14",
"classAngleMeasurementObject.html#a06518d3c0384560a48d9a4f666046aaf",
"classBSplineSurfaceFitSettings.html#a3ef5f806ebd7d408cb7d46a983ee4b87",
"classBitSet.html#abb90111a9496f10a5fe62b44572cec0b",
"classBox1i64.html#af6e6396615a2b40d61680019b0df4c50",
"classBox3i64.html#a25d9218bffa5d0ebb455bab8535c9d90",
"classBuffer__MR__NodeId__MR__NodeId.html#ad36fe11dab6b4435f7014d3d24dd301b",
"classCameraPointsTriangulationSettings.html#af447c776d7fb3e438c470d21c97d694d",
"classChangePolylineAction.html#afb73518322eb99f64966a24756ec42e7",
"classCmpOld.html#a9efa29d6a72d035cd31e3fc426151df9",
"classConeObject.html#ab01564108c95a884718265ce5d9959c0",
"classCylinder3d.html#ac9e83d147cf3086213bd7de45dfae801",
"classDeloneFlipsCache.html#a38f015bff488c73645063a7f64425bd2",
"classDistanceMapSaveSettings.html#ac48b5071b007e72dd87e368ac8e30c92",
"classEdgeBitSet.html#a37fcf5a8d1f92ef65ea3f013cd189aa5",
"classEdgePathsBuilderT__MR__TrivialMetricToPenalty.html#a5f64f565a83489615b93cec34062e3e0",
"classEndMillTool.html#a107a734b3a5d2d30a58b15473a5d79a6",
"classFaceFace.html#ad01c3f789ae44d6fbed327b0b1acdced",
"classFeatureObject.html#a178db07bcb0eb8812bc6b18742968d91",
"classFeatures_1_1MeasureResult__Distance.html#ac0cc4061da5c512e6602c24c692e3fec",
"classFillingSurface_1_1CellularSurface_1_1Params.html#a009a194bcb2f4b188f82dd31191aeedb",
"classFlowOrigin.html#a96feca0f9cce2c8c6c4763614fc6921b",
"classGraphEdgeBitSet.html#ae42036207734d5a75479d0ec9aa1bf4c",
"classICP.html#a1f2682699e56c561c1988e98571e1837",
"classInSphereTester__double.html#a3cc76b89c680167dd717959ad0489380",
"classLine3d.html#ae9cacc369f979c6e816a680486697a24",
"classLoadedObjectT.html#abdb0e13bd25761b3c44ced72e13a1e45",
"classMatrix2i64.html#a6569dd4582c50e8e447084ddf76c3f40",
"classMatrix4f.html#af07c4de0bb68f60792e7eb0735412b75",
"classMesh.html#a3675ab4c639244ab42918f1784d5ca29",
"classMeshBuilder_1_1VertInfo.html#a0aea83de509f79043ff16908a33c3237",
"classMeshMeshConverter.html#a5e41ee07eb35a3292124283d080003c3",
"classMeshProjectionParameters.html#aa0394a22af34e9e067bc6643ce8afdcc",
"classMeshTopology.html#a846fc5c8323bd263923f85bf9b8bb081",
"classMultiRayMeshIntersectResult.html#a6e9e8caf620bb6f8ca8725968fad92ab",
"classNesting_1_1TetrisDensifyParams.html#ac25f1abdd9f7291bfd88fc928d56fa37",
"classNoDefInit__MR__TextureId.html#a90d03529740164f6ce763f5544772279",
"classObjBitSet.html#a88d047961e3db8b60c3a4d38541c509e",
"classObjectComparableWithReference__ComparisonReferenceValue.html#a6d4bb62b1787ae3c09ccb9ba4c01f72e",
"classObjectGcode.html#a55da0ac23a93743b89672c6641e7a32d",
"classObjectLines.html#a14ec4a8eb33161f13b2ef5bd5e6c550d",
"classObjectMesh.html#a0441fce439a42e031d8f6e6e661be184",
"classObjectMeshHolder.html#a424021e6a6e8582f8652e1e7ff83eaa8",
"classObjectPoints.html#ac1dd17fd94548821a95eed26850f5008",
"classObjectVoxels.html#a3e7d0c6bbd21afbb5912640fb9bcbcb9",
"classOneMeshContour.html#a4a636ccd183a7a241889435350ec0e6e",
"classPixelBitSet.html#ae494b7010738211729de2f9e6f210df9",
"classPlaneObject.html#aac684efba2ea8fa22752bba955370bcc",
"classPointMeasurementObject.html#aa62560d0adea20d89783b47d53b2d36a",
"classPointToPointAligningTransform.html#a7312a32300390875ebef353c1e185850",
"classPolyline3.html#a69c0d897bfb24dfbb80e70e802b271f3",
"classPolynomial__double__4.html#a02cd8738e6eda12f4c0c1d1abc9d0272",
"classQuaternionf.html#adc5288b42ab7cbab37d02978e4670390",
"classRegionBitSet.html#a268fc774c3d2d434094f2ec359612008",
"classSceneLoad_1_1Settings.html",
"classSetBitIteratorT__MR__RegionBitSet.html#a71d29c0188100dccb6332edd19bb60bb",
"classSliceInfo.html#ab7922b5795bddf42958f895357524eed",
"classSphereParams.html#a6c4b23ace38eff367e53eb92e5e1d943",
"classSymMatrix3d.html#af876cf2320e8457d6ddd35ce947b229e",
"classTextMeshAlignParams.html#a03e6b5a9355c3b2f4b6ce937e9bb2e7a",
"classTorus3f.html#ae7e4ec585703a6e355b3361ada42a40e",
"classTriangulationHelpers_1_1FanOptimizerQueueElement.html#a3de4a2ea8027f0d401187894812ad66f",
"classTypedBitSet__MR__Id__MR__SurfaceDistanceStartTag.html#a99e630d4856e3b462c12f02147f7b44e",
"classUndirectedEdgeId.html#a1b291fabc02306c4da333f32c94dc79e",
"classUniteMeshNormalizationParams.html#aa2093e8d6f70a2ce9f9ff704a2613e4f",
"classVector4d.html#a82d92cb6d56af6886078f6d73c17b567",
"classVector__MR__AffineXf3f__MR__ObjId.html#a7365a7ae48286a717a892163b093db18",
"classVector__MR__BoxedLeaf__MR__AABBTreeTraits__MR__UndirectedEdgeTag__MR__Box3f.html#ae3a66e9f0731f6706c1a08c29c4ab180",
"classVector__MR__GraphEdgeId__MR__GraphEdgeId.html#a1e9b6c6a6881fd1fecba07165395cba5",
"classVector__MR__Id__MR__SurfaceDistanceStartTag__MR__Id__MR__SurfaceDistanceStartTag.html#a48c1cf62b599d54053d2ae42ab91772c",
"classVector__MR__ModelPointsData__MR__ObjId.html#a06de3a0a09ec28224708161232b207be",
"classVector__MR__ObjId__MR__VoxelId.html#a7635d865f91f29a7eaa5508db270bf59",
"classVector__MR__QuadraticForm2f__MR__VertId.html#ad6ae0f4d3bf9e87236bd78540f4a808d",
"classVector__MR__Vector2d.html#a0e91f687f0aa62e096b44f3a68daf238",
"classVector__MR__Vector__MR__ICPGroupPairs__MR__Id__MR__ICPElemtTag__MR__Id__MR__ICPElemtTag.html#a0f82d893f3c2f58982e6011d5fa53dc8",
"classVector__MR__VertId.html#a8749a9238e50796c83df0ca07a28b1f1",
"classVector__MR__WatershedGraph__BasinInfo__MR__GraphVertId.html#a68e7fb647c825d87ce266f11464e79e3",
"classVector__float__MR__Id__MR__SurfaceDistanceStartTag.html#ad1f4c1fec104b0c412a93324a3e75af1",
"classVector__int__MR__RegionId.html#af7333662780928817c03eedf40b246a4",
"classVector__std__filesystem__path__MR__TextureId.html#a0d8dd6f4a80373f06d93a782e4af0068",
"classVector__unsigned__short__MR__VoxelId.html#a80ba248ca90b3c9dcf1622c92209afd1",
"classVertCoords.html#a3afcd349a840ebbcd0315f0674e1150e",
"classViewportId.html#a9675bb2eea36d66f9c038f5f4c98fab9",
"classVisualObject.html#ac4ff581956df40275735cb04cb3c4609",
"classVoxelTraits__MR__VoxelScalars.html",
"classWeightedShell_1_1ParametersBase.html#a93078c80952e692b23ab07b75d01e325",
"classexpected__MR__FloatGrid__std__string.html#a97f1b3470f7f017b201c09779f39f851",
"classexpected__MR__TeethMaskToDirectionVolumeConvertor__ProcessResult__std__string.html#abc5112e0eef7823e1c93a32d3010b74b",
"classexpected__std__shared__ptr__MR__ObjectVoxels__std__string.html#aee0e7255a6a6f319fd9859110eb8085e",
"classphmap_1_1phmap__flat__hash__map__MR__FaceId__MR__FaceId__phmap__Hash__MR__FaceId__phmap__Eq18d8fb05da6047ca80ed54cb7dfbca47.html",
"classphmap_1_1phmap__flat__hash__map__MR__NodeId__MR__NodeId__phmap__Hash__MR__NodeId__phmap__Eq3a6680d43111b5cb99f0943b8153fb0b.html#a1e489c90995bd2daeda8ada46d957f1b",
"classphmap_1_1phmap__flat__hash__map__MR__UndirectedEdgeId__MR__EdgeId__phmap__Hash__MR__Undirecb07aa701e827768993e5cf9db3255e50.html#aec2b6efe28678a5a4e0160d94e82230d",
"classphmap_1_1phmap__flat__hash__map__MR__VertId__float__phmap__Hash__MR__VertId__phmap__EqualToe68bc83b67770d0b168ecb262444e829.html#a7c1e06654d1a2fb137776e2555418876",
"classphmap_1_1phmap__flat__hash__map__std__filesystem__path__std__string__phmap__Hash__std__fileb3107494147869cde7fbe44f1c7760be.html#a30ca99a10d49a1465281062c53341a58",
"classstd__function__MR__Processing__from__const__MR__EdgePoint__ref__float__float__ref__float__ref.html#a2a7e60d20915da29ec81c01b44c99a98",
"classstd__function__expected__void__std__string__from__MR__VoxelScalars__rvalue__ref__const__MR__Vector3i__ref__int.html#aafd7146ba4c917dcbbd81950bb161ae0",
"classstd__function__void__from__MR__UndirectedEdgeId__float__ref__MR__Vector2f__ref.html#ad44360d90e4c325b0d1ac5641d93c950",
"classstd__optional__MR__MeshOrPoints.html#abe3e1a594a915445f5603e089f88f087",
"classstd__optional__std__string.html#aa6dfe115827c5746737c4f6b93c1bc6d",
"classstd__pair__const__MR__NodeId__MR__NodeId.html#ae063d640d62f3f5bc79e2d1523a3add5",
"classstd__shared__ptr__MR__AddVisualProperties__MR__FeatureObject__MR__DimensionsVisualizePropertyType__diameter.html#aecf3ab2fd290f44f3a18b01ab8891b5a",
"classstd__shared__ptr__MR__ChangeMeshFaceSelectionAction.html#a8712be236703460efecf73330ca1e1df",
"classstd__shared__ptr__MR__ChangePointPointSelectionAction.html#a17e5ae7b9a0baf3ee16ea5750b673771",
"classstd__shared__ptr__MR__CylinderObject.html#ac06f65e06da23b51d154ba4fccbf46af",
"classstd__shared__ptr__MR__Object.html#a8553723febcbbf5a4ba04927a935101c",
"classstd__shared__ptr__MR__PartialChangeMeshPointsAction.html",
"classstd__shared__ptr__const__MR__Object.html#a729d4d8f66b955ff6d2d3c04d2bf04ee",
"classstd__variant__MR__Sphere3f__MR__Features__Primitives__ConeSegment__MR__Features__Primitives__Plane.html#a767873e40d3c14cdbd7d793494f33da2",
"classstd__vector__MR__AlphaShapeNei__MR__Allocator__MR__AlphaShapeNei.html#ab27d707c88b12d0f539facd2657443e2",
"classstd__vector__MR__Dipole__MR__Allocator__MR__Dipole.html#a6d3e9a26ec462a3dcc0d77d3fa477944",
"classstd__vector__MR__FaceFace.html#ab8394797071d1a83552e199c38af3a5d",
"classstd__vector__MR__GcodeProcessor__Command.html#a73fa406af7004f988a2dcf6cf0448293",
"classstd__vector__MR__IOFilter.html#a9af5d8a7921d92f20ddc8b74b86980f0",
"classstd__vector__MR__MeshIntersectionResult.html#a40429687287fe9d0b9a2cef088cf0f52",
"classstd__vector__MR__NodeId.html#a3faf9215314a57d1363977eaf44aa692",
"classstd__vector__MR__PlanarTriangulation__IntersectionInfo.html#a7fd1b0abf6f1eee044cfedbf8b638cc9",
"classstd__vector__MR__SliceInfo.html#a35713e91541dfc4019f44a54e719078f",
"classstd__vector__MR__VdbVolume.html#a43a52c8547eb0ceb6cb23a0c145db022",
"classstd__vector__MR__Vector3i.html#aea36da50349bc79503025fdce9099e9d",
"classstd__vector__MR__VoxelId__MR__Allocator__MR__VoxelId.html#a1abbb120c55b3717e8f70213ecde2eb6",
"classstd__vector__double__MR__Allocator__double.html#aeb063415912bd61a3275fcc7c40bcec1",
"classstd__vector__std__array__MR__Vector3f__3__MR__Allocator__std__array__MR__Vector3f__3.html#ad4a58cd9bafe2309565ad76063493fed",
"classstd__vector__std__shared__ptr__MR__BasicUiRenderTask.html#a39bd7993deb0fd7de658cbcf35f03557",
"classstd__vector__std__shared__ptr__MR__VisualObject.html#a3075090139357fc8c956973207d3c982",
"classstd__vector__std__vector__MR__Vector2f.html#a32f2485f4a52e00fec064b6b2c729d65",
"globals.html",
"index_8d_8mts.html#a1948e41f15ddd773e72f2896ed589e73",
"index_8d_8mts.html#a3b4d6201d28a298808aa1ed9e6b89d33",
"index_8d_8mts.html#a5ebd3db358ea7b4fca16787daa254e44",
"index_8d_8mts.html#a827609f64a9524db92afbf37220be161",
"index_8d_8mts.html#aa4a2cfda38898c429b229a7f9eb3ffcd",
"index_8d_8mts.html#accf25e8ea664f629594bcd0776a9af40",
"index_8d_8mts.html#af223dce8ff3e2aa6261a2971d025f329",
"namespaceLinesLoad.html#a35f4c6e8e4e588d82a7f4061fa8606aa",
"namespaceMeshSave.html#a59dd2946eb9444ef397a0f282513c607",
"namespaceVoxelsLoad.html#a0ab823d104ecbc45fe81fa3846c5250f"
];

var SYNCONMSG = 'click to disable panel synchronization';
var SYNCOFFMSG = 'click to enable panel synchronization';
var LISTOFALLMEMBERS = 'List of all members';