document.addEventListener('DOMContentLoaded', () => {
    const random = getRandomInt(1,151)
    fetchData(1)
})


const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min)) + min
}


// const fetchData = async (id) => {
//     try {
//         const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
//         const data = await res.json()
//         console.log(data)
//         let element = document.getElementById('elem')
//         element.innerHTML = 
//         `
//             <div class="flex-item p2 bg-success box">
            
//             <p>Nombre: ${data.name}</p>
//             <p>Altura: ${data.height}</p>
//             <p>Peso: ${data.weight}kg</p>
//             <p>Tipo: ${data.types[0].type.name}</p>
//             <img src="${data.sprites.front_default}"/>
//             </div>
//         `
//     } catch (err) {
//         console.log(err)
//     }
// }


async function fetchData () {
    const data = await fetch (`https://pokeapi.co/api/v2/pokemon/?limit=20&offset=20`,
    {
        method: "GET"
    })

    const result = await data.json()
    console.log(result)
    result.results.forEach(() => {
        const cajita = document.createElement('div')
        cajita.innerHTML= 
        `Nombre: ${result.results.name}`
    })
    
}


// fetch (`https://pokeapi.co/api/v2/pokemon/${i}/`)
// .then (resp => resp.json())
// .then (data => {
    
// })
// .catch(err => console.log(err))
    
