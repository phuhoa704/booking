import './style.css';

const Loading = () => {
    return (
        <div className="flex z-[50] items-center justify-center bg-blacktransparent fixed top-0 left-0 right-0 bottom-0">
            <div className="lds-ripple">
                <div></div>
                <div></div>
            </div>
        </div>
    );
}

export default Loading;