// Seleciona todos os botões e abas
const botoes = document.querySelectorAll(".botao");
const abas = document.querySelectorAll(".aba-conteudo");

// Adiciona funcionalidade de alternar abas
botoes.forEach((botao, i) => {
    botao.addEventListener("click", () => {
        botoes.forEach(b => b.classList.remove("ativo"));
        abas.forEach(a => a.classList.remove("ativo"));

        botao.classList.add("ativo");
        abas[i].classList.add("ativo");
    });
});

// Datas correspondentes a cada aba (de acordo com o HTML corrigido)
const datasObjetivos = [
    new Date("2026-08-07T00:00:00"), // Aba 0 - Ir para o Santuário de Aparecida
    new Date("2026-10-19T00:00:00"), // Aba 1 - Completar um ano de namoro
    new Date("2026-12-31T00:00:00"), // Aba 2 - Até o fim do ano (2026)
    new Date("2026-12-01T00:00:00"), // Aba 3 - Montar outra bancada
    new Date("2027-06-01T00:00:00")  // Aba 4 - Montar o projeto no meu gol
];

// Função que calcula dias, horas, minutos e segundos restantes
function calculaTempo(final) {
    const agora = new Date();
    let restante = final - agora;

    if (restante <= 0) return [0, 0, 0, 0];

    let segundos = Math.floor(restante / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    horas %= 24;
    minutos %= 60;
    segundos %= 60;

    return [dias, horas, minutos, segundos];
}

// Atualiza todos os cronômetros
function atualizaCronometros() {
    datasObjetivos.forEach((data, i) => {
        const [dias, horas, min, seg] = calculaTempo(data);
        document.getElementById("dias" + i).textContent = dias;
        document.getElementById("horas" + i).textContent = horas;
        document.getElementById("min" + i).textContent = min;
        document.getElementById("seg" + i).textContent = seg;
    });
}

// Inicia o cronômetro
atualizaCronometros();
setInterval(atualizaCronometros, 1000);