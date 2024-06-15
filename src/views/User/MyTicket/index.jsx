import { useDispatch, useSelector } from 'react-redux';
import Breadscrum from '../../../components/Breadscrum';
import UserSidebar from '../../../components/UserSidebar';
import { useState } from 'react';
import { STATUS } from '../../../configs/constants';
import { showOrder } from '../../../redux/actions/Orders';
import Modal from '../../../components/Modal';
import OrderDetail from '../../../components/OrderDetail';

const MyTicket = () => {
    const dispatch = useDispatch();
    const [openTab, setOpenTab] = useState(1);
    const [modalDetail, setModalDetail] = useState(false);
    const [tableList] = useState([
        { title: "Hiện tại", id: 1 },
        { title: "Đã đi", id: 2 },
        { title: "Đã hủy", id: 3 },
    ]);
    const { orderList, orderCompleted, orderCanceled } = useSelector(state => state.order);
    return (
        <>
        <Modal 
            showStatus={modalDetail}
            handleShow={setModalDetail}
            outlet={<OrderDetail />}
        />
        <div>
            <Breadscrum site='Vé của tôi' />
            <div className="grid grid-cols-5 gap-4">
                <div className="col-span-full xl:col-span-1">
                    <UserSidebar />
                </div>
                <div className="col-span-full xl:col-span-4">
                    <div className="items-end bg-white w-full border border-[#d9d9d9] grid grid-cols-3 rounded">
                        {tableList?.map((t) => (
                            <div
                                onClick={() => {
                                    setOpenTab(t.id)
                                }}
                                className={`text-center py-3 text-sm cursor-pointer hover:text-primary ${openTab === t.id ? 'text-primary border-b-2 border-primary font-semibold' : ''}`}
                            >
                                <button>{t.title}</button>
                            </div>
                        ))}
                    </div>
                    {(openTab === 1) && (
                        <div className="rounded-sm max-h-full overflow-auto border border-stroke w-full bg-white lg:p-0 px-5 pt-6 pb-2.5 shadow-default sm:px-7.5 xl:pb-1">
                            <div className="max-w-full max-h-full">
                                <table className="w-full max-h-full table-auto">
                                    <thead>
                                        <tr className="bg-primary text-sm text-left">
                                            <th className="p-2 font-medium text-white xl:p-2 text-center">STT</th>
                                            <th className="p-2 font-medium text-white">Mã</th>
                                            <th className="p-2 font-medium text-white">Họ và tên</th>
                                            <th className="p-2 font-medium text-white">Số điện thoại</th>
                                            <th className="p-2 font-medium text-white">Trạng thái</th>
                                            <th className="p-2 font-medium text-white"></th>
                                        </tr>
                                    </thead>
                                    <tbody className="max-h-full overflow-auto">
                                        {orderList.map((o, idx) => (
                                            <tr className="text-sm">
                                                <td className="border-b border-[#eee] p-2 text-center">{idx + 1}</td>
                                                <td className="border-b border-[#eee] p-2">{o.order_code}</td>
                                                <td className="border-b border-[#eee] p-2">{o.name}</td>
                                                <td className="border-b border-[#eee] p-2">{o.phone}</td>
                                                <td className={`border-b border-[#eee] p-2`}>
                                                    <span className={`inline-flex rounded-full p-1 text-white ${(o.status === 0) && 'bg-pending'} ${(o.status === 1) && 'bg-approved'} ${(o.status === 2) && 'bg-completed'} ${(o.status === 3) && 'bg-canceled'}`}>{STATUS.find(s => s.value === o.status) ? STATUS.find(s => s.value === o.status).label : 'Đang cập nhật'}</span>
                                                </td>
                                                <td className="border-b border-[#eee] p-2">
                                                    <button className="bg-primary text-white text-center p-2 rounded" onClick={() => {
                                                        dispatch(showOrder(o.id))
                                                        setModalDetail(!modalDetail);
                                                    }}>Chi tiết</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                    {(openTab === 2) && (
                        <div className="rounded-sm max-h-full overflow-auto border border-stroke w-full bg-white lg:p-0 px-5 pt-6 pb-2.5 shadow-default sm:px-7.5 xl:pb-1">
                            <div className="max-w-full max-h-full">
                                <table className="w-full max-h-full table-auto">
                                    <thead>
                                        <tr className="bg-primary text-sm text-left">
                                            <th className="p-2 font-medium text-white xl:p-2 text-center">STT</th>
                                            <th className="p-2 font-medium text-white">Mã</th>
                                            <th className="p-2 font-medium text-white">Họ và tên</th>
                                            <th className="p-2 font-medium text-white">Số điện thoại</th>
                                            <th className="p-2 font-medium text-white">Trạng thái</th>
                                            <th className="p-2 font-medium text-white"></th>
                                        </tr>
                                    </thead>
                                    <tbody className="max-h-full overflow-auto">
                                        {orderCompleted.map((o, idx) => (
                                            <tr className="text-sm">
                                                <td className="border-b border-[#eee] p-2 text-center">{idx + 1}</td>
                                                <td className="border-b border-[#eee] p-2">{o.order_code}</td>
                                                <td className="border-b border-[#eee] p-2">{o.name}</td>
                                                <td className="border-b border-[#eee] p-2">{o.phone}</td>
                                                <td className={`border-b border-[#eee] p-2`}>
                                                    <span className={`inline-flex rounded-full p-1 text-white bg-completed`}>{STATUS.find(s => s.value === o.status) ? STATUS.find(s => s.value === o.status).label : 'Đang cập nhật'}</span>
                                                </td>
                                                <td className="border-b border-[#eee] p-2">
                                                    <button className="bg-primary text-white text-center p-2 rounded" onClick={() => dispatch(showOrder(o.id))}>Chi tiết</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                    {(openTab === 3) && (
                        <div className="rounded-sm max-h-full overflow-auto border border-stroke w-full bg-white lg:p-0 px-5 pt-6 pb-2.5 shadow-default sm:px-7.5 xl:pb-1">
                            <div className="max-w-full max-h-full">
                                <table className="w-full max-h-full table-auto">
                                    <thead>
                                        <tr className="bg-primary text-sm text-left">
                                            <th className="p-2 font-medium text-white xl:p-2 text-center">STT</th>
                                            <th className="p-2 font-medium text-white">Mã</th>
                                            <th className="p-2 font-medium text-white">Họ và tên</th>
                                            <th className="p-2 font-medium text-white">Số điện thoại</th>
                                            <th className="p-2 font-medium text-white">Trạng thái</th>
                                            <th className="p-2 font-medium text-white"></th>
                                        </tr>
                                    </thead>
                                    <tbody className="max-h-full overflow-auto">
                                        {orderCanceled.map((o, idx) => (
                                            <tr className="text-sm">
                                                <td className="border-b border-[#eee] p-2 text-center">{idx + 1}</td>
                                                <td className="border-b border-[#eee] p-2">{o.order_code}</td>
                                                <td className="border-b border-[#eee] p-2">{o.name}</td>
                                                <td className="border-b border-[#eee] p-2">{o.phone}</td>
                                                <td className={`border-b border-[#eee] p-2`}>
                                                    <span className={`inline-flex rounded-full p-1 text-white bg-canceled`}>{STATUS.find(s => s.value === o.status) ? STATUS.find(s => s.value === o.status).label : 'Đang cập nhật'}</span>
                                                </td>
                                                <td className="border-b border-[#eee] p-2">
                                                    <button className="bg-primary text-white text-center p-2 rounded" onClick={() => dispatch(showOrder(o.id))}>Chi tiết</button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
        </>
    );
}

export default MyTicket;