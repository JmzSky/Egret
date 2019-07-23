var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var WxSdk = (function () {
    function WxSdk() {
        this.signPackage = new BodyConfig();
    }
    Object.defineProperty(WxSdk, "instance", {
        get: function () {
            if (!this.wxsdk) {
                this.wxsdk = new WxSdk();
            }
            return this.wxsdk;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 配置微信签名
     */
    WxSdk.prototype.configWx = function () {
        if (!this.signPackage.appId || !this.signPackage.timestamp ||
            !this.signPackage.nonceStr || !this.signPackage.signature) {
            return Promise.reject('微信签名参数错误');
        }
        this.signPackage.debug = false;
        this.signPackage.jsApiList = [
            'onMenuShareTimeline', 'onMenuShareAppMessage', 'hideMenuItems',
            'startRecord', 'stopRecord', 'onVoiceRecordEnd', 'playVoice', 'onVoicePlayEnd', 'pauseVoice', 'stopVoice', 'uploadVoice', 'downloadVoice',
        ];
        /* 微信接口 */
        wx.config(this.signPackage);
        wx.error(function (err) {
            console.error('error: configWx of wxsdk.ts', err);
        });
        return Promise.resolve('微信签名配置完成');
    };
    /**
     * 获取微信签名信息
     */
    WxSdk.prototype.getWxSignPackage = function () {
        var _this = this;
        var params = {
            url: encodeURIComponent(window.location.href.split('#')[0])
        };
        // 获取微信签名
        return Http.instance.get('xxxxx', params)
            .then(function (response) {
            var data = response.payload;
            if (!data.appId) {
                return Promise.reject(response.msg || response);
            }
            _this.signPackage.appId = data.appId;
            _this.signPackage.timestamp = data.timestamp;
            _this.signPackage.nonceStr = data.nonceStr;
            _this.signPackage.signature = data.signature;
            return Promise.resolve(_this.configWx());
        })
            .catch(function (error) {
            console.error('error: getWxSignPackage of wxsdk.js', JSON.stringify(error));
            return Promise.reject(error);
        });
    };
    WxSdk.prototype.share = function (shareInfo) {
        if (!shareInfo.title) {
            shareInfo.title = '分享标题';
        }
        if (!shareInfo.link) {
            shareInfo.link = window.location.href.split('#')[0];
        }
        if (!shareInfo.desc) {
            shareInfo.desc = '分享描述';
        }
        wx.ready(function () {
            console.log('wx ready', shareInfo);
            wx.onMenuShareAppMessage(shareInfo);
            wx.onMenuShareTimeline(shareInfo);
            wx.onMenuShareQQ(shareInfo);
            wx.onMenuShareWeibo(shareInfo);
        });
    };
    return WxSdk;
}());
__reflect(WxSdk.prototype, "WxSdk");
//# sourceMappingURL=WxSdk.js.map