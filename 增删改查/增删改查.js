// window.onload = function (){
	var tt = document. querySelectorAll("tbody tr");//行
	// console.log(tt);
	var arr1 = [];//数据
	for(var i = 0;i < data.length;i ++){
		arr1.push(data[i]);
	}
	// console.log(arr1)
	var arr2 = [];//td
	for(var j = 0;j < tt.length;j ++){
		var td = tt[j].children
		arr2.push(tt[j].children)
	}
	// console.log(arr2);
	for(var i = 0;i < 10;i ++){
		for(var j = 0;j < 5;j ++){
			arr2[i][j+1].innerText = arr1[i][j];
		}
	}
	//添加开始
	function tianjiaya (){
		var tianjia1 = document.getElementsByClassName("tianjia1")[0];
		var tianjia = document.getElementsByClassName("tianjia")[0];
		var zzc = document.getElementsByClassName("zzc")[0];
		var qud1 = document.getElementsByClassName("qud")[0];
		var qud2 = document.getElementsByClassName("qud")[1];
		tianjia1.onclick = function (){
			tianjia.style.display = "block";
			zzc.style.display = "block";
		}
		qud1.onclick = function (){
			var tbody = document.getElementsByTagName("tbody")[0];
			var tr1 = document.createElement("tr");
			var td1 = document.createElement("td");
			var td2 = document.createElement("td");
			var td3 = document.createElement("td");
			var td4 = document.createElement("td");
			var td5 = document.createElement("td");
			var td6 = document.createElement("td");
			var td7 = document.createElement("td");
			var input1 = document.createElement("input");
			td1.appendChild(input1);
			var button1 = document.createElement("button");
			var button2 = document.createElement("button");
			td7.appendChild(button1);
			td7.appendChild(button2);
			var xin1 = document.getElementsByClassName("x1");
			var xin2 = document.getElementsByClassName("x2");
			tr1.appendChild(td1);
			tr1.appendChild(td2);
			tr1.appendChild(td3);
			tr1.appendChild(td4);
			tr1.appendChild(td5);
			tr1.appendChild(td6);
			tr1.appendChild(td7);
			var num = tt.length;
			tbody.appendChild(tr1);
			tt.length ++;
			input1.setAttribute('type','checkbox');
			input1.classList.add("quax");
			button1.innerText = "修改";
			button2.innerText = "删除";
			button1.classList.add("xiugai1");
			button2.classList.add("sanchu1");
			tr1.classList.add("trr");
			td2.innerText = xin1[0].value;
			td3.innerText = xin1[1].value;
			td4.innerText = xin1[2].value;
			td5.innerText = xin2[0].value;
			td6.innerText = xin2[1].value;
			xin1[0].value = "";
			xin1[1].value = "";
			xin1[2].value = "";
			xin2[0].value = "";
			xin2[1].value = "";
			var quax = document.getElementsByClassName("quax");
			var quax1 = document.getElementsByClassName("quax1");//全
			quax1[0].checked = false;
			for(var i = 0;i < quax.length;i ++){
				quax[i].checked = false;
			}
			tianjia.style.display = "none";
			zzc.style.display = "none";
			checked_quan()
			// console.log(tt.length);
			shanchu();
			modify();
		}
		qud2.onclick = function (){
			var xin1 = document.getElementsByClassName("x1");
			var xin2 = document.getElementsByClassName("x2");
			xin1[0].value = "";
			xin1[1].value = "";
			xin1[2].value = "";
			xin2[0].value = "";
			xin2[1].value = "";
			tianjia.style.display = "none";
			zzc.style.display = "none";
		}

	}
	tianjiaya();
	// 添加结束
	// 全选开始
	var quax = document.getElementsByClassName("quax");
	var quax1 = document.getElementsByClassName("quax1");//全
	quax1[0].onclick = function (){
		if(quax1[0].checked == true){
			for(var i = 0;i < quax.length;i ++){
				quax[i].checked = true;
			}
		}else{
			for(var i = 0;i < quax.length;i ++){
				quax[i].checked = false;
			}
		}
		// console.log(1)
	}
	function checked_quan(){
		for(var i = 0; i < quax.length;i ++){
			quax[i].onclick = function (){
				var unsel = document .querySelectorAll("tbody tr td input:not(:checked)");
		         // console.log(unsel)
				if(unsel.length == 0){
					quax1[0].checked = true;
				}else{
					// console.log(false)
					quax1[0].checked = false
				}
				// console.log(1)
			}
		}
	}
	checked_quan();
	// 全选结束
// }
	//删除开始
	function shanchu(){
		var sanchu = document.getElementsByClassName("sanchu")[0];
		var sanchu1 = document.getElementsByClassName("sanchu1");
		var quax = document.getElementsByClassName("quax");
		var quax1 = document.getElementsByClassName("quax1")[0];//全
		var tbody = document.getElementsByTagName("tbody")[0];
		sanchu.onclick = function (){
			var s = confirm("你确定要删除吗？");
			if(quax1.checked == true){
				if(s == true){
					tbody.parentNode.removeChild(tbody);
				}
			}else{
				for(var i = 0;i < quax.length;i ++){
					if(quax[i].checked == true){
						var nun = quax[i].parentNode.parentNode
						if(s == true){
							nun.parentNode.removeChild(nun);
						}
					}
				}
			}
		}
		for(var j = 0;j < sanchu1.length;j ++){
			sanchu1[j].onclick = function (){
				var a = confirm("你确定要删除吗？");
				for(var z = 0;z < quax.length;z ++){
					if(a == true){
						if (quax[z].checked == true) {
							var sus = sanchu1[z].parentNode.parentNode
							sus.parentNode.removeChild(sus);
						}
					}
				}
			}
		}
	}
	shanchu()
	//删除结束
	//修改开始
	function modify(){
		var xiugai1 = document.getElementsByClassName("xiugai1");//按钮
		var xiugai = document.getElementsByClassName("xiugai")[0];//弹框
		var zzc = document.getElementsByClassName("zzc")[0];//遮罩层
		var xiu = document.getElementsByClassName("xiu");//确认、取消
		var xin3 = document.getElementsByClassName("x3");//input框
		var xin4 = document.getElementsByClassName("x4");//input框
		var xig = document.getElementsByClassName("xig");//input框
		var trr = document.getElementsByClassName("trr");//tr
		for(var i = 0;i < xiugai1.length;i ++){
			xiugai1[i].onclick = fun;
		}
		function fun(){
			var tr = this.parentNode.parentNode;
			var td = tr.getElementsByTagName("td");
			for(var j = 0;j < xig.length;j ++){
				xig[j].value = td[j+1].innerHTML;
			}
				xiugai.style.display = "block";
				zzc.style.display = "block";

				xiu[0].onclick = function (){
				for(var j = 0;j < xig.length;j ++){
					td[j+1].innerHTML = xig[j].value;
				}
				xin3[0].value = "";
				xin3[1].value = "";
				xin3[2].value = "";
				xin4[0].value = "";
				xin4[1].value = "";
				xiugai.style.display = "none";
				zzc.style.display = "none";
			}
		}
		xiu[1].onclick = function (){
			xin3[0].value = "";
			xin3[1].value = "";
			xin3[2].value = "";
			xin4[0].value = "";
			xin4[1].value = "";
			xiugai.style.display = "none";
			zzc.style.display = "none";
		}
	}
	modify()
	//修改结束
	//查询开始
	var inputs = document.getElementsByTagName("input");//姓名、性别、电话
	inputs[0].onclick = function (){
		inputs[0].value = "";
	}
	inputs[1].onclick = function (){
		inputs[1].value = "";
	}
	inputs[2].onclick = function (){
		inputs[2].value = "";
	}
	function query (){
		var chaxun = document.getElementsByClassName("chaxun")[0];//查询按钮
		var trr = document.getElementsByClassName("trr");//tr
		var quax = document.getElementsByClassName("quax");//单选框
		chaxun.onclick = function (){
			for(var i = 0;i < trr.length;i ++){
				for(var j = 1;j < 7;j ++){
					if(inputs[0].value == arr2[i][j].innerText || inputs[1].value == arr2[i][j].innerText || inputs[2].value == arr2[i][j].innerText){
						var che = arr2[i][j].parentNode.children;
						var inp = che[0].children;
						inp[0].checked = true;
					}
				}
			}
			// for(var i = 0;i < quax.length;i ++){
			// 	quax[i].checked = true;
			// }
			for(var x = 0;x < quax.length;x ++){
				if(quax[x].checked == true){
					var xua = quax[x].parentNode.parentNode;
					// console.log(xua)
					xua.style.backgroundColor = "red";
				}
			}
		}
	}
	query();
	//查询结束











