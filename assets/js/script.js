const rango1 = document.getElementById('r1')
const rango2 = document.getElementById('r2')
const rango3 = document.getElementById('r3')

const div1 = document.getElementById('div1')
const div2 = document.getElementById('div2')
const div3 = document.getElementById('div3')

const iterator1 = getPersonaje(div1,0,5)
const iterator2 = getPersonaje(div2,5,11)
const iterator3 = getPersonaje(div3,11,17)
 

rango1.addEventListener('mouseenter',(e)=>{
    e.stopPropagation()
    console.log(e.target.tagName)
    iterator1.next()
})
rango2.addEventListener('mouseenter',(e)=>{
    e.stopPropagation()
    iterator2.next()
    console.log(e.target.tagName)
})
rango3.addEventListener('mouseenter',(e)=>{
    e.stopPropagation()
    iterator3.next()
    console.log(e.target.tagName)
})




function getInfo(div,num){
    let url = `https://swapi.dev/api/people/${num}`
    fetch(url)
        .then(data => data.json()
        .then(json => {
            console.log(json)
            addCard(div,json.name,json.height, json.mass)
        }))

}



function addCard(rango,nombre,estatura,peso){
    let card =`<figure class="card">
                
                <figcaption>
                <h3>${nombre}</h3>
                <p>Estatura: ${estatura} cm. Peso: ${peso} kg.</p>
                </figcaption>
                </figure>`
    let div = document.createElement('div')
    div.innerHTML = card
    rango.append(div)

}

function* getPersonaje(div,index,max){
    while(index<max){
        index++
        getInfo(div,index)
        yield index
    }
}
 

