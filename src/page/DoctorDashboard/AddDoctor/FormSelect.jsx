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
import { Label } from "@radix-ui/react-dropdown-menu";
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
const FormSelect = () => {
  const [selection, setSelection] = useState([]);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleSelect = (selectedValue, day, type, setValue) => {
    setIsDisabled(true);
    const filterValue = selection.filter((val) => val.day === day)[0];
    const filtered = selection.filter((val) => val.day != day);
    let newValue;
    if (type === "start") {
      newValue = {
        ...filterValue,
        day: day,
        startTime: selectedValue,
      };
    } else {
      newValue = {
        ...filterValue,
        day: day,
        endTime: selectedValue,
      };
    }
    setSelection([...filtered, newValue]);
    setValue("availability", [...filtered, newValue]);
    console.log(newValue);
    console.log(selection);
    setIsDisabled(false);
  };

  return (
    <div className="mb-2">
      <h2>Select avaliliblity</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
        {days.map((day) => (
          <FormField
            control={form.control}
            name="availability"
            render={({ field }) => (
              <FormItem>
                <FormLabel>{day}</FormLabel>
                <div className="flex">
                  <Select
                    disabled={isDisabled}
                    value={
                      selection.find((val) => val.day === day)?.startTime || ""
                    }
                    onValueChange={(value) =>
                      handleSelect(value, day, "start", form.setValue)
                    }
                    defaultValue={field.value}
                  >
                    <div className="relative flex items-center">
                      <Label className="absolute left-2 font-semibold">
                        From:
                      </Label>
                      <FormControl className="pl-15 rounded-r-none">
                        <SelectTrigger>
                          <SelectValue placeholder="Start Time" />
                        </SelectTrigger>
                      </FormControl>
                    </div>
                    <SelectContent>
                      {Object.entries(times).map((time, index) => (
                        <SelectItem key={index} value={time[0]}>
                          {time[1]}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Select
                    disabled={isDisabled}
                    value={
                      selection.find((val) => val.day === day)?.endTime || ""
                    }
                    onValueChange={(value) =>
                      handleSelect(value, day, "end", form.setValue)
                    }
                    defaultValue={field.value}
                  >
                    <div className="relative flex items-center">
                      <Label className="absolute left-2 font-semibold">
                        To:
                      </Label>
                      <FormControl className="pl-10 rounded-l-none">
                        <SelectTrigger>
                          <SelectValue placeholder="End Time" />
                        </SelectTrigger>
                      </FormControl>
                    </div>
                    <SelectContent>
                      {Object.entries(times).map((time, index) => (
                        <SelectItem value={time[0]}>{time[1]}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <FormMessage />
              </FormItem>
            )}
          />
        ))}
      </div>
    </div>
  );
};

export default FormSelect;
