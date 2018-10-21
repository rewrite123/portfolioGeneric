/*
Used to make the elements appear when you use the navigation bar.
Uses an int as the param to tell which element to display
*/
function showElement(x){
	var about = document.getElementById("about");
	var portfolio = document.getElementById("portfolio");
	var contact = document.getElementById("contact");
	
	about.style.display = "none";
	portfolio.style.display = "none";
	contact.style.display = "none";
	
	if(x == 0){
		about.style.display = "block";
	}else if(x == 1){
		portfolio.style.display = "block";
	}
	else if(x == 2){
		contact.style.display = "block";
	}
}

/* This makes it so that when you are on smaller displays the navbar moves you to the content you requested. */
window.onresize = function(event) {
	if(window.innerWidth < 850){
		document.getElementById("aboutSelector").href = "#about";
		document.getElementById("portfolioSelector").href = "#portfolio";
		document.getElementById("contactSelector").href = "#contact";
	}else{
		document.getElementById("aboutSelector").href= "#";
		document.getElementById("portfolioSelector").href = "#";
		document.getElementById("contactSelector").href = "#";
	}
};
if(window.innerWidth < 850){
	document.getElementById("aboutSelector").href = "#about";
	document.getElementById("portfolioSelector").href = "#portfolio";
	document.getElementById("contactSelector").href = "#contact";
}else{
	document.getElementById("aboutSelector").href= "#";
	document.getElementById("portfolioSelector").href = "#";
	document.getElementById("contactSelector").href = "#";
}