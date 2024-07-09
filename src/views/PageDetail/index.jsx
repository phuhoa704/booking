import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getPageDetail } from "../../redux/actions/Pages";

const PageDetail = () => {
    const dispatch = useDispatch();
    const { page_slug } = useParams();
    const { pageDetail } = useSelector(state => state.pages);
    useEffect(() => {
        if(page_slug) {
            dispatch(getPageDetail(page_slug));
        }
    }, [page_slug])
    return (
        <div className="w-full bg-[#2020200A] py-6 pt-16">
            <div className="w-full xl:w-9/12 m-auto mb-6 px-2 xl:px-0">
                <div dangerouslySetInnerHTML={{ __html: pageDetail.content }}></div>
            </div>
        </div>
    );
}

export default PageDetail;