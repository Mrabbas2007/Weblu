import { motion } from "framer-motion";

interface IGalleryModalProps {
    item: { src: string; id: number };
    onClose: () => void;
}

export default function GallaryModal({ item, onClose }: IGalleryModalProps) {
    return (
        <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
        >
            <motion.div
                className="relative w-full max-w-4xl mx-4"
                onClick={(e) => e.stopPropagation()}
            >
                <motion.img
                    src={item.src}
                    alt="Selected"
                    layoutId={`image-${item.id}`}
                    className="block w-full h-auto object-contain rounded-xl"
                />
            </motion.div>
        </motion.div>
    );
}
