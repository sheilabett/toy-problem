function calculateGrade() {
    const marks = prompt("Enter student marks (between 0 and 100):");
    
    // Convert input to a number
    const marksNumber = parseFloat(marks);
    
    // Check if the input is a valid number between 0 and 100
    if (isNaN(marksNumber) || marksNumber < 0 || marksNumber > 100) {
      alert("Invalid input. Please enter a number between 0 and 100.");
      return;
    }
    
    let grade;
    
    if (marksNumber > 79) {
      grade = "A";
    } else if (marksNumber >= 60) {
      grade = "B";
    } else if (marksNumber >= 50) {
      grade = "C";
    } else if (marksNumber >= 40) {
      grade = "D";
    } else {
      grade = "E";
    }
    
    alert(`Grade: ${grade}`);
  }
  
  // Call the function to start the process
  calculateGrade();
  