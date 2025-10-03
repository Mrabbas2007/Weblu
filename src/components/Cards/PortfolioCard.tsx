import { motion } from "motion/react";
import type { PortfolioCardType } from "Types/portfolio"
import { Link } from "react-router-dom";

const PortfolioCard = ({
    id,
    title,
    category,
    description,
    thumbnail,
}: PortfolioCardType) => {

    return (
        <motion.div
            transition={{ duration: 0.3 }}
            className="group relative flex flex-col bg-white/70 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden hover:shadow-xl border border-gray-200"
        >
            {/* Thumbnail */}
            <div className="w-full h-52 overflow-hidden">
                <img
                    src={thumbnail}
                    alt={title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
            </div>

            {/* Content */}
            <div className="flex flex-col flex-1 p-5">
                <p className="text-sm text-indigo-600 font-medium">{category}</p>
                <h3 className="text-xl YekanBlack text-gray-800 mt-1">{title}</h3>
                <p className="text-gray-600 text-sm mt-3 line-clamp-2">
                    {description}
                </p>

                {/* Button */}
                <Link to={`/portfolio/${title}/${id}`} className="mt-5" >
                    <button
                        className="w-full py-2 px-4 bg-indigo-600 text-white rounded-xl hover:bg-gray-600 
                        transition text-sm font-medium">
                        اطلاعات بیشتر
                    </button>
                </Link>
            </div>
        </motion.div>
    );
}

export default PortfolioCard;