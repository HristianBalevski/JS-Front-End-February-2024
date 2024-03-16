function getInventory(input) {
    const inventory = [];

    for (const sequence of input) {
        const [name, level, items] = sequence.split(' / ')

        const hero = {
            name,
            level: Number(level),
            items,
        };

        inventory.push(hero)
    }

    inventory.sort((a, b) => a.level - b.level);


    for (hero of inventory) {
        console.log(`Hero: ${hero.name}\nlevel => ${hero.level}\nitems => ${hero.items}`);
    }
}


getInventory([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
])