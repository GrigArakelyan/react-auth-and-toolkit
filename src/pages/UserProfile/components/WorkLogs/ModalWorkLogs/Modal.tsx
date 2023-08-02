import * as React from 'react';
import { ReactComponent as CloseLogo } from "../../../../../img/icons/Close.svg"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import "../ModalWorkLogs/ModalWorkLogs.scss"
import { addWorkTime, refreshWorkTime } from '../../../../../store/slices/WorkLogs/WorkLogsSlice';
import { useDispatch } from 'react-redux';
import TimePickerEnd from '../../../../../Components/TimePickerEnd';
import TimePickerStart from '../../../../../Components/TimePickerStart';
import { AddWorkTime } from "../../../../../constants/WorkLogs";
import { Controller, useForm } from 'react-hook-form';
import { PostWorkTime } from '../../../../../types/WorkLog';


const ModalWorkLogs = ({openModal, handleOpen, dayId, setOpenModal, addOrRefreshTime, id}:{
  openModal:boolean;
  handleOpen:any;
  dayId:number;
  setOpenModal:any;
  addOrRefreshTime:string;
  id:number;
}) => {
  const dispatch = useDispatch();
  const {handleSubmit, control } = useForm();

  const handleClose = () => {
    setOpenModal(false);
  };

  const postWorkTime = (dayId:number) => (postTime:any) => {
      postTime?.startTime & postTime?.endTime && 
      dispatch(addWorkTime({ 
          id:dayId,
          startTime:`${new Date(postTime?.startTime).getHours()}:${new Date(postTime?.startTime).getMinutes()}`,
          endTime:`${new Date(postTime?.endTime).getHours()}:${new Date(postTime?.endTime).getMinutes()}`
      }));
console.log(postTime)
      postTime?.startTime & postTime?.endTime && setOpenModal(false)
  };

  const refreshTime = (timeId:number) => (postTime:any) => {
    postTime?.startTime & postTime?.endTime && 
      dispatch(refreshWorkTime({
        id: timeId,
        startTime: `${new Date(postTime?.startTime).getHours()}:${new Date(postTime?.startTime).getMinutes()}`,
        endTime: `${new Date(postTime?.endTime).getHours()}:${new Date(postTime?.endTime).getMinutes()}`
      }))
      postTime?.startTime & postTime?.endTime && setOpenModal(false)
  }

const style = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 600,
  height: 250,
  bgcolor: 'background.paper',
  border: 'none',
  outline: "none",
  borderRadius: "5px",
  boxShadow: 24,
  padding: 4,
};

  return (
    <div className='modal_div'>
      <Button onClick={handleOpen}></Button>
      <Modal
        open={openModal}
        onClose={handleClose}>
        <Box className="modal">
            <CloseLogo className='close_logo'
              onClick={handleClose}/>
          <Box id="modal-modal-title"  component="h1">
            {addOrRefreshTime}
          </Box> 
          <Box id="modal-modal-description" sx={{ mt: 2 }}>
            <form className='modal_form' onSubmit={ addOrRefreshTime === AddWorkTime ? 
                  handleSubmit(postWorkTime(dayId)) : handleSubmit(refreshTime(id))}>
              <div className='time_div'>
                <Controller name="startTime" control={control}
                  render={({ field: {onChange} }) => (
                <TimePickerStart onChange={onChange}/>
                )}/> 
                <Controller name="endTime" control={control}
                  render={({ field: {onChange} }) => (
                <TimePickerEnd onChange={onChange}/>
                )}/>   
              </div> 
              <div className='time_button_div'>
                <button className='save_button' type='submit'>Save Time</button>
              </div>
            </form>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default ModalWorkLogs;