#! /usr/bin/cnv node 
import inquirer from "inquirer";
//let rand=Math.floor(Math.random())
let enemies = ["Skeleton", "Zombie", "Warrior", "Assassin"];
let maxEnemyHealth = 75;
let enemyAttackDamage = 25;
let health = 100;
let attackDamage = 50;
let numHealthPotions = 3;
let healthPotionHealAmount = 30;
let healthPotionDropChance = 50;
let repeat = true;
console.log("Welcome to the Dungeon!");
while (repeat) {
    console.log("-----------------------------------");
    let enemyHealth = Math.floor(Math.random() * maxEnemyHealth);
    let enemy = enemies[Math.floor(Math.random() * enemies.length)];
    while (enemyHealth > 0) {
        console.log("Your HP : " + health);
        console.log(enemy + "'s HP : " + enemyHealth);
        console.log("What would you like to do?");
        console.log("1. Attack");
        console.log("2. Drink Health Potion");
        console.log("3. Run");
        let input = await inquirer.prompt([{ name: "value", type: "number", message: "Enter Between 1 to 3" }]);
        if (input.value == 1) {
            let damageDealt = Math.floor(Math.random() * attackDamage);
            let damageTaken = Math.floor(Math.random() * enemyAttackDamage);
            enemyHealth = enemyHealth - damageDealt;
            health = health - damageTaken;
            console.log("You stike the " + enemy + " for " + damageDealt);
            console.log("You recieve " + damageTaken + " in retaliation!");
            if (health < 1) {
                console.log("You have taken too much damage, you are too weak to go in");
                break;
            }
        }
        else if (input.value == 2) {
            if (numHealthPotions > 0) {
                health = health + healthPotionHealAmount;
                numHealthPotions--;
                console.log("You drink a health potion, healing yourself for " + healthPotionHealAmount + " . \n You now have " + health + "HP.");
                console.log("You Have " + numHealthPotions + " health potions left");
            }
            else {
                console.log("You have no health portions left! defeat enemy for chance to get one");
            }
        }
        else if (input.value == 3) {
            console.log("You run away from the " + enemy + "!");
            break;
        }
        else {
            console.log("Invalid Command");
        }
    }
    if (health < 1) {
        console.log("You limp out of the dungeon, weak from battle.");
        break;
    }
    console.log("----------------");
    console.log(" # " + enemy + " was defeated! # ");
    console.log(" # You have " + health + "  HP left. #");
    if (Math.floor(Math.random() * 100) < healthPotionDropChance) {
        numHealthPotions++;
        console.log(" # The " + enemy + " dropped a health potion! # ");
        console.log(" # You now have " + numHealthPotions + " health potion(s) #");
    }
    console.log("--------------------------------------------");
    console.log("What would you like to do now?");
    console.log("1. Continue fighting");
    console.log("2. Exit dungeon");
    let inputv = await inquirer.prompt([{ name: "value", type: "number", message: "Enter Between 1 to 2" }]);
    while (inputv.value == 1 && inputv.value == 2) {
        console.log("Invalid Command");
        inputv = await inquirer.prompt([{ name: "value", type: "number", message: "Enter Between 1 to 2" }]);
    }
    if (inputv.value == 1)
        console.log("You continue on your adventure");
    else if (inputv.value == 2) {
        console.log("You exit the dungeon, successful from your adventures!");
        break;
    }
}
console.log("########################################");
console.log("# THANKS FOR PLAYING! #");
console.log("########################################");
