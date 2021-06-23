interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}

function renderStudent(s1: Student, s2: Student) {
	let studentsList = [
		{ firstName: s1.firstName, location: s1.location },
		{ firstName: s2.firstName, location: s2.location }
	];

	var table = document.createElement('table');
	document.body.appendChild(table);

	studentsList.forEach(function(item) {
		var tr = table.insertRow();

		var td1 = tr.insertCell();
		td1.innerText = item.firstName;

		var td2 = tr.insertCell();
		td2.innerText = item.location;
	});
}

const student1 = {
	firstName: 'Andrea',
	lastName: 'Mendez',
	age: 42,
	location: 'Medellin'
};

const student2 = {
	firstName: 'Pablo',
	lastName: 'Guerra',
	age: 42,
	location: 'Medellin'
};

renderStudent(student1, student2);
