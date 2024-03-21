// Click Event
document.getElementById('myButton').addEventListener('click', function() {
    alert('Button Clicked!');
  });


  document.getElementById('myDiv').addEventListener('mouseover', function() {
    this.classList.add('highlight');
  });

 // Mouseout Event
 document.getElementById('myDiv').addEventListener('mouseout', function() {
  this.classList.remove('highlight');
});

// Keydown Event
document.addEventListener('keydown', function(event) {
  document.getElementById('myOutput').innerText = `Key Pressed: ${event.key}`;
}); 

// Submit Event
document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission
  const inputValue = document.getElementById('myInput').value;
  alert(`Form Submitted with value: ${inputValue}`);
});