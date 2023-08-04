import {ReactComponent as RemoveLogo} from "../../../../../img/icons/Close.svg"
import {ReactComponent as TimeLogo} from "../../../../../img/icons/QueryBuilder.svg"
import {ReactComponent as AddLogo} from "../../../../../img/icons/Add.svg"
import { FC, useState } from "react";
import {removeWorkTime} from "../../../../../store/slices/WorkLogs/WorkLogsSlice";
import ModalWorkLogs from "../ModalWorkLogs/Modal";
import { AddWorkTime, UpdateWorkTime } from "../../../../../constants/WorkLogs";
import React from "react";
import { WorkDayType, WorkTimesType } from "../../../../../types/WorkLog";
import { useAppDispatch } from "../../../../../hook/useAppDispatch";
// ({ day }:{day: WorkDayType}) => React.JSX.Element
// FC<WorkDayType>
const WorkLogsComponent:({ day }:{day: WorkDayType}) => React.JSX.Element  = ({day}) => {
   const dispatch = useAppDispatch();
   const [id, setId] = useState<number>(NaN);
   const [addOrRefreshTime, setAddOrRefreshTime] = useState<string>("Select the hours");
   const [openModal, setOpenModal] = useState<boolean>(false);

   const handleOpenAddTime = () => ():void => {
      setOpenModal(true)
      setAddOrRefreshTime(AddWorkTime)
   };
   const handleOpenRefreshTime = (id:number) => ():void => {
      setId(id)
      setOpenModal(true)
      setAddOrRefreshTime(UpdateWorkTime)
   };
   const removeTime = (id:number) => ():void => {    
      dispatch(removeWorkTime({
        id: id
      }))
   }

   return(
      <div className="work_column">
         <h5 className="week_title">{day.title}</h5>
         {(day.workTime).map((times:WorkTimesType) => 
            <div key={times.id} className="work_div">
               <span className="work_div_title">start/ end time</span>
               <div className="work_time_div">
                  <p className="input_time">{times.time}</p>
                  <div className="work_icons"> 
                     <RemoveLogo className="work_icon" 
                        onClick={removeTime(times.id)}/>
                     <TimeLogo className="work_icon" 
                        onClick={handleOpenRefreshTime(times.id)}/>
                  </div>
               </div>
            </div>
         )}
         <div className="add_div"
            onClick={handleOpenAddTime()}>
            <AddLogo className="add_icon" />
         </div>
         {openModal && (
            <ModalWorkLogs 
            addOrRefreshTime={addOrRefreshTime}
            handleOpen={handleOpenAddTime}
            openModal={openModal} 
            dayId={day.id} 
            setOpenModal={setOpenModal}
            id={id}/>
         )}
      </div>
   )
}
export default WorkLogsComponent