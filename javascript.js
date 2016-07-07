var number = [],array;
var arrX = function(array,i,j){
	result = 1;
	for(var k = 0; k < 10; k++){
 		result *= array[k][i][j];
 	}

	return result;
}
var arrY = function(array,i,j){
	result = 1;
	for(var k = 0; k < 10; k++){
 		result *= array[i][k][j];
 	}

	return result;
}
var arrZ = function(array,i,j){
	result = 1;
	for(var k = 0; k < 10; k++){
 		result *= array[i][j][k];
 	}

	return result;
}
function arr(){
	
	array = new Array(10);
	for (var i = 0; i < 10; i++) {
		array[i] = new Array(10);

		for (var j = 0; j < 10; j++) {
			array[i][j] = new Array(10);

			for(var t = 0;t < 10; t++){

				array[i][j][t] = Math.floor(Math.random() * 9);
				
				}
			}
			
		}
		
	}	
var minNum;
function minCol(){
	arr();
	var minCol = 1;
	for(var i = 0; i < 10; i++){
		for(var j = 0; j < 10; j++){
			for(var k = 0; k< 10;k++){

				if(i == j && i == k && j == k && (arrX(array,i,j)*arrZ(array,i,j)*arrY(array,i,j) < minCol)){
					console.log(arrX(array,i,j));
					minCol = arrX(array,i,j)*arrZ(array,i,j)*arrY(array,i,j);
					minNum = k;
				}
			}
		}
	}
	return minNum;
}

minCol();
console.log(minNum);
