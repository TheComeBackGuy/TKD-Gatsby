/**Function is used in multiple files.
 * takes in a prop and weighs it aganst the current Date
 */
export default function InThePast(date) {
    const today = new Date()
    const compare = new Date(date)
    if (today.getTime() >= compare.getTime()) return true
}
