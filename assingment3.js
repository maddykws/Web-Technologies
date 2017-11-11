function saveValues()
{
	localStorage._user = document.getElementById("user").value;
	localStorage._uage = document.getElementById("age").value;
}
function loadValues()
{
	document.getElementById("user").value = localStorage._user;
	document.getElementById("age").value = localStorage._uage;
}