Game_Battler.prototype.forceActionByItem = function() {
	if (this instanceof Game_Actor) {
    	for (var item of this.equips()) {
	    	if (!item) {
	    		continue;
	    	}
	    	if (DRK.isValidNotetag(item.note)) {
	    		var noteTag = DRK.parseNoteTag(item.note);
	    		var values = DRK.parseNoteTagValues("skill ", noteTag);

	    		const skill = parseInt(values[0]);
	    		const chance = parseFloat(values[1]);

	    		if (this.isStateAffected($dataSkills[skill].effects[0].dataId)) {
	    			continue;
	    		}

	    		if (Math.random() * 100 <= chance) {
	    			BattleManager.queueForceAction(this, skill, -2);
	    			return true;
	    		}
	    		else {
	    			return false;
	    		}
	    	}
    	}
    }
};


Game_Battler.prototype.transformByState = function() {
	if (this instanceof Game_Actor) {
		for (var state of this.states()) {
			if (!state) {
				continue;
			}

			if (DRK.isValidNotetag(state.note)) {
				var noteTag = DRK.parseNoteTag(state.note);
	    		var values = DRK.parseNoteTagValues("transform ", noteTag);

	    		if (this.battlerName() === this._defaultBattler) {
	    			this.startAnimation(62, false, 0);
	    			this.setBattlerImage(values[0]);
	    		}
	    		
			}
		}
	}
};


Game_Battler.prototype.untransform = function() {
	this.startAnimation(54, false, 30);
	this.setBattlerImage(this._defaultBattler);
};


var _oldOnBattleStart = Game_Battler.prototype.onBattleStart;
Game_Battler.prototype.onBattleStart = function() {
	_oldOnBattleStart.apply(this, arguments);

	this._defaultBattler = this.battlerName();
};

var _oldOnTurnEnd = Game_Battler.prototype.onTurnEnd;
Game_Battler.prototype.onTurnEnd = function(value) {
    _oldOnTurnEnd.apply(this, arguments);
    this.forceActionByItem();
    this.transformByState();

};