/**Detects if the entry is an array */
export default function DataList(category) {
    //If it's not, it just returns the single entry
    if (!Array.isArray(category)) {
        return category
        //if it's just 2 items, it puts the apersand between them
    } else if (category.length === 2) {
        return category.join(' & ')
        //if it's more than 2 items, it adds commas and the apersand
    } else if (category.length >= 3) {
        let middleItems = ''
        let firstItem = category[0]
        for (let i = 1; i < category.length - 1; i++) {
            //everything but the last item in the list gets a comma
            middleItems += ', ' + category[i]
        }
        //The last item gets a comma and ampersand
        let lastItem = ', & ' + category[category.length - 1]
        //combines items into a readable list
        return firstItem + middleItems + lastItem
    }
}
