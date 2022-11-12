//焦点图初始化
featuredcontentslider.init( {
	id : "syFocusThumb", // 指定ID
	contentsource : [ "inline", "" ], // 有效值: ["inline", ""] 嵌入html or
										// ["ajax", "path_to_file"] 嵌入utf-8文件
	toc : "scroll", // 有效值: "#increment" 标记序号, "markup", ["markup1", "markup2",
					// etc]标记具体内容
	nextprev : [ "", "" ], // next_pre标记 ，如："上一条" "下一条"，设置为 "" 为不出现
	revealtype : "click", // 鼠标事件有效值: “click” or “mouseover”
	enablefade : [ false, 0.15 ], // 切换褪色度 “true”or “false”
	autorotate : [ true, 5000 ], // 切换停留时间 “true”or “false”
	delay : 0, // 事件延迟时间(默认值：0，单位：ms)
	// playtab: 4, 默认的播放舌签
	onChange : function(previndex, curindex) { // 触发处理；previndex 触发处理上一个记录；
												// curindex 触发处理上一个记录
												// 可以自定义函数控制；参考亲子网首页“亲子部落-相册”
	}
});

