'use client'

import {
  Box,
  ButtonGroup,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  IconButton,
  Stack,
  Tag,
  Text,
  VStack,
  Wrap,
  useClipboard,
} from '@chakra-ui/react'
import { Br, Link } from '@saas-ui/react'
import type { Metadata, NextPage } from 'next'
import Image from 'next/image'
import {
  FiArrowRight,
  FiBarChart2,
  FiBox,
  FiCheck,
  FiCloud,
  FiCode,
  FiCopy,
  FiCpu,
  FiFlag,
  FiGrid,
  FiLayers,
  FiLock,
  FiMessageCircle,
  FiMessageSquare,
  FiRefreshCcw,
  FiRefreshCw,
  FiSearch,
  FiShoppingBag,
  FiShoppingCart,
  FiSliders,
  FiSmartphone,
  FiSmile,
  FiTerminal,
  FiThumbsUp,
  FiToggleLeft,
  FiTrendingUp,
  FiUserPlus,
  FiZap,
} from 'react-icons/fi'

import * as React from 'react'

import { ButtonLink } from '#components/button-link/button-link'
import { Faq } from '#components/faq'
import { Features } from '#components/features'
import { BackgroundGradient } from '#components/gradients/background-gradient'
import { Hero } from '#components/hero'
import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from '#components/highlights'
import { GithubLogo, OpenAILogo } from '#components/logos'
import { FallInPlace } from '#components/motion/fall-in-place'
import { Pricing } from '#components/pricing/pricing'
import { Testimonial, Testimonials } from '#components/testimonials'
import { Em } from '#components/typography'
import faq from '#data/faq'
import pricing from '#data/pricing'
import testimonials from '#data/testimonials'

const Home: NextPage = () => {
  return (
    <Box>
      <HeroSection />

      <HighlightsSection />

      <FeaturesSection />

      <TestimonialsSection />

      <PricingSection />

      <FaqSection />
    </Box>
  )
}

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
        <Stack direction={{ base: 'column', lg: 'row' }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                Transforming Businesses
                <Br /> with Custom Software & Digital Innovation
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                Empowering companies through{' '}
                <Em>end-to-end software outsourcing services</Em>, from digital
                transformation and ecommerce development to workflow
                optimization with AI-powered solutions.
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
              <HStack pt="4" pb="12" spacing="8">
                <OpenAILogo height="28px" /> <GithubLogo height="28px" />{' '}
              </HStack>

              <ButtonGroup spacing={4} alignItems="center">
                <ButtonLink colorScheme="primary" size="lg" href="/signup">
                  Sign Up
                </ButtonLink>
                <ButtonLink
                  size="lg"
                  href="mailto:contact@coregy.com.vn"
                  variant="outline"
                  rightIcon={
                    <Icon
                      as={FiArrowRight}
                      sx={{
                        transitionProperty: 'common',
                        transitionDuration: 'normal',
                        '.chakra-button:hover &': {
                          transform: 'translate(5px)',
                        },
                      }}
                    />
                  }
                >
                  Contact to view demo
                </ButtonLink>
              </ButtonGroup>
            </FallInPlace>
          </Hero>
          <Box
            height="600px"
            position="absolute"
            display={{ base: 'none', lg: 'block' }}
            left={{ lg: '60%', xl: '55%' }}
            width="80vw"
            maxW="1100px"
            margin="0 auto"
          >
            <FallInPlace delay={1}>
              <Box overflow="hidden" height="100%">
                <Image
                  src="/static/screenshots/list1.png"
                  width={1200}
                  height={762}
                  alt="Screenshot of a ListPage"
                  quality="75"
                  priority
                />
              </Box>
            </FallInPlace>
          </Box>
        </Stack>
      </Container>
      <Features
        id="coregy-features"
        columns={[1, 2, 4]}
        iconSize={5}
        innerWidth="container.xl"
        pt="20"
        features={[
          {
            title: 'E-commerce Solutions',
            icon: FiShoppingCart, // Biểu tượng thể hiện E-commerce
            description:
              'Develop robust and user-friendly e-commerce systems that streamline online transactions, manage inventory, and enhance omnichannel customer engagement.',
            iconPosition: 'top',
            delay: 0.6,
          },
          {
            title: 'Digital Transformation',
            icon: FiRefreshCw, // Biểu tượng thể hiện Chuyển đổi số
            description:
              'Support businesses in adopting modern technologies, restructuring operations, and digitizing workflows for greater efficiency and long-term growth.',
            iconPosition: 'top',
            delay: 0.8,
          },
          {
            title: 'Custom Software Development',
            icon: FiMessageSquare, // Biểu tượng thể hiện Chatbot & Bot giao dịch
            description:
              'Deliver tailored software solutions for web, mobile, and enterprise systems to meet unique business needs with scalability and performance in mind.',
            iconPosition: 'top',
            delay: 1.0,
          },
          {
            title: 'AI Agents & Workflow Automation',
            icon: FiCpu, // Biểu tượng AI Agents & tự động hóa
            description:
              'Apply AI-powered tools and automation frameworks to optimize business processes, reduce repetitive tasks, and unlock productivity at scale.',
            iconPosition: 'top',
            delay: 1.2,
          },
        ]}
        reveal={FallInPlace}
      />
    </Box>
  )
}

const HighlightsSection = () => {
  const { value, onCopy, hasCopied } = useClipboard('yarn add @coregy/service')

  return (
    <Highlights>
      <HighlightsItem
        colSpan={[1, null, 2]}
        title="Comprehensive Coregy Solutions"
      >
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="xl">
            Unlock the full potential of tailored <Em>software outsourcing</Em>.
            From <Em>business process automation</Em> and custom{' '}
            <Em>web/mobile apps</Em> to <Em>enterprise platforms</Em> and{' '}
            <Em>e-commerce systems</Em>, Coregy delivers technology solutions
            that scale with your business.
          </Text>

          <Flex
            rounded="full"
            borderWidth="1px"
            flexDirection="row"
            alignItems="center"
            py="1"
            ps="8"
            pe="2"
            bg="primary.800"
            _dark={{ bg: 'gray.900' }}
          >
            <Box>
              <Text color="yellow.400" display="inline">
                yarn add
              </Text>{' '}
              <Text color="cyan.300" display="inline">
                @coregy/service
              </Text>
            </Box>
            <IconButton
              icon={hasCopied ? <FiCheck /> : <FiCopy />}
              aria-label="Copy install command"
              onClick={onCopy}
              variant="ghost"
              ms="4"
              isRound
              color="white"
            />
          </Flex>
        </VStack>
      </HighlightsItem>

      <HighlightsItem title="Scalable, Reliable & Custom-Built">
        <Text color="muted" fontSize="lg">
          Our architecture is designed to support businesses at any stage of
          growth. We ensure scalability, reliability, and flexibility across
          industries—backed by a team experienced in building high-impact,
          real-world systems.
        </Text>
      </HighlightsItem>

      <HighlightsTestimonialItem
        name="Leo Phan"
        description="Co-founder, Coregy"
        avatar="/static/images/avt.webp"
        gradient={['blue.400', 'blue.800']} // Đổi gradient màu xanh
      >
        “At Coregy, we help businesses accelerate their digital journey by
        delivering end-to-end custom software solutions. From automation and AI
        integration to full-stack development, our goal is to make operations
        smarter and more efficient.”
      </HighlightsTestimonialItem>

      <HighlightsItem
        colSpan={[1, null, 2]}
        title="Elevate Your Business with Coregy"
      >
        <Text color="muted" fontSize="lg">
          Partner with Coregy to build scalable digital systems — from custom
          software outsourcing to workflow automation, e-commerce platforms, and
          enterprise transformation.
        </Text>
        <Wrap mt="8">
          {[
            'Custom Software Development',
            'Digital Transformation',
            'E-commerce Platforms',
            'ERP Implementation (Odoo, SAP)',
            'Zalo Mini App',
            'Dropship Shopify Solutions',
            'Web App Development',
            'Mobile App Development',
            'AI Workflow Automation',
            'Business Process Optimization',
            'AI Agents for Operations',
            'Zalo Chatbot & ZNS Solutions',
            'Outsourced Engineering Teams',
          ].map((value) => (
            <Tag
              key={value}
              variant="subtle"
              colorScheme="blue"
              rounded="full"
              px="3"
            >
              {value}
            </Tag>
          ))}
        </Wrap>
      </HighlightsItem>
    </Highlights>
  )
}

const FeaturesSection = () => {
  return (
    <Features
      id="features"
      title={
        <Heading
          lineHeight="short"
          fontSize={['2xl', null, '4xl']}
          textAlign="left"
          as="p"
        >
          Unlock the Power of
          <Br /> Custom Software & Digital Innovation.
        </Heading>
      }
      description={
        <>
          Coregy delivers end-to-end software outsourcing services to support
          your business transformation.
          <Br />
          From automation and app development to ERP systems and e-commerce
          platforms—built for scale, speed, and success.
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: 'Custom Software Development.',
          icon: FiCode,
          description:
            'Build tailored software solutions to solve business-specific challenges with flexibility and scalability.',
          variant: 'inline',
        },
        {
          title: 'Digital Transformation.',
          icon: FiRefreshCcw,
          description:
            'Modernize operations and systems by digitizing workflows, improving efficiency, and embracing innovation.',
          variant: 'inline',
        },
        {
          title: 'E-commerce Platforms.',
          icon: FiShoppingCart,
          description:
            'Develop scalable, conversion-driven e-commerce solutions integrated with inventory and order management.',
          variant: 'inline',
        },
        {
          title: 'AI Agents & Automation.',
          icon: FiCpu,
          description:
            'Automate repetitive processes and enhance customer engagement using intelligent AI-driven agents.',
          variant: 'inline',
        },
        {
          title: 'ERP & CRM Integration.',
          icon: FiLayers,
          description:
            'Streamline internal operations with customized ERP and CRM systems like Odoo, SAP, or custom stacks.',
          variant: 'inline',
        },
        {
          title: 'Chatbots & Zalo OA Solutions.',
          icon: FiMessageCircle,
          description:
            'Connect with customers using Zalo Official Account automation and chatbot integrations.',
          variant: 'inline',
        },
        {
          title: 'Cloud Architecture & DevOps.',
          icon: FiCloud,
          description:
            'Deploy secure, high-performance applications with CI/CD pipelines and scalable cloud-native infrastructure.',
          variant: 'inline',
        },
        {
          title: 'Data & Business Intelligence.',
          icon: FiBarChart2,
          description:
            'Turn raw data into actionable insights through AI analytics, dashboards, and real-time reporting.',
          variant: 'inline',
        },
        {
          title: 'Web & Mobile App Development.',
          icon: FiSmartphone,
          description:
            'Deliver seamless user experiences through modern, responsive apps across iOS, Android, and the web.',
          variant: 'inline',
        },
      ]}
    />
  )
}

const TestimonialsSection = () => {
  const columns = React.useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (columns, t, i) => {
        columns[i % 3].push(t)

        return columns
      },
      [[], [], []],
    )
  }, [])

  return (
    <Testimonials
      title={testimonials.title}
      columns={[1, 2, 3]}
      innerWidth="container.xl"
    >
      <>
        {columns.map((column, i) => (
          <Stack key={i} spacing="8">
            {column.map((t, i) => (
              <Testimonial key={i} {...t} />
            ))}
          </Stack>
        ))}
      </>
    </Testimonials>
  )
}

const PricingSection = () => {
  return (
    <Pricing {...pricing}>
      <Text p="8" textAlign="center" color="muted">
        VAT may be applicable depending on your location.
      </Text>
    </Pricing>
  )
}

const FaqSection = () => {
  return <Faq {...faq} />
}

export default Home
