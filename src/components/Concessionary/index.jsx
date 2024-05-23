import { useState } from "react";
import uudai1 from '../../assets/concessionary/uudai1.jpg';
import uudai2 from '../../assets/concessionary/uudai2.jpg';
import uudai3 from '../../assets/concessionary/uudai3.png';
import uudai4 from '../../assets/concessionary/uudai4.jpg';
import uudai5 from '../../assets/concessionary/uudai5.png';

const Concessionary = () => {
    const [data] = useState([
        { id: 1, title: 'Ưu đãi khi đặt xe Hải Phòng Travel dành cho tất cả khách hàng khi đặt tại Vexere', img: uudai1 },
        { id: 2, title: 'Nhận ưu đãi x2 khi đặt dịch vụ xe khách khứ hồi', img: uudai2 },
        { id: 3, title: 'Tổng hợp chương trình khuyến mãi trong tháng', img: uudai3 },
        { id: 4, title: 'Giới thiệu bạn mới - Nhận quà khủng từ Vexere', img: uudai4 },
        { id: 5, title: 'Ưu đãi bất ngờ khi đặt Vexere', img: uudai5 },
    ])
    return (
        <section className="my-4">
            <p className="font-semibold text-2xl text-[#3d3d3b] py-2.5">Ưu đãi nổi bật</p>
            <div className="w-full overflow-x-auto scroll-horizontal pb-2">
                <div className="flex gap-4 w-max">
                    {data.map(d => (
                        <div className="w-[300px] flex flex-col shadow-xl border border-[#d9d9d9] rounded" key={d.id}>
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

export default Concessionary;