// Função para abrir o modal
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "block";
        document.body.style.overflow = "hidden"; // Desativa o scroll da página
        setTimeout(() => {
            modal.classList.add('show');
        }, 10);
    }
}

// Função para fechar o modal
function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('show');
        setTimeout(() => {
            modal.style.display = "none";
            document.body.style.overflow = "auto"; // Reativa o scroll da página
        }, 300);
    }
}

// Fecha o modal ao pressionar a tecla ESC
document.addEventListener('keydown', function (event) {
    if (event.key === "Escape") {
        const modals = document.querySelectorAll('.modal');
        modals.forEach((modal) => {
            if (modal.style.display === "block") {
                closeModal(modal.id);
            }
        });
    }
});

// Adiciona eventos para abrir e fechar modais
document.addEventListener('DOMContentLoaded', () => {
    const developerImages = document.querySelectorAll('.developer img'); // Seleciona as imagens dos desenvolvedores
    developerImages.forEach((img, index) => {
        const modalId = `modal${index + 1}`; // Gera um ID único para cada modal
        img.addEventListener('click', () => openModal(modalId));
    });

    const closeButtons = document.querySelectorAll('.modal .close');
    closeButtons.forEach((btn) => {
        const modalId = btn.closest('.modal').id;
        btn.addEventListener('click', () => closeModal(modalId));
    });
});

