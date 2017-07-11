//  getClass(classname)  获取类名
// className            指定的类名  
function getClass(className){
    if(document.getElementsByClassName){
    	return document.getElementsByClassName(className);
    }else{
    	var all=document.getElementsByTagName("*");
    	var newarr=[];
    	for(var i=0;i<all.length;i++){
    		if(checkClass(all[i] ,className)){
                   newarr.push(all[i] );
    		}
    	}return newarr;
    }
}



/*checkClass(obj,classname)
obj 当前元素
classname   指定的classname
*/
function  checkClass(obj,classname){
	   var arrC=obj.className.split(" ");
	   for(var i=0;i<arrC.length;i++){
         if(arrC[i] ==classname){
         	return true;
         }
	   }
	   return false;
}
 



function getClass(className,range){
	var range=range?range:document;
    if(range.getElementsByClassName){
    	return range.getElementsByClassName(className);
    }else{
    	var all=range.getElementsByTagName("*");
    	var newarr=[];
    	for(var i=0;i<all.length;i++){
    		if(checkClass(all[i] ,className)){
                   newarr.push(all[i] );
    		}
    	}return newarr;
    }

}




  /*
     操作内容
     getContent  内容
     obj   对象
     val    指定的名字
    */   
    //wenben
   
function getContent(obj,val){
  if(obj.textContent){
    if(val==undefined){
      return obj.textContent
    }else{
      obj.textContent=val;
    }
  }else{
    if(val==undefined){
      return obj.innerText;
    }else{
      obj.innerText=val;
    }
  }
}






/*
  操作style,
  getstyle  样式
     obj    指定的对象
     attr   属性
    */
function getStyle(obj,attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }else{
       return getComputedStyle(obj,null)[attr];
    }

}


/* #one 
   .one 
   div
  <div>
  */

function $(selecter,ranges){
  if(typeof selecter=="string"){
  //slecter是个字符串，检查字符串的第一个字符
  //返回在指定位置的字符 （charAt(位置)）
  //定义一个变量first等于字符串的第一个字符
  var ranges=ranges?ranges:document;
  var first=selecter.charAt(0);
  //判断第一个字符
  if(first=="."){
    //引用前面封装好的getClass(className)函数
    //.one 截取.后的字符（substring(start,end)）
    return getClass(selecter.substring(1),ranges);
  }else if(first=="#"){
    return document.getElementById(selecter.substring(1));
    //正则
  }else if(/^[a-z][a-z1-6]{0,10}$/.test(selecter)){
    return ranges.getElementsByTagName(selecter)
           //标签<     > 
  }else if(/^<[a-z][a-z1-6]{0,10}>$/.test(selecter)){
    return document.createElement(selecter.slice(1,-1))
  }
}else if(typeof selecter=="function"){
  addEvent(window,"load",selecter)
 }
}



/* 获取对象的子元素
    getChilds(obj,type)
    obj 父元素
    type true 获取父元素的元素节点和有意义的文本
    false 只获取父元素里面的元素节点
 */
 function getChilds(obj,type){
   var type=type?type:false;
   var childs=obj.childNodes;
   var temp=[];
          if(type===false){
             for(var i=0;i<childs.length;i++){
               if(childs[i].nodeType==1){
                 temp.push(childs[i]);
               }
             }
          } else if(type===true){
                for(var i=0;i<childs.length;i++){
                    if(childs[i].nodeType==1||(childs[i].nodeType==3&&!(/^\s+$/.test(childs[i].nodeValue)))){
                      temp.push(childs[i]);
                      }
                }
              }
                return temp;
    }


/*
getFirst    第一个节点
*/    
function getFirst(obj ){
  return getChilds(obj)[0];
}

// /*
// getLast      最后一个节点    

// */function getLast(obj){
//   return getChilds(obj)[getChilds[obj].length-1];
// }

 
//获取目标元素中有意义的最后一个节点
function getLast(obj,type){
  var childs=getChilds(obj,type);
         var len=childs.length;
         return childs[len-1];
  
}




/*
getNext(obj,type)
type true识别有意义的文本
/*
getNum()    
*/
function getNum(obj,num){
  return getChilds(obj)[num];
 }

   
   // false忽略文本
// function getNext(obj,type){
//   var type=type?tyupe:false;
//   var next=obj.nextSibling;
//   if(type===false){
//     if(!next){
//       return false;
//     }
//     while(next.nodeType==3/^\s+&/.text(text(next.nodeValue))||next.nodeType==8){}
//   }
//   return next;
// }




//  添加一个事件，兼容性
//  obj对象
// type事件的类型 
// fn函数体
// function addEvent(obj,type,fn){
//   if(obj.addEventListener){            //w3c
//     obj.addEventListener(type,fn,false);
//   }else(obj.attachEvent){              //ie
//     obj.attachEvent("on"+type,fn,false);
//   }
// }






//  删除一个事件，兼容性
//  obj对象
// type事件的类型 
// fn函数体
// function removeEvent(obj,type,fn){
//   if(obj.removeEventListener){
//     obj.removeEventListener(type,fn,false);
//   }else(obj.detachEvent){
//     obj.detachEvent("on"+type,fn,false);
//   }
// }