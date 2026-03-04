
(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-menu-open]"),
      closeModalBtn: document.querySelector("[data-menu-close]"),
      modal: document.querySelector("[data-menu]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-open");
      document.body.classList.toggle("no-scroll");
    }

     // Додаємо закриття меню при кліку на будь-який пункт
  const menuLinks = document.querySelectorAll(".mobile-menu-link");
  menuLinks.forEach(link => {
    link.addEventListener("click", () => {
      refs.modal.classList.remove("is-open");
      document.body.classList.remove("no-scroll");
    });
  });
  })();