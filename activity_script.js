
var questions = ["Click on the picture with the device that is carrying the operating system El Capitan.",
"Click on the picture with the mobile device which runs on iOS.","Click on the pciture which represents the Xcode IDE.",
"Click on the picture which represents the Java programming language.","Click on the picture of the man who started the company NeXT.",
"Thank you for taking the quiz!"];

var answers = [2,3,3,1,2];

var pictures = [{image1:"images/desktop.jpg",image2:"images/laptop.jpg",image3:"images/ipad.jpg"},
{image1:"images/android.jpg",image2:"images/blackberry.png",image3:"images/iphone.jpg"},
{image1:"images/eclipse.png",image2:"images/terminal.jpg",image3:"images/xcode.jpg"},
{image1:"images/java.png",image2:"images/swift.png",image3:"images/python.png"},
{image1:"images/bill_gates.jpg",image2:"images/steve_jobs.jpg",image3:"images/mark_zuckerberg.jpg"}];


var i = 0;
var j = 0;
var score = 0;
var flag = 0;

function nextQuestion()
{
	if(i == 3)
	{
		document.getElementById("next_btn").innerHTML = "Submit";
	}
	if(i == 4)
	{
		document.getElementById("img1").style.display = 'none';
		document.getElementById("img2").style.display = 'none';
		document.getElementById("img3").style.display = 'none';
		document.getElementById("enter_btn").style.display = 'none';
		document.getElementById("next_btn").style.display = 'none';
		document.getElementById("score_text").innerHTML = score + "/5 is your final score.";
		document.getElementById("score_text").style.display = 'inline';
	}

	i++;
	document.getElementById("q_text").innerHTML = questions[i];
	document.getElementById("img1").src = pictures[i].image1;
	document.getElementById("img2").src = pictures[i].image2;
	document.getElementById("img3").src = pictures[i].image3;
	document.getElementById("img3").style.backgroundColor = '#CCCCFF';
	document.getElementById("img2").style.backgroundColor = '#CCCCFF';
	document.getElementById("img1").style.backgroundColor = '#CCCCFF';
}

function showAnswer()
{
	if(flag == answers[i])
	{
		score++;
		document.getElementById("img"+flag).src = "images/check.png";
		alert("Correct!");
	}
	else
	{
		document.getElementById("img"+flag).src = "images/x.png";
		alert("Incorrect!");
	}

}

function selectPicture1()
{
	flag = 1;
	document.getElementById("img1").style.backgroundColor = 'blue';
	document.getElementById("img2").style.backgroundColor = '#CCCCFF';
	document.getElementById("img3").style.backgroundColor = '#CCCCFF';
	
}
function selectPicture2()
{
	flag = 2;
	document.getElementById("img2").style.backgroundColor = 'blue';
	document.getElementById("img1").style.backgroundColor = '#CCCCFF';
	document.getElementById("img3").style.backgroundColor = '#CCCCFF';
}
function selectPicture3()
{
	flag = 3;
	document.getElementById("img3").style.backgroundColor = 'blue';
	document.getElementById("img2").style.backgroundColor = '#CCCCFF';
	document.getElementById("img1").style.backgroundColor = '#CCCCFF';
}

function start()
{
	document.getElementById("d_div").style.display = 'none';
	document.getElementById("description").style.display = 'none';
	document.getElementById("start_btn").style.display = 'none';
	document.getElementById("enter_btn").style.display = 'inline';
	document.getElementById("next_btn").style.display = 'inline';
	document.getElementById("q_text").style.visibility = 'visible';
	document.getElementById("img1").style.display = 'inline';
	document.getElementById("img2").style.display = 'inline';
	document.getElementById("img3").style.display = 'inline';
}


function registerHandlers()
{
	document.getElementById("enter_btn").addEventListener("click",showAnswer);
	document.getElementById("next_btn").addEventListener("click",nextQuestion);
	document.getElementById("img1").addEventListener("click",selectPicture1);
	document.getElementById("img2").addEventListener("click",selectPicture2);
	document.getElementById("img3").addEventListener("click",selectPicture3);
	document.getElementById("start_btn").addEventListener("click",start);
	
	
}