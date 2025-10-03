import { coding } from "@assets/images";
import { PortfolioCard } from "@components/Cards"
import { Fade } from "@components/Effects";


const sampleProjects = [
    {
        id: "1",
        title: "فروشگاه اینترنتی موبایل",
        category: "وب‌سایت فروشگاهی",
        description:
            "یک فروشگاه اینترنتی حرفه‌ای با سرعت بالا و طراحی ریسپانسیو برای خرید آنلاین موبایل و لوازم جانبی.",
        thumbnail: coding,
    },
    {
        id: "2",
        title: "پنل ادمین شرکتی",
        category: "پنل مدیریتی",
        description:
            "پنل مدیریت داخلی برای کنترل کاربران و پروژه‌ها با استفاده از React و TypeScript ساخته شده است.",
        thumbnail: coding,
    },
    {
        id: "3",
        title: "وب اپلیکیشن مدیریت سفر",
        category: " وب اپلیکیشن ",
        description: "یک اپلیکیشن موبایل با رابط کاربری جذاب برای برنامه‌ریزی و مدیریت سفرها، شامل نقشه تعاملی، برنامه روزانه و یادآوری‌ها.",
        thumbnail: coding,
    },
];



const Portfolio = () => {

    return (
        <div className="container mx-auto py-4 flex flex-col justify-center items-center gap-8 mt-28 ">
            <Fade direction="down" >
                <h2 className="text-3xl font-semibold "> نمونه کارهای اخیر ما </h2>
            </Fade>
            <Fade direction="down" staggerChildren={0.3} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full mx-auto my-4">
                {sampleProjects.map((project) => (
                    <PortfolioCard key={project.id} {...project} />
                ))}
            </Fade>
        </div>
    )
}

export default Portfolio;