function DRK() {
	throw new Error('This is a static class');
};


DRK.parseStringBetweenBrackets = function(str) {
	return str.split('{').pop().split('}')[0];
};


DRK.isValidNotetag = function(str) {
	return (str.includes('{') && str.includes('}'));
};


DRK.parseNoteTag = function(noteTag) {
	var splitTag = noteTag.split('\n');
	var splitTag_filtered = splitTag.filter(DRK.isValidNotetag);
	return splitTag_filtered.map(DRK.parseStringBetweenBrackets);
};


DRK.parseNoteTagValues = function(argument, parsedNotetag) {
	return parsedNotetag.map(function(str) {return str.replace(argument, '')});
};