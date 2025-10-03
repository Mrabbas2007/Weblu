"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "@components/Icons";
import { Fade } from "@components/Effects";

const testimonials = [
    {
        text: "وب‌سایت من با سرعت و کیفیت فوق‌العاده‌ای طراحی شد. تجربه کاربری خیلی روان و جذاب بود.",
        name: "مریم رضایی",
        role: "مدیر فروشگاه آنلاین",
        image: "https://i.pravatar.cc/150?img=32",
    },
    {
        text: "همکاری با این تیم باعث شد خیلی سریع‌تر از چیزی که انتظار داشتم به نتیجه برسم.",
        name: "علی احمدی",
        role: "کارآفرین",
        image: "https://i.pravatar.cc/150?img=12",
    },
    {
        text: "پشتیبانی عالی و طراحی حرفه‌ای باعث شد مشتریانم اعتماد بیشتری به کسب‌وکارم پیدا کنند.",
        name: "سارا محمدی",
        role: "صاحب کسب‌وکار",
        image: "https://i.pravatar.cc/150?img=47",
    },
    {
        text: "سایت جدیدم هم زیباست هم سریع. دقیقاً همون چیزی که برای معرفی برندم نیاز داشتم.",
        name: "حسین کریمی",
        role: "مدیر بازاریابی",
        image: "https://i.pravatar.cc/150?img=21",
    },
    {
        text: "از فرآیند طراحی تا تحویل پروژه همه‌چیز خیلی حرفه‌ای و شفاف بود. واقعاً راضی‌ام.",
        name: "نگار موسوی",
        role: "طراح داخلی",
        image: "https://i.pravatar.cc/150?img=36",
    },
];

const FeedbackCarousel = () => {
    const [index, setIndex] = useState(0);

    const next = () => setIndex((i) => (i + 1) % testimonials.length);
    const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

    // Auto-play (pause on hover if you want)
    useEffect(() => {
        const timer = setInterval(next, 7000);
        return () => clearInterval(timer);
    }, []);

    return (
        <Fade className="w-[95%] md:w-[90%] p-8 md:p-12 my-14 mx-auto bg-gradient-to-br from-zinc-50 to-zinc-100 rounded-3xl shadow-lg">
            {/* Title */}
            <h2 className="text-2xl text-center md:text-3xl font-semibold mb-10 text-gray-800">
                نظرات مشتریان ما
            </h2>

            {/* Testimonial card */}
            <div className="max-w-4xl w-full mx-auto">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-10"
                        dir="rtl"
                    >
                        {/* Avatar */}
                        <div className="w-28 h-28 sm:w-32 sm:h-32 overflow-hidden rounded-[30%] shadow-xl">
                            <img
                                src={testimonials[index].image}
                                alt={testimonials[index].name}
                                className="w-full h-full object-cover object-center" // iOS squircle style
                            />
                        </div>

                        {/* Content */}
                        <div className="flex flex-col items-start text-right">
                            <p className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6 max-w-2xl">
                                “{testimonials[index].text}”
                            </p>
                            <div>
                                <h4 className="text-md font-bold text-gray-900">{testimonials[index].name}</h4>
                                <p className="text-sm text-gray-500">{testimonials[index].role}</p>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Arrows */}
            <div className="max-w-4xl w-full flex gap-3 pt-8 mx-auto">
                <button
                    onClick={prev}
                    className="p-3 rounded-full bg-gray-200 hover:bg-indigo-500 hover:text-white transition shadow-md"
                    aria-label="قبلی"
                >
                    <ArrowRight size={20} />
                </button>
                <button
                    onClick={next}
                    className="p-3 rounded-full bg-gray-200 hover:bg-indigo-500 hover:text-white transition shadow-md"
                    aria-label="بعدی"
                >
                    <ArrowLeft size={20} />
                </button>
            </div>
        </Fade>
    );
}

export default FeedbackCarousel;