import { HStack, Text } from '@chakra-ui/react'

export default {
  title: 'Coregy Pricing Plans',
  description:
    'Flexible service packages for custom software, digital transformation, and AI automation.',
  plans: [
    {
      id: 'consulting',
      title: 'Strategy & Consulting',
      description:
        'For businesses exploring technology-driven growth but unsure where to begin.',
      price: 'Free',
      features: [
        { title: 'Technology consultation' },
        { title: 'Business process analysis' },
        { title: 'Improvement roadmap' },
        { title: 'System architecture planning' },
        { title: 'Implementation guidance' },
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
        'Ideal for companies ready to implement full-stack digital solutions and optimize operations.',
      price: '$399/month',
      isRecommended: true,
      features: [
        { title: 'E-commerce setup (Shopify, Magento, WooCommerce)' },
        { title: 'ERP & CRM deployment (Odoo, SAP)' },
        { title: 'Zalo platform integration (Mini App, OA, Chatbot, ZNS)' },
        { title: 'Workflow automation & optimization' },
        { title: 'Ongoing technical support & updates' },
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
        'Custom AI agents, automation workflows, and intelligent systems tailored to business needs.',
      price: 'Custom Pricing',
      features: [
        { title: 'AI Agents for Workflow Automation' },
        { title: 'Trading Bots & Financial Automation (MT5)' },
        { title: 'Customer Support Chatbots (Zalo, Web)' },
        { title: 'AI-driven Business Intelligence Systems' },
        { title: 'Tailored AI Model Integrations & APIs' },
      ],
      action: {
        href: '/contact',
        label: 'Contact Us',
      },
    },
  ],
}
