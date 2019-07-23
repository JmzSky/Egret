var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
/**
 * 工具类
 */
var GameUtil = (function () {
    function GameUtil() {
    }
    GameUtil.getTopStage = function () {
        return egret.MainContext.instance.stage;
    };
    /**
     * 获取舞台高度
     */
    GameUtil.getStageHeight = function () {
        return egret.MainContext.instance.stage.stageHeight;
    };
    /*
     * 获取舞台宽度
     */
    GameUtil.getStageWidth = function () {
        return egret.MainContext.instance.stage.stageWidth;
    };
    /**
     * 加载网络图片
     * item: {
     *  url: 'xxxx' // 图片地址
     *  xxxx // 自己附带其他参数
     * }
     */
    GameUtil.loadImageByUrl = function (item, callback) {
        try {
            RES.getResByUrl(item.url, function (event) {
                callback && callback({
                    status: 1,
                    event: event,
                    item: item
                });
            }, this, RES.ResourceItem.TYPE_IMAGE);
        }
        catch (e) {
            console.error(e);
            callback && callback({
                status: 0
            });
        }
    };
    /**
     * ImageLoader加载图像
     */
    GameUtil.GetImage = function (url) {
        var self = this;
        return new Promise(function (resolve, reject) {
            var imgLoader = new egret.ImageLoader();
            imgLoader.crossOrigin = "anonymous"; // 跨域请求
            imgLoader.load(url); // 去除链接中的转义字符‘\’
            imgLoader.once(egret.Event.COMPLETE, function (evt) {
                if (evt.currentTarget.data) {
                    var texture = new egret.Texture();
                    texture.bitmapData = evt.currentTarget.data;
                    var bitmap = new egret.Bitmap(texture);
                    resolve(bitmap);
                }
                else {
                    console.log('图片加载失败');
                }
            }, self);
        });
    };
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     */
    GameUtil.createBitmap = function (name, type) {
        if (type === void 0) { type = 'png'; }
        var result = new egret.Bitmap();
        var texture = RES.getRes(name + '_' + type);
        result.texture = texture;
        return result;
    };
    /**
     * 根据name关键字创建一个MovieClip对象。name属性请参考resources/resource.json配置文件的内容。
     */
    GameUtil.createMovieClip = function (name) {
        var data_stay = RES.getRes(name + "_json");
        var texture_stay = RES.getRes(name + "_png");
        var mcFactory_stay = new egret.MovieClipDataFactory(data_stay, texture_stay);
        return new egret.MovieClip(mcFactory_stay.generateMovieClipData(name));
    };
    // 是容器可点击
    GameUtil.tap = function (bitmap, callback, thisObject) {
        bitmap.touchEnabled = true;
        bitmap.addEventListener(egret.TouchEvent.TOUCH_TAP, callback, thisObject);
    };
    // 创建圆角矩形
    GameUtil.drawRoundRect = function (shape, color, width, height, round, rArr) {
        shape.graphics.clear();
        shape.graphics.beginFill(color, 1);
        shape.graphics.drawRoundRect(0, 0, width, height, round, round);
        shape.graphics.endFill();
        var roundArr = [0, 1, 2, 3].filter(function (item) { return rArr.indexOf(item) === -1; });
        var rectData = [
            [0, 0],
            [1, 0],
            [0, 1],
            [1, 1]
        ];
        for (var i = 0; i < roundArr.length; ++i) {
            var x = (width - round) * rectData[roundArr[i]][0];
            var y = (height - round) * rectData[roundArr[i]][1];
            shape.graphics.beginFill(color, 1);
            shape.graphics.drawRect(x, y, round, round);
            shape.graphics.endFill();
        }
    };
    GameUtil.isIos = /iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase());
    return GameUtil;
}());
__reflect(GameUtil.prototype, "GameUtil");
//# sourceMappingURL=GameUtil.js.map