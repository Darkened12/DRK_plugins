Game_Actor.prototype.changeClass = function(classId, keepExp) {
    if (keepExp) {
        this._exp[classId] = this.currentExp();
    }

    var actor = this;
    actor.skills().map(function(skill) {
    	if (skill) {actor.forgetSkill(skill.id)}
    	}
    );

    var newClass = $dataClasses[classId]
    newClass.learnings.map(function(classSkill) {
    	actor.learnSkill(classSkill.skillId);
    });

    if (DRK.isValidNotetag(newClass.note)) {
		var noteTagValue = DRK.parseNoteTagValues("image ", DRK.parseNoteTag(newClass.note));
		this.setFaceImage(noteTagValue[0], 0);
		this.setBattlerImage(noteTagValue[0]);
		this.setCharacterImage(noteTagValue[0], 0);
		$gamePlayer.refresh();
	}


    this._classId = classId;
    this.changeExp(this._exp[this._classId] || 0, false);
    this.refresh();
};