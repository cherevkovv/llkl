function fulltime() {
	var time = new Date();
	document.clock.full.value = time.toLocaleString();
	setTimeout('fulltime()',1000 ) 
}
function msbutton() {
	var messageInput = document.getElementById('message').value;
	alert(messageInput)
}
