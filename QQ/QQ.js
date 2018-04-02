window.onload = function(){
	/*
		 伪代码：
		 	1.默认好友只显示好友分组名称，好友列表隐藏；
		 	2.每点击一个好友列表分组名称，被点击的分组打开，其他分组收起来
		 		被点击的分组的三角尖尖由向右改为向下
		 	3.点击时：
		 		列表项的背景变为橘粉色，边框变为金色
		 		向单选一样，只能选中一个，每次点击的时候先for清除所有事件的效果再重新设置
		 		
		 	4.鼠标移入时：
		 		如果列表项是被点击状态this.state==1，那么不变色【同样显示原先的被点击的设置】
		 	 	否则，this.state==0列表项背景变为灰色，边框变为白色
		 	 	
		 	5.鼠标移出时：
		 		如果列表项是被点击状态this.state==1，那么不变色【同样显示原先的被点击的设置】
		 		否则，this.state==0列表项恢复原状
		 		
		 	5.分组收起来再打开的时候，之前操作的事件都清除
	 */
	//获取元素
	var QQapp = document.querySelector('#QQapp')
	var groups = QQapp.querySelectorAll('#QQapp .group')
	var groupNames = QQapp.querySelectorAll('#QQapp .groupName')
	var aUl = QQapp.querySelectorAll('#QQapp ul')
	var aIco = QQapp.querySelectorAll('#QQapp .ico')
	console.log(aUl)
	//定义一个空字符串之后用来存动态获取来的aLi
	var aLi ='';
	
	//定义一个空的数组用来存所有分组里面的li
	var arrLi =[];
	//console.log(arrLi.length)//输出的是所有aUl下的li总的个数
	
	for(var i = 0; i < aUl.length; i++){
		
		//动态获取每个Ul下来列表下面的li
		aLi = aUl[i].getElementsByTagName('li')//aLi是每个单组的aUl下的所有li
		//console.log(aLi)//可以分别输出每一组aUl的li
		//console.log(aLi.length)//可以分别输出每一组aUl的li的长度
		
		//给所有的下拉列表中的li绑定事件
		for(var j = 0; j < aLi.length; j++){
			//把所有想要的每一组aUl下的li放到数组arrLi中
			arrLi.push(aLi[j])
			
			//给每一个列表子项添加一个自定义属性记录鼠标的状态是移入还是点击
			aLi[j].state = 0 //默认鼠标点击事件为1，移入事件为0
			
			//给所有的下拉列表中的li绑定点击事件
			aLi[j].onclick = function (){
				//每次点击之前取消背景色、还原变化的边框、层级恢复
				for(var j = 0; j < arrLi.length; j++){
					arrLi[j].style.borderColor = 'grey'
					arrLi[j].style.backgroundColor = '#fff'
					arrLi[j].state = 0
				}
				//被点击的列表项边框变为金色，背景变为橘粉色
				this.style.borderColor = 'gold'
				this.style.backgroundColor = 'salmon'
				this.state = 1
			}
			
			//给所有的下拉列表中的li绑定鼠标移入事件
			aLi[j].onmouseover = function(){
				if(this.state == 0){//如果没有点击事件
					this.style.borderColor = '#fff'
					this.style.backgroundColor = 'lightgrey'	
				}else if(this.state == 1){//如果之前有点击事件
					this.style.borderColor = 'gold'
					this.style.backgroundColor = 'salmon'
				}
				//console.log(this.state)
			}
			
			//给所有的下拉列表中的li绑定鼠标移出事件
			aLi[j].onmouseout = function(){
				//console.log(this.state)
				if(this.state == 1){//如果有点击事件
					this.style.borderColor = 'gold'
					this.style.backgroundColor = 'salmon'	
				}else if(this.state == 0){
					this.style.borderColor = 'grey'
					this.style.backgroundColor = '#fff'
				}
			}
		}
		
		//默认好友只显示好友分组名称，好友列表隐藏
		aUl[i].style.display = 'none'
		
		//给groupNames写一个自定义属性，记录被点击的小组的下标，小组名groupNames被点击时，相同下标的aUl显示，没有被点击的小组名下标对应的aUl隐藏
		groupNames[i].index = i
		
		//给小组名groupNames添加一个自定义属性，分组没有列表隐藏的状态是abc是0，被点击展开的状态abc是1
		groupNames[i].abc = true
		//绑定三个分组名称groupNames的点击事件---每点击一个好友列表分组名称，被点击的分组打开，其他分组收起来
		groupNames[i].onclick = function(){
			//如果分组已经是显示状态，点击时候隐藏，如果分组隐藏，点击的时候显示
			if(this.abc == true){//当被点击个分组是隐藏的状态时
				//先收起来所有的分组 清空点击和移入事件
				for(var j = 0; j < groupNames.length; j++){
					aUl[j].style.display = 'none'
					aIco[j].innerHTML = '▸'
					groupNames[j].abc = true
				}
				//每次点击之前取消背景色、还原变化的边框、层级恢复
				for(var j = 0; j < arrLi.length; j++){
					arrLi[j].style.borderColor = 'grey'
					arrLi[j].style.backgroundColor = '#fff'
				}
				aUl[this.index].style.display = 'block'
				aIco[this.index].innerHTML = '▾'
				this.abc = false
			}else if(this.abc == false){
				aUl[this.index].style.display = 'none'
				aIco[this.index].innerHTML = '▸'
				this.abc = true
			}
		}
	}
}
