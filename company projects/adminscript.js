
const dashboard = document.querySelector('.leftpoint1');
const formLink = document.querySelector('.leftpoint4'); 
const adminpage = document.querySelector('.leftpoint3'); 
const welcomepage = document.querySelector('.leftpoint2'); 
const welcome = document.querySelector('.centre');
const home = document.querySelector('.home');
const form = document.getElementById('employeeForm');   
const employeeTable = document.getElementById('employeeTable'); 
const employeeList = document.querySelector('.Employleelist');  

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

    tableBody.appendChild(newRow);

    document.getElementById('employeeName').value = '';
    document.getElementById('email').value = '';
    document.getElementById('phoneNumber').value = '';
    document.getElementById('department').value = '';
    document.querySelector('input[name="gender"]:checked').checked = false;
    document.querySelectorAll('.Course').forEach(course => course.checked = false);
    document.getElementById('imgUpload').value = '';
 
    form.style.display = 'none';
    employeeTable.style.display = 'table';
});

employeeList.addEventListener('click', function() {
    form.style.display = 'none';
    employeeTable.style.display = 'table';
    welcome.style.display = 'none';
});

