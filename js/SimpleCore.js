// build time:Fri Jan 19 2018 15:12:42 GMT+0800 (中国标准时间)
var SimpleCore={buildingTime:new Date,current:null,prevTop:0,headerShow:true,wxMpImg:null,donateImg:null,donateImg1:null,firstClickSponsorSponsor:true,firstClickWechat:true,initParams:function(e){SimpleCore.buildingTime=e.buildingTime;SimpleCore.current=e.current;SimpleCore.wxMpImg=e.wxMpImg;SimpleCore.donateImg=e.donateImg;SimpleCore.donateImg1=e.donateImg1},init:function(e){SimpleCore.initParams(e);$(window).resize(function(){SimpleCore.syncSize()});$(window).scroll(function(e){SimpleCore.scrollCallback()});$(document).on("click",".btn-read-mode",function(e){e.preventDefault();SimpleCore.switchReadMode()});$(document).on("click",".btn-search",function(e){e.preventDefault();SimpleCore.switchSearch()});$(document).on("click",".btn-weixin-mp",function(e){e.preventDefault();if(SimpleCore.wxMpImg!=""&&SimpleCore.firstClickWechat==true){SimpleCore.alert("更多精彩扫扫这里",'<img style="width:160px;background:#fff;" src="'+SimpleCore.wxMpImg+'">');SimpleCore.firstClickWechat==false}else{if(SimpleCore.firstClickSponsorWechat==true)SimpleCore.alert("未开通自定义功能",'<h4 style="text-align: center;margin: 0">联系博主试试看 ：）</h4>');SimpleCore.firstClickWechat==false}});$(document).on("click",".btn-thumbs-up",function(e){e.preventDefault();if(SimpleCore.donateImg!=""&&SimpleCore.donateImg1!=""&&SimpleCore.firstClickSponsor==true){SimpleCore.alert("扫码请我喝可乐",'<img style="width:160px;height:240px;background:#fff;" src="'+SimpleCore.donateImg+'"><img style="width:160px;height:240px;background:#fff;" src="'+SimpleCore.donateImg1+'">');SimpleCore.firstClickSponsor=false}else{if(SimpleCore.firstClickSponsor==true)SimpleCore.alert("未开通自定义功能",'<h4 style="text-align: center;margin: 0">联系博主试试看 ：）</h4>');SimpleCore.firstClickSponsor=false}});$(document).on("click",".btn-gotop",function(e){e.preventDefault();SimpleCore.goTop()});SimpleCore.changeReadModel();SimpleCore.setPageCurrent();SimpleCore.setBuildingTime();SimpleCore.syncSize()},goTop:function(){$("html, body").animate({scrollTop:0},200)},setPageCurrent:function(){if(SimpleCore.current==="post"){$("#cover").hide();$("body").addClass("single")}else{$("#cover").show();$("body").removeClass("single")}$.each($(".nav-menu a"),function(e,i){if(i.href==window.location.href){$(i).addClass("current")}else{$(i).removeClass("current")}})},scrollCallback:function(){var e=document.body.scrollTop;if(e>100){$(".fixed-btn").show()}else{$(".fixed-btn").hide()}if($("body").hasClass("single")){SimpleCore.headerShow=e<100||SimpleCore.prevTop-e>0?true:false;SimpleCore.headerToggle()}SimpleCore.prevTop=e},headerToggle:function(){if(SimpleCore.headerShow){$(".page-title").css("top",0);$(".nav-user").css("top",0);if($(window).width()<480){$("#nav").css("top",0)}}else{$(".page-title").css("top",-45);$(".nav-user").css("top",-45);if($(window).width()<480){$("#nav").css("top",-45)}}},syncSize:function(){var e=$(".page-title");var i=$(window).width();if(i>768&&SimpleCore.current!="post"){e.width($("#body > .main").width())}else{e.removeAttr("style")}if(i<768){$(".site-name").click(function(e){e.preventDefault()})}},switchSearch:function(){var e=$("#search");if(e.hasClass("active")){e.removeClass("active")}else{e.addClass("active")}},switchReadMode:function(){var e=$("body").hasClass("night-mode")?"day":"night";SimpleCore.setLocalData("read-mode",e);SimpleCore.changeReadModel()},changeReadModel:function(){var e=$(".btn-read-mode");if(SimpleCore.getLocalData("read-mode")=="night"){$("body").addClass("night-mode");e.find("i").attr("class","fa fa-moon-o");$(".cover-img").css({background:"url('/images/cover-night.jpg')","background-image":"/images/cover-night.jpg","background-size":"cover","background-position":"center","background-repeat":"no-repeat"})}else{$("body").removeClass("night-mode");e.find("i").attr("class","fa fa-sun-o");$(".cover-img").css({background:"url('/images/cover-day.jpg')","background-image":"/images/cover-day.jpg","background-size":"cover","background-position":"center","background-repeat":"no-repeat"})}},alert:function(e,i){var o="notice-"+(new Date).getTime();var t='<div id="'+o+'" class="notice-item">'+'<span class="notice-item-close"><i class="fa fa-close"></i></span>'+'<p><h3 style="text-align: center;margin:0 0 10px 0">'+e+"</h3>"+i+"</p></div>";var r=$("#notice");if(r.length==0){$('<div id="notice"></div>').appendTo($("body"))}$(t).appendTo($("#notice")).on("click",".notice-item-close",function(){$(this).parent().remove();SimpleCore.firstClickSponsor=true;SimpleCore.firstClickWechat==true;return false});$("#notice").css("margin-right",-$("#notice").width()/2);setTimeout(function(){$("#"+o).remove()},8e3)},setLocalData:function(e,i){if(window.localStorage){window.localStorage.setItem(e,i)}},getLocalData:function(e){if(window.localStorage){return window.localStorage.getItem(e)}},setBuildingTime:function(){var e=new Date(SimpleCore.buildingTime);var i=new Date;var o=i.getTime()-e.getTime();$("#siteBuildingTime").html(Math.floor(o/(1e3*60*60*24)))}};
//rebuild by neat 