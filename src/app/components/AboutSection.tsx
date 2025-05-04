"use client"
import React, {useTransition, useState} from 'react'
import Image from 'next/image'
import TabButton from './TabButton'

const TAB_DATA=[
    {
        title: "Skills",
        id: "skills",
        content:(
            <ul className='list-disc pl-4'>
                <li>Java</li>
                <li>HTML, CSS, JavaScript</li>
                <li>PHP, Laravel</li>
                <li>React, Next.js, Tailwind</li>
                <li>Git, Github</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content:(
            <ul className='list-disc pl-4'>
                <li>Politeknik Negeri Malang </li>
            </ul>
        )
    },
]

const AboutSection = () => {
    const [tab, setTab] = useState('skills')
    const [, startTransition] = useTransition()
    interface HandleTabChange {
        (id: string): void;
    }

    const handleTabChange: HandleTabChange = (id) => {
        startTransition(() => {
            setTab(id);
        });
    };

    return (
        <section className='text-white '>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-30 px-4 xl:gap-10 sm:py-30 sm:px-40'>
                <Image src="/images/about.jpg" alt="About section image" width={400} height={400} />
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full justify-center'>
                    <h2 className='text-4xl font-bold text-white mb-4'>
                        About Me
                    </h2>
                    <p className='text-base md:text-lg'>
                        A motivated and detail-oriented UI/UX designer with hands-on experience in designing and
                        optimizing user interfaces for website and mobile applications. Proficient in using tools like Figma
                        and conducting usability testing to enhance user experience. Experienced in collaborating within a
                        team environment to develop websites, demonstrating both technical capabilities and teamwork skills,
                        also familiar with Agile work environments and posses strong problem solving abilities. Eager to
                        continue learning and contributing to dynamic development projects.
                    </p>
                    <div className='flex flex-row justify-start mt-5'>
                        <TabButton selectTab={() => handleTabChange('skills')} active={tab === 'skills'}>
                            Skills
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange('education')} active={tab === 'education'}>
                            Education
                        </TabButton>
                    </div>
                    <div className='mt-3'>{TAB_DATA.find((t) => t.id === tab)?.content}</div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection