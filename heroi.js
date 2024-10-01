let herois = [
    {nome: "Herói de Fogo", xp: 4569, nivel: ""},
    {nome: "Herói de Água", xp: 5583, nivel: ""},
    {nome: "Herói de Terra", xp: 7821, nivel: ""},
    {nome: "Herói de Ar", xp: 1084, nivel: ""},
    {nome: "Herói de Gelo", xp: 8790, nivel: ""},
]

for (let heroi of herois){
    if (heroi.xp <= 1000){
        heroi.nivel = "Ferro"
    }
    else if (heroi.xp > 1000 && heroi.xp <= 2000){
        heroi.nivel = "Bronze"
    }
    else if (heroi.xp > 2000 && heroi.xp <= 5000){
        heroi.nivel = "Prata"
    }
    else if (heroi.xp > 5000 && heroi.xp <= 7000){
        heroi.nivel = "Ouro"
    }
    else if (heroi.xp > 7000 && heroi.xp <= 8000){
        heroi.nivel = "Platina"
    }
    else if (heroi.xp > 8000 && heroi.xp <= 9000){
        heroi.nivel = "Ascendente"
    }
    else if (heroi.xp > 9000 && heroi.xp <= 10000){
        heroi.nivel = "Imortal"
    }
    else {
        heroi.nivel = "Radiante"
    }
    
    console.log(`O herói de nome ${heroi.nome}, está no nível ${heroi.nivel}`)
}
