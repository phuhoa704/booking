import { Link } from "react-router-dom";

const Breadscrum = (Props) => {
    const { site } = Props;
    return (
        <div className="flex items-center gap-2.5 text-sm mb-3">
            <Link to={'/'}  className="text-primary">Trang chủ</Link>
            <i className="fa-solid fa-chevron-right text-sm"></i>
            <span>{site}</span>
        </div>
    );
}

export default Breadscrum;