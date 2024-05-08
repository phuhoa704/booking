import React, { useEffect, useRef, useState } from "react";
import Datepicker from "tailwind-datepicker-react";

const DatePickerSelect = () => {
    const options = {
        title: "Ngày bắt đầu",
        autoHide: true,
        todayBtn: true,
        clearBtn: true,
        clearBtnText: "Clear",
        maxDate: new Date("2030-01-01"),
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
    };
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
        <div>
            <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                    </svg>
                </div>
                <input name="start" type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Select date start" />
            </div>
        </div>
    );
}

export default DatePickerSelect;