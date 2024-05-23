import { useState } from "react";
import hotnews1 from '../../assets/hotnews/hotnews1.jpg';
import hotnews2 from '../../assets/hotnews/hotnews2.jpg';
import hotnews3 from '../../assets/hotnews/hotnews3.jpg';
import hotnews4 from '../../assets/hotnews/hotnews4.jpg';
import hotnews5 from '../../assets/hotnews/hotnews5.jpg';

const HotNews = () => {
    const [data] = useState([
        { id: 1, title: 'Tận hưởng nhiều ưu đãi và các tính năng mới cùng Siêu ứng dụng Vexere', img: hotnews1 },
        { id: 2, title: 'Vexere chính thức ra mắt dịch vụ đặt vé tàu hỏa', img: hotnews2 },
        { id: 3, title: '“Bảo hiểm chuyến đi” chính thức ra mắt tại Vexere', img: hotnews3 },
        { id: 3, title: 'Chủ động và an tâm hơn trong mọi hành trình với tính năng GPS định vị xe khách', img: hotnews4 },
        { id: 3, title: 'Chương trình tích điểm đổi quà tại Vexere', img: hotnews5 },
    ])
    return (
        <section className="my-4">
            <p className="font-semibold text-2xl text-[#3d3d3b] py-2.5">Vexere có gì mới?</p>
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

export default HotNews;