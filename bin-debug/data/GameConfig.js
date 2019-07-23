var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var n;
(function (n) {
    var GameConfig = (function () {
        function GameConfig() {
        }
        /**
         * 系统配置信息 appConfig
         */
        GameConfig.appConfig = {
            activityName: "跳一跳",
            joinPeopleNum: 0,
            maxPrizeLevel: 1,
            activityBeginDate: "2019-06-14 16:00:00",
            activityEndDate: "2019-06-28 16:00:00",
            activeDesDict: [
                {
                    name: "客服电话",
                    type: 1,
                    value: "活动说明76868",
                    showName: true
                },
                {
                    name: "兑奖须知",
                    type: 2,
                    value: "<p>活动须知活动须知活动须知活动须知活动须8678686778678678678678678</p>",
                    showName: true
                }
            ],
            wxShare: {
                shareActivity: true,
                title: "分享标题",
                desc: "http://10.0.4.19:3000/upload/l_qmdfj.jpg",
                imgUrl: "分享内容"
            },
            awards: [
                {
                    prizeName: "奖项167565757",
                    prizeType: 1,
                    redeemType: 3,
                    redeemLink: "",
                    redeemDateType: 2,
                    redeemDateBegin: "2019-06-25T11:33:50.000Z",
                    redeemDateEnd: "2019-06-25T11:33:52.000Z",
                    detailsDict: [
                        {
                            name: "客服电话",
                            type: 1,
                            value: "020-35254525",
                            showName: true
                        },
                        {
                            name: "兑奖须知",
                            type: 2,
                            value: "<p>奖项1奖项1奖项1奖项1奖项1奖项1奖项1奖项1</p>",
                            showName: true
                        }
                    ]
                }
            ]
        };
        /**
         * 用户配置信息 userConfig
         */
        GameConfig.userConfig = {
            active: {
                title: {
                    name: "活动标题",
                    type: "image",
                    value: "http://10.0.4.19/marketing/images/cat/title.png"
                },
                background: {
                    name: "背景图片",
                    type: "image",
                    value: "http://10.0.4.19/marketing/images/cat/bg.jpg"
                },
                startbtn: {
                    name: "开始按钮",
                    type: "image",
                    value: "http://10.0.4.19/marketing/images/cat/startBtn.png"
                },
                startbg: {
                    name: "空格",
                    type: "image",
                    value: "http://10.0.4.19/marketing/images/cat/grid_white.png"
                },
                grid_yellow: {
                    name: "非空格",
                    type: "image",
                    value: "http://10.0.4.19/marketing/images/cat/grid_yellow.png"
                },
                prize: [
                    {
                        type: "image",
                        name: "一等奖",
                        des: "iphoneXR",
                        value: "http://10.0.4.19/marketing/images/turntable/zp1.png"
                    },
                    {
                        type: "image",
                        name: "二等奖",
                        des: "iphoneX",
                        value: "http://10.0.4.19/marketing/images/turntable/zp2.png"
                    },
                    {
                        type: "image",
                        name: "三等奖",
                        des: "macbookPro",
                        value: "http://10.0.4.19/marketing/images/turntable/zp3.png"
                    },
                    {
                        type: "image",
                        name: "四等奖",
                        des: "apple watch 4",
                        value: "http://10.0.4.19/marketing/images/turntable/zp4.png"
                    },
                    {
                        type: "image",
                        name: "五等奖",
                        des: "小米9",
                        value: "http://10.0.4.19/marketing/images/turntable/zp5.png"
                    },
                    {
                        type: "image",
                        name: "六等奖",
                        des: "价值100元礼物",
                        value: "http://10.0.4.19/marketing/images/turntable/zp6.png"
                    },
                    {
                        type: "image",
                        name: "安慰奖",
                        des: "价值50元礼物",
                        value: "http://10.0.4.19/marketing/images/turntable/zp900.png"
                    },
                    {
                        type: "image",
                        name: "未中奖",
                        des: "再接再厉",
                        value: "http://10.0.4.19/marketing/images/turntable/zp0.png"
                    }
                ]
            },
            prizedetail: {
                headerbg: {
                    name: "头部背景",
                    des: "头部背景",
                    type: "image",
                    value: "http://10.0.4.19/marketing/images/turntable/header-bg.png"
                }
            },
            winning: {
                prize: [
                    {
                        type: "image",
                        name: "中奖背景图",
                        des: "建议尺寸为600*700",
                        value: "http://10.0.4.19/marketing/images/turntable/successBgImg.png"
                    },
                    {
                        type: "image",
                        name: "一等奖",
                        des: "iphoneXR",
                        value: "http://10.0.4.19/marketing/images/turntable/zp1.png"
                    },
                    {
                        type: "image",
                        name: "二等奖",
                        des: "iphoneX",
                        value: "http://10.0.4.19/marketing/images/turntable/zp2.png"
                    },
                    {
                        type: "image",
                        name: "三等奖",
                        des: "macbookPro",
                        value: "http://10.0.4.19/marketing/images/turntable/zp3.png"
                    },
                    {
                        type: "image",
                        name: "四等奖",
                        des: "apple watch 4",
                        value: "http://10.0.4.19/marketing/images/turntable/zp4.png"
                    },
                    {
                        type: "image",
                        name: "五等奖",
                        des: "小米9",
                        value: "http://10.0.4.19/marketing/images/turntable/zp5.png"
                    },
                    {
                        type: "image",
                        name: "六等奖",
                        des: "价值100元礼物",
                        value: "http://10.0.4.19/marketing/images/turntable/zp6.png"
                    },
                    {
                        type: "image",
                        name: "安慰奖",
                        des: "价值50元礼物",
                        value: "http://10.0.4.19/marketing/images/turntable/zp900.png"
                    },
                    {
                        type: "image",
                        name: "未中奖",
                        des: "再接再厉",
                        value: "http://10.0.4.19/marketing/images/turntable/zp0.png"
                    }
                ]
            },
            fail: {
                image: {
                    name: "失败图片",
                    des: "没中奖图片",
                    type: "image",
                    value: "http://10.0.4.19/marketing/images/turntable/FailImg.png"
                }
            },
            prizeList: [
                {
                    level: "一等奖",
                    name: "价值100元礼品",
                    redeemDateType: 1,
                    redeemDateBegin: "",
                    redeemDateEnd: ""
                }
            ],
        };
        /**
         * AiagainUI 请求调用数据
        * 奖品详情数据信息
        */
        GameConfig.PrizeDetails = {
            headerbg: "http://10.0.4.19/marketing/images/turntable/header-bg.png",
            prizeName: "奖项167565757",
            prizeType: 1,
            redeemType: 3,
            redeemLink: "",
            redeemDateType: 2,
            redeemDateBegin: "2019-06-25T11:33:50.000Z",
            redeemDateEnd: "2019-06-25T11:33:52.000Z",
            detailsDict: [
                {
                    name: "客服电话",
                    type: 1,
                    value: "020-35254525",
                    showName: true
                },
                {
                    name: "兑奖须知",
                    type: 2,
                    value: "<p>奖项1奖项1奖项1奖项1奖项1奖项1奖项1奖项1</p>",
                    showName: true
                }
            ]
        };
        /**
         * AiagainUI 请求调用数据
        * 中奖页面数据信息
        */
        GameConfig.Winning = {
            background: 'http://10.0.4.19/marketing/images/turntable/successBgImg.png',
            img: 'http://10.0.4.19/marketing/images/turntable/zp1.png'
        };
        /**
         * AiagainUI 请求调用数据
        * 未中奖页面数据信息
        */
        GameConfig.Fail = {
            img: 'http://10.0.4.19/marketing/images/turntable/FailImg.png'
        };
        /**
          * AiagainUI 请求调用数据
         * 用户奖品列表数据信息
         */
        GameConfig.Userprize = {
            activeDesDict: [
                {
                    name: "客服电话",
                    type: 1,
                    value: "活动说明76868",
                    showName: true
                },
                {
                    name: "兑奖须知",
                    type: 2,
                    value: "<p>活动须知活动须知活动须知活动须知活动须8678686778678678678678678</p>",
                    showName: true
                }
            ],
            prizeList: [
                {
                    level: "一等奖",
                    name: "价值100元礼品",
                    redeemDateType: 1,
                    redeemDateBegin: "",
                    redeemDateEnd: ""
                }
            ],
        };
        /**
         * AiagainUI 请求调用数据
        * 投诉页面数据信息
        */
        GameConfig.Complaint = {
            list: ['诱导分享', '虚假活动', '政治敏感', '色情低俗', '谣言', '其他(收集隐私信息等)']
        };
        /**
         * AiagainUI 请求调用数据
        * 挑战成功
        */
        GameConfig.Challenge = {
            type: 1,
            userimg: 'http://10.0.4.19/marketing/images/mole/manImg.jpg',
            list: ['您的得分为 : 0']
        };
        /**
         * AiagainUI 请求调用数据
        * 关注我们数据信息
        */
        GameConfig.Follow = {
            img: 'http://10.0.4.19/marketing/images/turntable/code.png'
        };
        return GameConfig;
    }());
    n.GameConfig = GameConfig;
    __reflect(GameConfig.prototype, "n.GameConfig");
})(n || (n = {}));
//# sourceMappingURL=GameConfig.js.map