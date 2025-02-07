$(function(){
	pics();
	notice();
	dyxl();
})
function pics(){
	var oimg = $("#imgs li");
	oimg.hide();
	oimg.eq(0).show();
	var oicon = $("#icons li");
	oicon.mouseover(function(){
		$(this).addClass('on1').siblings().removeClass('on1');
		var i = $(this).index();
		$(oimg).eq(i).siblings().fadeOut(1000);
		$(oimg).eq(i).fadeIn(1000);
		clearInterval(t);
	})
	oicon.mouseout(function(){
		t=setInterval(mar,3000);
	})
	oimg.mouseover(function(){
		clearInterval(t);
	})
	oimg.mouseout(function(){
		t=setInterval(mar,3000);
	})
	function mar(){
		var j;
		oicon.each(function(){
			if($(this).hasClass('on1')){
				j = $(this).index();
			}
		})
		if(j<7){

		oimg.eq(j+1).siblings().fadeOut(1000);
		oimg.eq(j+1).fadeIn(1000);
		oicon.eq(j+1).addClass('on1').siblings().removeClass('on1');			
		}
		else{
		oimg.eq(0).siblings().fadeOut(1000);
		oimg.eq(0).fadeIn(1000);
		oicon.eq(0).addClass('on1').siblings().removeClass('on1');					
		}

	}
	var t = setInterval(mar,2000);
}

function notice(){
	var onews = $('#noticelist');
	var oul = $('#noticeul');
	var oul1 = oul.clone();
   function m(){ 
   if(oul.height() > onews.scrollTop() + onews.height()){onews.scrollTop(onews.scrollTop()+1);}
   else{
	   oul1.appendTo(onews);
	   if(onews.scrollTop()<oul.height()){onews.scrollTop(onews.scrollTop()+1);}
	   else{onews.scrollTop(0);}
	   }
   }
    var t=setInterval(m,40);
	onews.mouseover(function(){clearInterval(t)});
	onews.mouseout(function(){t=setInterval(m,40);});
	}
function dyxl(){
	$("#dytd").css("color","rgb(255,121,0)");
	$("#xljkm").css("display","none");
	$("#xljkn").css("display","none");
	$("#dytd").hover(function(){
		$("#dytd").css("color","rgb(255,121,0)");
		$("#xljk").css("color","#333")
		$("#xljkm").css("display","none");
		$("#xljkn").css("display","none");	
		$("#dytdm").css("display","block");
		$("#dytdn").css("display","block");				
	})
	$("#xljk").hover(function(){
		$("#xljk").css("color","rgb(255,121,0)");
		$("#dytd").css("color","#333");
		$("#dytdm").css("display","none");
		$("#dytdn").css("display","none");		
		$("#xljkm").css("display","block");
		$("#xljkn").css("display","block");	
	})	
}