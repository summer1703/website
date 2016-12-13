

export default (file, cb)=> {
    const formData = new FormData();
    //const file = {
    //    "uri": obj.uri,
    //    "type": 'multipart/form-data',
    //    "name": obj.name // filename, input name="xxx"
    //};
    // document.getElementById('input').files[0].file;
    formData.append("file", file);

    loading();

    fetch(upload_address,{
        method:'POST',
        headers:{
            'Content-Type':'multipart/form-data'
        },
        body: formData
    }).then(res =>{

        return res.json();

    }).then((responseData)=>{

        obj.success(responseData)

    }).finally(loadingClose).catch((error)=>{
        obj.error && obj.error(error);
    });
}