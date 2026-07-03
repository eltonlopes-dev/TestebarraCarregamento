function atualizarProgressoERelogio() {
    const agora = new Date();
    
    // Pega horas, minutos e segundos atuais formatados com zero à esquerda
    const horas = String(agora.getHours()).padStart(2, '0');
    const minutos = String(agora.getMinutes()).padStart(2, '0');
    const segundos = String(agora.getSeconds()).padStart(2, '0');
    const horarioFormatado = `${horas}:${minutos}:${segundos}`;

    // Atualiza os relógios na tela (continuam a atualizar na DOM, mas ocultos visualmente)
    document.getElementById('digitalClock').textContent = horarioFormatado;
    document.getElementById('overlayClock').textContent = horarioFormatado;
    
    // Configuração dos limites do turno
    const inicioTurno = new Date();
    inicioTurno.setHours(8, 0, 0, 0); 

    const fimTurno = new Date();
    fimTurno.setHours(17, 0, 0, 0); 

    const tempoTotal = fimTurno - inicioTurno;
    const tempoDecorrido = agora - inicioTurno;

    let porcentagem = 0;

    if (agora < inicioTurno) {
        porcentagem = 0;
    } else if (agora >= fimTurno) {
        porcentagem = 100;
    } else {
        porcentagem = (tempoDecorrido / tempoTotal) * 100;
    }

    const porcentagemFormatada = porcentagem.toFixed(2);

    // Elementos da DOM
    const barra = document.getElementById('myProgressBar');
    const label = document.getElementById('statusLabel');
    const telaTchau = document.getElementById('tchauScreen');

    // Atualiza a barra de progresso
    barra.style.width = `${porcentagemFormatada}%`;
    label.textContent = `${porcentagemFormatada}%`;

    // Validação para abrir a tela de tchau
    if (porcentagem >= 100) {
        telaTchau.classList.add('active');
    } else {
        telaTchau.classList.remove('active');
    }
}

// Executa imediatamente e define o intervalo para rodar a cada segundo
atualizarProgressoERelogio();
setInterval(atualizarProgressoERelogio, 1000);
