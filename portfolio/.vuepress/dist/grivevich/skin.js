// Garden Gnome Software - Skin
// Pano2VR 6.1.10/18007
// Filename: mobile.ggsk
// Generated 2020-11-01T22:09:01

function pano2vrSkin(player,base) {
	player.addVariable('ht_anivar1', 2, true);
	player.addVariable('opt_3d_preview', 2, true);
	var me=this;
	var skin=this;
	var flag=false;
	var hotspotTemplates={};
	var skinKeyPressed = 0;
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	var hs,el,els,elo,ela,elHorScrollFg,elHorScrollBg,elVertScrollFg,elVertScrollBg,elCornerBg;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	this.callNodeChange=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggNodeChange) {
				e.ggNodeChange();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	player.addListener('changenode', function() { me.ggUserdata=player.userdata; me.callNodeChange(me.divSkin); });
	
	var parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		el=me._rectangle_3=document.createElement('div');
		el.ggId="Rectangle 3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+='background : #6c6c6c;';
		hs+='border : 0px solid #000000;';
		hs+='bottom : 0px;';
		hs+='cursor : default;';
		hs+='height : 50px;';
		hs+='left : 0px;';
		hs+='opacity : 0.5;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 101%;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_3.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._rectangle_3.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._rectangle_3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._rectangle_3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._rectangle_3.style[domTransition]='';
				if (me._rectangle_3.ggCurrentLogicStateVisible == 0) {
					me._rectangle_3.style.visibility="hidden";
					me._rectangle_3.ggVisible=false;
				}
				else {
					me._rectangle_3.style.visibility=(Number(me._rectangle_3.style.opacity)>0||!me._rectangle_3.style.opacity)?'inherit':'hidden';
					me._rectangle_3.ggVisible=true;
				}
			}
		}
		me._rectangle_3.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._rectangle_3);
		el=me._controller2=document.createElement('div');
		el.ggId="controller2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 3px;';
		hs+='height : 46px;';
		hs+='position : absolute;';
		hs+='right : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 181px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._controller2.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._controller2.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._controller2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._controller2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._controller2.style[domTransition]='';
				if (me._controller2.ggCurrentLogicStateVisible == 0) {
					me._controller2.style.visibility="hidden";
					me._controller2.ggVisible=false;
				}
				else {
					me._controller2.style.visibility=(Number(me._controller2.style.opacity)>0||!me._controller2.style.opacity)?'inherit':'hidden';
					me._controller2.ggVisible=true;
				}
			}
		}
		me._controller2.ggUpdatePosition=function (useTransition) {
		}
		el=me._image_2222=document.createElement('div');
		els=me._image_2222__img=document.createElement('img');
		els.className='ggskin ggskin_image_2222';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAFdklEQVRYhc2YS2xVVRSGv3v7pNyWtij1FdAEkTJASJSAmvgAB8rEFyEtGEGjGI1K1BBjTByokJigCYkDNTE+Bg4Mj5kYMXHQFJABVBItvmJFGEhBoEUCRX4H+z+c3dNzy71A1J3snHP2Wnut/6y1115r74IkLqDNARYBtwDTgWuAiaadAH4HfgJ6gW3Anqo1SKq0N0taI6lf1bd+z22uVF+hAovVAc8CLwPtHhu0JXqAfuA3YMi0ZmAqMBO4zZa9zLQjwFpgAzByMRa7QdLu6M93SlomqUNSm6RWSS22RMm92WOt5unwnJ2RnN2WXVb3eKDuk3TcggYkdUdgSpIaJdVJqpFUzPQa0yYYaKukdssYsMwh66gK2ApJIxawRdK0CFC9lRcqWCsF89Z7bq'+
			'tlbbHsEUkrKwV2v6Qznrjef9psJZWAGa83Sppkmeut44x1jgus0yaWpLcVXHcpAMUWrFNYg23WIevsjHnjqKwDviHsUVuAx4A/TasHVgGzgNNR7BSAY8BbjrikLQCWWGYc9rXA58AXQKO/3wceIOx1885Fa4TyBaMf8Dpoiax1h8ZvqyM5tZL2jMN71DKbFNw6TdKvpr2ojCubJR02sVthkcbueyJHwaCkA5J+kbQw4i1KesPy9ks6lpl3KuJrsq5u0w4byzlga0zYobAwSxlgK3OA7ZI0T9J1GrsGGyTNlLRY0sHMvJMRX7KdtEvabvqaGFiSZpb5DxozivKAnZb0nv88b6FPkfSVpLPmT54xsKLBxVbrT4DN9cAhC8vLZ49GgLZqtHs+9ryYf4akryOePvcsMBT2uBbLOGSeuUVgoSNmmyPibE7misc+Ap4Ehv39'+
			'MDA7w78KuN3vPeY5EEVm3P52HwG+9NiiIjA/EiAzZdveaHwQ+BRYTdg63gR2ZPg/APrcu4Bvgf2mDWR4z5L+eI+f85G01+ZbqBC+9TmuLEq6U9KiDH2O10jeGrvWPfnukPSgpOk5vA1eZ3cZy96CpMOEcmYG8AdwktGb6L/R6oEJwOXAj8CRIlAycZjgygsqaS9RS9ZtqRgNipBi/hetSITSz/8CXMH9nPeKwEF/TI0YsuBKhHJ4A9AWjb0G3FhG2WJgefR9E/AZ0J0DKvHcVD8PImmjI+FphVKkSWN383ujzXKpx5J6qk9jy+R7lKai5R7b5O/BnIifaN1PmWdjkXQPutXoa6I/SNpV0XsD8CrwvL9nZegFwuZ6pb/fBZ4j3VibM7ITfQXC4QVgR15KmuR9pVyu7FOa905I6srZl1oVUlXSTitNN9lc2Wj+USkpL4'+
			'm32bTnS+JDCom3XLValPSJ0jI9aTGwBoVKpk2ZJJ647EM/n7FJa+2yJAjyIrWPEABLgZYM7XpgJfADocLNa0XSKrZg3SkWjS0Uu/wHcZWxIsdicXskY6mt5+FPrHWFQi3W5fEjid7EYkPAOr+vswVqbZE64Lsyf520M5nvclaCEGy1hCCo8zPRvdZYyh5GNgGPE7LBiPtsoNMuSCbVAD8Du4C/IuVTCFHeRlqV1BAON7uAUwQ3jgDvEA4jfcDN5BxG0NjjW7vdWrLpL+YYV1AIqg6FqqNd6fFtWJnjW56A7IF3ssFNsv+rBVjwnDZJVytsC5NV5YE33h4ScJsVjljtSi9RmhTqspoyIAum1Zs3OeC2W9bmCFTFVwRJf8gmlsK5r8uCE/cmIEt2UZP7RI/FNz7JvC6lZ8hhSUvK6T+fG2Zq9OG1V2Ej7MiAzOsJvcNz'+
			'eiM5eyy7rO5qLu5eAVo9Nkg4OPQA3xOuNo+b1kK4+uwk5L67SS/ujgKvcwku7rL57yVJ+1R92+e5rZXqq8RieW2OLbGA9HI4LtGTy+HttmzVl8P/AOmxYXCzefbAAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2222";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 38px;';
		hs+='left : 140px;';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='top : 6px;';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_2222.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_2222.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['image_2222'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._image_2222.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._image_2222.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._image_2222.style[domTransition]='opacity 0s';
				if (me._image_2222.ggCurrentLogicStateAlpha == 0) {
					me._image_2222.style.visibility=me._image_2222.ggVisible?'inherit':'hidden';
					me._image_2222.style.opacity=1;
				}
				else {
					me._image_2222.style.visibility=me._image_2222.ggVisible?'inherit':'hidden';
					me._image_2222.style.opacity=0.7;
				}
			}
		}
		me._image_2222.onclick=function (e) {
			player.toggleFullscreen();
		}
		me._image_2222.onmouseover=function (e) {
			me.elementMouseOver['image_2222']=true;
			me._image_2222.logicBlock_alpha();
		}
		me._image_2222.onmouseout=function (e) {
			me.elementMouseOver['image_2222']=false;
			me._image_2222.logicBlock_alpha();
		}
		me._image_2222.ontouchend=function (e) {
			me.elementMouseOver['image_2222']=false;
			me._image_2222.logicBlock_alpha();
		}
		me._image_2222.ggUpdatePosition=function (useTransition) {
		}
		me._controller2.appendChild(me._image_2222);
		me.divSkin.appendChild(me._controller2);
		el=me._controller=document.createElement('div');
		el.ggId="controller";
		el.ggDx=2.5;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 3px;';
		hs+='height : 43px;';
		hs+='left : -10000px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 295px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._controller.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._controller.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._controller.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._controller.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._controller.style[domTransition]='';
				if (me._controller.ggCurrentLogicStateVisible == 0) {
					me._controller.style.visibility="hidden";
					me._controller.ggVisible=false;
				}
				else {
					me._controller.style.visibility=(Number(me._controller.style.opacity)>0||!me._controller.style.opacity)?'inherit':'hidden';
					me._controller.ggVisible=true;
				}
			}
		}
		me._controller.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		el=me._image_3333=document.createElement('div');
		els=me._image_3333__img=document.createElement('img');
		els.className='ggskin ggskin_image_3333';
		hs='data:image/png;base64,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';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 3333";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='height : 38px;';
		hs+='left : 254px;';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_3333.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_3333.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['image_3333'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._image_3333.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._image_3333.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._image_3333.style[domTransition]='opacity 0s';
				if (me._image_3333.ggCurrentLogicStateAlpha == 0) {
					me._image_3333.style.visibility=me._image_3333.ggVisible?'inherit':'hidden';
					me._image_3333.style.opacity=1;
				}
				else {
					me._image_3333.style.visibility=me._image_3333.ggVisible?'inherit':'hidden';
					me._image_3333.style.opacity=0.7;
				}
			}
		}
		me._image_3333.onclick=function (e) {
			player.toggleAutorotate();
		}
		me._image_3333.onmouseover=function (e) {
			me.elementMouseOver['image_3333']=true;
			me._image_3333.logicBlock_alpha();
		}
		me._image_3333.onmouseout=function (e) {
			me.elementMouseOver['image_3333']=false;
			me._image_3333.logicBlock_alpha();
		}
		me._image_3333.ontouchend=function (e) {
			me.elementMouseOver['image_3333']=false;
			me._image_3333.logicBlock_alpha();
		}
		me._image_3333.ggUpdatePosition=function (useTransition) {
		}
		me._controller.appendChild(me._image_3333);
		el=me._move_right=document.createElement('div');
		els=me._move_right__img=document.createElement('img');
		els.className='ggskin ggskin_move_right';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAADl0lEQVRYhb3Yz2tdRRQH8E+uEBWbmNqNP7IotCIVUxNaXNpGgksl6MJF24huVCSx+ge4Vqm1WBAXWktTXfijCDULxRaz1Kq1AUE0IBilm7YmaYl14XExc83LIz/ufS/xwDBv7n1zvt97Zs6ZOacjItSUm/EwHsJObMet6MI8ZvELLuAMPsdCLYSIqNr6IuJ4RMxHPZnP8/qqYnVUsNRdeB2Po8jPvs0WOIefcSlbqQtbcDd2Z4vuynP+wUd4Eb+3Y6kDDZZZiIi3I6I/IrpqtP48b6HBcgdWw13pxQ0RcbRhCU5HxI6aZJrbvRHxWYPOoxmnEqmOiBjPE/+KiNE2yTS30Yi4nvWPZ7w199SbeB5X8QQm19p0LchevI9NGW+08WUzqX04gb/xGL7aAE'+
			'Kl7MHH6MR+jC9Hqhc/Sh70At7dQEKlPIU3JM/dIXtl0fCHQ5nQxP9ESMY5nXEPlQ9LS/XhPK5LcWWmgsJBPImRNon1SnHvRvRjqrTUS5LVxisSIi3xMD5FTxukZjJukXnoiIhbcFHyhAFMV1TWg+OSxc7jEfzZIrFt+F7y+NsLDGVC52oQkgk8ilOS2SextUVS0xl/E4YK6UtJJ3orMoJjmVA7xL7M/WCB+/Pg6xaVwRgOS0s6afFD68g3ud9ZSOsJP7VBCl7OrdxrwzXnl/jbCmzOg0ttkiJZa6xFYpdzv7kjFkN69zqQKmU4kyKRPFZx3hwpNlzNDzatE6EeKajCr5J3VpGu3M8XuJIHW9aJUBm7zuJB1WPXbbm/UliMTfesA6HS885KoaJOMC3xpwv8kAcPtEFoq8UYdUoKqnWje4l/oZC+ipQytSKN0fyw1g/o'+
			'odyfaT77dknZSVUZlPZQjxSjDrdIaDu+k+5VdxS4JqU+8EwNRaXb91iM6K3Ks7n/BNeWu0/txm8VFJXBcUR1t19OeiUrdWq6T03hQyklf62isjHJ5dshBK/ipow/xcp39IN4p02wKvK0tOwr3tFn8Fz+/YqUbWyk7Mk4pD31XypfNP1xHG9J6/uBlJ9thOzN+jtxBCeXvF0hZT+ZM9jrG5AhjzVkyCeWy5BXqiV0RMSRhrx/ItanljDRoPPIcoRWI1W2/RExl5WUVZeBmmQGYmnVZS4i9q2GW6U+dafkIavVpy5Ld6Fu6bRfrT51EH+siriGpRrbfRHxXkTMRj2ZzfPWtZLXLGXNc9DSmmd3tlZzzfMLNWue/wJJBIbcm1/jVAAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="move_right";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 37px;';
		hs+='left : 212px;';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : inherit;';
		hs+='width : 37px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._move_right.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._move_right.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['move_right'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._move_right.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._move_right.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._move_right.style[domTransition]='opacity 0s';
				if (me._move_right.ggCurrentLogicStateAlpha == 0) {
					me._move_right.style.visibility=me._move_right.ggVisible?'inherit':'hidden';
					me._move_right.style.opacity=1;
				}
				else {
					me._move_right.style.visibility=me._move_right.ggVisible?'inherit':'hidden';
					me._move_right.style.opacity=0.7;
				}
			}
		}
		me._move_right.onmouseover=function (e) {
			me.elementMouseOver['move_right']=true;
			me._move_right.logicBlock_alpha();
		}
		me._move_right.onmouseout=function (e) {
			me.elementMouseDown['move_right']=false;
			me.elementMouseOver['move_right']=false;
			me._move_right.logicBlock_alpha();
		}
		me._move_right.onmousedown=function (e) {
			me.elementMouseDown['move_right']=true;
		}
		me._move_right.onmouseup=function (e) {
			me.elementMouseDown['move_right']=false;
		}
		me._move_right.ontouchend=function (e) {
			me.elementMouseDown['move_right']=false;
			me.elementMouseOver['move_right']=false;
			me._move_right.logicBlock_alpha();
		}
		me._move_right.ggUpdatePosition=function (useTransition) {
		}
		me._controller.appendChild(me._move_right);
		el=me._move_left=document.createElement('div');
		els=me._move_left__img=document.createElement('img');
		els.className='ggskin ggskin_move_left';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAADh0lEQVRYhbXYy29VVRQG8F8vBENsEXBiRBOTSozEasHHEKyoQxOiIxUbdcYALP4FTAk+GpsYB2gbqg6EaAwyMIaqQ4NPBsYoSROfE6AvUnHgcrD3yT1eess5995+yc7OOffstb679t7r1RcRamIjHsMjuBd34iZswgLm8Qt+wAw+xXItDRFRdQxFxGREzEc9zOd191TV1VfBUrfiNTyFRn73dbbAOfyMS9lKm7AV2/EAHsf9ec2/OIkx/NGNpZ6NiIX8j5cj4q2I2BkRAzXGzrxuOctZiIj9q+lt90NfRIyXtuBMROyoSaZ13J3lFBjPeiqR6ouIE3nh1Yg41CWZ1nEwy42IeDci1rVyWOlMvY5DWMLT+Px6h64DPIz30I83caD8YyupZzCNf/Akvl'+
			'gDQgX24BQ2YH/Wew2pbfgRA9INOb6GhAq8KN3sRezAbzSvOLySCZ3uAaFhbK7w3XGcyXqPFS8LSw3hO2nbdhWMO8Q+TOFDjFb4/nbJ390g/ZnzhaVelqx2oktCz2dCc/io4ppfpfPUwGGSpW7En5IJd0lxqxOM4UgmNCrFvarYLkWJJdzSwN5M6JsuCB0pEXqiJiFSqDonuYhHG1K0h886JDQlWWkWu6Wz2QnO5nlkvZR+wFc1hWzOhEZKhOY6JFTWf18Dg/nhpw4JzfSAUFn/4HpsyQ+XahD6EndkQqM9IAQX87ylIR1ykletgn2ZEEz2iBDp5kF/o0RmoM3HrXhH0ylOSb6pF+jP81IDl/PD1hoCCm89h3Hp9nWLm/N8uYEL+eGumkLKxAo/1Q0K/RcaUtUBD3YgqHzzxiSrdYqH8vx9Q9P77u1Q2GwmNqsZ+zpB'+
			'4cRnitj3l3TQdmpuZ11sxsdSpK/rKgbxrVLsuyJlgLSkpTVRjnsj6lms0HsKV1rzqatSndZN+iITmlQtMN8mZQjX5FPn8YFUkh/tkhD1UpdjWe/JzKNtjv4S3u4BuevhBal6apuj/665t0elamMtsUdzVw4oHZlGy4fTeEMqe96X6rO1wO4sfwMmlMortK2Qp0sV8sE1qJD/zvKnVyrd2/US1kXERKnu/yR600s4XZI5sVLJvhqpYjwXEYtZSNF1Ga5JZjj+33VZzHK76k9tw6tW709dlG7QgBTtV+tPHZYuVXtcx1KtnbypkuWqYjGvG6qqq4qlWrExW6C15zmQrVXueZ7VQc/zP+hYjLDyeLAbAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="move_left";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 37px;';
		hs+='left : 170px;';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : inherit;';
		hs+='width : 37px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._move_left.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._move_left.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['move_left'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._move_left.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._move_left.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._move_left.style[domTransition]='opacity 0s';
				if (me._move_left.ggCurrentLogicStateAlpha == 0) {
					me._move_left.style.visibility=me._move_left.ggVisible?'inherit':'hidden';
					me._move_left.style.opacity=1;
				}
				else {
					me._move_left.style.visibility=me._move_left.ggVisible?'inherit':'hidden';
					me._move_left.style.opacity=0.7;
				}
			}
		}
		me._move_left.onmouseover=function (e) {
			me.elementMouseOver['move_left']=true;
			me._move_left.logicBlock_alpha();
		}
		me._move_left.onmouseout=function (e) {
			me.elementMouseDown['move_left']=false;
			me.elementMouseOver['move_left']=false;
			me._move_left.logicBlock_alpha();
		}
		me._move_left.onmousedown=function (e) {
			me.elementMouseDown['move_left']=true;
		}
		me._move_left.onmouseup=function (e) {
			me.elementMouseDown['move_left']=false;
		}
		me._move_left.ontouchend=function (e) {
			me.elementMouseDown['move_left']=false;
			me.elementMouseOver['move_left']=false;
			me._move_left.logicBlock_alpha();
		}
		me._move_left.ggUpdatePosition=function (useTransition) {
		}
		me._controller.appendChild(me._move_left);
		el=me._move_up=document.createElement('div');
		els=me._move_up__img=document.createElement('img');
		els.className='ggskin ggskin_move_up';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAADeElEQVRYhcXYTWhdRRQH8F+uUCsmaa0boRUCVrRCv6K4tE1Ql35AXYgfpa6ULqK0+9Ktom3jx8KFbdr6AYoRRQXRRl2qldp2oVghUOtCaE0TbdCFx8XM5b0+38t7Ny8ffxjm3jtz5vzvmZkzZ05PRKiI63EvhrAJt+AG9GEGf+AXnMYJfIG/KmmIiE7Lxog4EhEzUQ3TWW5jp7p6OrDUWryIR1Dkb99lC3yLn3ApW6kPa3Ab7s4WHcwy/+Jd7MGFbiz1eP7TiIgrEfF6RGyJiL4KZWuWm62z3GNz6W3V0BMRo3VT8FFEbKhIprFsyOOUOJj1dETqmog4ngX/joiRLsk0lmfzuBERx5oRa7amXsFu/IlH8VW7RTcPbMPb6MUoRuobG0k9iTH8gx34ch'+
			'EIldiO97ACT+B4M1Jr8aPEfgSHF5FQiadwUNq5t+M3alscXsqEPlkiQvAGPpVcyYHyY2mpjTglTdudOL9EpOBmnJSmcQvOlJbaK1nt6BITkvUdzfr3kCx1HX6Xpm6rdG7NB7swjql5yK7H95jGTQXuz4ROdkHoYRzC11g9D/lzWX8/7iswnBs+64LQWH4eyM/zIVbqHy6k8IN0yFbFkGQh2ImJ/G2spURrlPo3FdJ8ws8VBxlQs8qItJ66IVbqX19gVX65WJFQuX72qfm1qUxsUprW/RXGvJTrVYXkuEhetROsxoe5PqDO6dURuycTey6XTjCd6/6ijkxfi87NCA1I1tnXot8UHsj1fsldtEN/Sa7A5fxyYweCY5LXHddwsjfBZB2xQ9J0zoU1ub5cSD4Cbu2A0JC0kHe26VviVO47pfZDrVDqP1dItw64q42CIxUJ'+
			'lZhQ252Tc/Qr9Z/uiYgH8YHkUYcqKlxITEjBwEMLefZ1g/+dfbN4Pzc+swyE4Olcj2O2WTw1iF+XkNA6yUorsBlny3jqjBQvr8QLS0iIdNFdmfWfZflj9F2SD2sZo1+QrlbwvHRULCa2q83K7pJQIylSWPoqrsU70v1sMbANb0nraBTHrmpd5hvym81uyHPlEl6uu/d/HN3nEu7I45R4LRug4wTHQmZdBrPclTzOdB63q/zUOmnb7nB1fuoEvpHyUxel3EOvFG2U+alhtTOtzE/t1c4PtrHUQmTyZiLicCxwJq8R9TnPzWo5z95srTLn+YN0yH6uYs7zP1AOiuX0JYOSAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="move_up";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 37px;';
		hs+='left : 128px;';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : inherit;';
		hs+='width : 37px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._move_up.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._move_up.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['move_up'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._move_up.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._move_up.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._move_up.style[domTransition]='opacity 0s';
				if (me._move_up.ggCurrentLogicStateAlpha == 0) {
					me._move_up.style.visibility=me._move_up.ggVisible?'inherit':'hidden';
					me._move_up.style.opacity=1;
				}
				else {
					me._move_up.style.visibility=me._move_up.ggVisible?'inherit':'hidden';
					me._move_up.style.opacity=0.7;
				}
			}
		}
		me._move_up.onmouseover=function (e) {
			me.elementMouseOver['move_up']=true;
			me._move_up.logicBlock_alpha();
		}
		me._move_up.onmouseout=function (e) {
			me.elementMouseDown['move_up']=false;
			me.elementMouseOver['move_up']=false;
			me._move_up.logicBlock_alpha();
		}
		me._move_up.onmousedown=function (e) {
			me.elementMouseDown['move_up']=true;
		}
		me._move_up.onmouseup=function (e) {
			me.elementMouseDown['move_up']=false;
		}
		me._move_up.ontouchend=function (e) {
			me.elementMouseDown['move_up']=false;
			me.elementMouseOver['move_up']=false;
			me._move_up.logicBlock_alpha();
		}
		me._move_up.ggUpdatePosition=function (useTransition) {
		}
		me._controller.appendChild(me._move_up);
		el=me._move_down=document.createElement('div');
		els=me._move_down__img=document.createElement('img');
		els.className='ggskin ggskin_move_down';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAADg0lEQVRYhcXYS4xURRQG4K9bgxoYGCFxoZiQiPERQUR0KQ8NSxMTXRg1hJ2vCET2hq0vHIwuXAiMqAtRo4SYGAPq0gDqsNGICQlq3IDDDEJk4XFx6jpNz/R03x5m+JPK7ep7T53//nXuqarTiAg1MR8PYT3uxi24HgtwDn/hV/yIw/gKf9fyEBG9thURsTsixqMexiNiT7HvyVejB6WW4lU8hmb57wgO4Tv8jNNFpQVYgttwPzZgTbH5F/vxIn6biVJPRsRYeePzEfFORKyOiIEabVWxO1/GGSvjdvTb6cZVEfF2yxQcjIg7a5Jpb3eUcSq8GRGNXkk1IuL9YvhPRGydIZn2tqWMGxGxrwjQNaaG8EKJkcfxTbeg6wNr8aGMwbfwfOvNdlJPYRgX8S'+
			'i+ngVCFR7Ax7gGm4rfSaRuxE8YwBbsnkVCFTbLmTmH2/E7E5847CyEvpgjQoqfg3IaX6/+rJS6S2bgi1itWx65vFiKY5iHVTheKbVdqjY8x4QUf8PF/3ZSqevwJxZKlU7MMSly/fxextYNTWwshI5eIULkAn5UxtbGplzt4ctpjAaxF4/04XAQn7X46YTK/4arsbJ0jkxjsKwQWo9RuSXpFXt7tKv8r2xieen8Mo3BDzLBVYqtqknocLGfDpX/5U0sKp0zXYw+lUl1EJ9L9abDkFS3eqFuOF2uixoxkdIX9mAI27ADJ+VSMTrFMzvKc9M9MxXGyNwwVpPUztKW4VupXDvpbYXIwzUIDZTreBNnS2dxj8bwkpzOZTJuKmKbpUqjUqGTNcZcUq5nmyZy0601BiDj5LAM5CpdDBVCm2oSavV/oomR0lnT4eE6xMiPoU7K'+
			'qFD5H2nKAwCZ2euiXZVNclr7QeX/0OVa+wbl9PW75Zm09l0w8XZP9zno6AwIwTPl+gkuVPupFTLJXcS9ODUDB3Vxs1yMJ+2njsuD4rXy4DmXeKX43V94dNyjb8W7c0Co6x79Dzxbfr+MdbNMaJ1UCZ6rCLWTgn3YJef3A3k+mw2sLePPk+e+4Uvudjghv3clT8idagmNiHij5dx/ILIWMNNawoGWMXdFjVpCa3siJqouFyKrJ/fUJFO76tJLfeomvObS+tQxWaGr6lNnMC6/3MWyPnUfHnRpfeojWZ/6P6inRBel2it5e1qU6xWzUslrx/yiwAZ56KhqngNFrarmOaLPmud/5A2NPRp0ajQAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="move_down";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 37px;';
		hs+='left : 86px;';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : inherit;';
		hs+='width : 37px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._move_down.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._move_down.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['move_down'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._move_down.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._move_down.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._move_down.style[domTransition]='opacity 0s';
				if (me._move_down.ggCurrentLogicStateAlpha == 0) {
					me._move_down.style.visibility=me._move_down.ggVisible?'inherit':'hidden';
					me._move_down.style.opacity=1;
				}
				else {
					me._move_down.style.visibility=me._move_down.ggVisible?'inherit':'hidden';
					me._move_down.style.opacity=0.7;
				}
			}
		}
		me._move_down.onmouseover=function (e) {
			me.elementMouseOver['move_down']=true;
			me._move_down.logicBlock_alpha();
		}
		me._move_down.onmouseout=function (e) {
			me.elementMouseDown['move_down']=false;
			me.elementMouseOver['move_down']=false;
			me._move_down.logicBlock_alpha();
		}
		me._move_down.onmousedown=function (e) {
			me.elementMouseDown['move_down']=true;
		}
		me._move_down.onmouseup=function (e) {
			me.elementMouseDown['move_down']=false;
		}
		me._move_down.ontouchend=function (e) {
			me.elementMouseDown['move_down']=false;
			me.elementMouseOver['move_down']=false;
			me._move_down.logicBlock_alpha();
		}
		me._move_down.ggUpdatePosition=function (useTransition) {
		}
		me._controller.appendChild(me._move_down);
		el=me._zoom_out=document.createElement('div');
		els=me._zoom_out__img=document.createElement('img');
		els.className='ggskin ggskin_zoom_out';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAADEklEQVRYhcXYy49URRQG8N9cDGYiPQbcGNHVSIzE0Rl8LMH3P6ArFRe6YwGK/wXxRZzEuNBoGHWh7JCFMaAuDSo6C2OUlc8NkJkeMuKC46Kq0tfLdE83TXd/SaVy7+065+tTr/OdqYgwIKbxBB7FvbgTN2MGq1jBr/gRp/E51gfyEBH9trmIeD8iVmIwrORx9/Tra6qPSN2GN/A0qvzu2xyBM/gFF3KUZrADu/AAnsT9ecwVfIqX8ecwkXouIlbzP16PiHciYiEiWgO0hTxuPdtZjYj9vfx2+zAVEUdrU3AyInYPSKbZ7s52Co5mP32RmoqIY3ng5Yg4NCSZZjuY7UZEfBgRW5ocNlpTb+IQ1vAMvtxs0V0DHsZH2Ia3caD+sUnqWSzhXzyFr0ZAqG'+
			'AfjmMr9me/V5HaiZ/QknbIuyMkVPCitLPb2I3f6WxxeC0TOjEmQrKfk9nvq+VlidQczkrTtkdmPCbcIZ13N2IeyyVSr0hROzZmQvCbtJ4qHCZF6ib8JYVwj3RvjRu7pFtiDbdWeCwT+m5ChEhX1RnpiHi8km57+GJChApO5f6RSko/4JsJkSko/u+rMJsffp4QmYLif7bC9vxwYUJkCs7nfvtUdI70mU0GzePrIZzulc7CXlglnQ3t/KI1hMPrgW25X7sBFyVCO3QIboSzNo/mMLgl9xcrnMsPd43QYT8o/s9VkuqABydEpuCh3P9QSTKIdLJPEuUQP13uvr+lhbagM53jxCy+V7v7LkkZII20dIwofo/jUjOfuizptHGmL7dLGcJV+dQyPpEk+ZExEiJlnNOSUF2me47+Et4bA6EXJPXUNUf/Q2duj0hqY5TYpzMr'+
			'B9SWTNX44RLekmTPx5I+GwX2Zvtbsagmr9BVIS/VFPLBESjkf7L9pY2ke7dawpaIWKzp/s/i+tQSTtRsLm4k2XuRKu35iGhnI6XqMj8gmfn4f9Wlne0OVZ/aidf1rk+dl3ZQS7rte9WnDkubqjs2iVSzkvdBLXL9op3HzfXrq59INTGdI9CsebZytOo1z1Ouoeb5H1FfY9pYgBzEAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="zoom_out";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 37px;';
		hs+='left : 44px;';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : inherit;';
		hs+='width : 37px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._zoom_out.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._zoom_out.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['zoom_out'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._zoom_out.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._zoom_out.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._zoom_out.style[domTransition]='opacity 0s';
				if (me._zoom_out.ggCurrentLogicStateAlpha == 0) {
					me._zoom_out.style.visibility=me._zoom_out.ggVisible?'inherit':'hidden';
					me._zoom_out.style.opacity=1;
				}
				else {
					me._zoom_out.style.visibility=me._zoom_out.ggVisible?'inherit':'hidden';
					me._zoom_out.style.opacity=0.7;
				}
			}
		}
		me._zoom_out.onmouseover=function (e) {
			me.elementMouseOver['zoom_out']=true;
			me._zoom_out.logicBlock_alpha();
		}
		me._zoom_out.onmouseout=function (e) {
			me.elementMouseDown['zoom_out']=false;
			me.elementMouseOver['zoom_out']=false;
			me._zoom_out.logicBlock_alpha();
		}
		me._zoom_out.onmousedown=function (e) {
			me.elementMouseDown['zoom_out']=true;
		}
		me._zoom_out.onmouseup=function (e) {
			me.elementMouseDown['zoom_out']=false;
		}
		me._zoom_out.ontouchend=function (e) {
			me.elementMouseDown['zoom_out']=false;
			me.elementMouseOver['zoom_out']=false;
			me._zoom_out.logicBlock_alpha();
		}
		me._zoom_out.ggUpdatePosition=function (useTransition) {
		}
		me._controller.appendChild(me._zoom_out);
		el=me._zoom_in=document.createElement('div');
		els=me._zoom_in__img=document.createElement('img');
		els.className='ggskin ggskin_zoom_in';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAAlCAYAAADFniADAAADLklEQVRYhcXYzW9UVRgG8N9cEkxDpxrcWWVTjZFYLSguxe8/QFmpaKI7FqD4Bxi3REVCE3ShkVB1ocQNsjAEdGvUqF0Yg2z82im2HVJx4cvinJteL53hzpSZeZKT0zvnnvd9+p6P+z5vKyL0iQk8jkdwD27HjZjCMpbwM37AOXyO1b48RETTNhsR70fEUvSHpTzv7qa+Wg0idQsOYw+K/Ns3OQJf4zz+ylGawlbcgfvxBO7Lc/7DJ3gZf2wkUs9GxHL+j1cj4p2I2BER7T7ajjxvNdtZjoi9vfx2G2hFxJHKEpyOiO19kqm3u7KdEkeyn0akWhFxIk+8HBEHNkim3vZnuxERH0TEpjqH9fbUWziADp7GF9fadAPgIXyISRzDvupgndQzWMC/eApfDo'+
			'FQid04ic3Ym/1eRWoaP6ItnZB3h0ioxIvSyV7BdvzG2hGHNzKhUyMiJPs5nf2+Xv5YRmoW30nLtlNmPCLcJt13N2AOi2WkXpGidmJAQq9Jl+fxAeb+Ku2nAgflP7bgyfzCsQGMXg+8nfs92FLgUWlNv5U+pOPAeWkJJ/FYIX3t4cyYCJU4m/uHCyn9gK/GRKZE6f/eAjP54acxkSlR+p9pRcSytKempUusF37BTQM63Ya/e4xPSilNp8iENCA0bHRyP1lYI9Pu8nIV26RErt4O5/FPu4xP6R0lUqTIkbqYH7Y2IDVM3Jz7iwUu5Ic7x0SmROn/QiGpDtg1JjIlHsj994Ukg0g3+zhRXuLnCukm70jqY6brlOFiJvvv4EyBS1IGSC0t7QOvSifs+QHnl35P4lI9n7os6bRR5lO3SjryqnxqER9LkvzQCAmRMs4JSagu'+
			'0j1HfwnvjYDQC5J66pqj/25tbQ9JamOY2G1tVfapbJmi9uICjkqy5yNJnw0DD2b7mzGvIq/QVSEvVBTy/iEo5H+y/YX1pHu3WsKmiJiv6P7P4vrUEk5VbM6vJ9l7kSrbcxGxko2UVZe5PsnMxf+rLivZ7obqU9N4U+/61J/SCWpLX/te9amD0qHqjmtEql7JO16JXFOs5HmzTX01iVQdEzkC9ZpnO0erWvM8a4Ca5xVfQGHC9+5tQwAAAABJRU5ErkJggg==';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="zoom_in";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 37px;';
		hs+='left : 2px;';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='top : 3px;';
		hs+='visibility : inherit;';
		hs+='width : 37px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._zoom_in.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._zoom_in.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['zoom_in'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._zoom_in.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._zoom_in.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._zoom_in.style[domTransition]='opacity 0s';
				if (me._zoom_in.ggCurrentLogicStateAlpha == 0) {
					me._zoom_in.style.visibility=me._zoom_in.ggVisible?'inherit':'hidden';
					me._zoom_in.style.opacity=1;
				}
				else {
					me._zoom_in.style.visibility=me._zoom_in.ggVisible?'inherit':'hidden';
					me._zoom_in.style.opacity=0.7;
				}
			}
		}
		me._zoom_in.onmouseover=function (e) {
			me.elementMouseOver['zoom_in']=true;
			me._zoom_in.logicBlock_alpha();
		}
		me._zoom_in.onmouseout=function (e) {
			me.elementMouseDown['zoom_in']=false;
			me.elementMouseOver['zoom_in']=false;
			me._zoom_in.logicBlock_alpha();
		}
		me._zoom_in.onmousedown=function (e) {
			me.elementMouseDown['zoom_in']=true;
		}
		me._zoom_in.onmouseup=function (e) {
			me.elementMouseDown['zoom_in']=false;
		}
		me._zoom_in.ontouchend=function (e) {
			me.elementMouseDown['zoom_in']=false;
			me.elementMouseOver['zoom_in']=false;
			me._zoom_in.logicBlock_alpha();
		}
		me._zoom_in.ggUpdatePosition=function (useTransition) {
		}
		me._controller.appendChild(me._zoom_in);
		me.divSkin.appendChild(me._controller);
		el=me._controller3=document.createElement('div');
		el.ggId="controller3";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 5px;';
		hs+='height : 38px;';
		hs+='left : 9px;';
		hs+='position : absolute;';
		hs+='visibility : inherit;';
		hs+='width : 82px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._controller3.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._controller3.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._controller3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._controller3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._controller3.style[domTransition]='';
				if (me._controller3.ggCurrentLogicStateVisible == 0) {
					me._controller3.style.visibility="hidden";
					me._controller3.ggVisible=false;
				}
				else {
					me._controller3.style.visibility=(Number(me._controller3.style.opacity)>0||!me._controller3.style.opacity)?'inherit':'hidden';
					me._controller3.ggVisible=true;
				}
			}
		}
		me._controller3.ggUpdatePosition=function (useTransition) {
		}
		el=me._hiidemenu0=document.createElement('div');
		els=me._hiidemenu0__img=document.createElement('img');
		els.className='ggskin ggskin_hiidemenu0';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAADz0lEQVRYhb3YTWhcVRQH8N9MUhHMSKhCoZTGRTHJRtKFtWpBig1xZywIGqloUaGLatAqfnWl6EKRqrixixa3gh+7ggERQm3cJLppUlzYUroSFdtiNZleF/e+zMs0M29mXvQPjzvv3XvO+c+595577qmEEPSAMezDfdiBbbgl9V3FRfyM05jBQtcWQgidPrUQwishhMXQPRaTbK1Te5UOPLYJz+N1bE7ffk2emMUiLuBy6qthO0awJ3n29tT3G97BR1gu47HhEMJ87p/PhRCeCCFsCSFs7vDZkmTmcnrmk+6ePDaJz5IHLuA1nCpybwEewruiR6/gAL5ab2ArYk/hOPrxNV7QmKqyqOFDPIwVPIcTnRB7BJ+jDx+Ia6KnrdsGFXHNvog6HsWX7YiN4g'+
			'cM4Bje2mBCzTiKaXFad+HsesQ2JVJj4rw/Y+M91YwKPsV+Mdbtku3W3E54Ke2Y8yGEoaadVYS9adyODsY279qhEMIvqe9IxqeamNfEOSfuvm4X+kpqgzgt3eByk+0aVokdEoPnnHIhYTmnsxucwpnE4VCe2MHUflyCVEasV2S2DxKJ7cSweMx8U46XegnZmcRhGDureDDXsdJKqkPcVEJ2RcMx+6rYnV5mS1GKqIthp1dkHHZXRdcRs4SyqOtt8WfIONzZj63p5UIbgW1t+iq4ln6v4I4244oCdsZha794/NA+/vxVoDBvvI7rIskgTm2fmBBcay26hsNAf+5ju39zF/5OBvs0piszdj71V6z1bqazkmRr+KmA3KriK2JgGxAzzPXwbYGevcngzWKQrrQZe1ubvtXZq+JSetleYLwdsvh1XfF0tUPG4VIV59LLaAmF'+
			'eZTJSEZSe64qnlFwfzk+KJ8m7UntmaoY8WFcXHNl0G5tFaE/cYCZKuaxJF6xxltJdaG8V69l17wlzGfb/mRqD5fjhd7Py8z2SRrx6BMxVNyDiR6U9qX2H72dlRPimf174rIm5z+C98Rg+YCNu64VoYbvMISX8X4zsfxl5As8+z8ROy5eRn7E3VKymc8EljElngT7xavVf42jydZVPC6XATenKGfxpBjJp/GGciGgFSpJ93SydUDuTknrEsHToov7xDvmtI0tERwTayN1ccncUCJoldSdwGOiiyfFxdnLbm3GRNI1qTF9N5BCYRlqJISwkLusng4hTIXuy1BTSTbDQtK9IYW7NzGYvmU3qllxbVzEn6nvVjEnGxXPvnGNwt0feNsGFO7yz2AI4dUQwlIHZYBmLCXZwU7tdeKx9TCWPHGvRnE4n6JnxeHvk2e7Lg7/C5'+
			'e6U+xMrYOUAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="hiidemenu";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 38px;';
		hs+='left : 0px;';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hiidemenu0.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._hiidemenu0.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['hiidemenu0'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hiidemenu0.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hiidemenu0.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hiidemenu0.style[domTransition]='opacity 0s';
				if (me._hiidemenu0.ggCurrentLogicStateAlpha == 0) {
					me._hiidemenu0.style.visibility=me._hiidemenu0.ggVisible?'inherit':'hidden';
					me._hiidemenu0.style.opacity=1;
				}
				else {
					me._hiidemenu0.style.visibility=me._hiidemenu0.ggVisible?'inherit':'hidden';
					me._hiidemenu0.style.opacity=0.7;
				}
			}
		}
		me._hiidemenu0.onmouseover=function (e) {
			me.elementMouseOver['hiidemenu0']=true;
			me._hiidemenu0.logicBlock_alpha();
		}
		me._hiidemenu0.onmouseout=function (e) {
			me.elementMouseOver['hiidemenu0']=false;
			me._hiidemenu0.logicBlock_alpha();
		}
		me._hiidemenu0.ontouchend=function (e) {
			me.elementMouseOver['hiidemenu0']=false;
			me._hiidemenu0.logicBlock_alpha();
		}
		me._hiidemenu0.ggUpdatePosition=function (useTransition) {
		}
		me._controller3.appendChild(me._hiidemenu0);
		me.divSkin.appendChild(me._controller3);
		el=me._controllermobile=document.createElement('div');
		el.ggId="controllermobile";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='bottom : 5px;';
		hs+='height : 38px;';
		hs+='left : 9px;';
		hs+='position : absolute;';
		hs+='visibility : hidden;';
		hs+='width : 134px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._controllermobile.ggIsActive=function() {
			return false;
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._controllermobile.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.getIsMobile() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._controllermobile.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._controllermobile.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._controllermobile.style[domTransition]='';
				if (me._controllermobile.ggCurrentLogicStateVisible == 0) {
					me._controllermobile.style.visibility=(Number(me._controllermobile.style.opacity)>0||!me._controllermobile.style.opacity)?'inherit':'hidden';
					me._controllermobile.ggVisible=true;
				}
				else {
					me._controllermobile.style.visibility="hidden";
					me._controllermobile.ggVisible=false;
				}
			}
		}
		me._controllermobile.ggUpdatePosition=function (useTransition) {
		}
		el=me._hiidemenu=document.createElement('div');
		els=me._hiidemenu__img=document.createElement('img');
		els.className='ggskin ggskin_hiidemenu';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAADz0lEQVRYhb3YTWhcVRQH8N9MUhHMSKhCoZTGRTHJRtKFtWpBig1xZywIGqloUaGLatAqfnWl6EKRqrixixa3gh+7ggERQm3cJLppUlzYUroSFdtiNZleF/e+zMs0M29mXvQPjzvv3XvO+c+595577qmEEPSAMezDfdiBbbgl9V3FRfyM05jBQtcWQgidPrUQwishhMXQPRaTbK1Te5UOPLYJz+N1bE7ffk2emMUiLuBy6qthO0awJ3n29tT3G97BR1gu47HhEMJ87p/PhRCeCCFsCSFs7vDZkmTmcnrmk+6ePDaJz5IHLuA1nCpybwEewruiR6/gAL5ab2ArYk/hOPrxNV7QmKqyqOFDPIwVPIcTnRB7BJ+jDx+Ia6KnrdsGFXHNvog6HsWX7YiN4g'+
			'cM4Bje2mBCzTiKaXFad+HsesQ2JVJj4rw/Y+M91YwKPsV+Mdbtku3W3E54Ke2Y8yGEoaadVYS9adyODsY279qhEMIvqe9IxqeamNfEOSfuvm4X+kpqgzgt3eByk+0aVokdEoPnnHIhYTmnsxucwpnE4VCe2MHUflyCVEasV2S2DxKJ7cSweMx8U46XegnZmcRhGDureDDXsdJKqkPcVEJ2RcMx+6rYnV5mS1GKqIthp1dkHHZXRdcRs4SyqOtt8WfIONzZj63p5UIbgW1t+iq4ln6v4I4244oCdsZha794/NA+/vxVoDBvvI7rIskgTm2fmBBcay26hsNAf+5ju39zF/5OBvs0piszdj71V6z1bqazkmRr+KmA3KriK2JgGxAzzPXwbYGevcngzWKQrrQZe1ubvtXZq+JSetleYLwdsvh1XfF0tUPG4VIV59LLaAmF'+
			'eZTJSEZSe64qnlFwfzk+KJ8m7UntmaoY8WFcXHNl0G5tFaE/cYCZKuaxJF6xxltJdaG8V69l17wlzGfb/mRqD5fjhd7Py8z2SRrx6BMxVNyDiR6U9qX2H72dlRPimf174rIm5z+C98Rg+YCNu64VoYbvMISX8X4zsfxl5As8+z8ROy5eRn7E3VKymc8EljElngT7xavVf42jydZVPC6XATenKGfxpBjJp/GGciGgFSpJ93SydUDuTknrEsHToov7xDvmtI0tERwTayN1ccncUCJoldSdwGOiiyfFxdnLbm3GRNI1qTF9N5BCYRlqJISwkLusng4hTIXuy1BTSTbDQtK9IYW7NzGYvmU3qllxbVzEn6nvVjEnGxXPvnGNwt0feNsGFO7yz2AI4dUQwlIHZYBmLCXZwU7tdeKx9TCWPHGvRnE4n6JnxeHvk2e7Lg7/C5'+
			'e6U+xMrYOUAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="hiidemenu";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 38px;';
		hs+='left : 0px;';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._hiidemenu.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._hiidemenu.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['hiidemenu'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._hiidemenu.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._hiidemenu.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._hiidemenu.style[domTransition]='opacity 0s';
				if (me._hiidemenu.ggCurrentLogicStateAlpha == 0) {
					me._hiidemenu.style.visibility=me._hiidemenu.ggVisible?'inherit':'hidden';
					me._hiidemenu.style.opacity=1;
				}
				else {
					me._hiidemenu.style.visibility=me._hiidemenu.ggVisible?'inherit':'hidden';
					me._hiidemenu.style.opacity=0.7;
				}
			}
		}
		me._hiidemenu.onmouseover=function (e) {
			me.elementMouseOver['hiidemenu']=true;
			me._hiidemenu.logicBlock_alpha();
		}
		me._hiidemenu.onmouseout=function (e) {
			me.elementMouseOver['hiidemenu']=false;
			me._hiidemenu.logicBlock_alpha();
		}
		me._hiidemenu.ontouchend=function (e) {
			me.elementMouseOver['hiidemenu']=false;
			me._hiidemenu.logicBlock_alpha();
		}
		me._hiidemenu.ggUpdatePosition=function (useTransition) {
		}
		me._controllermobile.appendChild(me._hiidemenu);
		el=me._image_2222222=document.createElement('div');
		els=me._image_2222222__img=document.createElement('img');
		els.className='ggskin ggskin_image_2222222';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAFdklEQVRYhc2YS2xVVRSGv3v7pNyWtij1FdAEkTJASJSAmvgAB8rEFyEtGEGjGI1K1BBjTByokJigCYkDNTE+Bg4Mj5kYMXHQFJABVBItvmJFGEhBoEUCRX4H+z+c3dNzy71A1J3snHP2Wnut/6y1115r74IkLqDNARYBtwDTgWuAiaadAH4HfgJ6gW3Anqo1SKq0N0taI6lf1bd+z22uVF+hAovVAc8CLwPtHhu0JXqAfuA3YMi0ZmAqMBO4zZa9zLQjwFpgAzByMRa7QdLu6M93SlomqUNSm6RWSS22RMm92WOt5unwnJ2RnN2WXVb3eKDuk3TcggYkdUdgSpIaJdVJqpFUzPQa0yYYaKukdssYsMwh66gK2ApJIxawRdK0CFC9lRcqWCsF89Z7bq'+
			'tlbbHsEUkrKwV2v6Qznrjef9psJZWAGa83Sppkmeut44x1jgus0yaWpLcVXHcpAMUWrFNYg23WIevsjHnjqKwDviHsUVuAx4A/TasHVgGzgNNR7BSAY8BbjrikLQCWWGYc9rXA58AXQKO/3wceIOx1885Fa4TyBaMf8Dpoiax1h8ZvqyM5tZL2jMN71DKbFNw6TdKvpr2ojCubJR02sVthkcbueyJHwaCkA5J+kbQw4i1KesPy9ks6lpl3KuJrsq5u0w4byzlga0zYobAwSxlgK3OA7ZI0T9J1GrsGGyTNlLRY0sHMvJMRX7KdtEvabvqaGFiSZpb5DxozivKAnZb0nv88b6FPkfSVpLPmT54xsKLBxVbrT4DN9cAhC8vLZ49GgLZqtHs+9ryYf4akryOePvcsMBT2uBbLOGSeuUVgoSNmmyPibE7misc+Ap4Ehv39'+
			'MDA7w78KuN3vPeY5EEVm3P52HwG+9NiiIjA/EiAzZdveaHwQ+BRYTdg63gR2ZPg/APrcu4Bvgf2mDWR4z5L+eI+f85G01+ZbqBC+9TmuLEq6U9KiDH2O10jeGrvWPfnukPSgpOk5vA1eZ3cZy96CpMOEcmYG8AdwktGb6L/R6oEJwOXAj8CRIlAycZjgygsqaS9RS9ZtqRgNipBi/hetSITSz/8CXMH9nPeKwEF/TI0YsuBKhHJ4A9AWjb0G3FhG2WJgefR9E/AZ0J0DKvHcVD8PImmjI+FphVKkSWN383ujzXKpx5J6qk9jy+R7lKai5R7b5O/BnIifaN1PmWdjkXQPutXoa6I/SNpV0XsD8CrwvL9nZegFwuZ6pb/fBZ4j3VibM7ITfQXC4QVgR15KmuR9pVyu7FOa905I6srZl1oVUlXSTitNN9lc2Wj+USkpL4'+
			'm32bTnS+JDCom3XLValPSJ0jI9aTGwBoVKpk2ZJJ647EM/n7FJa+2yJAjyIrWPEABLgZYM7XpgJfADocLNa0XSKrZg3SkWjS0Uu/wHcZWxIsdicXskY6mt5+FPrHWFQi3W5fEjid7EYkPAOr+vswVqbZE64Lsyf520M5nvclaCEGy1hCCo8zPRvdZYyh5GNgGPE7LBiPtsoNMuSCbVAD8Du4C/IuVTCFHeRlqV1BAON7uAUwQ3jgDvEA4jfcDN5BxG0NjjW7vdWrLpL+YYV1AIqg6FqqNd6fFtWJnjW56A7IF3ssFNsv+rBVjwnDZJVytsC5NV5YE33h4ScJsVjljtSi9RmhTqspoyIAum1Zs3OeC2W9bmCFTFVwRJf8gmlsK5r8uCE/cmIEt2UZP7RI/FNz7JvC6lZ8hhSUvK6T+fG2Zq9OG1V2Ej7MiAzOsJvcNz'+
			'eiM5eyy7rO5qLu5eAVo9Nkg4OPQA3xOuNo+b1kK4+uwk5L67SS/ujgKvcwku7rL57yVJ+1R92+e5rZXqq8RieW2OLbGA9HI4LtGTy+HttmzVl8P/AOmxYXCzefbAAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_image';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="Image 2222222";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_image ";
		el.ggType='image';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 38px;';
		hs+='left : 44px;';
		hs+='opacity : 0.7;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._image_2222222.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._image_2222222.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['image_2222222'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._image_2222222.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._image_2222222.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._image_2222222.style[domTransition]='opacity 0s';
				if (me._image_2222222.ggCurrentLogicStateAlpha == 0) {
					me._image_2222222.style.visibility=me._image_2222222.ggVisible?'inherit':'hidden';
					me._image_2222222.style.opacity=1;
				}
				else {
					me._image_2222222.style.visibility=me._image_2222222.ggVisible?'inherit':'hidden';
					me._image_2222222.style.opacity=0.7;
				}
			}
		}
		me._image_2222222.onclick=function (e) {
			player.toggleFullscreen();
		}
		me._image_2222222.onmouseover=function (e) {
			me.elementMouseOver['image_2222222']=true;
			me._image_2222222.logicBlock_alpha();
		}
		me._image_2222222.onmouseout=function (e) {
			me.elementMouseOver['image_2222222']=false;
			me._image_2222222.logicBlock_alpha();
		}
		me._image_2222222.ontouchend=function (e) {
			me.elementMouseOver['image_2222222']=false;
			me._image_2222222.logicBlock_alpha();
		}
		me._image_2222222.ggUpdatePosition=function (useTransition) {
		}
		me._controllermobile.appendChild(me._image_2222222);
		el=me._enter_vr=document.createElement('div');
		els=me._enter_vr__img=document.createElement('img');
		els.className='ggskin ggskin_enter_vr';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAmCAYAAACoPemuAAAE/klEQVRYhbWYzW+UVRTGf+98lBY6dDqiRZSPRAUaXfChBsXEhXTjRkx0UdiIiVES40LREGPixhhdEBNXbjT+A6SsjIksjGkoNWpxYWiJEoqEjXwFakht6ePiPpf3Mp0pM7Q9ycm8c++55zz3vOc995ybSeIeaBuwB3gWeBR4GFjluX+BC8CfwAngOHCqbQuSWuWKpA8kjat9GvfaSqv2shY8VgbeAT4Eah67ZE8MA+PAeeCG5yrABmAr8Jw9u8ZzV4BPgS+BmcV4bIuksWTno5L2S+qT1CupKmm1PdFtrnisapk+rxlN9IxZd1PbC4HaK+m6FU1K2peA6ZbUKaksqSipUMdFz3UZaFVSzTomrfOGbbQF7DVJM1ZwTNLGBFCHjWctxEpm2Q6vrVrXMe'+
			'uekXSgVWAvS5r1wiPeacVGWgGzEHdK6rHOI7Yxa5sLAuu3iyXpC4VXtxSAUg+WFWKw1zZkm/3NgJWVB/qQd5VpaYFFcB0GV5N01DbHjGEesPcsMKkQB6uXAVQKbqXCa90o6ZxtH6oHVpF02ZP7FIJ0OQClXDC4qm3KGCqSKDidHXTyHAW+B2bvemQsnuYAAbds86QxHEwTbDxm9nsHncvsrdRrXXVeG5fCkbQd+I1wzDwO3CQ/XoaAJ727paQC8CuwF+gAOs1/EI6vHSXgBQsfJ5xfKYjngd4lBhUpViO3zDPAD8AgsKcA7LLAMPk7j3RzmUCluufInTHs310FYIv/jBtY6rGsgcL/gIvA9RaM37DsdIO5qDvalDEAbC4B6/znfAuGzgPfACPAY8DrwI4msr8DXwMTwFPAG8DGJrIyRwzrkDTtr+FBhaRaTr6ai8rp'+
			'qkKxl35VL0o6q/k0KemlOtl3ledKWXec61BItms9N12oQ93o1UW6BvxcNzZK+JLq6TQhL9XLXllA/x1UAKb83O3fZuB6gJ11YzuBfj9Pkwd0fxPZGo0pM0cMUyVCcNYI5fClRKi+5q4CbxNK7RFgM/Am8AghaD8HrgLvA7uBT4D1BO89DbxF49STwe0TaIN/L5aAM8AT3uUYUGwCLAM2AR8D/xBq+yqhK/oK+NZyKwid03bgM8KXuQboagAqBZYR+gSAMwXyWNjtyWKyg0adSifBE1X/P8ud8TQK/OLnqmUbgYq6o72M0LwAnCwQMj7AAFCyUNFjzXaZKh8D/krG/ib0kQt3QWGD0VbRtgc8d7xkxROERDsAfGehaeAnQtA2Oiu7CB/Oj8DlZHyO0OieJuTIm8z3fIGQ58q2lZG3eRPAWMwjh50/TipUlT2SVmh5a7'+
			'KC7cQOasQYDqtJoTioUI+33DXfI69wQq3ZpiRdiXZTwUOePKdQ7vYqtFzlFoy0yyVJaySt111Ka3RnM3LUO4ngSksIqijpfoNaq7wZOaUmzQia376l4BYbc5mkVQpXBpusO7ZvU1qgfYtc3/DeZ3A9Cu+/XYCZ1/RKekjSA9bZVsMb+UACbkghDmrKL1FWKlQExSYgM891WDY2uDXrGkpAtXxFEPkVu1gKwTloxfH1RpDdfkUrzas8lt74xHWDygN9StKrzezf7TVsVQjKSCcUupm+OpCNOM73ec2JRM8p625qu52Lu4/Iz8dLhMZh2Bn+AnmpvZpw9dlPOPsGyC/urhGqjkVf3KVcVcjKE2qfJry22qq9VjzWiLbZE8+QXw7fLvLIL4dH7Nm2L4f/BwZ/lt4m6tewAAAAAElFTkSuQmCC';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="enter_vr";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 38px;';
		hs+='left : 88px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : hidden;';
		hs+='width : 38px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._enter_vr.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return player.getCurrentNode();
		}
		me._enter_vr.logicBlock_visible = function() {
			var newLogicStateVisible;
			if (
				((player.hasVR() == true))
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._enter_vr.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._enter_vr.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._enter_vr.style[domTransition]='';
				if (me._enter_vr.ggCurrentLogicStateVisible == 0) {
					me._enter_vr.style.visibility=(Number(me._enter_vr.style.opacity)>0||!me._enter_vr.style.opacity)?'inherit':'hidden';
					me._enter_vr.ggVisible=true;
				}
				else {
					me._enter_vr.style.visibility="hidden";
					me._enter_vr.ggVisible=false;
				}
			}
		}
		me._enter_vr.onclick=function (e) {
			player.enterVR();
		}
		me._enter_vr.ggUpdatePosition=function (useTransition) {
		}
		me._controllermobile.appendChild(me._enter_vr);
		me.divSkin.appendChild(me._controllermobile);
		el=me._timer_1=document.createElement('div');
		el.ggTimestamp=this.ggCurrentTime;
		el.ggLastIsActive=true;
		el.ggTimeout=1000;
		el.ggId="Timer 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_timer ";
		el.ggType='timer';
		hs ='';
		hs+='height : 20px;';
		hs+='left : 270px;';
		hs+='position : absolute;';
		hs+='top : 488px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._timer_1.ggIsActive=function() {
			return (me._timer_1.ggTimestamp==0 ? false : (Math.floor((me.ggCurrentTime - me._timer_1.ggTimestamp) / me._timer_1.ggTimeout) % 2 == 0));
		}
		el.ggElementNodeId=function() {
			return player.getCurrentNode();
		}
		me._timer_1.ggActivate=function () {
			player.setVariableValue('ht_anivar1', true);
		}
		me._timer_1.ggDeactivate=function () {
			player.setVariableValue('ht_anivar1', false);
		}
		me._timer_1.ggUpdatePosition=function (useTransition) {
		}
		me.divSkin.appendChild(me._timer_1);
		player.addListener('sizechanged', function() {
			me.updateSize(me.divSkin);
		});
	};
	this.hotspotProxyClick=function(id, url) {
	}
	this.hotspotProxyDoubleClick=function(id, url) {
	}
	me.hotspotProxyOver=function(id, url) {
	}
	me.hotspotProxyOut=function(id, url) {
	}
	me.callChildLogicBlocksHotspot_ht_node_mouseover = function(){
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				if (hotspotTemplates['ht_node'][i]._chevron_black && hotspotTemplates['ht_node'][i]._chevron_black.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._chevron_black.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node'][i]._chevron_white && hotspotTemplates['ht_node'][i]._chevron_white.logicBlock_alpha) {
					hotspotTemplates['ht_node'][i]._chevron_white.logicBlock_alpha();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node2_changenode = function(){
		if(hotspotTemplates['ht_node2']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node2'].length; i++) {
				if (hotspotTemplates['ht_node2'][i]._rectangle_1 && hotspotTemplates['ht_node2'][i]._rectangle_1.logicBlock_scaling) {
					hotspotTemplates['ht_node2'][i]._rectangle_1.logicBlock_scaling();
				}
				if (hotspotTemplates['ht_node2'][i]._rectangle_1 && hotspotTemplates['ht_node2'][i]._rectangle_1.logicBlock_alpha) {
					hotspotTemplates['ht_node2'][i]._rectangle_1.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node2'][i]._rectangle_1 && hotspotTemplates['ht_node2'][i]._rectangle_1.logicBlock_bordercolor) {
					hotspotTemplates['ht_node2'][i]._rectangle_1.logicBlock_bordercolor();
				}
				if (hotspotTemplates['ht_node2'][i]._rectangle_2 && hotspotTemplates['ht_node2'][i]._rectangle_2.logicBlock_scaling) {
					hotspotTemplates['ht_node2'][i]._rectangle_2.logicBlock_scaling();
				}
				if (hotspotTemplates['ht_node2'][i]._rectangle_2 && hotspotTemplates['ht_node2'][i]._rectangle_2.logicBlock_alpha) {
					hotspotTemplates['ht_node2'][i]._rectangle_2.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node2'][i]._rectangle_2 && hotspotTemplates['ht_node2'][i]._rectangle_2.logicBlock_bordercolor) {
					hotspotTemplates['ht_node2'][i]._rectangle_2.logicBlock_bordercolor();
				}
			}
		}
	}
	me.callChildLogicBlocksHotspot_ht_node2_varchanged_ht_anivar1 = function(){
		if(hotspotTemplates['ht_node2']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node2'].length; i++) {
				if (hotspotTemplates['ht_node2'][i]._rectangle_1 && hotspotTemplates['ht_node2'][i]._rectangle_1.logicBlock_scaling) {
					hotspotTemplates['ht_node2'][i]._rectangle_1.logicBlock_scaling();
				}
				if (hotspotTemplates['ht_node2'][i]._rectangle_1 && hotspotTemplates['ht_node2'][i]._rectangle_1.logicBlock_alpha) {
					hotspotTemplates['ht_node2'][i]._rectangle_1.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node2'][i]._rectangle_1 && hotspotTemplates['ht_node2'][i]._rectangle_1.logicBlock_bordercolor) {
					hotspotTemplates['ht_node2'][i]._rectangle_1.logicBlock_bordercolor();
				}
				if (hotspotTemplates['ht_node2'][i]._rectangle_2 && hotspotTemplates['ht_node2'][i]._rectangle_2.logicBlock_scaling) {
					hotspotTemplates['ht_node2'][i]._rectangle_2.logicBlock_scaling();
				}
				if (hotspotTemplates['ht_node2'][i]._rectangle_2 && hotspotTemplates['ht_node2'][i]._rectangle_2.logicBlock_alpha) {
					hotspotTemplates['ht_node2'][i]._rectangle_2.logicBlock_alpha();
				}
				if (hotspotTemplates['ht_node2'][i]._rectangle_2 && hotspotTemplates['ht_node2'][i]._rectangle_2.logicBlock_bordercolor) {
					hotspotTemplates['ht_node2'][i]._rectangle_2.logicBlock_bordercolor();
				}
			}
		}
	}
	player.addListener('changenode', function() {
		me.ggUserdata=player.userdata;
	});
	me.skinTimerEvent=function() {
		me.ggCurrentTime=new Date().getTime();
		if (me.elementMouseDown['move_right']) {
			player.changePanLog(-1.5,true);
		}
		if (me.elementMouseDown['move_left']) {
			player.changePanLog(1.5,true);
		}
		if (me.elementMouseDown['move_up']) {
			player.changeTiltLog(1,true);
		}
		if (me.elementMouseDown['move_down']) {
			player.changeTiltLog(-1,true);
		}
		if (me.elementMouseDown['zoom_out']) {
			player.changeFovLog(1,true);
		}
		if (me.elementMouseDown['zoom_in']) {
			player.changeFovLog(-1,true);
		}
		if (me._timer_1.ggLastIsActive!=me._timer_1.ggIsActive()) {
			me._timer_1.ggLastIsActive=me._timer_1.ggIsActive();
			if (me._timer_1.ggLastIsActive) {
				player.setVariableValue('ht_anivar1', true);
			} else {
				player.setVariableValue('ht_anivar1', false);
			}
		}
		if (!player.getLockedKeyboard()) {
			switch(me.skinKeyPressed) {
				case 37:
					player.changePanLog(1.5,true);
					break;
				case 38:
					player.changeTiltLog(1,true);
					break;
				case 39:
					player.changePanLog(-1.5,true);
					break;
				case 40:
					player.changeTiltLog(-1,true);
					break;
			}
		}
	};
	player.addListener('timer', me.skinTimerEvent);
	function SkinHotspotClass_ht_node(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node=document.createElement('div');
		el.ggId="ht_node";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='height : 0px;';
		hs+='left : 812px;';
		hs+='position : absolute;';
		hs+='top : 409px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		hs+='transform-style: preserve-3d;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node.onclick=function (e) {
			player.openNext(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			me.elementMouseOver['ht_node']=true;
			me._chevron_black.logicBlock_alpha();
			me._chevron_white.logicBlock_alpha();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.onmouseout=function (e) {
			player.setActiveHotspot(null);
			me.elementMouseOver['ht_node']=false;
			me._chevron_black.logicBlock_alpha();
			me._chevron_white.logicBlock_alpha();
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node.ontouchend=function (e) {
			me.elementMouseOver['ht_node']=false;
			me._chevron_black.logicBlock_alpha();
			me._chevron_white.logicBlock_alpha();
		}
		me._ht_node.ggUpdatePosition=function (useTransition) {
		}
		el=me.__code=document.createElement('div');
		els=me.__code__text=document.createElement('div');
		el.className='ggskin ggskin_textdiv';
		el.ggTextDiv=els;
		el.ggId="_code";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=false;
		el.className="ggskin ggskin_text ";
		el.ggType='text';
		hs ='';
		hs+='height : 37px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : -88px;';
		hs+='visibility : hidden;';
		hs+='width : 66px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs += 'box-sizing: border-box;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 68px;';
		hs+='height: 39px;';
		hs+='pointer-events: none;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #000000;';
		hs+='color: #000000;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 0px 1px 0px 1px;';
		hs+='overflow: hidden;';
		els.setAttribute('style',hs);
		els.innerHTML="";
this.onUpdatePosition=function(player,hotspot) {
var vs=player.getViewerSize();
var y=vs.height * (1/6*(1+Math.cos(player.getTilt() * Math.PI/90.0)));
var hs= 'perspective(500px) translate3d(0px,' + (y) + 'px,0px) ';
hs += 'rotateZ(' + ( player.getRoll()).toFixed(10) + 'deg) ';
hs += 'rotateX(' + ( player.getTilt()).toFixed(10) + 'deg) ';
hs += 'rotateY(' + (-player.getPan()).toFixed(10)  + 'deg) ';
hs += 'rotateY(' + ( hotspot.pan).toFixed(2)  + 'deg) ';
hs += 'rotateX(' + (-hotspot.tilt).toFixed(2) + 'deg) ';
hs += 'rotateX(90deg) ';
this.__div.style.transform=hs;
this.__div.style.left = vs.width / 2 + "px";
this.__div.style.top = vs.height / 2 + "px";
};
		el.appendChild(els);
		me.__code.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me.__code.ggUpdatePosition=function (useTransition) {
		}
		me._ht_node.appendChild(me.__code);
		el=me._chevron_black=document.createElement('div');
		els=me._chevron_black__img=document.createElement('img');
		els.className='ggskin ggskin_chevron_black';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAEkUlEQVR4nO2c7YsVVRjAf+OqidGy1rJmhn+Of0EGSYWgpCiUsej3Xizrg/myXyQrVo1M1EU2rBU0Pwi+/CcVmmBCSDh9mDvs9Tr3zplzzjPzzMzzg+fTrmeee357znnmmfEmaZpi6GFN0wkYz2NClGFClGFClGFClGFClLE2dIAkSWLkEYM54M+6Lxr7tqErK+QksAC83HQiwaRpGhQK+BxIB3ENmK3z4qHz98J8tlzIJ6zKyOMMsL6uBEzIKl/woow8fgM21ZGECcn4ivEy8likhu3LhDx/ZpTFdYQP+r4LqSIjj9PAtFRCfRbisk2NixVgnURSfRXyGf4y8jgHvBk7sT4KiSEjj2VgKmZyfRMyqbT1je+JWH31SUjImVEWV4EoTbi+CPGppqrGJW'+
			'BbaKJ9EBLzzCiLCwQ2WLsuROLMcFkp3mdKl4XUsU2Ni/N4NiS7KqTObWpcLANbqybeRSFHAiYxdpwFNlZJvmtCJEtb37gBzLh+gC4J0bQyRuM7HBuSXRFS9KRPWyzjsFK6IESqtH0iMOYPlDx5bLuQo0IyvgT2CY19E9jQRSFS9xknh67xDvCPwDXOkL331RkhUgf4iYJrzQP/CVxriYIXC9soRKq0LZKRswOZlfIT8HqbhUjdgU+SkfMx8FTg2isMrZQ2CZEqbY87yMjZIZTDIoM2S1uESJW2pyrIyDmETEn8M5C0QUgTZ0YZbyGzfS0Bb2gWIlXa+qyMUQ4CfwvkdgVYq1GIlIxvIsjI2SmU40UirZRYQjRuU+M4ADwQyPUcsEGDkCZLW192As8Ecv4FmGtMCHIyqpS2vuxHZqWcBdbXLgRdpa0ve4Q+wzXgtdqE'+
			'0K4zYxJTwPvAwwi5j8Yi8Kq4EOrp2tbNXmTOlBVgWkwIcmfGMYFJrsou4BHxP9tp4JXoQujGmVHGR8itFKeSuOltqu4zo4w1ZG0Widb9IrA1WAjtvM8IZR6ZlfIrJW2WSSLWIbdNNXmAu/Ie8C/xP/u3wBbGiJkkZEkgmbbIyDmIzPZ1C9heNO+TXsWP+l+/BpwAPhQYV4rjZG2Wp5HHTYC/Cn8yYYXMkTXMYv1VxOza1s1h4j1P+R3Y7HWok714/HWEJDSVtr68S/g83KWk+ehSZU0BlwOS0FxNVSWkIXkXh/6W633IS2T7adUk2nSAu/I21efhJo5361Xu1KfJWst9XBmjzOP+4sQtYNZ5nl1/cUjMMYckuiwjZxfl83CPCjJ8hWwEfpyQRB9kQNZm2UNWvhbNw21gU+X5rfoPhsQsFCRRx5M+beym+MyY8ZrXAC'+
			'GzZF9TkSex0Mx8NMtgLj5gtXV/h4Dn6t5ChsRcIBPTS4bm4VPgPp6PbvNIBoN5kyTJFuAPsu5o78jnL0mSGWAqTdMHIeMFf5Ey8JieyhjhSYxBgleIEZeufLN1ZzAhyjAhyjAhyjAhyjAhyjAhyjAhyjAhyjAhyjAhyjAhyjAhyjAhyjAhyjAhyjAhyjAhyjAhyjAhyjAhyjAhyjAhyjAhyjAhyjAhyjAhyjAhyjAhyjAhyjAhyjAhyjAhyjAhyvgfHKwgywQ2UeQAAAAASUVORK5CYII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		el.ggId="chevron_black";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.4;';
		hs+='position : absolute;';
		hs+='top : -250px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='transform:translate3d(0px,0px,-5px);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._chevron_black.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._chevron_black.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._chevron_black.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._chevron_black.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._chevron_black.style[domTransition]='opacity 500ms ease 0ms';
				if (me._chevron_black.ggCurrentLogicStateAlpha == 0) {
					me._chevron_black.style.visibility=me._chevron_black.ggVisible?'inherit':'hidden';
					me._chevron_black.style.opacity=1;
				}
				else {
					me._chevron_black.style.visibility=me._chevron_black.ggVisible?'inherit':'hidden';
					me._chevron_black.style.opacity=0.4;
				}
			}
		}
		me._chevron_black.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_node.appendChild(me._chevron_black);
		el=me._chevron_white=document.createElement('div');
		els=me._chevron_white__img=document.createElement('img');
		els.className='ggskin ggskin_chevron_white';
		hs='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAFD0lEQVR4nO2c/2tXVRjHX3NmsWpoDcuM/pgg+8KIwiy0FDEpKCpjZEQRrH3JBc1pgwhDsIjKsEGMYgXTH4Lsz+jHMFMwQ8x898N1tY3P537ul/Pc89x1XvDAxoed8z7nveecc5/PvbdPEgk/rIstILGSZIgzkiHOSIY4IxnijGSIM9aSIZtjCwjBWjHkKDAL3BpbSF3WxxYQgHHgpRs/3wbsAX6LJ6cebc+QUeDNZb8/DBwCNsSRU5++FpdOJoE3uny2AOwELjQnJwxtzZApupsB8CAwAww1IyccbcyQcVYuU3n8ADwOXLaTE5a2ZUgZMwAeAKaBQRs54WlThkwBByv+7ffAMPBXODk2tCVDxqhuBsA24Dhwbxg5drQhQ8aAtwK1NQ88BvwdqL3geM'+
			'+QScKZAdmydQzHpy/PGVJnz+jFN2SZ4m7wXjNkHDszAB4FvgLuM+yjEh5rWWOUO9pWZTtwDdgFXG+gv0J4y5DQe0YvngJO4mhP8ZQh4+SXQ6zYDlwB9gFXI/S/Ai8Z0tQy1Y2ngVPA1ogaAB+GTNDsMtWNYeBdYCCmiNjHXsujbVUWyZaxizE6j5khE/gzA+B+4H0iFSRjZcgo8HaMjkswD+ym4UyJkSGT2JjxZ+D2hoHDwKbA7ebSdIYcAl43avcX4EODtk8Dj5Adje2R1FSMy4ajy/rYKekPgz4+lrRZDcxTU2ZMhJ2ffznSoa8RSdcM+pqTtL5Df60zZCr0zNygkxlLsUM2mfK5pLtz+nVvyFj4OZGUb8ZSvCrpqkHfCzLMFEszRg0mQ5JmSmjYYaThhKStJXREN2TSZh70QQUtr0m6bKDlS0l9FfQ0bkiMPaNX'+
			'PCGb5WtO0j01dJkbYnW0rZIZq+OApAsG2r5WwD2lDWYcDqhxl5HGkwqUKaEG6nGZ6hYvSjpvoPVTSbfU1RdigDGPtnUy5bqB5nnVvKL3akaZo23VeEE2mfKJpA1VddUZkKejbdXYbzSGbyXdWUVT1YG0ac/Ii35JeyT9bjCWE5LuKKupyiCaqNo2Hc/LZk9ZkDRYRktZ4VZ7xnRJHRaxV9JFg7F9JOn2ojrKCF4Le0aveEV2mVLoSFxUqNUy1fSe0SvWKSuzWJTuCxUki4hs43VG3RiRTaZ8px5lljxRN8lumYq5gReN3ZKuGIz9mKQt6mJMnqA5AzFSO8xYigOyWb7OSNrWqc+824D6De6pOAK8bNCuFTNkjyuEvgm7DzjX8ZOc/47NygpmoQhZtW06Dirc9ymnJd3Vra9eQgYkvRdAhKejbdV4JsA8nFWP4mMRIf'+
			'2STtUQ4fk0VTbqFCTPqkB9q6iQm5VVYMvSpg28aDxZYR4WVfBqvYyQQWWl5aKspcxYHSMqfuPEGUlDRduuIma6gIi1bMZS7C0wDz+rhBmqaMiApM9yRPwfzEBZmWW/pHNd5uFHSZvKtltH0GwHEU180+ctnu0wD4uSNlZpr46QIUnHl4mYdTA5seI5/Ve6/0k1vlcP8XzIF2QPy+yr21DLeQd4iOy9j+erNhLCkC3Arzh6G0IkNpKVmyqbAWFeHHCJZAYEeo1g7MeiE6vw8OKAxDKSIc5IhjgjGeKMZIgzkiHOSIY4IxnijGSIM5IhzkiGOCMZ4oxkiDOSIc5IhjgjGeKMZIgzkiHOSIY4IxnijGSIM5IhzkiGOCMZ4oxkiDOSIc5IhjgjGeKMZIgzkiHOSIY4IxnijGSIM5IhzvgHcm/aRUD3KqQAAAAASUVORK5C'+
			'YII=';
		els.setAttribute('src',hs);
		els.ggNormalSrc=hs;
		els.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;;');
		els.className='ggskin ggskin_button';
		els['ondragstart']=function() { return false; };
		player.checkLoaded.push(els);
		el.appendChild(els);
		el.ggSubElement = els;
		hs='data:image/png;base64,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';
		me._chevron_white__img.ggOverSrc=hs;
		el.ggId="chevron_white";
		el.ggDx=0;
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_button ";
		el.ggType='button';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 100px;';
		hs+='left : -10000px;';
		hs+='opacity : 0.8;';
		hs+='position : absolute;';
		hs+='top : -250px;';
		hs+='visibility : inherit;';
		hs+='width : 100px;';
		hs+='pointer-events:auto;';
		hs+='transform:translate3d(0px,0px,1px);';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._chevron_white.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._chevron_white.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((me.elementMouseOver['ht_node'] == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._chevron_white.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._chevron_white.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._chevron_white.style[domTransition]='opacity 500ms ease 0ms';
				if (me._chevron_white.ggCurrentLogicStateAlpha == 0) {
					me._chevron_white.style.visibility=me._chevron_white.ggVisible?'inherit':'hidden';
					me._chevron_white.style.opacity=1;
				}
				else {
					me._chevron_white.style.visibility=me._chevron_white.ggVisible?'inherit':'hidden';
					me._chevron_white.style.opacity=0.8;
				}
			}
		}
		me._chevron_white.onmouseover=function (e) {
			me._chevron_white__img.src=me._chevron_white__img.ggOverSrc;
		}
		me._chevron_white.onmouseout=function (e) {
			me._chevron_white__img.src=me._chevron_white__img.ggNormalSrc;
		}
		me._chevron_white.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var pw=this.parentNode.clientWidth;
				var w=this.offsetWidth;
					this.style.left=(this.ggDx + pw/2 - w/2) + 'px';
			}
		}
		me._ht_node.appendChild(me._chevron_white);
		me.__div = me._ht_node;
	};
	function SkinHotspotClass_ht_node2(parentScope,hotspot) {
		var me=this;
		var flag=false;
		var hs='';
		me.parentScope=parentScope;
		me.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):''; // }
		me.ggUserdata=skin.player.getNodeUserdata(nodeId);
		me.elementMouseDown=[];
		me.elementMouseOver=[];
		me.findElements=function(id,regex) {
			return skin.findElements(id,regex);
		}
		el=me._ht_node2=document.createElement('div');
		el.ggId="ht_node2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_hotspot ";
		el.ggType='hotspot';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 0px;';
		hs+='left : 752px;';
		hs+='position : absolute;';
		hs+='top : 404px;';
		hs+='visibility : inherit;';
		hs+='width : 0px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._ht_node2.ggIsActive=function() {
			return player.getCurrentNode()==this.ggElementNodeId();
		}
		el.ggElementNodeId=function() {
			if (me.hotspot.url!='' && me.hotspot.url.charAt(0)=='{') { // }
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			} else {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				} else {
					return player.getCurrentNode();
				}
			}
		}
		me._ht_node2.onclick=function (e) {
			player.startAutorotate("0.05");
			player.openNext(me.hotspot.url,me.hotspot.target);
			skin.hotspotProxyClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node2.ondblclick=function (e) {
			skin.hotspotProxyDoubleClick(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node2.onmouseover=function (e) {
			player.setActiveHotspot(me.hotspot);
			player.stopAutorotate();
			skin.hotspotProxyOver(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node2.onmouseout=function (e) {
			player.setActiveHotspot(null);
			player.startAutorotate("0.05");
			skin.hotspotProxyOut(me.hotspot.id, me.hotspot.url);
		}
		me._ht_node2.ggUpdatePosition=function (useTransition) {
		}
		el=me._upanicircle=document.createElement('div');
		el.ggId="upanicircle";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_container ";
		el.ggType='container';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 60px;';
		hs+='left : -30px;';
		hs+='position : absolute;';
		hs+='top : -29px;';
		hs+='visibility : inherit;';
		hs+='width : 60px;';
		hs+='pointer-events:none;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._upanicircle.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._upanicircle.ggUpdatePosition=function (useTransition) {
		}
		el=me._rectangle_1=document.createElement('div');
		el.ggId="Rectangle 1";
		el.ggParameter={ rx:0,ry:0,a:0,sx:0.5,sy:0.5 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='border : 4px solid #ffffff;';
		hs+='cursor : pointer;';
		hs+='height : 76px;';
		hs+='left : -11px;';
		hs+='position : absolute;';
		hs+='top : -12px;';
		hs+='visibility : inherit;';
		hs+='width : 76px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		el.style[domTransform]=parameterToTransform(el.ggParameter);
		me._rectangle_1.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_1.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_anivar1') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._rectangle_1.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._rectangle_1.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._rectangle_1.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, opacity 1000ms ease 0ms, border-color 1000ms ease 0ms';
				if (me._rectangle_1.ggCurrentLogicStateScaling == 0) {
					me._rectangle_1.ggParameter.sx = 1;
					me._rectangle_1.ggParameter.sy = 1;
					me._rectangle_1.style[domTransform]=parameterToTransform(me._rectangle_1.ggParameter);
				}
				else {
					me._rectangle_1.ggParameter.sx = 0.5;
					me._rectangle_1.ggParameter.sy = 0.5;
					me._rectangle_1.style[domTransform]=parameterToTransform(me._rectangle_1.ggParameter);
				}
			}
		}
		me._rectangle_1.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_anivar1') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._rectangle_1.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._rectangle_1.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._rectangle_1.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, opacity 1000ms ease 0ms, border-color 1000ms ease 0ms';
				if (me._rectangle_1.ggCurrentLogicStateAlpha == 0) {
					setTimeout(function() { if (me._rectangle_1.style.opacity == 0.0) { me._rectangle_1.style.visibility="hidden"; } }, 1005);
					me._rectangle_1.style.opacity=0;
				}
				else {
					me._rectangle_1.style.visibility=me._rectangle_1.ggVisible?'inherit':'hidden';
					me._rectangle_1.style.opacity=1;
				}
			}
		}
		me._rectangle_1.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('ht_anivar1') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._rectangle_1.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._rectangle_1.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._rectangle_1.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, opacity 1000ms ease 0ms, border-color 1000ms ease 0ms';
				if (me._rectangle_1.ggCurrentLogicStateBorderColor == 0) {
					me._rectangle_1.style.borderColor="rgba(255,255,255,1)";
				}
				else {
					me._rectangle_1.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me._rectangle_1.ggUpdatePosition=function (useTransition) {
		}
		me._upanicircle.appendChild(me._rectangle_1);
		el=me._rectangle_2=document.createElement('div');
		el.ggId="Rectangle 2";
		el.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		el.ggVisible=true;
		el.className="ggskin ggskin_rectangle ";
		el.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 999px;';
		hs+='border-radius : 999px;';
		hs+='border : 4px solid #ffffff;';
		hs+='cursor : pointer;';
		hs+='height : 76px;';
		hs+='left : -11px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -12px;';
		hs+='visibility : hidden;';
		hs+='width : 76px;';
		hs+='pointer-events:auto;';
		el.setAttribute('style',hs);
		el.style[domTransform + 'Origin']='50% 50%';
		me._rectangle_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		el.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.ggNodeId;
		}
		me._rectangle_2.logicBlock_scaling = function() {
			var newLogicStateScaling;
			if (
				((player.getVariableValue('ht_anivar1') == true))
			)
			{
				newLogicStateScaling = 0;
			}
			else {
				newLogicStateScaling = -1;
			}
			if (me._rectangle_2.ggCurrentLogicStateScaling != newLogicStateScaling) {
				me._rectangle_2.ggCurrentLogicStateScaling = newLogicStateScaling;
				me._rectangle_2.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, opacity 1000ms ease 0ms, border-color 1000ms ease 0ms';
				if (me._rectangle_2.ggCurrentLogicStateScaling == 0) {
					me._rectangle_2.ggParameter.sx = 0.5;
					me._rectangle_2.ggParameter.sy = 0.5;
					me._rectangle_2.style[domTransform]=parameterToTransform(me._rectangle_2.ggParameter);
				}
				else {
					me._rectangle_2.ggParameter.sx = 1;
					me._rectangle_2.ggParameter.sy = 1;
					me._rectangle_2.style[domTransform]=parameterToTransform(me._rectangle_2.ggParameter);
				}
			}
		}
		me._rectangle_2.logicBlock_alpha = function() {
			var newLogicStateAlpha;
			if (
				((player.getVariableValue('ht_anivar1') == true))
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._rectangle_2.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._rectangle_2.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._rectangle_2.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, opacity 1000ms ease 0ms, border-color 1000ms ease 0ms';
				if (me._rectangle_2.ggCurrentLogicStateAlpha == 0) {
					me._rectangle_2.style.visibility=me._rectangle_2.ggVisible?'inherit':'hidden';
					me._rectangle_2.style.opacity=1;
				}
				else {
					setTimeout(function() { if (me._rectangle_2.style.opacity == 0.0) { me._rectangle_2.style.visibility="hidden"; } }, 1005);
					me._rectangle_2.style.opacity=0;
				}
			}
		}
		me._rectangle_2.logicBlock_bordercolor = function() {
			var newLogicStateBorderColor;
			if (
				((player.getVariableValue('ht_anivar1') == true))
			)
			{
				newLogicStateBorderColor = 0;
			}
			else {
				newLogicStateBorderColor = -1;
			}
			if (me._rectangle_2.ggCurrentLogicStateBorderColor != newLogicStateBorderColor) {
				me._rectangle_2.ggCurrentLogicStateBorderColor = newLogicStateBorderColor;
				me._rectangle_2.style[domTransition]='' + cssPrefix + 'transform 1000ms ease 0ms, opacity 1000ms ease 0ms, border-color 1000ms ease 0ms';
				if (me._rectangle_2.ggCurrentLogicStateBorderColor == 0) {
					me._rectangle_2.style.borderColor="rgba(255,255,255,1)";
				}
				else {
					me._rectangle_2.style.borderColor="rgba(255,255,255,1)";
				}
			}
		}
		me._rectangle_2.ggUpdatePosition=function (useTransition) {
		}
		me._upanicircle.appendChild(me._rectangle_2);
		me._ht_node2.appendChild(me._upanicircle);
		me.__div = me._ht_node2;
	};
	me.addSkinHotspot=function(hotspot) {
		var hsinst = null;
		if (hotspot.skinid=='ht_node') {
			hotspot.skinid = 'ht_node';
			hsinst = new SkinHotspotClass_ht_node(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_node_mouseover();;
		} else
		{
			hotspot.skinid = 'ht_node2';
			hsinst = new SkinHotspotClass_ht_node2(me, hotspot);
			if (!hotspotTemplates.hasOwnProperty(hotspot.skinid)) {
				hotspotTemplates[hotspot.skinid] = [];
			}
			hotspotTemplates[hotspot.skinid].push(hsinst);
			me.callChildLogicBlocksHotspot_ht_node2_changenode();;
			me.callChildLogicBlocksHotspot_ht_node2_varchanged_ht_anivar1();;
		}
		return hsinst;
	}
	me.removeSkinHotspots=function() {
		if(hotspotTemplates['ht_node']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node'].length; i++) {
				hotspotTemplates['ht_node'][i] = null;
			}
		}
		if(hotspotTemplates['ht_node2']) {
			var i;
			for(i = 0; i < hotspotTemplates['ht_node2'].length; i++) {
				hotspotTemplates['ht_node2'][i] = null;
			}
		}
		hotspotTemplates = [];
	}
	me.addSkin();
	var style = document.createElement('style');
	style.type = 'text/css';
	style.appendChild(document.createTextNode('.ggskin { font-family: Verdana, Arial, Helvetica, sans-serif; font-size: 14px;}'));
	document.head.appendChild(style);
	me._rectangle_3.logicBlock_visible();
	me._controller2.logicBlock_visible();
	me._controller.logicBlock_visible();
	me._controller3.logicBlock_visible();
	me._controllermobile.logicBlock_visible();
	me._enter_vr.logicBlock_visible();
	player.addListener('configloaded', function(args) { me._rectangle_3.logicBlock_visible();me._controller2.logicBlock_visible();me._controller.logicBlock_visible();me._controller3.logicBlock_visible();me._controllermobile.logicBlock_visible(); });
	player.addListener('vrchanged', function(args) { me._enter_vr.logicBlock_visible(); });
	player.addListener('changenode', function(args) { me.callChildLogicBlocksHotspot_ht_node2_changenode(); });
	player.addListener('mouseover', function(args) { me.callChildLogicBlocksHotspot_ht_node_mouseover(); });
	player.addListener('varchanged_ht_anivar1', function(args) { me.callChildLogicBlocksHotspot_ht_node2_varchanged_ht_anivar1(); });
	player.addListener('hotspotsremoved', function(args) { me.removeSkinHotspots(); });
	document.addEventListener('keydown', function(e) {
		var key = e.which || e.keyCode;
		me.skinKeyPressed = key;
	});
	document.addEventListener('keyup', function(e) {
		var key = e.which || e.keyCode;
		me.skinKeyPressed = 0;
	});
	me.skinTimerEvent();
};