// one.js

$(document).ready(function(){
	var svg = $('.item').filter(':first').find('svg')[0];
	var S = Snap(svg);

	var eye = Snap('ellipse.eye-1');
	var eyeX = parseInt($('ellipse.eye-1').attr('cx'), 10);
	var eyeY = parseInt($('ellipse.eye-1').attr('cy'), 10);

	S.mousemove(
        function(e, posX, posY){
            var theta = Math.atan2(posY - eyeY, posX - eyeX);
            eye.attr({ cx : eyeX + 3*Math.cos(theta), cy : eyeY + 3*Math.sin(theta) });
        }
    );
});