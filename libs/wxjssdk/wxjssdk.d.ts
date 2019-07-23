declare class wx {

    /**
     * 通过config接口注入权限验证配置
     * @param bodyConfig
     */
    static config(bodyConfig: BodyConfig): void


    /**
     * 通过ready接口处理成功验证
     * @param cbValidated 成功验证后的处理函数
     */
    static ready(cbValidated: Function): void


    /**
     * 通过error接口处理失败验证
     * @param cbError 处理失败验证后的处理函数
     */
    static error(cbError: Function): void


    /**
     * 判断当前客户端版本是否支持指定JS接口
     * @param bodyCheckJsAPISupport
     */
    static checkJsApi(bodyCheckJsAPISupport: BodyCheckJsAPISupport): void


    /**
     * 获取“分享到朋友圈”按钮点击状态及自定义分享内容接口
     * @param shareBody
     */
    static onMenuShareTimeline(shareBody: ShareBody): void


    /**
     * 获取“分享给朋友”按钮点击状态及自定义分享内容接口
     * @param shareBody
     */
    static onMenuShareAppMessage(shareBody: ShareBody): void


    /**
     * 获取“分享到QQ”按钮点击状态及自定义分享内容接口
     * @param shareBody
     */
    static onMenuShareQQ(shareBody: ShareBody): void


    /**
     * 获取“分享到腾讯微博”按钮点击状态及自定义分享内容接口
     * @param shareBody
     */
    static onMenuShareWeibo(shareBody: ShareBody): void


    /// 华丽的分界线， 以下接口参数结构较简单或使用较少，均可自行查阅微信官方api文档给出适合的参数

    /**
     * 拍照或从手机相册中选图接口
     * @param bodyChooseImage
     */
    static chooseImage(body: Object): void

    /**
     * 预览图片接口
     * @param body
     */
    static previewImage(body: Object): void

    /**
     * 上传图片接口
     * @param body
     */
    static uploadImage(body: Object): void

    /**
     * 下载图片接口
     * @param body
     */
    static downloadImage(body: Object): void

    /**
      * 开始录音接口
      * @param body
      */
     static startRecord(body: Object): void

    /**
      * 停止录音接口
      * @param body
      */
     static stopRecord(body: Object): void

    /**
      * 监听录音自动停止接口
      * @param body
      */
     static onVoiceRecordEnd(body: Object): void


    /**
      * 播放语音接口
      * @param body
      */
     static playVoice(body: Object): void


    /**
      * 暂停播放接口
      * @param body
      */
     static pauseVoice(body: Object): void


    /**
      * 停止播放接口
      * @param body
      */
     static stopVoice(body: Object): void


    /**
      * 监听语音播放完毕接口
      * @param body
      */
     static onVoicePlayEnd(body: Object): void

    /**
      * 上传语音接口
      * @param body
      */
     static uploadVoice(body: Object): void


    /**
      * 下载语音接口
      * @param body
      */
     static downloadVoice(body: Object): void


    // ---- 智能接口

    /**
      * 识别音频并返回识别结果接口
      * @param body
      */
     static translateVoice(body: Object): void


    /// ---- 设备信息

    /**
      * 获取网络状态接口
      * @param body
      */
     static getNetworkType(body: Object): void


    /// ---- 地理位置

    /**
      * 使用微信内置地图查看位置接口
      * @param body
      */
     static openLocation(body: Object): void


    /**
      * 获取地理位置接口
      * @param body
      */
     static getLocation(body: Object): void

    /// ---- 界面操作

    /**
      * 隐藏右上角菜单接口
      * @param body
      */
     static hideOptionMenu(body: Object): void

    /**
      * 显示右上角菜单接口
      * @param body
      */
     static showOptionMenu(body: Object): void

    /**
      * 关闭当前网页窗口接口
      * @param body
      */
     static closeWindow(body: Object): void

    /**
      * 批量隐藏功能按钮接口
      * @param body
      */
     static hideMenuItems(body: Object): void

    /**
      * 批量显示功能按钮接口
      * @param body
      */
     static showMenuItems(body: Object): void

    /**
      * 隐藏所有非基础按钮接口
      * @param body
      */
     static hideAllNonBaseMenuItem(body: Object): void

    /**
      * 显示所有功能按钮接口
      * @param body
      */
     static showAllNonBaseMenuItem(body: Object): void

    /// ---- 微信扫一扫

    /**
      * 调起微信扫一扫接口
      * @param body
      */
     static scanQRCode(body: Object): void


    /// ---- 微信小店

    /**
      * 跳转微信商品页接口
      * @param body
      */
     static openProductSpecificView(body: Object): void


    /// ---- 微信卡券

    /**
      * 调起适用于门店的卡券列表并获取用户选择列表
      * @param body
      */
     static chooseCard(body: Object): void

    /**
      * 批量添加卡券接口
      * @param body
      */
     static addCard(body: Object): void

    /**
      * 查看微信卡包中的卡券接口
      * @param body
      */
     static openCard(body: Object): void

    /// ---- 微信支付

    /**
      * 发起一个微信支付请求
      * @param body
      */
     static chooseWXPay(body: Object): void
     
     static miniProgram: {
       getEnv(n: Function): void,
       postMessage(e: Object): void,
       navigateTo(e: Object): void
     }

}

///////////////////////////////// 常用API的参数结构类

/**
 * config 参数结构
 * jsApiList:  所有要调用的 API
 */
declare class BodyConfig {
    debug: boolean
    appId: string
    timestamp: number
    nonceStr: string
    signature: string
    jsApiList: Array<string>
}

/**
 * checkJsApi 参数结构
 * jsApiList:   需要检测的JS接口列表
 */
declare class BodyCheckJsAPISupport {
    success: Function
    jsApiList: Array<string>
}

declare class ShareEvent{
    trigger: Function
    success: Function
    cancel:  Function
    fail: Function
    complete: Function // QQ和微博
}
/**
 * ShareBody 参数结构
 */
declare class ShareBody extends ShareEvent{
    title: string
    desc: string
    link: string
    imgUrl: string
    type: string
    dataUrl: string
}