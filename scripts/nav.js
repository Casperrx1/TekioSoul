let currentDropdown = null;

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    if (currentDropdown !== null) {
      currentDropdown.classList.remove('show');
      currentDropdown = null;
    }
  }
}

function myFunction(dropdownId) {
  const dropdown = document.getElementById(dropdownId);
  
  if (currentDropdown !== dropdown) {
    if (currentDropdown !== null) {
      currentDropdown.classList.remove('show');
    }
    
    dropdown.classList.toggle('show');
    currentDropdown = dropdown;
  }
}