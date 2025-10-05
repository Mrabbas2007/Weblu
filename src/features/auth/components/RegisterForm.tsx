"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Lock, Mail, User } from "@components/Icons";

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    const validate = () => {
        const newErrors: typeof errors = {};
        if (!formData.fullName) newErrors.fullName = "نام کامل الزامی است";
        if (!formData.email) newErrors.email = "ایمیل الزامی است";
        else if (!/^\S+@\S+\.\S+$/.test(formData.email))
            newErrors.email = "ایمیل معتبر نیست";
        if (!formData.password) newErrors.password = "رمز عبور الزامی است";
        else if (formData.password.length < 6)
            newErrors.password = "رمز عبور باید حداقل ۶ کاراکتر باشد";
        if (formData.password !== formData.confirmPassword)
            newErrors.confirmPassword = "تکرار رمز عبور مطابقت ندارد";
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
                ایجاد حساب جدید
            </h2>

            <form
                onSubmit={handleSubmit}
                className="space-y-5 w-full max-w-sm mx-auto"
            >
                {/* Full name */}
                <div className="relative">
                    <input
                        type="text"
                        name="fullName"
                        id="fullName"
                        placeholder=" "
                        value={formData.fullName}
                        onChange={(e) =>
                            setFormData({ ...formData, fullName: e.target.value })
                        }
                        className={`peer w-full rounded-xl border px-3.5 pt-4 pb-2 text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${errors.fullName ? "border-red-400" : "border-gray-300"
                            }`}
                    />
                    <label
                        htmlFor="fullName"
                        className="absolute right-3 top-2.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-[13px] peer-focus:-top-2 bg-white px-2 peer-focus:text-xs peer-focus:text-indigo-500"
                    >
                        نام کامل
                    </label>
                    {errors.fullName && (
                        <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>
                    )}
                    <User className="size-5 text-gray-800 absolute top-1/2 -translate-y-1/2 left-2 " />
                </div>

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

                {/* Confirm Password */}
                <div className="relative">
                    <input
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        placeholder=" "
                        value={formData.confirmPassword}
                        onChange={(e) =>
                            setFormData({ ...formData, confirmPassword: e.target.value })
                        }
                        className={`peer w-full rounded-xl border px-3.5 pt-4 pb-2 text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${errors.confirmPassword ? "border-red-400" : "border-gray-300"
                            }`}
                    />
                    <label
                        htmlFor="confirmPassword"
                        className="absolute right-3 top-2.5 text-gray-500 text-sm transition-all peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-[13px] peer-focus:-top-2 bg-white px-2 peer-focus:text-xs peer-focus:text-indigo-500"
                    >
                        تکرار رمز عبور
                    </label>
                    {errors.confirmPassword && (
                        <p className="text-xs text-red-500 mt-1">
                            {errors.confirmPassword}
                        </p>
                    )}
                    <Lock className="size-5 text-gray-600 absolute top-1/2 -translate-y-1/2 left-2 " />
                </div>

                <button
                    type="submit"
                    className="w-full cursor-pointer bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-xl font-medium transition-all"
                >
                    ثبت‌نام
                </button>

                <p className="text-sm text-center text-gray-600 mt-4">
                    قبلاً حساب دارید؟{" "}
                    <Link to="/login" className="text-indigo-500 hover:underline">
                        وارد شوید
                    </Link>
                </p>
            </form>
        </motion.div>
    );
};

export default RegisterForm;
