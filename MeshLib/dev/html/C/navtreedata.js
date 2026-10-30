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
"MROneMeshContours_8h.html#a9c96ee738e86e48b38833368c38b86cf",
"MRPartMapping_8h.html#a942fc90777dca64e8727b4f0b11eb67b",
"MRPdf_8h.html#a952ad2aa5ba2527a593f53c76e209fea",
"MRPlaneObject_8h.html#a9b4549366edc7c10299a2070267ca914",
"MRPointCloudRelax_8h.html#ad0e5738bacbff8f3ee696c0c68f52d2b",
"MRPointMeasurementObject_8h.html#a2fa9d558b6687b4c3c7cd77de69535cf",
"MRPointObject_8h.html#ab0d44eb676d261c137fc225725249efc",
"MRPointsProject_8h.html#a7af4a6a7ad9b86d226b593fc94d4d440",
"MRPointsToMeshProjector_8h.html#af444334fa399884130856665cec30fbe",
"MRPolylineProject_8h.html#a63774a94b29a751adcee997245466a2d",
"MRPolylineTrimWithPlane_8h.html#a9534e1878d18f64ef0e0c7b0594ae503",
"MRPositionedText_8h.html#ab7d83890521d9afa5c2d23e718de9127",
"MRProgressCallback_8h.html#affff696a4b00df4f69a3e6f554704895",
"MRRadiusMeasurementObject_8h.html#a0098ed26249fd9691d75d082300d6e5e",
"MRRebuildMesh_8h.html#a2f4ad7ade19c16580bf6f2a69c184156",
"MRRigidScaleXf3_8h.html#adac825d8c1553d7ef10e048b11f461a9",
"MRScanHelpers_8h.html#a3c26087d0bfb439895bc086edf7eb0b8",
"MRSceneSettings_8h.html#a7ac995a0586ce25e03443419f1729e1ca1c6309fd68e0e25c99612343870c4b6c",
"MRSolarRadiation_8h.html#a6bd20b8037df7f3a5125e03df3b8d147",
"MRSphere_8h.html#a96673cd28c62edd4ae37b3cd6830e4a0",
"MRSweptVolume_8h.html#a0bf426c293ef97f9b96d232e439c8fda",
"MRSymMatrix3_8h.html#a390b188fa9cfe731b26d5eccacbbc9e4",
"MRSymMatrix4_8h.html#a481455957dbec01ca963f8388b7aecb7",
"MRSystemPath_8h.html",
"MRToolPath_8h.html#a22f51d6b0ff903a3b67699e2975f4df6",
"MRTriDist_8h.html#a35996e4cf69bba6201b82ad9dccd0fb3",
"MRTriangleIntersection_8h.html#a6b785d8fe1ba50aa1f5bff5e3acaba23",
"MRUnionFind_8h.html#ad2de77a79c9d0141b960826373b3446e",
"MRUnorientedTriangle_8h.html#aac92566ba7db9f068c7228cd036bd9a6",
"MRVector2_8h.html#a80a054398c8b0c64bf3152fed7710878",
"MRVector3_8h.html#aa167677cfc14a825e3ee1cbfb3b16c01",
"MRVector4_8h.html#ad517207dc3fe57a36635c0645517ed45",
"MRVector_8h.html#a0df74812cf7a9b40b147804240f89225",
"MRVector_8h.html#a1f5ea628d45fd11062db01cfb75c31fa",
"MRVector_8h.html#a2fdafc64dd299cc65152d86e09eee8d8",
"MRVector_8h.html#a3fb687c5454d2619d7b9ca678551ee79",
"MRVector_8h.html#a508106f2140fe56c1d2cf6fdc2ba5c16",
"MRVector_8h.html#a5f6c4b0146386a857f77612a25f44697",
"MRVector_8h.html#a6e57dc2f48a7cc263450df981bb35a5e",
"MRVector_8h.html#a7e1de9c3e531b22fe40f2f66a1e68996",
"MRVector_8h.html#a8fb75d06544b3aed2e78e818cc7f3e67",
"MRVector_8h.html#aa0c6710dbca1545c7e76e57d36e5d417",
"MRVector_8h.html#aafbe9db9fdba9c83179a3d190fbe2a48",
"MRVector_8h.html#abe0f6eef2e9b3f5383bce6fd0064d74a",
"MRVector_8h.html#acd6ee18fb385fa081e080f3cf5c88034",
"MRVector_8h.html#adc9244d4c8a8f3b1744003b8c1303699",
"MRVector_8h.html#aed02cfa2abddfc05ee6e3384fa21fc37",
"MRVector_8h.html#afc782a2236899117ebd11d4074425151",
"MRViewportProperty_8h.html#a28fcc0a62f8f12957c41596510106631",
"MRVisualObject_8h.html#a88d5cb73218452f5a883a47fc4ccdabf",
"MRVoxelPath_8h.html#a34083dcfd60e7671df3a43d43e4ec21f",
"MRVoxelsVolumeAccess_8h.html#ae25cb822ebc3b8e1b1f71f11c2aad80b",
"MRVoxelsVolume_8h.html#abe16084bf13e7b991ec43dcbfd5bc925",
"MRWeightedPointsShell_8h.html#a7d1c49b8c97fcbc44495c9002c94a58a",
"expected__MR__Cuda__DeviceInfo__std__string_8h.html#aaaf31aad9dc9c5e96e4c0e567ccec120",
"expected__MR__ObjectPoints__std__string_8h.html#afc2839621c76abc7baba43f23e52bf02",
"expected__MR__UnionFind__MR__VertId__std__string_8h.html#abc5dda686a3e1380cdca1095083b107f",
"expected__size__t__std__string_8h.html#a9f7a9d6b8badb9bf0259d50ff0e0b3a7",
"expected__std__vector__MR__VdbVolume__std__string_8h.html#a37f55c7359fc607509a2225a6cfe1df2",
"phmap__flat__hash__map__MR__GraphEdgeId__MR__GraphEdgeId__phmap__Hash__MR__GraphEdgeId__phmap__EqualTo__MR____bb30_8h.html",
"phmap__flat__hash__map__MR__RegionId__MR__RegionId__phmap__Hash__MR__RegionId__phmap__EqualTo__MR__RegionId____55f3_8h.html#afdb9f43f53202703f848def89216bf65",
"phmap__flat__hash__map__MR__VertId__MR__VertPathInfo__phmap__Hash__MR__VertId__phmap__EqualTo__MR__VertId__M____f7a3_8h.html#af1e4ac4a0badce5473d8239bf1d88248",
"std__array__MR__PreciseVertCoords2__3_8h.html#a4144aa2ceecf39539f5314a3b46ddbcb",
"std__function__MR__MeshOrPoints__ProjectionResult__from__const__MR__Vector3f__ref_8h.html#ab0a5ba7f444bcf19adecff653b4835d6",
"std__function__MR__Vector3f__from__size__t__size__t_8h_source.html",
"std__function__bool__from__size__t__size__t_8h.html#ac480c9a3143e33efe86c2b40893afa2f",
"std__function__float__from__const__char__ptr_8h.html#a01e5d3e3dd3e39679f6b9d03c78eea5c",
"std__function__void__from__MR__EdgeId__MR__EdgeId__float_8h.html#ac9bd7b6351f295645864d3f51d906b6c",
"std__function__void__from__const__MR__EdgePoint__ref_8h.html#a1689c0b0560724e043de0a0a96bd4b17",
"std__optional__MR__HoleFillPlan_8h_source.html",
"std__optional__MR__Vector3d_8h.html",
"std__pair__MR__Face2RegionMap__int_8h.html#a9c4fab025a51f5cc82486312b7d40177",
"std__pair__const__MR__FaceId__MR__FaceId_8h.html#a670c3bd0a2982133103a6aa1c37e0c1e",
"std__pair__const__size__t__std__array__MR__VertId__3_8h.html#ae29be91f4d2bc017ae26f8430da20a5c",
"std__shared__ptr__MR__AddVisualProperties__MR__FeatureObject__MR__DimensionsVisualizePropertyType__di____c711_8h.html#af43221291578c4ff3c7bcee8aa65bbc0",
"std__shared__ptr__MR__ChangeLinesColorMapAction_8h.html#a096645b09626ac802e4918d23a63a9c6",
"std__shared__ptr__MR__ChangeNameAction_8h.html#a6bc780ed37e8b0d4df72739de933aa24",
"std__shared__ptr__MR__ChangePointCloudPointsAction_8h.html#af24a723d24ce0603fbc5387851869cfb",
"std__shared__ptr__MR__ChangeXfAction_8h.html#a2f37976796fe2aef643c53756c9069fa",
"std__shared__ptr__MR__DistanceMeasurementObject_8h.html#ab21382b86bdd0703a4a48b51f6afa633",
"std__shared__ptr__MR__Matrix__float_8h.html#a7ae952d6419d70b9e350493623cce757",
"std__shared__ptr__MR__ObjectMeshHolder_8h.html#a3d78f26cf2570735124f57e284ec607c",
"std__shared__ptr__MR__PartialChangeMeshTopologyAction_8h.html#aa029467ec3bce070cdbfbea528c02def",
"std__shared__ptr__MR__VersatileChangeMeshPointsAction_8h.html#a4c33a751dc876456a6ca155b6ae7b0a0",
"std__string__view_8h.html#a656940c3e21204c40668d1d88eb42702",
"std__variant__MR__VertMap__phmap__flat__hash__map__MR__VertId__MR__VertId__phmap__Hash__MR__VertId__phmap__Eq____57aa_8h.html#a96d600b2a20bc4e5d3aa6f75818ae408",
"std__vector__MR__AABBTreePoints__Point_8h.html#ae5537d7a64be699c372e886c3963d667",
"std__vector__MR__Dipole__MR__Allocator__MR__Dipole_8h.html#a7a2a0224c3fe04b8e8c71d8246fe02c8",
"std__vector__MR__FaceFaceFace_8h.html#a43eb583df200512c95bc96026edf846b",
"std__vector__MR__GCommand_8h.html",
"std__vector__MR__ICPGroupPair_8h.html#ac29252d2cf2caaeb3ed16dad22dded54",
"std__vector__MR__MeshBuilder__VertSpan__MR__Allocator__MR__MeshBuilder__VertSpan_8h.html#a9e103f6b984b33bd70bf6d906f4a46e2",
"std__vector__MR__ModelPointsData__MR__Allocator__MR__ModelPointsData_8h.html#ab61abbf393934e269bb2c6cd5428038b",
"std__vector__MR__OneMeshContour__MR__Allocator__MR__OneMeshContour_8h.html#a37b2c2ae1692169f4c224089c901696a",
"std__vector__MR__QuadraticForm2f__MR__Allocator__MR__QuadraticForm2f_8h.html#a24afd266678f766645c1ad974d68d6c8",
"std__vector__MR__UndirectedEdgeBitSet_8h.html#ad98eb43c5065b25704739feadb2a50a9",
"std__vector__MR__Vector2f__MR__Allocator__MR__Vector2f_8h.html#a7ded0808aaff041edb29a20f06118e4e",
"std__vector__MR__Vector__std__vector__MR__ObjVertId__MR__Id__MR__ICPElemtTag__MR__Allocator__MR__Vector__std____5f27_8h_source.html",
"std__vector__MR__WatershedGraph__OverflowPoint_8h.html#ad4aaa6dc2761a89cb95b457f669d2478",
"std__vector__float_8h.html#a36aafc3bf8f5721b25f5b3bdf82fc0b5",
"std__vector__std__array__MR__VertId__3_8h.html#a706b58242282797e33abb141df7b47d3",
"std__vector__std__pair__double__int_8h.html#a3101d5cadf17515a506f61575797270a",
"std__vector__std__shared__ptr__MR__ObjectMesh_8h.html#a196fadc0b94b08b1f68804528af0fce0",
"std__vector__std__vector__MR__EdgePoint_8h.html#a416734063a8a15ca4c40b284a09f4d83",
"std__vector__std__vector__MR__VertId_8h.html#a45ad24b60cd6fce2e0d34ebbfbdf5535",
"structMR__Vector2f.html#a676c8a51f05e806f54db8ba5bdffb1d8"
];

var SYNCONMSG = 'click to disable panel synchronization';
var SYNCOFFMSG = 'click to enable panel synchronization';
var LISTOFALLMEMBERS = 'List of all members';