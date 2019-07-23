/**
 * 工具类
 */
class GameUtil {

    public static isIos: boolean = /iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())

    public static getTopStage(): egret.Stage {
        return egret.MainContext.instance.stage
    }
    /**
     * 获取舞台高度
     */
    public static getStageHeight(): number {
        return egret.MainContext.instance.stage.stageHeight
    }

    /*
     * 获取舞台宽度
     */
    public static getStageWidth(): number {
        return egret.MainContext.instance.stage.stageWidth
    }

    /**
     * 加载网络图片
     * item: {
     *  url: 'xxxx' // 图片地址
     *  xxxx // 自己附带其他参数
     * }
     */
    public static loadImageByUrl(item:any, callback:Function) {
        try {
            RES.getResByUrl(item.url, (event)=> {
                callback && callback({
                    status: 1,
                    event: event,
                    item: item
                })
            }, this, RES.ResourceItem.TYPE_IMAGE)
        } catch (e) {
            console.error(e)
            callback && callback({
                status: 0
            })
        }
    }

    /**
     * ImageLoader加载图像
     */
    public static GetImage(url:string): Promise<any>{
        let self = this;
		return new Promise((resolve, reject) => {
			let imgLoader = new egret.ImageLoader();
			imgLoader.crossOrigin = "anonymous";// 跨域请求
			imgLoader.load(url);// 去除链接中的转义字符‘\’
			imgLoader.once(egret.Event.COMPLETE, function (evt: egret.Event) {
				if (evt.currentTarget.data) {
					let texture = new egret.Texture();
					texture.bitmapData = evt.currentTarget.data;
					let bitmap = new egret.Bitmap(texture);
					resolve(bitmap)
				}else{
                    console.log('图片加载失败')
                }
			}, self);
		})
    }

    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     */
    public static createBitmap(name: string, type: string = 'png') {
        let result = new egret.Bitmap()
        let texture: egret.Texture = RES.getRes(name + '_' + type)
        result.texture = texture
        return result
    }

    /**
     * 根据name关键字创建一个MovieClip对象。name属性请参考resources/resource.json配置文件的内容。
     */
    public static createMovieClip(name:string): egret.MovieClip {
        let data_stay: any = RES.getRes(name + "_json")
        let texture_stay: egret.Texture = RES.getRes(name + "_png")
        let mcFactory_stay: egret.MovieClipDataFactory = new egret.MovieClipDataFactory(data_stay, texture_stay)
        return new egret.MovieClip(mcFactory_stay.generateMovieClipData(name))
    }

    // 是容器可点击
    public static tap(bitmap: egret.DisplayObject, callback, thisObject) {
        bitmap.touchEnabled = true
        bitmap.addEventListener(egret.TouchEvent.TOUCH_TAP, callback, thisObject)
    }

    // 创建圆角矩形
    public static drawRoundRect(shape: egret.Shape, color: number, width: number, height: number, round: number, rArr: Array<number>) {
        shape.graphics.clear()
        shape.graphics.beginFill(color, 1)
        shape.graphics.drawRoundRect(0, 0, width, height, round, round)
        shape.graphics.endFill()
        let roundArr: Array<number> = [0, 1, 2, 3].filter(item=> rArr.indexOf(item) === -1)
        let rectData: Array<Array<number>> = [
            [0, 0],
            [1, 0],
            [0, 1],
            [1, 1]
        ]
        for (let i = 0;i < roundArr.length;++i) {
            let x = (width - round) * rectData[roundArr[i]][0]
            let y = (height - round) * rectData[roundArr[i]][1]
            shape.graphics.beginFill(color, 1)
            shape.graphics.drawRect(x, y, round, round)
            shape.graphics.endFill()
        }
    }
}