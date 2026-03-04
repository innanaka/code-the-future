(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-one-open]"),
      closeModalBtn: document.querySelector("[data-modal-one-close]"),
      modal: document.querySelector("[data-modal-one]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
      document.body.classList.toggle("no-scroll");
    }
  })();