function dungeon(array) {
    let health = 100;
    let coins = 0;
    let bestRoom = 0;
    let isDead = false

    for (rooms of array) {
        let currentRoom = rooms.split('|')

        for (elements of currentRoom) {
            let instructions = elements.split(' ')
            let command = instructions[0]
            let points = Number(instructions[1])

            bestRoom += 1

            if (command === "potion") {
                if (health + points <= 100) {
                    health += points
                    console.log(`You healed for ${points} hp.`);
                    console.log(`Current health: ${health} hp.`)
                } else {
                    let neededHealth = 100 - health
                    health = 100
                    console.log(`You healed for ${neededHealth} hp.`);
                    console.log(`Current health: ${health} hp.`)
                }
            } else if (command === "chest") {
                coins += points
                console.log(`You found ${points} coins.`)
            } else {
                let monsterName = command
                let monsterAttack = points

                if (health - monsterAttack <= 0) {
                    health = 0

                    console.log(`You died! Killed by ${monsterName}.`)
                    isDead = true
                    console.log(`Best room: ${bestRoom}`)
                    break;
                } else {
                    health -= monsterAttack
                    console.log(`You slayed ${monsterName}.`)
                }

            }
        }

    }
    if (!isDead) {
        console.log("You've made it!")
        console.log(`Coins: ${coins}`)
        console.log(`Health: ${health}`)
    }
}

dungeon(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])
dungeon(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"])