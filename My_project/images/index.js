var objPeople = [
	{ 
		username: "sam",
		password: "codify"
	},
	{
		username: "matt",
		password: "academy"
	},
	{ 
		username: "chris",
		password: "forever"
	}

]

function getInfo() {
	var username = document.getElementsByClassName('username').value
	var password = document.getElementsByClassName('password').value

	for(var i = 0; i < objPeople.length; i++) {
		if(username == objPeople[i].email && password == objPeople[i].password) {
			alert(username + " is logged in!!!")
			return
		}
	}
	alert("incorrect username or password")
}