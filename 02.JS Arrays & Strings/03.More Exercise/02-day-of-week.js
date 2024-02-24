function dayOfWeek(number) {
    const week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

    if (number > week.length || number <= 0) {
        console.log('Invalid day!');
    } else {
        console.log(week[number - 1])
    }
}

dayOfWeek(11)