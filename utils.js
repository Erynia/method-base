/*
* formatTime : Formatted time string
* @ params:
*		template: [String] The specified format style
* @ return:
*  		[String] Formatted time string
**/
(function (pro){
	pro.formatTime = function forMatTime(template) {
		template = template || "{0}年{1}月{2}日 下午{3}时{4}分{5}秒";
		var matchAry = this.match(/\d+/g);
		template = template.replace(/\{(\d+)\}/g,function (){
			var n = arguments[1],
				val = matchAry[n] || "0";
			val  < 10 ? val = "0" + val : val;
			return val
		})
		return template
	}
})(String.prototype)

/*
* bubbleSort:  Bubbling principle sort
* @ params:
*  		无
* @ return:
*		[Array] Sorted array*
*/
(function (pro) {
	pro.bubbleSort = function bubble () {
		for(var i = 0; i < this.length - 1; i++) {
			for (var j = 0; j < this.length; j++) {
				var item = this[j];
				if (item > this[j+1]) {
					this[j] = this[j+1]
					this[j+1] = item;
				}
			};
		}
		return this;
	} 
})(Array.prototype)