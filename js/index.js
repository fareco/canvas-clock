window.onload = function() {

	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext('2d');
	var clockRadius = 250;
	//var clockImage = new Image();
	//clockImage.src = 'images/cface.png';
	setInterval(drawStage, 1000);


	function drawStage() {
		clear();
		var date = new Date();
		var hours = date.getHours();
		var minutes = date.getMinutes();
		var secounds = date.getSeconds();

		hours = hours > 12 ? hours - 12 : hours;
		hours = hours + minutes / 60;
		minutes = minutes + secounds / 60;

		ctx.save();

		//set-background
		//ctx.drawImage(clockImage, 0, 0, ctx.width, canvas.height);
		ctx.translate(canvas.width / 2, canvas.height / 2);
		ctx.beginPath();

		//drawNum
		ctx.font = '32px Arial';
		ctx.fillStyle = '#000';
		ctx.textAlign = 'center';
		ctx.textBaseline = 'middle';

		for (var i = 1; i <= 12; i++) {
			var angle = (i - 3) * Math.PI * 2 / 12;
			var x = clockRadius * 0.7 * Math.cos(angle);
			var y = clockRadius * 0.7 * Math.sin(angle);
			ctx.fillText(i, x, y);
		}

		//draw hour hand
		ctx.save();
		var angle = (hours - 3) * Math.PI * 2 / 12;
		ctx.rotate(angle);
		ctx.beginPath();
		ctx.moveTo(-15, -8);
		ctx.lineTo(-15, 8);
		ctx.lineTo(clockRadius * 0.4, 1);
		ctx.lineTo(clockRadius * 0.4, -1);
		ctx.fill();
		ctx.restore();

		//draw minute hand
		ctx.save();
		var angle = (minutes - 15) * Math.PI * 2 / 60;
		ctx.rotate(angle);
		ctx.beginPath();
		ctx.moveTo(-15, -4);
		ctx.lineTo(-15, 4);
		ctx.lineTo(clockRadius * 0.6, 1);
		ctx.lineTo(clockRadius * 0.6, -1);
		ctx.fill()
		ctx.restore();

		//draw second hand
		ctx.save();
		var angle = (secounds - 15) * Math.PI * 2 / 60;
		ctx.rotate(angle);
		ctx.beginPath();
		ctx.moveTo(-15, -3);
		ctx.lineTo(-15, 3);
		ctx.lineTo(clockRadius * 0.7, 1);
		ctx.lineTo(clockRadius * 0.7, -1);
		ctx.fillStyle = "#0f0";
		ctx.fill();
		ctx.restore();
		ctx.restore();
	}

	function clear() {
		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	}
}