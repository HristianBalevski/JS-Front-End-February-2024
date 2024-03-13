function createSchedule(input) {
    const weeklySchedule = {};

    for (const text of input) {
        const [weekDay, name] = text.split(' ')

        if (!weeklySchedule.hasOwnProperty(weekDay)) {
            weeklySchedule[weekDay] = name
            console.log(`Scheduled for ${weekDay}`);
        } else {
            console.log(`Conflict on ${weekDay}!`)
        }

    }

    const currentData = Object.entries(weeklySchedule);

    for (const keyValue of currentData) {
        console.log(`${keyValue[0]} -> ${keyValue[1]}`)
    }
}

createSchedule(['Friday Bob',
    'Saturday Ted',
    'Monday Bill',
    'Monday John',
    'Wednesday George'])