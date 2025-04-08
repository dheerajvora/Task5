import Slider from "react-slick";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";

function SampleNextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <div
            className="next-arrow"
            onClick={onClick}
        >
            <FaChevronRight size={44} />
        </div>
    );
}

function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <div
            className="prev-arrow"
            onClick={onClick}
        >
            <FaChevronLeft size={44} />
        </div>
    );
}
export default function Banner() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        customPaging: (i: any) => (
            <div
               className="dots-item"
            >
            </div>
        )
    };

    return (
        <Slider {...settings}>
            {Array.from({ length: 3 }).map((_, index) => (
                <div>
                    <div className="bg-primary flex items-center justify-center relative overflow-hidden banner-item" style={{ backgroundImage: "url('/images/banner/hero-1.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
                        <div className="container mx-auto px-4 py-10 md:py-16 flex flex-col md:flex-row items-center">
                            {/* Content */}
                            <div className="md:w-1/2 text-white z-10 mb-8 md:mb-0 text-center md:text-left" >
                                <h3 className="sub-title">SUMMER 2020</h3>
                                <h1 className="banner-title">NEW COLLECTION</h1>
                                <p className="banner-para">
                                    We know how large objects will act, but things on a small scale.
                                </p>
                                <button className="banner-button">SHOP NOW</button>
                            </div>

                            <div className="md:w-1/2 flex justify-center md:justify-end">
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </Slider>
    )
}