async function puxarDados () {
    const responseDados = fetch('./dados.json')
    const responsseClientes = fetch('./clientes.json')

    const jsonDados = await (await responseDados).json()
    const jsonClientes = await (await responsseClientes).json()

    console.log(jsonDados)
    console.log(jsonClientes)
}

puxarDados()