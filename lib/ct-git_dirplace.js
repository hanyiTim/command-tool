

var fs=require('fs');
var path=require('path');


var fn_travel=function(dir,callback){
		fs.readdirSync(dir).forEach(function(file){
			var pathname=path.join(dir,file);
			if(fs.statSync(pathname).isDirectory()){
				fs.exists(despath,function(exists){
					if(!exists){
						fs.mkdirSync(despath);
					}
				});
				fn_travel(pathname,despath,callback);
			}else{
				callback(pathname,despath);
			}
		});
	};



var addPlace=function(dir,filename){
	console.log(dir);
	filename = filename || "README.md"
	fs.writeFileSync(path.join(dir,filename),path.basename(dir));
}

function dirpalce(dir,filename){
	var list=fs.readdirSync(dir);
	if(list.length>0){
		list.map((item) => {
			if(fs.statSync(path.join(dir,item)).isDirectory()){
				dirpalce(path.join(dir,item),filename);
			}
		})
	}else{
		addPlace.call(this,dir,filename);
	}
}

module.exports.dirpalce = dirpalce;