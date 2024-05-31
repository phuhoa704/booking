import { useState } from "react";
import rent1 from '../../assets/carrental/rent1.jpg';
import rent2 from '../../assets/carrental/rent2.jpg';
import rent3 from '../../assets/carrental/rent3.jpg';
import rent4 from '../../assets/carrental/rent4.jpg';

const CarRental = () => {
    const [data] = useState([
        { id: 1, title: 'Thuê xe máy tại Điện Biên', img: rent1 },
        { id: 2, title: 'Thuê xe máy tại Đà Lạt', img: rent2 },
        { id: 3, title: 'Thuê xe máy tại Hà Giang', img: rent3 },
        { id: 4, title: 'Thuê xe máy tại Vũng Tàu', img: rent4 }
    ])
    return (
        <section className="my-4">
            <p className="font-semibold text-base xl:text-2xl text-[#3d3d3b] py-2.5">Thuê xe máy</p>
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

export default CarRental;