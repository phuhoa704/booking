import { useState } from "react";
import travel1 from '../../assets/travel/travel1.jpg';
import travel2 from '../../assets/travel/travel2.jpg';
import travel3 from '../../assets/travel/travel3.jpg';
import travel4 from '../../assets/travel/travel4.jpg';

const Travel = () => {
    const [data] = useState([
        { id: 1, title: 'Thuê xe Sài Gòn đi Vũng Tàu', img: travel1 },
        { id: 2, title: 'Thuê xe Sài Gòn đi Mũi Né', img: travel2 },
        { id: 3, title: 'Thuê xe Sài Gòn đi Đà Lạt', img: travel3 },
        { id: 3, title: 'Thuê xe Sài Gòn đi Hồ Tràm', img: travel4 }
    ])
    return (
        <section className="my-4">
            <p className="font-semibold text-base xl:text-2xl text-[#3d3d3b] py-2.5">Thuê xe du lịch</p>
            <div className="w-full overflow-x-auto scroll-horizontal pb-2">
                <div className="flex gap-4 w-max">
                    {data.map(d => (
                        <div className="w-[320px] flex flex-col shadow-xl border border-[#d9d9d9] rounded" key={d.id}>
                            <img src={d.img} className="w-full h-36 rounded-tl rounded-tr" alt="" />
                            <div className="p-2.5 rounded-bl rounded-br">
                                <p className="font-semibold">{d.title}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Travel;