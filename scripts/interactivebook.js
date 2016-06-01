//Globels vars
		
		//Set the 100% book width and height
		$scope.bookWidth = $scope.Width();
		$scope.bookHeight = $scope.Height();
		
		$scope.pageWidth = $scope.Width() / 2;
		$scope.pageHeight = $scope.Height();
		
		$scope.pageY = $scope.Height();
		
		$scope.page = 0;
		
		$scope.canvas = document.getElementById("pageflip-canvas");
		$scope.context = $scope.canvas.getContext("2d");
		
		$scope.pages = $document[0].getElementsByTagName("s");	
		console.log($scope.bookPages.length);
		$scope.mouse = 
		{
			x :	0,
			y : 0
		}
		
		
		//resizing the canvas to match book sizing
		$scope.canvas.width = $scope.bookWidth;
		$scope.canvas.height = $scope.bookHeight;
		
		$interval(function()
		{
			$scope.Render();
		},1000 / 60);
		
		$scope.mouseMoveHandler = function(event)
		{
			// Offset mouse position so that the top of the spine is 0,0
			$scope.mouse.x = event.clientX  - $scope.pageWidth;
			$scope.mouse.y = event.clientY  - $scope.pageHeight;
			//console.log('Y: ' + $scope.mouse.y);
		}
		
		$scope.mouseDownHandler = function(ev)
		{
			
			if(Math.abs($scope.mouse.x) < $scope.pageWidth)
			{
				if($scope.mouse.x < 0)
				{
					console.log("Yes less then zero"); 	
				}
				else if($scope.mouse.x > 0)
				{
					console.log("Yes more then zero");	
				}
			}
			
			ev.preventDefault();
		}
		
		$scope.mouseUpHandler = function(event)
		{
			for(var i = 0; i < $scope.bookPages.length; i++)
			{
				//if this flips was beging dragged we animate to its destiantion
				if($scope.bookPages[i].dragging)
				{
					//figure out which page we should to next depention on flip direction
					if($scope.mouse.x < 0 )
					{
						$scope.bookPages[i].target = -1;
						$scope.page = Math.min($scope.page + 1, $scope.bookPages.length);
					}
					else
					{
						$scope.bookPages[i].target = 1;
						$scope.page = Math.max($scope.page - 1, 0);	
					}
				}
				
				$scope.bookPages[i].dragging = false;
			}
		}
		
		$scope.Render = function()
		{
			$scope.context.clearRect(0,0,$scope.canvas.width,$scope.canvas.height);
			
			for(var i = 0; i < $scope.bookPages.length; i++)
			{
				var flip = $scope.bookPages[i];
				
				if(flip.dragging)
				{
					flip.target - Math.max(Math.min($scope.mouse.x / $scope.pageWidth, 1), -1);	
				}
				
				flip.progress += ($scope.target - flip.progress) * 0.2;
				
				//if the flip beging drage or is somewhere in the middle of the book, renderit
				if(flip.dragging || Math.abs(flip.progress) < 0.997)
				{
					$scope.DrawFlip(flip, i);	
				}
			}
		}
		
		$scope.DrawFlip = function(flip , i)
		{
			//Strenght of the fold is strongest in the middle of the book.
			var strenght = 1 - Math.abs(flip.progress);
			
			//width of the folded paper
			var foldWidth = ($scope.pageWidth * 0.5) * (1 - flip.progress);
			
			//X position of the fold paper 
			var foldX = $scope.pageWidth * flip.progress + foldWidth;
			
			//how far the page outdent vertically due perspecitve
			var verticalOutdent = 20 * strenght;
			
			//the max width of the left and right side shadows
			var paperShadowWidth = ($scope.pageWidth * 0.5) * Math.max(Math.min(1 - flip.progress, 0.5), 0);
			var rightShadowWidth = ($scope.pageWidth * 0.5) * Math.max(Math.min(strenght, 0.5), 0);
			var leftShadowWidth = ($scope.pageWidth * 0.5) * Math.max(Math.min(strenght, 0.5), 0);
			
			//change page element <i> width to match the X position of the fold
			$scope.bookPages[i].css = Math.max(foldX, 0) + "px";
			console.log($scope.bookPages[i].css);
			$scope.context.save();
			$scope.context.translate($scope.pageWidth,$scope.pageY);
		}
		
		