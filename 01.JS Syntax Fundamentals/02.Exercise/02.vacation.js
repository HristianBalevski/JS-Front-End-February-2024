function vacation(quantity, type, day) {
    let price = 0

    if (type === 'Students') {
        switch (day) {
            case 'Friday':
                price = 8.45
                break;
            case 'Saturday':
                price = 9.80
                break;
            case 'Sunday':
                price = 10.46
                break;
        }
    } else if (type === 'Business') {
        switch (day) {
            case 'Friday':
                price = 10.90
                break;
            case 'Saturday':
                price = 15.60
                break;
            case 'Sunday':
                price = 16
                break;
        }
    } else {
        switch (day) {
            case 'Friday':
                price = 15
                break;
            case 'Saturday':
                price = 20
                break;
            case 'Sunday':
                price = 22.50
                break;
        }
    }
    let totalPrice = price * quantity

    if (type === 'Students' && quantity >= 30) {
        totalPrice *= 0.85
    } else if (type === 'Business' && quantity >= 100) {
        totalPrice -= 10 * price
    } else if (type === 'Regular' && quantity >= 10 && quantity <= 20) {
        totalPrice *= 0.95
    }
    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

vacation(100, "Business", "Sunday")
vacation(30, "Students", "Sunday")
vacation(40, "Regular", "Saturday")

