import React, { useState } from 'react';
import { Icon, Popconfirm } from 'antd';

import { EventItemWrapper, Owner, Sentence } from '../PresentationStep3/styled';
import CheckboxInput from '../../StrategyPage/Drawer/CheckboxInput';

export interface Event {
  key: string;
  title: string;
  year: number;
  checked: boolean;
}

interface EventItemProps {
  event: Event;
  index: number;
  onRemove: (index: number) => void;
  handleOnCheck?: (checked: boolean) => void;
}

const emptyFn = () => null;

const EventItem = (props: EventItemProps) => {
  const { event, index, onRemove, handleOnCheck = emptyFn } = props;
  const [checkboxValue, setCheckboxValue] = useState<boolean>(true);
  const onItemChecked = (v: any) => {
    setCheckboxValue(v);
    handleOnCheck(v);
  };

  return (
    <EventItemWrapper>
      <CheckboxInput value={checkboxValue} onChange={onItemChecked} />
      <Sentence>
        <Owner>{event.key}</Owner> {event.title} added for the year <b>{event.year}</b>
      </Sentence>
      <Popconfirm title="Really delete?" onConfirm={() => onRemove(index)}>
        <Icon className="remove" type="close-square" theme="twoTone" />
      </Popconfirm>
    </EventItemWrapper>
  );
};

export default EventItem;
