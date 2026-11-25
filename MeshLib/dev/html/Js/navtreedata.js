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
"classTextureBitSet.html#aa64e461d40763a8169f27a0be65188a2",
"classTriMeshPart.html#af0f501764d27e01fe72109b6f70dfbd9",
"classTrimWithPlaneParams.html#aba21eda3b43a47083808a0262d69543c",
"classUndirectedEdge2RegionMap.html#ac03283a68e3e87ef99a65edfa7f32ff3",
"classUndirectedEdgeScalars.html#a5e1a672e89d72cc4ba635063f43b2136",
"classVector2f.html#a03b1ff1c446b5f64ada9228936a1da27",
"classVector__MR__AABBTreeNode__MR__AABBTreeTraits__MR__UndirectedEdgeTag__MR__Box2f__MR__NodeId.html#afe8815f83cb16bf6a106263192943832",
"classVector__MR__BallPivotCandidate.html#a759ce8cc60edba2855997c0b0784ee4f",
"classVector__MR__EdgeId__MR__FaceId.html#aec0b03426e22c2426c7b3232033ae1cd",
"classVector__MR__GraphVertId__MR__GraphVertId.html#afc41f3fb83ff947c82091f4d6b42391a",
"classVector__MR__MeshBuilder__VertSpan__MR__FaceId.html#a7db23745969f9c50a063a9129ae5b447",
"classVector__MR__NodeId__MR__NodeId.html#a23403c5787f4974cf7a086712c0d82c5",
"classVector__MR__PixelId__MR__PixelId.html#a663e8e0ef44a9405d778427fe699f33b",
"classVector__MR__ThreeVertIds.html#abcd82b478962f7f7333e5a26b815c057",
"classVector__MR__Vector__MR__ICPGroupPairs__MR__Id__MR__ICPElemtTag__MR__Id__MR__ICPElemtTag.html#aefd302722ba0a4bddc7be48803c41a37",
"classVector__MR__VertId__MR__EdgeId.html#a45bad385644277a2516f0ab839d7d4a0",
"classVector__MR__WatershedGraph__BdInfo__MR__GraphEdgeId.html#a73c5a96bb69aff34fbef86c3b5b58805",
"classVector__int__MR__FaceId.html#a8dd33c46fae8f9819536b5cb3a828588",
"classVector__int__MR__VertId.html#aa59da8afd4ff1b2c37f11bfdf4cd50b9",
"classVector__std__pair__MR__EdgeId__MR__EdgeId.html#ad1980ef127fbcde50c14c55b782c3843",
"classVertBMap.html#a50d57a6d786715b964da5fcfe6b9978b",
"classVertCoords2.html#aff7be7d15ff13a554552383ffbc2f115",
"classViewportProperty__MR__Matrix3f.html#a736469f2178f5971b7901ac57cf40e3a",
"classVoxelBitSet.html#a1d3736856907b31704bd0432f806d24d",
"classVoxelsLoad_1_1RawParameters.html#a3dd869feb61afb8353d5f31b3398a0c1",
"classWholeEdgeBMap.html#af76d22a917dafd41139b24805685a8c5",
"classexpected__MR__Nesting__NestingResult__std__string.html#a279e36ff5dd81ba44d4acc9541b65a47",
"classexpected__MR__Vector__MR__Nesting__NestingResult__MR__ObjId__std__string.html#a4bbe9d8eeec55e63520ee759eafbbdce",
"classexpected__std__vector__MR__PointsLoad__NamedCloud__std__string.html#a548b9ad95a674ca2f8fa8bbb4f760e9b",
"classphmap_1_1phmap__flat__hash__map__MR__GraphVertId__MR__GraphVertId__phmap__Hash__MR__GraphVead8e35b658dd9793a2004e8a6e1b406d.html#a12e5db44a392ad13319da5f38266c74d",
"classphmap_1_1phmap__flat__hash__map__MR__PixelId__MR__PixelId__phmap__Hash__MR__PixelId__phmap_e2d0f257e8e70e671c4c1aaa990afab5.html#a3f7ec74abaf3b23f199e1ce76cb8b3dd",
"classphmap_1_1phmap__flat__hash__map__MR__UndirectedEdgeId__int__phmap__Hash__MR__UndirectedEdgea27d323b048a685b16f679f6d794542d.html#af9de087b1a6e3674169ed3fe32bca8c0",
"classphmap_1_1phmap__flat__hash__map__int__MR__Box3i__phmap__Hash__int32__t__phmap__EqualTo__int6f69d2ddd78d60cdc8504075cca6edbb.html#ac4506edeeb5e28b3bec96a82c527f596",
"classstd__array__MR__SimpleVolumeMinMax__3.html#a23c4b5e7f92b0242e8a24c78501b1263",
"classstd__function__bool__from__MR__FaceId.html#a1728a75395c5e3c0c07ad2e4db5ed873",
"classstd__function__float__from__size__t__size__t.html#a525fafb453d85679b5649bff078d2fa9",
"classstd__optional__MR__Box1f.html#a301a6697e794e191913e97f95cd59dff",
"classstd__optional__MR__Vector3f.html#a519f1601f5867a96951eebcf01847548",
"classstd__pair__MR__VertId__MR__FaceId.html#a12ea68dd69c3e56fd4e813fda0b4e037",
"classstd__pair__std__vector__MR__UndirectedEdgeBitSet__int.html",
"classstd__shared__ptr__MR__ChangeLinesColorMapAction.html#a8fc2f145055e19afad5adba9409f8415",
"classstd__shared__ptr__MR__ChangeOneNormalInCloudAction.html#af291e1593796cd3f3523a052288ef63f",
"classstd__shared__ptr__MR__ChangeXfAction.html#a8d18737339cddff792fc6f6f0e17a6e3",
"classstd__shared__ptr__MR__LineObject.html#a405efa081dc92781a430d6df2cafc67a",
"classstd__shared__ptr__MR__ObjectPoints.html#af1fb6a9bc31a835760b04e5608c0f714",
"classstd__shared__ptr__MR__SceneRootObject.html#a928bb93b859b905a34063b0954dd74d0",
"classstd__variant__MR__FaceMap__phmap__flat__hash__map__MR__FaceId__MR__FaceId__phmap__Hash__MR_b48ad3e3ea373164e028ef048542c23a.html#a7f43db803e7cd93202bca8682d684ae4",
"classstd__vector__MR__AABBTreeWideLeafTri__MR__Allocator__MR__AABBTreeWideLeafTri.html#a55b046d3f9ddb4fdcea34b764d5ae2d0",
"classstd__vector__MR__CNCMachineSettings__RotationAxisName.html#ae662eb4bc5829d471a229767af67f6b4",
"classstd__vector__MR__EdgeSegment.html#ad008ede88f880d7728dbed0f7fed17fc",
"classstd__vector__MR__FillHoleItem.html#a2e426b6f847959759af13903606ebdc9",
"classstd__vector__MR__Heap__float__MR__GraphVertId__std__greater__float__Element.html#a66a7ed319dc8fc759eaccdd7577b12b3",
"classstd__vector__MR__MeshBuilder__MeshPiece.html#a51f26b19d26efbfcf715e1c0049b3be3",
"classstd__vector__MR__Nesting__BoxNestingCorner.html#a375e782a2f4f2a4090279c92d8b19057",
"classstd__vector__MR__OutEdge.html#a16183ae30198e9bb578880a4a523ba82",
"classstd__vector__MR__RigidXf3d.html#a2df70efa8bc81b0c0085d5e0d3eb75e1",
"classstd__vector__MR__UnorientedTriangle.html#a203cb2354328e4cf1f773248cfb26ddc",
"classstd__vector__MR__Vector3i.html#a6b5257dda6376f7a949989300852d2b3",
"classstd__vector__MR__VoxelBitSet.html#a59d95af123336863b8c4401f53d25e8a",
"classstd__vector__double__MR__Allocator__double.html#a8af5f36224d6f2db28a1cb39aad75d37",
"classstd__vector__std__array__MR__Vector3f__3__MR__Allocator__std__array__MR__Vector3f__3.html#a508d33549a93ce5596fb98222c7ac6a8",
"classstd__vector__std__pair__size__t__size__t.html#a7946bffb3e152030a4d2e703ef8313e0",
"classstd__vector__std__shared__ptr__MR__ObjectVoxels.html#a2abf05ef9039bd51636f3b3440aa4310",
"classstd__vector__std__vector__MR__Vector2d.html#a8431842ae5118877b870d69a0cb58104",
"functions_vars_q.html",
"index_8d_8mts.html#a1684f72e71594cbbc978cb3e432da0d2",
"index_8d_8mts.html#a39bad867ee7dafaff72eec743ace4eac",
"index_8d_8mts.html#a5d7fb4ebf02c7389c701e9e65d3073d7",
"index_8d_8mts.html#a82201f3694f155774ae6a3499c8b7587",
"index_8d_8mts.html#aa45e85b5f7af36270e08656ca99bea49",
"index_8d_8mts.html#accc90eb98372bb96d26fab45d3c29287",
"index_8d_8mts.html#af2520a5a6293846819fe52acd98fc7cd",
"namespaceLinesLoad.html#a56c8bf562fe31ba2f19285a4e7a3d4b0",
"namespaceMeshSave.html#a5fe5400f9b3f13041bd1f052422a2afd",
"namespaceVoxelsLoad.html#a251d528f312ee6d5894fb41c3b0d718e"
];

var SYNCONMSG = 'click to disable panel synchronization';
var SYNCOFFMSG = 'click to enable panel synchronization';
var LISTOFALLMEMBERS = 'List of all members';