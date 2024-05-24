import { dataSocials } from "../../configs/data";

const SocialMedia = () => {
    return (
        <section className="my-4">
            <p className="font-semibold text-2xl text-[#3d3d3b] py-2.5">Hagiangbusticket đã được nhắc đến trên</p>
            <div className="grid grid-cols-6 gap-4">
                {dataSocials.map(ds => (
                    <div className="col-span-1" key={ds.id}>
                        <a href={ds.url} key={ds.id} className="flex justify-center">
                            <img src={ds.img} className="h-[44px]" alt="" />
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default SocialMedia;