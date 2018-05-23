function  initCode(){


    var objects=new Array("电脑","自行车","蛋挞","帽子","汽车","风扇");
    var  objImages=new Array("c","z","d","m","q","f");


    //随机生成一个图片中的内容
    var  randomIndex=parseInt(Math.random()*100000)%6;
    var   randomCount=parseInt(Math.random()*100000)%5+1;



    var  objectName=objects[randomIndex];





    var     code=document.getElementById("code");
    var     hua=code.getContext("2d");

    hua.lineWidth=1;
    hua.moveTo(10,20);
    hua.lineTo(280,20);
    hua.stroke();
    hua.font="楷体 16px";
    hua.fillStyle="gray";
    hua.strokeStyle="black";
    hua.strokeText("请点击下图中",10,13);
    hua.strokeStyle="red";
    hua.strokeText("所有的",80,13);
    hua.strokeStyle="blue";
    hua.font="隶体  20px";
    hua.rotate(10*Math.PI/180);
    hua.strokeText(objectName,120,-10);



    //随机出八张图片的路径
    var  images=new Array(8);
    for(var n=0;n<8;n++){
        var tempIndex=(parseInt(Math.random()*100000)%5+1);
        var tempImg=(parseInt(Math.random()*100000)%6);
        if(n+1>=randomCount)
        {
            if(tempImg==randomIndex){
                n--;
                continue;
            }else
            {
                images[n]=objImages[tempImg]+tempIndex;
                continue;
            }
        }
        images[n]=objImages[randomIndex]+tempIndex;
    }


    //将所有图像载入网页
    for(var  n=0;n<6;n++)
    {
        for(var  x=0;x<5;x++){
            var  h="<img id='"+objImages[n]+(x+1)+"' src='images/"+objImages[n]+(x+1)+".jpg' style='width:30px;height:30px;display:none;'";
            document.write(h);

            //document.write("<img id='"+objImages[n]+(x+1)+"' src='images/"+objImages[n]+(x+1)+".jpg' style='width:30px;height:30px;'");
        }
    }


    var   x=10,y=40;
    for(var  n=0;n<8;n++)
    {
        //document.write(images[n]+"<br/>");
       if(n%3==0&&(n!=3))
        {
            x=10;
            y+=140;
        }
        var img=document.getElementById(images[n]);
        hua.drawImage(img,x,y,90,90);
        x+=95;

    }
}


