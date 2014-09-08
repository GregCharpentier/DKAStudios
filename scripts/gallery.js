var path = "file:///H:/aptana/projects/Derp/";
    		var image = 0;
			var imagesrcs = new Array();
			var mediaType = true;
			var imgSlider;
			var vidSlider;
			var imgButton = document.getElementById("imagesbutton");
			var vidButton = document.getElementById("videosbutton");
			var imgSlider = document.getElementById("displayimage");
			var vidSlider = document.getElementById("displayvideo");
			//vidSlider.src = "resources/Wildlife.ogg";
			imagesrcs[0] = "resources/fatcat1.jpg";
			imagesrcs[1] = "resources/fatcat2.jpg";
			imagesrcs[2] = "resources/fatcat3.jpg";
			imagesrcs[3] = "resources/fatcat4.jpg";
			imagesrcs[4] = "resources/fatcat5.jpg";
			var dots = new Array();

			for (var i = 0; i < imagesrcs.length; i++) {
				dots[i] = document.createElement("li");
				dots[i].className = "circle";
				document.getElementById("dots").appendChild(dots[i]);
			}
			adjustDots();
			function right() {
				image = wrapImageNum(image + 1);
				document.getElementById("displayimage").src = imagesrcs[image];
				adjustDots();
			}

			function left() {
				image = wrapImageNum(image - 1);
				document.getElementById("displayimage").src = imagesrcs[image];
				adjustDots();
			}

			function wrapImageNum(num) {
				var numOfImages = 5;
				while (num >= numOfImages)
				num -= numOfImages;
				while (num < 0)
				num += numOfImages;
				return num;
			}
			
			function switchMedia(media)
			{
				mediaType = media;
				
				if(mediaType == "true")
				{
					
					imgButton.id = "imagesbutton2";
					vidButton.id = "videosbutton";
					imgSlider.style.display = "block";
					vidSlider.style.display = "none";
				}
				else
				{
					imgButton.id = "imagesbutton";
					vidButton.id = "videosbutton2";
					imgSlider.style.display = "none";
					vidSlider.style.display = "block";
				}
				
			}
			
			function adjustDots() {
				for (var i = 0; i < imagesrcs.length; i++) {
					dots[i].id = "";
				}
				dots[image].id = "activecircle";
			}
			
			var speed = 1600;
			var counter = setInterval(timer, speed);
			function timer() {
				right();
				
				var color = image/2;
				
			}
			$("#leftarrow").click(left);
			$("#rightarrow").click(right);
			$("#imagesbutton").click(function() {
  switchMedia("true");
});
			$("#videosbutton").click(function() {
  switchMedia("false");
});
	$( document ).ready(function() {
    switchMedia("true");    
	vidSlider.style.display = "none";
});
