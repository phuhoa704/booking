import { FaStar } from "react-icons/fa";

const Card = (Props) => {
    const { img, title, rating, descr, discount, pickupTime, arrivalTime, pickupPlace, arrivalPlace, totalTime, minPrice, availableSeats, note } = Props.Props;
    return (
        <div className="w-full border border-[#e0e0e0] rounded-lg bg-white hover:shadow-lg p-4 mb-4">
            <div className="flex gap-2.5">
                <div className="w-[150px]">
                    <img src={img} alt="" className="object-center object-cover w-full h-full" />
                </div>
                <div className="" style={{ width: 'calc(100% - 150px)' }}>
                    <div className="flex justify-between mb-1.5">
                        <div className="flex items-center gap-2.5">
                            <span className="font-semibold">{title}</span>
                            <span className="bg-primary flex items-center text-sm px-1 rounded">
                                <FaStar className="mr-2 text-white" />
                                <span className="text-white">{rating}</span>
                            </span>
                        </div>
                        <span className="text-primary font-bold text-lg">{minPrice}</span>
                    </div>
                    <div className="flex justify-between mb-1.5">
                        <span className="text-sm">{descr}</span>
                        <div
                            className="flex justify-center items-center border border-[#27ae5f] py-[4px] px-[6px] relative rounded text-sm before:absolute before:w-[4px] before:h-[8px] before:bg-white before:left-[-1px] before:top-[8px] before:rounded-tr-lg before:rounded-br-lg before:border-t before:border-r before:border-b before:border-[#27ae5f] after:absolute after:w-[4px] after:h-[8px] after:bg-white after:right-[-1px] after:top-[8px] after:rounded-tl-lg after:rounded-bl-lg after:border-t after:border-l after:border-b after:border-[#27ae5f]"
                        >
                            {discount}
                        </div>
                    </div>
                    <div className="flex justify-between mb-1.5">
                        <div className="flex justify-center">
                            <svg className="TicketPC__LocationRouteSVG-sc-1mxgwjh-4 eKNjJr" xmlns="http://www.w3.org/2000/svg" width="14" height="74" viewBox="0 0 14 74">
                                <path fill="none" stroke="#787878" strokeLinecap="round" strokeWidth="2" strokeDasharray="0 7" d="M7 13.5v46"></path>
                                <g fill="none" stroke="#484848" stroke-width="3">
                                    <circle cx="7" cy="7" r="7" stroke="none"></circle>
                                    <circle cx="7" cy="7" r="5.5"></circle>
                                </g>
                                <path d="M7 58a5.953 5.953 0 0 0-6 5.891 5.657 5.657 0 0 0 .525 2.4 37.124 37.124 0 0 0 5.222 7.591.338.338 0 0 0 .506 0 37.142 37.142 0 0 0 5.222-7.582A5.655 5.655 0 0 0 13 63.9 5.953 5.953 0 0 0 7 58zm0 8.95a3.092 3.092 0 0 1-3.117-3.06 3.117 3.117 0 0 1 6.234 0A3.092 3.092 0 0 1 7 66.95z" fill="#787878">
                                </path>
                            </svg>
                            <div className="ml-[9px] relative">
                                <div className="absolute top-[-7px] flex items-center">
                                    <div className="font-bold text-lg mr-2">{pickupTime}</div>
                                    <div className="whitespace-nowrap">{pickupPlace}</div>
                                </div>
                                <div className="top-[26px] absolute text-sm">{totalTime}</div>
                                <div className="absolute bottom-[-5px] flex items-center">
                                    <div className="font-bold text-lg mr-2">{arrivalTime}</div>
                                    <div className="whitespace-nowrap">{arrivalPlace}</div>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col justify-between items-end">
                            <span>Còn {availableSeats} chỗ trống</span>
                            <button className="p-2 font-semibold bg-[#ffd333] text-[#484848] text-sm">Chọn chuyến</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-right font-bold uppercase">{note}</div>
        </div>
    );
}

export default Card;