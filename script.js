$(document).ready(function() {
    var $target = $('li:nth-child(4)');
    $target.fadeOut('slow');
	$('#button').click(function() {
		var item1 = $("<li></li>").text("axiom.nane.netapp.com"); //Jquery	
        var item2 = "<li>sanscreen.nane.netapp.com</li>"; //HTML
        var item3 = document.createElement("li"); //DOM
        item3.innerHTML = "admin123";        
        $('#orderedHostList').append(item1, item2, item3);
	});
});