var ballx = 30;
var bally = 30;
var ballxspe = 10;
var ballyspe = 10;
var canvas = document.getElementById('myCanvas');
var context = canvas.getContext('2d');
context.beginPath();
context.moveTo(100, 150);
context.lineTo(450, 50);
context.stroke();
var id = setInterval(frame, 10) // draw every 10ms

canvas.addEventListener('mousemove', function(evt) {


        	var mousePos = getMousePos(canvas, evt);
        	if(Math.abs(mousePos.x-ballx)<10&&Math.abs(mousePos.y-bally)<10)
        	{

        		if(mousePos.x-ballx>0)
        		{
        			ballxspe-=3;
        		}

        		if(mousePos.x-ballx<0)
        		{
        			ballxspe+=3;
        		}


        	}

      }, false);
      document.getElementById('clear').addEventListener('click', function() {
      	context.beginPath();
        ctx.save();
		ctx.setTransform(1, 0, 0, 1, 0, 0);
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.restore();
      }, false);

      function getMousePos(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
          x: evt.clientX - rect.left,
          y: evt.clientY - rect.top
        };
      }

      function frame()
       {
				if(ballxspe>0)
      			{
      				ballx+=ballxspe;
      				ballxspe-=.2;
      				if(ballxspe<1)
      					ballxspe=0;
      			}
      			if(ballyspe>0)
      			{
      				bally+=ballyspe;
      				ballyspe-=.2;
      				if(ballyspe<1)
      					ballyspe=0;
      			}
      			if(ballxspe<0)
      			{
      				ballx+=ballxspe;
      				ballxspe+=.2;
      				if(ballxspe<-1)
      					ballxspe=0;
      			}
      			if(ballyspe<0)
      			{
      				bally+=ballyspe;
      				ballyspe+=.2;
      				if(ballyspe<-1)
      					ballyspe=0;
      			}
      			if(ballx>canvas.width-50)
      			{
      				if(ballxspe>0)
      				ballxspe*=-1;
      			}
      			if(ballx<50)
      			{
      				if(ballxspe<0)
      				ballyspe*=-1;
      			}
      			if(bally>canvas.height-50)
      			{
      				if(ballyspe>0)
      				ballyspe*=-1;
      			}
      			if(bally<50)
      			{
      				if(ballyspe<0)
      				ballyspe*=-1;
      			}
      			context.clearRect(0, 0, canvas.width, canvas.height);
      		context.beginPath();
      			context.beginPath();
		    context.arc(ballx, bally, 5, 0, 2 * Math.PI, false);
		    context.fillStyle = 'green';
		    context.fill();
		    context.lineWidth = 2;
		    context.strokeStyle = '#003300';
		    context.stroke();

		}