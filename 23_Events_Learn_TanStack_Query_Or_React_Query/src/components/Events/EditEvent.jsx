import { Link, useNavigate, useParams } from 'react-router-dom';

import Modal from '../UI/Modal.jsx';
import EventForm from './EventForm.jsx';
import { useMutation, useQuery } from '@tanstack/react-query';
import { fetchEvent, queryClient, updateEvent } from '../../utils/http.js';
import LoadingIndicator from '../UI/LoadingIndicator.jsx';
import ErrorBlock from '../UI/ErrorBlock.jsx';
import { useEffect } from 'react';

export default function EditEvent() {
  const params = useParams()
  const navigate = useNavigate();
  const { data, isPending, isError, error } = useQuery({
    queryKey: ['event', params.id],
    queryFn: ({ signal }) => fetchEvent({ id: params.id, signal })
  })
  const { mutate, isPending: updateIsPending, isError: updateIsError, error: updateError } = useMutation({
    mutationFn: updateEvent,
    // onSuccess: () => {
    //   queryClient.invalidateQueries({
    //     queryKey: ['event', params.id],
    //   })
    //   navigate('../');
    // },
    onMutate: async (data) => {
      const newEvent = data.event
      await queryClient.cancelQueries({ queryKey: ['event', params.id] })
      const previouEvent = queryClient.getQueriesData({ queryKey: ['event', params.id] })
      queryClient.setQueriesData(['event', params.id], newEvent)
      return { previouEvent }
    },
    onError: (error, data, context) => {
      console.log('calling onError', context)
      queryClient.setQueriesData(['event', params.id], context.previouEvent)
    },
    onSettled: () => {
      queryClient.invalidateQueries(['events', params.id])
    }

  })


  function handleSubmit(formData) {
    mutate({
      id: params.id,
      event: formData,
    })
    navigate('../');
  }

  function handleClose() {
    navigate('../');
  }

  let content;
  if (isPending) {
    content = <div className='center'>
      <LoadingIndicator />
    </div>
  }

  if (isError) {
    content = <>
      <ErrorBlock
        title={"Failed to load event"}
        message={error.info?.message || "Failed to load event, please check your inputs and try again later."}
      />
      <div className='form-actions'>
        <Link to={'../'} className='button'>
          Okay</Link>
      </div>
    </>
  }

  if (data) {
    content = <EventForm inputData={data} onSubmit={handleSubmit}>
      <Link to="../" className="button-text">
        Cancel
      </Link>
      <button type="submit" className="button">
        Update
      </button>
    </EventForm>
  }
  return (
    <Modal onClose={handleClose}>
      {content}
    </Modal>
  );
}
