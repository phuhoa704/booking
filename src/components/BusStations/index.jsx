import { dataStations } from "../../configs/data";

const BusStations = () => {
    return (
        <section className="my-6">
            <p className="font-semibold text-base xl:text-2xl text-[#3d3d3b] py-2.5">Bến xe khách</p>
            <div className="grid grid-cols-4 gap-4">
                {dataStations.map(ds => (
                    <div className="col-span-full xl:col-span-1 h-48 bg-center bg-cover rounded" style={{ backgroundImage: `url(${ds.img})`}} key={ds.id}>
                        <div className="w-full h-full font-semibold text-white bg-station-card flex justify-center items-end pb-2.5">{ds.title}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default BusStations;