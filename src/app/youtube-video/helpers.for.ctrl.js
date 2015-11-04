(function(){
// these function should be used in controller for the solution
// a best practice is place these in a service and process the data in a service

function getDuration (time) {
	var t = time.split("PT")[1]
		.replace(/(H|M)/g, ":")
		.replace("S", "");
	var ts = t.split(":");
	ts = ts.map(function(d){
		return d.length === 1 ? "0" + d : d;
	});
	return ts.join(":");
}

function toHtml (text) {
	var breakLineReg = /\n/gm
	var linksReg = /(http:\/\/[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*))/
	if (!text) return text;
	return text
		.replace(breakLineReg, '<br>')
		.replace(linksReg, '<a href="$1" target="blank" title="opens in a new tab">$1</a>');
}

})()