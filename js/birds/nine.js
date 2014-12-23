// nine.js

var tl = new TimelineMax({repeat:-1, repeatDelay:1});

var circles = $('.circle-9');
tl.add(TweenMax.from(circles[0], 2, {attr: {r: 0}}), 1);
tl.add(TweenMax.fromTo(circles[0], 0.5, {attr: {'stroke-opacity': 1}}, {attr: {'stroke-opacity': 0}}));
tl.add(TweenMax.from(circles[1], 2, {attr: {r: 0}}), 1.8);
tl.add(TweenMax.fromTo(circles[1], 0.5, {attr: {'stroke-opacity': 1}}, {attr: {'stroke-opacity': 0}}));
tl.add(TweenMax.from(circles[2], 2, {attr: {r: 0}}), 2.2);
tl.add(TweenMax.fromTo(circles[2], 0.5, {attr: {'stroke-opacity': 1}}, {attr: {'stroke-opacity': 0}}));

var bird = Snap(document.querySelector('.bird-9'));
var birdpath = document.querySelector('.birdpath-9');

var state = {
	length: 0,
	pathLength: birdpath.getTotalLength()/2
}

var startpoint = birdpath.getPointAtLength(0);

function updateBird() {
	var currentpoint = birdpath.getPointAtLength(state.length);
	bird.attr({ transform: "translate("+(currentpoint.x-startpoint.x)+","+(currentpoint.y-startpoint.y)+")"});
}

tl.add(TweenMax.to(state, 3, {length: state.pathLength, onUpdate: updateBird, ease: Quad.easeIn}), 0);