import { Fade } from "@components/Effects";
import { PaintBoard, CodeSquar, Wordpress, ShopingCart } from "@components/Icons";


const Service = () => {
    const services = [
        {
            title: 'کدنویسی سفارشی',
            icon: <CodeSquar size={50} />,
            description: 'توسعه نرم‌افزار و وب‌سایت با استفاده از بهترین فناوری‌ها، مطابق نیازهای خاص شما و با کیفیت بالا.'
        },
        {
            title: 'توسعه وردپرس',
            icon: <Wordpress size={50} />,
            description: 'ساخت و سفارشی‌سازی سایت‌های وردپرسی، شامل افزونه‌ها، قالب‌ها و بهینه‌سازی عملکرد سایت.'
        },
        {
            title: 'طراحی UI/UX',
            icon: <PaintBoard size={50} />,
            description: 'طراحی رابط کاربری جذاب و تجربه کاربری بی‌نظیر برای وب‌سایت و اپلیکیشن شما.'
        },
        {
            title: 'فروشگاه های آنلاین',
            icon: <ShopingCart size={50} />,
            description: 'راه‌اندازی فروشگاه‌های اینترنتی حرفه‌ای با امکانات کامل مدیریت محصولات و پرداخت آنلاین.'
        },
    ];


    return (
        <div className="container mx-auto py-4 flex flex-col justify-center items-center gap-8 mt-28 ">
            <Fade direction="down" >
                <h2 className="text-3xl font-semibold "> خدمات برجسته ما </h2>
            </Fade>

            <Fade
                direction="down"
                className="w-[90%] md:w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
                delay={0.4}
                staggerChildren={0.2}
            >
                {services.map((service, idx) => (
                    <div
                        key={idx}
                        className="flex flex-col items-center gap-3 text-center bg-white/20 backdrop-blur-md 
                        rounded-xl border border-gray-300 p-6 shadow-lg min-h-[280px]"
                    >
                        <div className="text-blue-500 mb-4 text-4xl">
                            {service.icon}
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                        <p className="text-gray-700">{service.description}</p>
                    </div>
                ))}
            </Fade>
        </div>
    )
}


export default Service;