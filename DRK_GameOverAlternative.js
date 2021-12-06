Scene_Gameover.prototype.gotoTitle = function() {
	SceneManager.goto(Scene_Map);
    $gameTemp.reserveCommonEvent(6);
};