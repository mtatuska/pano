PanoramaStudioViewerParams = {
"panoramaStudioViewer": {
"key": "",
"control": {
        "mousemode": "drag",
        "touchmode": "drag"
    },
"data": {
        "id": "globalData",
        "messageBoxStyle": "min-width: 25%; text-shadow: none; line-height: 100%; color:#ffffff; font-family: Arial,Helvetica,Sans-Serif; font-size: 15px; font-weight: 100; text-align:left; box-shadow: 4px 4px 1px 0px rgba(0,0,0,0.33);background: rgba(0,0,0,0.66);"
    },
"include": [
        {
            "src": "lev_controls.js"
        }
    ],
"node": {
	"autoplay": {
	        "pan": 0.08,
	        "reference": "screen",
	        "restart": 5,
	        "returnToLevel": true,
	        "status": "off",
	        "tilt": 0,
	        "zoom": 1
	    },
	"camera": {
	        "maxpan": 360,
	        "maxtilt": 90,
	        "minpan": 0,
	        "mintilt": -90
	    },
	"id": "lev",
	"image":{"baseindex":1,"bitmap":[{"back":{"src":"lev_tiles/lev_t_1b_%0y_%0x.jpg"},"down":{"src":"lev_tiles/lev_t_1d_%0y_%0x.jpg"},"front":{"src":"lev_tiles/lev_t_1f_%0y_%0x.jpg"},"height":9567,"left":{"src":"lev_tiles/lev_t_1l_%0y_%0x.jpg"},"right":{"src":"lev_tiles/lev_t_1r_%0y_%0x.jpg"},"tilesize":598,"up":{"src":"lev_tiles/lev_t_1u_%0y_%0x.jpg"},"width":9567},{"back":{"src":"lev_tiles/lev_t_2b_%0y_%0x.jpg"},"down":{"src":"lev_tiles/lev_t_2d_%0y_%0x.jpg"},"front":{"src":"lev_tiles/lev_t_2f_%0y_%0x.jpg"},"height":4784,"left":{"src":"lev_tiles/lev_t_2l_%0y_%0x.jpg"},"right":{"src":"lev_tiles/lev_t_2r_%0y_%0x.jpg"},"tilesize":598,"up":{"src":"lev_tiles/lev_t_2u_%0y_%0x.jpg"},"width":4784},{"back":{"src":"lev_tiles/lev_t_3b_%0y_%0x.jpg"},"down":{"src":"lev_tiles/lev_t_3d_%0y_%0x.jpg"},"front":{"src":"lev_tiles/lev_t_3f_%0y_%0x.jpg"},"height":2392,"left":{"src":"lev_tiles/lev_t_3l_%0y_%0x.jpg"},"right":{"src":"lev_tiles/lev_t_3r_%0y_%0x.jpg"},"tilesize":598,"up":{"src":"lev_tiles/lev_t_3u_%0y_%0x.jpg"},"width":2392},{"back":{"src":"lev_tiles/lev_t_4b_%0y_%0x.jpg"},"down":{"src":"lev_tiles/lev_t_4d_%0y_%0x.jpg"},"front":{"src":"lev_tiles/lev_t_4f_%0y_%0x.jpg"},"height":1196,"left":{"src":"lev_tiles/lev_t_4l_%0y_%0x.jpg"},"right":{"src":"lev_tiles/lev_t_4r_%0y_%0x.jpg"},"tilesize":598,"up":{"src":"lev_tiles/lev_t_4u_%0y_%0x.jpg"},"width":1196},{"back":{"src":"lev_tiles/lev_t_5b_%0y_%0x.jpg"},"down":{"src":"lev_tiles/lev_t_5d_%0y_%0x.jpg"},"front":{"src":"lev_tiles/lev_t_5f_%0y_%0x.jpg"},"height":598,"left":{"src":"lev_tiles/lev_t_5l_%0y_%0x.jpg"},"right":{"src":"lev_tiles/lev_t_5r_%0y_%0x.jpg"},"tilesize":598,"up":{"src":"lev_tiles/lev_t_5u_%0y_%0x.jpg"},"width":598}],"multilevel":true,"preview":{"src":"lev_tiles/lev_preview.jpg"},"projection":"cubic"},
	"textbox": [
	        {
	            "align": "top",
	            "style": " color:#ffffff; font-family: Arial,Helvetica,sans-serif; text-shadow: 0px 0px 3.8px #000000, 0px 0px 2.5px #000000, 0px 0px 1.7px #000000; font-size: 12px; font-weight: bold; text-align:center;",
	            "text": "Lev",
	            "yoff": "4px"
	        }
	    ],
	"view": {
	        "hfov": 90,
	        "pan": 180,
	        "tilt": 0
	    }
},
"version": "4.2"
}
}