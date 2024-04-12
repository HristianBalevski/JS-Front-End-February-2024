function solve(input) {
  const numberOfAstronauts = Number(input.shift());

  const my_team = {};
  for (let i = 0; i < numberOfAstronauts; i++) {
    const data = input.shift();
    const [astronautName, oxygenLevel, energyReserves] = data.split(" ");

    const newObject = {
      astronautName,
      oxygenLevel: Number(oxygenLevel),
      energyReserves: Number(energyReserves),
    };

    if (!(newObject.astronautName in my_team)) {
      my_team[newObject.astronautName] = newObject;
    }
  }

  while (true) {
    let instructions = input.shift().split(" - ");
    const command = instructions[0];
    const name = instructions[1];
    const amount = Number(instructions[2]);

    if (command === "End") {
      break;
    }

    switch (command) {
      case "Explore":
        if (my_team[name].energyReserves >= amount) {
          my_team[name].energyReserves -= amount;
          console.log(
            `${name} has successfully explored a new area and now has ${my_team[name].energyReserves} energy!`
          );
        } else {
          console.log(`${name} does not have enough energy to explore!`);
        }
        break;
      case "Refuel":
        const currentEnergy = my_team[name].energyReserves + amount;
        if (currentEnergy > 200) {
          const neededEnergy = 200 - my_team[name].energyReserves;
          my_team[name].energyReserves = 200;
          console.log(`${name} refueled their energy by ${neededEnergy}!`);
        } else {
          my_team[name].energyReserves += amount;
          console.log(`${name} refueled their energy by ${amount}!`);
        }
        break;
      case "Breathe":
        const currentOxygen = my_team[name].oxygenLevel + amount;
        if (currentOxygen > 100) {
          const neededOxygen = 100 - my_team[name].oxygenLevel;
          my_team[name].oxygenLevel = 100;
          console.log(
            `${name} took a breath and recovered ${neededOxygen} oxygen!`
          );
        } else {
          my_team[name].oxygenLevel += amount;
          console.log(`${name} took a breath and recovered ${amount} oxygen!`);
        }
        break;
    }
  }

  for (const astronautName in my_team) {
    const astronaut = my_team[astronautName];
    console.log(
      `Astronaut: ${astronaut.astronautName}, Oxygen: ${astronaut.oxygenLevel}, Energy: ${astronaut.energyReserves}`
    );
  }
}

solve([
  "4",
  "Alice 60 100",
  "Bob 40 80",
  "Charlie 70 150",
  "Dave 80 180",
  "Explore - Bob - 60",
  "Refuel - Alice - 30",
  "Breathe - Charlie - 50",
  "Refuel - Dave - 40",
  "Explore - Bob - 40",
  "Breathe - Charlie - 30",
  "Explore - Alice - 40",
  "End",
]);
