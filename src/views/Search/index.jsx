import { useNavigate } from 'react-router-dom';
import { ROUTER } from '../../configs/router';
import { useState } from 'react';
//datepicker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
// react select
import Select from 'react-select';

import { location, searchResult, filters } from '../../configs/data';
import Collapse from '../../components/Collapse';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import { formatChangeNumber } from '../../helpers/number';
import Card from '../../components/Card';
import Footer from '../../components/Footer';
import { FaSlidersH, FaSort, FaRegClock, FaBus, FaArrowLeft, FaLongArrowAltRight } from "react-icons/fa";
import Modal from '../../components/Modal';
import ResponsiveFilter from '../../components/ResponsiveFilter';
import ResponsiveSort from '../../components/ResponsiveSort';
import ResponsiveTime from '../../components/ResponsiveTime';
import ResponsiveStation from '../../components/ResponsiveStation';
import ResponsiveSearch from '../../components/ResponsiveSearch';

const Search = () => {
    const navigate = useNavigate();
    const [startDate, setStartDate] = useState(null);
    const [activeTab, setActiveTab] = useState(1)
    const [firstPlace, setFirstPlace] = useState(null);
    const [secondPlace, setSecondPlace] = useState(null);
    const [numSeat, setNumSeat] = useState(1);
    const [rangeVals, setRangeVals] = useState({
        min: 5,
        max: 10
    })
    const [sortOpts] = useState([
        { id: 1, label: 'Mặc định', value: '1' },
        { id: 2, label: 'Giờ đi sớm nhất', value: '2' },
        { id: 3, label: 'Giờ đi muộn nhất', value: '3' },
        { id: 4, label: 'Đánh giá cao nhất', value: '4' },
        { id: 5, label: 'Giá tăng dần', value: '5' },
        { id: 6, label: 'Giá giảm dần', value: '6' },
    ])
    //responsive state
    const [modalFilter, setModalFilter] = useState(false);
    const [modalSort, setModalSort] = useState(false);
    const [modalTime, setModalTime] = useState(false);
    const [modalStation, setModalStation] = useState(false);
    const [modalSearch, setModalSearch] = useState(false);
    return (
        <>
            <Modal
                handleShow={setModalFilter}
                showStatus={modalFilter}
                outlet={<ResponsiveFilter />}
            />
            <Modal
                handleShow={setModalSort}
                showStatus={modalSort}
                outlet={<ResponsiveSort />}
            />
            <Modal
                handleShow={setModalTime}
                showStatus={modalTime}
                outlet={<ResponsiveTime />}
            />
            <Modal
                handleShow={setModalStation}
                showStatus={modalStation}
                outlet={<ResponsiveStation />}
            />
            <Modal
                handleShow={setModalSearch}
                showStatus={modalSearch}
                outlet={<ResponsiveSearch />}
            />
            <div className="w-full bg-[#2020200A] py-6 pt-16">
                <div className="w-full xl:w-9/12 m-auto mb-6 px-2 xl:px-0">
                    <div className="w-full py-2.5 px-3 flex xl:hidden items-center justify-between bg-[#1890ff] text-white rounded">
                        <div className="flex gap-2.5 items-center">
                            <FaArrowLeft className='text-lg' onClick={() => navigate(ROUTER.HOME)} />
                            <div className="flex flex-col" onClick={() => setModalSearch(true)}>
                                <div className="font-semibold flex items-center gap-1.5">
                                    Hà Nội
                                    <FaLongArrowAltRight />
                                    Hải Phòng
                                </div>
                                <div className='text-sm'>CN, 01/06/2024</div>
                            </div>
                        </div>
                        <div className="underline font-semibold text-sm" onClick={() => setModalSearch(true)}>
                            Thay đổi
                        </div>
                    </div>
                    <div className="w-full hidden xl:block bg-white rounded-lg shadow-secondary mb-4 border border-[#e0e0e0]">
                        <div className="flex justify-center py-3">
                            <div className="flex pt-1.5 md:pt-0 xl:pt-3">
                                <div
                                    onClick={() => setActiveTab(1)}
                                    className={`px-3 py-2 mr-3 transition-all duration-300 ease-linear cursor-pointer text-sm xl:text-xl font-semibold ${(activeTab === 1) ? 'text-primary border-primary border-b-2' : ''}`}
                                >
                                    <i className="fa-solid fa-bus"></i> Xe khách
                                </div>
                                <div
                                    onClick={() => navigate(ROUTER.RENT)}
                                    className={`px-3 py-2 mr-3 transition-all duration-300 ease-linear cursor-pointer text-sm xl:text-xl font-semibold ${(activeTab === 2) ? 'text-primary border-primary border-b-2' : ''}`}
                                >
                                    <i className="fa-solid fa-taxi"></i> Thuê xe
                                </div>
                            </div>
                        </div>
                        <div className="grid grid-cols-5 gap-2.5 w-full relative border-t border-[#ddd] py-3.5 px-3 dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                            <div className="border border-[#d9d9d9] col-span-full xl:col-span-4">
                                <div className="grid grid-cols-4 h-full">
                                    <div className="col-span-2 xl:col-span-1 relative">
                                        <Select
                                            options={location}
                                            classNames={{
                                                menu: () => 'text-left',
                                                // placeholder: (styles) => ({...styles, ...dotPlaceholder('#2474E5')})
                                            }}
                                            value={firstPlace}
                                            onChange={(e) => setFirstPlace(e)}
                                            placeholder={<div><i className="fa-solid fa-location-arrow text-primary text-lg"></i> Nơi bắt đầu</div>}
                                            className='hidden-select-border'
                                        />
                                        <div
                                            onClick={() => {
                                                let tempFirst = firstPlace;
                                                let tempSecond = secondPlace;
                                                setFirstPlace(tempSecond);
                                                setSecondPlace(tempFirst);
                                            }}
                                            className="absolute w-8 h-8 right-0 top-1/2 translate-x-[50%] translate-y-[-50%] cursor-pointer z-10 rounded-full bg-[#cfd1d0] flex items-center justify-center"
                                        >
                                            <i className="fa-solid fa-arrow-right-arrow-left"></i>
                                        </div>
                                    </div>
                                    <div className="col-span-2 xl:col-span-1 border-[#d9d9d9] xl:border-r">
                                        <Select
                                            options={location}
                                            classNames={{
                                                menu: () => 'text-left',
                                            }}
                                            value={secondPlace}
                                            onChange={(e) => setSecondPlace(e)}
                                            placeholder={<div><i className="fa-solid fa-location-dot text-[#ed4532] text-lg"></i> Nơi đến</div>}
                                            className='hidden-select-border'
                                        />
                                    </div>
                                    <div className="col-span-2 xl:col-span-1 border-t border-r xl:border-t-0 border-[#d9d9d9] ">
                                        <DatePicker className="px-2.5 py-2.5 bg-white border border-[#d9d9d9] w-full h-full rounded border-none focus:border-none" placeholderText="Ngày đi" selected={startDate} onChange={(date) => setStartDate(date)} />
                                    </div>
                                    <div className="col-span-2 xl:col-span-1 border-t border-[#d9d9d9] xl:border-none">
                                        <DatePicker className="px-2.5 py-2.5 bg-white border border-[#d9d9d9] w-full h-full rounded border-none focus:border-none" placeholderText="Ngày về" selected={startDate} onChange={(date) => setStartDate(date)} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-span-full xl:col-span-1">
                                <button className='bg-[#ffd333] py-2.5 text-center w-full rounded'>
                                    <span className='font-semibold' onClick={() => navigate(ROUTER.SEARCH)}>Tìm kiếm</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="w-full grid grid-cols-7 gap-4">
                        <div className="col-span-full xl:col-span-2 hidden xl:block">
                            <div className="w-full bg-white p-2.5 border border-[#e0e0e0] rounded-lg mb-4">
                                <p className='font-semibold mb-2.5'>Sắp xếp</p>
                                <ul>
                                    {sortOpts.map(s => (
                                        <li key={s.id}>
                                            <div class="inline-flex items-center">
                                                <label class="relative flex items-center p-3 rounded-full cursor-pointer" htmlFor="html">
                                                    <input name="type" value={s.value} type="radio"
                                                        class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-full border border-blue-gray-200 text-gray-900 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                                                        id="html" />
                                                    <span
                                                        class="absolute text-gray-900 transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 16 16" fill="currentColor">
                                                            <circle data-name="ellipse" cx="8" cy="8" r="8"></circle>
                                                        </svg>
                                                    </span>
                                                </label>
                                                <label class="mt-px text-gray-700 cursor-pointer select-none text-sm" htmlFor="html">
                                                    {s.label}
                                                </label>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="w-full bg-white p-2 5 border border-[#e0e0e0] rounded-lg">
                                <div className='flex justify-between mb-2.5'>
                                    <span className='font-semibold text-lg'>Lọc</span>
                                    <span className='text-primary underline font-semibold'>Xóa lọc</span>
                                </div>
                                <ul>
                                    <li className='border-b border-[#d9d9d9] mb-3'>
                                        <Collapse
                                            title={'Giờ đi'}
                                            content={
                                                <InputRange
                                                    maxValue={24}
                                                    minValue={0}
                                                    formatLabel={value => `${value}:00`}
                                                    value={rangeVals}
                                                    onChange={value => setRangeVals(value)}
                                                    onChangeComplete={value => console.log(value)}
                                                />
                                            }
                                        />
                                    </li>
                                    <li className='border-b border-[#d9d9d9] mb-3'>
                                        <Collapse
                                            title={'Nhà xe'}
                                            content={
                                                <ul>
                                                    <li>
                                                        <div className="flex items-center cursor-pointer">
                                                            <input type="checkbox" class="w-5 h-5 shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" />
                                                            <label for="hs-default-checkbox" class="text-sm ms-3">Anh Huy (Hải Phòng) (96)</label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="flex items-center cursor-pointer">
                                                            <input type="checkbox" class="w-5 h-5 shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" />
                                                            <label for="hs-default-checkbox" class="text-sm ms-3">AGO Hoàng Phương (34)</label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="flex items-center cursor-pointer">
                                                            <input type="checkbox" class="w-5 h-5 shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" />
                                                            <label for="hs-default-checkbox" class="text-sm ms-3">Anh Huy Đất Cảng (15)</label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="flex items-center cursor-pointer">
                                                            <input type="checkbox" class="w-5 h-5 shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" />
                                                            <label for="hs-default-checkbox" class="text-sm ms-3">Cát Bà Limousine (4)</label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="flex items-center cursor-pointer">
                                                            <input type="checkbox" class="w-5 h-5 shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" />
                                                            <label for="hs-default-checkbox" class="text-sm ms-3">Cát Bà Express (3)</label>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div class="flex items-center cursor-pointer">
                                                            <input type="checkbox" class="w-5 h-5 shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" />
                                                            <label for="hs-default-checkbox" class="text-sm ms-3">Cát Bà Go Easy Limousine (3)</label>
                                                        </div>
                                                    </li>
                                                </ul>
                                            }
                                        />
                                    </li>
                                    <li className='border-b border-[#d9d9d9] mb-3'>
                                        <Collapse
                                            title={'Giá vé'}
                                            content={
                                                <InputRange
                                                    maxValue={2000000}
                                                    minValue={0}
                                                    step={50000}
                                                    formatLabel={value => `${formatChangeNumber(value.toString())}đ`}
                                                    value={rangeVals}
                                                    onChange={value => setRangeVals(value)}
                                                    onChangeComplete={value => console.log(value)}
                                                />
                                            }
                                        />
                                    </li>
                                    <li className='border-b border-[#d9d9d9] mb-3'>
                                        <Collapse
                                            title={'Điểm đón'}
                                            content={
                                                <ul>
                                                    {location.map(l => (
                                                        <li>
                                                            <div className="flex items-center cursor-pointer">
                                                                <input type="checkbox" value={l.value} class="w-5 h-5 shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" />
                                                                <label for="hs-default-checkbox" class="text-sm ms-3">{l.label}</label>
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            }
                                        />
                                    </li>
                                    <li className='border-b border-[#d9d9d9] mb-3'>
                                        <Collapse
                                            title={'Điểm trả'}
                                            content={
                                                <ul>
                                                    {location.map(l => (
                                                        <li>
                                                            <div className="flex items-center cursor-pointer">
                                                                <input type="checkbox" value={l.value} class="w-5 h-5 shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" />
                                                                <label for="hs-default-checkbox" class="text-sm ms-3">{l.label}</label>
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            }
                                        />
                                    </li>
                                    <li className='border-b border-[#d9d9d9] mb-3'>
                                        <Collapse
                                            title={'Vị trí ghế'}
                                            content={
                                                <div className='flex justify-between items-center'>
                                                    <span className='text-sm'>Số ghế trống</span>
                                                    <div className="flex items-center gap-4">
                                                        <button
                                                            onClick={() => {
                                                                if (numSeat > 1) {
                                                                    setNumSeat(numSeat - 1);
                                                                }
                                                            }}
                                                            className={`rounded-full p-1.5 text-sm w-7 h-7 flex justify-center items-center border-2 ${(numSeat < 2) ? 'border-[#e0e0e0] bg-[#f7f7f7] text-[#e0e0e0]' : 'bg-[#e3edfc] border-primary text-primary'}`}>
                                                            <i className="fa-solid fa-minus"></i>
                                                        </button>
                                                        <span>{numSeat}</span>
                                                        <button
                                                            onClick={() => {
                                                                setNumSeat(numSeat + 1);
                                                            }}
                                                            className={`rounded-full p-1.5 text-sm w-7 h-7 flex justify-center items-center border-2 bg-[#e3edfc] border-primary text-primary`}>
                                                            <i className="fa-solid fa-plus"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            }
                                        />
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-span-full xl:col-span-5">
                            <div className="my-3 flex items-center overflow-x-auto w-full">
                                <span className='hidden xl:block'>Lọc phổ biến</span>
                                <div className="w-full overflow-x-auto scroll-horizontal pb-2">
                                    <div className="flex gap-4 w-max">
                                        {filters.map(f => (
                                            <div key={f.id} className="rounded w-32 h-16 bg-cover" style={{ backgroundImage: `url(${f.img})` }}></div>
                                        ))}
                                    </div>
                                </div>
                                {/* <div className="overflow-x-auto flex gap-2.5 items-center w-max">
                                {filters.map(f => (
                                    <div key={f.id} className="rounded w-32 h-16 bg-cover" style={{ backgroundImage: `url(${f.img})` }}></div>
                                ))}
                            </div> */}
                            </div>
                            {searchResult.map(sr => (
                                <Card Props={sr} />
                            ))}
                            <div className="w-full text-center">
                                <button className='bg-primary py-2.5 px-2 text-white text-sm rounded'>Xem thêm chuyến</button>
                            </div>
                            <div className="fixed w-full bottom-10 block xl:hidden">
                                <div className="rounded-xl bg-[#0D2E58] grid grid-cols-4 divide-x p-2.5 text-white text-sm w-10/12 m-auto">
                                    <div className="col-span-1 flex items-center justify-center gap-2 cursor-pointer" onClick={() => setModalFilter(true)}>
                                        <FaSlidersH />
                                        <span>Lọc</span>
                                    </div>
                                    <div className="col-span-1 flex items-center justify-center gap-2 cursor-pointer" onClick={() => setModalSort(true)}>
                                        <FaSort />
                                        <span>Sắp xếp</span>
                                    </div>
                                    <div className="col-span-1 flex items-center justify-center gap-2 cursor-pointer" onClick={() => setModalTime(true)}>
                                        <FaRegClock />
                                        <span>Giờ đi</span>
                                    </div>
                                    <div className="col-span-1 flex items-center justify-center gap-2 cursor-pointer" onClick={() => setModalStation(true)}>
                                        <FaBus />
                                        <span>Nhà xe</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>
    );
}

export default Search;