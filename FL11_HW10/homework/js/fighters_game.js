class Fighter {
    constructor({name, damage, hp, agility}) {
        let currentHP = hp;
        let wins = 0;
        let losses = 0;
        this.getName = () => {
            return name;
        };
        this.getDamage = () => {
            return damage;
        };
        this.getAgility = () => {
            return agility;
        };
        this.getHealth = () => {
            return currentHP;
        };
        this.heal = (amount) => {
            const healedHp = currentHP + amount;
            if (healedHp > hp) {
                currentHP = hp;
            } else {
                currentHP = healedHp;
            }
        };
        this.dealDamage = (damage) => {
            const totalDmg = currentHP - damage;
            if (totalDmg < 0) {
                currentHP = 0;
            } else {
                currentHP = totalDmg;
            }
        };

        this.addWin = () => {
            wins++;
        };

        this.addLoss = () => {
            losses++;
        };

        this.logCombatHistory = () => {
            console.log(`Name: ${this.getName()}, Wins: ${wins}, Losses: ${losses}`)
        }
    }

    attack(defender) {
        const maxAgility = 100;
        const attackerFighterName = this.getName();
        const defensiveFighterName = defender.getName();
        const agility = defender.getAgility();
        const plane = 101;
        const random = Math.floor(Math.random() * plane);
        const vulnerability = maxAgility - agility;

        if (random < vulnerability) {
            const damage = this.getDamage();
            defender.dealDamage(damage);
            return `${attackerFighterName} make ${damage} damage to ${defensiveFighterName}`
        } else {
            return `${defensiveFighterName} attack missed`
        }
    }
}

const john = new Fighter({name: 'John', damage: 20, hp: 100, agility: 25});
const jack = new Fighter({name: 'Jack', damage: 25, hp: 95, agility: 20});

const battle = (fighter1, fighter2) => {

    let isF1Dead = false;
    let isF2Dead = false;
    while (!isF1Dead && !isF2Dead) {
        console.log(fighter1.attack(fighter2));
        console.log(`${fighter2.getName()}'s current health is ${fighter2.getHealth()}`);
        isF2Dead = fighter2.getHealth() <= 0;
        if (isF2Dead) {
            break;
        }
        console.log(fighter2.attack(fighter1));
        console.log(`${fighter1.getName()}'s current health is ${fighter1.getHealth()}`);
        isF1Dead = fighter1.getHealth() <= 0;
    }
    if (!isF1Dead){
        console.log(`${fighter1.getName()} won!`);
        fighter1.addWin();
        fighter2.addLoss();
    } else {
        console.log(`${fighter2.getName()} won!`);
        fighter2.addWin();
        fighter1.addLoss();
    }
    fighter1.logCombatHistory();
    fighter2.logCombatHistory();
};

battle(john, jack);
