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
"MRMeshOrPoints_8h.html#a48f0d41fd24a41a90de9eaac622e65ed",
"MRMeshRelax_8h.html#a72b7f0501ec1a954875ed73957cba289",
"MRMeshTexture_8h.html#ae244f3be74ba004e1f67bf7bfcb040c5",
"MRMeshTopology_8h.html#a7453f57ba6bc398dbf30bca44ab58894",
"MRMeshTrimWithPlane_8h.html#a80866442297c3adedbe4bcf80ae3d34e",
"MRMoveMeshToVoxelMaxDeriv_8h.html#a49d1be899adb4d2c41478fdcbb3450da",
"MRMultiwayICP_8h.html#a2e5ed336e49452ef2b16fa348af64c40",
"MRNoDefInit_8h.html#a28870f172727803539a28779fe637451",
"MRNoDefInit_8h.html#af08897d27e5e78376cdf174476dea0bd",
"MRObjectDistanceMap_8h.html#a3e6ccf4779ee84e0ecf426f88e19afa9",
"MRObjectGcode_8h.html#a5fe45c4c511e4aaec98d58ae30ed036c",
"MRObjectLabel_8h.html#acc98d489c5e711e1a9ccf3bc07f29981",
"MRObjectLines_8h.html#a6d1910eb49c815889db6a73e16c0e308",
"MRObjectMeshHolder_8h.html#a58d0accd60fd8eea9b3aa04ad85fe1d2",
"MRObjectMesh_8h.html#a7175061bd873ebc84cc10855117f03ab",
"MRObjectPointsHolder_8h.html#aa79b6b48e5ea4fa00bf5f547ff0b8b65",
"MRObjectSaveSettings_8h.html#a78782b40ed916bab64dc0cc3e9b687a9",
"MRObjectsAccess_8h.html#a3fecee7f3a8b1b049edd2983357e4132",
"MROffset_8h.html#a2ae2e1abc2c29e2961be34197c407011",
"MROneMeshContours_8h.html#aa6cb0395f7309c44d45bc505f5749839",
"MRPartMapping_8h.html#a9d562e04b7c3350fc4a331806ff4f065",
"MRPdf_8h.html#a9e15b14c392892350b3a335b5d0df33b",
"MRPlaneObject_8h.html#a9dc9bc40287f46fdb7fc84a1307cb31f",
"MRPointCloudRelax_8h.html#adcbc92c7d8f78695c65a4d453ade4778",
"MRPointMeasurementObject_8h.html#a33bfde4b414c8bb6bb6322fcbda3b727",
"MRPointObject_8h.html#ab74924849ea074a018e73507d6316ee7",
"MRPointsProject_8h.html#a8a3791a77ea8f46477ee87a87d96445d",
"MRPolyline2Collide_8h.html",
"MRPolylineProject_8h.html#a71eba40585954ba60896743affe22490",
"MRPolylineTrimWithPlane_8h.html#abd843340f3f6d58f980567108f31ad9e",
"MRPositionedText_8h.html#af6fc30ef508caae69ab88b0f78bb504d",
"MRProgressReadWrite_8h.html#a38388850c3793998345387f1e93f9832",
"MRRadiusMeasurementObject_8h.html#a071bdee29f5cc11ac231de252a225329",
"MRRebuildMesh_8h.html#a38feda7f898877345c529b642dff9e00",
"MRRigidScaleXf3_8h.html#af0de2c604a5f11052b94cad658f49749",
"MRScanHelpers_8h.html#a53538c38bc7d412d779cd6950f2ebf73",
"MRSceneSettings_8h.html#a81fb989e8e1e7db26369df3d8d294961",
"MRSolarRadiation_8h.html#a91af284ff3c43accb2239cb0f638d2b3",
"MRSphere_8h.html#aa5739f817213bdde8ed914a8dd6be8ae",
"MRSweptVolume_8h.html#a20f8904cef265ceca96af62d9d71ab91",
"MRSymMatrix3_8h.html#a3a83420782085fdab1dbfcbbef1cf60e",
"MRSymMatrix4_8h.html#a4b532ef67aba81fe34dc7e2a287c81bf",
"MRSystemPath_8h.html#a3a17e15e4b66a301f71cac93df990e0c",
"MRToolPath_8h.html#a27f979457f629aaa7f7a0492ccfea363",
"MRTriDist_8h.html#a3c705680e00eed218908974b05e31420",
"MRTriangleIntersection_8h.html#a97ae47dc38e28ead84d5f81460fc95bd",
"MRUnionFind_8h.html#adb058e966288167dd554d90e9045f22b",
"MRVDBConversions_8h.html#a11dd9015320ccb0704a8d6fc757f97cb",
"MRVector2_8h.html#a8fd87920eba8a23e41c847402e6e669b",
"MRVector3_8h.html#aaa409fdc9d61d8ff13673d7189b00d5f",
"MRVector4_8h.html#add7c8907576dca3a6f719317ad14c74a",
"MRVector_8h.html#a0f1e422801f7240997f7ba98af10b2a9",
"MRVector_8h.html#a2130a839a552e18d41399f72ca569209",
"MRVector_8h.html#a313c5e0835e11477c949d6ef58a32a1a",
"MRVector_8h.html#a418e71c7b919f4c65d9bacfb31ccc558",
"MRVector_8h.html#a527e13018fa54c216d35e019dbf4aa1e",
"MRVector_8h.html#a614e7aefbaae0ad0d1845e81ef0eef27",
"MRVector_8h.html#a6fd5b842c2a255e89b26acf594485dc1",
"MRVector_8h.html#a7fd71b82049609878f7974c664bdd0ae",
"MRVector_8h.html#a92ff58db23dee745c0a28d397212eebf",
"MRVector_8h.html#aa375af77c40ece7ab120b50b1014ada5",
"MRVector_8h.html#ab3823a585ffc1a9932d03f183335e9cb",
"MRVector_8h.html#ac007a495ea6f9518d614da4c5e7db425",
"MRVector_8h.html#ad018165a7d1ba1cf65ccde01bf32928f",
"MRVector_8h.html#ae062d93614f8dc5779452830833f88a6",
"MRVector_8h.html#af07f45411b8771eaed1d2da2c976ccca",
"MRVector_8h.html#aff7cb1f3e33ba798342293854eade95c",
"MRViewportProperty_8h.html#aafc1f6c4df3bbba9e306f101e487f1bd",
"MRVisualObject_8h.html#ac832db5a9851bd485529ff93e7c87fab",
"MRVoxelsConversionsByParts_8h.html#a154b6e12b1351c75ee9d5c88d013a6a4",
"MRVoxelsVolume_8h.html#a2490289155564f22421d7062efd44bfe",
"MRVoxelsVolume_8h.html#aeb4bb6af02ed89ee0c282c990514a147",
"MRWeightedPointsShell_8h_source.html",
"expected__MR__FloatGrid__std__string_8h.html#a8d4696875052ef017b54a8aea203fb18",
"expected__MR__Polyline3__std__string_8h.html#ad321099ddbb28cad471cb7821033cdb4",
"expected__MR__Vector__MR__Nesting__NestingResult__MR__ObjId__std__string_8h.html#a6aa6855e5a7f115ed91224974f1ecd6f",
"expected__std__shared__ptr__MR__ObjectVoxels__std__string_8h.html#a1774f45fceb0bb9f2ebe86599b7348e9",
"expected__std__vector__std__shared__ptr__MR__ObjectVoxels__std__string_8h.html#a283a43053120c9eb582569ed50285c9a",
"phmap__flat__hash__map__MR__GraphVertId__MR__GraphVertId__phmap__Hash__MR__GraphVertId__phmap__EqualTo__MR____8caf_8h.html#ab12c9361212c388b78efceac30358d2d",
"phmap__flat__hash__map__MR__UndirectedEdgeId__MR__EdgeId__phmap__Hash__MR__UndirectedEdgeId__phmap__Equal____2e1d_8h.html#ab627d1e2844aae13d8c89bcb362cfab3",
"phmap__flat__hash__map__MR__VoxelId__MR__VoxelId__phmap__Hash__MR__VoxelId__phmap__EqualTo__MR__VoxelId__MR______2d6b_8h.html#a87d5194ca06cb8d417d7953203db3418",
"std__array__MR__PreciseVertCoords__5_8h.html#ac2c7a986efab3e6602d5cd44b025db63",
"std__function__MR__ProcessOneResult__from__const__MR__Vector3f__ref__MR__FaceId__const__MR__Vector3f__ref______9fe8_8h.html#ac950e2514e6f20f298869aa4d7decd8a",
"std__function__bool__from__MR__FaceId_8h.html#a69977f00953f3489722c90350973e319",
"std__function__double__from__MR__VertId__MR__VertId__MR__VertId__MR__VertId_8h.html#a0b404805313af668ef0d6ee6f806566a",
"std__function__float__from__int__int_8h.html#aaeb728ed1bff56e5a4105576a13b8e47",
"std__function__void__from__MR__Mesh__ref__float__float_8h.html",
"std__function__void__from__const__std__filesystem__path__ref_8h.html#aa95e17d39d367fe0e2863eb550352dbb",
"std__optional__MR__Mesh_8h.html#a27a5f3f351ddc60b3aa3c7bbc0e9e45e",
"std__optional__MR__VertBitSet_8h_source.html",
"std__pair__MR__GraphEdgeId__float_8h.html#aa94162d2c275823ad114c211c58a30ec",
"std__pair__const__MR__ObjId__MR__ObjId_8h.html#a29eb72a9cceafa78106b38b56d1f68bd",
"std__pair__float__float_8h.html#a9ca9c258d300dcd6b0f51f57ad204f53",
"std__shared__ptr__MR__ChangVoxelSelectionAction_8h.html#a4ba9b8553fc1164e8d67f4528c9156a7",
"std__shared__ptr__MR__ChangeMeshCreasesAction_8h.html#ab2d3391184904a960875a8e70f32f2ca",
"std__shared__ptr__MR__ChangeObjectColorAction_8h_source.html",
"std__shared__ptr__MR__ChangePolylinePointsAction_8h.html#a64b57795611d059d852fca216c84bab6",
"std__shared__ptr__MR__CombinedHistoryAction_8h.html#ad21f2e970ee819ea4b19436337bc9fc4",
"std__shared__ptr__MR__HistoryAction_8h.html#a44fda60d0b56fb747c08bb346179902c",
"std__shared__ptr__MR__Mesh_8h.html#aff8243cad5ec9e225086cd8017962a1a",
"std__shared__ptr__MR__ObjectPointsHolder_8h.html#a90a131bb0049860b4ae9577328db8850",
"std__shared__ptr__MR__PointMeasurementObject_8h.html#a31ecaba96caf239afd28b2bbf102bad0",
"std__shared__ptr__const__MR__Mesh_8h.html#abdda5175d04e1622d6f33fdf8d2ef8db",
"std__variant__MR__EdgeMap__phmap__flat__hash__map__MR__EdgeId__MR__EdgeId__phmap__Hash__MR__EdgeId__phmap__Eq____e483_8h.html#afe565b453181b13180fea4770262a45a",
"std__variant__int__float__bool__std__string__MR__Pdf__Cell__Empty_8h.html#a5da723af75c939b80c6f857c60e9700d",
"std__vector__MR__AffineXf3f__MR__Allocator__MR__AffineXf3f_8h_source.html",
"std__vector__MR__EdgeId_8h.html#a9155b0b05b6ff1090779556d70730afc",
"std__vector__MR__FaceId_8h.html#a62d77f5d63103348f4e60390c68dfde6",
"std__vector__MR__GcodeProcessor__MoveAction_8h.html#a2943cbd24919b0bf1c413831a1177db8",
"std__vector__MR__Id__MR__ICPElemtTag__MR__Allocator__MR__Id__MR__ICPElemtTag_8h.html#a00809f89e83c9c5e2e3c393f3ab94970",
"std__vector__MR__MeshOrPointsXf__MR__Allocator__MR__MeshOrPointsXf_8h.html#a13a1e1c8e1fc693f98cb6b0ca434ed22",
"std__vector__MR__Nesting__NestingResult__MR__Allocator__MR__Nesting__NestingResult_8h.html#a360d2ee7aa09a9cbb954cf1af6c07e2b",
"std__vector__MR__Pdf__Cell_8h.html#aa29166526229e6ceba71b9d71d265ab3",
"std__vector__MR__RigidXf3d_8h.html#a531cf6da8613f86afe274ac87f82c0d9",
"std__vector__MR__UnorientedTriangle_8h.html#a15ff8aaa336b0afcb50c298e675aadcc",
"std__vector__MR__Vector3f__MR__Allocator__MR__Vector3f_8h.html#aac177960a5d1eaa0270d8c8792247fc1",
"std__vector__MR__VertId__MR__Allocator__MR__VertId_8h.html#a2bcd63f63fd4ac135fa4aa096423b63d",
"std__vector__char_8h_source.html",
"std__vector__int__MR__Allocator__int_8h.html#a6217a698eb103dd320a3d58e20ee0b5a",
"std__vector__std__array__std__filesystem__path__4_8h.html#a9b9515883c24a42f435391ddc40bbeee",
"std__vector__std__shared__ptr__MR__BasicUiRenderTask_8h.html#ac400bde901183f94d628533f19a56f8e",
"std__vector__std__shared__ptr__MR__ObjectVoxels_8h.html#ac84f5386afeb6d9d013cfd28e9d68ff7",
"std__vector__std__vector__MR__ObjVertId__MR__Allocator__std__vector__MR__ObjVertId_8h.html#aa68a433006d8a7fa30824a3050097c04",
"std__vector__unsigned__short__MR__Allocator__unsigned__short_8h.html#a4b222b3788b8c5d6301d2dac568327fb",
"structmrbindc__details_1_1ClassArgGuard.html#a6afe2f1db73f3b21883847a8367c0da4"
];

var SYNCONMSG = 'click to disable panel synchronization';
var SYNCOFFMSG = 'click to enable panel synchronization';
var LISTOFALLMEMBERS = 'List of all members';