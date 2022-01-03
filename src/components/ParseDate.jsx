export default function ParseDate(date, type) {
    const thisDate = new Date(date)
    let month = thisDate.getMonth() + 1
    let day = thisDate.getDate()
    let hour = thisDate.getHours()
    let minutes = thisDate.getMinutes()
    let ampm = hour > 12 ? 'pm' : 'am'

    //only returns a number so had to add formatting to minutes
    if (minutes === 0) {
        minutes = '00'
    } else if (minutes < 10) {
        minutes = '0' + minutes.toString()
    }

    //disabling military time
    if (hour > 12) {
        hour -= 12
    }

    switch (month) {
        case 1:
            month = 'January'
            break
        case 2:
            month = 'February'
            break
        case 3:
            month = 'March'
            break
        case 4:
            month = 'April'
            break
        case 5:
            month = 'May'
            break
        case 6:
            month = 'June'
            break
        case 7:
            month = 'July'
            break
        case 8:
            month = 'August'
            break
        case 9:
            month = 'September'
            break
        case 10:
            month = 'October'
            break
        case 11:
            month = 'November'
            break
        case 12:
            month = 'December'
            break
        default:
            break
    }
    if (type === 'auditions') {
        return `${month
            .toString()
            .slice(0, 3)} ${day} - ${hour}:${minutes} ${ampm}`
    } else {
        return `${month.toString().slice(0, 3)} ${day}`
    }
}
