       $(function() {
               $.get('https://ipv4.jsonip.com/', function(res){ $("#cip").html(res.ip); });
               $.get('https://api.gmit.vip/Api/UserInfo', function(data){ $("#cname").html(data.data.location); $("#so").html(data.data.os); });
                    
           if(xqAlert.code == 1 ) {
       $("body").prepend('<div class="alerts"><div class="alerts-content"><div class="ale-text"><p>当前IP：<span style="color: #632EFF"id="cip"></span></p><p>来自<span id="titles"></span>的问候</p><div class="ggs-text"></div><p class="bq"id="bq"></p></div><img class="imgs"id="floatimg"src=""><a href="JavaScript:;"id="xqggCloses"class="closes">×</a></div><div class="alerts-zd"></div></div>');
       $("#titles").html($("title").text());
           
    var myDate = new Date;
    var year = myDate.getFullYear(); //获取当前年
    var mon = myDate.getMonth() + 1; //获取当前月
    var date = myDate.getDate(); //获取当前日
    // var h = myDate.getHours();//获取当前小时数(0-23)
    // var m = myDate.getMinutes();//获取当前分钟数(0-59)
    // var s = myDate.getSeconds();//获取当前秒
    var week = myDate.getDay();
    var weeks = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];
    $("#bq").html('<span>' +$("title").text()+ '</span>（<span>地址:' + window.location.host + '</span>）');
    $("#xqggCloses").click(function() {
           $(".alerts").hide();
           $(".alerts-zd").hide();
        });
      $("#floatimg").attr("src",xqAlert.floatImg);
      $(".alerts-content").css({"background-color":xqAlert.bgColor,"background-image":"url(" +xqAlert.bgImg+")"});
      $(".alerts-content .ale-text").css("color",xqAlert.fontColor);
      $(".ggs-text").append(xqAlert.congg);
      $("#times").append(year + "年" + mon + "月" + date + "日" + weeks[week]);
      }     
    });