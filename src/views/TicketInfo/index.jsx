const TicketInfo = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
    }
    return (
        <div className="flex justify-center bg-[#f2f2f2]" style={{ height: 'calc(100vh - 72px)'}}>
            <div className="pt-10 px-2.5 w-2/5">
                <p className="text-[#484848] font-bold">Nhập thông tin đơn hàng</p>
                <form onSubmit={handleSubmit}>
                    <div className="flex flex-col my-3">
                        <label htmlFor="code">
                            Mã đơn hàng
                        </label>
                        <input className="px-2.5 py-2 bg-white text-[#d9d9d9] rounded border border-[#d9d9d9]" type="text" name="code" id="code" placeholder="Nhập mã đơn hàng"/>
                    </div>
                    <div className="flex flex-col my-3">
                        <label htmlFor="phone">
                            Số điện thoại
                        </label>
                        <input className="px-2.5 py-2 bg-white text-[#d9d9d9] rounded border border-[#d9d9d9]" type="text" name="phone" id="phone" placeholder="Nhập số điện thoại người đặt"/>
                    </div>
                    <div className="my-3">
                        <button className="bg-primary text-white text-center w-full py-2 rounded">Xem thông tin đơn hàng</button>
                    </div>
                </form>
                <div className="bg-[#dddddd] p-4">
                    <p className="font-semibold">Lưu ý</p>
                    <p>Trường hợp bạn không thể hủy đơn hàng qua mạng hoặc muốn đổi chuyến khác vui lòng liên hệ Vexere qua số điện thoại 1900 888684.</p>
                </div>
            </div>
        </div>
    );
}

export default TicketInfo;