
const dashboard = document.querySelector('.leftpoint1');
const formLink = document.querySelector('.leftpoint4'); 
const adminpage = document.querySelector('.leftpoint3'); 
const welcomepage = document.querySelector('.leftpoint2'); 
const welcome = document.querySelector('.centre');
const home = document.querySelector('.home');
const form = document.getElementById('employeeForm');   
const employeeTable = document.getElementById('employeeTable'); 
const employeeList = document.querySelector('.Employleelist');  
const td = document.getElementById('.td');

adminpage.addEventListener('click', function() {
    form.style.display = 'none';
    employeeTable.style.display = 'none'; 
    welcome.style.display = 'block'; 
});

home.addEventListener('click', function() {
    form.style.display = 'none';
    employeeTable.style.display = 'none'; 
    welcome.style.display = 'block'; 
});

welcomepage.addEventListener('click', function() {
    form.style.display = 'none';
    employeeTable.style.display = 'none'; 
    welcome.style.display = 'block'; 
});

document.querySelector('.logout button').addEventListener('click', function() {
    window.location.href = 'index.html'; 
});

form.style.display = 'block';
employeeTable.style.display = 'none';

dashboard.addEventListener('click', function() {
    form.style.display = 'none';
    employeeTable.style.display = 'table'; 
    welcome.style.display = 'none';
});



formLink.addEventListener('click', function() {
    form.style.display = 'block';
    employeeTable.style.display = 'none'; 
    welcome.style.display = 'none';
});



document.getElementById('submitBtn').addEventListener('click', function(event) {
    event.preventDefault();

    const name = document.getElementById('employeeName').value;
    const email = document.getElementById('email').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const department = document.getElementById('department').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;

    const selectedCourses = [];
    document.querySelectorAll('.Course:checked').forEach(course => {
        selectedCourses.push(course.value);
    });
 
    const imgFile = document.getElementById('imgUpload').files[0].name;

    const tableBody = document.getElementById('employeeData');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td>${name}</td>
        <td>${email}</td>
        <td>${phoneNumber}</td>
        <td>${department}</td>
        <td>${gender}</td>
        <td>${selectedCourses.join(', ')}</td>
        <td>${imgFile}</td>
    `;
    form.style.display = 'none';
    employeeTable.style.display = 'table';
});

employeeList.addEventListener('click', function() {
    form.style.display = 'none';
    employeeTable.style.display = 'table';
    welcome.style.display = 'none';
});

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('submitBtn').addEventListener('click', function(event) {
        event.preventDefault();

        const name = document.getElementById('employeeName').value;
        const email = document.getElementById('email').value;
        const phoneNumber = document.getElementById('phoneNumber').value;
        const department = document.getElementById('department').value;

        const genderElement = document.querySelector('input[name="gender"]:checked');
        if (!genderElement) {
            alert("Please select a gender.");
            return;
        }
        const gender = genderElement.value;

        const selectedCourses = [];
        document.querySelectorAll('.Course:checked').forEach(course => {
            selectedCourses.push(course.value);
        });

        const imgFileInput = document.getElementById('imgUpload');
        if (imgFileInput.files.length === 0) {
            alert("Please upload an image.");
            return;
        }
        const imgFile = URL.createObjectURL(imgFileInput.files[0]); 

        const employee = {
            name,
            email,
            phoneNumber,
            department,
            gender,
            selectedCourses,
            imgFile
        };

        saveEmployeeToLocalStorage(employee);

        addEmployeeRow(employee);
    });

    loadEmployeeData();
});

function saveEmployeeToLocalStorage(employee) {
    let employees = JSON.parse(localStorage.getItem('employees')) || [];
    employees.push(employee);
    localStorage.setItem('employees', JSON.stringify(employees));
}

function loadEmployeeData() {
    let employees = JSON.parse(localStorage.getItem('employees')) || [];
    employees.forEach(employee => {
        addEmployeeRow(employee);
    });
}

function addEmployeeRow(employee) {
    const tableBody = document.getElementById('employeeData');
    const newRow = document.createElement('tr');
    
    const emailCell = `<td><a href="mailto:${employee.email}">${employee.email}</a></td>`;
  
    const imgCell = `<td><a href="${employee.imgFile}" target="_blank">View Image</a></td>`;

    newRow.innerHTML = `
        <td>${employee.name}</td>
        ${emailCell}
        <td>${employee.phoneNumber}</td>
        <td>${employee.department}</td>
        <td>${employee.gender}</td>
        <td>${employee.selectedCourses.join(', ')}</td>
        ${imgCell}
        <td><button class="deleteBtn">Delete</button></td>
    `;
    
    newRow.querySelector('.deleteBtn').addEventListener('click', function() {
        deleteEmployee(employee.email);
        newRow.remove();
    });

    tableBody.appendChild(newRow);
}

function deleteEmployee(email) {
    let employees = JSON.parse(localStorage.getItem('employees')) || [];

    employees = employees.filter(employee => employee.email !== email);

    localStorage.setItem('employees', JSON.stringify(employees));
}

