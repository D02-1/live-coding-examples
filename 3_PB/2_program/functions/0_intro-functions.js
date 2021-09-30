
/**
 * Gibt true zurück wenn alter >= 18
 * Sonst false
 * @param alter
 */
 function darfSchonAutoFahren(alter){
    let darfFahren = alter >= 18 ?  true : false;
    return darfFahren;
}

/**
 * Geht durch das übergebene Ausweise Array
 * Und ruft für jeden Ausweis die Funktion checkAusweis auf
 * @param ausweise
 */
function checkAlleAusweise(ausweise){
    for(let i = 0; i < ausweise.length; i = i+1){
        const aktuellerAusweis = ausweise[i];
        const aktuellesAlter = aktuellerAusweis.alter;
        console.log(checkAusweis(aktuellerAusweis));
    }
}

/**
 * Ruft für jeden Ausweis die funktion
 * darfSchonAutoFahren auf und gibt den Namen + darf
 * oder darf nicht Auto fahren zurück
 * @param ausweis
 */
function checkAusweis(ausweis){
    const alter = ausweis.alter;
    if(darfSchonAutoFahren(alter)){
        return `${ausweis.name} darf schon Auto fahren`;
    }
    return `${ausweis.name} darf noch NICHT Auto fahren`;
}

const ausweise = [
    {name: "Hans", alter: 90},
    {name: "Lisa", alter: 12},
    {name: "Monika", alter: 18},
    {name: "Ali", alter: 0},
    {name: "Hamad", alter: 28},
    {name: "Karl", alter: -1},
];

checkAlleAusweise(ausweise);

// 