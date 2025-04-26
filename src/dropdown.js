export default function dropdown() {
  const button = document.querySelector('.dropbtn');
  const menu = document.getElementById('myDropdown');

  button.addEventListener('click', () => {
    menu.classList.toggle('show');
  });

  window.addEventListener('click', (event) => {
    if (!event.target.matches('.dropbtn')) {
      const dropdowns = document.getElementsByClassName('dropdown-content');
      for (let i = 0; i < dropdowns.length; i++) {
        dropdowns[i].classList.remove('show');
      }
    }
  });
}