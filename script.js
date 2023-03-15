window.addEventListener("load", function()
    {
        document.getElementById('container').style.display="none"
        document.getElementById("buscar").addEventListener('click', function ()
        {
            botaoPesquisa()
        })
    })


async function botaoPesquisa() 
{
    let id = document.getElementById("idPokemon").value
    if((id >0 && id <1000))
    {
    
    const personagem = await buscarPokemon(id)

    console.log(personagem)
    console.log(personagem.name)
    console.log(personagem.types[0].type.name)
    console.log(personagem.types[0].type.url)

    document.getElementById('nomePokemon').innerHTML = ("#"+ id + " - " + personagem.name)
    document.getElementById("imagemPokemon").src = (personagem.sprites.front_default)


    document.getElementById('typePokemon').innerHTML = (personagem.types[0].type.name)
    document.getElementById('type2Pokemon').innerHTML = (personagem.types[1].type.name)
    document.getElementById('container').style.display="block"
    }
    else{
        document.getElementById('container').style.display="none"
    }
}

async function buscarPokemon(id){
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`

    const response = await fetch(url)
    return response.json()
}