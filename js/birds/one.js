// one.js

$(document).ready(function(){
	// http://stackoverflow.com/questions/10298658/mouse-position-inside-autoscaled-svg
	// Find your root SVG element
	var svg = $('.item').filter(':first').find('svg')[0];
	var S = Snap(svg);

	var pt = svg.createSVGPoint();

	var eye = Snap('ellipse.eye');
	var eyeX = parseInt($('ellipse.eye').attr('cx'), 10);
	var eyeY = parseInt($('ellipse.eye').attr('cy'), 10);

	var TAU = Math.PI*2;

	S.mousemove(
        function(e, posX, posY){
            var m = (posY - eyeY) / (posX - eyeX);
            var theta = (Math.atan(m) + TAU) % TAU;
            eye.attr({ cx : eyeX + 5*Math.cos(theta), cy : eyeY + 5*Math.sin(theta) });
        }
    );
});