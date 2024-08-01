import { Link, useNavigate } from 'react-router-dom';

export default function EventItem({ event }) {
  const navigate = useNavigate()
  const formattedDate = new Date(event.date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
  const handleViewDetails = (e) => {
    e.preventDefault()
    navigate(`/events/${event.id}`)
  }
  return (
    <article className="event-item">
      <img src={`http://localhost:3000/${event.image}`} alt={event.title} />
      <div className="event-item-content">
        <div>
          <h2>{event.title}</h2>
          <p className="event-item-date">{formattedDate}</p>
          <p className="event-item-location">{event.location}</p>
        </div>
        {/* <p> */}
        {/* <Link to={`/events/${event.id}`} className="button">
            View Details
          </Link> */}

        <form>
          <button className="button" onClick={handleViewDetails}>View Details</button>
        </form>
        {/* </p> */}
      </div>
    </article>
  );
}
