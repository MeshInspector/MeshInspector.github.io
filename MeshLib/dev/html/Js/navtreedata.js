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
"classFeatures_1_1Traits_1_1Binary__MR__Features__Primitives__ConeSegment__MR__Features__Primitives__ConeSegment.html#a547670263b87329beddf53acf6535714",
"classFindOverlappingSettings.html#a8d1d9f58ec49bfca7980dd0508990a91",
"classGcodeProcessor__MoveAction.html#ac29d8f4b0e81794010890882b4ad0525",
"classGraphVertBitSet.html#aec8fd5b5534f08f8eab803e4ad984861",
"classIComputeToolDistance.html#a467ce0bf3cc0ca6aaeb13b59210f7477",
"classIsVisualizeMaskEnum__MR__AnyVisualizeMaskEnum.html#a795a7078cb0a097a212e6f26215b3382",
"classLineObject.html#a7571da0645f57bb3478bae220adb5ae4",
"classMapOrHashMap__MR__EdgeId__MR__EdgeId.html#ad350c826a5e0a93a77ad7a55cf842c84",
"classMatrix3d.html#aeb7edd3dbe88046ca9f47c1d817afc40",
"classMeasurementObject.html#a1b7c142ff22101344d39fb837cb59d71",
"classMesh.html#ac367cbf43afb5cb43a3b9f89d0cf93c4",
"classMeshComponents_1_1ExpandToComponentsParams.html",
"classMeshOnVoxelsT__const__MR__Mesh__MR__FunctionVolume.html#a4dbc8cd425fd4ca09e99b7fa28e370fa",
"classMeshSave_1_1NamedXfMesh.html#ad62dbb4cd46940e297651b918b808b2a",
"classMeshTriPoint.html#ab7e3ea6bb66ae874c50aad969ccf31a5",
"classNesting_1_1BoxNestingOptions.html#a592a6a1c1fbeb0fb7e7352a66b787b5f",
"classNoDefInit__MR__EdgeId.html#a84b7bd6f31f7dbe8852fa3ca9b9d7ccf",
"classNodeBitSet.html#a61e5d22a257f1430df25d1f82d2c66c2",
"classObjMap.html#a1b9e0e330fa7858f59d5c5d6c2394f46",
"classObjectDistanceMap.html#a6df30c174fb4fe19dd587b013616df90",
"classObjectLabel.html#a01d92feaefca380ea9b4fd92e9af2a7a",
"classObjectLines.html#add6831945c85dc178b17996ee2b680a3",
"classObjectMesh.html#a837cae3870e355b420f9aca6ba8bae13",
"classObjectMeshHolder.html#ac4ce096b1fa89ed2b7697fe9af0e8399",
"classObjectPointsHolder.html#a66472da64d22aa6eb9e6ce99fc8dd0d7",
"classObjectVoxels.html#a9b8ebfae410b95f1423e61920fbc7c59",
"classParabolad.html#a3d476304885a3a74dead321a3c871e43",
"classPlanarTriangulation_1_1TriangulationParameters.html#a478d17aa6bb763a702cd74cf5c6072ae",
"classPointCloud.html#a256ea63d269c92e0630e11fc04781f4a",
"classPointObject.html#a6d77aa1658f1ea0e2e6c870c11021941",
"classPointsSave_1_1CtmSavePointsOptions.html#a0f81ae41bbb9afc14c34e0bb8f384ba3",
"classPolylineSubdivideSettings.html",
"classPrecipitationSimulator__SimulationStep.html#a59f1b62148a143eb838dc5d870e06838",
"classRadiusMeasurementObject.html#aada97f5d6fe2b93cf236d308a190190b",
"classRelaxParams.html#a91b740803ddd6f97724c2b031c4421ac",
"classSearchPathSettings.html#ac588849223dacdbfcec957903737fcff",
"classShrinkwrapParameters.html#a5af370af7feaad8909950b5576f22798",
"classSphere3f.html#a819dd0fb548ddfa6ddc8cfe505dc6b94",
"classSymMatrix2b.html#aa05cc5d0117bd9335a8f4e26bd833d68",
"classSymMatrix4b.html#a5281eef84bc8a5007980b8737ae1509e",
"classTextureId.html#a539dcfd9bd7e82a8541008ddc72fb320",
"classTriTriDistanceParams__double.html#aa02372436eb4173c55b2b2138a5e4ab2",
"classTypedBitSet__MR__Id__MR__ICPElemtTag.html#a33322a5c91c37098191040acc0f6901d",
"classUndirectedEdgeBitSet.html#a3ba7b15f07ea06454ac0abda9ad35896",
"classUndirectedEdgeUndirectedEdge.html",
"classVector3__unsigned__char.html#a0df9da1038bc7e0e538c245f51b9b895",
"classVector__MR__AABBTreeNode__MR__AABBTreeTraits__MR__UndirectedEdgeTag__MR__Box3f__MR__NodeId.html#adc632519e9a8c57ddf7b5771614d7ef7",
"classVector__MR__Box3f__MR__NodeId.html#a3d834ce16b42c02913b4870e92a1ab51",
"classVector__MR__EdgeId__MR__VertId.html#a7feafbbfdb9fab0071eb37e11d4f2613",
"classVector__MR__Graph__EndVertices__MR__GraphEdgeId.html#ad94e912225be6cc2cd5c195b93e0b0af",
"classVector__MR__MeshOrPointsXf__MR__ObjId.html#a61d857d8c6c28d57c238fdd44d4b8ffe",
"classVector__MR__NodeId__MR__NodeId.html#af8da680a6638cb2b85c135b8e208072b",
"classVector__MR__QuadraticForm2f__MR__VertId.html#a4e29a2c2605982d5855bcc3b01dda6df",
"classVector__MR__VarEdgeTri.html#a8154bf3a329585ebef6a7cb286ee1d1f",
"classVector__MR__Vector__MR__VarEdgeTri.html#a9469a62279f0decc30de76b5952d1721",
"classVector__MR__VertId__MR__Id__MR__SurfaceDistanceStartTag.html#a0e39a0e0ab2e5a7a9152f4d7defc1c8a",
"classVector__char__MR__VertId.html#a5fa46bc433ed9b44a7440b073472583d",
"classVector__int__MR__GraphEdgeId.html#a59e73a1642cf75fb60b357da6c9a43b7",
"classVector__std__array__MR__Vector3f__3__MR__FaceId.html#a799d3a034ba4d4af5fc6bf82792bc757",
"classVector__std__vector__MR__EdgePoint__MR__VertId.html#ad6c83c4e3b879013f3181a43ab212388",
"classVertBitSet.html#a5b70610c4fe80dab11c69ee5d9ab49c8",
"classVertMap.html#a0a49f1915c17dde5dff45621f2545cf6",
"classViewportProperty__MR__XfBasedCache__MR__Box3f.html#a7f5374a3070f5889b4e0ceee083c19fd",
"classVoxelBitSet.html#a8fbce6be418a774f99dc03b3563d3e6c",
"classVoxelsVolumeAccessor__MR__FunctionVolume.html#afc0a61606c8c7434966265906cbc780e",
"classWholeEdgeMap.html#ac41c0bf3f8545ed5d56acda68eee3584",
"classexpected__MR__ObjectPoints__std__string.html",
"classexpected__MR__VertCoords__std__string.html#a029562ebdd3f9a8a4139b252af46115c",
"classexpected__std__vector__std__pair__MR__VertId__MR__VertId__std__string.html#a05a3cd41032f2ecbb39a2658ffdf53a2",
"classphmap_1_1phmap__flat__hash__map__MR__GraphVertId__MR__GraphVertId__phmap__Hash__MR__GraphVeef577e42bb91d69ee7c9ba67548e5be1.html#acb8e5f5e8e1bf9eb79a06aa5848dcfbd",
"classphmap_1_1phmap__flat__hash__map__MR__RegionId__MR__RegionId__phmap__Hash__MR__RegionId__phm34550766ac1bdc86ce860044f56dcbb6.html#aa436483eaf1a705056b0362e46d27e1b",
"classphmap_1_1phmap__flat__hash__map__MR__VertId__MR__FlowAggregator__Flows__phmap__Hash__MR__Ve7f72437fe5fd9267c755d7c28c280af8.html#a2b21849f0b0fa52d756dc915dcef6c11",
"classphmap_1_1phmap__flat__hash__map__size__t__size__t__phmap__Hash__size__t__phmap__EqualTo__si4172764828c24e4204190d401a6378de.html#aaa6cd80f4f0d94268de82f476980cdae",
"classstd__array__MR__WeightedVertexd__3.html",
"classstd__function__bool__from__const__MR__MeshIntersectionResult__ref.html#ae991c95ea41a4708dcee425164a4d5a0",
"classstd__function__void.html#a13eb42d9ad6fff84aa396612a499de6d",
"classstd__optional__MR__DimensionsVisualizePropertyType.html#a5292d6ce4d1585eee6b74e0655fa0be7",
"classstd__optional__MR__VertMap.html#ac73b928fcb9522374360f5f9d7353abd",
"classstd__pair__const__MR__FaceId__MR__FaceId.html#a93a3fec673dc0b488528d08a08adc55f",
"classstd__shared__ptr__MR__AddVisualProperties__MR__FeatureObject__MR__DimensionsVisualizeProper668f39795a2d30725df52f1da960e10b.html#ac2edca5c5e132e7f101bd7673e47a23e",
"classstd__shared__ptr__MR__ChangeMeshDataAction.html#a3294d1c81d2c657752735fb00f416752",
"classstd__shared__ptr__MR__ChangePointCloudAction.html#ad8f9d5fd7ab66a6256f2817bb70759be",
"classstd__shared__ptr__MR__ComputePointsToDistanceVolume.html#a9bf9ccef770a1471452f14b28504e780",
"classstd__shared__ptr__MR__Mesh.html#a1a25925785e5729ff8280c4261d9b3e2",
"classstd__shared__ptr__MR__OpenVdbFloatGrid.html#acd4a1c1da41926c84d64c420f5481f19",
"classstd__shared__ptr__MR__VisualObject.html#a717218a69b45623db9059683e867fc24",
"classstd__variant__MR__Polynomial__float__0__MR__Polynomial__float__1__MR__Polynomial__float__2_ae3b0a1d42de0eaddc403a8daeed3d7f.html#a20bd60c64b1cfd4b333120363a443abb",
"classstd__vector__MR__AffineXf3f__MR__Allocator__MR__AffineXf3f.html#a1699e15dc77c953d2ca215747995c64b",
"classstd__vector__MR__Color__MR__Allocator__MR__Color.html#aa3b2778d4fbcd2e74b468d7e88a67e3a",
"classstd__vector__MR__FaceBitSet__MR__Allocator__MR__FaceBitSet.html#a04223711e5b4ca74dc8b92c90e95fa47",
"classstd__vector__MR__GCommand.html#a7f6793ca528d87a05f04742d7f10a4eb",
"classstd__vector__MR__ICPGroupPairs__MR__Allocator__MR__ICPGroupPairs.html#ab5787ab8f777846763658751034d337d",
"classstd__vector__MR__MeshIntersectionResult.html#a83a4a8dc0f03a3adfe06a7bbbf05a2a3",
"classstd__vector__MR__NodeId.html#a85e3d50d0c5a6cfc0276de83b40d5e19",
"classstd__vector__MR__PlanarTriangulation__IntersectionInfo.html#abb48601b945f37fd187e79e04474df6c",
"classstd__vector__MR__SomeLocalTriangulations.html#a891304e14787c31cb2730eaab4c2d215",
"classstd__vector__MR__Vector2d.html#a53a2d563e051b28665a971d8efb7c687",
"classstd__vector__MR__Vector__MR__VarEdgeTri__MR__Allocator__MR__Vector__MR__VarEdgeTri.html#a29dd4fcf9bbe11fb44afbedc3ae39dab",
"classstd__vector__MR__WatershedGraph__BdInfo__MR__Allocator__MR__WatershedGraph__BdInfo.html#a43669ae81ccc3d282c4ba84136090fc6",
"classstd__vector__float.html#a5615ff3665b3287623a5ae10074823ae",
"classstd__vector__std__array__float__33__MR__Allocator__std__array__float__33.html#ae6eac40c5829699326a81466d4a274c4",
"classstd__vector__std__shared__ptr__MR__Mesh.html#ab31f3c69eab57c13fcb17887cc5d110a",
"classstd__vector__std__string.html#a9efa2e4b798bd7e04f820305e6cd7e1d",
"classstd__vector__std__vector__MR__Vector3f.html#aba5aa34b88f7f4bd490e48101dbf9534",
"globals_func_u.html",
"index_8d_8mts.html#a2199d23b72a1248440f94dd7096527fd",
"index_8d_8mts.html#a4496ba3f2f3a0c8bdeabab66396c2d86",
"index_8d_8mts.html#a679a3af4b9b8a4f594f874c05c5a3f58",
"index_8d_8mts.html#a89ac29c26ed889003c512e1730413c53",
"index_8d_8mts.html#aaf537e7353c343984727bdffdbdb48ca",
"index_8d_8mts.html#ad6ea7dca775c995e23ab1382b061abea",
"index_8d_8mts.html#afaf61e8cec028a650ec405f4b3dd203d",
"namespaceMeshComponents.html#a0d22c996bfc2750bfd2752bb6eba68df",
"namespaceObjectSave.html#abd2172d3cf77d37468bafcbaf3804e57",
"namespaceVoxelsSave.html#aea564bfba96f1e8512047a1d28fced66"
];

var SYNCONMSG = 'click to disable panel synchronization';
var SYNCOFFMSG = 'click to enable panel synchronization';
var LISTOFALLMEMBERS = 'List of all members';