import React, { useState } from 'react';

import { EventWrapper } from '../PresentationStep3/styled';
import EventMenu from './EventMenu';
import EventItem, { Event as EventI } from './EventItem';

interface EventProps {
  title: string;
  setHasLifeEvent?: (hasLifeEvent: boolean) => void;
}

const Event = (props: EventProps) => {
  const { title, setHasLifeEvent = () => null } = props;
  const [events, setEvents] = useState<EventI[]>([]);
  const createEvent = (key: string) => {
    const newEvent = { key, title: title.toLowerCase(), year: 2019, checked: true };
    setEvents([...events, newEvent]);
    setHasLifeEvent(true);
  };
  const onRemove = (index: number) => {
    const newEventList = events.filter((e, i) => i !== index);
    setHasLifeEvent(!!newEventList.length);
    setEvents(newEventList);
  };
  const onCheck = (index: number) => (value: boolean) => {
    const currentEvent = { ...events[index] };
    currentEvent.checked = value;
    const newEventList = events.map((e: EventI, i: number) => (i !== index ? e : currentEvent));
    const hasLifeEvent = newEventList.some((e: EventI) => e.checked);
    setHasLifeEvent(hasLifeEvent);
    setEvents(newEventList);
  };

  return (
    <EventWrapper>
      <EventMenu title={title} createEvent={createEvent} />
      {events.map((event: EventI, index) => (
        <EventItem event={event} onRemove={onRemove} handleOnCheck={onCheck(index)} index={index} key={index} />
      ))}
    </EventWrapper>
  );
};

export default Event;
