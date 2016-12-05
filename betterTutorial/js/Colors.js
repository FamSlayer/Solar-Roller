var Colors = function(numVerts){
	
	//make red
	var colArr = [];
	for(var i = 0; i <numVerts; i++){
		colArr.push(255);
		colArr.push(0);
		colArr.push(0);
	}
	this.RED = new Uint8Array(colArr);

	colArr = [];
	for(var i = 0; i <numVerts; i++){
		colArr.push(0);
		colArr.push(0);
		colArr.push(255);
	}

	this.BLUE = new Uint8Array(colArr);

	colArr = [];
	for(var i = 0; i <numVerts; i++){
		colArr.push(0);
		colArr.push(255);
		colArr.push(0);
	}

	this.GREEN = new Uint8Array(colArr);

	colArr = [];
	for(var i = 0; i <numVerts; i++){
		colArr.push(0);
		colArr.push(255);
		colArr.push(229);
	}

	this.CYAN = new Uint8Array(colArr);

	colArr = [];
	for(var i = 0; i <numVerts; i++){
		colArr.push(255);
		colArr.push(0);
		colArr.push(229);
	}

	this.MAGENTA = new Uint8Array(colArr);

	colArr = [];
	for(var i = 0; i <numVerts; i++){
		colArr.push(255);
		colArr.push(0);
		colArr.push(229);
	}

	this.YELLLOW = new Uint8Array(colArr);
};