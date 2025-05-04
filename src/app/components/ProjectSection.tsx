"use client"
import React, {useRef} from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import {motion, useInView} from 'framer-motion'

const projectData = [
    {
        id: 1,
        title: 'HRIS',
        description: 'A comprehensive web-based system designed to streamline HR operations, including employee management, attendance tracking, and payroll processing. Built with a responsive UI for seamless access and intuitive user interaction. This project focuses on improving administrative efficiency within organizations.',
        imgUrl: '/images/project1.jpg',
        tag: ['All', 'Website'],
        gitUrl: 'https://github.com/rickytedjo/HRIS'
    },
    {
        id: 2,
        title: 'Kawan Desa',
        description: 'A community-focused information system tailored for village administration. Kawan Desa simplifies RT/RW data management, facilitates communication between local authorities and citizens, and enhances transparency in public services. Developed with user-centric design for easy adoption in rural areas.',
        imgUrl: '/images/project2.jpg',
        tag: ['All', 'Website'],
        gitUrl: 'https://github.com/ahmadAria001/KawanDesa'
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
      <div className='text-white flex flex-row flex-wrap justify-center items-center gap-4 py-3'>
        {['All', 'Website', 'Mobile'].map((tag) => (
          <ProjectTag
            key={tag}
            name={tag}
            onClick={() => handleTagClick(tag)}
            isSelected={selectedTag === tag}
          />
        ))}
      </div>
      <ul ref={ref} className='grid md:grid-cols-3 gap-5 md:gap-10 px-4 sm:px-40'>
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
            />
          </motion.li>
        )}
      </ul>
    </section>
  )
}

export default ProjectSection
