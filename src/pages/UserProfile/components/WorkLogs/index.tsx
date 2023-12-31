import "./WorkLogs.scss";
import { selectWorkLogs } from "../../../../store/selectores/WorkLogsSelector";
import WorkLogsComponent from './WorkLogsComponent/WorkLogs'
import React, { FC } from "react";
import { WorkDayType, WorkLogType } from "../../../../types/WorkLog";
import { useAppSelector } from "../../../../hook/useAppSelector";

const WorkLogs:FC = () => {

  const week:WorkLogType = useAppSelector(selectWorkLogs);

  return (
    <div className="worklogs">
      <h3 className="h3_title">Work logs</h3>
      <div className="work_content">
        {week.map((day:WorkDayType) => (
          <WorkLogsComponent key={day.id} day={day}/>
        ))}
      </div>
    </div>
  );
};
export default WorkLogs;
