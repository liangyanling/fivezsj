/**
 * Created by tao on 2016/5/4.
 */
/*function fun(parent,ele,myClass){
    var element =document.createElement("ele");
    element.className="myClass";
    parent.appendChild(element);
    return element;
}*/
window.onload=function(){
    var dataImg={"data":[{src:"i1.jpg"},{src:"i1.jpg"},{src:"i1.jpg"},{src:"i1.jpg"},{src:"i1.jpg"}]}
    pbl();
    window.onscroll=function(){
        //��̬����ÿ��Ԫ��
        console.log(pbla());
        if(pbla()){
      var container1=document.getElementById("container1");
        for(var i=0;i<dataImg.data.length;i++ ){
            /*var box = fun(container1,"div","box");
            var content = fun(box,"div","content");
            var img1 = fun(content,"img",null);
            img1.src = "images/"+dataImg.data[i].src;*/
            var pin=document.createElement("div");
            pin.className="box";
            container1.appendChild(pin);
            var content=document.createElement("div");
            content.className="content";
            pin.appendChild(content);

            var img=document.createElement("img");
            img.src="images/"+dataImg.data[i].src;
            content.appendChild(img);
        }
            pbl();
        }
    }
};


//���ֺ���  ������ͼƬ�ŵ�������
function pbl(){
    var container1=document.getElementById("container1");
    var box1=document.getElementsByTagName("*");//��ȡ���е�Ԫ��
    var box1push=[];//������ͼƬ�ŵ�������
    for(var i=0;i<box1.length;i++){
       // console.log(box1[i]);
       //��ȡ�������е�ͼƬ������
        if(box1[i].className=="box"){
           box1push.push(box1[i]);
       }
    }
    //console.log(box1[0]);

    //��ȡͼƬ�Ŀ�ȶ�   box1[0]��һ��ͼƬ�Ŀ��
    var pictureWidth=box1push[0].offsetWidth;
    //console.log(pictureWidth);
    var num=Math.floor(document.documentElement.clientWidth/pictureWidth);
    console.log(num);
    console.log(document.documentElement.clientWidth);
    //ͼƬ�����ǰ������Ŀ�Ⱦ��ж��
    container1.style.cssText = "width:" + pictureWidth * num + "px;margin:0 auto";
    //container1.style.cssText="width:"+pictureWidth * num+"px;margin:0 auto;";

   //����һ�����飬������ŵ�һ�ŵ�ͼƬ
    var firstarr=[];
    for(var j=0;j<box1push.length;j++){
        var ph=box1push[j].offsetHeight;
        if(j<num){
            firstarr[j]= ph;
        }else{
            //��С�߶ȵ��Ǹ�
            var minh=Math.min.apply(null,firstarr);
         /*   var minIndex=0;*/
            var  mm=firstarr.indexOf(minh);//�����������к�
            console.log(mm);
           /* for(var m=0;m< firstarr.length;m++){
                if( ph[m] ==minh){
                    minIndex=m;
                }
            }*/
            //��ŵڶ��ŵ�ͼƬ
          box1push[j].style.position="absolute";
            box1push[j].style.left=box1push[mm].offsetLeft+"px";
            box1push[j].style.top= minh+"px";
            //���¼������ĸ߶�
9
            firstarr[ mm]+=box1push[j].offsetHeight;
        }

    }
    console.log(firstarr);

}



//���ֺ���
function pbla(){
    var container1=document.getElementById("container1");
    var box1=document.getElementsByTagName("*");
    var box1push=[];//������ͼƬ�ŵ�������
    for(var i=0;i<box1.length;i++){
        // console.log(box1[i]);
        //��ȡ�������е�ͼƬ������
        if(box1[i].className=="box"){
            box1push.push(box1[i]);
        }
    }
    //��ȡ���һ��ͼƬ
   var lastImgh= box1push[box1push.length-1].offsetTop;
    //��ȡ��ǰҳ��ĸ߶�
   var pageHeight=document.documentElement.clientHeight;
    //��Ļ�ĸ߶�+�����ĸ߶�=document�ĸ߶�
    //�����ĸ߶�
   var scr=document.documentElement.scrollTop || document.body.scrollTop;
    return (pageHeight+scr)>lastImgh? true:false;

}


