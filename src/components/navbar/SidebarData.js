import React from 'react';
import * as AiIcons from 'react-icons/ai';
import * as FiIcons from 'react-icons/fi'

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Courses',
    path: '/Course',
    icon: <FiIcons.FiBookOpen />,
    cName: 'nav-text'
  },
  {
    title: 'Login',
    path: '/login',
    icon: <FiIcons.FiUser />,
    cName: 'nav-text'
  },
  {
    title: 'Sign Up',
    path: '/register',
    icon: <FiIcons.FiUser />,
    cName: 'nav-text'
  },
  {
    title: 'Admin',
    path: '/admin',
    icon: <FiIcons.FiUser />,
    cName: 'nav-text'
  }
];