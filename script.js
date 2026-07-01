function atualizarProgresso() {
    const agora = new Date();
    
    // Define os pontos de partida e chegada para o dia atual
    const inicioTurno = new Date();
    inicioTurno.setHours(8, 0, 0, 0); // 08:00:00

    const fimTurno = new Date();
    fimTurno.setHours(18, 0, 0, 0); // 18:00:00

    const tempoTotal = fimTurno - inicioTurno;
    const tempoDecorrido = agora - inicioTurno;

    let porcentagem = 0;

    // Elementos da DOM
    const barra = document.getElementById('myProgressBar');
    const label = document.getElementById('statusLabel');
    const telaTchau = document.getElementById('tchauScreen');
    const titulo = document.getElementById('tituloJornada');

    if (agora < inicioTurno) {
        porcentagem = 0;
        titulo.textContent = "O turno ainda não começou ☕";
    } else if (agora >= fimTurno) {
        porcentagem = 100;
    } else {
        porcentagem = (tempoDecorrido / tempoTotal) * 100;
        titulo.textContent = "Jornada de Trabalho em Andamento";
    }

    // Arredonda para duas casas decimais
    const porcentagemFormatada = porcentagem.toFixed(2);

    // Atualiza a interface gráfica
    barra.style.width = `${porcentagemFormatada}%`;
    label.textContent = `${porcentagemFormatada}%`;

    // Gatilho para abrir a tela grande se chegar a 100%
    if (porcentagem >= 100) {
        telaTchau.classList.add('active');
    } else {
        telaTchau.classList.remove('active');
    }
}

// Executa a função imediatamente ao carregar a página
atualizarProgresso();

// Atualiza a cada 1 segundo (1000 milissegundos)
setInterval(atualizarProgresso, 1000);