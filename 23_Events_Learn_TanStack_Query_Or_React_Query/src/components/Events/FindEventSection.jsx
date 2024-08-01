import { useRef, useState } from 'react';
import { useQuery } from '@tanstack/react-query'
import { fetchEvents } from '../../utils/http';
import LoadingIndicator from '../UI/LoadingIndicator';
import ErrorBlock from '../UI/ErrorBlock';
import EventItem from './EventItem';
export default function FindEventSection() {
  const searchElement = useRef();
  const [searchTerm, setSerchTerm] = useState('')
  const { data, error, isError, isPending } = useQuery({
    queryKey: ['events', { search: searchTerm }],
    queryFn: () => fetchEvents(searchTerm)
  })

  function handleSubmit(event) {
    event.preventDefault();
    setSerchTerm(searchElement.current.value)
  }

  let content = <p>Please enter a search term and to find events.</p>
  if (isPending) {
    content = <LoadingIndicator />
  }
  if (isError) {
    content = <ErrorBlock title={"An error occured"} message={error.code?.message || "Failed to fetch events"} />
  }

  if (data) {
    content = <ul className='events-list'>

      {data.map(event => {
        return <li key={event.id}>
          <EventItem event={event} />
        </li>
      })}
    </ul>
  }
  return (
    <section className="content-section" id="all-events-section">
      <header>
        <h2>Find your next event!</h2>
        <form onSubmit={handleSubmit} id="search-form">
          <input
            type="search"
            placeholder="Search events"
            ref={searchElement}
          />
          <button>Search</button>
        </form>
      </header>
      {content}
    </section>
  );
}
