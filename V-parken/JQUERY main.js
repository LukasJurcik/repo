$(document).ready(function(){
   flag=1;
    $("#nex").click(function(){
       if(flag==0)
        {
            $("#side1").css("z-index","999");
            $("#side2").css("z-index","9");
            $("#side3").css("z-index","8");
            $("#side4").css("z-index","8");
            $("#side5").css("z-index","9");
            $("#side1").css("transform","translateX(0px) scale(1.5)");
            $("#side2").css("transform","translateX(-70px) scale(1.2)");
            $("#side3").css("transform","translateX(-130px)");
            $("#side4").css("transform","translateX(130px)");
            $("#side5").css("transform","translateX(70px) scale(1.2)");
            flag=1;
        }
        else if(flag==1)
        {
            $("#side5").css("z-index","999");
            $("#side1").css("z-index","9");
            $("#side2").css("z-index","8");
            $("#side3").css("z-index","8");
            $("#side4").css("z-index","9");
            $("#side5").css("transform","translateX(0px) scale(1.5)");
            $("#side1").css("transform","translateX(-70px) scale(1.2)");
            $("#side2").css("transform","translateX(-130px)");
            $("#side3").css("transform","translateX(130px)");
            $("#side4").css("transform","translateX(70px) scale(1.2)");
            flag=2;
        }
        else if(flag==2)
        {
            $("#side4").css("z-index","999");
            $("#side5").css("z-index","9");
            $("#side1").css("z-index","8");
            $("#side2").css("z-index","8");
            $("#side3").css("z-index","9");
            $("#side4").css("transform","translateX(0px) scale(1.5)");
            $("#side5").css("transform","translateX(-70px) scale(1.2)");
            $("#side1").css("transform","translateX(-130px)");
            $("#side2").css("transform","translateX(130px)");
            $("#side3").css("transform","translateX(70px) scale(1.2)");
            flag=3;
        }
        else if(flag==3)
        {
            $("#side3").css("z-index","999");
            $("#side4").css("z-index","9");
            $("#side5").css("z-index","8");
            $("#side1").css("z-index","8");
            $("#side2").css("z-index","9");
            $("#side3").css("transform","translateX(0px) scale(1.5)");
            $("#side4").css("transform","translateX(-70px) scale(1.2)");
            $("#side5").css("transform","translateX(-130px)");
            $("#side1").css("transform","translateX(130px)");
            $("#side2").css("transform","translateX(70px) scale(1.2)");
            flag=4;
        }
        else if(flag==4)
        {
            $("#side2").css("z-index","999");
            $("#side3").css("z-index","9");
            $("#side4").css("z-index","8");
            $("#side5").css("z-index","8");
            $("#side1").css("z-index","9");
            $("#side2").css("transform","translateX(0px) scale(1.5)");
            $("#side3").css("transform","translateX(-70px) scale(1.2)");
            $("#side4").css("transform","translateX(-130px)");
            $("#side5").css("transform","translateX(130px)");
            $("#side1").css("transform","translateX(70px) scale(1.2)");
            flag=0;
        }
    });
    $("#pre").click(function(){
       if(flag==0)
        {
            $("#side2").css("z-index","999");
            $("#side3").css("z-index","9");
            $("#side4").css("z-index","8");
            $("#side5").css("z-index","8");
            $("#side1").css("z-index","9");
            $("#side2").css("transform","translateX(0px) scale(1.5)");
            $("#side3").css("transform","translateX(-70px) scale(1.2)");
            $("#side4").css("transform","translateX(-130px)");
            $("#side5").css("transform","translateX(130px)");
            $("#side1").css("transform","translateX(70px) scale(1.2)");
            flag=3;
        }
        else if(flag==3)
        {
            $("#side3").css("z-index","999");
            $("#side4").css("z-index","9");
            $("#side5").css("z-index","8");
            $("#side1").css("z-index","8");
            $("#side2").css("z-index","9");
            $("#side3").css("transform","translateX(0px) scale(1.5)");
            $("#side4").css("transform","translateX(-70px) scale(1.2)");
            $("#side5").css("transform","translateX(-130px)");
            $("#side1").css("transform","translateX(130px)");
            $("#side2").css("transform","translateX(70px) scale(1.2)");
            flag=2;
        }
        else if(flag==2)
        {
            $("#side4").css("z-index","999");
            $("#side5").css("z-index","9");
            $("#side1").css("z-index","8");
            $("#side2").css("z-index","8");
            $("#side3").css("z-index","9");
            $("#side4").css("transform","translateX(0px) scale(1.5)");
            $("#side5").css("transform","translateX(-70px) scale(1.2)");
            $("#side1").css("transform","translateX(-130px)");
            $("#side2").css("transform","translateX(130px)");
            $("#side3").css("transform","translateX(70px) scale(1.2)");
            flag=1;
        }
        else if(flag==1)
        {
            $("#side5").css("z-index","999");
            $("#side1").css("z-index","9");
            $("#side2").css("z-index","8");
            $("#side3").css("z-index","8");
            $("#side4").css("z-index","9");
            $("#side5").css("transform","translateX(0px) scale(1.5)");
            $("#side1").css("transform","translateX(-70px) scale(1.2)");
            $("#side2").css("transform","translateX(-130px)");
            $("#side3").css("transform","translateX(130px)");
            $("#side4").css("transform","translateX(70px) scale(1.2)");
            flag=4;
        }
        else if(flag==4)
        {
            $("#side1").css("z-index","999");
            $("#side2").css("z-index","9");
            $("#side3").css("z-index","8");
            $("#side4").css("z-index","8");
            $("#side5").css("z-index","9");
            $("#side1").css("transform","translateX(0px) scale(1.5)");
            $("#side2").css("transform","translateX(-70px) scale(1.2)");
            $("#side3").css("transform","translateX(-130px)");
            $("#side4").css("transform","translateX(130px)");
            $("#side5").css("transform","translateX(70px) scale(1.2)");
            flag=0;
        }

    });
});
