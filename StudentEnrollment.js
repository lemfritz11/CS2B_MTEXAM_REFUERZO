let DSA = [];
let PL = [];
let Networks = [];

function selectSubject() {
    let subjectChoice = prompt("Select a subject:\n(A) DSA\n(B) PL\n(C) Networks\n(D) Exit").toUpperCase();
    switch (subjectChoice) {
        case 'A':
            operationsMenu(DSA, "DSA");
            break;
        case 'B':
            operationsMenu(PL, "PL");
            break;
        case 'C':
            operationsMenu(Networks, "Networks");
            break;
        case 'D':
            exitProgram();
            break;
        default:
            alert("Invalid choice. Please try again.");
            selectSubject();
            break;
    }
}

function operationsMenu(subjectArray, subjectName) {
    let operationChoice = prompt(`Subject: ${subjectName}\nChoose an operation:\n(A) Enroll\n(B) Unenroll\n(C) Select Another Subject\n(D) Exit`).toUpperCase();
    switch (operationChoice) {
        case 'A':
            enrollStudent(subjectArray);
            operationsMenu(subjectArray, subjectName);
            break;
        case 'B':
            unenrollStudent(subjectArray);
            operationsMenu(subjectArray, subjectName);
            break;
        case 'C':
            selectSubject();
            break;
        case 'D':
            exitProgram();
            break;
        default:
            alert("Invalid choice. Please try again.");
            operationsMenu(subjectArray, subjectName);
            break;
    }
}

function enrollStudent(subjectArray) {
    let studentName = prompt("Enter the name of the student to enroll:");
    if (studentName) {
        subjectArray.push(studentName);
        alert(`${studentName} has been enrolled.`);
    } else {
        alert("No name entered. Enrollment canceled.");
    }
}

function unenrollStudent(subjectArray) {
    if (subjectArray.length === 0) {
        alert("No students are currently enrolled in this subject.");
        return;
    }
    
    let studentList = subjectArray.join(", ");
    let studentName = prompt(`Currently enrolled students: ${studentList}\nEnter the name of the student to unenroll:`);
    
    if (subjectArray.includes(studentName)) {
        let index = subjectArray.indexOf(studentName);
        subjectArray.splice(index, 1);
        alert(`${studentName} has been unenrolled.`);
    } else {
        alert("Student not found. Unenrollment canceled.");
    }
}

function exitProgram() {
    alert("Enrolled students per subject:");
    alert(`DSA: ${DSA.join(", ") || "No students enrolled"}`);
    alert(`PL: ${PL.join(", ") || "No students enrolled"}`);
    alert(`Networks: ${Networks.join(", ") || "No students enrolled"}`);
    alert("Exiting program.");
}

selectSubject();
