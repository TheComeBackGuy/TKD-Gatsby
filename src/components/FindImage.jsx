/**A consistently needed function.
 * weighs a query against the JSON file to match images to the correct post
 */
export default function FindImage(queryArray, showImage) {
    let returnStatement = null
    queryArray.map((images) => {
        if (images.node.name == showImage) {
            console.log(showImage + ' vs ' + images.node.name)
            console.log(images.node.childImageSharp.gatsbyImageData)
            returnStatement = images.node.childImageSharp.gatsbyImageData
        }
    })
    return returnStatement
}
