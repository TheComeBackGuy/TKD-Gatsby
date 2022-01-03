/**Function is used in multiple files.
 * takes in a prop and weighs it aganst the current Date
 */
export default function InThePast(date) {
    const today = new Date()
    //checking to see if the date is in an array and setting it before it creates the new date
    if (Array.isArray(date)) {
        date = date[date.length - 1]
    }
    const compare = new Date(date)
    console.log(date)

    if (today.getTime() >= compare.getTime()) return true
}
