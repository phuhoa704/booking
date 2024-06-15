import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getDetailNews } from "../../redux/actions/News";

const NewsDetail = () => {
    const dispatch = useDispatch();
    const { news_slug } = useParams();
    const { detailNews, listNews } = useSelector(state => state.news);
    useEffect(() => {
        if(listNews.length > 0) {
            if(news_slug) {
                const finder = listNews.find(l => l.slug === news_slug);
                if(finder) {
                    dispatch(getDetailNews(finder.id));
                }
            }
        }
    },[news_slug, listNews])
    return (
        <div className="w-full bg-[#2020200A] py-6 pt-16">
            <div className="w-full xl:w-9/12 m-auto mb-6 px-2 xl:px-0">
                <p className="font-semibold text-xl">{detailNews.name}</p>
                <p className="">{detailNews.description}</p>
                <div dangerouslySetInnerHTML={{ __html: detailNews.content }}></div>
            </div>
        </div>
    );
}

export default NewsDetail;