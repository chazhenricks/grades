var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
var sorted = scores.sort();
var a=0;
var b=0;
var c=0;
var d=0;
var f=0;

for (var i=0; i<scores.length; i++){
	if((scores[i] > 50) && (scores[i] < 60)){
		f += 1;
	} else if ((scores[i] > 61) && (scores[i] < 70)){
		d += 1;
	}else if ((scores[i] > 71) && (scores[i] < 80)){
		c += 1;
	}else if ((scores[i] > 81) && (scores[i] < 90)){
		b += 1;
	}else if ((scores[i] > 91) && (scores[i] < 100)){
		a += 1;
	}
}

console.log("There are " + a + " A Grades");
console.log("There are " + b + " B Grades");
console.log("There are " + c + " C Grades");
console.log("There are " + d + " D Grades");
console.log("There are " + f + " F Grades");
console.log("The lowest grade is " + sorted[0]);
console.log("The highest grade is " + sorted[sorted.length-1]);