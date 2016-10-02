$(document).ready(function(){
	$('#reader').html5_qrcode(function(data){
			$('#read').html(data);
			var audio = new Audio('../media/9_mm_gunshot-mike-koenig-123.wav');
			audio.play();
		},
		function(error){
			$('#read_error').html(error);
		}, function(videoError){
			$('#vid_error').html(videoError);
		}
	);
});
