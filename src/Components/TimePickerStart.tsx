import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import React, { FC } from 'react';

interface TimePickerStart {
  onChange: (event: any) => void
}

const TimePickerStart:FC<TimePickerStart> = ({onChange}) => {

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['TimePicker']}>
        <TimePicker label="Start" 
          onChange={onChange}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
export default TimePickerStart