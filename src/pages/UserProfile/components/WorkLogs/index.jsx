import "./WorkLogs.scss";
import { useSelector } from "react-redux";
import { selectWorkLogs } from "../../../../store/selectores/WorkLogsSelector";
import WorkLogsComponent from './WorkLogsComponent/WorkLogs'

const WorkLogs = () => {
  const week = useSelector(selectWorkLogs);

  return (
    <div className="worklogs">
      <h3 className="h3_title">Work logs</h3>
      <div className="work_content">
        {week.map((day) => (
          <WorkLogsComponent key={day.id} day={day}/>
        ))}
      </div>
    </div>
  );
};
export default WorkLogs;
