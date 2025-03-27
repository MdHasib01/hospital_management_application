import React, { useState } from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
const payload = [
  { day: "Sunday", start: "09:00", end: "21:00" },
  { day: "Monday", start: "09:00", end: "21:00" },
  { day: "Tuesday", start: "09:00", end: "21:00" },
];
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const times = {
  "00:00": "12 AM",
  "01:00": "1 AM",
  "02:00": "2 AM",
  "03:00": "3 AM",
  "04:00": "4 AM",
  "05:00": "5 AM",
  "06:00": "6 AM",
  "07:00": "7 AM",
  "08:00": "8 AM",
  "09:00": "9 AM",
  "10:00": "10 AM",
  "11:00": "11 AM",
  "12:00": "12 PM",
  "13:00": "1 PM",
  "14:00": "2 PM",
  "15:00": "3 PM",
  "16:00": "4 PM",
  "17:00": "5 PM",
  "18:00": "6 PM",
  "19:00": "7 PM",
  "20:00": "8 PM",
  "21:00": "9 PM",
  "22:00": "10 PM",
  "23:00": "11 PM",
};
const FormSelect = ({ form }) => {
  const [selection, setSelection] = useState([]);

  const handleSelect = (selectedValue, day, type) => {
    const filterValue = selection.filter((val) => val.day === day)[0];
    const filtered = selection.filter((val) => val.day != day);
    let newValue;
    if (type === "start") {
      newValue = {
        ...filterValue,
        day: day,
        start: selectedValue,
      };
    } else {
      newValue = {
        ...filterValue,
        day: day,
        end: selectedValue,
      };
    }
    setSelection([...filtered, newValue]);
    form.setValue("availability", [...filtered, newValue]);
    console.log(newValue);
    console.log(selection);
  };

  return (
    <div className="m-10">
      <h2>Select avaliliblity</h2>
      <div className="grid grid-cols-3 gap-2">
        {days.map((day) => (
          <FormField
            control={form.control}
            name="availability"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{day}</FormLabel>
                <Select
                  onValueChange={(value) => handleSelect(value, day, "start")}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Start Time" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {Object.entries(times).map((time, index) => (
                      <SelectItem key={index} value={time[0]}>
                        {time[1]}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select
                  onValueChange={(value) => handleSelect(value, day, "end")}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Start Time" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {Object.entries(times).map((time, index) => (
                      <SelectItem key={index} value={time[0]}>
                        {" "}
                        {time[1]}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormDescription>
                  You can manage email addresses in your{" "}
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}
      </div>
      {/* <div>
        <p className="font-bold">{day}</p>
        <p>From</p>
        <select name={day} id="" defaultValue="" onChange={handleSelectStart}>
          <option value="" disabled hidden>
            Select start time
          </option>
          {Object.entries(times).map((time, index) => (
            <option key={index} value={time[0]}>
              {" "}
              {time[1]}
            </option>
          ))}
        </select>
        <p>To</p>
        <select name={day} id="" defaultValue="" onChange={handleSelectEnd}>
          <option value="" disabled hidden>
            Select end time
          </option>
          {Object.entries(times).map((time, index) => (
            <option key={index} value={time[0]}>
              {" "}
              {time[1]}
            </option>
          ))}
        </select>
      </div> */}
    </div>
  );
};

export default FormSelect;
