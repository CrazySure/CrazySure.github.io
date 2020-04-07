// 按 1rem =(640 / 16)px 换算
(function (doc, win) {
  var docEl = doc.documentElement,
	resizeEvt = 'orientationchange' in window ? 'orientationchange': 'resize',
	recalc = function () {
	  var clientWidth = docEl.clientWidth;
	  if (!clientWidth) return;
	  // 按照设计稿640px来计算 浏览器默认基数单位为1rem = 16px,所以这里的1rem = 640 / 16
	  docEl.style.fontSize = (640 / 16) * (clientWidth / 640) + 'px';
	};

  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  recalc();
})(document, window);