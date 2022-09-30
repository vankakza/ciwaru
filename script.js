(function(){
    var script = {
 "paddingLeft": 0,
 "scrollBarWidth": 10,
 "class": "Player",
 "id": "rootPlayer",
 "scrollBarColor": "#000000",
 "vrPolyfillScale": 0.5,
 "layout": "absolute",
 "scrollBarOpacity": 0.5,
 "mobileMipmappingEnabled": false,
 "children": [
  "this.MainViewer",
  "this.IconButton_83265D94_8F3B_CB4A_41D2_C822B8F47CD2",
  "this.veilPopupPanorama",
  "this.zoomImagePopupPanorama",
  "this.closeButtonPopupPanorama"
 ],
 "borderSize": 0,
 "start": "this.init(); this.visibleComponentsIfPlayerFlagEnabled([this.IconButton_83265D94_8F3B_CB4A_41D2_C822B8F47CD2], 'cardboardAvailable')",
 "scrollBarVisible": "rollOver",
 "minHeight": 20,
 "definitions": [{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -91.55,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_83FE2A48_8F3B_49DA_41CB_9B691DFDC273",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_98A31898_88DB_D5F4_416E_6076E9CB6DC4_camera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 3.89,
   "backwardYaw": -39.27,
   "distance": 1,
   "panorama": "this.panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 159.75,
   "backwardYaw": 75.2,
   "distance": 1,
   "panorama": "this.panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45"
  }
 ],
 "hfovMin": "135%",
 "hfovMax": 130,
 "hfov": 360,
 "label": "20220924_195445_108",
 "id": "panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D",
 "thumbnailUrl": "media/panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_9B3EF73E_88DE_FB2C_41D1_B0F84D03E415",
  "this.overlay_9B253687_88DA_5DDC_41DA_B885E27834D7"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -3.8,
   "backwardYaw": 0.19,
   "distance": 1,
   "panorama": "this.panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 175.37,
   "backwardYaw": 1.11,
   "distance": 1,
   "panorama": "this.panorama_8FC9D75B_831A_E9A1_4196_45134C057301"
  }
 ],
 "hfovMin": "135%",
 "hfovMax": 130,
 "hfov": 360,
 "label": "20220924_200325_715",
 "id": "panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270",
 "thumbnailUrl": "media/panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_A35BAD66_830E_5862_41DD_724AF9B82C1A",
  "this.overlay_976A95BF_845A_6A1B_4190_A69985CB027E",
  "this.popup_95950CC8_845B_DA65_41C0_F5E4D5943128",
  "this.overlay_986D155C_88E6_5F6C_41CB_729A4A8BF4B6"
 ]
},
{
 "class": "ImageResource",
 "id": "ImageResource_990E1128_88EA_74D3_41BD_01424F88907F",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_95E5C3FC_8427_AE1D_41D5_DBE9A96E57A2_0_0.jpg",
   "width": 1599,
   "height": 1200
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_95E5C3FC_8427_AE1D_41D5_DBE9A96E57A2_0_1.jpg",
   "width": 1024,
   "height": 768
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_95E5C3FC_8427_AE1D_41D5_DBE9A96E57A2_0_2.jpg",
   "width": 512,
   "height": 384
  }
 ]
},
{
 "class": "PlayList",
 "items": [
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "media": "this.panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "media": "this.panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "media": "this.panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "media": "this.panorama_8E107CBE_8316_38E3_41C2_E75776DA228D",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8E107CBE_8316_38E3_41C2_E75776DA228D_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "media": "this.panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "media": "this.panorama_8F2688FE_8316_D862_41DF_AC8539E02C41",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8F2688FE_8316_D862_41DF_AC8539E02C41_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "media": "this.panorama_8FC9D75B_831A_E9A1_4196_45134C057301",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8FC9D75B_831A_E9A1_4196_45134C057301_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "media": "this.panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "media": "this.panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "media": "this.panorama_952174CE_845F_AA7D_4197_5A4479805A36",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_952174CE_845F_AA7D_4197_5A4479805A36_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "media": "this.panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "media": "this.panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "media": "this.panorama_98A31898_88DB_D5F4_416E_6076E9CB6DC4",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_98A31898_88DB_D5F4_416E_6076E9CB6DC4_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "media": "this.panorama_98A32D73_88DB_CF34_41D3_B50121ED672C",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_98A32D73_88DB_CF34_41D3_B50121ED672C_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "media": "this.panorama_98A603D9_88DB_DB74_41DF_0575075AA24B",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_98A603D9_88DB_DB74_41DF_0575075AA24B_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "media": "this.panorama_98A3306A_88DB_F554_41DB_7A7EC97BD228",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_98A3306A_88DB_F554_41DB_7A7EC97BD228_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "media": "this.panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "media": "this.panorama_96D311F8_8439_AA25_41D8_794F1424CD6C",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_96D311F8_8439_AA25_41D8_794F1424CD6C_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "media": "this.panorama_96D39BC1_843A_7E66_41C9_8186710E503B",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_96D39BC1_843A_7E66_41C9_8186710E503B_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "media": "this.panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "media": "this.panorama_977AAA32_843A_BE25_41A0_4F2B758AA422",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_977AAA32_843A_BE25_41A0_4F2B758AA422_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "media": "this.panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "media": "this.panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "media": "this.panorama_8F637E4E_8316_3BA2_41D5_288E1A348353",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8F637E4E_8316_3BA2_41D5_288E1A348353_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "media": "this.panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "media": "this.panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "media": "this.panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "media": "this.panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "media": "this.panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF_camera"
  },
  {
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 0)",
   "media": "this.panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE",
   "camera": "this.panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE_camera",
   "class": "PanoramaPlayListItem",
   "player": "this.MainViewerPanoramaPlayer",
   "end": "this.trigger('tourEnded')"
  }
 ],
 "id": "mainPlayList"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 0.91,
   "backwardYaw": -177.43,
   "distance": 1,
   "panorama": "this.panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -43.27,
   "backwardYaw": 140.86,
   "distance": 1,
   "panorama": "this.panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 178.01,
   "backwardYaw": -171.53,
   "distance": 1,
   "panorama": "this.panorama_8F2688FE_8316_D862_41DF_AC8539E02C41"
  }
 ],
 "hfovMin": "135%",
 "hfovMax": 130,
 "hfov": 360,
 "label": "20220924_195203_098",
 "id": "panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91",
 "thumbnailUrl": "media/panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_95898ACD_830E_58A1_41D0_7DC2BDF3582F",
  "this.overlay_95C13F70_830A_587E_41D4_9C34089C0BF4",
  "this.overlay_9C0E71A1_830A_68E1_41C6_3DD92D5EB57D"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 75.97,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_81C0F1BA_8F44_BABE_41CC_A2F7ADEECE08",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -41.84,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8112910E_8F44_BB56_41B3_B1EB54FD97C4",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_camera",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 134.73,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_808DB803_8F44_C94E_41C9_29E90D30C9B4",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 91.7,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_82827EDB_8F3B_46FD_41C1_ABFD388D7E5C",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270_camera",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_98A3306A_88DB_F554_41DB_7A7EC97BD228_camera",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -147.55,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_828F2E9D_8F3B_497A_41DA_921A4D17A0EC",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5_camera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -162.94,
   "backwardYaw": -75.39,
   "distance": 1,
   "panorama": "this.panorama_98A32D73_88DB_CF34_41D3_B50121ED672C"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -162.94,
   "backwardYaw": -75.39,
   "distance": 1,
   "panorama": "this.panorama_98A32D73_88DB_CF34_41D3_B50121ED672C"
  }
 ],
 "hfovMin": "135%",
 "hfovMax": 130,
 "hfov": 360,
 "label": "20220924_195505_944",
 "id": "panorama_98A603D9_88DB_DB74_41DF_0575075AA24B",
 "thumbnailUrl": "media/panorama_98A603D9_88DB_DB74_41DF_0575075AA24B_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A603D9_88DB_DB74_41DF_0575075AA24B_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_98A603D9_88DB_DB74_41DF_0575075AA24B_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_98A603D9_88DB_DB74_41DF_0575075AA24B_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A603D9_88DB_DB74_41DF_0575075AA24B_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_98A603D9_88DB_DB74_41DF_0575075AA24B_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_98A603D9_88DB_DB74_41DF_0575075AA24B_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A603D9_88DB_DB74_41DF_0575075AA24B_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_98A603D9_88DB_DB74_41DF_0575075AA24B_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_98A603D9_88DB_DB74_41DF_0575075AA24B_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A603D9_88DB_DB74_41DF_0575075AA24B_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_98A603D9_88DB_DB74_41DF_0575075AA24B_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_98A603D9_88DB_DB74_41DF_0575075AA24B_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A603D9_88DB_DB74_41DF_0575075AA24B_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_98A603D9_88DB_DB74_41DF_0575075AA24B_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_98A603D9_88DB_DB74_41DF_0575075AA24B_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A603D9_88DB_DB74_41DF_0575075AA24B_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_98A603D9_88DB_DB74_41DF_0575075AA24B_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_98A603D9_88DB_DB74_41DF_0575075AA24B_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_98A603D9_88DB_DB74_41DF_0575075AA24B_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_9F2E7BCD_8B29_CB6C_41DF_D7B1DD87E978"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 88.45,
   "backwardYaw": -88.3,
   "distance": 1,
   "panorama": "this.panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1"
  }
 ],
 "hfovMin": "135%",
 "hfovMax": 130,
 "hfov": 360,
 "label": "20220924_194920_785",
 "id": "panorama_8F637E4E_8316_3BA2_41D5_288E1A348353",
 "thumbnailUrl": "media/panorama_8F637E4E_8316_3BA2_41D5_288E1A348353_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F637E4E_8316_3BA2_41D5_288E1A348353_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8F637E4E_8316_3BA2_41D5_288E1A348353_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8F637E4E_8316_3BA2_41D5_288E1A348353_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F637E4E_8316_3BA2_41D5_288E1A348353_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8F637E4E_8316_3BA2_41D5_288E1A348353_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8F637E4E_8316_3BA2_41D5_288E1A348353_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F637E4E_8316_3BA2_41D5_288E1A348353_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8F637E4E_8316_3BA2_41D5_288E1A348353_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8F637E4E_8316_3BA2_41D5_288E1A348353_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F637E4E_8316_3BA2_41D5_288E1A348353_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8F637E4E_8316_3BA2_41D5_288E1A348353_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8F637E4E_8316_3BA2_41D5_288E1A348353_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F637E4E_8316_3BA2_41D5_288E1A348353_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8F637E4E_8316_3BA2_41D5_288E1A348353_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8F637E4E_8316_3BA2_41D5_288E1A348353_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F637E4E_8316_3BA2_41D5_288E1A348353_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8F637E4E_8316_3BA2_41D5_288E1A348353_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8F637E4E_8316_3BA2_41D5_288E1A348353_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8F637E4E_8316_3BA2_41D5_288E1A348353_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_9877E7AD_8316_28E1_41DE_8CBF8C19A521",
  "this.overlay_957F1025_84DE_AA2F_41DF_9490224C82BE",
  "this.popup_958305BA_84DE_6A25_41D2_D0594DD18ED0"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -174.8,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_810378C1_8F3B_4ACA_41E0_5B218E144B17",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -49.09,
   "backwardYaw": -104.03,
   "distance": 1,
   "panorama": "this.panorama_96D311F8_8439_AA25_41D8_794F1424CD6C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148"
  }
 ],
 "hfovMin": "135%",
 "hfovMax": 130,
 "hfov": 360,
 "label": "20220924_195714_326",
 "id": "panorama_977AAA32_843A_BE25_41A0_4F2B758AA422",
 "thumbnailUrl": "media/panorama_977AAA32_843A_BE25_41A0_4F2B758AA422_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_977AAA32_843A_BE25_41A0_4F2B758AA422_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_977AAA32_843A_BE25_41A0_4F2B758AA422_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_977AAA32_843A_BE25_41A0_4F2B758AA422_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_977AAA32_843A_BE25_41A0_4F2B758AA422_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_977AAA32_843A_BE25_41A0_4F2B758AA422_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_977AAA32_843A_BE25_41A0_4F2B758AA422_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_977AAA32_843A_BE25_41A0_4F2B758AA422_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_977AAA32_843A_BE25_41A0_4F2B758AA422_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_977AAA32_843A_BE25_41A0_4F2B758AA422_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_977AAA32_843A_BE25_41A0_4F2B758AA422_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_977AAA32_843A_BE25_41A0_4F2B758AA422_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_977AAA32_843A_BE25_41A0_4F2B758AA422_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_977AAA32_843A_BE25_41A0_4F2B758AA422_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_977AAA32_843A_BE25_41A0_4F2B758AA422_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_977AAA32_843A_BE25_41A0_4F2B758AA422_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_977AAA32_843A_BE25_41A0_4F2B758AA422_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_977AAA32_843A_BE25_41A0_4F2B758AA422_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_977AAA32_843A_BE25_41A0_4F2B758AA422_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_977AAA32_843A_BE25_41A0_4F2B758AA422_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_9CF65A3F_8426_5E1A_41B7_DC68EA72A2EB",
  "this.overlay_93294F11_85D9_D7E7_41A3_EF92AEEF3AED"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_98A603D9_88DB_DB74_41DF_0575075AA24B_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -39.14,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_83DF6AF4_8F3B_4ECA_41DF_FFE88EEB65CB",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -165.79,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_80059553_8F44_BBCE_41BC_A9697527B7F3",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_98A32D73_88DB_CF34_41D3_B50121ED672C_camera",
 "automaticZoomSpeed": 10
},
{
 "gyroscopeEnabled": true,
 "viewerArea": "this.MainViewer",
 "buttonCardboardView": "this.IconButton_83265D94_8F3B_CB4A_41D2_C822B8F47CD2",
 "displayPlaybackBar": true,
 "class": "PanoramaPlayer",
 "touchControlMode": "drag_acceleration",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "mouseControlMode": "drag_rotation"
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 177.88,
   "backwardYaw": 3.16,
   "distance": 1,
   "panorama": "this.panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -2.94,
   "backwardYaw": -171.72,
   "distance": 1,
   "panorama": "this.panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9"
  }
 ],
 "hfovMin": "135%",
 "hfovMax": 130,
 "hfov": 360,
 "label": "20220924_195317_218",
 "id": "panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE",
 "thumbnailUrl": "media/panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_9305EDE0_8339_D89E_41D6_C407A1CCC52C",
  "this.overlay_903EE7F9_833E_686E_41D7_ADE5B0DC67DC"
 ]
},
{
 "class": "ImageResource",
 "id": "ImageResource_94D1D4B4_8E58_5E86_41E1_37510D940F72",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_932C01FA_8E47_B68D_41DA_2333FA2A5357_0_0.jpeg",
   "width": 1280,
   "height": 963
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_932C01FA_8E47_B68D_41DA_2333FA2A5357_0_1.jpeg",
   "width": 1024,
   "height": 770
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_932C01FA_8E47_B68D_41DA_2333FA2A5357_0_2.jpeg",
   "width": 512,
   "height": 385
  }
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_8F637E4E_8316_3BA2_41D5_288E1A348353_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE_camera",
 "automaticZoomSpeed": 10
},
{
 "rotationY": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 7.1,
 "hideDuration": 500,
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_96593F33_843E_562B_41D0_385A5AB13213_0_1.jpg",
    "width": 1024,
    "height": 768
   }
  ]
 },
 "pitch": 2.85,
 "yaw": 89.87,
 "id": "popup_96593F33_843E_562B_41D0_385A5AB13213",
 "popupDistance": 100
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_96D311F8_8439_AA25_41D8_794F1424CD6C_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -12.88,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_823F7B9F_8F3B_4F75_41B2_4D652A05845B",
 "automaticZoomSpeed": 10
},
{
 "rotationY": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 11.28,
 "hideDuration": 500,
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_94ED5FC1_84EB_F667_41E0_7CCF158F2CEF_0_2.jpg",
    "width": 1024,
    "height": 771
   }
  ]
 },
 "pitch": -0.75,
 "yaw": 83.54,
 "id": "popup_94ED5FC1_84EB_F667_41E0_7CCF158F2CEF",
 "popupDistance": 100
},
{
 "class": "ImageResource",
 "id": "ImageResource_99010128_88EA_74D3_41CC_5D7079CF4AEA",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_9472D6DF_84DB_B61A_41A1_4F01D515CD8E_0_0.jpg",
   "width": 4080,
   "height": 3072
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_9472D6DF_84DB_B61A_41A1_4F01D515CD8E_0_1.jpg",
   "width": 2048,
   "height": 1542
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_9472D6DF_84DB_B61A_41A1_4F01D515CD8E_0_2.jpg",
   "width": 1024,
   "height": 771
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_9472D6DF_84DB_B61A_41A1_4F01D515CD8E_0_3.jpg",
   "width": 512,
   "height": 385
  }
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 84.95,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_82662D36_8F3B_4BB6_41B7_58E626AC5FBF",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -176.11,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_82C7FFC6_8F3B_46D6_41D9_6A75ADE3BF31",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B_camera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -165.39,
   "backwardYaw": -7.89,
   "distance": 1,
   "panorama": "this.panorama_96D311F8_8439_AA25_41D8_794F1424CD6C"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 14.2,
   "backwardYaw": 5.2,
   "distance": 1,
   "panorama": "this.panorama_96D39BC1_843A_7E66_41C9_8186710E503B"
  }
 ],
 "hfovMin": "135%",
 "hfovMax": 130,
 "hfov": 360,
 "label": "20220924_200208_780",
 "id": "panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC",
 "thumbnailUrl": "media/panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_90B574D9_842E_EA67_41DD_5205EB757A7A",
  "this.overlay_90A6F78F_842E_56FB_41C9_CFF8FCD126F7"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 89.6,
   "backwardYaw": -80.91,
   "distance": 1,
   "panorama": "this.panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8"
  }
 ],
 "hfovMin": "135%",
 "hfovMax": 130,
 "hfov": 360,
 "label": "20220924_194833_658",
 "id": "panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9",
 "thumbnailUrl": "media/panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_8C99CCD2_8319_D8A2_41D3_1763AFFE7AB6",
  "this.overlay_9496458D_84FA_6AFF_41D8_9885E62625AC",
  "this.popup_95CC98E0_84EA_DA25_41CE_2C434D9D9BE9",
  "this.overlay_946B96F6_8E78_7A82_41C4_8BFDBDA5B3ED",
  "this.popup_932C01FA_8E47_B68D_41DA_2333FA2A5357"
 ]
},
{
 "rotationY": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 6.04,
 "hideDuration": 500,
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_941056FE_84E7_F61D_41D0_E8887FE18F61_0_2.jpg",
    "width": 1024,
    "height": 771
   }
  ]
 },
 "pitch": 1.57,
 "yaw": -88.58,
 "id": "popup_941056FE_84E7_F61D_41D0_E8887FE18F61",
 "popupDistance": 100
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 99.09,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_82D76F87_8F3B_4756_41E1_1BF77A55D792",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -154.66,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_809C2841_8F44_C9CA_41C1_E8CD70F2C720",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "ImageResource",
 "id": "ImageResource_991C0108_88EA_74D4_41D1_1672653AE3E2",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_95CC98E0_84EA_DA25_41CE_2C434D9D9BE9_0_0.jpg",
   "width": 4080,
   "height": 3072
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_95CC98E0_84EA_DA25_41CE_2C434D9D9BE9_0_1.jpg",
   "width": 2048,
   "height": 1542
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_95CC98E0_84EA_DA25_41CE_2C434D9D9BE9_0_2.jpg",
   "width": 1024,
   "height": 771
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_95CC98E0_84EA_DA25_41CE_2C434D9D9BE9_0_3.jpg",
   "width": 512,
   "height": 385
  }
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -179.07,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_80C0767C_8F44_B9BA_41DC_872CDA5FFAC1",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 9.91,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_82BB1DF1_8F3B_4ACA_41AE_C502142266DE",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_8FC9D75B_831A_E9A1_4196_45134C057301_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -69.14,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_821E8C4B_8F3B_49DE_41C1_D6707407D2F5",
 "automaticZoomSpeed": 10
},
{
 "class": "ImageResource",
 "id": "ImageResource_99039118_88EA_74F4_41BA_0157E4DED1F4",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_9424979F_84EE_761B_41A5_CA2074F40C71_0_0.jpg",
   "width": 4080,
   "height": 3072
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_9424979F_84EE_761B_41A5_CA2074F40C71_0_1.jpg",
   "width": 2048,
   "height": 1542
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_9424979F_84EE_761B_41A5_CA2074F40C71_0_2.jpg",
   "width": 1024,
   "height": 771
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_9424979F_84EE_761B_41A5_CA2074F40C71_0_3.jpg",
   "width": 512,
   "height": 385
  }
 ]
},
{
 "rotationY": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 5.2,
 "hideDuration": 500,
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_958305BA_84DE_6A25_41D2_D0594DD18ED0_0_2.jpg",
    "width": 1024,
    "height": 771
   }
  ]
 },
 "pitch": -1.4,
 "yaw": 53.02,
 "id": "popup_958305BA_84DE_6A25_41D2_D0594DD18ED0",
 "popupDistance": 100
},
{
 "class": "ImageResource",
 "id": "ImageResource_9901F128_88EA_74D3_4199_EC59552DC909",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_959A3FDA_8426_D665_41D4_57551BAB0C04_0_0.jpg",
   "width": 4080,
   "height": 3072
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_959A3FDA_8426_D665_41D4_57551BAB0C04_0_1.jpg",
   "width": 2048,
   "height": 1542
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_959A3FDA_8426_D665_41D4_57551BAB0C04_0_2.jpg",
   "width": 1024,
   "height": 771
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_959A3FDA_8426_D665_41D4_57551BAB0C04_0_3.jpg",
   "width": 512,
   "height": 385
  }
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -77.84,
   "backwardYaw": 91.71,
   "distance": 1,
   "panorama": "this.panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 110.86,
   "backwardYaw": -81.27,
   "distance": 1,
   "panorama": "this.panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B"
  }
 ],
 "hfovMin": "135%",
 "hfovMax": 130,
 "hfov": 360,
 "label": "20220924_194942_647",
 "id": "panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B",
 "thumbnailUrl": "media/panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_91659EC8_830F_F8AF_41C7_55B995C048A5",
  "this.overlay_9EDB1863_8316_5861_41DB_344037ECEB0F",
  "this.overlay_94193F2B_8439_B63A_41B6_8B27418B1960",
  "this.popup_95B380BC_843A_AA1D_41B0_87F00960FA9F"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 5.2,
   "backwardYaw": 14.2,
   "distance": 1,
   "panorama": "this.panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 32.45,
   "backwardYaw": 138.82,
   "distance": 1,
   "panorama": "this.panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148"
  }
 ],
 "hfovMin": "135%",
 "hfovMax": 130,
 "hfov": 360,
 "label": "20220924_200142_456",
 "id": "panorama_96D39BC1_843A_7E66_41C9_8186710E503B",
 "thumbnailUrl": "media/panorama_96D39BC1_843A_7E66_41C9_8186710E503B_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_96D39BC1_843A_7E66_41C9_8186710E503B_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_96D39BC1_843A_7E66_41C9_8186710E503B_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_96D39BC1_843A_7E66_41C9_8186710E503B_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_96D39BC1_843A_7E66_41C9_8186710E503B_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_96D39BC1_843A_7E66_41C9_8186710E503B_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_96D39BC1_843A_7E66_41C9_8186710E503B_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_96D39BC1_843A_7E66_41C9_8186710E503B_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_96D39BC1_843A_7E66_41C9_8186710E503B_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_96D39BC1_843A_7E66_41C9_8186710E503B_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_96D39BC1_843A_7E66_41C9_8186710E503B_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_96D39BC1_843A_7E66_41C9_8186710E503B_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_96D39BC1_843A_7E66_41C9_8186710E503B_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_96D39BC1_843A_7E66_41C9_8186710E503B_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_96D39BC1_843A_7E66_41C9_8186710E503B_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_96D39BC1_843A_7E66_41C9_8186710E503B_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_96D39BC1_843A_7E66_41C9_8186710E503B_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_96D39BC1_843A_7E66_41C9_8186710E503B_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_96D39BC1_843A_7E66_41C9_8186710E503B_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_96D39BC1_843A_7E66_41C9_8186710E503B_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_919B825F_842E_AE1B_41DA_80D8B62262AA",
  "this.overlay_986DE224_88DE_74DC_416D_68498BA54455"
 ]
},
{
 "rotationY": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 3.54,
 "hideDuration": 500,
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_9424979F_84EE_761B_41A5_CA2074F40C71_0_2.jpg",
    "width": 1024,
    "height": 771
   }
  ]
 },
 "pitch": 1.43,
 "yaw": -33.13,
 "id": "popup_9424979F_84EE_761B_41A5_CA2074F40C71",
 "popupDistance": 100
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "ImageResource",
 "id": "ImageResource_99040118_88EA_74F4_41DE_95F85E4B11AC",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_95B380BC_843A_AA1D_41B0_87F00960FA9F_0_0.jpg",
   "width": 4080,
   "height": 3072
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_95B380BC_843A_AA1D_41B0_87F00960FA9F_0_1.jpg",
   "width": 2048,
   "height": 1542
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_95B380BC_843A_AA1D_41B0_87F00960FA9F_0_2.jpg",
   "width": 1024,
   "height": 771
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_95B380BC_843A_AA1D_41B0_87F00960FA9F_0_3.jpg",
   "width": 512,
   "height": 385
  }
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -0.77,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8399D99C_8F3B_4B7A_41DC_2D22CC4DA6CC",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -178.89,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_812FF7F6_8F3B_46B6_41A5_B9E4AD170920",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -113.44,
   "backwardYaw": 31.57,
   "distance": 1,
   "panorama": "this.panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF"
  }
 ],
 "hfovMin": "135%",
 "hfovMax": 130,
 "hfov": 360,
 "label": "20220924_200455_136",
 "id": "panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE",
 "thumbnailUrl": "media/panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_9E608C4E_837E_FFA3_41DC_30BB51ED3964",
  "this.overlay_9EAC980E_837A_67A3_41E0_4507153B3DB9",
  "this.popup_998CBC26_837B_FFE3_41C3_EC8DC3AF560A",
  "this.overlay_94CD6065_8427_AA2F_41DB_78DF63BACC30",
  "this.popup_95E5C3FC_8427_AE1D_41D5_DBE9A96E57A2"
 ]
},
{
 "rotationY": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 14.36,
 "hideDuration": 500,
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_95CC98E0_84EA_DA25_41CE_2C434D9D9BE9_0_2.jpg",
    "width": 1024,
    "height": 771
   }
  ]
 },
 "pitch": 9.92,
 "yaw": 13.28,
 "id": "popup_95CC98E0_84EA_DA25_41CE_2C434D9D9BE9",
 "popupDistance": 100
},
{
 "rotationY": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 6.19,
 "hideDuration": 500,
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_96CCEE3A_84EA_B61A_41DF_F5C727B972CC_0_2.jpg",
    "width": 1024,
    "height": 771
   }
  ]
 },
 "pitch": -0.54,
 "yaw": 33.94,
 "id": "popup_96CCEE3A_84EA_B61A_41DF_F5C727B972CC",
 "popupDistance": 100
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_96D39BC1_843A_7E66_41C9_8186710E503B_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -4.63,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_83CA2B61_8F3B_4FCA_41CB_1093B693C694",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 0.93,
   "backwardYaw": 8.06,
   "distance": 1,
   "panorama": "this.panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -81.27,
   "backwardYaw": 110.86,
   "distance": 1,
   "panorama": "this.panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 149.45,
   "backwardYaw": -7.33,
   "distance": 1,
   "panorama": "this.panorama_8E107CBE_8316_38E3_41C2_E75776DA228D"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -177.43,
   "backwardYaw": 0.91,
   "distance": 1,
   "panorama": "this.panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91"
  }
 ],
 "hfovMin": "135%",
 "hfovMax": 130,
 "hfov": 360,
 "label": "20220924_195101_018",
 "id": "panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B",
 "thumbnailUrl": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_8DFAA3B8_830A_68EF_41CD_839851AB4F77",
  "this.overlay_9276FB31_830E_F9FE_41C9_7AAF98FB0A95",
  "this.overlay_94421384_831A_28A6_41A7_963184D23B9D",
  "this.overlay_8D98C5D3_831E_68A1_41D0_056881AF7812",
  "this.overlay_9479B2AB_84EE_EE3A_41D3_85C4A5D55FA3",
  "this.popup_9424979F_84EE_761B_41A5_CA2074F40C71"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 49.63,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_80EEE766_8F44_C7D7_41D3_9332E83C97AD",
 "automaticZoomSpeed": 10
},
{
 "class": "ImageResource",
 "id": "ImageResource_A1CA15F5_83FA_2861_41CC_79E8CC2B9E81",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_998CBC26_837B_FFE3_41C3_EC8DC3AF560A_0_0.jpg",
   "width": 1599,
   "height": 1200
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_998CBC26_837B_FFE3_41C3_EC8DC3AF560A_0_1.jpg",
   "width": 1024,
   "height": 768
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_998CBC26_837B_FFE3_41C3_EC8DC3AF560A_0_2.jpg",
   "width": 512,
   "height": 384
  }
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 172.11,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8111B883_8F3B_494E_41D9_63BEF5102999",
 "automaticZoomSpeed": 10
},
{
 "rotationY": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 8.66,
 "hideDuration": 500,
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_9472D6DF_84DB_B61A_41A1_4F01D515CD8E_0_2.jpg",
    "width": 1024,
    "height": 771
   }
  ]
 },
 "pitch": -1,
 "yaw": 120.29,
 "id": "popup_9472D6DF_84DB_B61A_41A1_4F01D515CD8E",
 "popupDistance": 100
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -171.94,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_822A8C0D_8F3B_495A_4188_16161FF64305",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -80.91,
   "backwardYaw": 89.6,
   "distance": 1,
   "panorama": "this.panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 8.06,
   "backwardYaw": 0.93,
   "distance": 1,
   "panorama": "this.panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B"
  }
 ],
 "hfovMin": "135%",
 "hfovMax": 130,
 "hfov": 360,
 "label": "20220924_194857_352",
 "id": "panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8",
 "thumbnailUrl": "media/panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_8DB0CC06_831E_5FA3_41D4_4AB13D5203C4",
  "this.overlay_9698FDA4_830A_78E7_4150_DE60ADBEAC42",
  "this.overlay_9585024A_84FA_AE65_41DD_AE42C9B582A3",
  "this.popup_94ED5FC1_84EB_F667_41E0_7CCF158F2CEF"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -179.81,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_813E47A8_8F3B_475A_41B9_235F49181D08",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 104.61,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_82F35F1A_8F3B_477E_41DE_431E68D39807",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -7.33,
   "backwardYaw": 149.45,
   "distance": 1,
   "panorama": "this.panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 25.34,
   "backwardYaw": -95.05,
   "distance": 1,
   "panorama": "this.panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9"
  }
 ],
 "hfovMin": "135%",
 "hfovMax": 130,
 "hfov": 360,
 "label": "20220924_195404_934",
 "id": "panorama_8E107CBE_8316_38E3_41C2_E75776DA228D",
 "thumbnailUrl": "media/panorama_8E107CBE_8316_38E3_41C2_E75776DA228D_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E107CBE_8316_38E3_41C2_E75776DA228D_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8E107CBE_8316_38E3_41C2_E75776DA228D_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E107CBE_8316_38E3_41C2_E75776DA228D_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E107CBE_8316_38E3_41C2_E75776DA228D_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8E107CBE_8316_38E3_41C2_E75776DA228D_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E107CBE_8316_38E3_41C2_E75776DA228D_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E107CBE_8316_38E3_41C2_E75776DA228D_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8E107CBE_8316_38E3_41C2_E75776DA228D_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E107CBE_8316_38E3_41C2_E75776DA228D_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E107CBE_8316_38E3_41C2_E75776DA228D_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8E107CBE_8316_38E3_41C2_E75776DA228D_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E107CBE_8316_38E3_41C2_E75776DA228D_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E107CBE_8316_38E3_41C2_E75776DA228D_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8E107CBE_8316_38E3_41C2_E75776DA228D_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E107CBE_8316_38E3_41C2_E75776DA228D_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8E107CBE_8316_38E3_41C2_E75776DA228D_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8E107CBE_8316_38E3_41C2_E75776DA228D_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8E107CBE_8316_38E3_41C2_E75776DA228D_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8E107CBE_8316_38E3_41C2_E75776DA228D_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_90B8BEAE_8E48_CA82_41DE_1037F8E0C36A",
  "this.overlay_ACBDF29C_8EBB_DA86_41D9_5F3E306A9154"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 84.59,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_80FD77B4_8F44_C74B_41A2_E534B0249CE1",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 102.27,
   "backwardYaw": -130.37,
   "distance": 1,
   "panorama": "this.panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 157.14,
   "backwardYaw": -95.41,
   "distance": 1,
   "panorama": "this.panorama_952174CE_845F_AA7D_4197_5A4479805A36"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 7.82,
   "backwardYaw": -45.27,
   "distance": 1,
   "panorama": "this.panorama_96D311F8_8439_AA25_41D8_794F1424CD6C"
  }
 ],
 "hfovMin": "135%",
 "hfovMax": 130,
 "hfov": 360,
 "label": "20220924_200243_964",
 "id": "panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C",
 "thumbnailUrl": "media/panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_97BAB650_842A_7665_41B3_698B0812037B",
  "this.overlay_98EE00A7_88EE_35DC_41D0_DBD71F5B96B1",
  "this.overlay_91E77166_8EC7_F785_41B0_FF19ABEB6535"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -171.19,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_81568033_8F44_B94E_41C9_5E03275A011C",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -95.05,
   "backwardYaw": 25.34,
   "distance": 1,
   "panorama": "this.panorama_8E107CBE_8316_38E3_41C2_E75776DA228D"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -171.72,
   "backwardYaw": -2.94,
   "distance": 1,
   "panorama": "this.panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE"
  }
 ],
 "hfovMin": "135%",
 "hfovMax": 130,
 "hfov": 360,
 "label": "20220924_195250_878",
 "id": "panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9",
 "thumbnailUrl": "media/panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_93E9A7CF_833A_28A1_41C3_E1EF628E8217",
  "this.overlay_945F1682_84DA_56E5_41D0_78FA20E7D708",
  "this.popup_9472D6DF_84DB_B61A_41A1_4F01D515CD8E",
  "this.overlay_90769B22_8EB8_4B82_41C4_0C0249B6A7A7"
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 172.67,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_82108C8A_8F3B_495E_41CA_03A9DBBA062D",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -1.99,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_810370DF_8F44_BAF6_41DB_5BCCAAA3B266",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -90.4,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8031F62E_8F44_B956_41CB_4DBE136DD440",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9_camera",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 104.61,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_82E3FF58_8F3B_47FB_41CF_06F553DD328C",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 98.73,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8066F4B7_8F44_BAB6_41D0_8F67509578B5",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 33.55,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_81FCA2C3_8F44_BECE_41D7_E75684B1AA5A",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 8.47,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_83D4CB22_8F3B_4F4F_41B2_BBEE39BD96DB",
 "automaticZoomSpeed": 10
},
{
 "rotationY": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 9.19,
 "hideDuration": 500,
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_959A3FDA_8426_D665_41D4_57551BAB0C04_0_2.jpg",
    "width": 1024,
    "height": 771
   }
  ]
 },
 "pitch": 4.32,
 "yaw": 151.91,
 "id": "popup_959A3FDA_8426_D665_41D4_57551BAB0C04",
 "popupDistance": 100
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 153.81,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_82342BCE_8F3B_4ED7_41E0_F9ED4F0C88E9",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 66.56,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_82AC9E20_8F3B_494A_41E1_62E3453DA70B",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 105.02,
   "backwardYaw": -0.53,
   "distance": 1,
   "panorama": "this.panorama_98A3306A_88DB_F554_41DB_7A7EC97BD228"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -101.32,
   "backwardYaw": 14.21,
   "distance": 1,
   "panorama": "this.panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -75.39,
   "backwardYaw": -162.94,
   "distance": 1,
   "panorama": "this.panorama_98A603D9_88DB_DB74_41DF_0575075AA24B"
  }
 ],
 "hfovMin": "135%",
 "hfovMax": 130,
 "hfov": 360,
 "label": "20220924_195543_031",
 "id": "panorama_98A32D73_88DB_CF34_41D3_B50121ED672C",
 "thumbnailUrl": "media/panorama_98A32D73_88DB_CF34_41D3_B50121ED672C_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A32D73_88DB_CF34_41D3_B50121ED672C_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_98A32D73_88DB_CF34_41D3_B50121ED672C_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_98A32D73_88DB_CF34_41D3_B50121ED672C_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A32D73_88DB_CF34_41D3_B50121ED672C_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_98A32D73_88DB_CF34_41D3_B50121ED672C_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_98A32D73_88DB_CF34_41D3_B50121ED672C_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A32D73_88DB_CF34_41D3_B50121ED672C_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_98A32D73_88DB_CF34_41D3_B50121ED672C_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_98A32D73_88DB_CF34_41D3_B50121ED672C_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A32D73_88DB_CF34_41D3_B50121ED672C_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_98A32D73_88DB_CF34_41D3_B50121ED672C_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_98A32D73_88DB_CF34_41D3_B50121ED672C_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A32D73_88DB_CF34_41D3_B50121ED672C_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_98A32D73_88DB_CF34_41D3_B50121ED672C_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_98A32D73_88DB_CF34_41D3_B50121ED672C_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A32D73_88DB_CF34_41D3_B50121ED672C_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_98A32D73_88DB_CF34_41D3_B50121ED672C_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_98A32D73_88DB_CF34_41D3_B50121ED672C_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_98A32D73_88DB_CF34_41D3_B50121ED672C_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_997D06AE_8B26_FD2C_41DA_8EF8AF7C85D9",
  "this.overlay_9ECFC5C8_8B2A_5F54_41B1_3116589886F4",
  "this.overlay_9D39AA30_8B2F_F534_41A4_A738FD6E4724"
 ]
},
{
 "rotationY": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 5.74,
 "hideDuration": 500,
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_95950CC8_845B_DA65_41C0_F5E4D5943128_0_1.jpg",
    "width": 1024,
    "height": 768
   }
  ]
 },
 "pitch": 5.91,
 "yaw": -85.15,
 "id": "popup_95950CC8_845B_DA65_41C0_F5E4D5943128",
 "popupDistance": 100
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 78.68,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8166D062_8F44_B9CE_41C0_ABC093A6261E",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D_camera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -7.89,
   "backwardYaw": -165.39,
   "distance": 1,
   "panorama": "this.panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -104.03,
   "backwardYaw": -49.09,
   "distance": 1,
   "panorama": "this.panorama_977AAA32_843A_BE25_41A0_4F2B758AA422"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -45.27,
   "backwardYaw": 7.82,
   "distance": 1,
   "panorama": "this.panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C"
  }
 ],
 "hfovMin": "135%",
 "hfovMax": 130,
 "hfov": 360,
 "label": "20220924_200226_063",
 "id": "panorama_96D311F8_8439_AA25_41D8_794F1424CD6C",
 "thumbnailUrl": "media/panorama_96D311F8_8439_AA25_41D8_794F1424CD6C_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_96D311F8_8439_AA25_41D8_794F1424CD6C_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_96D311F8_8439_AA25_41D8_794F1424CD6C_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_96D311F8_8439_AA25_41D8_794F1424CD6C_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_96D311F8_8439_AA25_41D8_794F1424CD6C_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_96D311F8_8439_AA25_41D8_794F1424CD6C_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_96D311F8_8439_AA25_41D8_794F1424CD6C_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_96D311F8_8439_AA25_41D8_794F1424CD6C_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_96D311F8_8439_AA25_41D8_794F1424CD6C_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_96D311F8_8439_AA25_41D8_794F1424CD6C_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_96D311F8_8439_AA25_41D8_794F1424CD6C_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_96D311F8_8439_AA25_41D8_794F1424CD6C_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_96D311F8_8439_AA25_41D8_794F1424CD6C_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_96D311F8_8439_AA25_41D8_794F1424CD6C_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_96D311F8_8439_AA25_41D8_794F1424CD6C_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_96D311F8_8439_AA25_41D8_794F1424CD6C_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_96D311F8_8439_AA25_41D8_794F1424CD6C_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_96D311F8_8439_AA25_41D8_794F1424CD6C_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_96D311F8_8439_AA25_41D8_794F1424CD6C_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_96D311F8_8439_AA25_41D8_794F1424CD6C_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_90AE27D5_8429_D66E_41E0_1E33CAF44982",
  "this.overlay_99C744B2_88FA_3D34_41D5_E3A287435216",
  "this.overlay_99CE9E03_88E6_4CD5_41D4_6C303D5772FC"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -165.8,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8256BD74_8F3B_4BCA_41D6_DE051A42A4A3",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 8.28,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8130517B_8F44_BBBE_41DF_06B2F266102A",
 "automaticZoomSpeed": 10
},
{
 "rotationY": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 14.42,
 "hideDuration": 500,
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_998CBC26_837B_FFE3_41C3_EC8DC3AF560A_0_1.jpg",
    "width": 1024,
    "height": 768
   }
  ]
 },
 "pitch": 8.52,
 "yaw": 7.17,
 "id": "popup_998CBC26_837B_FFE3_41C3_EC8DC3AF560A",
 "popupDistance": 100
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 0.19,
   "backwardYaw": -3.8,
   "distance": 1,
   "panorama": "this.panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 179.23,
   "backwardYaw": 2.37,
   "distance": 1,
   "panorama": "this.panorama_952174CE_845F_AA7D_4197_5A4479805A36"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 75.2,
   "backwardYaw": 159.75,
   "distance": 1,
   "panorama": "this.panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -130.37,
   "backwardYaw": 102.27,
   "distance": 1,
   "panorama": "this.panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C"
  }
 ],
 "hfovMin": "135%",
 "hfovMax": 130,
 "hfov": 360,
 "label": "20220924_200347_680",
 "id": "panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45",
 "thumbnailUrl": "media/panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_951F6983_843E_7AEB_419F_D3A04A36B9A3",
  "this.overlay_972C6E21_843E_5626_41D5_DD12A0A2F666",
  "this.overlay_947F8324_8E49_DB85_41DF_5BEB919B812E",
  "this.overlay_AF934478_8EC8_5D8E_41A0_081CB614E3E0"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_952174CE_845F_AA7D_4197_5A4479805A36_camera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 2.37,
   "backwardYaw": 179.23,
   "distance": 1,
   "panorama": "this.panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -95.41,
   "backwardYaw": 157.14,
   "distance": 1,
   "panorama": "this.panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C"
  }
 ],
 "hfovMin": "135%",
 "hfovMax": 130,
 "hfov": 360,
 "label": "20220924_200301_218",
 "id": "panorama_952174CE_845F_AA7D_4197_5A4479805A36",
 "thumbnailUrl": "media/panorama_952174CE_845F_AA7D_4197_5A4479805A36_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_952174CE_845F_AA7D_4197_5A4479805A36_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_952174CE_845F_AA7D_4197_5A4479805A36_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_952174CE_845F_AA7D_4197_5A4479805A36_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_952174CE_845F_AA7D_4197_5A4479805A36_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_952174CE_845F_AA7D_4197_5A4479805A36_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_952174CE_845F_AA7D_4197_5A4479805A36_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_952174CE_845F_AA7D_4197_5A4479805A36_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_952174CE_845F_AA7D_4197_5A4479805A36_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_952174CE_845F_AA7D_4197_5A4479805A36_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_952174CE_845F_AA7D_4197_5A4479805A36_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_952174CE_845F_AA7D_4197_5A4479805A36_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_952174CE_845F_AA7D_4197_5A4479805A36_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_952174CE_845F_AA7D_4197_5A4479805A36_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_952174CE_845F_AA7D_4197_5A4479805A36_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_952174CE_845F_AA7D_4197_5A4479805A36_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_952174CE_845F_AA7D_4197_5A4479805A36_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_952174CE_845F_AA7D_4197_5A4479805A36_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_952174CE_845F_AA7D_4197_5A4479805A36_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_952174CE_845F_AA7D_4197_5A4479805A36_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_97746CFD_843E_7A1F_41CF_30FBEB717884",
  "this.overlay_968E7734_843E_B62D_41E0_837FF5911C13",
  "this.popup_96593F33_843E_562B_41D0_385A5AB13213",
  "this.overlay_9658FA76_843A_5E2D_41BD_FEB75CB8EBD4"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -171.53,
   "backwardYaw": 178.01,
   "distance": 1,
   "panorama": "this.panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -26.19,
   "backwardYaw": 138.16,
   "distance": 1,
   "panorama": "this.panorama_8FC9D75B_831A_E9A1_4196_45134C057301"
  }
 ],
 "hfovMin": "135%",
 "hfovMax": 130,
 "hfov": 360,
 "label": "20220924_195231_019",
 "id": "panorama_8F2688FE_8316_D862_41DF_AC8539E02C41",
 "thumbnailUrl": "media/panorama_8F2688FE_8316_D862_41DF_AC8539E02C41_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F2688FE_8316_D862_41DF_AC8539E02C41_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8F2688FE_8316_D862_41DF_AC8539E02C41_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8F2688FE_8316_D862_41DF_AC8539E02C41_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F2688FE_8316_D862_41DF_AC8539E02C41_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8F2688FE_8316_D862_41DF_AC8539E02C41_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8F2688FE_8316_D862_41DF_AC8539E02C41_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F2688FE_8316_D862_41DF_AC8539E02C41_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8F2688FE_8316_D862_41DF_AC8539E02C41_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8F2688FE_8316_D862_41DF_AC8539E02C41_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F2688FE_8316_D862_41DF_AC8539E02C41_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8F2688FE_8316_D862_41DF_AC8539E02C41_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8F2688FE_8316_D862_41DF_AC8539E02C41_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F2688FE_8316_D862_41DF_AC8539E02C41_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8F2688FE_8316_D862_41DF_AC8539E02C41_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8F2688FE_8316_D862_41DF_AC8539E02C41_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F2688FE_8316_D862_41DF_AC8539E02C41_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8F2688FE_8316_D862_41DF_AC8539E02C41_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8F2688FE_8316_D862_41DF_AC8539E02C41_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8F2688FE_8316_D862_41DF_AC8539E02C41_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_9668FDEE_830E_5863_41CC_CE29ECB4842E",
  "this.overlay_99B1FE61_8376_3861_41D7_A4A9EA47A255",
  "this.overlay_94B756C0_84E6_7666_4193_67167020E744",
  "this.popup_941056FE_84E7_F61D_41D0_E8887FE18F61"
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 14.61,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_81CF51F8_8F44_BABA_413F_60F2C2668380",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 1.11,
   "backwardYaw": 175.37,
   "distance": 1,
   "panorama": "this.panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -83.16,
   "backwardYaw": 167.12,
   "distance": 1,
   "panorama": "this.panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 138.16,
   "backwardYaw": -26.19,
   "distance": 1,
   "panorama": "this.panorama_8F2688FE_8316_D862_41DF_AC8539E02C41"
  }
 ],
 "hfovMin": "135%",
 "hfovMax": 130,
 "hfov": 360,
 "label": "20220924_200410_458",
 "id": "panorama_8FC9D75B_831A_E9A1_4196_45134C057301",
 "thumbnailUrl": "media/panorama_8FC9D75B_831A_E9A1_4196_45134C057301_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8FC9D75B_831A_E9A1_4196_45134C057301_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8FC9D75B_831A_E9A1_4196_45134C057301_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8FC9D75B_831A_E9A1_4196_45134C057301_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8FC9D75B_831A_E9A1_4196_45134C057301_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8FC9D75B_831A_E9A1_4196_45134C057301_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8FC9D75B_831A_E9A1_4196_45134C057301_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8FC9D75B_831A_E9A1_4196_45134C057301_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8FC9D75B_831A_E9A1_4196_45134C057301_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8FC9D75B_831A_E9A1_4196_45134C057301_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8FC9D75B_831A_E9A1_4196_45134C057301_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8FC9D75B_831A_E9A1_4196_45134C057301_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8FC9D75B_831A_E9A1_4196_45134C057301_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8FC9D75B_831A_E9A1_4196_45134C057301_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8FC9D75B_831A_E9A1_4196_45134C057301_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8FC9D75B_831A_E9A1_4196_45134C057301_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8FC9D75B_831A_E9A1_4196_45134C057301_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8FC9D75B_831A_E9A1_4196_45134C057301_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8FC9D75B_831A_E9A1_4196_45134C057301_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8FC9D75B_831A_E9A1_4196_45134C057301_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_9B0E735D_8376_69A1_41D9_E0E662CF6BD3",
  "this.overlay_99AFDE47_837A_3BA2_41BC_85A65313E4D6",
  "this.overlay_9AE32E7A_837A_5862_41E0_059B72F1A1C9"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 91.71,
   "backwardYaw": -77.84,
   "distance": 1,
   "panorama": "this.panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": -88.3,
   "backwardYaw": 88.45,
   "distance": 1,
   "panorama": "this.panorama_8F637E4E_8316_3BA2_41D5_288E1A348353"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 140.86,
   "backwardYaw": -43.27,
   "distance": 1,
   "panorama": "this.panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91"
  }
 ],
 "hfovMin": "135%",
 "hfovMax": 130,
 "hfov": 360,
 "label": "20220924_195011_854",
 "id": "panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1",
 "thumbnailUrl": "media/panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_9D2911B5_83F6_28E6_41DD_CF0FB4359403",
  "this.overlay_A1A0513D_83FA_29E6_41D1_803C16F09EC4",
  "this.overlay_A1B25591_83F9_E8A1_419A_C4351D5BE9B4",
  "this.overlay_9466D3FA_84E9_AE25_41D0_5245D750B4D3",
  "this.popup_96CCEE3A_84EA_B61A_41DF_F5C727B972CC"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -170.09,
   "backwardYaw": -146.45,
   "distance": 1,
   "panorama": "this.panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 3.16,
   "backwardYaw": 177.88,
   "distance": 1,
   "panorama": "this.panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE"
  }
 ],
 "hfovMin": "135%",
 "hfovMax": 130,
 "hfov": 360,
 "label": "20220924_195342_428",
 "id": "panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5",
 "thumbnailUrl": "media/panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_93BBAF0C_833A_39A6_4189_0D1FA345F6E2",
  "this.overlay_92700DDE_8336_58A3_41DD_59EEB07C8162",
  "this.overlay_979D6A7F_8426_7E1A_41C4_07B1E79B53BA",
  "this.popup_959A3FDA_8426_D665_41D4_57551BAB0C04"
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -179.09,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8202ACB9_8F3B_4ABA_41DD_CC6FA52D4BD3",
 "automaticZoomSpeed": 10
},
{
 "class": "ImageResource",
 "id": "ImageResource_9904B118_88EA_74F4_41C6_9158ED6313C5",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_94ED5FC1_84EB_F667_41E0_7CCF158F2CEF_0_0.jpg",
   "width": 4080,
   "height": 3072
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_94ED5FC1_84EB_F667_41E0_7CCF158F2CEF_0_1.jpg",
   "width": 2048,
   "height": 1542
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_94ED5FC1_84EB_F667_41E0_7CCF158F2CEF_0_2.jpg",
   "width": 1024,
   "height": 771
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_94ED5FC1_84EB_F667_41E0_7CCF158F2CEF_0_3.jpg",
   "width": 512,
   "height": 385
  }
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -39.27,
   "backwardYaw": 3.89,
   "distance": 1,
   "panorama": "this.panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 63.82,
   "backwardYaw": 3.89,
   "distance": 1,
   "panorama": "this.panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 94.79,
   "backwardYaw": 8.81,
   "distance": 1,
   "panorama": "this.panorama_98A31898_88DB_D5F4_416E_6076E9CB6DC4"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 14.21,
   "backwardYaw": -101.32,
   "distance": 1,
   "panorama": "this.panorama_98A32D73_88DB_CF34_41D3_B50121ED672C"
  }
 ],
 "hfovMin": "135%",
 "hfovMax": 130,
 "hfov": 360,
 "label": "20220924_195656_668",
 "id": "panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8",
 "thumbnailUrl": "media/panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_94E8FA88_8E58_CA8E_41E1_7C03BFDF01E2",
  "this.overlay_9574A477_8E59_FD82_41CC_8BDB6DA0C0D3",
  "this.overlay_AEDCE13A_8E4B_D78D_41DC_1988F1BD3915",
  "this.overlay_9317F9A2_8E48_D6BD_4191_BE04D166CD97"
 ]
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -146.45,
   "backwardYaw": -170.09,
   "distance": 1,
   "panorama": "this.panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 31.57,
   "backwardYaw": -113.44,
   "distance": 1,
   "panorama": "this.panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE"
  },
  {
   "class": "AdjacentPanorama",
   "yaw": 167.12,
   "backwardYaw": -83.16,
   "distance": 1,
   "panorama": "this.panorama_8FC9D75B_831A_E9A1_4196_45134C057301"
  }
 ],
 "hfovMin": "135%",
 "hfovMax": 130,
 "hfov": 360,
 "label": "20220924_200433_335",
 "id": "panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF",
 "thumbnailUrl": "media/panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_9B3ABF1A_830A_79A2_41D4_0F95A9C883B8",
  "this.overlay_9B807B33_830A_59E2_41CD_A46BDAFC5D94",
  "this.overlay_AE402DE3_8EB8_4E82_41D5_F9916B18B644"
 ]
},
{
 "class": "ImageResource",
 "id": "ImageResource_9900C128_88EA_74D3_41B3_873551BB7AF1",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_96593F33_843E_562B_41D0_385A5AB13213_0_0.jpg",
   "width": 1599,
   "height": 1200
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_96593F33_843E_562B_41D0_385A5AB13213_0_1.jpg",
   "width": 1024,
   "height": 768
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_96593F33_843E_562B_41D0_385A5AB13213_0_2.jpg",
   "width": 512,
   "height": 384
  }
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -22.86,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8392A9DA_8F3B_4AFF_41D5_F1536C3E3FA0",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -176.84,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8121A14C_8F44_BBDA_41D7_E28AF6E63986",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -172.18,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_81EE0265_8F44_B9D5_41C3_3CF767F611B2",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -85.21,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_81219844_8F3B_49CA_41C6_9DA946084C18",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_8F2688FE_8316_D862_41DF_AC8539E02C41_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -2.12,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_818BA302_8F44_BF4E_41C1_1151F730CAA6",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -77.73,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8049442A_8F44_B95F_41E1_074AF398619C",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 176.2,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_819A7350_8F44_BFCA_41D3_4940351B42C7",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -88.29,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_80580479_8F44_B9BA_41D3_A7D7B092D848",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 2.57,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_83E9BAB5_8F3B_494A_41D8_FF2562174593",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_8E107CBE_8316_38E3_41C2_E75776DA228D_camera",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -176.11,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8137BFF5_8F3B_46CA_41BF_0B78AF413914",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -148.43,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8022B5EF_8F44_BAD5_41DB_2DE2869FDF52",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -74.98,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_817530A0_8F44_B94B_41A9_4B21E7BE4257",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 17.06,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_801405A1_8F44_BB4D_41E1_37B83DC255DE",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -20.25,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_81B9B3EC_8F44_BEDA_41C5_47A303A37A42",
 "automaticZoomSpeed": 10
},
{
 "rotationY": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 6.62,
 "hideDuration": 500,
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_932C01FA_8E47_B68D_41DA_2333FA2A5357_0_1.jpeg",
    "width": 1024,
    "height": 770
   }
  ]
 },
 "pitch": 1.96,
 "yaw": -89.83,
 "id": "popup_932C01FA_8E47_B68D_41DA_2333FA2A5357",
 "popupDistance": 100
},
{
 "rotationY": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 4.03,
 "hideDuration": 500,
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_95B380BC_843A_AA1D_41B0_87F00960FA9F_0_2.jpg",
    "width": 1024,
    "height": 771
   }
  ]
 },
 "pitch": 4.09,
 "yaw": -46.07,
 "id": "popup_95B380BC_843A_AA1D_41B0_87F00960FA9F",
 "popupDistance": 100
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -177.63,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_81AAD39E_8F44_BF76_41D9_873FB704AADB",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -30.55,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_82747CF7_8F3B_4AB6_41D1_44186AC9264F",
 "automaticZoomSpeed": 10
},
{
 "class": "ImageResource",
 "id": "ImageResource_99007128_88EA_74D3_41DE_03A0F1D86789",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_95950CC8_845B_DA65_41C0_F5E4D5943128_0_0.jpg",
   "width": 1599,
   "height": 1200
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_95950CC8_845B_DA65_41C0_F5E4D5943128_0_1.jpg",
   "width": 1024,
   "height": 768
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_95950CC8_845B_DA65_41C0_F5E4D5943128_0_2.jpg",
   "width": 512,
   "height": 384
  }
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91_camera",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148_camera",
 "automaticZoomSpeed": 10
},
{
 "class": "ImageResource",
 "id": "ImageResource_99058118_88EA_74F4_41D5_0DA518A3C70A",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_958305BA_84DE_6A25_41D2_D0594DD18ED0_0_0.jpg",
   "width": 4080,
   "height": 3072
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_958305BA_84DE_6A25_41D2_D0594DD18ED0_0_1.jpg",
   "width": 2048,
   "height": 1542
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_958305BA_84DE_6A25_41D2_D0594DD18ED0_0_2.jpg",
   "width": 1024,
   "height": 771
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_958305BA_84DE_6A25_41D2_D0594DD18ED0_0_3.jpg",
   "width": 512,
   "height": 385
  }
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 96.84,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_829EAE5E_8F3B_49F7_41DF_328B94C613BB",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 130.91,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_81DF8237_8F44_B9B6_41D0_1247A0F98A1D",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C_camera",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -180,
  "pitch": -4.09
 },
 "class": "PanoramaCamera",
 "id": "panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_camera",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 140.73,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_80D076CA_8F44_C6DE_41BE_E48A84D76002",
 "automaticZoomSpeed": 10
},
{
 "class": "ImageResource",
 "id": "ImageResource_9902B118_88EA_74F4_41D3_E963423E8B4A",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_941056FE_84E7_F61D_41D0_E8887FE18F61_0_0.jpg",
   "width": 4080,
   "height": 3072
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_941056FE_84E7_F61D_41D0_E8887FE18F61_0_1.jpg",
   "width": 2048,
   "height": 1542
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_941056FE_84E7_F61D_41D0_E8887FE18F61_0_2.jpg",
   "width": 1024,
   "height": 771
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_941056FE_84E7_F61D_41D0_E8887FE18F61_0_3.jpg",
   "width": 512,
   "height": 385
  }
 ]
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 179.47,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_80759505_8F44_BB4A_41BA_69D9BDEF025A",
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 177.06,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_80AB2880_8F44_C94A_41D4_678940996094",
 "automaticZoomSpeed": 10
},
{
 "class": "ImageResource",
 "id": "ImageResource_9904F118_88EA_74F4_41BC_7FB698412E86",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_96CCEE3A_84EA_B61A_41DF_F5C727B972CC_0_0.jpg",
   "width": 4080,
   "height": 3072
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_96CCEE3A_84EA_B61A_41DF_F5C727B972CC_0_1.jpg",
   "width": 2048,
   "height": 1542
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_96CCEE3A_84EA_B61A_41DF_F5C727B972CC_0_2.jpg",
   "width": 1024,
   "height": 771
  },
  {
   "class": "ImageResourceLevel",
   "url": "media/popup_96CCEE3A_84EA_B61A_41DF_F5C727B972CC_0_3.jpg",
   "width": 512,
   "height": 385
  }
 ]
},
{
 "rotationY": 0,
 "popupMaxWidth": "95%",
 "showDuration": 500,
 "showEasing": "cubic_in",
 "hfov": 10.95,
 "hideDuration": 500,
 "rotationX": 0,
 "rotationZ": 0,
 "hideEasing": "cubic_out",
 "class": "PopupPanoramaOverlay",
 "popupMaxHeight": "95%",
 "image": {
  "class": "ImageResource",
  "levels": [
   {
    "class": "ImageResourceLevel",
    "url": "media/popup_95E5C3FC_8427_AE1D_41D5_DBE9A96E57A2_0_1.jpg",
    "width": 1024,
    "height": 768
   }
  ]
 },
 "pitch": 2.41,
 "yaw": 89.27,
 "id": "popup_95E5C3FC_8427_AE1D_41D5_DBE9A96E57A2",
 "popupDistance": 100
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45_camera",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -104.8,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_80DF0718_8F44_C77A_41DB_B65D190EE887",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 8.81,
   "backwardYaw": 94.79,
   "distance": 1,
   "panorama": "this.panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8"
  }
 ],
 "hfovMin": "135%",
 "hfovMax": 130,
 "hfov": 360,
 "label": "20220924_195602_730",
 "id": "panorama_98A31898_88DB_D5F4_416E_6076E9CB6DC4",
 "thumbnailUrl": "media/panorama_98A31898_88DB_D5F4_416E_6076E9CB6DC4_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A31898_88DB_D5F4_416E_6076E9CB6DC4_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_98A31898_88DB_D5F4_416E_6076E9CB6DC4_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_98A31898_88DB_D5F4_416E_6076E9CB6DC4_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A31898_88DB_D5F4_416E_6076E9CB6DC4_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_98A31898_88DB_D5F4_416E_6076E9CB6DC4_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_98A31898_88DB_D5F4_416E_6076E9CB6DC4_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A31898_88DB_D5F4_416E_6076E9CB6DC4_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_98A31898_88DB_D5F4_416E_6076E9CB6DC4_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_98A31898_88DB_D5F4_416E_6076E9CB6DC4_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A31898_88DB_D5F4_416E_6076E9CB6DC4_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_98A31898_88DB_D5F4_416E_6076E9CB6DC4_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_98A31898_88DB_D5F4_416E_6076E9CB6DC4_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A31898_88DB_D5F4_416E_6076E9CB6DC4_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_98A31898_88DB_D5F4_416E_6076E9CB6DC4_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_98A31898_88DB_D5F4_416E_6076E9CB6DC4_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A31898_88DB_D5F4_416E_6076E9CB6DC4_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_98A31898_88DB_D5F4_416E_6076E9CB6DC4_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_98A31898_88DB_D5F4_416E_6076E9CB6DC4_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_98A31898_88DB_D5F4_416E_6076E9CB6DC4_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_9250D689_8E48_5A8E_41E0_5F3F3FB28577"
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 102.16,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_83884A09_8F3B_495A_41A4_46951A2AFC97",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": 138.82,
   "backwardYaw": 32.45,
   "distance": 1,
   "panorama": "this.panorama_96D39BC1_843A_7E66_41C9_8186710E503B"
  }
 ],
 "hfovMin": "135%",
 "hfovMax": 130,
 "hfov": 360,
 "label": "20220924_195747_016",
 "id": "panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148",
 "thumbnailUrl": "media/panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_87205CBF_88DE_CD2D_419D_D82C845B2D75"
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE_camera",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 0,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_977AAA32_843A_BE25_41A0_4F2B758AA422_camera",
 "automaticZoomSpeed": 10
},
{
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "yaw": -0.53,
   "backwardYaw": 105.02,
   "distance": 1,
   "panorama": "this.panorama_98A32D73_88DB_CF34_41D3_B50121ED672C"
  }
 ],
 "hfovMin": "135%",
 "hfovMax": 130,
 "hfov": 360,
 "label": "20220924_195523_846",
 "id": "panorama_98A3306A_88DB_F554_41DB_7A7EC97BD228",
 "thumbnailUrl": "media/panorama_98A3306A_88DB_F554_41DB_7A7EC97BD228_t.jpg",
 "pitch": 0,
 "class": "Panorama",
 "partial": false,
 "frames": [
  {
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A3306A_88DB_F554_41DB_7A7EC97BD228_0/b/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_98A3306A_88DB_F554_41DB_7A7EC97BD228_0/b/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_98A3306A_88DB_F554_41DB_7A7EC97BD228_0/b/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A3306A_88DB_F554_41DB_7A7EC97BD228_0/f/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_98A3306A_88DB_F554_41DB_7A7EC97BD228_0/f/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_98A3306A_88DB_F554_41DB_7A7EC97BD228_0/f/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A3306A_88DB_F554_41DB_7A7EC97BD228_0/u/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_98A3306A_88DB_F554_41DB_7A7EC97BD228_0/u/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_98A3306A_88DB_F554_41DB_7A7EC97BD228_0/u/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A3306A_88DB_F554_41DB_7A7EC97BD228_0/r/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_98A3306A_88DB_F554_41DB_7A7EC97BD228_0/r/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_98A3306A_88DB_F554_41DB_7A7EC97BD228_0/r/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A3306A_88DB_F554_41DB_7A7EC97BD228_0/d/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_98A3306A_88DB_F554_41DB_7A7EC97BD228_0/d/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_98A3306A_88DB_F554_41DB_7A7EC97BD228_0/d/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_98A3306A_88DB_F554_41DB_7A7EC97BD228_0/l/0/{row}_{column}.jpg",
      "width": 2048,
      "rowCount": 4,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_98A3306A_88DB_F554_41DB_7A7EC97BD228_0/l/1/{row}_{column}.jpg",
      "width": 1024,
      "rowCount": 2,
      "tags": "ondemand",
      "class": "TiledImageResourceLevel",
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_98A3306A_88DB_F554_41DB_7A7EC97BD228_0/l/2/{row}_{column}.jpg",
      "width": 512,
      "rowCount": 1,
      "tags": [
       "ondemand",
       "preload"
      ],
      "class": "TiledImageResourceLevel",
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_98A3306A_88DB_F554_41DB_7A7EC97BD228_t.jpg"
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_9EB6FC17_8B2A_CCFC_41D6_41ACC88F31AB"
 ]
},
{
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": 136.73,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_83F41A77_8F3B_49B6_41DC_0943177CAF46",
 "automaticZoomSpeed": 10
},
{
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear"
   },
   {
    "class": "DistancePanoramaCameraMovement",
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out"
   }
  ],
  "class": "PanoramaCameraSequence"
 },
 "initialPosition": {
  "class": "PanoramaCameraPosition",
  "yaw": -41.18,
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_8248EDB3_8F3B_4B4E_41DA_75C711C0ECDC",
 "automaticZoomSpeed": 10
},
{
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipBorderColor": "#767676",
 "id": "MainViewer",
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipOpacity": 1,
 "toolTipFontSize": "1.11vmin",
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "width": "100%",
 "minHeight": 50,
 "toolTipTextShadowBlurRadius": 3,
 "playbackBarRight": 0,
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "playbackBarProgressBorderRadius": 0,
 "progressBarBorderRadius": 0,
 "toolTipFontWeight": "normal",
 "toolTipShadowColor": "#333333",
 "progressBarBorderSize": 0,
 "playbackBarBorderRadius": 0,
 "paddingRight": 0,
 "minWidth": 100,
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "height": "100%",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "toolTipShadowOpacity": 1,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "transitionMode": "blending",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "paddingLeft": 0,
 "toolTipShadowHorizontalLength": 0,
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "playbackBarHeadShadowColor": "#000000",
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipShadowVerticalLength": 0,
 "class": "ViewerArea",
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadowHorizontalLength": 0,
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "progressHeight": 10,
 "borderSize": 0,
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "playbackBarOpacity": 1,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "displayTooltipInTouchScreens": true,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarHeadHeight": 15,
 "paddingTop": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "paddingBottom": 0,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "playbackBarBottom": 5,
 "data": {
  "name": "Main Viewer"
 },
 "shadow": false,
 "playbackBarHeadOpacity": 1,
 "transitionDuration": 500,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#000000"
},
{
 "cursor": "hand",
 "maxHeight": 42,
 "maxWidth": 42,
 "class": "IconButton",
 "id": "IconButton_83265D94_8F3B_CB4A_41D2_C822B8F47CD2",
 "right": "4.89%",
 "width": 42,
 "borderSize": 0,
 "horizontalAlign": "center",
 "minHeight": 1,
 "transparencyActive": false,
 "bottom": "9.02%",
 "verticalAlign": "middle",
 "height": 42,
 "mode": "push",
 "backgroundOpacity": 0,
 "paddingRight": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 1,
 "paddingBottom": 0,
 "data": {
  "name": "IconButton15327"
 },
 "iconURL": "skin/IconButton_83265D94_8F3B_CB4A_41D2_C822B8F47CD2.png",
 "propagateClick": false,
 "shadow": false,
 "paddingLeft": 0
},
{
 "backgroundColorRatios": [
  0
 ],
 "class": "UIComponent",
 "id": "veilPopupPanorama",
 "left": 0,
 "backgroundColorDirection": "vertical",
 "right": 0,
 "borderSize": 0,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 350
 },
 "minHeight": 0,
 "top": 0,
 "bottom": 0,
 "backgroundColor": [
  "#000000"
 ],
 "backgroundOpacity": 0.55,
 "paddingRight": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 0,
 "paddingBottom": 0,
 "data": {
  "name": "UIComponent2556"
 },
 "visible": false,
 "propagateClick": false,
 "paddingLeft": 0,
 "shadow": false
},
{
 "backgroundColorRatios": [],
 "class": "ZoomImage",
 "id": "zoomImagePopupPanorama",
 "left": 0,
 "backgroundColorDirection": "vertical",
 "right": 0,
 "borderSize": 0,
 "minHeight": 0,
 "top": 0,
 "bottom": 0,
 "backgroundColor": [],
 "backgroundOpacity": 1,
 "paddingRight": 0,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 0,
 "paddingBottom": 0,
 "data": {
  "name": "ZoomImage2557"
 },
 "visible": false,
 "propagateClick": false,
 "scaleMode": "custom",
 "paddingLeft": 0,
 "shadow": false
},
{
 "textDecoration": "none",
 "paddingLeft": 5,
 "backgroundColorRatios": [
  0,
  0.1,
  1
 ],
 "rollOverIconColor": "#666666",
 "class": "CloseButton",
 "id": "closeButtonPopupPanorama",
 "layout": "horizontal",
 "backgroundColorDirection": "vertical",
 "shadowColor": "#000000",
 "fontFamily": "Arial",
 "right": 10,
 "fontColor": "#FFFFFF",
 "borderSize": 0,
 "showEffect": {
  "class": "FadeInEffect",
  "easing": "cubic_in_out",
  "duration": 350
 },
 "horizontalAlign": "center",
 "iconHeight": 20,
 "minHeight": 0,
 "iconColor": "#000000",
 "verticalAlign": "middle",
 "top": 10,
 "borderColor": "#000000",
 "shadowBlurRadius": 6,
 "backgroundColor": [
  "#DDDDDD",
  "#EEEEEE",
  "#FFFFFF"
 ],
 "mode": "push",
 "fontSize": "1.29vmin",
 "iconLineWidth": 5,
 "iconBeforeLabel": true,
 "backgroundOpacity": 0.3,
 "paddingRight": 5,
 "gap": 5,
 "paddingTop": 5,
 "label": "",
 "pressedIconColor": "#888888",
 "borderRadius": 0,
 "minWidth": 0,
 "paddingBottom": 5,
 "fontStyle": "normal",
 "iconWidth": 20,
 "shadowSpread": 1,
 "visible": false,
 "propagateClick": false,
 "data": {
  "name": "CloseButton2558"
 },
 "fontWeight": "normal",
 "cursor": "hand",
 "shadow": false
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45, this.camera_80DF0718_8F44_C77A_41DB_B65D190EE887); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 16.56,
   "image": "this.AnimatedImageResource_94F57485_8E58_5E86_41AF_00E1D544D2BF",
   "pitch": -19.73,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 159.75,
   "distance": 100
  }
 ],
 "id": "overlay_9B3EF73E_88DE_FB2C_41D1_B0F84D03E415",
 "data": {
  "label": "Circle Point 03b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 16.56,
   "yaw": 159.75,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D_1_HS_0_0_0_map.gif",
      "width": 35,
      "height": 16
     }
    ]
   },
   "pitch": -19.73
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8, this.camera_80D076CA_8F44_C6DE_41BE_E48A84D76002); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 25.88,
   "image": "this.AnimatedImageResource_94F53485_8E58_5E86_41D4_CAF83B99E073",
   "pitch": -13.3,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 3.89,
   "distance": 100
  }
 ],
 "id": "overlay_9B253687_88DA_5DDC_41DA_B885E27834D7",
 "data": {
  "label": "Arrow 05a"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 25.88,
   "yaw": 3.89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D_1_HS_1_0_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": -13.3
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_8FC9D75B_831A_E9A1_4196_45134C057301, this.camera_812FF7F6_8F3B_46B6_41A5_B9E4AD170920); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 11.89,
   "image": "this.AnimatedImageResource_94F27485_8E58_5E86_41D9_7E45A82FA254",
   "pitch": -13.95,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 175.37,
   "distance": 100
  }
 ],
 "id": "overlay_A35BAD66_830E_5862_41DD_724AF9B82C1A",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 11.89,
   "yaw": 175.37,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -13.95
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_95950CC8_845B_DA65_41C0_F5E4D5943128, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','paddingRight':5,'pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverBorderSize':0,'borderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'paddingBottom':5,'rollOverBackgroundColorDirection':'vertical','iconHeight':20,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'rollOverIconWidth':20,'iconColor':'#000000','paddingLeft':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_99007128_88EA_74D3_41DE_03A0F1D86789, null, null, null, null, false)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.74,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270_1_HS_1_0.png",
      "width": 97,
      "height": 75
     }
    ]
   },
   "pitch": 5.91,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -85.15
  }
 ],
 "id": "overlay_976A95BF_845A_6A1B_4190_A69985CB027E",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 5.74,
   "yaw": -85.15,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270_1_HS_1_0_0_map.gif",
      "width": 20,
      "height": 16
     }
    ]
   },
   "pitch": 5.91
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45, this.camera_813E47A8_8F3B_475A_41B9_235F49181D08); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 20.27,
   "image": "this.AnimatedImageResource_94F3E485_8E58_5E86_41D2_5CFDB2355891",
   "pitch": -15.55,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -3.8,
   "distance": 100
  }
 ],
 "id": "overlay_986D155C_88E6_5F6C_41CB_729A4A8BF4B6",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 20.27,
   "yaw": -3.8,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270_1_HS_2_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -15.55
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B, this.camera_83E9BAB5_8F3B_494A_41D8_FF2562174593); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 17.81,
   "image": "this.AnimatedImageResource_94FFB475_8E58_5D86_41E0_ED50E5DA88DF",
   "pitch": -11.45,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 0.91,
   "distance": 100
  }
 ],
 "id": "overlay_95898ACD_830E_58A1_41D0_7DC2BDF3582F",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 17.81,
   "yaw": 0.91,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -11.45
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_8F2688FE_8316_D862_41DF_AC8539E02C41, this.camera_83D4CB22_8F3B_4F4F_41B2_BBEE39BD96DB); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.34,
   "image": "this.AnimatedImageResource_94FF6475_8E58_5D86_41D1_55BE87642096",
   "pitch": -12.74,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 178.01,
   "distance": 100
  }
 ],
 "id": "overlay_95C13F70_830A_587E_41D4_9C34089C0BF4",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.34,
   "yaw": 178.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91_1_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -12.74
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1, this.camera_83DF6AF4_8F3B_4ECA_41DF_FFE88EEB65CB); this.mainPlayList.set('selectedIndex', 24)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 12.92,
   "image": "this.AnimatedImageResource_94FF1475_8E58_5D86_41BB_7172851F0E8A",
   "pitch": -18.18,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -43.27,
   "distance": 50
  }
 ],
 "id": "overlay_9C0E71A1_830A_68E1_41C6_3DD92D5EB57D",
 "data": {
  "label": "Arrow 05b Left-Up"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 12.92,
   "yaw": -43.27,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91_1_HS_2_0_0_map.gif",
      "width": 32,
      "height": 16
     }
    ]
   },
   "pitch": -18.18
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_98A32D73_88DB_CF34_41D3_B50121ED672C, this.camera_82E3FF58_8F3B_47FB_41CF_06F553DD328C); this.mainPlayList.set('selectedIndex', 13); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 19.14,
   "image": "this.AnimatedImageResource_94F7D485_8E58_5E86_41C0_49FB8C149A96",
   "pitch": -24.55,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -162.94,
   "distance": 100
  }
 ],
 "id": "overlay_9F2E7BCD_8B29_CB6C_41DF_D7B1DD87E978",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 19.14,
   "yaw": -162.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_98A603D9_88DB_DB74_41DF_0575075AA24B_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -24.55
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1, this.camera_82827EDB_8F3B_46FD_41C1_ABFD388D7E5C); this.mainPlayList.set('selectedIndex', 24)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 14.12,
   "image": "this.AnimatedImageResource_94CCE495_8E58_5E86_41DF_FE9C1BB45E40",
   "pitch": -26.59,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 88.45,
   "distance": 100
  }
 ],
 "id": "overlay_9877E7AD_8316_28E1_41DE_8CBF8C19A521",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.12,
   "yaw": 88.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8F637E4E_8316_3BA2_41D5_288E1A348353_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -26.59
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_958305BA_84DE_6A25_41D2_D0594DD18ED0, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','paddingRight':5,'pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverBorderSize':0,'borderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'paddingBottom':5,'rollOverBackgroundColorDirection':'vertical','iconHeight':20,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'rollOverIconWidth':20,'iconColor':'#000000','paddingLeft':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_99058118_88EA_74F4_41D5_0DA518A3C70A, null, null, null, null, false)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 5.2,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8F637E4E_8316_3BA2_41D5_288E1A348353_1_HS_1_0.png",
      "width": 87,
      "height": 67
     }
    ]
   },
   "pitch": -1.4,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 53.02
  }
 ],
 "id": "overlay_957F1025_84DE_AA2F_41DF_9490224C82BE",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 5.2,
   "yaw": 53.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8F637E4E_8316_3BA2_41D5_288E1A348353_1_HS_1_0_0_map.gif",
      "width": 20,
      "height": 16
     }
    ]
   },
   "pitch": -1.4
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_96D311F8_8439_AA25_41D8_794F1424CD6C, this.camera_81C0F1BA_8F44_BABE_41CC_A2F7ADEECE08); this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 15.81,
   "image": "this.AnimatedImageResource_94C94485_8E58_5E86_41E1_C38DA0B3C22F",
   "pitch": -49.91,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -49.09,
   "distance": 50
  }
 ],
 "id": "overlay_9CF65A3F_8426_5E1A_41B7_DC68EA72A2EB",
 "data": {
  "label": "Arrow 05b Left-Up"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 15.81,
   "yaw": -49.09,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_977AAA32_843A_BE25_41A0_4F2B758AA422_1_HS_0_0_0_map.gif",
      "width": 32,
      "height": 16
     }
    ]
   },
   "pitch": -49.91
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.mainPlayList.set('selectedIndex', 21)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 13.17,
   "image": "this.AnimatedImageResource_94CAE485_8E58_5E86_41CE_F988833E84F6",
   "pitch": -36.41,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -6.55,
   "distance": 100
  }
 ],
 "id": "overlay_93294F11_85D9_D7E7_41A3_EF92AEEF3AED",
 "data": {
  "label": "Arrow 05a"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 13.17,
   "yaw": -6.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_977AAA32_843A_BE25_41A0_4F2B758AA422_1_HS_1_0_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": -36.41
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9, this.camera_8130517B_8F44_BBBE_41DF_06B2F266102A); this.mainPlayList.set('selectedIndex', 25)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 16.97,
   "image": "this.AnimatedImageResource_94CD4495_8E58_5E86_41CC_F6BCC47715AD",
   "pitch": -12.06,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -2.94,
   "distance": 100
  }
 ],
 "id": "overlay_9305EDE0_8339_D89E_41D6_C407A1CCC52C",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 16.97,
   "yaw": -2.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -12.06
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5, this.camera_8121A14C_8F44_BBDA_41D7_E28AF6E63986); this.mainPlayList.set('selectedIndex', 27)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.13,
   "image": "this.AnimatedImageResource_94CEF495_8E58_5E86_41E1_02D5DCD2FD41",
   "pitch": -15.55,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 177.88,
   "distance": 100
  }
 ],
 "id": "overlay_903EE7F9_833E_686E_41D7_ADE5B0DC67DC",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.13,
   "yaw": 177.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE_1_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -15.55
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_96D39BC1_843A_7E66_41C9_8186710E503B, this.camera_810378C1_8F3B_4ACA_41E0_5B218E144B17); this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 19.76,
   "image": "this.AnimatedImageResource_94C80485_8E58_5E86_41DA_3F698607A234",
   "pitch": -20.05,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 14.2,
   "distance": 100
  }
 ],
 "id": "overlay_90B574D9_842E_EA67_41DD_5205EB757A7A",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 19.76,
   "yaw": 14.2,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -20.05
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_96D311F8_8439_AA25_41D8_794F1424CD6C, this.camera_8111B883_8F3B_494E_41D9_63BEF5102999); this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 19.96,
   "image": "this.AnimatedImageResource_94C9B485_8E58_5E86_41D1_96221250EB44",
   "pitch": -18.41,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -165.39,
   "distance": 100
  }
 ],
 "id": "overlay_90A6F78F_842E_56FB_41C9_CFF8FCD126F7",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 19.96,
   "yaw": -165.39,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC_1_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -18.41
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8, this.camera_82D76F87_8F3B_4756_41E1_1BF77A55D792); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 18.08,
   "image": "this.AnimatedImageResource_94FC3475_8E58_5D86_41D4_E8978D3AACE8",
   "pitch": -13.37,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 89.6,
   "distance": 100
  }
 ],
 "id": "overlay_8C99CCD2_8319_D8A2_41D3_1763AFFE7AB6",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 18.08,
   "yaw": 89.6,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -13.37
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_95CC98E0_84EA_DA25_41CE_2C434D9D9BE9, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','paddingRight':5,'pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverBorderSize':0,'borderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'paddingBottom':5,'rollOverBackgroundColorDirection':'vertical','iconHeight':20,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'rollOverIconWidth':20,'iconColor':'#000000','paddingLeft':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_991C0108_88EA_74D4_41D1_1672653AE3E2, null, null, null, null, false)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 14.36,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9_1_HS_1_0.png",
      "width": 246,
      "height": 207
     }
    ]
   },
   "pitch": 9.92,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 13.28
  }
 ],
 "id": "overlay_9496458D_84FA_6AFF_41D8_9885E62625AC",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.36,
   "yaw": 13.28,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9_1_HS_1_0_0_map.gif",
      "width": 19,
      "height": 16
     }
    ]
   },
   "pitch": 9.92
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_932C01FA_8E47_B68D_41DA_2333FA2A5357, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','paddingRight':5,'pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverBorderSize':0,'borderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'paddingBottom':5,'rollOverBackgroundColorDirection':'vertical','iconHeight':20,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'rollOverIconWidth':20,'iconColor':'#000000','paddingLeft':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_94D1D4B4_8E58_5E86_41E1_37510D940F72, null, null, null, null, false)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.62,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9_1_HS_2_0.png",
      "width": 111,
      "height": 129
     }
    ]
   },
   "pitch": 1.96,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -89.83
  }
 ],
 "id": "overlay_946B96F6_8E78_7A82_41C4_8BFDBDA5B3ED",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 6.62,
   "yaw": -89.83,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 18
     }
    ]
   },
   "pitch": 1.96
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B, this.camera_8066F4B7_8F44_BAB6_41D0_8F67509578B5); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 15.72,
   "image": "this.AnimatedImageResource_94CBE495_8E58_5E86_41C1_0A5CC8C4CD69",
   "pitch": -16.16,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 110.86,
   "distance": 50
  }
 ],
 "id": "overlay_91659EC8_830F_F8AF_41C7_55B995C048A5",
 "data": {
  "label": "Arrow 05b Right-Up"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 15.72,
   "yaw": 110.86,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B_1_HS_0_0_0_map.gif",
      "width": 32,
      "height": 16
     }
    ]
   },
   "pitch": -16.16
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1, this.camera_80580479_8F44_B9BA_41D3_A7D7B092D848); this.mainPlayList.set('selectedIndex', 24)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 20.19,
   "image": "this.AnimatedImageResource_94CB8495_8E58_5E86_41DE_9999C37A481F",
   "pitch": -16.36,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -77.84,
   "distance": 100
  }
 ],
 "id": "overlay_9EDB1863_8316_5861_41DB_344037ECEB0F",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 20.19,
   "yaw": -77.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B_1_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -16.36
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_95B380BC_843A_AA1D_41B0_87F00960FA9F, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','paddingRight':5,'pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverBorderSize':0,'borderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'paddingBottom':5,'rollOverBackgroundColorDirection':'vertical','iconHeight':20,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'rollOverIconWidth':20,'iconColor':'#000000','paddingLeft':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_99040118_88EA_74F4_41DE_95F85E4B11AC, null, null, null, null, false)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 4.03,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B_1_HS_2_0.png",
      "width": 68,
      "height": 59
     }
    ]
   },
   "pitch": 4.09,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -46.07
  }
 ],
 "id": "overlay_94193F2B_8439_B63A_41B6_8B27418B1960",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 4.03,
   "yaw": -46.07,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B_1_HS_2_0_0_map.gif",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": 4.09
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC, this.camera_8256BD74_8F3B_4BCA_41D6_DE051A42A4A3); this.mainPlayList.set('selectedIndex', 19)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 19.38,
   "image": "this.AnimatedImageResource_94C8C485_8E58_5E86_41D4_7A1FC45359F0",
   "pitch": -22.91,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 5.2,
   "distance": 100
  }
 ],
 "id": "overlay_919B825F_842E_AE1B_41DA_80D8B62262AA",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 19.38,
   "yaw": 5.2,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_96D39BC1_843A_7E66_41C9_8186710E503B_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -22.91
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148, this.camera_8248EDB3_8F3B_4B4E_41DA_75C711C0ECDC); this.mainPlayList.set('selectedIndex', 21)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 14.07,
   "image": "this.AnimatedImageResource_94C87485_8E58_5E86_41DC_E5F44061C5B0",
   "pitch": -42.55,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 32.45,
   "distance": 50
  }
 ],
 "id": "overlay_986DE224_88DE_74DC_416D_68498BA54455",
 "data": {
  "label": "Arrow 05a Right-Up"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.07,
   "yaw": 32.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_96D39BC1_843A_7E66_41C9_8186710E503B_1_HS_1_0_0_map.gif",
      "width": 24,
      "height": 16
     }
    ]
   },
   "pitch": -42.55
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF, this.camera_8022B5EF_8F44_BAD5_41DB_2DE2869FDF52); this.mainPlayList.set('selectedIndex', 28)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 20.14,
   "image": "this.AnimatedImageResource_94C0C495_8E58_5E86_41DF_BBE2F8A07759",
   "pitch": -16.77,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -113.44,
   "distance": 100
  }
 ],
 "id": "overlay_9E608C4E_837E_FFA3_41DC_30BB51ED3964",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 20.14,
   "yaw": -113.44,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -16.77
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_998CBC26_837B_FFE3_41C3_EC8DC3AF560A, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','paddingRight':5,'pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverBorderSize':0,'borderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'paddingBottom':5,'rollOverBackgroundColorDirection':'vertical','iconHeight':20,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'rollOverIconWidth':20,'iconColor':'#000000','paddingLeft':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_A1CA15F5_83FA_2861_41CC_79E8CC2B9E81, null, null, null, null, false)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 14.42,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE_1_HS_1_0.png",
      "width": 246,
      "height": 207
     }
    ]
   },
   "pitch": 8.52,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 7.17
  }
 ],
 "id": "overlay_9EAC980E_837A_67A3_41E0_4507153B3DB9",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.42,
   "yaw": 7.17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE_1_HS_1_0_0_map.gif",
      "width": 19,
      "height": 16
     }
    ]
   },
   "pitch": 8.52
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_95E5C3FC_8427_AE1D_41D5_DBE9A96E57A2, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','paddingRight':5,'pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverBorderSize':0,'borderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'paddingBottom':5,'rollOverBackgroundColorDirection':'vertical','iconHeight':20,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'rollOverIconWidth':20,'iconColor':'#000000','paddingLeft':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_990E1128_88EA_74D3_41BD_01424F88907F, null, null, null, null, false)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 10.95,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE_1_HS_2_0.png",
      "width": 185,
      "height": 114
     }
    ]
   },
   "pitch": 2.41,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 89.27
  }
 ],
 "id": "overlay_94CD6065_8427_AA2F_41DB_78DF63BACC30",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 10.95,
   "yaw": 89.27,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE_1_HS_2_0_0_map.gif",
      "width": 25,
      "height": 16
     }
    ]
   },
   "pitch": 2.41
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B, this.camera_821E8C4B_8F3B_49DE_41C1_D6707407D2F5); this.mainPlayList.set('selectedIndex', 22)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 17.01,
   "image": "this.AnimatedImageResource_94FD5475_8E58_5D86_41B1_F7434A0B4E07",
   "pitch": -27,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -81.27,
   "distance": 100
  }
 ],
 "id": "overlay_8DFAA3B8_830A_68EF_41CD_839851AB4F77",
 "data": {
  "label": "Arrow 05a Left-Up"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 17.01,
   "yaw": -81.27,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_1_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -27
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_8E107CBE_8316_38E3_41C2_E75776DA228D, this.camera_82108C8A_8F3B_495E_41CA_03A9DBBA062D); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 17.64,
   "image": "this.AnimatedImageResource_94FD0475_8E58_5D86_41C8_F3AAA716CE88",
   "pitch": -22.5,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 149.45,
   "distance": 50
  }
 ],
 "id": "overlay_9276FB31_830E_F9FE_41C9_7AAF98FB0A95",
 "data": {
  "label": "Arrow 05a Left-Up"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 17.64,
   "yaw": 149.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_1_HS_2_0_0_map.gif",
      "width": 24,
      "height": 16
     }
    ]
   },
   "pitch": -22.5
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91, this.camera_8202ACB9_8F3B_4ABA_41DD_CC6FA52D4BD3); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 26.19,
   "image": "this.AnimatedImageResource_AE0EB4AB_8E48_DE82_41C5_949CF2833205",
   "pitch": -15.55,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -177.43,
   "distance": 100
  }
 ],
 "id": "overlay_94421384_831A_28A6_41A7_963184D23B9D",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 26.19,
   "yaw": -177.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_0_HS_3_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -15.55
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8, this.camera_822A8C0D_8F3B_495A_4188_16161FF64305); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 19.18,
   "image": "this.AnimatedImageResource_94FE4475_8E58_5D86_41C3_1744A619C711",
   "pitch": -12.45,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 0.93,
   "distance": 100
  }
 ],
 "id": "overlay_8D98C5D3_831E_68A1_41D0_056881AF7812",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 19.18,
   "yaw": 0.93,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -12.45
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_9424979F_84EE_761B_41A5_CA2074F40C71, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','paddingRight':5,'pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverBorderSize':0,'borderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'paddingBottom':5,'rollOverBackgroundColorDirection':'vertical','iconHeight':20,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'rollOverIconWidth':20,'iconColor':'#000000','paddingLeft':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_99039118_88EA_74F4_41BA_0157E4DED1F4, null, null, null, null, false)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 3.54,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_1_HS_4_0.png",
      "width": 59,
      "height": 51
     }
    ]
   },
   "pitch": 1.43,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -33.13
  }
 ],
 "id": "overlay_9479B2AB_84EE_EE3A_41D3_85C4A5D55FA3",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 3.54,
   "yaw": -33.13,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_1_HS_4_0_0_map.gif",
      "width": 18,
      "height": 16
     }
    ]
   },
   "pitch": 1.43
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B, this.camera_80C0767C_8F44_B9BA_41DC_872CDA5FFAC1); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 20.23,
   "image": "this.AnimatedImageResource_94FBA475_8E58_5D86_41CA_9225F44A9966",
   "pitch": -15.95,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 8.06,
   "distance": 100
  }
 ],
 "id": "overlay_8DB0CC06_831E_5FA3_41D4_4AB13D5203C4",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 20.23,
   "yaw": 8.06,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -15.95
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9, this.camera_8031F62E_8F44_B956_41CB_4DBE136DD440); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 18.91,
   "image": "this.AnimatedImageResource_94FCC475_8E58_5D86_41C7_E0522D391C0F",
   "pitch": -17.39,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -80.91,
   "distance": 100
  }
 ],
 "id": "overlay_9698FDA4_830A_78E7_4150_DE60ADBEAC42",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 18.91,
   "yaw": -80.91,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8_1_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -17.39
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_94ED5FC1_84EB_F667_41E0_7CCF158F2CEF, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','paddingRight':5,'pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverBorderSize':0,'borderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'paddingBottom':5,'rollOverBackgroundColorDirection':'vertical','iconHeight':20,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'rollOverIconWidth':20,'iconColor':'#000000','paddingLeft':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_9904B118_88EA_74F4_41C6_9158ED6313C5, null, null, null, null, false)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 11.28,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8_1_HS_2_0.png",
      "width": 190,
      "height": 172
     }
    ]
   },
   "pitch": -0.75,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 83.54
  }
 ],
 "id": "overlay_9585024A_84FA_AE65_41DD_AE42C9B582A3",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 11.28,
   "yaw": 83.54,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8_1_HS_2_0_0_map.gif",
      "width": 17,
      "height": 16
     }
    ]
   },
   "pitch": -0.75
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B, this.camera_82747CF7_8F3B_4AB6_41D1_44186AC9264F); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 20.77,
   "image": "this.AnimatedImageResource_AE0E64AB_8E48_DE82_41DA_F7817F6F8D63",
   "pitch": -9.25,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -7.33,
   "distance": 50
  }
 ],
 "id": "overlay_90B8BEAE_8E48_CA82_41DE_1037F8E0C36A",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 20.77,
   "yaw": -7.33,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8E107CBE_8316_38E3_41C2_E75776DA228D_0_HS_0_0_0_map.gif",
      "width": 32,
      "height": 16
     }
    ]
   },
   "pitch": -9.25
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9, this.camera_82662D36_8F3B_4BB6_41B7_58E626AC5FBF); this.mainPlayList.set('selectedIndex', 25)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 18.17,
   "image": "this.AnimatedImageResource_91E30BB5_8EB8_4A86_41DE_0E7D47320186",
   "pitch": -10.58,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 25.34,
   "distance": 50
  }
 ],
 "id": "overlay_ACBDF29C_8EBB_DA86_41D9_5F3E306A9154",
 "data": {
  "label": "Arrow 05b Right-Up"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 18.17,
   "yaw": 25.34,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8E107CBE_8316_38E3_41C2_E75776DA228D_0_HS_1_0_0_map.gif",
      "width": 32,
      "height": 16
     }
    ]
   },
   "pitch": -10.58
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_96D311F8_8439_AA25_41D8_794F1424CD6C, this.camera_808DB803_8F44_C94E_41C9_29E90D30C9B4); this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 14.52,
   "image": "this.AnimatedImageResource_94F69485_8E58_5E86_41D0_E00910AF40B0",
   "pitch": -11.49,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 7.82,
   "distance": 100
  }
 ],
 "id": "overlay_97BAB650_842A_7665_41B3_698B0812037B",
 "data": {
  "label": "Arrow 05a"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.52,
   "yaw": 7.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C_1_HS_0_0_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": -11.49
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_952174CE_845F_AA7D_4197_5A4479805A36, this.camera_80FD77B4_8F44_C74B_41A2_E534B0249CE1); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 4.91,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C_1_HS_1_0.png",
      "width": 84,
      "height": 57
     }
    ]
   },
   "pitch": -10.22,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 157.14
  }
 ],
 "id": "overlay_98EE00A7_88EE_35DC_41D0_DBD71F5B96B1",
 "data": {
  "label": "Arrow 05c Right"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 4.91,
   "yaw": 157.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C_1_HS_1_0_0_map.gif",
      "width": 23,
      "height": 16
     }
    ]
   },
   "pitch": -10.22
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45, this.camera_80EEE766_8F44_C7D7_41D3_9332E83C97AD); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 23,
   "image": "this.AnimatedImageResource_A81CF7E8_8EC8_5A8E_41DA_AC82D8DCE305",
   "pitch": -20.45,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 102.27,
   "distance": 50
  }
 ],
 "id": "overlay_91E77166_8EC7_F785_41B0_FF19ABEB6535",
 "data": {
  "label": "Arrow 05b Right-Up"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 23,
   "yaw": 102.27,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C_0_HS_2_0_0_map.gif",
      "width": 32,
      "height": 16
     }
    ]
   },
   "pitch": -20.45
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE, this.camera_80AB2880_8F44_C94A_41D4_678940996094); this.mainPlayList.set('selectedIndex', 26)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 16.4,
   "image": "this.AnimatedImageResource_94CE7495_8E58_5E86_41C3_582F9D0E6D18",
   "pitch": -19.35,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -171.72,
   "distance": 100
  }
 ],
 "id": "overlay_93E9A7CF_833A_28A1_41C3_E1EF628E8217",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 16.4,
   "yaw": -171.72,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9_1_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -19.35
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_9472D6DF_84DB_B61A_41A1_4F01D515CD8E, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','paddingRight':5,'pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverBorderSize':0,'borderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'paddingBottom':5,'rollOverBackgroundColorDirection':'vertical','iconHeight':20,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'rollOverIconWidth':20,'iconColor':'#000000','paddingLeft':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_99010128_88EA_74D3_41CC_5D7079CF4AEA, null, null, null, null, false)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 8.66,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9_1_HS_2_0.png",
      "width": 146,
      "height": 150
     }
    ]
   },
   "pitch": -1,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 120.29
  }
 ],
 "id": "overlay_945F1682_84DA_56E5_41D0_78FA20E7D708",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 8.66,
   "yaw": 120.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": -1
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_8E107CBE_8316_38E3_41C2_E75776DA228D, this.camera_809C2841_8F44_C9CA_41C1_E8CD70F2C720); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 19.17,
   "image": "this.AnimatedImageResource_91D3ABD4_8EB8_4A86_41E0_493E8CFCECEC",
   "pitch": -15.71,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -95.05,
   "distance": 50
  }
 ],
 "id": "overlay_90769B22_8EB8_4B82_41C4_0C0249B6A7A7",
 "data": {
  "label": "Arrow 05a"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 19.17,
   "yaw": -95.05,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9_0_HS_3_0_0_map.gif",
      "width": 32,
      "height": 16
     }
    ]
   },
   "pitch": -15.71
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_98A3306A_88DB_F554_41DB_7A7EC97BD228, this.camera_80759505_8F44_BB4A_41BA_69D9BDEF025A); this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 18.54,
   "image": "this.AnimatedImageResource_94F6E485_8E58_5E86_41CC_CE0A49625A06",
   "pitch": -28.23,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 105.02,
   "distance": 100
  }
 ],
 "id": "overlay_997D06AE_8B26_FD2C_41DA_8EF8AF7C85D9",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 18.54,
   "yaw": 105.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_98A32D73_88DB_CF34_41D3_B50121ED672C_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -28.23
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_98A603D9_88DB_DB74_41DF_0575075AA24B, this.camera_801405A1_8F44_BB4D_41E1_37B83DC255DE); this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 18.88,
   "image": "this.AnimatedImageResource_94F67485_8E58_5E86_41DD_659D50AA006E",
   "pitch": -26.18,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -75.39,
   "distance": 100
  }
 ],
 "id": "overlay_9ECFC5C8_8B2A_5F54_41B1_3116589886F4",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 18.88,
   "yaw": -75.39,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_98A32D73_88DB_CF34_41D3_B50121ED672C_1_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -26.18
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8, this.camera_80059553_8F44_BBCE_41BC_A9697527B7F3); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 14.52,
   "image": "this.AnimatedImageResource_94F62485_8E58_5E86_41D2_DF70A26BF23E",
   "pitch": -40.5,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -101.32,
   "distance": 50
  }
 ],
 "id": "overlay_9D39AA30_8B2F_F534_41A4_A738FD6E4724",
 "data": {
  "label": "Arrow 05a Left-Up"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.52,
   "yaw": -101.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_98A32D73_88DB_CF34_41D3_B50121ED672C_1_HS_2_0_0_map.gif",
      "width": 24,
      "height": 16
     }
    ]
   },
   "pitch": -40.5
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC, this.camera_81CF51F8_8F44_BABA_413F_60F2C2668380); this.mainPlayList.set('selectedIndex', 19)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 19.38,
   "image": "this.AnimatedImageResource_94F60485_8E58_5E86_41C9_F4E7A4393091",
   "pitch": -22.91,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -7.89,
   "distance": 100
  }
 ],
 "id": "overlay_90AE27D5_8429_D66E_41E0_1E33CAF44982",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 19.38,
   "yaw": -7.89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_96D311F8_8439_AA25_41D8_794F1424CD6C_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -22.91
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_977AAA32_843A_BE25_41A0_4F2B758AA422, this.camera_81DF8237_8F44_B9B6_41D0_1247A0F98A1D); this.mainPlayList.set('selectedIndex', 20)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 20.35,
   "image": "this.AnimatedImageResource_94F79485_8E58_5E86_41E0_F2D1F77735FB",
   "pitch": -14.73,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -104.03,
   "distance": 100
  }
 ],
 "id": "overlay_99C744B2_88FA_3D34_41D5_E3A287435216",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 20.35,
   "yaw": -104.03,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_96D311F8_8439_AA25_41D8_794F1424CD6C_1_HS_1_0_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": -14.73
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C, this.camera_81EE0265_8F44_B9D5_41C3_3CF767F611B2); this.mainPlayList.set('selectedIndex', 16)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 14.25,
   "image": "this.AnimatedImageResource_94F74485_8E58_5E86_41D5_13B1B573A9C7",
   "pitch": -41.73,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -45.27,
   "distance": 50
  }
 ],
 "id": "overlay_99CE9E03_88E6_4CD5_41D4_6C303D5772FC",
 "data": {
  "label": "Arrow 05a Left-Up"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.25,
   "yaw": -45.27,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_96D311F8_8439_AA25_41D8_794F1424CD6C_1_HS_2_0_0_map.gif",
      "width": 24,
      "height": 16
     }
    ]
   },
   "pitch": -41.73
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_952174CE_845F_AA7D_4197_5A4479805A36, this.camera_81AAD39E_8F44_BF76_41D9_873FB704AADB); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 14.26,
   "image": "this.AnimatedImageResource_94F38485_8E58_5E86_41CC_0E18289B0B57",
   "pitch": -16.68,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 179.23,
   "distance": 100
  }
 ],
 "id": "overlay_951F6983_843E_7AEB_419F_D3A04A36B9A3",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.26,
   "yaw": 179.23,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45_1_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -16.68
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270, this.camera_819A7350_8F44_BFCA_41D3_4940351B42C7); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 11.87,
   "image": "this.AnimatedImageResource_94F33485_8E58_5E86_41C9_77E89655358A",
   "pitch": -15.89,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 0.19,
   "distance": 100
  }
 ],
 "id": "overlay_972C6E21_843E_5626_41D5_DD12A0A2F666",
 "data": {
  "label": "Arrow 05a Right-Up"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 11.87,
   "yaw": 0.19,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45_1_HS_2_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -15.89
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D, this.camera_81B9B3EC_8F44_BEDA_41C5_47A303A37A42); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 18.62,
   "image": "this.AnimatedImageResource_94F4F485_8E58_5E86_41BF_680D852FCC65",
   "pitch": -2.97,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 75.2,
   "distance": 100
  }
 ],
 "id": "overlay_947F8324_8E49_DB85_41DF_5BEB919B812E",
 "data": {
  "label": "Circle Point 02c"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 18.62,
   "yaw": 75.2,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45_1_HS_3_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -2.97
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C, this.camera_8049442A_8F44_B95F_41E1_074AF398619C); this.mainPlayList.set('selectedIndex', 16)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 15.14,
   "image": "this.AnimatedImageResource_A81967E8_8EC8_5A8E_41DF_9F6B68E707F0",
   "pitch": -12.28,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -130.37,
   "distance": 50
  }
 ],
 "id": "overlay_AF934478_8EC8_5D8E_41A0_081CB614E3E0",
 "data": {
  "label": "Arrow 05c Left-Up"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 15.14,
   "yaw": -130.37,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45_0_HS_4_0_0_map.gif",
      "width": 32,
      "height": 16
     }
    ]
   },
   "pitch": -12.28
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45, this.camera_8399D99C_8F3B_4B7A_41DC_2D22CC4DA6CC); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 14.43,
   "image": "this.AnimatedImageResource_94F48485_8E58_5E86_41D4_ADDCCF0EC6E1",
   "pitch": -21.2,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 2.37,
   "distance": 100
  }
 ],
 "id": "overlay_97746CFD_843E_7A1F_41CF_30FBEB717884",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.43,
   "yaw": 2.37,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_952174CE_845F_AA7D_4197_5A4479805A36_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -21.2
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_96593F33_843E_562B_41D0_385A5AB13213, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','paddingRight':5,'pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverBorderSize':0,'borderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'paddingBottom':5,'rollOverBackgroundColorDirection':'vertical','iconHeight':20,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'rollOverIconWidth':20,'iconColor':'#000000','paddingLeft':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_9900C128_88EA_74D3_41B3_873551BB7AF1, null, null, null, null, false)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 7.1,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_952174CE_845F_AA7D_4197_5A4479805A36_1_HS_1_0.png",
      "width": 120,
      "height": 101
     }
    ]
   },
   "pitch": 2.85,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 89.87
  }
 ],
 "id": "overlay_968E7734_843E_B62D_41E0_837FF5911C13",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 7.1,
   "yaw": 89.87,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_952174CE_845F_AA7D_4197_5A4479805A36_1_HS_1_0_0_map.gif",
      "width": 19,
      "height": 16
     }
    ]
   },
   "pitch": 2.85
  }
 ]
},
{
 "useHandCursor": true,
 "enabled": false,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C, this.camera_8392A9DA_8F3B_4AFF_41D5_F1536C3E3FA0); this.mainPlayList.set('selectedIndex', 16)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 11.21,
   "image": "this.AnimatedImageResource_94F5E485_8E58_5E86_41B2_9C1675CFCC94",
   "pitch": -4.58,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -95.41,
   "distance": 50
  }
 ],
 "id": "overlay_9658FA76_843A_5E2D_41BD_FEB75CB8EBD4",
 "data": {
  "label": "Arrow 05b Left"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 11.21,
   "yaw": -95.41,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_952174CE_845F_AA7D_4197_5A4479805A36_1_HS_2_0_0_map.gif",
      "width": 57,
      "height": 16
     }
    ]
   },
   "pitch": -4.58
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91, this.camera_810370DF_8F44_BAF6_41DB_5BCCAAA3B266); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 18.88,
   "image": "this.AnimatedImageResource_94F08475_8E58_5D86_41D7_878385B6011B",
   "pitch": -26.18,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -171.53,
   "distance": 100
  }
 ],
 "id": "overlay_9668FDEE_830E_5863_41CC_CE29ECB4842E",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 18.88,
   "yaw": -171.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8F2688FE_8316_D862_41DF_AC8539E02C41_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -26.18
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_8FC9D75B_831A_E9A1_4196_45134C057301, this.camera_8112910E_8F44_BB56_41B3_B1EB54FD97C4); this.mainPlayList.set('selectedIndex', 28); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 19.85,
   "image": "this.AnimatedImageResource_94F04475_8E58_5D86_41D7_6AC532A25DFB",
   "pitch": -32.71,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -26.19,
   "distance": 100
  }
 ],
 "id": "overlay_99B1FE61_8376_3861_41D7_A4A9EA47A255",
 "data": {
  "label": "Arrow 05a Left-Up"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 19.85,
   "yaw": -26.19,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8F2688FE_8316_D862_41DF_AC8539E02C41_1_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -32.71
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_941056FE_84E7_F61D_41D0_E8887FE18F61, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','paddingRight':5,'pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverBorderSize':0,'borderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'paddingBottom':5,'rollOverBackgroundColorDirection':'vertical','iconHeight':20,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'rollOverIconWidth':20,'iconColor':'#000000','paddingLeft':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_9902B118_88EA_74F4_41D3_E963423E8B4A, null, null, null, null, false)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.04,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8F2688FE_8316_D862_41DF_AC8539E02C41_1_HS_2_0.png",
      "width": 102,
      "height": 75
     }
    ]
   },
   "pitch": 1.57,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -88.58
  }
 ],
 "id": "overlay_94B756C0_84E6_7666_4193_67167020E744",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 6.04,
   "yaw": -88.58,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8F2688FE_8316_D862_41DF_AC8539E02C41_1_HS_2_0_0_map.gif",
      "width": 21,
      "height": 16
     }
    ]
   },
   "pitch": 1.57
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_8F2688FE_8316_D862_41DF_AC8539E02C41, this.camera_82342BCE_8F3B_4ED7_41E0_F9ED4F0C88E9); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 16.19,
   "image": "this.AnimatedImageResource_94F17475_8E58_5D86_41D0_BD3AED40F11B",
   "pitch": -39.68,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 138.16,
   "distance": 100
  }
 ],
 "id": "overlay_9B0E735D_8376_69A1_41D9_E0E662CF6BD3",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 16.19,
   "yaw": 138.16,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8FC9D75B_831A_E9A1_4196_45134C057301_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -39.68
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270, this.camera_83CA2B61_8F3B_4FCA_41CB_1093B693C694); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 19.61,
   "image": "this.AnimatedImageResource_94F13485_8E58_5E86_41D3_39404A003446",
   "pitch": -21.27,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 1.11,
   "distance": 100
  }
 ],
 "id": "overlay_99AFDE47_837A_3BA2_41BC_85A65313E4D6",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 19.61,
   "yaw": 1.11,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8FC9D75B_831A_E9A1_4196_45134C057301_1_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -21.27
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF, this.camera_823F7B9F_8F3B_4F75_41B2_4D652A05845B); this.mainPlayList.set('selectedIndex', 28)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 20.35,
   "image": "this.AnimatedImageResource_94F2F485_8E58_5E86_41DA_957DF2902592",
   "pitch": -14.73,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -83.16,
   "distance": 100
  }
 ],
 "id": "overlay_9AE32E7A_837A_5862_41E0_059B72F1A1C9",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 20.35,
   "yaw": -83.16,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8FC9D75B_831A_E9A1_4196_45134C057301_1_HS_2_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -14.73
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91, this.camera_83F41A77_8F3B_49B6_41DC_0943177CAF46); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 16.76,
   "image": "this.AnimatedImageResource_94CC2495_8E58_5E86_41D3_90E6DFC5D61D",
   "pitch": -28.64,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 140.86,
   "distance": 50
  }
 ],
 "id": "overlay_9D2911B5_83F6_28E6_41DD_CF0FB4359403",
 "data": {
  "label": "Arrow 05a Right-Up"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 16.76,
   "yaw": 140.86,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_1_HS_0_0_0_map.gif",
      "width": 24,
      "height": 16
     }
    ]
   },
   "pitch": -28.64
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B, this.camera_83884A09_8F3B_495A_41A4_46951A2AFC97); this.mainPlayList.set('selectedIndex', 22)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 15.29,
   "image": "this.AnimatedImageResource_94CDD495_8E58_5E86_41C8_684B525D4498",
   "pitch": -17.57,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 91.71,
   "distance": 100
  }
 ],
 "id": "overlay_A1A0513D_83FA_29E6_41D1_803C16F09EC4",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 15.29,
   "yaw": 91.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_1_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -17.57
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_8F637E4E_8316_3BA2_41D5_288E1A348353, this.camera_83FE2A48_8F3B_49DA_41CB_9B691DFDC273); this.mainPlayList.set('selectedIndex', 23)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 15.48,
   "image": "this.AnimatedImageResource_94CD7495_8E58_5E86_41C9_C0CC4093AE98",
   "pitch": -15.11,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -88.3,
   "distance": 100
  }
 ],
 "id": "overlay_A1B25591_83F9_E8A1_419A_C4351D5BE9B4",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 15.48,
   "yaw": -88.3,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_1_HS_2_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -15.11
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_96CCEE3A_84EA_B61A_41DF_F5C727B972CC, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','paddingRight':5,'pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverBorderSize':0,'borderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'paddingBottom':5,'rollOverBackgroundColorDirection':'vertical','iconHeight':20,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'rollOverIconWidth':20,'iconColor':'#000000','paddingLeft':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_9904F118_88EA_74F4_41BC_7FB698412E86, null, null, null, null, false)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 6.19,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_1_HS_3_0.png",
      "width": 104,
      "height": 86
     }
    ]
   },
   "pitch": -0.54,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 33.94
  }
 ],
 "id": "overlay_9466D3FA_84E9_AE25_41D0_5245D750B4D3",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 6.19,
   "yaw": 33.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_1_HS_3_0_0_map.gif",
      "width": 19,
      "height": 16
     }
    ]
   },
   "pitch": -0.54
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE, this.camera_818BA302_8F44_BF4E_41C1_1151F730CAA6); this.mainPlayList.set('selectedIndex', 26)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 17.96,
   "image": "this.AnimatedImageResource_94CE8495_8E58_5E86_41DC_411AC9063796",
   "pitch": -14.93,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 3.16,
   "distance": 100
  }
 ],
 "id": "overlay_93BBAF0C_833A_39A6_4189_0D1FA345F6E2",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 17.96,
   "yaw": 3.16,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -14.93
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF, this.camera_81FCA2C3_8F44_BECE_41D7_E75684B1AA5A); this.mainPlayList.set('selectedIndex', 28)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 16.45,
   "image": "this.AnimatedImageResource_94CE1495_8E58_5E86_41A7_3B1033A575F2",
   "pitch": -18.61,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -170.09,
   "distance": 100
  }
 ],
 "id": "overlay_92700DDE_8336_58A3_41DD_59EEB07C8162",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 16.45,
   "yaw": -170.09,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5_1_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -18.61
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.showPopupPanoramaOverlay(this.popup_959A3FDA_8426_D665_41D4_57551BAB0C04, {'iconLineWidth':5,'rollOverBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'rollOverIconColor':'#666666','paddingRight':5,'pressedBorderColor':'#000000','rollOverBackgroundOpacity':0.3,'pressedBackgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'backgroundOpacity':0.3,'pressedIconWidth':20,'rollOverIconHeight':20,'backgroundColorDirection':'vertical','pressedBackgroundColorRatios':[0,0.09803921568627451,1],'paddingTop':5,'rollOverBorderSize':0,'borderSize':0,'pressedIconColor':'#888888','pressedBackgroundColorDirection':'vertical','pressedBackgroundOpacity':0.3,'pressedBorderSize':0,'paddingBottom':5,'rollOverBackgroundColorDirection':'vertical','iconHeight':20,'rollOverIconLineWidth':5,'rollOverBackgroundColorRatios':[0,0.09803921568627451,1],'iconWidth':20,'borderColor':'#000000','rollOverBorderColor':'#000000','backgroundColorRatios':[0,0.09803921568627451,1],'pressedIconHeight':20,'rollOverIconWidth':20,'iconColor':'#000000','paddingLeft':5,'backgroundColor':['#DDDDDD','#EEEEEE','#FFFFFF'],'pressedIconLineWidth':5}, this.ImageResource_9901F128_88EA_74D3_4199_EC59552DC909, null, null, null, null, false)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 9.19,
   "distance": 50,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5_1_HS_2_0.png",
      "width": 155,
      "height": 154
     }
    ]
   },
   "pitch": 4.32,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 151.91
  }
 ],
 "id": "overlay_979D6A7F_8426_7E1A_41C4_07B1E79B53BA",
 "data": {
  "label": "Image"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 9.19,
   "yaw": 151.91,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5_1_HS_2_0_0_map.gif",
      "width": 16,
      "height": 16
     }
    ]
   },
   "pitch": 4.32
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_98A31898_88DB_D5F4_416E_6076E9CB6DC4, this.camera_81568033_8F44_B94E_41C9_5E03275A011C); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 19.71,
   "image": "this.AnimatedImageResource_95DF421D_8E58_5586_4198_A681D0E2050E",
   "pitch": -20.45,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 94.79,
   "distance": 100
  }
 ],
 "id": "overlay_94E8FA88_8E58_CA8E_41E1_7C03BFDF01E2",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 19.71,
   "yaw": 94.79,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8_0_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -20.45
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_98A32D73_88DB_CF34_41D3_B50121ED672C, this.camera_8166D062_8F44_B9CE_41C0_ABC093A6261E); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 27.57,
   "image": "this.AnimatedImageResource_AEEAC799_8E49_DA8E_41D2_8D3B2888E3D5",
   "pitch": -15.41,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 14.21,
   "distance": 100
  }
 ],
 "id": "overlay_9574A477_8E59_FD82_41CC_8BDB6DA0C0D3",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 27.57,
   "yaw": 14.21,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8_0_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -15.41
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D, this.camera_82C7FFC6_8F3B_46D6_41D9_6A75ADE3BF31); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 20.46,
   "image": "this.AnimatedImageResource_AEE92799_8E49_DA8E_41BB_4C7C538875E1",
   "pitch": -33.55,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -39.27,
   "distance": 50
  }
 ],
 "id": "overlay_AEDCE13A_8E4B_D78D_41DC_1988F1BD3915",
 "data": {
  "label": "Arrow 05b Right-Up"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 20.46,
   "yaw": -39.27,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8_0_HS_2_0_0_map.gif",
      "width": 32,
      "height": 16
     }
    ]
   },
   "pitch": -33.55
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D, this.camera_8137BFF5_8F3B_46CA_41BF_0B78AF413914); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 21.2,
   "image": "this.AnimatedImageResource_AEE98799_8E49_DA8E_41C8_9DA16560288D",
   "pitch": -30.27,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 63.82,
   "distance": 50
  }
 ],
 "id": "overlay_9317F9A2_8E48_D6BD_4191_BE04D166CD97",
 "data": {
  "label": "Arrow 05b Left-Up"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 21.2,
   "yaw": 63.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8_0_HS_3_0_0_map.gif",
      "width": 32,
      "height": 16
     }
    ]
   },
   "pitch": -30.27
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_8FC9D75B_831A_E9A1_4196_45134C057301, this.camera_829EAE5E_8F3B_49F7_41DF_328B94C613BB); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 11,
   "image": "this.AnimatedImageResource_94CF7495_8E58_5E86_41D1_F89F0F8E453C",
   "pitch": -15.3,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 167.12,
   "distance": 100
  }
 ],
 "id": "overlay_9B3ABF1A_830A_79A2_41D4_0F95A9C883B8",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 11,
   "yaw": 167.12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF_1_HS_1_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -15.3
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE, this.camera_82AC9E20_8F3B_494A_41E1_62E3453DA70B); this.mainPlayList.set('selectedIndex', 29)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 14.38,
   "image": "this.AnimatedImageResource_94CF4495_8E58_5E86_41D5_10E7D7561992",
   "pitch": -15.1,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 31.57,
   "distance": 100
  }
 ],
 "id": "overlay_9B807B33_830A_59E2_41CD_A46BDAFC5D94",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 14.38,
   "yaw": 31.57,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF_1_HS_2_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -15.1
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5, this.camera_82BB1DF1_8F3B_4ACA_41AE_C502142266DE); this.mainPlayList.set('selectedIndex', 27)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 22.25,
   "image": "this.AnimatedImageResource_AD689A85_8EB8_4A86_41DC_477B610FC5FE",
   "pitch": -24.95,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -146.45,
   "distance": 50
  }
 ],
 "id": "overlay_AE402DE3_8EB8_4E82_41D5_F9916B18B644",
 "data": {
  "label": "Arrow 05b Right-Up"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 22.25,
   "yaw": -146.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF_0_HS_3_0_0_map.gif",
      "width": 32,
      "height": 16
     }
    ]
   },
   "pitch": -24.95
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8, this.camera_81219844_8F3B_49CA_41C6_9DA946084C18); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 20.03,
   "image": "this.AnimatedImageResource_90C4C68D_8E48_DA87_41C9_AFA9C8945ADF",
   "pitch": -17.81,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 8.81,
   "distance": 100
  }
 ],
 "id": "overlay_9250D689_8E48_5A8E_41E0_5F3F3FB28577",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 20.03,
   "yaw": 8.81,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_98A31898_88DB_D5F4_416E_6076E9CB6DC4_0_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -17.81
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_96D39BC1_843A_7E66_41C9_8186710E503B, this.camera_828F2E9D_8F3B_497A_41DA_921A4D17A0EC); this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 11.48,
   "image": "this.AnimatedImageResource_94CA4495_8E58_5E86_41DF_3038621B5628",
   "pitch": -63.41,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": 138.82,
   "distance": 50
  }
 ],
 "id": "overlay_87205CBF_88DE_CD2D_419D_D82C845B2D75",
 "data": {
  "label": "Arrow 05a Left-Up"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 11.48,
   "yaw": 138.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148_1_HS_1_0_0_map.gif",
      "width": 24,
      "height": 16
     }
    ]
   },
   "pitch": -63.41
  }
 ]
},
{
 "useHandCursor": true,
 "areas": [
  {
   "class": "HotspotPanoramaOverlayArea",
   "click": "this.startPanoramaWithCamera(this.panorama_98A32D73_88DB_CF34_41D3_B50121ED672C, this.camera_817530A0_8F44_B94B_41A9_4B21E7BE4257); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000"
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "enabledInCardboard": true,
 "items": [
  {
   "hfov": 19.76,
   "image": "this.AnimatedImageResource_94F77485_8E58_5E86_41E1_0BA935BAC7EE",
   "pitch": -20.05,
   "class": "HotspotPanoramaOverlayImage",
   "yaw": -0.53,
   "distance": 100
  }
 ],
 "id": "overlay_9EB6FC17_8B2A_CCFC_41D6_41ACC88F31AB",
 "data": {
  "label": "Arrow 05b"
 },
 "rollOverDisplay": false,
 "maps": [
  {
   "class": "HotspotPanoramaOverlayMap",
   "hfov": 19.76,
   "yaw": -0.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "class": "ImageResourceLevel",
      "url": "media/panorama_98A3306A_88DB_F554_41DB_7A7EC97BD228_1_HS_0_0_0_map.gif",
      "width": 27,
      "height": 16
     }
    ]
   },
   "pitch": -20.05
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_94F57485_8E58_5E86_41AF_00E1D544D2BF",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D_1_HS_0_0.png",
   "width": 800,
   "height": 540
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_94F53485_8E58_5E86_41D4_CAF83B99E073",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_9AA3E614_88DA_3CFC_41AA_3C8019A8F32D_1_HS_1_0.png",
   "width": 480,
   "height": 540
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_94F27485_8E58_5E86_41D9_7E45A82FA254",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270_1_HS_0_0.png",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_94F3E485_8E58_5E86_41D2_5CFDB2355891",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8FDDEE3D_831A_DBE1_41B4_1B798C16F270_1_HS_2_0.png",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_94FFB475_8E58_5D86_41E0_ED50E5DA88DF",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91_1_HS_0_0.png",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_94FF6475_8E58_5D86_41D1_55BE87642096",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91_1_HS_1_0.png",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_94FF1475_8E58_5D86_41BB_7172851F0E8A",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8F53DC3F_8316_3FE1_41DF_DCB228288D91_1_HS_2_0.png",
   "width": 560,
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_94F7D485_8E58_5E86_41C0_49FB8C149A96",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_98A603D9_88DB_DB74_41DF_0575075AA24B_1_HS_0_0.png",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_94CCE495_8E58_5E86_41DF_FE9C1BB45E40",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8F637E4E_8316_3BA2_41D5_288E1A348353_1_HS_0_0.png",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_94C94485_8E58_5E86_41E1_C38DA0B3C22F",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_977AAA32_843A_BE25_41A0_4F2B758AA422_1_HS_0_0.png",
   "width": 560,
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_94CAE485_8E58_5E86_41CE_F988833E84F6",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_977AAA32_843A_BE25_41A0_4F2B758AA422_1_HS_1_0.png",
   "width": 480,
   "height": 540
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_94CD4495_8E58_5E86_41CC_F6BCC47715AD",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE_1_HS_0_0.png",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_94CEF495_8E58_5E86_41E1_02D5DCD2FD41",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8F7481D4_8316_E8A7_41AD_8892A724A6BE_1_HS_1_0.png",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_94C80485_8E58_5E86_41DA_3F698607A234",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC_1_HS_0_0.png",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_94C9B485_8E58_5E86_41D1_96221250EB44",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_96D3A6FE_843A_561D_41DC_518BAF2EA1FC_1_HS_1_0.png",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_94FC3475_8E58_5D86_41D4_E8978D3AACE8",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_89BC391E_8317_F9A3_41D4_0152EF0D51A9_1_HS_0_0.png",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_94CBE495_8E58_5E86_41C1_0A5CC8C4CD69",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B_1_HS_0_0.png",
   "width": 560,
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_94CB8495_8E58_5E86_41DE_9999C37A481F",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8F7D6AF4_8316_5866_41D3_E2B49155126B_1_HS_1_0.png",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_94C8C485_8E58_5E86_41D4_7A1FC45359F0",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_96D39BC1_843A_7E66_41C9_8186710E503B_1_HS_0_0.png",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_94C87485_8E58_5E86_41DC_E5F44061C5B0",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_96D39BC1_843A_7E66_41C9_8186710E503B_1_HS_1_0.png",
   "width": 560,
   "height": 540
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_94C0C495_8E58_5E86_41DF_BBE2F8A07759",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8F7F113B_831A_29E1_41CD_7DD71EA5FAFE_1_HS_0_0.png",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_94FD5475_8E58_5D86_41B1_F7434A0B4E07",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_1_HS_1_0.png",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_94FD0475_8E58_5D86_41C8_F3AAA716CE88",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_1_HS_2_0.png",
   "width": 560,
   "height": 540
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_AE0EB4AB_8E48_DE82_41C5_949CF2833205",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_0_HS_3_0.png",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_94FE4475_8E58_5D86_41C3_1744A619C711",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8F7A9FEC_8316_5867_41C0_90EB1100778B_1_HS_0_0.png",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_94FBA475_8E58_5D86_41CA_9225F44A9966",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8_1_HS_0_0.png",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_94FCC475_8E58_5D86_41C7_E0522D391C0F",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8FE4A19C_8316_28A7_41CF_FC6834CA3BC8_1_HS_1_0.png",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_AE0E64AB_8E48_DE82_41DA_F7817F6F8D63",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8E107CBE_8316_38E3_41C2_E75776DA228D_0_HS_0_0.png",
   "width": 560,
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_91E30BB5_8EB8_4A86_41DE_0E7D47320186",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8E107CBE_8316_38E3_41C2_E75776DA228D_0_HS_1_0.png",
   "width": 560,
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_94F69485_8E58_5E86_41D0_E00910AF40B0",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C_1_HS_0_0.png",
   "width": 480,
   "height": 540
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_A81CF7E8_8EC8_5A8E_41DA_AC82D8DCE305",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_96D02CEB_8439_BA3A_41D2_E8C41006004C_0_HS_2_0.png",
   "width": 560,
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_94CE7495_8E58_5E86_41C3_582F9D0E6D18",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9_1_HS_1_0.png",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_91D3ABD4_8EB8_4A86_41E0_493E8CFCECEC",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8FDDE547_8316_E9A1_41AD_E9CF0C4283C9_0_HS_3_0.png",
   "width": 560,
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_94F6E485_8E58_5E86_41CC_CE0A49625A06",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_98A32D73_88DB_CF34_41D3_B50121ED672C_1_HS_0_0.png",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_94F67485_8E58_5E86_41DD_659D50AA006E",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_98A32D73_88DB_CF34_41D3_B50121ED672C_1_HS_1_0.png",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_94F62485_8E58_5E86_41D2_DF70A26BF23E",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_98A32D73_88DB_CF34_41D3_B50121ED672C_1_HS_2_0.png",
   "width": 560,
   "height": 540
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_94F60485_8E58_5E86_41C9_F4E7A4393091",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_96D311F8_8439_AA25_41D8_794F1424CD6C_1_HS_0_0.png",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_94F79485_8E58_5E86_41E0_F2D1F77735FB",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_96D311F8_8439_AA25_41D8_794F1424CD6C_1_HS_1_0.png",
   "width": 480,
   "height": 540
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_94F74485_8E58_5E86_41D5_13B1B573A9C7",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_96D311F8_8439_AA25_41D8_794F1424CD6C_1_HS_2_0.png",
   "width": 560,
   "height": 540
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_94F38485_8E58_5E86_41CC_0E18289B0B57",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45_1_HS_1_0.png",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_94F33485_8E58_5E86_41C9_77E89655358A",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45_1_HS_2_0.png",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_94F4F485_8E58_5E86_41BF_680D852FCC65",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45_1_HS_3_0.png",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_A81967E8_8EC8_5A8E_41DF_9F6B68E707F0",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_96BF6AE8_845A_DE26_41BB_D7C31B4DBC45_0_HS_4_0.png",
   "width": 560,
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_94F48485_8E58_5E86_41D4_ADDCCF0EC6E1",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_952174CE_845F_AA7D_4197_5A4479805A36_1_HS_0_0.png",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_94F5E485_8E58_5E86_41B2_9C1675CFCC94",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_952174CE_845F_AA7D_4197_5A4479805A36_1_HS_2_0.png",
   "width": 720,
   "height": 300
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_94F08475_8E58_5D86_41D7_878385B6011B",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8F2688FE_8316_D862_41DF_AC8539E02C41_1_HS_0_0.png",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_94F04475_8E58_5D86_41D7_6AC532A25DFB",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8F2688FE_8316_D862_41DF_AC8539E02C41_1_HS_1_0.png",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_94F17475_8E58_5D86_41D0_BD3AED40F11B",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8FC9D75B_831A_E9A1_4196_45134C057301_1_HS_0_0.png",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_94F13485_8E58_5E86_41D3_39404A003446",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8FC9D75B_831A_E9A1_4196_45134C057301_1_HS_1_0.png",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_94F2F485_8E58_5E86_41DA_957DF2902592",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8FC9D75B_831A_E9A1_4196_45134C057301_1_HS_2_0.png",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_94CC2495_8E58_5E86_41D3_90E6DFC5D61D",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_1_HS_0_0.png",
   "width": 560,
   "height": 540
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_94CDD495_8E58_5E86_41C8_684B525D4498",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_1_HS_1_0.png",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_94CD7495_8E58_5E86_41C9_C0CC4093AE98",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8F44975E_8316_69A3_41B8_BF5AB2EACCC1_1_HS_2_0.png",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_94CE8495_8E58_5E86_41DC_411AC9063796",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5_1_HS_0_0.png",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_94CE1495_8E58_5E86_41A7_3B1033A575F2",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8F70AFD2_8316_D8A3_41B9_38A5068AEBB5_1_HS_1_0.png",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_95DF421D_8E58_5586_4198_A681D0E2050E",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8_0_HS_0_0.png",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_AEEAC799_8E49_DA8E_41D2_8D3B2888E3D5",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8_0_HS_1_0.png",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_AEE92799_8E49_DA8E_41BB_4C7C538875E1",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8_0_HS_2_0.png",
   "width": 560,
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_AEE98799_8E49_DA8E_41C8_9DA16560288D",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_98A1103D_88DA_552D_41BB_4E4DA6975AF8_0_HS_3_0.png",
   "width": 560,
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_94CF7495_8E58_5E86_41D1_F89F0F8E453C",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF_1_HS_1_0.png",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_94CF4495_8E58_5E86_41D5_10E7D7561992",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF_1_HS_2_0.png",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_AD689A85_8EB8_4A86_41DC_477B610FC5FE",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_8FCEC441_831A_2FA1_41B0_5F0209A063FF_0_HS_3_0.png",
   "width": 560,
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_90C4C68D_8E48_DA87_41C9_AFA9C8945ADF",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_98A31898_88DB_D5F4_416E_6076E9CB6DC4_0_HS_0_0.png",
   "width": 480,
   "height": 420
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_94CA4495_8E58_5E86_41DF_3038621B5628",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_96D0C0CD_843A_6A7F_41CD_D44F8D6DD148_1_HS_1_0.png",
   "width": 560,
   "height": 540
  }
 ]
},
{
 "colCount": 4,
 "rowCount": 6,
 "frameCount": 24,
 "frameDuration": 41,
 "class": "AnimatedImageResource",
 "id": "AnimatedImageResource_94F77485_8E58_5E86_41E1_0BA935BAC7EE",
 "levels": [
  {
   "class": "ImageResourceLevel",
   "url": "media/panorama_98A3306A_88DB_F554_41DB_7A7EC97BD228_1_HS_0_0.png",
   "width": 480,
   "height": 420
  }
 ]
}],
 "scripts": {
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "registerKey": function(key, value){  window[key] = value; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "unregisterKey": function(key){  delete window[key]; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "existsKey": function(key){  return key in window; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "getKey": function(key){  return window[key]; }
 },
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "defaultVRPointer": "laser",
 "horizontalAlign": "left",
 "downloadEnabled": false,
 "contentOpaque": false,
 "paddingRight": 0,
 "backgroundPreloadEnabled": true,
 "gap": 10,
 "paddingTop": 0,
 "borderRadius": 0,
 "minWidth": 20,
 "mouseWheelEnabled": true,
 "paddingBottom": 0,
 "width": "100%",
 "desktopMipmappingEnabled": false,
 "height": "100%",
 "propagateClick": false,
 "data": {
  "name": "Player1011"
 },
 "shadow": false,
 "overflow": "visible"
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
