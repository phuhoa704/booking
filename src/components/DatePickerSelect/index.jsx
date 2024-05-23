import { useCallback, useEffect, useRef, useState } from "react";

import Datepicker from "tailwind-datepicker-react";
const options = {
    title: "Ngày bắt đầu",
    autoHide: true,
    todayBtn: true,
    clearBtn: true,
    clearBtnText: "Clear",
    maxDate: new Date("2030-01-01"),
    theme: {
        background: "bg-white dark:bg-gray-800 border border-[#ddd] shadow-2xl dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary",
        todayBtn: "bg-primary dark:text-white",
        clearBtn: "dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary",
        icons: "dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary",
        text: "",
        disabledText: "text-secondary",
        input: "",
        inputIcon: "",
        selected: "bg-primary dark:text-white",
    },
    icons: {
        // () => ReactElement | JSX.Element
        prev: () => (
            <span>
                <i className="fa-solid fa-arrow-left"></i>
            </span>
        ),
        next: () => (
            <span>
                <i className="fa-solid fa-arrow-right"></i>
            </span>
        ),
    },
    datepickerClassNames: "top-12",
    defaultDate: new Date(),
    language: "vi",
    disabledDates: [],
    weekDays: ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"],
    inputNameProp: "date",
    inputIdProp: "date",
    inputPlaceholderProp: "Từ ngày",
    inputDateFormatProp: {
        day: "numeric",
        month: "long",
        year: "numeric",
    },
};


const DatePickerSelect = () => {
    const divRef = useRef(null);
    /* const { placeholder, border, icon, handleSetValue, value, minDate } = Props;
    const [show, setShow] = useState(false);
    const divRef = useRef(null);
    const handleChange = (selectedDate) => {
      handleSetValue(selectedDate);
    };
    const handleClose = (state) => {
      setShow(state);
    };
  
    const formatDate = (date) => {
      if (date != null) {
        const dateObject = new Date(date);
        const formattedDate = new Intl.DateTimeFormat("en-GB", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        }).format(dateObject);
        return formattedDate;
      } else {
        return "";
      }
    }; */

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!divRef.current.contains(event.target)) {
                setShow(false);
            }
        };
        document.addEventListener("click", handleClickOutside);

        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [divRef]);

    return (
        <div ref={divRef}>
            <Datepicker
                options={{ ...options, minDate: new Date("1950-01-01") }}
            // onChange={handleChange}
            // show={show}
            // setShow={handleClose}
            >
                <div
                    className={`border-none flex items-center border-[#ddd] justify-between px-3 rounded-lg`}
                >
                    <input
                        type="text"
                        className="h-9.5 relative dark:text-white text-sm flex-1 focus:outline-none w-full cursor-pointer dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                        placeholder={'dwqdwqdwq'}
                        // value={formatDate(value)}
                        // onFocus={() => setShow(true)}
                        readOnly
                    />
                    {/* {icon && (
            <div className="dark:text-white">
              <i className="fa-regular fa-calendar-plus"></i>
            </div>
          )} */}
                    <div className="dark:text-white">
                        <i className="fa-regular fa-calendar-plus"></i>
                    </div>
                </div>
            </Datepicker>
        </div>
    );
};

export default DatePickerSelect;
