import { CallIcon, CustomerService, InstagramIcon, Logo, TelegramIcon } from "@components/Icons";
import { motion } from "motion/react";
import { useState } from "react";
import { Link } from "react-router-dom";


const Footer = () => {


    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<null | "ok" | "error">(null);

    const handleNewsletter = (e: React.FormEvent) => {
        e.preventDefault();
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!re.test(email)) {
            setStatus("error");
            setTimeout(() => setStatus(null), 2500);
            return;
        }
        // fake success (replace with API call)
        setStatus("ok");
        setEmail("");
        setTimeout(() => setStatus(null), 2500);
    };

    const scrollTop = () => {
        if (typeof window === "undefined") return;
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const year = new Date().getFullYear();


    return (
        <footer className="text-white bg-gradient-to-tr from-[#0f1724] via-[#111827] to-[#0b1220]">
            {/* CTA */}
            <div className="w-[92%] mx-auto py-12">
                <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gradient-to-r from-[#111827]/40 to-[#111827]/20 backdrop-blur-md border border-white/6 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row md:items-center gap-6 md:gap-10"
                >
                    <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl font-bold leading-tight">
                            طراحی و توسعه وب‌سایت حرفه‌ای؛ زیبا، سریع و متناسب با برند شما
                        </h3>
                        <p className="mt-2 text-gray-300 max-w-2xl">
                            از طراحی تا اجرا و پشتیبانی؛ با وبلو یک وب‌سایت حرفه‌ای و مطمئن برای کسب‌وکار خود داشته باشید.
                        </p>

                        <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
                            {/* primary button with bottom-to-top white slide */}
                            <button
                                className="relative overflow-hidden group rounded-lg px-5 py-3 bg-[#696FC7] text-white font-medium inline-flex items-center justify-center"
                                aria-label="شروع رایگان"
                                onClick={() => alert("شروع رایگان — مسیر ثبت‌نام یا دمو")}
                            >
                                <span className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-lg z-0"></span>
                                <span className="relative z-10 group-hover:text-[#696FC7] transition-colors duration-300">
                                    مشاوره رایگان
                                </span>
                            </button>

                            <button
                                className="rounded-lg px-5 py-3 bg-white/6 border border-white/8 hover:bg-white/10 transition text-sm"
                                onClick={() => alert("درخواست دموی زنده")}
                                aria-label="درخواست دموی زنده"
                            >
                                مشاهده نمونه‌کارها 
                            </button>
                        </div>
                    </div>

                    {/* Trust badges or quick stats */}
                    <div className="flex max-lg:flex-col gap-4 items-center justify-center">
                        <div className="text-center">
                            <div className="text-2xl font-semibold"> بهینه برای سئو </div>
                            <div className="text-xs text-gray-400"> طراحی اختصاصی برای هر مشتری </div>
                        </div>
                        <div className="h-12 w-px bg-white/6 max-lg:w-2/3 max-lg:h-px " />
                        <div className="text-center">
                            <div className="text-2xl font-semibold">پشتیبانی 24/7</div>
                            <div className="text-xs text-gray-400">تحویل سریع پروژه</div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Links + Newsletter */}
            <div className="w-[92%] mx-auto pb-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand & contact */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <div className="w-12 h-12 rounded-[28%] bg-white/5 flex items-center justify-center">
                                <Logo />
                            </div>
                            <div>
                                <div className="font-bold text-lg"> وبلو </div>
                                <div className="text-xs text-gray-400">طراحی آسان، سریع و مقیاس‌پذیر</div>
                            </div>
                        </div>

                        <p className="text-sm text-gray-300 max-w-sm leading-relaxed">
                            از ایده تا وب‌سایت؛ طراحی اختصاصی و توسعه حرفه‌ای با وردپرس و کدنویسی.
                        </p>

                        <div className="space-y-2 text-sm text-gray-300">
                            <div className="flex items-center gap-2">
                                <CustomerService size={20} />
                                <span>پشتیبانی: support@gmail.com</span>
                            </div>

                            <div className="flex items-center gap-2">
                                <CallIcon size={20} />
                                <span>تلفن: 021-12345678</span>
                            </div>
                        </div>

                        <div className="flex gap-3 mt-3">
                            <a aria-label="linkedin" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 transition" href="#">
                                <InstagramIcon />
                            </a>
                            <a aria-label="instagram" className="w-9 h-9 rounded-lg bg-white/5 flex items-center justify-center hover:bg-white/10 transition" href="#">
                                <TelegramIcon />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-semibold mb-4">منابع</h4>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li><Link to="#" className="hover:text-white transition">آموزش‌ها</Link></li>
                            <li><Link to="#" className="hover:text-white transition">وبلاگ</Link></li>
                            <li><Link to="#" className="hover:text-white transition">سوالات متداول</Link></li>
                            <li><Link to="#" className="hover:text-white transition">محصولات مشابه</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-semibold mb-4">خبرنامه</h4>
                        <p className="text-sm text-gray-300 mb-4">برای دریافت آخرین قالب‌ها، تخفیف‌ها و آموزش‌ها ایمیل خود را وارد کنید.</p>

                        <form onSubmit={handleNewsletter} className="flex gap-2">
                            <label htmlFor="footer-email" className="sr-only">ایمیل</label>
                            <input
                                id="footer-email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="ایمیل شما"
                                className="flex-1 rounded-lg px-3 py-2 bg-white/6 placeholder:text-gray-400 focus:ring-2 focus:ring-[#696FC7] outline-none"
                                aria-invalid={status === "error"}
                                aria-describedby="newsletter-msg"
                            />
                            <button
                                type="submit"
                                className="relative group rounded-lg px-4 py-2 bg-[#696FC7] text-white font-medium overflow-hidden"
                                aria-label="عضویت"
                            >
                                <span className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-lg z-0"></span>
                                <span className="relative z-10 group-hover:text-[#696FC7] transition-colors duration-300">عضویت</span>
                            </button>
                        </form>

                        <div id="newsletter-msg" className="mt-3 min-h-[1.25rem]">
                            {status === "ok" && <div className="text-sm text-green-400">ثبت‌نام با موفقیت انجام شد ✓</div>}
                            {status === "error" && <div className="text-sm text-rose-400">ایمیل نامعتبر است</div>}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom legal */}
            <div className="border-t border-white/6">
                <div className="w-[92%] mx-auto py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-2">
                            <Logo />
                            <span className="font-medium"> وبلو </span>
                        </div>
                        <span>©{year} وبلو. تمام حقوق محفوظ است.</span>
                    </div>

                    <div className="flex items-center gap-3">
                        <Link to="#" className="hover:text-white transition">قوانین و مقررات</Link>
                        <span className=" text-gray-600">|</span>
                        <Link to="#" className="hover:text-white transition">حریم خصوصی</Link>
                        <button
                            onClick={scrollTop}
                            aria-label="بازگشت به بالا"
                            className="ml-4 rounded-full p-2 bg-white/5 hover:bg-white/10 transition"
                            title="بازگشت به بالا"
                        >
                            ↑
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;