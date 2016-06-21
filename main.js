$("#section-1").on('click', function () {
	$("#section-1 .content").addClass("section-hidden"); 
	$("#section-2 .content").addClass("section-hidden"); 
	$("#section-3 .content").addClass("section-hidden");
	$("#section-1 .content").removeClass("section-hidden");
});

$("#section-2").on('click', function () {
	$("#section-2 .content").addClass("section-hidden"); 
	$("#section-1 .content").addClass("section-hidden"); 
	$("#section-3 .content").addClass("section-hidden");
	$("#section-2 .content").removeClass("section-hidden");
});

$("#section-3").on('click', function () {
	$("#section-3 .content").addClass("section-hidden"); 
	$("#section-1 .content").addClass("section-hidden"); 
	$("#section-2 .content").addClass("section-hidden");
	$("#section-3 .content").removeClass("section-hidden");
});