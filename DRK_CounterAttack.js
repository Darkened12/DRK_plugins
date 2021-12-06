var _oldOnDamage = Game_Battler.prototype.onDamage;
Game_Battler.prototype.onDamage = function(value) {
	_oldOnDamage.apply(this, arguments);

	for (var state of this.states()) {
		if (DRK.isValidNotetag(state.note)) {
			var noteTag = DRK.parseNoteTag(state.note);
	    	var values = DRK.parseNoteTagValues("Counter Attack ", noteTag);
	    	var skill = parseInt(values[0]);

	    	BattleManager.queueForceAction(this, skill, -1);


		}
	}

};