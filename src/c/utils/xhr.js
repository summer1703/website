define([], function () {
	return function(){
		var xhr = null;
		try{
			xhr = new XMLHttpRequest();
		}catch(e){
			try{
				xhr = new ActiveXObject("MSXML2.XMLHTTP");
			}catch(e){
				try{
					xhr = new ActiveXObject("Microsoft.XMLHTTP");
				}catch(e){
					xhr = null;
				}
			}
		}

		if(xhr != null){
			xhr.sendHTTP = function(param){
				xhr.method = !!param.method ? param.method : 'GET';
				xhr.url = !!param.url ? param.url : "";
				xhr.async = !!param.async ? param.async : true;
				xhr.data = !!param.data ? param.data : "";
				xhr.resFormat = !!param.format ? param.format : "json";
				xhr.cType = !!param.cType ? param.cType : "";
				xhr.callback = !!param.callback ? param.callback : function(){};
				xhr.failback = !!param.failback ? param.failback : function(){};
				xhr.result = "";

				xhr.onreadystatechange = function(){
					if(this.readyState == 4){
						if(this.status == 200 || this.state == 304){
							if(this.responseText){
								try{
									if(this.resFormat != "text"){
										var str = JSON.parse(this.responseText);
									}else{
										var str = this.responseText;
									}
								}catch(e){
									console.log(e.message);
									this.failback({'status': {"msg": e.message, "code": 1}});
								}
								this.callback(str);
							}else{
								console.log("response empty");
								this.failbackthis.failback({'status': {"msg": "response empty", "code": 1}});
							}
						}else{
							console.log(this.status);
							this.failback({'status': {"msg": this.status, "code": 1}});
						}
					}
				}

				if(xhr.method.toUpperCase() == "POST"){
					var data = xhr.data.constructor == Object ? JSON.stringify(xhr.data) : xhr.data;
					xhr.open(xhr.method, xhr.url, xhr.async);
					if (!!xhr.cType)
						xhr.setRequestHeader("Content-Type", xhr.cType);
					else if (xhr.data.constructor == Object) {
						xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
					}

					xhr.send(data);
				}else{
					if(!!xhr.data){
						var flag = /\?/.test(xhr.url), data = xhr.data;
						if(data.constructor == Object){
							var s = flag ? '' : '?';
							for(key in data)
								s += key + '=' + data[key] + '&';

							xhr.url += s;
						}else{
							data = data.toString();
							xhr.url += flag ? data : ('?' + data);
						}
					}
					
					xhr.open(xhr.method, xhr.url, xhr.async);
					xhr.send(null);
				}
			}
		}

		return xhr;
	}
});