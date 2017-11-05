
<!-- This document pops an drop down altery for javascript>
$("button").click(function() {
	
	$.getJSON("phd.json", function(obj) {
		
		$.each(obj, function(key, value) {
			$("ul").append("<li>"+value.name+"</li>");
			
		
	});
	
	
	
});

});
