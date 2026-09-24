var APP_DATA = {
  "scenes": [
    {
      "id": "0-1-vereda",
      "name": "1 Vereda",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.24810781709195773,
          "pitch": 0.18627589148964319,
          "rotation": 0,
          "target": "1-2-estar-comedor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-2-estar-comedor",
      "name": "2 Estar Comedor",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.0089645703205896,
          "pitch": 0.4023751529074566,
          "rotation": 0,
          "target": "2-3-dormitorio"
        },
        {
          "yaw": 1.3950531248612315,
          "pitch": 0.519474036571653,
          "rotation": 0,
          "target": "0-1-vereda"
        },
        {
          "yaw": -0.8254403421960284,
          "pitch": 0.6403853521420917,
          "rotation": 0,
          "target": "3-4-galera-parrilla"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-3-dormitorio",
      "name": "3 Dormitorio",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -3.018084196135412,
          "pitch": 0.6989815300021878,
          "rotation": 0,
          "target": "1-2-estar-comedor"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-4-galera-parrilla",
      "name": "4 Galería Parrilla",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.9433155442575263,
          "pitch": 0.7074890729658296,
          "rotation": 0,
          "target": "1-2-estar-comedor"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": true,
    "viewControlButtons": false
  }
};
