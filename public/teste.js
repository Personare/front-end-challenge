function teste(){
	$.post("../tarot.json", {  },
function(data){
	console.log(data);
}, "json");

}