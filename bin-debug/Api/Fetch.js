var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var Fetch = (function () {
    function Fetch() {
        var baseUrl = 'http://10.0.4.100:8003';
        if (true) {
            baseUrl = 'http://10.0.4.19:3000';
        }
        Http.instance.setBaseUrl(baseUrl);
    }
    Object.defineProperty(Fetch, "instance", {
        get: function () {
            if (!this.fetch) {
                this.fetch = new Fetch();
            }
            return this.fetch;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 统一处理结果
     */
    Fetch.prototype.predeal = function (http) {
        return http.then(function (response) {
            if (response.code == '0') {
                // 这个结构根据自己的数据确定
                return Promise.resolve(response.payload.data || response.payload || response);
            }
            else {
                return Promise.reject(response);
            }
        }).catch(function (response) {
            return Promise.reject(response.msg || '请求出错');
        });
    };
    /**
     * get
     */
    Fetch.prototype.get = function (url, params, headers) {
        if (params === void 0) { params = {}; }
        if (headers === void 0) { headers = {}; }
        return this.predeal(Http.instance.get(url, params, headers));
    };
    /**
     * post
     */
    Fetch.prototype.post = function (url, params, headers) {
        if (params === void 0) { params = {}; }
        if (headers === void 0) { headers = {}; }
        return this.predeal(Http.instance.post(url, params, headers));
    };
    /**
     * get例子
     */
    Fetch.prototype.getInfo = function () {
        return this.get('/info');
    };
    /**
     * post例子
     */
    Fetch.prototype.postInfo = function (params) {
        return this.post('/info', params);
    };
    return Fetch;
}());
__reflect(Fetch.prototype, "Fetch");
//# sourceMappingURL=Fetch.js.map