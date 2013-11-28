Ti.App.addEventListener("sliderToggled", function(e) {
	if (e.hasSlided) {
		$.view1.touchEnabled = false;
	}
	else {
		$.view1.touchEnabled = true;
	}
});

function handler(e) {
	alert('got this from custom event: '+e.message);
	$.label.text = e.message;
}

function removeListener() {
	$.requiredController.off('someEvent', handler);
}

$.requiredController.on('someEvent', handler);