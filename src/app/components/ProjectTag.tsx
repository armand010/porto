import React from 'react'

interface ProjectTagProps {
    name: string;
    onClick: () => void;
    isSelected: boolean;
}

const ProjectTag: React.FC<ProjectTagProps> = ({ name, onClick, isSelected }) => {
    const buttonStyles = isSelected ? 'bg-white' : 'text-white';
  return (
    <button onClick={onClick} 
    
    className={`${buttonStyles} rounded-full border-2 px-7 py-2 text-xl cursor-pointer hover:bg-white hover:text-black transition duration-300 ease-in-out`}>
        {name}
    </button>
  )
}

export default ProjectTag
