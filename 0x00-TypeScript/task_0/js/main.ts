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

	const table = document.createElement('table');
	document.body.appendChild(table);

	studentsList.forEach(function(item) {
		const tr = table.insertRow();

		const td1 = tr.insertCell();
		td1.innerHTML = item.firstName;

		const td2 = tr.insertCell();
		td2.innerHTML = item.location;
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
