document.getElementById('formCadastro').addEventListener('submit', async (event) => {
    event.preventDefault();

    const Pessoa = document.getElementById('Pessoa').value;
    const Nome = document.getElementById('Nome').value;
    const CPF = document.getElementById('CPF').value;
    const Telefone = document.getElementById('Telefone').value;

    const addressData = {
        Pessoa,
        Nome,
        CPF,
        Telefone
    };

    try {
        const response = await fetch(`http://localhost:3000/api/enderecos`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addressData)
        });

        const result = await response.json();

        if (response.ok) {
            document.getElementById('message').innerText = 'Pessoa cadastrada com sucesso!';
            document.getElementById('formCadastro').reset();
        } else {
            document.getElementById('message').innerText = `Erro: ${result.messag}`;
        }
    } catch (error) {
        document.getElementById('message').innerText = 'Erro na comunicação com o servidor.';
    }
});