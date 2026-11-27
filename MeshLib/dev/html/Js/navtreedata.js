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
"__all_8d_8mts.html#a33764f72513a7dbbc6fdafca764c68f8",
"__all_8d_8mts.html#a45b5cdf9d788bc97c05c889d0b4bc322",
"__all_8d_8mts.html#a5b2c54132bf67a6c507b33b8b7f8a406",
"__all_8d_8mts.html#a73f2e254e2bca2dc3eb7bdf829732cf9",
"__all_8d_8mts.html#a866abe9588caac4669c3b5ebf16b9721",
"__all_8d_8mts.html#a996f73e1a227829c8b3a05a6fc27f5e6",
"__all_8d_8mts.html#aac637eaf4da8390e1909b413fa93519ea4da202338f118b9e57137036fa2d3ca6",
"__all_8d_8mts.html#ac1c4f0ef6426b199a76f97876f37574e",
"__all_8d_8mts.html#ad835e0b8d567d5c51333e75a1c5e48db",
"__all_8d_8mts.html#aeb544177a64dedb92b29a4849f145e50",
"__all_8d_8mts.html#afc7c78df7b5ffa5623e4c75a21b304cc",
"classAABBTreePolyline3.html#a2a68766ff00da0e27174afc14c39ccec",
"classAddVisualProperties__MR__FeatureObject__MR__DimensionsVisualizePropertyType__diameter__MR__39aa344e4d984b5e84a0ec28f85ea294.html#a9c0cefc46cc9e71f3db39efa09c89de7",
"classAlphaShapeStats.html#af3687e70cc160cccf98389b3edb7d6e1",
"classBSplineSurface.html#af60ea927d2d52f2bfb5e89555fdbd5de",
"classBitSet.html#ab327088c4f996f3e979815bcb379ac73",
"classBox1i64.html#ad7b8254b399d0e7155a878b15dcdbc57",
"classBox3i64.html",
"classBuffer__MR__NodeId__MR__NodeId.html#a9a6bf0dedf03bc2214fbac0b817dc1d4",
"classCameraPointsTriangulationSettings.html#aa716ea8a511c688d49c0803de775b6f6",
"classChangePolylineAction.html#a79c36d8107094c33096aa6b787a754fc",
"classCloudPartMapping.html#ab8b3030e2e2464037d63b95cd2561c0d",
"classConeObject.html#aa9fcb87086f92023a985f1f27741d76d",
"classCylinder3d.html#aa9a8e9db23bdedba09cdc9da05be94cd",
"classDeloneFlipsCache.html",
"classDistanceMapSaveSettings.html#a5ccbd4bfb2e60b022f3180ec5830bac8",
"classEdgeBitSet.html#a1ad1dd82fc18c41675b2b059018c612b",
"classEdgePathsBuilderT__MR__TrivialMetricToPenalty.html",
"classEndMillCutter.html#a8394df1b51953e0bc43dfa13f0365a4b",
"classFaceFace.html#a482474681c37f87c697c736e5e6ab6f7",
"classFeatureObject.html#a0d144d6f82eca90f13d1328efa80b05f",
"classFeatures_1_1MeasureResult__Distance.html#a99c50506d918984714e168a57077acbb",
"classFillHoleParams.html#ac454888a72d2277838db1f4d626312ec",
"classFlowAggregator.html",
"classGraphEdgeBitSet.html#a8e94589eb2247d12a5d3b03ff102e1ea",
"classHistogram.html#ab5dfa81ea30ccbe5c9613b2a22e3e7b0",
"classInSphere.html#acfe6949b865583379cfcc7a61dbe5d63",
"classLine3Mesh__double.html#a59bee89be2fcf2b5bb2b6ebf9e514096",
"classLoadedMeshData.html#a0d3e979c48d55977b8a1c773ccdae422",
"classMatrix2f.html#a27348ef2b23e2177a3383d72c7de43e4",
"classMatrix4d.html#af0539f0de6ce6c38c7d6954b1b5fe4cb",
"classMesh.html#a1adc00fd4cfcd52b6e73c443fba23108",
"classMeshBuilder_1_1UniteCloseParams.html#acfdd38d1618dfd68d597df854c71d5f4",
"classMeshLoad_1_1NamedMesh.html#aae279db651ea4a1051211acf1120afd4",
"classMeshPoint.html#af3bd000425f711bb0eb7c1053e3fafe6",
"classMeshTopology.html#a459063b293cb94f85bdbacd321b9abba",
"classMovementBuildBodyParams.html#a06b8686b75c8a2736ed0734c008710fb",
"classNesting_1_1TetrisDensifyOptions.html#a03e7180fd0362238351f4a88e6b38d51",
"classNoDefInit__MR__PixelId.html#a59d51c81acf371e0dee614499ce57700",
"classObjBitSet.html#a2d6c555474b2a97098895b0c5b0b474c",
"classObject.html#af77ebfcc8aca6733be25b2079fd16a17",
"classObjectGcode.html#a1df89106bfa2acddb007fa3947462d72",
"classObjectLabel.html#acf6f4d7040dfc08b68ee4faed729389f",
"classObjectLinesHolder.html#abd11c5e35fd35dc2a516f2a5c07f768b",
"classObjectMeshHolder.html#a182bc869fe183eb050dfc7556c2336dc",
"classObjectPoints.html#a8dc11c3806af72765c56d4f3bba49136",
"classObjectVoxels.html#a1db5811511369f1d8d7128198620905d",
"classOffsetContoursParams.html#a21fc3f219d001b64c2f2da7bbf0e2bce",
"classPixelBitSet.html#a9017b8c2d9d8ec261fc9da46ef029d3f",
"classPlaneObject.html#a826ae14cd12050c7b95960f38733fe76",
"classPointMeasurementObject.html#a6665350b2ae3172ba4cc55bce296a66a",
"classPointPairs.html#a815631f93b68386f91d948c496a427a1",
"classPolyline2.html#ae997d359cbd4d0a14bda5b9aeca60f58",
"classPolynomialWrapper__float.html#adca1c5a150fa8be7c3ae256edd35ee33",
"classQuaterniond.html#a5b8c68cfde9faa1c594c1ba801279d72",
"classReduceTotalAngleParams.html#aa1ba996a6cb6f2e492ced9f9502d5efc",
"classSaveSettings.html#aac2974fcd9d1803766110b51ddb9a458",
"classSetBitIteratorT__MR__GraphVertBitSet.html#a9499652146f5dc8397d87f8872756afe",
"classSimpleVolumeMinMaxU16.html#ac8ce10776c447dfe6a962c4bb1c89d58",
"classSphereObject.html#ad5ae7cdfba9825dcf04536ccb36a497c",
"classSymMatrix3b.html#a6680956913fc1e5fc04d18f387691bfb",
"classSymbolMeshParams.html#a83989219e119e56eeb6825da2608d904",
"classToolPathParams.html#afa86e24cfd3a6d876e7766da3ff602ac",
"classTriangulation.html#a83c21387c312f692fa6f374c58ded726",
"classTypedBitSet__MR__Id__MR__SurfaceDistanceStartTag.html#a274da1854a06b202f454deddcc50fbdd",
"classUndirectedEdgeColors.html#a4076830d39739c2ae7c9d0f2bfd00296",
"classUniqueThreadSafeOwner__MR__AABBTreePoints.html#a1ec4859b727d3cbe4b13b3bc9c6ff7c4",
"classVector3i64.html#ab8493c79c07dab9034fe3479e4d5a335",
"classVector__MR__AABBTreeWideLeafTri.html#a961d30af5d497791f8b9e8184df19445",
"classVector__MR__BoxedLeaf__MR__AABBTreeTraits__MR__UndirectedEdgeTag__MR__Box3f.html#a1654a3cd69cb8e6076713b0bff16520f",
"classVector__MR__FanRecord__MR__VertId.html#a51f8f173ade90b54d9d44100f1343503",
"classVector__MR__Id__MR__ICPElemtTag__MR__Id__MR__ICPElemtTag.html#aaa8af30eb8a2c2c169b538f0332c1382",
"classVector__MR__MeshTexture__MR__TextureId.html#a3172641b680e2ac017169bf9d86e96f7",
"classVector__MR__ObjFaceId__MR__FaceId.html#ab942d4f3c4abbd0b5cefdf22be0b51b6",
"classVector__MR__QuadraticForm2f__MR__VertId.html#a027ae6e478462d2a5eb1f0835475e60f",
"classVector__MR__VarEdgeTri.html#a4c00531b5c5785a499851eb08ee8c42f",
"classVector__MR__Vector3i__MR__VertId.html#a5d685b526ed01cb46e33339f1e472bd3",
"classVector__MR__VertBitSet__MR__ObjId.html#ab60155bac54d7da83a5a457c75c57548",
"classVector__MR__VoxelId__MR__VoxelId.html#adca0044bacd7587cea9371e5646262ea",
"classVector__float__MR__Id__MR__SurfaceDistanceStartTag.html#a2301138db971fe18c1258568d5a21a43",
"classVector__int__MR__RegionId.html#a46487fd871356c82074baf1a73b698cf",
"classVector__std__array__float__33__MR__VertId.html#a584c85d781af4829b108663c00917583",
"classVector__std__vector__MR__ObjVertId__MR__Id__MR__ICPElemtTag.html#ac1ccc4678b6a81e8468a6fd756db715c",
"classVertColors.html#a9072d31711cbe1abb8f03edb60485600",
"classVertScalars.html#a8a59b05638397993ec1c7c1a030a03a9",
"classVisualObject.html#a7a3e683f9bf6b4b35d663738f841a811",
"classVoxelScalars.html#a7ae68536aa99fdea2cb7ad5ee3ce5188",
"classWatershedGraph__BdInfo.html#a53056b0edc9510a13224980e7aec7781",
"classexpected__MR__DistanceMap__std__string.html#a02f41155b6679b57ed64c43ee487a026",
"classexpected__MR__SimpleBinaryVolume__std__string.html#a3fffe660335ef940cb2cb1cf42e861d5",
"classexpected__size__t__std__string.html#a579d5f10c21591f26cb926ad6e35d263",
"classphmap_1_1phmap__flat__hash__map__MR__EdgeId__MR__EdgeId__phmap__Hash__MR__EdgeId__phmap__Eqb8942045c9aeb4dec9f640db605dd84e.html",
"classphmap_1_1phmap__flat__hash__map__MR__Id__MR__SurfaceDistanceStartTag__MR__Id__MR__SurfaceDi23e6e1de60df0819f0596cc14118b4f6.html#abadb1dd16d1559e910dc6a7e94333da5",
"classphmap_1_1phmap__flat__hash__map__MR__TextureId__MR__TextureId__phmap__Hash__MR__TextureId__f0db361a5d53e3a5f01ff76228b5c0d6.html#ac6de9dbfb16c5e332cd2de1d7f381179",
"classphmap_1_1phmap__flat__hash__map__MR__VertId__MR__VertPathInfo__phmap__Hash__MR__VertId__phm3bf00127e8abd2173ec79d43fe671d0c.html#ae0e5f1165c23a7e09e8a186b13418b8d",
"classphmap_1_1phmap__flat__hash__map__size__t__std__array__MR__VertId__3__phmap__Hash__size__t__f71b1c26fe21c40b5747aff57c7e7f51.html#a4c16b5201bcb8d7820cb09038134a742",
"classstd__function__MR__FunctionVolume__from__const__MR__Mesh__ref__const__MR__WeightedShell__DistanceVolumeCreationParams__ref.html#a62df583899fc981d9b159407d3f46846",
"classstd__function__const__MR__FaceBitSet__ptr__from__size__t.html#ac06c7470cb33c56bc782581f15767e7d",
"classstd__function__void__from__MR__ObjId__MR__MeshOrPoints__ProjectionResult.html",
"classstd__optional__MR__HoleFillPlan.html#aca8d236d70cf369a1ea239bb00ac3e3f",
"classstd__optional__MR__VertCoords2.html#a7cc17b9e782d7196edde74f3bbc9dc2f",
"classstd__pair__const__MR__EdgeId__MR__EdgeId.html#a3ed13a0a748260ebbf125bb67e74de60",
"classstd__shared__ptr__MR__AddVisualProperties__MR__FeatureObject__MR__DimensionsVisualizeProper668f39795a2d30725df52f1da960e10b.html",
"classstd__shared__ptr__MR__ChangeMeshCreasesAction.html#ababe8cc77a71e23f3a745a7a6f1e3d2f",
"classstd__shared__ptr__MR__ChangePointCloudAction.html#a3773e7dda1f8dae46f668ffca86648f4",
"classstd__shared__ptr__MR__CombinedHistoryAction.html#ae86cb3203f2266737aa4ea28967f32dd",
"classstd__shared__ptr__MR__MeasurementObject.html#a5a582a51341b109ed97d3c6144ebf931",
"classstd__shared__ptr__MR__OpenVdbFloatGrid.html#a284f10f875a95e7e3979502f1e5e5a54",
"classstd__shared__ptr__MR__VersatileChangeMeshPointsAction.html#ad917c8a0e705f62287584a3927c768b4",
"classstd__variant__MR__Polynomial__double__0__MR__Polynomial__double__1__MR__Polynomial__double_355f2085f539f0809e9ed719c9982a1e.html#ad531f1d06a73e8f05ee8fe881b5fd36a",
"classstd__vector__MR__AffineXf3f.html#ad77b45f20bc09a822982fefea5294b61",
"classstd__vector__MR__Color__MR__Allocator__MR__Color.html#a3f4bcf580e044d5916a127f257ab2248",
"classstd__vector__MR__FaceBitSet.html#ab8b39fa436c1d83e229cd1dd4fe370cf",
"classstd__vector__MR__FlowOrigin.html#a07a962b80ef417e32b1425824ef5bcde",
"classstd__vector__MR__ICPGroupPair.html#a4347aa8935ffcf0c186a455454bef210",
"classstd__vector__MR__MeshBuilder__VertDuplication.html#a126a6008a8051555cfb96570794e5c0d",
"classstd__vector__MR__Nesting__MeshXf__MR__Allocator__MR__Nesting__MeshXf.html#a059d8bf0360a6e07604eaaf308a535b8",
"classstd__vector__MR__OutEdge.html#ac689dddcd47ab2dfc4784b5789e3b668",
"classstd__vector__MR__RigidXf3d.html",
"classstd__vector__MR__UndirectedEdgeUndirectedEdge.html#afdbaaa8cc0bbe2539731fadb592c2d6c",
"classstd__vector__MR__Vector3f__MR__Allocator__MR__Vector3f.html#a38e7c394b7041ea07efada8ff2ff7e59",
"classstd__vector__MR__VertId__MR__Allocator__MR__VertId.html#af52eb8a2aaad9be0191559fe49c6e85d",
"classstd__vector__double.html#a12d832b13552c9110c98a3c57318e76a",
"classstd__vector__std__array__MR__Vector3f__3.html#a1d4b603e896747bb48169b09c27ef7b1",
"classstd__vector__std__pair__double__int.html#a0b850aa6fa01db8b180b8234074bb271",
"classstd__vector__std__shared__ptr__MR__ObjectPointsHolder.html",
"classstd__vector__std__vector__MR__OffsetContoursOrigins.html#af29afd5ae2da56c891f945420c00a4a9",
"functions_g.html",
"index_8d_8mts.html#a1312d8a4904454ba5b382ba5b1753b18",
"index_8d_8mts.html#a3438547b16b34de840b67b636747a4b4",
"index_8d_8mts.html#a57bd1cbb402f5f90229351a22cb8b7d8",
"index_8d_8mts.html#a7db8becc3af1a3846e8000239ece3eca",
"index_8d_8mts.html#a9cc225557413ff3b93c799c7eb3f59e0",
"index_8d_8mts.html#ac5f67c41086d512bc76800181627dd88",
"index_8d_8mts.html#aeace16248bc9253232b23e2fac237ff7",
"namespaceGcodeLoad.html",
"namespaceMeshLoad.html#ab435e2d7db551d278368a679b9219d10",
"namespacePointsSave.html#ada101c2dca809352965c73a48ad37b02"
];

var SYNCONMSG = 'click to disable panel synchronization';
var SYNCOFFMSG = 'click to enable panel synchronization';
var LISTOFALLMEMBERS = 'List of all members';