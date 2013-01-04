$(document).ready(function(){

	$("audio").removeAttr("controls").each(function(i, audioElement) {
	    var audio = $(this);
	    var that = this;
	    $("#doc").append($('<li><a class="'+audio.attr("class")+'" href="#" title="'+audio.attr("title")+'">'+audio.attr("title")+'</a></li>').click(function() {that.play();}));
	});

});