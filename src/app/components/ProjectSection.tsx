"use client"
import React, {useRef} from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import {motion, useInView} from 'framer-motion'

const projectData = [
    {
        id: 1,
        title: 'Project 1',
        description: 'Description of Project 1',
        imgUrl: '/images/project1.jpg',
        tag: ['All', 'UI/UX'],
        gitUrl: '/',
        previewUrl: '/'
    },
    {
        id: 2,
        title: 'Project 2',
        description: 'Description of Project 2',
        imgUrl: '/images/project2.jpg',
        tag: ['All', 'Website','UI/UX'],
        gitUrl: '/',
        previewUrl: '/'
    },
]

const ProjectSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const [selectedTag, setSelectedTag] = React.useState('All')
  const handleTagClick = (newTag: string) => {
    setSelectedTag(newTag)
  }
  const filteredProjects = projectData.filter((project) =>
    project.tag.includes(selectedTag)
  )
  const cardVariants = {
    initial: {y: 50, opacity: 0},
    animate: {y: 0, opacity: 1},
  }

  return (
    <section >
      <h2 className='text-center text-4xl font-bold text-white mt-4 mb-4'>
        My Project
      </h2>
      <div className='text-black flex flex-row flex-wrap justify-center items-center gap-4 py-3'>
        {['All', 'Website', 'UI/UX'].map((tag) => (
          <ProjectTag
            key={tag}
            name={tag}
            onClick={() => handleTagClick(tag)}
            isSelected={selectedTag === tag}
          />
        ))}
      </div>
      <ul ref={ref} className='grid md:grid-cols-3 gap-5 md:gap-10 px-4 sm:px-8'>
        {filteredProjects.map((project, index) =>
          <motion.li 
            key={index} 
            variants={cardVariants} 
            initial="initial" 
            animate={isInView ? "animate" : "initial"}
            transition={{duration: 0.5, delay: index * 0.4}}
          >
            <ProjectCard
              key={project.id}
              imgUrl={project.imgUrl}
              title={project.title}
              description={project.description}
              tags={project.tag}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        )}
      </ul>
    </section>
  )
}

export default ProjectSection
