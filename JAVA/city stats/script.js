const button= document.querySelector("button")
button.addEventListener('click',displayStats)
let resultdiv = document.createElement('div')
resultdiv.id ='result'
document.getElementById('wrapper').appendChild(resultdiv)


function displayStats(){
    const input= document.getElementById("input")
    const city=input.options[input.selectedIndex].value
    let population = 0, literacyRate = 0, language = ''
    switch(city){
        case 'Bengaluru':
            population = 8443675
            literacyRate = 88.71
            language = 'kannada'
            break
        case 'Chennai':
            population = 4646732
            literacyRate = 90.20
            language ='Tamil'
            break
        case 'Delhi':
            population = 12442373
            literacyRate =  89.73
            language = 'Marathi'
            break
        case 'Mumbai':
            population = 16787941
            literacyRate = 86.20
            language = 'Hindi'
            break
            
    }
    let text = `The Indian city of ${city} has a population of ${population}. Language spoken is ${language} and literacy rate is ${literacyRate}%`
    let resultdiv = document.createElement('div')
    resultdiv.id ='result'
    document.getElementById('wrapper').appendChild(resultdiv)
    document.getElementById("result").innerHTML = text 
    
    

}