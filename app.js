let pdf = document.querySelector('#inputFile');
let label = document.querySelector(".input-label");
let uploadContainer = document.querySelector(".upload");

let uploadedFile = null; // stores the uploaded file for later use
let lastUploadedFileKey = null;

pdf.addEventListener("change", () => {
  if (pdf.files.length > 0) {
    const currentFile = pdf.files[0];

    // ✅ Check for PDF
    if (currentFile.type !== "application/pdf") {
      showSlideAlert("Only PDF files are allowed.");
      return;
    }

    const currentFileKey = `${currentFile.name}_${currentFile.size}_${currentFile.lastModified}`;

    // ✅ Correct comparison BEFORE assigning
    if (currentFileKey === lastUploadedFileKey) {
      showSlideAlert("This file is already uploaded.");
      return;
    }

    // ✅ Now update key and store file
    lastUploadedFileKey = currentFileKey;
    uploadedFile = currentFile;

    label.classList.add('uploaded');
    label.innerText = 'PDF Uploaded ✅';

    // Clean old info
    uploadContainer.querySelectorAll("small.file-info").forEach(el => el.remove());

    // Show file info
    let fileName = document.createElement('small');
    let fileType = document.createElement('small');

    fileName.classList.add("file-info");
    fileType.classList.add("file-info");

    fileName.innerText = `📄 ${currentFile.name}`;
    fileType.innerText = `📂 File Type: ${currentFile.type}`;

    uploadContainer.append(fileName, fileType);

    showSlideAlertFileUploded("File uploaded successfully ✅");
  }
});

//selecting btn pattern 2013
let btn2019 = document.querySelector('#pattern-2019');
let btn2024 = document.querySelector('#pattern-2024');
let box2019 = document.querySelector('.checkboxes-2019');
let box2024 = document.querySelector('.checkboxes-2024');
let checkboxe2024label = document.querySelectorAll('.checkboxes-2024 label');

// Collect checked checkbox values
    let checkedValues = [];

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
let input = document.querySelector('.course-name input');
let count = 1;

addCourse.addEventListener('click', () => {
    let courseName = input.value.trim();

      if (!uploadedFile) {
      showSlideAlert("Please upload file");
      return;
    }


    // Validate course name
    if (courseName === "") {
        showSlideAlert("Please type course name");
        return;
    }

    let checkedValues = [];
    document.querySelectorAll('.score-type:checked').forEach((checkbox) => {
        checkedValues.push(checkbox.value);
    });

    // Validate checkboxes
    if (checkedValues.length === 0) {
        showSlideAlert("Please select at least one score type.");
        return; 
    }

    // Create a table row
    let row = document.createElement('tr');

    // Column 1: Count
    let col1 = document.createElement('td');
    col1.innerText = count++;
    row.appendChild(col1);

    // Column 2: Course Name
    let col2 = document.createElement('td');
    col2.innerText = courseName;
    row.appendChild(col2);

    // Column 3: Checked values
    let col3 = document.createElement('td');
    col3.innerText = checkedValues.join(", ");
    row.appendChild(col3);

    // Column 4: Delete button
    let col4 = document.createElement('td');
    let deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', () => row.remove());
    col4.appendChild(deleteBtn);
    row.appendChild(col4);

    // Append row to table
    tableBody.appendChild(row);

    // Reset inputs
    input.value = "";
    document.querySelectorAll('.score-type:checked').forEach((checkbox) => {
        checkbox.checked = false;
    }); 
});

//extract button
let extract = document.querySelector('.extract button');

extract.addEventListener('click',()=>{
  //how many rows in table
  let rowCount = document.querySelector('.course-table tbody').rows.length;
  console.log("Number of rows:", rowCount);

  if (rowCount > 0) {
  label.classList.remove('uploaded');
  label.innerHTML = `<i class="fa-solid fa-file-arrow-up"></i> Upload file`;

  let body = document.querySelector('body');

    setTimeout(() => {
      body.innerHTML = ""; // Clear all content (preserves formatting)
      body.innerHTML = `
        <h2 style="text-align:center; color:green; margin-top: 50px;">
          ✅ Request received<br>⚙️ Backend not implemented yet. You have to code it.
        </h2>`;
    }, 2000);
  }
  if (rowCount <=0){
    showSlideAlert("Please add course");
  }


  if (!uploadedFile) {
      showSlideAlert("Please upload file");
      return;
    }

  let courseName = input.value.trim();
  if (courseName === "") {
        showSlideAlert("Please type course name");
        return;
    }

  let checkedValues = [];
  document.querySelectorAll('.score-type:checked').forEach((checkbox) => {
    checkedValues.push(checkbox.value);
  });
  if (checkedValues.length === 0) {
        showSlideAlert("Please select at least one score type.");
        return;
    }
})

//alert funtion for wrong things
function showSlideAlert(message, duration = 2000) {
  const alertBox = document.getElementById('slideAlert');
  const alertText = document.getElementById('slideAlertText');
  alertText.innerText = message;
  alertBox.classList.add('active');

  // Auto-dismiss after `duration` ms
  setTimeout(() => {
    alertBox.classList.remove('active');
  }, duration);
}

function closeSlideAlert() {
  document.getElementById('slideAlert').classList.remove('active');
}

//alert for file uploaded successfully
function showSlideAlertFileUploded(message, duration = 2000) {
  const alertBox = document.getElementById('showSlideAlertFileUploded');
  const alertText = document.getElementById('slideAlertFileUploadedText');
  alertText.innerText = message;
  alertBox.classList.add('active');

  // Auto-dismiss after `duration` ms
  setTimeout(() => {
    alertBox.classList.remove('active');
  }, duration);
}

function closeSlideAlertFileUploded() {
  document.getElementById('showSlideAlertFileUploded').classList.remove('active');
}