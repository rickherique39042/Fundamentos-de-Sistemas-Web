
document.getElementById('cadastroForm').addEventListener('submit', function (event) {
    event.preventDefault();
    let nomeCliente = document.getElementById('nomeCliente').value;
    let nomePet = document.getElementById('nomePet').value;

    if (nomeCliente && nomePet) {
        alert('Cadastro realizado com sucesso!');
        document.getElementById('cadastroForm').reset();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});


document.getElementById('agendamentoForm').addEventListener('submit', function (event) {
    event.preventDefault();
    let servicoEscolhido = document.getElementById('servicoEscolhido').value;
    let dataAgendamento = document.getElementById('dataAgendamento').value;
    let horaAgendamento = document.getElementById('horaAgendamento').value;

    if (servicoEscolhido && dataAgendamento && horaAgendamento) {
        alert(`Serviço ${servicoEscolhido} agendado para ${dataAgendamento} às ${horaAgendamento}.`);
        document.getElementById('agendamentoForm').reset();
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});
