import React from 'react'
import NavLink from './NavLink'

interface Link {
  href: string;
  title: string;
}

interface MenuOverlayProps {
  links: Link[];
}

const MenuOverlay = ({ links }: MenuOverlayProps) => {
  return (
    <ul className='flex flex-col py-4 items-center '> 
      {links.map((link, index) => (
        <li key={index}>
          <NavLink href={link.href} title={link.title} />
        </li>
      ))}
    </ul>
  )
}

export default MenuOverlay

