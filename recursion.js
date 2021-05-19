//#region enemies
var enemies = [


    {
        'Name': 'Arachna',
        'type': 'Spider',
        'ability': 'Toxic Bite',
        'Health': 350,
        'power': 15,
        'dodge': 6,
        'block': 35,
    },

    {
        'Name': 'Crimson',
        'type': 'Pyromaniac',
        'ability': 'FlameThrower',
        'Health': 600,
        'power': 30,
        'dodge': 10,
        'block': 20,
    },

    {
        'Name': 'Damien',
        'type': 'Schizophrenic',
        'ability': 'The Whispers',
        'Health': 250,
        'power': 85,
        'dodge': 70,
        'block': 55,
    },

    {
        'Name': 'Midnight',
        'type': 'Dissociative',
        'ability': 'Memory loss',
        'Health': 100,
        'power': 100,
        'dodge': 95,
        'block': 85,
    },

    {
        'Name': 'Lilly',
        'type': 'Insomniac',
        'ability': 'Deathly Rage',
        'Health': 215,
        'power': 25,
        'dodge': 5,
        'block': 3,
    },
]
//#endregion


//#region heroes
var hero = [

{
        'Name': 'Dr. Fox',
        'type': 'Human',
        'ability': 'Lethal Injection',
        'Health': 350,
        'power': 20,
        'dodge': 10,
        'block': 35,
},

{
        'Name': 'Dr. Yanno',
        'type': 'Human',
        'ability': 'hammer',
        'Health': 350,
        'power': 15,
        'dodge': 11,
        'block': 25,
}

]

//#endregion

let heroHealth = 100;
let enemyHealth = 100;


var heroMultiplier;
function heroAttack(){
    heroMultiplier = Math.floor(Math.random()*25)
    console.log(`You have rolled a: ${heroMultiplier}`)
document.getElementById(`playerDice`).innerHTML = `You have rolled a: ${heroMultiplier}`
    enemyHealth = enemyHealth - heroMultiplier;
    document.getElementById('enemyHealth').innerHTML = `Your Enemy now has ${enemyHealth} health left`
if (enemyHealth <=0){
    document.getElementById('heroVictory').innerHTML = "The enemy has been vanquished"
    document.getElementById('enemyDice').style.display = "none";
    document.getElementById('playerDice').style.display = "none";
    document.getElementById('enemyHealth').style.display = "none";
};
    
};

var enemyMultiplier;
function enemyAttack(){
    enemyMultiplier = Math.floor(Math.random()*25)
    console.log(`You have rolled a: ${enemyMultiplier}`)
document.getElementById(`enemyDice`).innerHTML = `The enemy rolled a: ${enemyMultiplier}`
    heroHealth = heroHealth - enemyMultiplier;
    document.getElementById('playerHealth').innerHTML = `You now have ${heroHealth} health left`
if (heroHealth <=0){
    document.getElementById('enemyVictory').innerHTML = "The hero has been vanquished"
    document.getElementById('enemyDice').style.display = "none";
    document.getElementById('playerDice').style.display = "none";
    document.getElementById('playerHealth').style.display = "none";
};
    
};

function selectedEnemy(){
    var randomEnemy = Math.floor(Math.random()*5)
    console.log(randomEnemy)
    var enemyName = enemies[randomEnemy]['Name']
    var enemyPower = enemies[randomEnemy]['power']
    var enemyHealth = enemies[randomEnemy]['Health']
    // console.log(enemyName + " " + enemyPower + " " + enemyHealth);

    console.log(`${enemyName} Has stepped into the light with a power level of ${enemyPower}. They have a total health of ${enemyHealth}.`);
    document.getElementById("randomEnemy").innerHTML = (`${enemyName} Has stepped into the light with a power level of ${enemyPower}. They have a total health of ${enemyHealth}.`);

};

function selectHero(){
    var randomNumber = Math.floor(Math.random()*2)
    console.log(randomNumber + "The function triggered")
    var heroName = hero[randomNumber]['Name'];
    var heroPower = hero[randomNumber]['power'];
    var heroHealth = hero[randomNumber]['Health'];

    console.log(`${heroName} Has been chosen as your character`);
    document.getElementById("randomHero").innerHTML = (`${heroName} Has been chosen as your character, there health is ${heroHealth} and they have a power level of ${heroPower}`);
    
};
