

	window.onload = function(){
		var menus = document.getElementsByClassName('menu');//主菜单选项
		var local = document.getElementsByClassName('location')[0];//当前位置
		local.innerHTML = menus[0].innerHTML;

	}
	function outMenuClick(argument){
		var outmenus = document.getElementsByClassName('outMenu');//主菜单
		var olen = outmenus.length;
		var menus = document.getElementsByClassName('menu');//主菜单选项
		var mores = document.getElementsByClassName('more');//小三角
		var innermenus = document.getElementsByClassName('innerMenu');//子菜单
		var innerItems = document.getElementsByClassName('innerItem');//子菜单选项
		var local = document.getElementsByClassName('location')[0];//当前位置
		var contents = document.getElementsByClassName('content');//主要内容
		var innerContents = document.getElementsByClassName('innerContent');//子项内容
		var innerlen = innerContents.length;//子菜单选项的个数

		//点击主菜单时让次级菜单内容消失，子菜单选项字体颜色还原
		for(var j=0;j<innerlen;j++){
			innerContents[j].style.display = "none";
			innerItems[j].style.color = "#333";
		}

		for(var i=0;i<olen;i++){
			innerContents[i].style.display = "none";
			if(outmenus[i] == argument){
				menus[i].style.background = "linear-gradient(to top,#C5C0B4,#F2E4D5)";
				menus[i].style.color = "#10A5B5";

				local.innerHTML = menus[i].innerHTML;
				contents[i].style.display = "block";
				//打开和关闭次级菜单
				if(innermenus[i].style.display == "flex"){
					innermenus[i].style.display = "none";
					mores[i].style.transform = "rotate(0deg)";
				}else{
					innermenus[i].style.display = "flex";
					mores[i].style.transform = "rotate(90deg)";
				}
			}else{
				mores[i].style.transform = "rotate(0deg)";
				menus[i].style.background = "#EFEBE0";
				menus[i].style.color = "#333";
				innermenus[i].style.display = "none";
				contents[i].style.display = "none";
			}
		}
	}
	function check(argument){
		var menus = document.getElementsByClassName('menu');
		var len = menus.length;
			for(var i=0;i<len;i++){
				if(menus[i] == argument){
					menus[i].style.background = "linear-gradient(to top,#C5C0B4,#F2E4D5)";
				}else{
					menus[i].style.background = "#EFEBE0";
				}
			}
		}

	function innerItemsCheck(argument){
		var innerContents = document.getElementsByClassName('innerContent');//子项内容
		var contents = document.getElementsByClassName('content');//主要内容
		var innerItems= document.getElementsByClassName('innerItem');//子菜单选项
		var menus = document.getElementsByClassName('menu');//主菜单选项
		var mainlen = contents.length;//主要内容的个数
		var innerlen = innerItems.length;//子项内容的个数
		var local = document.getElementsByClassName('location')[0];//当前位置
		//点击次级菜单时让主菜单内容消失，主菜单子项字体颜色还原
		var flag = true;
		for(var j=0;j<mainlen;j++){
			contents[j].style.display = "none";
			menus[j].style.color = "#333";
		}
		for(var i=0;i<innerlen;i++){
			if(innerItems[i] == argument){
				local.innerHTML = innerItems[i].innerHTML;

				innerContents[i].style.display = "block";
				innerItems[i].style.color = "#10A5B5";
			}else{
				innerContents[i].style.display = "none";
				innerItems[i].style.color = "#333";
			}
		}

	}


	function changeBigImg(argument){
		var switchs = document.getElementsByClassName('switch');
		var littleimgs = document.getElementsByClassName('littleImg');
		var bigImg = document.getElementsByClassName('bigImg')[0];
		var len = switchs.length;
		for(var i=0;i<len;i++){
			if(switchs[i] == argument){
				bigImg.src = littleimgs[i].src;
				switchs[i].style.border="2px solid #add";
			}else{
				switchs[i].style.border = "none";
			}
		}
	}

	function checkGoDate(argument){
		var date = document.getElementsByClassName('date')[0];
		var dates = document.getElementsByClassName('dateItem');
			for(var i=0;i<dates.length;i++){
				if(dates[i] == argument){
					date.innerHTML = dates[i].innerHTML;
				}
			}
		}

	function checkPeopleNum(argument){
		var people = document.getElementsByClassName('people')[0];
		var peoples = document.getElementsByClassName('peopleItem');
		for (var i = 0; i < peoples.length; i++) {
			if(peoples[i] == argument){
				people.innerHTML = peoples[i].innerHTML;
			}
		}
	}