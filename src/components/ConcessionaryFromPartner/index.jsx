import { useState } from "react";
import uudai1 from '../../assets/partner/uudai1.png';
import uudai2 from '../../assets/partner/uudai2.jpg';
import uudai3 from '../../assets/partner/uudai3.jpg';

const ConcessionaryFromPartner = () => {
    const [data] = useState([
        { id: 1, title: 'Giảm 10K khi thanh toán đơn hàng Hagiangbusticket từ 100K tại ví ShopeePay', img: uudai1 },
        { id: 2, title: 'Giảm đến 150K khi thanh toán dịch vụ Hagiangbusticket tại ví VNPAY', img: uudai2 },
        { id: 3, title: 'Nhận ưu đãi vé xe 400K và hoàn đến 15% mỗi tháng khi mở thẻ và chi tiêu cùng thẻ tín dụng VPBank', img: uudai3 },
    ])
    return (
        <section className="my-4">
            <p className="font-semibold text-2xl text-[#3d3d3b] py-2.5">Ưu đãi từ đối tác của Hagiangbusticket</p>
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

export default ConcessionaryFromPartner;