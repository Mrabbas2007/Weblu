import { Computer, CustomerService, IdeaIcon, UsersGroup } from "@components/Icons";

const features = [
    {
        title: "راهکارهای سفارشی",
        description:
            "ما وبسایتی را طراحی می‌کنیم که دقیقاً با نیازها و اهداف منحصر به فرد کسب‌وکار شما هماهنگ باشد.",
        icon: <IdeaIcon size={28} />,
    },
    {
        title: "تیم متخصص",
        description:
            "تیم ما متشکل از طراحان و توسعه‌دهندگان با تجربه است که به بهترین کیفیت متعهد هستند.",
        icon: <UsersGroup size={28} />,
    },
    {
        title: "پشتیبانی پس از راه‌اندازی",
        description:
            "پس از تحویل پروژه، در کنار شما هستیم تا از عملکرد صحیح و بهینه وبسایت‌تان اطمینان حاصل کنید.",
        icon: <CustomerService size={28} />,
    },
    {
        title: "طراحی مدرن و واکنش‌گرا",
        description:
            "وبسایت شما روی هر دستگاهی از موبایل تا دسکتاپ ظاهری عالی و عملکردی بی‌نقص خواهد داشت.",
        icon: <Computer size={28} />,
    },
];

const WhyUs = () => (
    <section className="w-[90%] mx-auto py-16">
        <h2 className="text-3xl font-bold text-center mb-14">
            چرا ما را انتخاب کنید؟
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">
            {features.map((item, i) => (
                <div
                    key={i}
                    className="group relative flex flex-col items-center p-6 rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300"
                >
                    {/* Icon */}
                    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-indigo-50 text-indigo-600 mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                        {item.icon}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold mb-3">{item.title}</h3>

                    {/* Description */}
                    <p className="text-sm text-gray-600 leading-relaxed">
                        {item.description}
                    </p>

                    {/* Subtle hover border animation */}
                    <span className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-indigo-200 transition-all duration-300 pointer-events-none"></span>
                </div>
            ))}
        </div>
    </section>
)


export default WhyUs;