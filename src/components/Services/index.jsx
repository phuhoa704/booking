import { useState } from "react";
import sv1 from '../../assets/services/service1.jpg';
import sv2 from '../../assets/services/service2.jpg';
import sv3 from '../../assets/services/service3.jpg';
import sv4 from '../../assets/services/service4.png';

const Services = () => {
    const [data] = useState([
        { id: 1, title: 'Thuê xe 4 chỗ, 7 chỗ từ Sân bay Nội Bài đi Nội thành Hà Nội', img: sv1 },
        { id: 2, title: 'Thuê xe du lịch: limousine, ghế ngồi, cabin, giường nằm tại Vexere', img: sv2 },
        { id: 3, title: 'Thuê xe máy giá rẻ, chất lượng tại Vexere', img: sv3 },
        { id: 3, title: 'Xe buýt Hop On Hop Off ở Thành phố Hồ Chí Minh', img: sv4 }
    ])
    return (
        <section className="my-4">
            <p className="font-semibold text-2xl text-[#3d3d3b] py-2.5">Dịch vụ nổi bật</p>
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

export default Services;