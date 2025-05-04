import React from 'react'
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/16/solid';
import Link from 'next/link';

interface ProjectCardProps {
  imgUrl: string;
  title: string;
  description: string;
  tags?: string[];
  gitUrl?: string;
  previewUrl?: string;
}

function ProjectCard({ imgUrl, title, description, gitUrl, previewUrl }: ProjectCardProps) {
  return (
    <div>
      <div className='h-40 mt-10 rounded-t-xl relative group' 
            style={{background: `url(${imgUrl})`, backgroundSize : 'cover', backgroundPosition:'center'}}>
            <div className='overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-black opacity-50 hidden group-hover:flex group-hover:opacity-80 transition-all duration-300 ease-in-out'>
              {gitUrl && (
                <Link href={gitUrl} className='h-10 w-10 mr-2 border-2 relative rounded-full group/link '>
                  <CodeBracketIcon className='h-7 w-7 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-blue-500' />
                </Link>
              )}
              {previewUrl && (
                <Link href={previewUrl} className='h-10 w-10 border-2 relative rounded-full group/link '>
                  <EyeIcon className='h-7 w-7 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-blue-500' />
                </Link>
              )}
            </div>
      </div>
      <div className='text-white rounded-b-xl bg-blue-400 px-4 py-3'>
        <h5 className='text-xl font-semibold mb-2'>{title}</h5>
        <p className='text-gray-500'>{description}</p>
      </div>
    </div>
  )
}

export default ProjectCard
