$(document).ready(function(){
	//Accordion Animation for 'About Me' section on 'Home' page//
	$(".accordion").accordion({header: "h3", active: false, collapsible: true, heightStyle: "content"},"fast")
	$( ".contact" ).hover(function() {
		$( ".info" ).toggle();
});
});

