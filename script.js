document.addEventListener('DOMContentLoaded', () => {
    // Selecionar elementos do modal
    const modal = document.getElementById('modal-menu');
    const btnBolos = document.getElementById('btn-bolos');
    const closeBtn = document.querySelector('.close-modal');

    // Função para abrir o modal
    if (btnBolos) {
        btnBolos.addEventListener('click', () => {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden'; // Impede o scroll do fundo
        });
    }

    // Função para fechar o modal
    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto'; // Restaura o scroll
        });
    }

    // Fechar o modal ao clicar fora dele
    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });

    // Selecionar todos os botões de link (incluindo o de bolos)
    const linkButtons = document.querySelectorAll('.link-button');

    // Efeitos de clique e hover
    linkButtons.forEach(button => {
        button.addEventListener('mousedown', () => {
            button.style.transform = 'scale(0.95)';
        });

        button.addEventListener('mouseup', () => {
            button.style.transform = 'scale(1.03)';
        });

        button.addEventListener('mouseleave', () => {
            button.style.transform = 'scale(1)';
        });
    });

    console.log('Anna Doces - Site e Cardápio carregados com sucesso! 🧁');
});
