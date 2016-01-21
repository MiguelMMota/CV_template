/*
TODO:
1) Barras horizontais/verticais amarelas
2) Links dos meus empregadores a funcionar
3) Alinhamento das datas com o respetivo emprego
4) URL da FEUP a funcionar
5) Education.subject a aparecer na página
6) Queries to handle divice width
7) Links - empregos, cursos, interesses
*/

var bio = {
    "name": "Miguel M. Mota",
    "role": "Front-End Developer",
    "pictureURL": "images/me.png",
    "aboutMe": "I'm a front-end developer, looking to embrace a great opportunity. I accumulate my university studies in Electrical and Computer Engineering with my own personal research or online courses on front-end development tools. I've had many fulfilling experiences while living and working in several countries accross Europe. Recently settled in the United Kingdom, I'm looking to apply my skills in an exciting project",
    "contacts": [{
        "address": "7, Wherstead Road, IP2 8JQ, Suffolk, UK",
        "mobile": "(+44) 79136 37670",
        "emailAddress": "mota.m.miguel@gmail.com",
        "gitHub": "none",
        "twitter": "none",
        "linkedIn": "none",
        "location": "Ipswich, United Kingdom"
    }],
    "interests": [{
    	"description": "Music", //(piano, guitar, composing)
    	"image": "images/music.png"
    }, {
    	"description": "Football", 
    	"image": "images/football.png"
    }, {
    	"description": "Gaming",
    	"image": "images/gaming.png"
    }, {
    	"description": "Reading", 
    	"image": "images/reading.png"
    }, {
    	"description": "Volunteering", 
    	"image": "images/volunteering.png"
    }, {
    	"description": "Travelling",
    	"image": "images/airplane.png"
    }, {
    	"description": "and most of all...",
    	"image": ""
    }, {
    	"description": "Husband",
    	"image": "images/husband.png"
    }]
}

var achievements = {
	"achievements": [{
		"description": "Personal assistant to mission president, overseeing the work of a team of 150 people in two different countries", 
		"date": "2009-2010"
	}, {
		"description": "2-year volunteer service in France and Belgium",
		"date": "2008-2010"
	}, {
		"description": "High School Music Diploma", 
		"date": "2008"
	}, {
		"description": "Interviewed by a national magazine for an article on tips for success in school", 
		"date": "2008"
	}, {
		"description": "Member of the honor board every year of high school and junior high",
		"date": "2002-2008"
	}, {
		"description": "Several achievements in math competitions",
		"date": "2002-2005"
	}]
}

var work = {
	"jobs": [{
		"employer": "Churchill",
		"title": "Cleaning Assistant",
		"location": "Ipswich, United Kingdom",
		"dates": "Oct 2015 - PRESENT",
		"description": "Temporary cleaning job"
	}, {
		"employer": "Gressingham Foods",
		"title": "Quality Assistant",
		"location": "Woodbridge, United Kingdom",
		"dates": "Oct 2015 - Dec 2015",
		"description": "Temporary job during Christmas season, doing quality control in the food industry"
	}, {
		"employer": "Missionary Training Center",
		"title": "Teacher",
		"location": "Madrid, Spain",
		"dates": "Dec 2011 - Jul 2015",
		"description": "I worked mainly as a teacher to one or more groups of missionaries at a time, preparing them for a full-time service in portuguese, spanish, english or french speaking countries around the world. I also provided translation in these languages, delivered group presentations, and did individual tutoring"
	}, {
		"employer": "FEUP - Faculdade de Engenharia da Universidade do Porto",
		"title": "Teacher's Assistant",
		"location": "Porto, Portugal",
		"dates": "Feb 2014 - Jul 2014",
		"description": "I was offered this opportunity along with other top students in our class, to assist in teaching students in earlier years. My main responsibilites included analyzing theoretical subjects in class, introducing practical assignments, tutoring, revising and grading projects and exercises. The class I assisted in was on Automated Systems, and covered topics such as state diagrams, Grafcet, sensors and actuators, different automated system implementations for simple requirements"
	}, {
		"employer": "Telecommunications Institute",
		"title": "Researcher",
		"location": "Porto, Portugal",
		"dates": "Feb 2014 - Jul 2014",
		"description": "I assisted in code debugging, and testing application parameters, as part of a research scholarship for a project called Codestream. The scope of the project was to develop a tool to significantly reduce bandwidth consumption in packet exchange. The application resorted to an algorithm drew on packet correlation to add redundancy to the message, which, when interpreted at the receiving end, allowed for error detection, reducing the need to resend packets on error occurrence"
	}]
}

var projects = {
	"projects" : [{
		"title" : "1, 2, 3... Sold!",
		"dates" : "Feb 2014 - Jul 2014",
		"description" : "An auction platform, with many of the funcionalities of other tools such as ebay, amazon. Project developed as part of an optional university class on Database and Web Appications, focusing on database management, server communication, and front-end development. Worked with HTML, CSS, Javascript, JQuery, Bootstrap, JSON, SQL",
		"images" : ["images/auction.jpg"]
	},
	{
		"title" : "Java application",
		"dates" : "Feb 2013 - Jul 2013",
		"description" : "University project as part of a class on Programming. The purpose of the project was to create a 2.5D game in Java. The requirements were evocative of the popular game Minecraft, where the play would evade enemies by destroying and building blocks on the map. As our client was a primary school, additional features were implemented to allow players to answer simple questions, in order to accumulate points and gain stronger utensils. The main challenges of the project included planning the implementation of every requirement, server setup for multiplayer experience, as well as visual programming",
		"images" : ["images/java_game.png"]
	},
	{
		"title" : "Line follower",
		"dates" : "Sep 2012 - Feb 2013",
		"description" : "University project as part of a class on Computers. The purpose of the project was to challenge the students to work with an Arduino board, both the electronic side and the programmable aspect. Main tasks included planning the electrical configuration, programming the servo and stepper motors as well as the sensors, to make the car follow both black or white lines, in any direction",
		"images" : ["images/line_follower.jpg"]
	}]
}

var education = {
	"schools": [{
		"name": "FEUP - Faculdade de Engenharia da Universidade do Porto",
		"location": "Porto, Portugal",
		"subject": "Electronic and Computer Engineering",
		"dates": "2008-Present",
		"schoolURL": "www.fe.up.pt",
		"level": "17.0/20",
		"description": "Masters Program with heavy emphasis on programming and computer engineering. Initiated major in Telecommunications. Achieved top results, including in classes based on C, Java, SQL, HTML, CSS, Javascript, Grafcet, Verilog, and other programming languages"
	}],
	"onlineCourses": [{
		"title": "JavaScript Crash Course",
		"school": "Udacity",
		"dates": "Dec 2015- Jan 2016",
		"url": "https://www.udacity.com/course/ud804",
		"description": "Basic Javascript online course"
	}, {
		"title": "HTML, CSS, DOM",
		"school": "Udacity",
		"dates": "Jan 2016",
		"url": "https://www.udacity.com/course/viewer#!/c-ud304",
		"description": "Basic HTML and CSS course"
	}, {
		"title": "Object-Oriented Javascript",
		"school": "Udacity",
		"dates": "Jan 2016",
		"url": "https://www.udacity.com/course/viewer#!/c-ud015",
		"description": "Intermediate level Javascript course, with focus on object-oriented Javascript, leading to the study of different class patterns, such as pseduclassical subclasses"
	}]
}

//Grafcet, ST - 160; Matlab - 140, Level out of 200
var skills = {
	"technicalSkills": [{"skill": "C, C++",
						"level": "180"
					}, {
						"skill": "Java",
						"level": "140"
					}, {
						"skill":"SQL",
						"level": "150"
					}, {
						"skill": "HTML, CSS, Javascript",
						"level":"180"
					}, {
						"skill": "Python",
						"level": "130"
					}, {
						"skill": "Microsoft Offce, MAC OS",
						"level": "190"
					}],
	"personalSkills": [{"skill": "Teamwork",
						"level": "170"
					}, {
						"skill": "Leadership",
						"level": "150"
					}, {
						"skill":"Organization",
						"level": "170"
					}, {
						"skill": "Motivation",
						"level":"180"
					}],
	"languageSkills": [{"skill": "English",
						"level": "200"
					}, {
						"skill": "Portuguese",
						"level": "200"
					}, {
						"skill":"Spanish",
						"level": "140"
					}, {
						"skill": "French",
						"level":"180"
					}, {
						"skill": "Mandarin",
						"level":"80"
					}]
				}				
				


bio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	var formattedImage = HTMLbioPic.replace("%data%",bio.image);
	var formattedMessage = HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage);

	$("#header").prepend(formattedRole).prepend(formattedName).append(formattedImage,formattedMessage);
	$("#header").append(HTMLskillsStart);

	for(skill in bio.skills) {
		var formattedSkills = HTMLskills.replace("%data%",bio.skills[skill]);
		$("#skills").append(formattedSkills);
	};

	for(contact in bio.contacts) {
		var formattedMobile = HTMLmobile.replace("%data%",bio.contacts[contact].mobile);
		var formattedEmail = HTMLemail.replace("%data%",bio.contacts[contact].email);
		var formattedSkype = HTMLcontactGeneric.replace("%contact%","skype").replace("%data%",bio.contacts[contact].skype);
		$("#footerContacts").append(formattedMobile,formattedEmail,formattedSkype);
	};
};

education.display = function() {
	for(school in education.schools) {
		$("#education").append(HTMLschoolStart);
		
		var formattedName = HTMLschoolName.replace("%data%",education.schools[school].name);
		var formattedDegree = HTMLschoolDegree.replace("%data%",education.schools[school].degree);
		var formattedDates = HTMLschoolDates.replace("%data%",education.schools[school].dates);
		var formattedLocation = HTMLschoolLocation.replace("%data%",education.schools[school].location);
		var formattedMajor = HTMLschoolMajor.replace("%data%",education.schools[school].majors);
		$(".education-entry:last").append(formattedName + formattedDegree,formattedDates,formattedLocation,formattedMajor);
	}
};

work.display = function() {
	for(job in work.jobs) {
		$("#workExperience").append(HTMLworkStart);
		
		var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
		var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
		var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
		var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);

		$(".work-entry:last").append(formattedEmployer + formattedTitle,formattedDates,formattedDescription);
	}
};

projects.display = function(){
	for(item in projects.project){
		$("#projects").append(HTMLprojectStart);
		var formattedTitle = HTMLprojectTitle.replace("%data%",projects.project[item].title);
		var formattedDates = HTMLprojectDates.replace("%data%",projects.project[item].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%",projects.project[item].description);
		
		$(".project-entry:last").append(formattedTitle,formattedDates,formattedDescription);
		for (image in projects.project[item].images) {
			var formattedImage = HTMLprojectImage.replace("%data%",projects.project[item].images[image]);
			$(".project-entry:last").append(formattedImage);
		};
		

		
	}
};

function inName(name){
	console.log(name);
	var newName = name;
	newName = newName[0].toUpperCase() + newName.slice(1,newName.indexOf(" ") + 1).toLowerCase() + newName.slice(newName.indexOf(" ") + 1).toUpperCase(); 

	return newName;
};


work.display();
projects.display();
education.display();
bio.display();

$("#main").append(internationalizeButton);
$("#mapDiv").append(googleMap);