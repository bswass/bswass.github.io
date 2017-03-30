function test() {
	var check = 0;
	var blanks = new Array();

	/* Check true false questions*/
	var one = document.getElementsByName("orbit");
	if (one[0].checked == false && one[1].checked == false) {
		blanks.push(1);
	}
	if (one[1].checked){
		check = check + 1;
	}

	var two = document.getElementsByName("parallax");
	if (two[0].checked == false && two[1].checked == false) {
		blanks.push(2);
	}
	if (two[0].checked){
		check = check + 1;
	}

	/* Check multiple choice questions */
	var three = document.getElementsByName("energy");
	if (three[0].checked == false && three[1].checked == false && three[2].checked == false && three[3].checked == false) {
		blanks.push(3);
	}
	if (three[1].checked && three[0].checked == false && three[2].checked == false && three[3].checked == false) {
		check = check + 1;
	}

	var four = document.getElementsByName("stars");
	if (four[0].checked == false && four[1].checked == false && four[2].checked == false && four[3].checked == false) {
		blanks.push(4);
	}
	if (four[3].checked && four[0].checked == false && four[1].checked == false && four[2].checked == false) {
		check = check + 1;
	}

	/* Check textbox questions*/
	var five = document.getElementsByName("galaxy");
	if (!five[0].value) {
		blanks.push(5);
	}
	if (five[0].value.match(/galaxy/i)) {
		check = check + 1;
	}

	var six = document.getElementsByName("age");
	if (!six[0].value) {
		blanks.push(6);
	}
	if (six[0].value.match(/age/i)) {
		check = check + 1;
	}

	/* Check if every question is answered */
	if (blanks.length == 0) {
		window.alert("Your grade is " + check + " / 6");
	}
	else {
		if (blanks.length == 1){
			window.alert("Please answer question " + blanks[0]);
		}
		else{
			var txt = "Please answer questions ";
			for (i = 0; i < blanks.length; i++){
				if (i != (blanks.length) - 1) {
					txt = txt + blanks[i] + ", ";
				}
				else {
					txt = txt + "and " + blanks[i];
				}
			}
			window.alert(txt);
		}
	}
}