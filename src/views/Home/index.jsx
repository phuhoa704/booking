import background from '../../assets/leader-board.png';
import DatePickerSelect from '../../components/DatePickerSelect';

const Home = () => {
    return (
        <section className='w-full bg-center bg-cover flex justify-center items-center' style={{ backgroundImage: `url(${background})`, height: `calc(100vh - 180px)` }}>
            <div className="w-11/12 text-center">
                <p className='text-3xl text-white font-semibold'>Vexere - Cam kết hoàn 150% nếu nhà xe không giữ chỗ</p>
                <div className="w-full bg-white rounded-lg shadow-secondary">
                    <div className="flex w-full relative border border-[#ddd] rounded-lg items-center dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary">
                        <div className="flex-1">
                            <DatePickerSelect
                                /* placeholder="Từ ngày"
                                border="border-none"
                                icon={false} */
                            />
                        </div>
                        <span>
                            <i className="fa-solid fa-arrow-right-long"></i>
                        </span>
                        <div className="flex-1 pl-4">
                            {/* <DatePickerSelect
                                border="border-none"
                                icon={false}
                                placeholder="Đến ngày"
                            /> */}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;