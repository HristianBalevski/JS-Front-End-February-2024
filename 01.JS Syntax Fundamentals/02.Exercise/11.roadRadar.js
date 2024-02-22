function roadRadar(speed, area) {

    let limitMotorway = 130;
    let limitInterstate = 90;
    let limitCity = 50;
    let limitResidential = 20;
    let output = ''
    let status = ''

    switch (area) {
        case 'motorway':
            if (speed > limitMotorway) {
                difference = speed - limitMotorway

                if (difference <= 20) {
                    status = 'speeding'
                } else if (difference <= 40) {
                    status = 'excessive speeding'
                } else {
                    status = 'reckless driving'
                }
                output = `The speed is ${difference} km/h faster than the allowed speed of ${limitMotorway} - ${status}`
                break;
            } else {
                output = `Driving ${speed} km/h in a ${limitMotorway} zone`
                break;
            }
        case 'interstate':
            if (speed > limitInterstate) {
                difference = speed - limitInterstate

                if (difference <= 20) {
                    status = 'speeding'
                } else if (difference <= 40) {
                    status = 'excessive speeding'
                } else {
                    status = 'reckless driving'
                }
                output = `The speed is ${difference} km/h faster than the allowed speed of ${limitInterstate} - ${status}`
                break;
            } else {
                output = `Driving ${speed} km/h in a ${limitInterstate} zone`
                break;
            }
        case 'city':
            if (speed > limitCity) {
                difference = speed - limitCity

                if (difference <= 20) {
                    status = 'speeding'
                } else if (difference <= 40) {
                    status = 'excessive speeding'
                } else {
                    status = 'reckless driving'
                }
                output = `The speed is ${difference} km/h faster than the allowed speed of ${limitCity} - ${status}`
                break;
            } else {
                output = `Driving ${speed} km/h in a ${limitCity} zone`
                break;
            }
        case 'residential':
            if (speed > limitResidential) {
                difference = speed - limitResidential

                if (difference <= 20) {
                    status = 'speeding'
                } else if (difference <= 40) {
                    status = 'excessive speeding'
                } else {
                    status = 'reckless driving'
                }
                output = `The speed is ${difference} km/h faster than the allowed speed of ${limitResidential} - ${status}`
                break;
            } else {
                output = `Driving ${speed} km/h in a ${limitResidential} zone`
                break;
            }

    }
    console.log(output);
}

roadRadar(40, 'city')
roadRadar(21, 'residential')
roadRadar(120, 'interstate')
roadRadar(200, 'motorway')