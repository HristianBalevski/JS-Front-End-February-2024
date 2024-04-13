function solve(input) {
  const numberOfCharacters = Number(input.shift());
  const heroes = {};

  for (let i = 0; i < numberOfCharacters; i++) {
    let currentData = input.shift();
    const [heroName, hp, bullets] = currentData.split(" ");

    heroes[heroName] = {
      heroName,
      hp: parseInt(hp),
      bullets: parseInt(bullets),
    };
  }

  while (true) {
    let line = input.shift();

    if (line === "Ride Off Into Sunset") {
      break;
    } else {
      const data = line.split(" - ");

      const command = data[0];

      if (command === "FireShot") {
        const name = data[1];
        const target = data[2];

        if (heroes[name].bullets > 0) {
          heroes[name].bullets -= 1;
          console.log(
            `${name} has successfully hit ${target} and now has ${heroes[name].bullets} bullets!`
          );
        } else {
          console.log(
            `${name} doesn't have enough bullets to shoot at ${target}!`
          );
        }
      } else if (command === "TakeHit") {
        const name = data[1];
        const damage = Number(data[2]);
        const attacker = data[3];

        if (heroes[name].hp > damage) {
          heroes[name].hp -= damage;
          console.log(
            `${name} took a hit for ${damage} HP from ${attacker} and now has ${heroes[name].hp} HP!`
          );
        } else {
          delete heroes[name];
          console.log(`${name} was gunned down by ${attacker}!`);
        }
      } else if (command === "Reload") {
        const name = data[1];

        if (heroes[name].bullets < 6) {
          const reloadedBullets = 6 - heroes[name].bullets;
          heroes[name].bullets = 6;
          console.log(`${name} reloaded ${reloadedBullets} bullets!`);
        } else {
          console.log(`${name}'s pistol is fully loaded!`);
        }
      } else if (command === "PatchUp") {
        const name = data[1];
        const amount = Number(data[2]);

        if (heroes[name].hp === 100) {
          console.log(`${name} is in full health!`);
        } else {
          const amountRecovered = Math.min(100 - heroes[name].hp, amount);
          heroes[name].hp += amountRecovered;
          console.log(
            `${name} patched up and recovered ${amountRecovered} HP!`
          );
        }
      }
    }
  }

  for (let obj in heroes) {
    console.log(`${heroes[obj].heroName}`);
    console.log(`  HP: ${heroes[obj].hp}`);
    console.log(`  Bullets: ${heroes[obj].bullets}`);
  }
}

solve([
  "2",
  "Gus 100 0",
  "Walt 100 6",
  "FireShot - Gus - Bandit",
  "TakeHit - Gus - 100 - Bandit",
  "Reload - Walt",
  "Ride Off Into Sunset",
]);
