var re_null=/\s/;
	re_phone = /^[1][358][0-9]{9}$/,
	re_code=/^\d{6}$/,
	re_psw = /^\w{6,20}$/;


(function () {
	 $.comfirmBox={
		 showbox:function(fadetype,msg,btnHtml){
			 addHtml(fadetype, msg,btnHtml) ;
		 } 
	 }
	var addHtml = function (fadetype, msg,btnHtml) {
		var boxHTML="<div class='xbox'><div class='bg'></div><div class='info-box'><div class='info'></div><div class='J-btn'><span class='true'>确定</span></div></div></div>";
		$("body").append(boxHTML);
		$(".xbox").find(".info").html(msg);
		if(btnHtml){
			$(".xbox").find(".J-btn").html(btnHtml);
		}
		var $fade=fadetype;
		//显示
        if($fade=="fadeIn"){
			$(".xbox").fadeIn(50);	
		}else if($fade=="show"){
			$(".xbox").show();
		}
		//关闭弹出层
		$(".J-btn,.bg").click(function(){
			$(".xbox").hide();
			$("body").find(".xbox").remove();
		})  
	 }
 })()

