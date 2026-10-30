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
  [ "MeshLib C Docs", "index.html", [
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
      [ "C", "APICPage.html", [
        [ "Namespace List", "namespaces.html", [
          [ "Namespace List", "namespaces.html", "namespaces_dup" ],
          [ "Namespace Members", "namespacemembers.html", [
            [ "All", "namespacemembers.html", null ],
            [ "Functions", "namespacemembers_func.html", null ]
          ] ]
        ] ],
        [ "Class List", "annotated.html", [
          [ "Class List", "annotated.html", "annotated_dup" ],
          [ "Class Index", "classes.html", null ],
          [ "Class Members", "functions.html", [
            [ "All", "functions.html", null ],
            [ "Functions", "functions_func.html", null ],
            [ "Variables", "functions_vars.html", null ]
          ] ]
        ] ],
        [ "File List", "files.html", [
          [ "File List", "files.html", "files_dup" ],
          [ "File Members", "globals.html", [
            [ "All", "globals.html", "globals_dup" ],
            [ "Functions", "globals_func.html", "globals_func" ],
            [ "Typedefs", "globals_type.html", "globals_type" ],
            [ "Enumerations", "globals_enum.html", null ],
            [ "Enumerator", "globals_eval.html", "globals_eval" ],
            [ "Macros", "globals_defs.html", null ]
          ] ]
        ] ]
      ] ],
      [ "C#", "../Csharp/APICsharpPage.html", null ],
      [ "JavaScript", "../Js/APIJsPage.html", null ]
    ] ],
    [ "Third-Party Dependencies", "../ThirdParty.html", null ]
  ] ]
];

var NAVTREEINDEX =
[
"../APIPage.html",
"MRAABBTreeBase_8h.html#a834bce676aab69a69970b6efd9449660",
"MRAABBTreePoints_8h.html#a4bd5e977044062c54dc0aff24932fdb5",
"MRAddVisualPropertiesMixin_8h.html#a2e682cb2095e7f1d8c8bca36c89d0350",
"MRAddVisualPropertiesMixin_8h.html#aabf59fb47c000d1bf2797b777914d18c",
"MRAggregateFlow_8h.html#a098f4138eaecdd1badc193e654ff4cbd",
"MRAlphaShape_8h.html#a0f82f143388755d73ef889e8252cc621",
"MRAngleMeasurementObject_8h.html#aec70af77ef9c176eb68a612d462ddf3c",
"MRBestFitPolynomial_8h.html#a4a6a0415cbfc9c862e78b3d0c6025fb7",
"MRBezier_8h.html#a76ff148784ee6506f11815bd0141b9bb",
"MRBitSet_8h.html#a29c40ead36380f503728556eb1a34f91",
"MRBitSet_8h.html#a56784bbb3b7cbdae21166a60eacc69f5",
"MRBitSet_8h.html#a825d5f7c0566e8b88c93ec5b75a12325",
"MRBitSet_8h.html#aac5b2aa6017d6fd46013b2335926d26b",
"MRBitSet_8h.html#ad97f1d1bcc22268ea7e5315ff4be3ac1",
"MRBooleanOperation_8h.html#a435032b5295f67cd9f059e2ad3dcf514",
"MRBox_8h.html#a21aa89c7338963923b52784146160788",
"MRBox_8h.html#ab1986c3bf225c1168e6c25ce23a36202",
"MRBuffer_8h.html#a1e7516426204ab0f5f5b939fc861d740",
"MRBuffer_8h.html#a65f6744c2395a3e19b8a53083f17c4c4",
"MRBuffer_8h.html#aa42ffb897414c730c9c60b28b7d801d8",
"MRBuffer_8h.html#ae4d9b58cf6288004ed1622a616471b7c",
"MRChangeColoringActions_8h.html#a3221bb22fee2f6fe356f8ccf986f21ec",
"MRChangeMeshDataAction_8h.html#a7fbc5c9d5b94e8305a9e1796c0de49c5",
"MRChangePolylineAction_8h.html#a4b1a6a755da99974fc919f1251f3ac8a",
"MRChangeVoxelsAction_8h.html#a2c4d16aa162ffa7e72f043850f45d807",
"MRCircleObject_8h.html#a928e9811208aa62cafff4fa367ae5af5",
"MRColorMapAggregator_8h.html#a2381913cd87dfffbac2168a3c3d4ae73",
"MRConeApproximator_8h.html#ac9e4997105f041f93ecda3d2a5d55137",
"MRContour_8h.html#a87b2bcd87bfc86e8d5194b09fbf216b5",
"MRCtm_8h.html#aae60946ef42aa3fac75d710559222c39",
"MRCurve_8h.html#a724c840d9fc987e90087472fffc58b67",
"MRCylinderObject_8h.html#ad8eefc9f9b8d16840d664814696a54e8",
"MRDistanceMapParams_8h.html#a52bfbdc316c982fd1493d75f3ffce731",
"MRDistanceMeasurementObject_8h.html#a1da20de5b6102c7999b948328d71f6de",
"MRDraco_8h.html#a256c9ded4d70ddbc56bb5b90b04a0605",
"MREdgePathsBuilder_8h.html#a601766645a5086e9130322a2033136e8",
"MREdgePoint_8h.html#aaef33d91e988484794a2c4089b54d9a4",
"MRFaceDistance_8h.html#a4473db34fe81daa1d0c63e731d97231d",
"MRFeatureObject_8h.html#a592d824807b97001a50538cd6d3ad159",
"MRFeatures_8h.html#a4491f83a0a5b270d359efa53eeff3de5",
"MRFillContours2D_8h.html#a858df18b99bad479b69025cb19a7ae98",
"MRFixSelfIntersections_8h.html#aa39e080e957e0a9420444ad46992df69",
"MRGcodeProcessor_8h.html#aa461dd73c892c5f5d1f477d5b716293f",
"MRHistogram_8h.html#ab700ee425dbb4893ace142717d552f47",
"MRICP_8h.html#aa4ae785b7e54356191b607b697cb92dd",
"MRIRenderObject_8h.html#ac0ba0608b5769827f00978902fc98fb0aa3c6838dfa44ffccf572803427d1a208",
"MRId_8h.html#a9f0aaa519e178542c3a0847371b2f204",
"MRInSphere_8h.html#a901a73c4925c23cc210f505302b2a6fd",
"MRIteratorRange_8h.html#a1a218e31f08e888e5e5f6786456d5d18",
"MRLineObject_8h.html#a972e81eaa0a873750dd828675310ac35",
"MRLine_8h.html#aff0995a9d5a0b75f92a583d341675381",
"MRLocalTriangulations_8h.html#a56b7839364953224d6d33c7c24f670e8",
"MRMarchingCubes_8h.html#a4e58911735521672c55655ea458edc9b",
"MRMatrix2_8h.html#adec6f698b0b2cfa02670f0745bc0d8c9",
"MRMatrix3_8h.html#aa4f8c6c9ff62dc01780b7a49d60b2896",
"MRMatrix4_8h.html#a894cbfaa631da3d268988b292b0389bb",
"MRMeasurementObject_8h.html#ab6123bc7b7d61263e1daf5c194d6f0cc",
"MRMeshBuilderTypes_8h.html#a5acc83156b55c5260167dd6b74c22cc5",
"MRMeshComponents_8h.html#aaa522df6e9fb4d57f0ed25f8f8f1cec3",
"MRMeshDecimate_8h.html#ac4893bff78b3d8e1594a4226489c2c22",
"MRMeshFillHole_8h.html#a50820286f14963872bdf40d4dc58edbc",
"MRMeshIntersect_8h.html#a3855fad3d5ab7a2ff3156ba5f8cbf962",
"MRMeshLoad_8h.html#ab4daa37a7651b807d9239f32cb51dd74",
"MRMeshOrPoints_8h.html#a393236180a03fe9f89150e4b7f12740c",
"MRMeshRelax_8h.html#a6e99b9dc976adf62c71b4c73f864f577",
"MRMeshTexture_8h.html#ad70f5cb9591344de93a10f56756e6267",
"MRMeshTopology_8h.html#a714461026b32bec374835052319e7cf8",
"MRMeshTrimWithPlane_8h.html#a6f53e21dfb44d731aeb845463331c7a8",
"MRMoveMeshToVoxelMaxDeriv_8h.html#a44ea36fdfdfb6f48b0a458139979c1d8",
"MRMultiwayICP_8h.html#a27e6670d1f1605e610f5b168c8a23a37",
"MRNoDefInit_8h.html#a24721905379ca182adac54a30b831621",
"MRNoDefInit_8h.html#aef79a20ea034fde698ac651a3ecf9b26",
"MRObjectDistanceMap_8h.html#a3a737b8cec93b53f9f25d5975bdab7b4",
"MRObjectGcode_8h.html#a598211564b72603e54d2234d03694987",
"MRObjectLabel_8h.html#ac69433f1deba677be4d1bec15739a4e6",
"MRObjectLines_8h.html#a6697227d8587f44ae0be270bddefca30",
"MRObjectMeshHolder_8h.html#a527224a04e5cfd32cc97d3106f06084b",
"MRObjectMesh_8h.html#a679fd70e9fa63009348004b730bd21ad",
"MRObjectPointsHolder_8h.html#aa2a43a00097d8203861bd1b1431160dd",
"MRObjectSaveSettings_8h.html#a58eda2a187f11b452ae73daeaeaa1f19",
"MRObjectsAccess_8h.html#a28f07821b0d8d090962ad3301fcf739e",
"MROffset_8h.html#a21bcd972158f985dbc30271e58c8ede0",
"MROneMeshContours_8h.html#a68d53aafb5846ca68bc74861f06a4c34",
"MRPartMappingAdapters_8h.html#a3bdb6c944170040645dd133c81b3b713",
"MRPdf_8h.html#a68f4e107e013cd1e28c51dc9bfd37f4b",
"MRPlaneObject_8h.html#a72dfa6cf1ed6806b158cdc260a7f163d",
"MRPointCloudRelax_8h.html#a4ecde37b630c1fc5b09da1ddc5b62ed5",
"MRPointCloud_8h.html#ae7e0fdbd355cee541ac739744a107c8d",
"MRPointObject_8h.html#a73cc6f94e164afd5fc5f5b8f97e79f37",
"MRPointsProject_8h.html#a0bc26a8ba7a52f6175dcd03f4d10ce9e",
"MRPointsToMeshProjector_8h.html#a2e4444f339fffed788cdb3adef757b88",
"MRPolylineProject_8h.html#a2115c51fcaf0060d4b42013619f347dc",
"MRPolylineTopology_8h.html#ae87d056b9149b645b8a95b9e67779e73",
"MRPositionVertsSmoothly_8h.html#ad62569426cdd0ba98099fa48d5763890",
"MRPrecisePredicates3_8h.html#adacf276b37f56834d4694515154aab17",
"MRRadiusCompensation_8h.html#a04c7db6ddea378b5b02550641843a286",
"MRRaster_8h.html#ac9d7ee2ec5ed50509df0ad5e1f42073b",
"MRRenderModelParameters_8h.html#af767cba5cb6c4f300b26369c54906aea",
"MRSaveSettings_8h.html#ae17b3dd6073d365538139be2692c1128",
"MRSceneRoot_8h.html#abcdfd529bf0a1b15858aaab3790ce275",
"MRShrinkwrap_8h.html#abcf909c32ecbb022d2fffd472872b68a",
"MRSphere_8h.html#a31b6270a177b61403def1f9f23ce98c9",
"MRSurfacePath_8h.html#aa272ea660d4f95b948bd43fccfed1fa5",
"MRSymMatrix3_8h.html#a1478003adac2ddf985e99133b4429218",
"MRSymMatrix4_8h.html#a2e66c0c4a3c41bf41452dba305cdf17f",
"MRSymbolMesh_8h.html#a05d42535a26d839b223fc1f654c28e87",
"MRTiff_8h_source.html",
"MRToolPath_8h.html#af911bb527f8d46f096882b5c3f698eff",
"MRTriPoint_8h.html#a7696628960a46a2a24d9733dd223a958",
"MRUnionFind_8h.html#a818ec793fed9655117fd28582af5741e",
"MRUniteManyMeshes_8h.html#ab880c29b9e846c71bb3d6f92ced5e0d6",
"MRVector2_8h.html#a4bc17e67ba30fbffb895d78251c38f90",
"MRVector3_8h.html#a8160c7e738f1b2f1dacf55f15be4a2e8",
"MRVector4_8h.html#aa25fdeb84503c93f62a71772b35e2bb2",
"MRVector_8h.html#a0bd6432fbae81da078ec1874446a9f88",
"MRVector_8h.html#a1c6d03645e63ad5d62e8796c635ef8b4",
"MRVector_8h.html#a2d893487df970a11f74758efa517c18d",
"MRVector_8h.html#a3c32cc81b4daa93ec611f520fed13d54",
"MRVector_8h.html#a4d4eb6437b1298aa1667c2c23da76f07",
"MRVector_8h.html#a5c07d56beb6168a32b02b645bec7be8d",
"MRVector_8h.html#a6ae6df65a99fa132248b4d588f9cbdfc",
"MRVector_8h.html#a7a7ac1144c6236d2696b3eb13f2d3056",
"MRVector_8h.html#a8babb5fc5a41ed7926fd0dd25718bd87",
"MRVector_8h.html#a9cc5e1cb5604350a9a3764d0681e702a",
"MRVector_8h.html#aaba65ff9cef49a0f04d56463c14a1597",
"MRVector_8h.html#aba96983d2447d30cd5c713e2110bc1a5",
"MRVector_8h.html#ac8a90901769cfd0383185a8a116afcb3",
"MRVector_8h.html#ad766a8f19cd68da2271238519b4eed9b",
"MRVector_8h.html#ae731b3ee16a43bcbe77482938da1bf31",
"MRVector_8h.html#af7762cdf140ca1043726f739516859bc",
"MRVertDuplication_8h.html#aec6c12128e678357fc64d1c7d19d0fe4",
"MRVisualObject_8h.html#a4a32867b7b711b769b23aaa1953109dcade750b071f145f0307d783d9a6cc5cdf",
"MRVolumeInterpolation_8h.html#a683a84e4867fb951e644ae47c0174204",
"MRVoxelsSave_8h.html#a03ad557405a5944fc590903962227704",
"MRVoxelsVolume_8h.html#a77c9b90ffd9883461691dbfc362cde5e",
"MRWatershedGraph_8h.html#ac9bb5aa16f8b39076ee3b11b545149ed",
"____mrbind__c__details_8h.html#a248a1b35d4e44554dba66100e2d86cee",
"expected__MR__Mesh__std__string_8h.html#a8953a8411309e5ccd64c6d7bd2a09240",
"expected__MR__SimpleVolume__std__string_8h.html#a792de9cc9bc73c79b5f19850f7bfc55b",
"expected__MR__VoxelBitSet__std__string_8h.html#a53d8d39b83db27cb01bced41e3838c56",
"expected__std__vector__MR__FloatGrid__std__string_8h.html#a4ec779691ee31b5c3f1cf581a6a5624f",
"iostream_8h.html#aa83a29f28afc17e0b6e801ed2e566fdd",
"phmap__flat__hash__map__MR__ObjId__MR__ObjId__phmap__Hash__MR__ObjId__phmap__EqualTo__MR__ObjId__MR__Allocato____d257_8h.html#a8d6b0b66d0b1c80b4d652a22b3cf6ab5",
"phmap__flat__hash__map__MR__VertId__MR__FlowAggregator__Flows__phmap__Hash__MR__VertId__phmap__EqualTo__MR______720c_8h.html#a647e964a57a0102a31d4611e07505901",
"phmap__flat__hash__map__size__t__std__array__MR__VertId__3__phmap__Hash__size__t__phmap__EqualTo__size__t__MR__A____3131_8h.html#a9e11823ab67d46904b666dbb56d93e79",
"std__filesystem__path_8h.html#a4c7f400df398e3ee23fe69935c0e09e0",
"std__function__MR__Vector2i__from__const__MR__Vector2f__ref_8h.html#a27e8efe4f6712493ef56f3a4ec7c697b",
"std__function__bool__from__const__MR__MeshProjectionResult__ref_8h.html#ab43e8ecc99564d3c090fdc37f4f5f8d8",
"std__function__expected__void__std__string__from__const__std__string__ref__std__vector__char__rvalue__ref_8h.html#a29bc5b6d1e1d9be9d7783cfaa4b4f7f5",
"std__function__unsigned__char__from__const__MR__Vector3i__ref_8h.html#ae7bc03af04d4c4b328551cdcee857f27",
"std__function__void__from__MR__UndirectedEdgeId__const__MR__Vector3f__ref__float_8h.html#a294b93a984b905958dd346a0a2fe8b9d",
"std__optional__MR__Color_8h.html#a55e0a3cbc1a3c2e04a5e9184aa02628c",
"std__optional__MR__PolylineIntersectionResult2_8h.html#a374dbe045d216c794096020244cfaeff",
"std__optional__std__variant__MR__Sphere3f__MR__Features__Primitives__ConeSegment__MR__Features__Primitiv____9713_8h.html#a1c012b77ab9c4820b69ad9097367ac15",
"std__pair__MR__Vector3f__MR__Vector3f_8h.html#aea90781126d8c9dcf57f1e27153e139a",
"std__pair__const__MR__VertId__MR__VertId_8h.html#a93ca1e23dd44057e323d34415494e822",
"std__set__std__string_8h.html#a632832368342f721bc9505fa60f55da4",
"std__shared__ptr__MR__ChangeFacesColorMapAction_8h.html#ac00b68e74a90b9db8328212bd30b88b7",
"std__shared__ptr__MR__ChangeMeshTexturePerFaceAction_8h.html#a311897e7153bf20c00d512115ffba9ae",
"std__shared__ptr__MR__ChangeOnePointInPolylineAction_8h.html#a6ddfed1a7d8c55ba75f7a512639317cd",
"std__shared__ptr__MR__ChangeSceneObjectsOrder_8h.html#ae5d8748820ea629c213173146854cdfa",
"std__shared__ptr__MR__Cuda__PointsToMeshProjector_8h.html#a55251e28d9325718b61590490d08a395",
"std__shared__ptr__MR__IFastWindingNumberByParts_8h.html#ada6915b5242801f6a65bcd2f49fd874e",
"std__shared__ptr__MR__ObjectGcode_8h.html#aa1fd25189c946c66119e789a10a3105e",
"std__shared__ptr__MR__PartialChangeMeshAction_8h.html#a562a1612b41f252d112202a361a6ed23",
"std__shared__ptr__MR__RadiusMeasurementObject_8h.html#ad3f720fd0c7ba8d5af1cf6de6e623dc5",
"std__shared__ptr__const__void_8h.html",
"std__variant__MR__Polynomial__float__0__MR__Polynomial__float__1__MR__Polynomial__float__2__MR__Polynomial______4993_8h.html#acc9dfcbf49ba4d67f0d522c948ca9770",
"std__vector__MR__AABBTreeNode__MR__ObjTreeTraits__MR__Allocator__MR__AABBTreeNode__MR__ObjTreeTraits_8h.html#a7f14d8c60ddcc5a2debef7f9d0054a0d",
"std__vector__MR__Color_8h_source.html",
"std__vector__MR__EdgeSegment_8h.html#ab668b48cf13e88268a0e5939bea2e3e5",
"std__vector__MR__FeatureObjectSharedProperty_8h.html#a8b0b27adf5516c825fc6467b473191f1",
"std__vector__MR__Graph__EndVertices__MR__Allocator__MR__Graph__EndVertices_8h.html#a33f8573f95ca54ad2d49b0cb3bf16cf2",
"std__vector__MR__LineSegm3f_8h.html#a48364528c2de7112b2329f662a534ae5",
"std__vector__MR__MeshTriPoint_8h.html#a40c3faca0d9ffe5eef3bfb74bf392e85",
"std__vector__MR__ObjId__MR__Allocator__MR__ObjId_8h.html#a05bb87facf631d6cba16a0327e68ea7c",
"std__vector__MR__PlanarTriangulation__IntersectionInfo_8h.html#ab7220af1267df8af56332c6db2a4bc1c",
"std__vector__MR__SkyPatch_8h.html#a5595b26d80c8f6a215790f25cbecba02",
"std__vector__MR__VarEdgeTri__MR__Allocator__MR__VarEdgeTri_8h.html#a47dd8ec8df28bfb0a0a47bfa45c4525c",
"std__vector__MR__Vector3i_8h.html#a6cb223c4b7a19912165b8abb62d577fa",
"std__vector__MR__ViewportMask_8h.html#a49345a9f08f67fdcbe6e05bb0d6b8e09",
"std__vector__char__MR__Allocator__char_8h.html#af56952c3fbab5bbeb9f13c7e6e71bb66",
"std__vector__size__t_8h.html#a43a3f5df8c707f1cde35529368ba6218",
"std__vector__std__filesystem__path_8h.html#ab3d62e0cc3917738ff8778b7a78d56af",
"std__vector__std__shared__ptr__MR__HistoryAction_8h.html#ab434d58d10d5194a34378fd7b19ee422",
"std__vector__std__shared__ptr__MR__Object_8h.html#ab110a3e1ec3486914fbf4e1dd4b311ec",
"std__vector__std__vector__MR__OffsetContoursOrigins_8h.html#ab5fab9f03b74c77b42c9c56f1e333eae",
"structMR__AffineXf3f.html#a2f521516c72b15c8483099fb5e4c4ff4"
];

var SYNCONMSG = 'click to disable panel synchronization';
var SYNCOFFMSG = 'click to enable panel synchronization';
var LISTOFALLMEMBERS = 'List of all members';