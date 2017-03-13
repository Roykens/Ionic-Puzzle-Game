var t ;

function order(p,elt){
	var f=$(".item-puzzel",p)
	for(var i=0;i<f.length;i++){
		if($(f[i]).attr("id")==elt)
			return i;
	}
}

function isOver(p,n){
	var f=$(".item-puzzel",p);
	for(var i=0;i<n*n;i++){
		if($(f[i]).attr("id")!="elt"+i)
			return false;
	}
	(new Audio("audio/success.wav",0.6)).play();
	openModal();
	return  true;
}
function neigborth(a,b,n){
	if(b == a-1 || b == a+1 || b == a + n || b == a-n)
		return true;
	return false;
}
function move(e,n) {
	//console.log($("#"+e));
	t=e;
	var p = $("#"+e).parent();
	var orderNow = order(p,e);

	var orderNull = order(p,"elt0");


	//console.log(orderNow+"----"+orderNull+"--"+neigborth(orderNow,orderNull,n));
	if(neigborth(orderNow,orderNull,n) || neigborth(orderNull,orderNow,n)){
		(new Audio("audio/mouv.wav",0.2)).play();
		//console.log("ON PERMUTE");
		var Null = $("#"+"elt0");
		var Now = $("#"+e);

		var slide  = $("#anim-move");

		slide.css("width",Now.css("width"));
		slide.css("height",Now.css("height"));
		slide.css("top",Now.css("top"));
		slide.css("left",Now.css("left"));
		slide.css("bottom",Now.css("bottom"));
		slide.css("rigth",Now.css("rigth"));
		$("img",slide).attr("src",$("img",Now).attr("src"));
		slide.css("display","block");


		var src0 = $("img",Null).attr("src");
		var src1 = $("img",Now).attr("src");
		$("img",Now).attr("src",src0);
		slide.animate(
		{
			"top":Null.css("top"),
			"left":Null.css("left"),
			"bottom":Null.css("bottom"),
			"rigth":Null.css("rigth"),
		},500,function(){
			$("img",Null).attr("src",src1);
			slide.css("display","none");
		}
		);

		Null.attr("id",e);
		Now.attr("id","elt0");

		Null.attr("onclick","move('"+Null.attr("id")+"',"+n+")");
		Now.attr("onclick","move('"+Now.attr("id")+"',"+n+")");

		$("span",Null).html(Null.attr("id").replace("elt",""));
		$("span",Now).html(Now.attr("id").replace("elt",""));

		if(isOver(p,n)){
			var c = $("#elt0");
			c.attr("id","elt00");
		}

	}
}