function timer()
{
    //Note: JavaScript counts months from 0 to 11 //January is 0. December is 11.

    var eventTime = new Date(2019,10,8,18,0,0,0);
    var leftTime = (eventTime) - (new Date());//left ms
    
    var spaceHolder ='\xa0\xa0\xa0' ;
    var singlespaceHolder ='\xa0' ;
    
    if(leftTime <=0){//clearInterval(timeInterOb);
        document.getElementById("timer").innerHTML =  "Waiting Upcoming Events...";
    }else{
        var dd = parseInt(leftTime / 1000 / 60 / 60 / 24, 10);//left day
        var hh = parseInt(leftTime / 1000 / 60 / 60 % 24, 10);//left hour
        var mm = parseInt(leftTime / 1000 / 60 % 60, 10);//left min
        var ss = parseInt(leftTime / 1000 % 60, 10);//left sec
        
        var ddUnit   = "Day";
        var hourUnit = "Hour";
        var minUnit  = "Min";
        if(dd > 1){
            ddUnit  = "Days";
        }
        if(hh > 1){
            hourUnit = "Hours";
        }
        if(mm > 1){
            minUnit = "Mins";
        }
        
        
        dd = checkTime(dd);
        hh = checkTime(hh);
        mm = checkTime(mm);
        ss = checkTime(ss);
        
        document.getElementById("timer").innerHTML = dd +singlespaceHolder+ ddUnit + spaceHolder+hh +singlespaceHolder+ hourUnit +spaceHolder+ mm +singlespaceHolder+ minUnit + spaceHolder+ss +singlespaceHolder+ "Sec";
        var timeInterObj = setInterval("timer()",1000);
    }
}

function checkTime(i)  
            {  
               if (i < 10) {  
                   i = "0" + i;  
                }  
               return i;  
            }
