var leader = {
  name: "Василий Иванович"
};

var soldier = {
  name: "Петька"
};

// эти объекты ссылаются друг на друга!
leader.soldier = soldier;
soldier.leader = leader;

var team = [leader, soldier];

var str = JSON.stringify(team, function(key, value) {
	if (key == "soldier") return "soldier";
	if (key == "leader") return "leader";
	return value;
});

alert(str);

var obj = JSON.parse(str, function(key, value) {
	if (key == "soldier") return window["soldier"];
	if (key == "leader") return window["leader"];
	return value;
});

alert(obj[0].name);