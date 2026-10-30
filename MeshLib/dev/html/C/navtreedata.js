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
"MRVDBConversions_8h.html#a0c56680f8e225ddcb09eb32b187bbac4",
"MRVector2_8h.html#a8e5210139ee90c298ed790a28a99dc04",
"MRVector3_8h.html#aa90eddcdab73b3c1a29a636968115fae",
"MRVector4_8h.html#ad924891b577296ad49cb280b64c0f4f4",
"MRVector_8h.html#a0ec24096a2c2c716349cf0011e984459",
"MRVector_8h.html#a20b79b0404e2c7f4a60214d4307f0137",
"MRVector_8h.html#a3121f872274f498f0736fb5486daf619",
"MRVector_8h.html#a416e0618730fb0da6a26d5006e3b2f15",
"MRVector_8h.html#a52150cad476bfe540fe08861872183ba",
"MRVector_8h.html#a610f79502ff7aec43cc3d63813f09c24",
"MRVector_8h.html#a6faa814efdb094080890f6cdd55692e6",
"MRVector_8h.html#a7f8d745776c3cb823d566c12309f1552",
"MRVector_8h.html#a92b9454adfb703ce6995195bd2dcbfc2",
"MRVector_8h.html#aa360dd0f52faccd109c6ec5a9f800d5f",
"MRVector_8h.html#ab3475f351e197197b115fcf7a648c1f1",
"MRVector_8h.html#abfcbc8aba1edb238c4431a77ec46ae42",
"MRVector_8h.html#acfe05407f251975403442ab893d47d36",
"MRVector_8h.html#ae03579e5d062285be60b480dcc717102",
"MRVector_8h.html#af04336d1b507531d6745adf1661d81d5",
"MRVector_8h.html#aff43948c5481842b9fc9606cdcca0dfd",
"MRViewportProperty_8h.html#aa8db821f95a70cffed74842d2c2beab8",
"MRVisualObject_8h.html#ac62c3ebc452a0a3d74b1e99e7d8f12bc",
"MRVoxelsApplyTransform_8h_source.html",
"MRVoxelsVolume_8h.html#a22ad80bf96a7368bc3cd2b959cd7f9f8",
"MRVoxelsVolume_8h.html#ae753aa9d71b76547705bba891a620730",
"MRWeightedPointsShell_8h.html#afa0ec125048a2c496d40e2a5cae5c0e5",
"expected__MR__FloatGrid__std__string_8h.html#a35f9fad7888613a1b35f979ef4e46dbf",
"expected__MR__Polyline3__std__string_8h.html#a76057be137073d4f014c94430e45cc64",
"expected__MR__Vector__MR__Nesting__NestingResult__MR__ObjId__std__string_8h.html#a1ac1171167a5cb1726420161e2b39424",
"expected__std__shared__ptr__MR__Mesh__std__string_8h_source.html",
"expected__std__vector__std__pair__MR__VertId__MR__VertId__std__string_8h_source.html",
"phmap__flat__hash__map__MR__GraphVertId__MR__GraphVertId__phmap__Hash__MR__GraphVertId__phmap__EqualTo__MR____8caf_8h.html#a84e432f9fc5e4ccfef95f33acfa551d5",
"phmap__flat__hash__map__MR__UndirectedEdgeId__MR__EdgeId__phmap__Hash__MR__UndirectedEdgeId__phmap__Equal____2e1d_8h.html#a81ab823cb2c717c2c9f145b9dbe19e75",
"phmap__flat__hash__map__MR__VoxelId__MR__VoxelId__phmap__Hash__MR__VoxelId__phmap__EqualTo__MR__VoxelId__MR______2d6b_8h.html#a7227624318cbfd9d2cab68847c26d590",
"std__array__MR__PreciseVertCoords__5_8h.html#a6e08cf82289d7c76e76c3126646ca1d7",
"std__function__MR__ProcessOneResult__from__const__MR__Vector3f__ref__MR__FaceId__const__MR__Vector3f__ref______9fe8_8h.html#a6b1dbdffecab620bdab7e25b4798c3c4",
"std__function__bool__from__MR__FaceId_8h.html#a45e369e060db143fe24826a37342b6b0",
"std__function__double__from__MR__VertId__MR__VertId__MR__VertId_8h.html#af2662b75ee8a1921fbabb2209a0428b5",
"std__function__float__from__int__int_8h.html#a2b48e79981873114863899e4a6a86fe1",
"std__function__void__from__MR__Mesh__ref__const__MR__PartMapping__ref_8h.html#ac423196ec469ae4a110029bd4290b3cb",
"std__function__void__from__const__std__filesystem__path__ref_8h.html#a56f7d93729f08758c2d7bebf0ce7a6ed",
"std__optional__MR__MeshOrPoints_8h.html#ae368acb97015179c333df743b9d05f80",
"std__optional__MR__VertBitSet_8h.html#abc9214cc865fb36eede513ac94ca06bd",
"std__pair__MR__GraphEdgeId__float_8h.html#a52d29950f7661767d24e572dc7f66178",
"std__pair__const__MR__NodeId__MR__NodeId_8h.html#ac8eff1c98419f290717733eecf135917",
"std__pair__float__float_8h.html#a733c1e125780fd09acaa8a4015eed47a",
"std__shared__ptr__MR__ChangVoxelSelectionAction_8h.html#a266886d755701b750a16772df942e063",
"std__shared__ptr__MR__ChangeMeshCreasesAction_8h.html#a7f0d38835ed7261cb481ce132f506edd",
"std__shared__ptr__MR__ChangeObjectColorAction_8h.html#ad331aca0cf1061b077a2c100de9f65f0",
"std__shared__ptr__MR__ChangePolylinePointsAction_8h.html#a3d3ef03c1b7b2893801f8480776f3b4f",
"std__shared__ptr__MR__CombinedHistoryAction_8h.html#aa11f2d214b577f59bb777c519e7ffd26",
"std__shared__ptr__MR__HistoryAction_8h.html#a01c182dada3972efded2cdaaa25fa0c9",
"std__shared__ptr__MR__Mesh_8h.html#ab6829bf53fa26dc04f80e06fc4a9c294",
"std__shared__ptr__MR__ObjectPointsHolder_8h.html#a7a0152cf4579acce858d4d84858faf3e",
"std__shared__ptr__MR__PointMeasurementObject_8h.html",
"std__shared__ptr__const__MR__Mesh_8h.html#a8bfa983c72d916d99ed7c88a2f113f1a",
"std__variant__MR__EdgeMap__phmap__flat__hash__map__MR__EdgeId__MR__EdgeId__phmap__Hash__MR__EdgeId__phmap__Eq____e483_8h.html#adbfd523bae4dce436cd6cc95779c2f11",
"std__variant__int__float__bool__std__string__MR__Pdf__Cell__Empty_8h.html#a3dd5a112475f08beeec379ace3a20055",
"std__vector__MR__AffineXf3f__MR__Allocator__MR__AffineXf3f_8h.html#ae378a2b5219e189367d2435c1243066b",
"std__vector__MR__EdgeId_8h.html#a77506c6b31f7cba34e0750fa1353920f",
"std__vector__MR__FaceId_8h.html#a519ec8d9b68bec71a3409693993e2f6e",
"std__vector__MR__GcodeProcessor__MoveAction_8h.html#a0c050839fec4f2a361f5fc91405a5b5d",
"std__vector__MR__IOFilter_8h.html#afcf050985c29753d580db23143bab404",
"std__vector__MR__MeshLoad__NamedMesh_8h.html#af9d858d10504a92fa30ecc1236b895ef",
"std__vector__MR__Nesting__MeshXf__MR__Allocator__MR__Nesting__MeshXf_8h.html#afaa86f9b1f394b97d033a38387bc1ead",
"std__vector__MR__Pdf__Cell_8h.html#a7950e6a4eea590b8cf803b6f12e403f6",
"std__vector__MR__RigidXf3d_8h.html#a29aabdc2d37c593aebf46c18f02c99b4",
"std__vector__MR__UndirectedEdgeUndirectedEdge_8h_source.html",
"std__vector__MR__Vector3f__MR__Allocator__MR__Vector3f_8h.html#a96c89501d0fcdeea95d0eed032cf0731",
"std__vector__MR__VertId__MR__Allocator__MR__VertId_8h.html#a108f70e4a18989755f562794dda6ac28",
"std__vector__char_8h.html#ac5fefb1d154bae1ce16cc21d32ec2d56",
"std__vector__int__MR__Allocator__int_8h.html#a2ac70590391d842900be28593feea982",
"std__vector__std__array__std__filesystem__path__4_8h.html#a7ccc8151c164e181fefd281c1cdf05ea",
"std__vector__std__shared__ptr__MR__BasicUiRenderTask_8h.html#a9a113010c61b67e70cfdfcca2b1a4090",
"std__vector__std__shared__ptr__MR__ObjectVoxels_8h.html#aa20f102af8a6b4535118f13b6e8dca50",
"std__vector__std__vector__MR__ObjVertId__MR__Allocator__std__vector__MR__ObjVertId_8h.html#a83b125f1a4ab031f38094c5056a7c251",
"std__vector__unsigned__short__MR__Allocator__unsigned__short_8h.html#a3b795e6bdf033cf926011e5df5ec6111",
"structmrbindc__details_1_1ClassArgGuard.html#a0dad56557fcc1e4c7b63a06538832113"
];

var SYNCONMSG = 'click to disable panel synchronization';
var SYNCOFFMSG = 'click to enable panel synchronization';
var LISTOFALLMEMBERS = 'List of all members';