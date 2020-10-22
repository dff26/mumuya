// 绑定事件
let divTyping = document.getElementById('text')
  let i = 0,
    timer = 0,
    str = '滚滚'+'长江'+'东逝水';
  function typing () {
    // 判断
	if (i <= str.length) {
      divTyping.innerHTML = str.slice(0, i++) + '_'
      timer = setTimeout(typing, 500)
    }
    else {
      divTyping.innerHTML = str//结束打字,移除 _ 光标
      clearTimeout(timer)
    }
  }

