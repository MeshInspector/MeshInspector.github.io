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
"__all_8d_8mts.html#a20c1908567899222ab759cb2b4270b2ba621b28a3e0b46a13758980467b9f7315",
"__all_8d_8mts.html#a33de5a42ac0e893db4e6f7e53f31ba03",
"__all_8d_8mts.html#a4610aeb302846d9e9a51a09f9c4d664a",
"__all_8d_8mts.html#a5bb81ed76e58da89acaf4cbbd42493fd",
"__all_8d_8mts.html#a74123cb9a0b4895c575bbe4b952a6fa9",
"__all_8d_8mts.html#a86d944de3f6d6a85a053bd8f3caca6d1",
"__all_8d_8mts.html#a99c89b5eb52c2315333b8d4256495584",
"__all_8d_8mts.html#aaceaafb1cfc059b7ee9cebefdcb73b1e",
"__all_8d_8mts.html#ac393961d1afb679b6e9943ae1ecc6abeaa11844f44df96808eb4e519ba04f088c",
"__all_8d_8mts.html#ad93ca53d0811825d92094e257eae4c22",
"__all_8d_8mts.html#aecbe5af5abab67d662fabc592d51de4d",
"__all_8d_8mts.html#afe1a1d5843c19c635ffe0c53120ae6b9",
"classAABBTreeTraits__MR__UndirectedEdgeTag__MR__Box2f.html#ae6570e9679cf8fc56283d63fc1ef3b99",
"classAddVisualProperties__MR__FeatureObject__MR__DimensionsVisualizePropertyType__diameter__MR__39aa344e4d984b5e84a0ec28f85ea294.html#ac691cbe6fff0209fedf8bba16ae9a53d",
"classAngleMeasurementObject.html#a22dea0aed8fcbe8b83858d99da971c0d",
"classBall3f.html",
"classBooleanPreCutResult.html#a1e13d7d917937e1e0bf0f3b66c75499f",
"classBox2f.html#a5d3df20b533ce2a9e602b5e876a5f311",
"classBox__unsigned__short.html#a90e93e63160a2f1a15f23b2177896d45",
"classBuffer__MR__RegionId__MR__RegionId.html#ab4b20de0a7d7f00d8d05224649896edf",
"classChangeIsoAction.html#ad682d9e1910d84c509cd8643becaea94",
"classChangeVisualizePropertyAction.html",
"classCombinedHistoryAction.html#a5275abcb53144a05a279093602ec526d",
"classConstChildren__Iterator.html#a198cd137f5ce02f04e3a809e71fd3ee7",
"classCylinderObject.html#a30529a7cf0ae75b3e25f1ce3094da58d",
"classDenseBox.html#ab54c2e478c3027932d181d7c358fcfb6",
"classDistanceMeasurementObject.html#a358ddd1b6f485d02980454834971f5bb",
"classEdgeBitSet.html#ad2283a68270ac22ce6e21245a6f40e87",
"classEdgePointPair.html#a04777668afcb632afba37485d75deb67",
"classFace2RegionMap.html#a7075df4352e1559b8702c5b4b1e9cb5f",
"classFaceMap.html#a30f85e1c4c61de2faa23b3a371a5349d",
"classFeatureObject.html#a94e2485f8cf47955b99ac3619f43f70e",
"classFeatures_1_1Primitives_1_1ConeSegment.html#aad36de977ce15e4ed413ae2b13afb843",
"classFillingSurface_1_1TPMS_1_1VolumeParams.html#ad953b6f898ea91f9f604484ee855c7a5",
"classGCommand.html#a8ffd61ad08960b8b0a1084f99e738820",
"classGraphVertBitSet.html#a5c69ccea32b67a355ce80b13d8a7f30b",
"classICPGroupPairs.html#ad22c377ec51172df6889caca22b8ef0b",
"classIntersectionPrecomputes2__double.html#ae827d1f4ef0099d49c689e035be61510",
"classLineObject.html#a2715419d5c994998d0754091f185d84f",
"classLocaleDomainId.html#ab81758bfb1d2792b08b0319983720c44",
"classMatrix3__unsigned__char.html#a85834d9f5c5d31145f607afdd13ba70f",
"classMatrix4i64.html#af68611d5d4126996a1ce80935425c1db",
"classMesh.html#a775fbd427d8aadbe22cf7a99abd919bb",
"classMeshBuilder_1_1VertTri.html#af1f57d47e2a2cbc2e235d2a6d4af8765",
"classMeshOnVoxelsT__MR__Mesh__MR__SimpleVolumeMinMax.html#a37e0946e03a4fbb4e251bf0d12c94516",
"classMeshSave_1_1CtmSaveOptions.html#a22a9b3a553125d6cd659cc974b7ec201",
"classMeshTopology.html#ae601833bde83b8e896b1de3fce4bfd56",
"classMultiwayICPSamplingParameters.html#a06983b70f863bd5b69271d8cd1a9f45c",
"classNoCtor__MR__PixelId.html",
"classNoDefInit__MR__VoxelId.html#af88a6280e2c0a0a89a5a975edc28f9a3",
"classObjId.html#a66bd4f07cb7e9298777ffce5f8ab69bd",
"classObjectDistanceMap.html#a2b9c2646f389054fbcf1b62b14be1bdc",
"classObjectGcode.html#ab5325e56b78f6165f595d2f438f85113",
"classObjectLines.html#a77f9957d19f92ca819dbbf0a84cdf61d",
"classObjectMesh.html#a5386bcd090d49779407f2651b67d6057",
"classObjectMeshHolder.html#a8b847905d12e9aa901afdb26cb165820",
"classObjectPointsHolder.html#a0edc92afd76b7fd0881e20fa3f38026c",
"classObjectVoxels.html#a6d9517dae4ca015837f4b6d3d1b4b048",
"classOutAttributesFillingSettings.html",
"classPlanarTriangulation_1_1IntersectionInfo.html#a64cf01907a9916efcdc8993b21015450",
"classPlyLoadParams.html#aa6eab01973d37e20e49140c433f3d3cc",
"classPointObject.html#a1a12a03395bdb1d8c2445f4e0d1c2f7d",
"classPointsLoad_1_1MultiScanLoadSettings.html#acf1ca44d44d22960d3839ff7f9bd4edc",
"classPolylineMaker.html#a0a8a8440b30eb971cd2ae7e34902085e",
"classPolynomial__float__4.html#a0c109900bdb690031fbd193882c29682",
"classRadiusMeasurementObject.html#a488e927b055428ed1bd0844ee2ed3467",
"classRegionBitSet.html#ad74708d678a60eaa9b9e3020be17a8c6",
"classSceneRootObject.html#a8d94593dfa024b2f65aa8dd686db8160",
"classSharpOffsetParameters.html#a623b04133b3fea73bffc859017800251",
"classSortIntersectionsData.html#aee5b00a2781d6bb03f5a65699c48974e",
"classSubdivideSettings.html#a5355455af0a42af20928cc6ec4aa7c5d",
"classSymMatrix3i64.html#a5be94e0e8b4b5e231fb2aac5aa798017",
"classTextureBitSet.html#a6ef4517415585493c054632a1021b69c",
"classTriCornerUVCoords.html#a68226ba2a1ccaab72d5505de14c533e0",
"classTriangulationHelpers_1_1TriangulatedFanData.html#a2e392dbd90b0c2aab2f0427a3b8a41af",
"classUndirEdgeColorMapAggregator.html#a9058dbf35db0b6a6e3fa30af4dfa0086",
"classUndirectedEdgeMap.html#aab40b938b3206f793387e597089f0956",
"classVdbVolume.html#a705cc0949f0a9af71e72852959ce0f29",
"classVector__MR__AABBTreeNode__MR__AABBTreeTraits__MR__UndirectedEdgeTag__MR__Box2f__MR__NodeId.html#a0cae33b5382dbee4d5da93f4a76ecca2",
"classVector__MR__AlphaShapeNei.html#a725dbdeb3a2e3824f94f72850ab34af9",
"classVector__MR__EdgeId__MR__FaceId.html",
"classVector__MR__GraphVertId__MR__GraphVertId.html#a1f36562c486dd82b51cf2279aa53c8eb",
"classVector__MR__Id__MR__SurfaceDistanceStartTag__MR__VertId.html#a863df6ca2faba654c56e64c32d7451e2",
"classVector__MR__Nesting__NestingResult__MR__ObjId.html#a4428231ebcfd1a703b7d8efd1b7b7a28",
"classVector__MR__OneMeshIntersection.html#a93b72f961b2851cc2c79d20093a282a1",
"classVector__MR__TextureId__MR__TextureId.html#ae50a9aeeaef3ba77b6200943e805533e",
"classVector__MR__Vector3i__MR__VertId.html#ae2331b78533e95df4cd7738f707b51fb",
"classVector__MR__VertId.html#a71e6724531af909cd477d41962cb91c3",
"classVector__MR__WatershedGraph__BasinInfo__MR__GraphVertId.html#a5a81250bf1f2109d1a077f15e5f5def1",
"classVector__int.html#acc743ddb9ec9fd2fd848a8f00af220ab",
"classVector__int__MR__UndirectedEdgeId.html#aea54c864dcf9cdd50ebdb356f5a89b9e",
"classVector__std__pair__MR__EdgeId__MR__EdgeId.html",
"classVert2RegionMap.html#a1f37843fd1ca0214f30c240b93532b97",
"classVertCoords2.html#a18495ba0a64b8559b582b11684ec26f3",
"classViewportProperty__MR__AffineXf3f.html#a907d08a191c29bdc9c0a42ca8dd09faf",
"classVolumeIndexer.html#ae624e178ad5c9720779456da54958176",
"classVoxelsLoad_1_1DicomVolume.html#ada649ede01626b811f48bc6713a4b1e2",
"classWeightedShell_1_1ParametersRegions.html#a9778c0054261f568973279fff62f6b97",
"classexpected__MR__LoadedObjectT__MR__ObjectMesh__std__string.html",
"classexpected__MR__UnionFind__MR__VertId__std__string.html#a18edac1f7ededd78fc85c08db9084c94",
"classexpected__std__vector__MR__FaceFace__std__string.html#a092a07db20f67edc2adefc5172c72851",
"classphmap_1_1phmap__flat__hash__map__MR__GraphEdgeId__MR__GraphEdgeId__phmap__Hash__MR__GraphEd715dd0c07d1a3acb8ee7f038605d70bd.html#a42689be86257b6217fec6be2e95b8b84",
"classphmap_1_1phmap__flat__hash__map__MR__ObjId__MR__ObjId__phmap__Hash__MR__ObjId__phmap__Equal60e0317097ba89aafc599cc625ee3a26.html#a525cdeb259676c6dd7a48827b58b1758",
"classphmap_1_1phmap__flat__hash__map__MR__UndirectedEdgeId__int__phmap__Hash__MR__UndirectedEdge1c615373b1fd490ba7a1b7a858e67b62.html#a1f641c2e0264b5ab3c21f6e220f2d577",
"classphmap_1_1phmap__flat__hash__map__MR__VoxelId__MR__VoxelId__phmap__Hash__MR__VoxelId__phmap_c667e4874bca93445a500a236563f614.html#a26323c7e973b41151b31a145997287ed",
"classstd__array__MR__PreciseVertCoords2__6.html",
"classstd__function__MR__Vector3f__from__const__MR__Vector3f__ref.html#ae73c09a9eae0947f029b4b3c4a5de477",
"classstd__function__float__from__const__char__ptr.html#a1c46f9431791c07858a2b4fb04acd250",
"classstd__function__void__from__const__std__filesystem__path__ref.html#a8bc358ff2ae5b7dbbb08a7d7069d59cb",
"classstd__optional__MR__PolylineIntersectionResult2.html#af586962bf60a6f81da36ed4b77fdbb59",
"classstd__pair__MR__FaceBitSet__int.html#a63bb99b06b4377a1fe304757d40b0735",
"classstd__pair__const__MR__VertId__float.html",
"classstd__shared__ptr__MR__ChangeColoringType.html#a387094126a44b263ef2d1ff23fc5d625",
"classstd__shared__ptr__MR__ChangeMeshUVCoordsAction.html#aea2ff5ae0af2fafa02413a81334ded32",
"classstd__shared__ptr__MR__ChangeScaleAction.html#a97365f58266fcff821540af387fc0209",
"classstd__shared__ptr__MR__HistoryAction.html#a3faa66a903cf17b07503ebc015f2fe97",
"classstd__shared__ptr__MR__ObjectGcode.html#ae921cd9b3f4d8196c0ff886febafd4cd",
"classstd__shared__ptr__MR__PointMeasurementObject.html#aa34209610e37bf605b9ede49b3f1b919",
"classstd__shared__ptr__const__void.html#a71ff5f1d233193117d15d873ffc1c24a",
"classstd__variant__std__monostate__MR__MeshTriPoint__MR__EdgePoint__MR__VertId.html#a5ba9060b8aa2cf96277a8b2d09d971c5",
"classstd__vector__MR__Box3f__MR__Allocator__MR__Box3f.html#a8a656891645ad912e30dea57e18d4ad5",
"classstd__vector__MR__EdgeId.html#a81a79e1bbfa4ca284e9f05b700bb6f39",
"classstd__vector__MR__FaceId__MR__Allocator__MR__FaceId.html#ad02dd5426a29510de17048b7f6dd513e",
"classstd__vector__MR__GraphEdgeId__MR__Allocator__MR__GraphEdgeId.html#a3f1a5c293cc166c307ac724bb4afd7cf",
"classstd__vector__MR__Image.html#aad5327d31b628d529599f64867e9fda9",
"classstd__vector__MR__MeshProjectionResult.html#ab9e35890261aa41a876164cba9989a64",
"classstd__vector__MR__ObjFaceId__MR__Allocator__MR__ObjFaceId.html#af2becf9a21e0705318b2192f4e7e2818",
"classstd__vector__MR__PointPair.html#af2c9989c903a3fa0d7da98d2b9040ff9",
"classstd__vector__MR__ThreeVertIds__MR__Allocator__MR__ThreeVertIds.html#a2b7634d806186e78d438f37cc66d1e01",
"classstd__vector__MR__Vector2f.html#a0ab51fc39010ce7954ca32d38dd3a882",
"classstd__vector__MR__Vector__std__vector__MR__ObjVertId__MR__Id__MR__ICPElemtTag__MR__Allocator6ea6f6397852d0b8412eeb592a5674c4.html#a5e0b12963e1f5dfd9f387aff66adc2b8",
"classstd__vector__MR__WeightedShell__ParametersRegions__Region.html#a86129f9fad7d5be949cfb3d6d39ef2dc",
"classstd__vector__int.html",
"classstd__vector__std__filesystem__path__MR__Allocator__std__filesystem__path.html",
"classstd__vector__std__shared__ptr__MR__ObjectDistanceMap.html#adcc6740f187353cb822b5d7a5b64d4c3",
"classstd__vector__std__vector__MR__EdgeId.html#ab488a57c7c624cd4e2356782e0566b73",
"classstd__vector__uint64__t__MR__Allocator__uint64__t.html#a724c7a81899953b21a6b8690b1cf46aa",
"index_8d_8mts.html#a02a912c9ba15110cb4d6f091dcd3f65c",
"index_8d_8mts.html#a26efb18312b1572cae9503bf8d313b6b",
"index_8d_8mts.html#a49fb27f516bae342e7b7eb9a96ca5dfc",
"index_8d_8mts.html#a6cb20bc44911957ccc29e32f90a9a3d9",
"index_8d_8mts.html#a90e127293958796ea3df84e07900dae4",
"index_8d_8mts.html#ab6291576fc355e6a108690b268ca6079",
"index_8d_8mts.html#adc8ccba9f9949a2d289c5da3c6b93d20",
"namespaceFeatures.html#a135befdb58351db265f427073b13b2b6",
"namespaceMeshComponents.html#a98899e5389248c0b65f090b59a042d9b",
"namespacePointsLoad.html#a15001fbcffbffcb9f55ab6b276ac7e8d",
"namespacemembers_func_p.html"
];

var SYNCONMSG = 'click to disable panel synchronization';
var SYNCOFFMSG = 'click to enable panel synchronization';
var LISTOFALLMEMBERS = 'List of all members';