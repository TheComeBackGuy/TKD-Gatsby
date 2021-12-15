/***@makeCastList take in the "cast" array, adds all the actors names to a new array
 * called castList and then returns that array to be used in DataList
 */
export default function MakeCastList(castArray) {
    const castList = []
    castArray.forEach((character) => {
        castList.push(character.actor)
    })
    return castList
}
