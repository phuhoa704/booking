import Breadscrum from '../../../components/Breadscrum';
import UserSidebar from '../../../components/UserSidebar';
import { useState } from 'react';

const MyTicket = () => {
    const [openTab, setOpenTab] = useState(1);
    const [tableList] = useState([
        { title: "Hiện tại", id: 1 },
        { title: "Đã đi", id: 2 },
        { title: "Đã hủy", id: 3 },
    ]);
    return (
        <div>
            <Breadscrum site='Vé của tôi' />
            <div className="grid grid-cols-5 gap-4">
                <div className="col-span-full xl:col-span-1">
                    <UserSidebar />
                </div>
                <div className="col-span-full xl:col-span-4">
                    <div className="items-end bg-white w-full xl:w-9/12 border border-[#d9d9d9] grid grid-cols-3 rounded">
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
                </div>
            </div>
        </div>
    );
}

export default MyTicket;