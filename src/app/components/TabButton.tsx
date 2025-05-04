import React  from 'react'
import { motion } from 'framer-motion'

interface TabButtonProps {
  active: boolean;
  selectTab: () => void;
  children: React.ReactNode;
}

const variants = {
  initial: { width: 0 },
  animate: { width: 'calc(100% - 0.75rem)' },
}
const TabButton: React.FC<TabButtonProps> = ({ active, selectTab, children }) => {
const buttonClasses = active ? 'text-white' : 'text-white hover:text-red-400'
    
  return (
    <button onClick={selectTab}>
        <p className={`mr-3 font-semibold hover:text-red-100' ${buttonClasses}`}>
            {children}
        </p>
        <motion.div
          animate={active ? 'animate' : 'initial'}
          variants={variants}
          className='h-1 bg-red-300 mt-2 mr-3'  
        >

        </motion.div>
    </button>
  )
}

export default TabButton
