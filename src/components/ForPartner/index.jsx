import { useState } from "react";
import partner1 from '../../assets/partners/partner1.jpg';
import partner2 from '../../assets/partners/partner2.jpg';
import partner3 from '../../assets/partners/partner3.jpg';
import partner4 from '../../assets/partners/partner4.jpg';

const ForPartner = () => {
    const [data] = useState([
        { id: 1, title: 'Xe Hà Lan giảm ngay 50% nhân dịp khai trương tuyến xe chất lượng cao', img: partner1 },
        { id: 2, title: 'Nhận ngay tiền thường khi giới thiệu Phần mềm Nhà xe Vexere', img: partner2 },
        { id: 3, title: 'Vexere đồng hành cùng nhà xe Vie Limousine chuyển đổi số thành công', img: partner3 },
        { id: 4, title: 'Vexere đồng hành cùng nhà xe An Anh Limousine chuyển đổi số thành công', img: partner4 }
    ])
    return (
        <section className="my-4">
            <p className="font-semibold text-2xl text-[#3d3d3b] py-2.5">Dành cho đối tác của Vexere</p>
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

export default ForPartner;