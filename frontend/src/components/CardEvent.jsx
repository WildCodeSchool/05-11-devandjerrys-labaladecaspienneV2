// import { Link } from "react-router-dom"

export default function CardEvent(props) {
  const date = new Date(props.date_event_begginning)
  const formattedDay = date.getDate()
  const formattedMonthYear = date
    .toLocaleDateString("fr-FR", {
      month: "short",
      year: "numeric",
    })
    .replace(/^\w/, (c) => c.toUpperCase())

  const dateEnd = new Date(props.date_event_end)
  const formattedEnd = dateEnd.toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })

  return (
    <div className="event-container">
      <div className="event">
        <div className="event-left">
          <div className="event-date">
            <div className="date">{formattedDay}</div>
            <div className="month">{formattedMonthYear}</div>
          </div>
          {props.date_event_end !== props.date_event_begginning && (
            <div className="event-date">
              {/* <div> - </div> */}
              <div className="month">
                <span> - </span>
                {formattedEnd}
              </div>
              {/* <div className="month">{formattedMonthYear}</div> */}
            </div>
          )}
        </div>
        <div className="event-right">
          <h3 className="event-title">{props.name_event}</h3>
          <div className="event-description">{props.description_event}</div>
          <div className="infos-contain">
            {/* <div className="event-infos">{props.place_event}</div> */}
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                props.place_event
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="event-infos"
              style={{ textDecoration: "none", color: "#ffffff" }}
            >
              {props.place_event}
            </a>
            <a
              href={props.link_event}
              target="_blank"
              rel="noopener noreferrer"
              className="event-infos"
              style={{ textDecoration: "none", color: "#ffffff" }}
            >
              Site de l'évènement
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
