import React, { useState } from "react";
import { data } from "../Data/data";
import moment from "moment";

const Shedule = () => {
  const busy = [];
  data.map((item) => {
    const startMoment = moment(item.start, "ddd, DD MMM YYYY HH:mm:ss GMT");
    const endMoment = moment(item.end, "ddd, DD MMM YYYY HH:mm:ss GMT");
    const diff = endMoment.diff(startMoment, "minutes");
    item.duration = diff;
    item.start = startMoment;
    item.end = endMoment;
  });
  // console.log(data);
  return (
    <div>
      <div className="mt-5 w-[86.4vw] h-12 bg-teal-300 text-xs font-medium relative">
        <span className="absolute top-[-50%] left-[-25px]">GMT+05:30</span>
        <span className="absolute top-[-50%] right-[-15px]">24:00</span>
        {data.map((item, index) => {
          const start = item.start.hours() + item.start.minutes() / 60;
          const end = item.end.hours() + item.end.minutes() / 60;
          const timeSpan = `w-[${(end - start) * 3.6}vw]`;
          const position = `left-[${(start*100)/24}%]`
          // console.log(timeSpan, position)
          return (
            <span
              key={index}
              className={`${timeSpan} left-[20%] relative h-12 bg-slate-400 inline-block `}
            >{item.start.format("HH:mm")}</span> 

          );
        })}
      </div>
    </div>
  );
};

export default Shedule;
