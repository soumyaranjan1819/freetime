import React, { useState } from "react";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import moment from "moment";
import { data } from "../Data/data";

function UserInput() {
  const [date, setDate] = useState();
  const [time, setTime] = useState();
  const [duration, setDuration] = useState(0);
  const [start, setStart] = useState({

  })
  let userDate = moment(date).format('ddd')
  let userTime = moment(time).format('LTS')

  const handleButton = () => {
    console.log(userDate, userTime, duration);
   
  };
  return (
    <>
      <div className="flex justify-between items-center mt-2.5">
        <div className="flex flex-col">
          <span>
            Date <sup className="text-red-600 font-medium text-lg">*</sup>
          </span>
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <DatePicker
              value={date}
              inputFormat="MM/DD/YYYY"
              onChange={(newValue) => {
                setDate(newValue);
              }}
              renderInput={(params) => <TextField {...params} size="small" />}
            />
          </LocalizationProvider>
        </div>
        <div className="flex flex-col">
          <span>
            Start Time <sup className="text-red-600 font-medium text-lg">*</sup>
          </span>
          <LocalizationProvider dateAdapter={AdapterMoment}>
            <TimePicker
              value={time}
              onChange={(newValue) => {
                setTime(newValue);
              }}
              renderInput={(params) => <TextField {...params} size="small" />}
            />
          </LocalizationProvider>
        </div>
        <div>
          <span>
            Duration <sup className="text-red-600 font-medium text-lg">*</sup>
          </span>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 0, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              placeholder="Enter time in minutes"
              variant="outlined"
              size="small"
              onChange={(e) => {
                setDuration(e.target.value);
              }}
              inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
            />
          </Box>
        </div>
      </div>
      <Button
        variant="contained"
        size="small"
        style={{ marginTop: "10px", textTransform: "capitalize" }}
        onClick={handleButton}
      >
        Find
      </Button>
    </>
  );
}

export default UserInput;
