import { DateRangePicker } from "react-date-range";

const CalendarComp = (Props) => {
  const { tCalendarComp, handleChange, ranges, handleShow, handleConfirm } =
    Props;
  return (
    <div className="flex flex-col">
      <DateRangePicker
        ranges={ranges}
        moveRangeOnFirstSelection={false}
        direction="horizontal"
        months={2}
        onChange={(item) => handleChange([item.selection])}
      />
      <div className="flex border-t border-[#d9d9d9] bg-white py-5 gap-5 px-4">
        <button
          className="bg-transparent py-2.5 px-4 border border-[#d9d9d9] rounded"
          onClick={() => handleShow(false)}
        >
          {tCalendarComp("close")}
        </button>
        <button
          className="bg-pending text-black py-2.5 px-4 rounded"
          onClick={() => handleConfirm()}
        >
          {tCalendarComp("confirmation")}
        </button>
      </div>
    </div>
  );
};

export default CalendarComp;
