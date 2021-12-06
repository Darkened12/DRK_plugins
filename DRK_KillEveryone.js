Game_Party.prototype.killEveryone = function() {
	this.aliveMembers().map(function(member) {
		member.addState(1);
	})
};