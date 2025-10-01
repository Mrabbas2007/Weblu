import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import { GallaryModal } from "../../Modals";
import { pic1, pic2, pic3, pic4, pic5, pic6 } from "../../images";

const itemsInit = [
    { src: pic1, id: 1 },
    { src: pic2, id: 2 },
    { src: pic3, id: 3 },
    { src: pic4, id: 4 },
    { src: pic5, id: 5 },
    { src: pic6, id: 6 },
];

export default function HomePage() {
    const [items] = useState(itemsInit);
    const [selectedId, setSelectedId] = useState<number | null>(null);
    const selected = items.find((i) => i.id === selectedId) ?? null;

    return (
        <LayoutGroup>
            <div className="w-full h-full flex flex-col justify-center items-center gap-6 py-8">
                <div className="w-[90%] grid grid-cols-2 md:grid-cols-3 gap-4">
                    {items.map((item) => (
                        <motion.div
                            key={item.id}
                            onClick={() => setSelectedId(item.id)}
                        >
                            <motion.img
                                src={item.src}
                                alt=""
                                layoutId={`image-${item.id}`}
                                className="block w-full h-44 md:h-56 object-cover rounded-lg cursor-pointer"
                            />
                        </motion.div>
                    ))}
                </div>

                <AnimatePresence>
                    {selected && (
                        <GallaryModal
                            item={selected}
                            onClose={() => setSelectedId(null)}
                        />
                    )}
                </AnimatePresence>
            </div>
        </LayoutGroup>
    );
}
