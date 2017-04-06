# time span merge

install

`
	npm i time_span_merge --save
`

usage


`
	var time_span_merge = require('time_span_merge')
	var str1 = "00:00:00-09:00:00 11:00:00-12:00:00 13:00:00-14:00:00"
	var str2 = time_span_merge(str1,"11:57:00-13:22:00",'or')
	console.log(str2)
	var str3 = time_span_merge(str2,"13:20:00-13:30:00",'sub')
	console.log(str3)
`