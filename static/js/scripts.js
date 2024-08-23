function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Desativa o scroll
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('show');
    setTimeout(() => {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; // Reativa o scroll
    }, 300);
}

document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        const modals = document.getElementsByClassName('modal');
        for (let i = 0; i < modals.length; i++) {
            if (modals[i].style.display === "block") {
                closeModal(modals[i].id);
            }
        }
    }
});


