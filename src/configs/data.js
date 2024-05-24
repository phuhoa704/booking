import tuanquynh from '../assets/customer/testimonial-quynh.jpg';
import phi from '../assets/customer/testimonial-phi.jpg';
import tungo from '../assets/customer/testimonial-tu-ngo.jpg';
import vivu from '../assets/customer/testimonial-buuvivu.jpg';
//
import vne from '../assets/social/logo-vne.png';
import vtv from '../assets/social/logo-vtv.png';
import cesti from '../assets/social/logo-cesti.png';
import dantri from '../assets/social/logo-dantri.png';
import tuoitre from '../assets/social/logo-tuoitre.png';
import fbnc from '../assets/social/logo-fbnc.png';
//
import miendong from '../assets/station/bx-mien-dong.jpg';
import gialam from '../assets/station/bx-gia-lam.jpg';
import nuocngam from '../assets/station/bx-nuoc-ngam.jpg';
import mydinh from '../assets/station/bx-my-dinh.jpg';
//
import vehicle1 from '../assets/rentvehicle/vehicle1.jpg';
import vehicle2 from '../assets/rentvehicle/vehicle2.jpg';
import vehicle3 from '../assets/rentvehicle/vehicle3.jpg';
import vehicle4 from '../assets/rentvehicle/vehicle4.jpg';
//
import sample from '../assets/search/sample.jpeg';


export const dataTestimonial = [
    { id: 1, name: 'Anh Nguyễn Tuấn Quỳnh', position: 'CEO Saigon Books', descr: 'Lần trước tôi có việc gấp phải đi công tác, lên mạng tìm đặt vé xe thì tình cờ tìm thấy Hagiangbusticket. Sau khi tham khảo, tôi quyết định đặt vé và thanh toán. Công nhận rất tiện và nhanh chóng. Chỉ một lúc sau, nhà xe liên hệ xác nhận vé ngay và thông báo thời gian xe dự kiến đón để tôi chuẩn bị. Tôi khá bất ngờ vì nhà xe có thông tin của mình nhanh đến vậy. Chuyến đi hôm đó rất tuyệt. Tôi nhất định sẽ tiếp tục ủng hộ Hagiangbusticket.', img: tuanquynh },
    { id: 2, name: 'Shark Phi', position: 'Giám đốc BSSC', descr: 'Các đối tác của Hagiangbusticket đều là những hãng xe lớn, có uy tín nên tôi hoàn toàn yên tâm khi lựa chọn đặt vé cho bản thân và gia đình. Nhờ hiển thị rõ nhà xe và vị trí chỗ trống trên xe, tôi rất dễ dàng tìm chuyến mình muốn và chỗ mình muốn ngồi. Còn hình thức thanh toán có cả thẻ, ví, tại nhà xe và tốc độ thanh toán thì siêu nhanh, tiết kiệm cho tôi rất nhiều thời gian.', img: phi },
    { id: 3, name: 'Chị Tú Ngô', position: 'YOLA Co-Founder', descr: 'Hagiangbusticket là ứng dụng đầu tiên tôi nghĩ tới khi cần đặt vé xe. Vì không những Hagiangbusticket có nhiều ưu đãi lớn mà còn có nhiều hãng xe chất lượng, tôi được tuỳ chọn chỗ yêu thích nên tôi rất hài lòng.', img: tungo },
    { id: 4, name: 'Bữu Vi Vu', position: 'Travel tiktoker', descr: 'Tôi thường chọn đặt vé tại Hagiangbusticket mỗi khi du lịch cùng người thân, bạn bè. Bên cạnh việc đặt vé nhanh chóng, thuận tiện, Hagiangbusticket còn có các đợt Flashsale định kỳ lên đến 50%. Săn vé thành công vào các dịp này giúp tôi tiết kiệm đáng kể chi phí đi lại cho mỗi chuyến đi.', img: vivu },
]

export const dataSocials = [
    { id: 1, url: 'https://vnexpress.net/Hagiangbusticket-ho-tro-5-000-ve-tet-2021-cho-sinh-vien-4211920.html', img: vne },
    { id: 2, url: 'https://www.youtube.com/watch?v=du_TpvYVNg0', img: vtv },
    { id: 3, url: 'http://cesti.gov.vn/chi-tiet/3403/doi-moi-sang-tao/khoi-nghiep-voi-he-thong-ban-ve-xe-truc-tuyen', img: cesti },
    { id: 4, url: 'https://dantri.com.vn/kinh-doanh/cong-ty-co-phan-ve-xe-re-goi-von-thanh-cong-tu-cac-nha-dau-tu-uy-tin-20191225100127703.htm', img: dantri },
    { id: 5, url: 'https://tuoitre.vn/blog/quy-dau-tu-nhat-va-singapore-tiep-suc-Hagiangbusticketcom-767367.htm', img: tuoitre },
    { id: 6, url: 'https://www.youtube.com/watch?v=qT30wzsFKGw', img: fbnc },
]

export const dataStations = [
    { id: 1, img: miendong, title: 'Bến xe Miền Đông' },
    { id: 2, img: gialam, title: 'Bến xe Gia Lâm' },
    { id: 3, img: nuocngam, title: 'Bến xe Nước Ngầm' },
    { id: 4, img: mydinh, title: 'Bến xe Mỹ Đình' },
]

export const footerSuggestions = [
    {
        id: 1, title: 'Tuyền đường', items: [
            { id: '1.1', title: 'Xe đi Buôn Mê Thuột từ Sài Gòn' },
            { id: '1.2', title: 'Xe đi Vũng Tàu từ Sài Gòn' },
            { id: '1.3', title: 'Xe đi Nha Trang từ Sài Gòn' },
            { id: '1.4', title: 'Xe đi Đà Lạt từ Sài Gòn' },
            { id: '1.5', title: 'Xe đi Sapa từ Hà Nội' },
        ]
    },
    {
        id: 2, title: 'Xe Limousine', items: [
            { id: '2.1', title: 'Xe Limousine đi Đà Lạt từ Sài Gòn' },
            { id: '2.2', title: 'Xe Limousine đi Vũng Tàu từ Sài Gòn' },
            { id: '2.3', title: 'Xe Limousine đi Nha Trang từ Sài Gòn' },
            { id: '2.4', title: 'Xe Limousine đi Hải Phòng từ Hà Nội' },
            { id: '2.5', title: 'Xe Limousine đi Hạ Long từ Hà Nội' },
        ]
    },
    {
        id: 3, title: 'Tin tức', items: [
            { id: '3.1', title: 'Xe giường nằm Limousine – đỉnh cao mới của ngành xe khách' },
            { id: '3.2', title: 'Xe limousine đi Vũng Tàu: Tổng hợp top 6 xe chất lượng cao' },
            { id: '3.3', title: 'Review xe limousine đi Đà Lạt: những câu hỏi thường gặp' },
            { id: '3.4', title: 'Xe limousine đi Sapa: Tổng hợp top các hãng xe chất lượng cao' }
        ]
    },
    {
        id: 4, title: 'Bến xe', items: [
            { id: '4.1', title: 'Bến xe Miền Đông' },
            { id: '4.2', title: 'Bến xe Trung tâm Đà Nẵng' },
            { id: '4.3', title: 'Bến xe Gia Lâm' },
            { id: '4.4', title: 'Bến xe Mỹ Đình' }
        ]
    },
    {
        id: 5, title: 'Nhà xe', items: [
            { id: '5.1', title: 'Xe Liên Hưng' },
            { id: '5.2', title: 'Xe Long Vân Limousine' },
            { id: '5.3', title: 'Xe Vie Limousine' },
            { id: '5.4', title: 'Xe Cúc Tùng' },
            { id: '5.5', title: 'Xe An Phú Buslines' },
            { id: '5.6', title: 'Xe Bằng Phấn' },
            { id: '5.7', title: 'Xe Hà Lan' },
            { id: '5.8', title: 'Xe Tiến Oanh' },
            { id: '5.9', title: 'Xe Hạnh Cafe' },
            { id: '5.10', title: 'Xe Tân Kim Chi' },
            { id: '5.11', title: 'Xe Phúc Xuyên' },
        ]
    }
]

export const footerSupport = [
    { id: 1, title: 'Hướng dẫn thanh toán' },
    { id: 2, title: 'Quy chế Hagiangbusticket.com' },
    { id: 3, title: 'Chính sách bảo mật thông tin' },
    { id: 4, title: 'Chính sách bảo mật thanh toán' },
    { id: 5, title: 'Chính sách và quy trình giải quyết tranh chấp, khiếu nại' },
    { id: 6, title: 'Câu hỏi thường gặp' },
    { id: 7, title: 'Tra cứu đơn hàng' },
]

export const footerAbout = [
    { id: 1, title: 'Phần mềm đại lý' },
    { id: 1, title: 'Giới Thiệu Hagiangbusticket.com' },
    { id: 1, title: 'Tuyển dụng' },
    { id: 1, title: 'Tin tức' },
    { id: 1, title: 'Liên hệ' },
]

export const location = [
    { value: 1, label: 'Hà Nội' },
    { value: 2, label: 'Cần Thơ' },
    { value: 3, label: 'TP. Hồ Chí Minh' },
    { value: 4, label: 'An Giang' },
    { value: 5, label: 'Trà Vinh' },
]

export const vehicles = [
    { id: 1, name: 'Xe Limousine 9-11 VIP', descr: 'Ford Transit, Hyundai Solati', img: vehicle1 },
    { id: 2, name: 'Xe ghế ngồi 4-45 chỗ', descr: 'Ford Transit, Hyundai County, Thaco Town', img: vehicle2 },
    { id: 3, name: 'Xe Cabin 20-22 VIP', descr: 'Thaco Mobihome ,Tracomeco Hyundai', img: vehicle3 },
    { id: 4, name: 'Xe giường nằm 34-38-40', descr: 'Thaco Mobihome, Tracomeco Hyundai', img: vehicle4 },
]

export const experiences = [
    {
        id: 1,
        content: 'Mình thuê 1 xe 29 chỗ trong 2 ngày cho công ty đi du lịch ở Vũng Tàu. Bạn nhân viên tư vấn rất nhiệt tình. Do sếp yêu cầu có hợp đồng mới chuyển tiền cọc nên giữa trưa nắng bạn cầm hợp đồng qua tận công ty mình cách mấy cây số lận.\r\nXe khá mới và sạch sẽ. Bác tài xế rất vui tính và lịch sự. Lần tới cần thuê xe đi đâu nhất định sẽ tiếp tục ủng hộ Hagiangbusticket.',
        author: 'Anh Thuận',
        to: 'Thuê xe du lịch đi Vũng Tàu'
    },
    {
        id: 2,
        content: 'Mình có thuê 1 xe Limousine 9 chỗ từ Hà Nội đi Mộc Châu vào đúng dịp có giải chạy marathon nên giá hơi cao một chút.\r\nMình từ Sài Gòn ra nên nhiều thứ ko rành nhưng được các bạn nhân viên Hagiangbusticket tư vấn rất cẩn thận. Hôm từ Mộc Châu về dù trước có hẹn đón 7r nhưng vì sợ trễ chuyến bay trưa nên mình đề nghị xe đón từ 5h sáng. Dù vậy không phải phụ thu thêm. Rất cảm ơn team nhé.',
        author: 'Chị Linh',
        to: 'Thuê xe du lịch đi Mộc Châu'
    },
    {
        id: 3,
        content: 'Tết 2022 tôi có thuê xe tại VXR nhưng gặp sự cố về xe rất nghiêm trọng. Thật ra đó là 1 trải nghiệm ko mấy thú vị nhưng tôi thấy bạn sale rất có trách nhiệm với khách hàng. Ngày mùng 1 tết nhưng bạn đã mất nguyên ngày để có thể hỗ trợ tôi 1 cách tốt nhất. Tết năm nay tôi có quay lại để thuê xe tiếp và cảm thất chuyến đi cực kì hài lòng, tài xế cẩn thận vui tính, xe mới, giá cả phải chăng với dịch vụ chất lượng.',
        author: 'Anh Ngọc Anh',
        to: 'Thuê xe du lịch đi Nha Trang'
    },
]

export const searchResult = [
    { id: 1, img: sample, title: 'Hải Phòng Travel (Đất Cảng)', descr: 'Limousine 11 chỗ', rating: '4.5 (556)', discount: 'Giảm 50%', pickupTime: '07:01', arrivalTime: '08:31', pickupPlace: 'Hà Nội', arrivalPlace: 'Hải Phòng', totalTime: '1h30m', minPrice: 'Từ 230.000đ', availableSeats: 9, note: 'KHÔNG CẦN THANH TOÁN TRƯỚC' },
    { id: 2, img: sample, title: 'Hải Phòng Travel (Đất Cảng)', descr: 'Limousine 11 chỗ', rating: '4.5 (556)', discount: 'Giảm 50%', pickupTime: '07:01', arrivalTime: '08:31', pickupPlace: 'Hà Nội', arrivalPlace: 'Hải Phòng', totalTime: '1h30m', minPrice: 'Từ 230.000đ', availableSeats: 9, note: 'KHÔNG CẦN THANH TOÁN TRƯỚC' },
    { id: 3, img: sample, title: 'Hải Phòng Travel (Đất Cảng)', descr: 'Limousine 11 chỗ', rating: '4.5 (556)', discount: 'Giảm 50%', pickupTime: '07:01', arrivalTime: '08:31', pickupPlace: 'Hà Nội', arrivalPlace: 'Hải Phòng', totalTime: '1h30m', minPrice: 'Từ 230.000đ', availableSeats: 9, note: 'KHÔNG CẦN THANH TOÁN TRƯỚC' },
    { id: 4, img: sample, title: 'Hải Phòng Travel (Đất Cảng)', descr: 'Limousine 11 chỗ', rating: '4.5 (556)', discount: 'Giảm 50%', pickupTime: '07:01', arrivalTime: '08:31', pickupPlace: 'Hà Nội', arrivalPlace: 'Hải Phòng', totalTime: '1h30m', minPrice: 'Từ 230.000đ', availableSeats: 9, note: 'KHÔNG CẦN THANH TOÁN TRƯỚC' },
]