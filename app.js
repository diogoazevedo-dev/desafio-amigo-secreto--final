let amigos = [];

function adicionarAmigo() {
    let nomeAmigo = document.getElementById('amigo').value;
    if (nomeAmigo !== '' && amigos.length < 5) {
        amigos.push(nomeAmigo);
        atualizarListaAmigos();
        document.getElementById('amigo').value = '';
    } else if (amigos.length >= 5) {
        alert('Você já adicionou 5 amigos.');
    } else {
        alert('Por favor, digite um nome.');
    }
}

function atualizarListaAmigos() {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';
    amigos.forEach((amigo, index) => {
        let li = document.createElement('li');
        li.textContent = amigo;
        li.style.color = getRandomColor();
        listaAmigos.appendChild(li);
    });
}

function getRandomColor() {
    const colors = ['#ff69b4', '#1e90ff', '#32cd32', '#ffd700', '#ff4500'];
    return colors[Math.floor(Math.random() * colors.length)];
}

function sortearAmigo() {
    if (amigos.length > 0) {
        let sorteadoIndex = Math.floor(Math.random() * amigos.length);
        let sorteado = amigos[sorteadoIndex];
        document.getElementById('resultado').innerHTML = `<li class="sorteado animate">Seu amigo secreto é... <span>${sorteado}</span></li>`;
        amigos.splice(sorteadoIndex, 1); // Remove o nome sorteado da lista
        atualizarListaAmigos(); // Atualiza a lista de amigos
    } else {
        alert('Todos os amigos já foram sorteados.');
    }
}
