// Botão saibamais receitas

document.querySelectorAll('.receita button').forEach(button => {
    button.addEventListener('click', () => {
        const receita = button.closest('.receita');
        const paragrafo = receita.querySelector('.paragrafo');

        if (receita.classList.contains('ativa')) {
            paragrafo.style.height = '0';
            paragrafo.style.opacity = '0';
            paragrafo.style.padding = '0 24px';
        } else {
            paragrafo.style.height = 'auto';
            paragrafo.style.opacity = '1';
            paragrafo.style.padding = '24px';
        }

        receita.classList.toggle('ativa');
    });
});

// Sistema Night Mode

const btn = document.querySelector('.btn');
const container = document.querySelector('.container');

btn.onclick = function()
{
    this.classList.toggle('active')
    container.classList.toggle('active')
}