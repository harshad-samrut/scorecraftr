let pdf = document.querySelector('#inputFile');
let label = document.querySelector(".input-label");
let uploadContainer = document.querySelector(".upload");

pdf.addEventListener("change", () => {
    if (pdf.files.length > 0) {
        label.classList.add('uploaded');
        label.innerText = 'PDF Uploaded ✅';

        // Remove previously appended info if any
        uploadContainer.querySelectorAll("small.file-info").forEach(el => el.remove());

        let fileName = document.createElement('small');
        let fileType = document.createElement('small');

        fileName.classList.add("file-info");
        fileType.classList.add("file-info");

        fileName.innerText = `📄 ${pdf.files[0].name}`;
        fileType.innerText = `📂 File Type: ${pdf.files[0].type}`;

        uploadContainer.append(fileName, fileType);
    }
});

//selecting btn pattern 2013
let btn2019 = document.querySelector('#pattern-2019');
let btn2024 = document.querySelector('#pattern-2024');
let box2019 = document.querySelector('.checkboxes-2019');
let box2024 = document.querySelector('.checkboxes-2024');
let checkboxe2024label = document.querySelectorAll('.checkboxes-2024 label');
btn2024.addEventListener('click', () => {
    btn2019.classList.remove('pattern-2019');
    btn2024.classList.add('pattern-2024');
    box2019.style.display = 'none';
    box2024.style.display = 'grid'; // because it's using grid layout
    checkboxe2024label.forEach(label => {
    label.style.display = 'flex'; // or 'block' based on your layout
    });

});

btn2019.addEventListener('click', () => {
    btn2024.classList.remove('pattern-2024');
    btn2019.classList.add('pattern-2019');
    box2024.style.display = 'none';
    box2019.style.display = 'grid';
});

//modyfint table
let addCourse = document.querySelector('.course-name button');
let tableBody = document.querySelector('.course-table tbody');
let input = document.querySelector('.course-name input')
let count = 1;

addCourse.addEventListener('click', () => {
    let row = document.createElement('tr');

    let col1 = document.createElement('td');
    col1.innerText = count++;

    let col2 = document.createElement('td');
    col2.innerText = input.value; // Replace with dynamic course name if needed

    input.value="";

    let checkedValues = [];
    document.querySelectorAll('.score-type:checked').forEach((checkbox) => {
        checkedValues.push(checkbox.value);
    });

    let col3 = document.createElement('td');
    col3.innerText = checkedValues.join(", ");

    // ✅ Reset all checkboxes
    document.querySelectorAll('.score-type:checked').forEach((checkbox) => {
        checkbox.checked = false;
    });
    // Replace with dynamic score types if needed

    let col4 = document.createElement('td');
    let deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';

    deleteBtn.classList.add('delete-btn');

    deleteBtn.addEventListener('click', () => {
        row.remove();
    });

    col4.appendChild(deleteBtn);

    row.appendChild(col1);
    row.appendChild(col2);
    row.appendChild(col3);
    row.appendChild(col4);

    tableBody.appendChild(row);
});

