import { useState } from "react";
import news1 from '../../assets/news/news1.jpg';
import news2 from '../../assets/news/news2.jpg';
import news3 from '../../assets/news/news3.jpg';
import news4 from '../../assets/news/news4.png';

const News = () => {
    const [data] = useState([
        { id: 1, title: '[Phóng sự HTV9] Hagiangbusticket và công cuộc cách mạng hoá ngành vận tải hành khách', img: news1 },
        { id: 2, title: '[Phóng sự VTV9] Đặt dịch vụ xe khách nhanh chóng, tiện lợi, nhiều ưu đãi tại Hagiangbusticket', img: news2 },
        { id: 3, title: 'Bộ Thông tin - Truyền thông công nhận Hagiangbusticket là Nền tảng số phục vụ người dân 2022', img: news3 },
        { id: 4, title: 'Hagiangbusticket - G8 Open Tour đồng hành cùng chương trình Tết Đong Đầy, Trao Yêu Thương 2023', img: news4 }
    ])
    return (
        <section className="my-4">
            <p className="font-semibold text-base xl:text-2xl text-[#3d3d3b] py-2.5">Tin tức</p>
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

export default News;