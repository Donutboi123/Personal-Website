function closeAllModals() {
  document.querySelectorAll(".modal").forEach((m) => {
    m.style.display = "none";
  });
}

//Open modal
document.querySelectorAll("button[data-modal]").forEach((btn) => {
  btn.addEventListener("click", () => {
    const modalID = btn.dataset.modal; //ex. logovation25
    const modal = document.getElementById(modalID);
    if (!modal) {
      return;
    }
    closeAllModals();
    modal.style.display = "block";
  });
});

//Close when clicking (x)
document.addEventListener("click", (e) => {
  if (!e.target.classList.contains("close")) {
    return;
  }
  const modal = e.target.closest(".modal");
  if (modal) {
    modal.style.display = "none";
  }
});

//Close when clicking overlay
document.querySelectorAll(".modal").forEach((modal) => {
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});

//Close when clicking escape key
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeAllModals();
  }
});
