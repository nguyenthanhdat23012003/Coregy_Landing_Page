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
      'Coregy provides full-service software outsourcing for businesses — from custom development and e-commerce platforms to AI automation and enterprise system integration.',
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
        Copyright © 2025 Coregy. All rights reserved.
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
        href: 'https://github.com/hodynguyen/Coregy_Landing_Page',
        label: <FaGithub size="14" />,
      },
      {
        href: 'https://twitter.com/coregy',
        label: <FaTwitter size="14" />,
      },
      {
        href: '/',
        label: 'Terms',
      },
      {
        href: '/',
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
          'Designed to support growth across all business sizes — from startups to large enterprises.',
      },
      {
        icon: FiCheck,
        title: 'Flexible',
        description:
          'Custom-built software and automation tailored to your specific industry and workflow.',
      },
      {
        icon: FiCheck,
        title: 'Seamlessly Integrated',
        description:
          'Works perfectly with Shopify, Odoo, Zalo, and other enterprise systems.',
      },
      {
        icon: FiCheck,
        title: 'AI-Optimized',
        description:
          'Enhance productivity and decision-making through intelligent automation and smart tools.',
      },
    ],
  },
}

export default siteConfig
