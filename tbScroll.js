var tbScroll = function (opt){
	var container;
	var defaults = {
	    container: window,
	    offsetBottom : 100
	}
	function isEmptyObj(obj){
	    if (typeof obj == "object"){
	        return Object.keys(obj).length === 0;
	    }
	}
	if (typeof opt == "object" && !isEmptyObj(opt)){
	    Object.keys(defaults).forEach(function(key){
	        if(typeof opt[key] != "undefined"){
	            defaults[key] = opt[key];
	        }
	    });
	}
	function setAnim(){
		document.querySelectorAll(".tbs").forEach(function(ele){
			var animOpt= "";
			var duration = ele.getAttribute("data-tbs-duration");
			var delay = ele.getAttribute("data-tbs-delay");
			var iteration = ele.getAttribute("data-tbs-iteration");
			var animPos = window.innerHeight - defaults['offsetBottom'];
			var topPos = ele.getBoundingClientRect().top + window.scrollY;
			if (topPos <= animPos){
				if(!duration == undefined || !duration == ""){
					animOpt += ";animation-duration:"+duration;
				}
				if(!delay == undefined || !delay == "") {
					animOpt += ";animation-delay:"+delay+";transition-delay:"+delay;
				}
				if(!iteration == undefined || !iteration == "") {
					animOpt += ";animation-iteration-count:"+iteration;
				}
				ele.setAttribute("style","animation-play-state:running;visibility:visible;opacity:1;"+animOpt);
			}
		});
	}
	setAnim();
	container = defaults['container'];
	if(defaults['container'] != null && typeof defaults['container'] == 'string'){
		container = document.querySelector(defaults['container']);
	}
	container.addEventListener('scroll', function(e) {
		setAnim();
	});
}

// tbScroll({
// 	container : ".wrapper"
// });
