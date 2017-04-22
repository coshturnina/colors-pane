var colorblock = [
	["706AF3","6694FC","FFF","FDDA9D","E89F78","80B891","7982CF","DEE0EE"],
	["2F", "B1DC76", "7BECED", "FF85A7", "F3BB72", "57595B", "DBDFD4", "927C78"], 
	["010101", "2c8DCF", "E55D4E", "EAD6D3", "5774A5", "ABCBE2"],
	["FF3781", "FFEFF", "FF5195", "FF91ED", "FFA6E3"],
	["62bdfb", "dddddc", "56b5f1", "31a7db", "95cfed", "f3bf6e", "f5a343"],
	["46415a", "8e6f88", "9b7d92", "a994a2", "dfa4a0", "ecc8c4", "f6c1b3"], 
	["060606", "0f73ee", "cfcfcf", "0b54ae", "2367c8", "a8a8a8", "b0c8e5" ],
	["5f2364", "a32d70", "6e32a0", "d64369", "dbd3d9", "7a7de0"],
	["ffd64f", "f66064", "7c3c83", "d65671", "ee9175", "6796d7", "f7edf3", "fef15c"],
	["f9f9f8", "dad8d5", "E7ddcd", "ede8da", "d2b2a3", "856d6e", "c8cba3", "de9583"],
	["fafafa", "cfcfcf", "d44c40", "b2453a", "b5afae", "d1a7a2", "e5cfc4"], 
	["ff", "6053b0", "eeece0", "eb8174", "f5c589", "efd2cd", "936587", "b9adc6"],
	["3a0432", "cc5c69", "aa3455", "efa193"],
	["d4f3f0", "fcfbdb", "fde2b2", "fab3b0", "bbedfe", "999867"],
	["231f20", "fcfcfc", "c0bfbf", "493733", "5c595a", "dd5226", "8d665a"],
	["8eb2c5", "3b3f47", "f9bf76", "e5625c", "d0323a", "6f899d", "b2bcc2"],
	["ff7248", "ff9546", "dfd6d1", "f6c8a7", "dcab97", "b5bbc3", "8e847d"],
	["fbfbfd", "263c75", "ff7941", "d2d9e9", "e3e0e2", "fba88d", "b1b4cb", "818aa5"],
	["fcfcfc", "62cdf6", "5bacf9", "d4dce1", "6beded", "4d4849", "c0b298"],
	["f7f7f8", "c3bbc0", "362b24", "696055", "818387", "5e4a36", "d6332c"],
	["1b2355", "a0cce3", "f66464", "e8ecef", "e79294", "8a859b", "bac0ba"],
	["bd7580", "c7788c", "f5f3f0", "5f6078", "A07f8a", "DEA59A", "E4ddd9", "E0cda9"],
	["FF", "BCC918", "97AA1D", "74971D", "BABBB4", "687019", "99574A"],
	["F82462", "FFFDFE", "1C1E61", "E7DEE6", "915581", "F47297", "FCACC4", "F5C8D8"]
];



function addSharp(str){
	str = "#" + str;
	return str;
}

function createColorBlock(arrayOfColors, elementAppendTo){
	var l = 0;
	var colorBlock = document.createElement('div');
	colorBlock.className = "colorBlock";
	elementAppendTo.appendChild(colorBlock);
	l = arrayOfColors.length;
	for(var i = 0; i < l; i++){
		colorBlock.appendChild(createColorItem(addSharp(arrayOfColors[i])));
	} // for
} // createColorBlock;

function createColorItem(color){
	var colorItem = document.createElement('div');
	colorItem.className = 'colorItem';
	colorItem.style.backgroundColor = color;
	colorItem.appendChild(document.createTextNode(color));
	return colorItem;
}
