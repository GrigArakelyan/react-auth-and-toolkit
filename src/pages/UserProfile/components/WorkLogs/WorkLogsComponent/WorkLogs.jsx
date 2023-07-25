import {ReactComponent as RemoveLogo} from "../../../../../img/icons/Close.svg"
import {ReactComponent as TimeLogo} from "../../../../../img/icons/QueryBuilder.svg"
import {ReactComponent as AddLogo} from "../../../../../img/icons/Add.svg"
import { useState } from "react";
import {removeWorkTime} from "../../../../../store/slices/WorkLogs/WorkLogsSlice";
import { useDispatch } from "react-redux";
import ModalWorkLogs from "../ModalWorkLogs/Modal";
import { AddWorkTime, UpdateWorkTime } from "../../../../../constants/WorkLogs";

const WorkLogsComponent = ({day}) => {
   const dispatch = useDispatch();
   const [id, setId] = useState(null);
   const [addOrRefreshTime, setAddOrRefreshTime] = useState("Select the hours");
   const [openModal, setOpenModal] = useState(false);

   const handleOpenAddTime = () => {
      setOpenModal(true)
      setAddOrRefreshTime(AddWorkTime)
   };
   const handleOpenRefreshTime = (id) => {
      setId(id)
      setOpenModal(true)
      setAddOrRefreshTime(UpdateWorkTime)
   };
   const removeTime = (id) => {
      dispatch(removeWorkTime({
        id: id
      }))
   }

   return(
   <>
      <div className="work_column">
         <h5 className="week_title">{day.title}</h5>
         {(day.workTime).map((times) => 
            <div key={times.id} className="work_div">
               <span className="work_div_title">start/ end time</span>
               <div className="work_time_div">
                  <p className="input_time">{times.time}</p>
                  <div className="work_icons"> 
                     <RemoveLogo className="work_icon" 
                        onClick={() => removeTime(times.id)}/>
                     <TimeLogo className="work_icon" 
                        onClick={() => handleOpenRefreshTime(times.id)}/>
                  </div>
               </div>
            </div>
         )}
         <div className="add_div"
            onClick={() => handleOpenAddTime()}>
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
   </>
   )
}
export default WorkLogsComponent