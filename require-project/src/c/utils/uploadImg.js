define(['c/utils/xhr',], function (getXHR){
    var xhr = getXHR();
    /*
     * 上传图片
     * @param {File} file
     * @param {Function} cb
     * TODO://要求改返回数据结构，会影响其他用该接口的地方
     * */
    return function (file, cb) {
        if (!file) return false;

        var fd = new FormData();
        fd.append('picture', file);

        xhr.sendHTTP({
            url: '//192.168.0.104:3100/upload',
            method: 'post',
            data: fd,
            callback: function (obj) {
                console.log(obj)
                cb(obj)
            },
            failback: function (obj) {
                popBox.toggle( !!obj.status ? obj.status.msg : false || obj.statusText || "服务器错误,请重试!", 4000);
            }
        });
    }
});