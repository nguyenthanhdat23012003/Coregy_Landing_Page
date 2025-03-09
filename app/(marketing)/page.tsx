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
                <Br /> with AI & Digital Commerce
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
                Empowering businesses with{' '}
                <Em>AI-driven digital transformation</Em>, intelligent
                e-commerce solutions, and automation through trading bots &
                chatbots.
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
                  href="https://demo.coregy.com.vn"
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
                  View demo
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
                  src="/static/screenshots/list.png"
                  width={1200}
                  height={762}
                  alt="Screenshot of a ListPage in Saas UI Pro"
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
              'Build scalable and intelligent e-commerce platforms that optimize transactions and enhance customer experience.',
            iconPosition: 'top',
            delay: 0.6,
          },
          {
            title: 'Digital Transformation',
            icon: FiRefreshCw, // Biểu tượng thể hiện Chuyển đổi số
            description:
              'Leverage AI-driven solutions to modernize business processes, boost efficiency, and drive innovation.',
            iconPosition: 'top',
            delay: 0.8,
          },
          {
            title: 'Trading & Chat Bots',
            icon: FiMessageSquare, // Biểu tượng thể hiện Chatbot & Bot giao dịch
            description:
              'Deploy intelligent bots to automate trading strategies and enhance customer interactions with AI-powered chatbots.',
            iconPosition: 'top',
            delay: 1.0,
          },
          {
            title: 'AI Agents & Task Automation',
            icon: FiCpu, // Biểu tượng AI Agents & tự động hóa
            description:
              'Implement AI agents that autonomously handle workflows, reduce manual tasks, and improve business operations.',
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
      <HighlightsItem colSpan={[1, null, 2]} title="Powerful Coregy Solutions">
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="xl">
            Unlock the potential of <Em>AI-powered automation</Em> and{' '}
            <Em>digital transformation</Em>. From intelligent{' '}
            <Em>e-commerce platforms</Em> to <Em>automated trading bots</Em>,
            Coregy provides solutions that drive business growth.
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

      <HighlightsItem title="Scalable & Reliable">
        <Text color="muted" fontSize="lg">
          Coregy&apos;s AI-driven architecture ensures scalability, reliability,
          and real-time processing for high-demand industries like e-commerce
          and automated trading.
        </Text>
      </HighlightsItem>

      <HighlightsTestimonialItem
        name="Leo Phan"
        description="Co-founder, Coregy"
        avatar="/static/images/avt.webp"
        gradient={['blue.400', 'blue.800']} // Đổi gradient màu xanh
      >
        “Coregy revolutionizes business operations with AI-driven solutions,
        enhancing efficiency, scalability, and automation across e-commerce,
        enterprise management, trading, and digital transformation.”
      </HighlightsTestimonialItem>

      <HighlightsItem
        colSpan={[1, null, 2]}
        title="Elevate Your Business with Coregy"
      >
        <Text color="muted" fontSize="lg">
          Experience the next generation of AI-driven automation, optimized for
          e-commerce, finance, and digital transformation.
        </Text>
        <Wrap mt="8">
          {[
            'E-commerce Solution',
            'Zalo OA Solution',
            'Magento 2 Solution',
            'Shopify Solution',
            'Digital Transformation',
            'Odoo ERP Solution',
            'MT5 Trading Bots',
            'Zalo Chatbot',
            'Zalo Mini App',
            'AI Agents for Task Automation',
            'AI Agents for Business Development',
            'Mobile App Development',
            'Web App Development',
          ].map((value) => (
            <Tag
              key={value}
              variant="subtle"
              colorScheme="blue" // Đổi từ "purple" sang "blue"
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
          Unlock the power of
          <Br /> AI & Digital Transformation.
        </Heading>
      }
      description={
        <>
          Coregy provides cutting-edge AI-powered solutions for businesses.
          <Br />
          Enhance efficiency, automate processes, and scale effortlessly with
          our intelligent technology.
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: 'E-commerce Solutions.',
          icon: FiShoppingCart,
          description:
            'Leverage AI-powered insights and automation to enhance customer experiences and optimize online sales.',
          variant: 'inline',
        },
        {
          title: 'Digital Transformation.',
          icon: FiRefreshCcw,
          description:
            'Seamlessly integrate AI and automation into your business processes, driving efficiency and scalability.',
          variant: 'inline',
        },
        {
          title: 'Automated Trading Bots.',
          icon: FiTrendingUp,
          description:
            'Deploy intelligent MT5 trading bots that optimize strategies, execute trades, and maximize profitability.',
          variant: 'inline',
        },
        {
          title: 'AI Agents for Automation.',
          icon: FiCpu,
          description:
            'Implement AI-driven agents to handle repetitive tasks, customer interactions, and business workflows.',
          variant: 'inline',
        },
        {
          title: 'Custom ERP & CRM Solutions.',
          icon: FiLayers,
          description:
            'Utilize Coregy’s ERP and CRM solutions to streamline operations and improve business management.',
          variant: 'inline',
        },
        {
          title: 'Zalo OA & Chatbot Solutions.',
          icon: FiMessageCircle,
          description:
            'Engage customers through automated chatbots and Zalo Official Account integrations.',
          variant: 'inline',
        },
        {
          title: 'Scalable Cloud Architecture.',
          icon: FiCloud,
          description:
            'Deploy high-performance cloud-based applications optimized for speed, security, and scalability.',
          variant: 'inline',
        },
        {
          title: 'AI-powered Data Analytics.',
          icon: FiBarChart2,
          description:
            'Gain deeper business insights with AI-driven data analytics and real-time reporting.',
          variant: 'inline',
        },
        {
          title: 'Web & Mobile App Development.',
          icon: FiSmartphone,
          description:
            'Build robust, scalable, and user-friendly web and mobile applications tailored to your business needs.',
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
