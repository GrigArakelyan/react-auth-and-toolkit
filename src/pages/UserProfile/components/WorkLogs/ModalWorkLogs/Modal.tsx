import  React, {FC} from 'react';
import { ReactComponent as CloseLogo } from "../../../../../img/icons/Close.svg"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import "../ModalWorkLogs/ModalWorkLogs.scss"
import { addWorkTime, refreshWorkTime } from '../../../../../store/slices/WorkLogs/WorkLogsSlice';
import TimePickerEnd from '../../../../../Components/TimePicker/TimePickerEnd';
import TimePickerStart from '../../../../../Components/TimePicker/TimePickerStart';
import { AddWorkTime } from "../../../../../constants/WorkLogs";
import { Controller, FieldValues, useForm } from 'react-hook-form';
import { useAppDispatch } from '../../../../../hook/useAppDispatch';

interface ModalProps {
  openModal: boolean;
  handleOpen:() => void;
  dayId: number;
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  addOrRefreshTime: string;
  id: number;
}

const ModalWorkLogs:FC<ModalProps> = ({openModal, handleOpen, dayId, setOpenModal, addOrRefreshTime, id}) => {
  const dispatch = useAppDispatch();
  const {handleSubmit, control } = useForm<FieldValues>();

  const handleClose = () => {
    setOpenModal(false);
  };

  const postWorkTime = (dayId:number) => (postTime:any) => {
    postTime?.startTime & postTime?.endTime && 
      dispatch(addWorkTime(
      { 
        id:dayId,
        startTime:`${new Date(postTime?.startTime).getHours()}:${new Date(postTime?.startTime).getMinutes()}`,
        endTime:`${new Date(postTime?.endTime).getHours()}:${new Date(postTime?.endTime).getMinutes()}`
      }))
    postTime?.startTime & postTime?.endTime && setOpenModal(false)
  };

  const refreshTime = (timeId:number) => (postTime:any) => {
    postTime?.startTime & postTime?.endTime && 
      dispatch(refreshWorkTime( 
      {
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