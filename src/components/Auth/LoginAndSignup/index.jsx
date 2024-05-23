const LoginAndSignupForm = (Props) => {
    const { handleShow, handleShowVerify, handleChangeState, state } = Props;
    const handleSubmit = (e) => {
        e.preventDefault();
        handleShow(false);
        handleShowVerify(true);
    }
    return (
        <>
            <div className="px-6 rounded py-5 bg-white w-modalBaseWidth flex max-h-full dark:bg-boxdark">
                <div className="flex max-h-full flex-col items-center w-full text-base">
                    <div className="pt-2 pb-3 border-b border-[#ddd] w-full">
                        <h2 className="m-0 text-lg text-center capitalize font-semibold">
                            {state === 'login' ? 'Đăng nhập' : 'Đăng ký'}
                        </h2>
                    </div>
                    <form className="text-sm pt-3 w-full max-h-full overflow-overlay custom-scroll" onSubmit={handleSubmit}>
                        <small>Số điện thoại</small>
                        <div className="grid grid-cols-3 gap-2.5">
                            <div className="col-span-1">
                                <select className="w-full border border-[#d9d9d9] focus:border-primary bg-white p-2">
                                    <option>(Viet Nam) +84</option>
                                </select>
                            </div>
                            <div className="col-span-2">
                                <input required className="bg-white w-full border border-[#d9d9d9] h-full px-2.5" />
                            </div>
                            <div className="col-span-3">
                                <button type="submit" className="w-full border border-[#d9d9d9] text-base py-2.5 hover:text-primary hover:border-primary">Tiếp tục</button>
                            </div>
                            <div className="col-span-full relative flex py-5 items-center">
                                <div className="flex-grow border-t border-gray-400"></div>
                                <span className="flex-shrink mx-4 text-gray-400">hoặc</span>
                                <div className="flex-grow border-t border-gray-400"></div>
                            </div>
                            <div className="col-span-full">
                                <button type="button" className="w-full bg-primary text-white text-base py-2.5">Đăng nhập với Google</button>
                            </div>
                            {(state === 'login') ? (
                                <span className="col-span-full">Bạn chưa có tài khoản? <button type="button" className="text-primary" onClick={() => {
                                    handleChangeState('signup');
                                }}>Đăng ký</button></span>
                            ) : (
                                <span className="col-span-full">Bạn đã có tài khoản? <button type="button" className="text-primary" onClick={() => {
                                    handleChangeState('login');
                                }}>Đăng nhập</button></span>
                            )}
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default LoginAndSignupForm;