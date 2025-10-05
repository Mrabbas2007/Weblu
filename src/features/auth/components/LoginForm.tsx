import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Lock, Mail } from "@components/Icons";
// import { Mail, Lock } from "@components/Icons";

const LoginForm = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const [errors, setErrors] = useState<{ email?: string; password?: string }>(
        {}
    );

    const validate = () => {
        const newErrors: typeof errors = {};
        if (!formData.email) newErrors.email = "ایمیل الزامی است";
        else if (!/^\S+@\S+\.\S+$/.test(formData.email))
            newErrors.email = "ایمیل معتبر نیست";
        if (!formData.password) newErrors.password = "رمز عبور الزامی است";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validate()) return;
        console.log(formData);
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col justify-center h-full px-8"
        >
            <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">
                ورود به حساب
            </h2>

            <form
                onSubmit={handleSubmit}
                className="space-y-5 w-full max-w-sm mx-auto"
            >
                {/* Email */}
                <div className="relative">
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder=" "
                        value={formData.email}
                        onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                        }
                        className={`peer w-full rounded-xl border px-3.5 pt-4 pb-2 text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${errors.email ? "border-red-400" : "border-gray-300"
                            }`}
                    />
                    <label
                        htmlFor="email"
                        className="absolute right-3 top-2.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-[13px] peer-focus:-top-2 bg-white px-2 peer-focus:text-xs peer-focus:text-indigo-500"
                    >
                        ایمیل
                    </label>
                    {errors.email && (
                        <p className="text-xs text-red-500 mt-1">{errors.email}</p>
                    )}
                    <Mail className="size-5 text-gray-800 absolute top-1/2 -translate-y-1/2 left-2 " />
                </div>

                {/* Password */}
                <div className="relative">
                    <input
                        type="password"
                        name="password"
                        id="password"
                        placeholder=" "
                        value={formData.password}
                        onChange={(e) =>
                            setFormData({ ...formData, password: e.target.value })
                        }
                        className={`peer w-full rounded-xl border px-3.5 pt-4 pb-2 text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${errors.password ? "border-red-400" : "border-gray-300"
                            }`}
                    />
                    <label
                        htmlFor="password"
                        className="absolute right-3 top-2.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-[13px] peer-focus:-top-2 bg-white px-2 peer-focus:text-xs peer-focus:text-indigo-500"
                    >
                        رمز عبور
                    </label>
                    {errors.password && (
                        <p className="text-xs text-red-500 mt-1">{errors.password}</p>
                    )}
                    <Lock className="size-5 text-gray-600 absolute top-1/2 -translate-y-1/2 left-2 " />
                </div>

                <div className="flex justify-between items-center text-sm">
                    <a href="/reset-password" className="text-indigo-500 hover:underline">
                        فراموشی رمز؟
                    </a>
                </div>

                <button
                    type="submit"
                    className="cursor-pointer w-full bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-xl font-medium transition-all"
                >
                    ورود
                </button>

                <p className="text-sm text-center text-gray-600 mt-4">
                    حساب ندارید؟{" "}
                    <Link to="/register" className="text-indigo-500 hover:underline">
                        ثبت‌نام کنید
                    </Link>
                </p>
            </form>
        </motion.div>
    );
};

export default LoginForm;
