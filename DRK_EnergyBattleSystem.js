Game_Battler.prototype.hasAttacked = function() {
	for (var action of this._actions) {
		if (action.isAttack()) {
			return true;
		}
	}
	return false;
};


var old_onTurnEnd = Game_Battler.prototype.onTurnEnd;
Game_Battler.prototype.onTurnEnd = function() {
    old_onTurnEnd.apply(this, arguments);
    console.log(this.hasAttacked());
};