export default function UpcomingShows(props) {
    return (
        <li key={`content_item_${index}`} className="showContainer">
            <div>
                <div className="placeholder">
                    <p>Image goes here</p>
                </div>
                <div className="showDetails">
                    <h3>{data.title}</h3>
                    <p>
                        <cite>By: {dataList(data.author)}</cite>
                        <br />
                        {parseDate(data.opens)} - {parseDate(data.closes)}
                        <br />
                        <strong>Directed By: </strong>
                        <br />
                        {dataList(data.director)}
                    </p>
                </div>
                <button
                    className="showTicket"
                    onClick={() => {
                        window.open(
                            `https://www.onthestage.tickets/show/theatre-knoxville-downtown/${data.ticketLink}/tickets`
                        )
                    }}
                >
                    Tickets
                </button>
            </div>
        </li>
    )
}
