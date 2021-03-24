// ---------------Toggle Nav---------------------------
const toggle = document.getElementById('toggle');
const sideNav = document.getElementById('side-nav');
const modal = document.getElementById('modal');
const startBtn = document.getElementById('start-project')
const closeBtn = document.getElementById('close-btn');

// const toggleSideNav =  () => {
  //   // sideNav.style.display = 'block';
  //   sideNav.classList.add('side-slide');
  //   toggle.classList.add('toggle-slide');
  // }
  
  
  
  const toggleSideNav = () => {
    if(!sideNav.classList.contains('side-slide')) {
      sideNav.classList.add('side-slide');
      toggle.classList.add('toggle-slide');
    } else {
      sideNav.classList.remove('side-slide');
      toggle.classList.remove('toggle-slide');
    }
  }
  
  toggle.addEventListener('click', toggleSideNav);
  
  
  //------------------Modal------------------------------

const toggleModal = () => {
  modal.classList.toggle('show-modal');
}


startBtn.addEventListener('click', toggleModal);
closeBtn.addEventListener('click', toggleModal);
window.addEventListener('click', e => e.target == modal ? modal.classList.remove('show-modal') : false);
  
  
  

















// sideNav.style.display = 'block';
// sideNav.classList.add('side-slide');
// toggle.classList.add('toggle-slide');