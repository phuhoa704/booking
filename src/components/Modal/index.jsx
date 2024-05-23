import { motion, AnimatePresence } from "framer-motion";

const Modal = (Props) => {
    const { outlet, showStatus, handleShow, position } = Props;
    let variantsToTop = {
        hidden: { opacity: 0, y: -100 },
        visible: { opacity: 1, y: 0 },
    };
    let variantsToRight = {
        hidden: { opacity: 0, x: 100 },
        visible: { opacity: 1, x: 0 },
    };

    const handleCLick = (e) => {
        e.stopPropagation();
    };
    return (
        <AnimatePresence>
            {showStatus && (
                <>
                    <div
                        onClick={() => handleShow(false)}
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-[99999] outline-none focus:outline-none"
                    >
                        <div className="relative w-auto rounded xl:max-h-[90vh] max-h-[80vh] mx-auto max-w-full flex">
                            <motion.div
                                variants={
                                    position == "right" ? variantsToRight : variantsToTop
                                }
                                initial="hidden"
                                animate="visible"
                                exit="hidden"
                                className="max-w-full"
                            >
                                <div
                                    className="flex max-h-full max-w-full"
                                    onClick={(e) => handleCLick(e)}
                                >
                                    {outlet}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                    <div
                        onClick={() => handleShow(false)}
                        className="opacity-50 fixed inset-0 z-[9999] bg-black"
                    ></div>
                </>
            )}
        </AnimatePresence>
    );
}

export default Modal;