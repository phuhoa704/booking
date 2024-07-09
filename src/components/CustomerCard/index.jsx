const CustomerCard = (Props) => {
    const { img, name, position, descr } = Props.Props;
    return (
        <div className="rounded p-4 grid grid-cols-5 gap-6 bg-white border border-[#d9d9d9] shadow-primary w-11/12 m-auto h-[350px]">
            <div className="col-span-2">
                <img src={img} className="h-48 object-cover object-center-top w-full" alt="" />
                <p className="text-xl font-semibold text-[#2474E5]">{name}</p>
                <p className="text-sm font-semibold text-[#474747]">{position}</p>
            </div>
            <div className="col-span-3">
                <p className="text-sm">{descr}</p>
            </div>
        </div>
    );
}

export default CustomerCard;