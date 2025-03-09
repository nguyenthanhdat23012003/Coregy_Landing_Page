import { Button } from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import { NextSeoProps } from 'next-seo'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'

import { Logo } from './logo'

const siteConfig = {
  logo: Logo,
  seo: {
    title: 'Coregy',
    description:
      'Empowering businesses with AI-driven digital transformation, intelligent e-commerce solutions, and automation through trading bots & chatbots.',
  } as NextSeoProps,
  termsUrl: '#',
  privacyUrl: '#',
  header: {
    links: [
      {
        id: 'docs',
        label: 'Docs',
        href: 'https://docs.coregy.com.vn',
      },
      {
        id: 'features',
        label: 'Features',
      },
      {
        id: 'pricing',
        label: 'Pricing',
      },
      {
        id: 'faq',
        label: 'FAQ',
      },
      {
        label: 'Login',
        href: '/login',
      },
      {
        label: 'Sign Up',
        href: '/signup',
        variant: 'primary',
      },
    ],
  },
  footer: {
    copyright: (
      <>
        Built by{' '}
        <Link href="https://www.linkedin.com/company/coregy">Coregy Team</Link>
        <br />
        Copyright © 2024 Coregy. All rights reserved.
      </>
    ),
    links: [
      {
        href: 'mailto:contact@coregy.com.vn',
        label: 'Contact',
      },
      {
        href: 'https://www.linkedin.com/company/coregy',
        label: <FaLinkedin size="14" />,
      },
      {
        href: 'https://github.com/nguyenthanhdat23012003/Coregy_Landing_Page',
        label: <FaGithub size="14" />,
      },
      {
        href: 'https://twitter.com/coregy',
        label: <FaTwitter size="14" />,
      },
      {
        href: '/terms',
        label: 'Terms',
      },
      {
        href: '/privacy',
        label: 'Privacy',
      },
    ],
  },
  signup: {
    title: 'Start building with Coregy',
    features: [
      {
        icon: FiCheck,
        title: 'Scalable',
        description:
          'Coregy grows with your business, from startups to enterprises.',
      },
      {
        icon: FiCheck,
        title: 'Customizable',
        description: 'Adapt AI and automation tools to fit your needs.',
      },
      {
        icon: FiCheck,
        title: 'Integrated',
        description:
          'Seamlessly connect with Shopify, Magento, Odoo, and Zalo.',
      },
      {
        icon: FiCheck,
        title: 'Efficient',
        description: 'Boost productivity with AI-powered automation.',
      },
    ],
  },
}

export default siteConfig
