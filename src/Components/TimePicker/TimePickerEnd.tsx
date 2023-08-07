import "./TimePicker.scss"
import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

const TimePickerEnd = ({onChange}:{onChange:any}) => {
  
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['TimePicker']}>
        <TimePicker label="End" 
          onChange={onChange}
        />
      </DemoContainer>
    </LocalizationProvider>
  );
}
export default TimePickerEnd