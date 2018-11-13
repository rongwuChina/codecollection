function couter(n) {
  var num = 0;
  for (var i = 0; i < n; i++) {
    num=num + i;
  }
  return num;
}
//接收到主线程向子线程传输的数据----event.data
onmessage = function (event) {
  //子线程向主线程传输计算结果----postMessage()
  postMessage({step:1,data:new Date()});
  //postMessage---主、子线程数据传输的函数，可多次执行
  postMessage({step:2,data:couter(event.data)});
}
