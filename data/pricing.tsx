import { HStack, Text } from '@chakra-ui/react'

export default {
  title: 'Coregy Pricing Plans',
  description: 'Scalable solutions for digital transformation & AI automation.',
  plans: [
    {
      id: 'consulting',
      title: 'Strategy & Consulting',
      description:
        'For businesses exploring digital transformation but unsure where to start.',
      price: 'Free',
      features: [
        {
          title: 'Technology consultation',
        },
        {
          title: 'Business process evaluation',
        },
        {
          title: 'Improvement recommendations',
        },
        {
          title: 'Solution architecture planning',
        },
        {
          title: 'Roadmap for implementation',
        },
      ],
      action: {
        href: '/signup',
        label: 'Explore',
      },
    },
    {
      id: 'implementation',
      title: 'Technology Implementation',
      description:
        'For businesses ready to implement digital solutions and streamline operations.',
      price: '$399/month',
      isRecommended: true,
      features: [
        {
          title: 'E-commerce setup (Shopify, Magento)',
        },
        {
          title: 'Digital transformation (Odoo ERP)',
        },
        {
          title: 'Full-service Zalo (Mini App, OA, Marketing, Chat Tool)',
        },
        {
          title: 'Automation & workflow optimization',
        },
        {
          title: 'Technical support & maintenance',
        },
      ],
      action: {
        href: '/signup',
        label: 'Get Started',
      },
    },
    {
      id: 'ai-solutions',
      title: 'AI & Automation',
      description:
        'Advanced AI-driven automation, chatbots, and trading bots for business.',
      price: 'Custom Pricing',
      features: [
        {
          title: 'AI Agents for Business Automation',
        },
        {
          title: 'Trading Bots for MT5 & Financial Markets',
        },
        {
          title: 'AI-powered Chatbots for Customer Support',
        },
        {
          title: 'Intelligent Decision-Making Systems',
        },
        {
          title: 'Custom AI integrations',
        },
      ],
      action: {
        href: '/signup',
        label: 'Contact Us',
      },
    },
  ],
}
