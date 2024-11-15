// Verifica se o DOM está carregado antes de executar
document.addEventListener('DOMContentLoaded', function () {
    // Define a função de alternância
    window.toggleHistoria = function () {
        const conteudo = document.getElementById('conteudoHistoria');
        const button = document.getElementById('toggleHistoria');

        if (conteudo.style.display === 'none' || conteudo.style.display === '') {
            conteudo.style.display = 'block'; // Exibe o conteúdo
            button.textContent = 'Minimizar'; // Atualiza o texto do botão
        } else {
            conteudo.style.display = 'none'; // Oculta o conteúdo
            button.textContent = 'Maximizar'; // Atualiza o texto do botão
        }
    };
});


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
