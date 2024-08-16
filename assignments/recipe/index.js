const checkboxes = document.querySelectorAll('.ingredients-list input[type="checkbox"]');

//iterates through each checkbox in ul
for (let i = 0; i < checkboxes.length; i++) {
  const currentCheckbox = checkboxes[i];

  //event listener
  currentCheckbox.addEventListener('change', function() {
    const listItem = this.parentElement;
    console.log('Checkbox changed:', this.id, 'Checked:', this.checked);

    if (this.checked) {
      listItem.classList.add('strikethrough');
    } else {
      listItem.classList.remove('strikethrough');
    }
  })
}

document.getElementById('changeColorButtonWithPicker').addEventListener('click', function() {

  let userColorWithPicker = document.getElementById('colorPicker').value;

  const body = document.querySelector('body');
  body.style.backgroundColor = userColorWithPicker;
  
});