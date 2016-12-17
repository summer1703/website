define([
    'c/utils/utils',
    'c/utils/uploadImg'
], function(utils, uploader){
    "use strict";
    console.log(utils.A);
    //$.ajax({
    //    url: '//192.168.1.223:3100/upload',
    //    type: 'get',
    //    success: function(json){
    //        "use strict";
    //        console.log(json)
    //    },
    //    error: function(e){
    //        "use strict";
    //        console.log(e)
    //    }
    //})
    $('#button').on('click', function(){
        var file = document.getElementById('file').files[0];
        //$.ajax({
        //    url: '//192.168.1.223:3100/upload',
        //    type: 'post',
        //    contentType: 'multipart/form-data',
        //    data: new FormData().append('picture', file),
        //    success: function(json){
        //        console.log(json)
        //    },
        //    error: function(e){
        //        console.log(e);
        //    }
        //})
        uploader(file, function(json){
            //$('document').append( `<img src="${json.data.url}" />`);
            //console.log(json.url)
            document.body.insertAdjacentHTML('beforeEnd', `<img src="${json.data.url}" />`)
        })
    });
    //$('#file').on('change', function(){
    //    uploader(this.files[0], function(json){
    //        console.log(json)
    //    })
    //})
})