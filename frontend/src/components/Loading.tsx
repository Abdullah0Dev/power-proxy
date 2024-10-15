 import { motion } from 'framer-motion';
import { loadingImg } from '../assets';

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <motion.img
        src={loadingImg}
        alt="Loading"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        className="w-24 h-24"
      />
    </div>
  );
};

export default Loading;