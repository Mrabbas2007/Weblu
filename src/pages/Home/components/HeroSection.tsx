import { woman } from "@assets/images";


const HeroSection = () => {


    return (
        <div className="w-[90%] h-[80vh] mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-4 py-4">
            {/* Text Section */}
            <div className="flex-1 flex justify-start items-center px-4">
                <div className="max-w-3xl space-y-6">
                    <h1 className="text-3xl md:text-4xl xl:text-5xl YekanBlack">
                        تجربه دیجیتال بی‌نظیر با وبسایت حرفه‌ای
                    </h1>
                    <p className="text-sm md:text-lg text-justify leading-relaxed">
                        ما در وبلو با طراحی و کدنویسی سفارشی و توسعه وردپرس،
                        حضور آنلاین شما را قدرتمند می‌کنیم.
                        راه‌کارهای ما به شما کمک می‌کند تا در دنیای دیجیتال بدرخشید.
                    </p>
                    <div className="flex flex-wrap gap-4 mt-6">
                        <button className="py-2 px-6 rounded-lg border-2 border-zinc-300 hover:bg-zinc-300 hover:text-zinc-800 transition duration-150">
                            شروع پروژه
                        </button>
                        <button className="py-2 px-6 rounded-lg border-2 border-zinc-800 bg-zinc-800 text-zinc-300 hover:text-zinc-800 hover:bg-transparent hover:border-zinc-800 transition duration-150">
                            مشاوره رایگان
                        </button>
                    </div>
                </div>
            </div>

            {/* Image Section */}
            <div className="flex-1 flex justify-center md:justify-end px-4">
                <img
                    src={woman}
                    alt="طراحی سایت وبلو"
                    className="rounded-xl w-full max-w-lg aspect-video object-cover"
                />
            </div>
        </div>
    )
}

export default HeroSection;