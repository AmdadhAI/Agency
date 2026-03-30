import { type SchemaTypeDefinition } from 'sanity'

import globalSettings from './globalSettings'
import project from './project'
import service from './service'
import homePage from './homePage'
import blogPost from './blogPost'
import faq from './faq'
import pricingPage from './pricingPage'
import faqPage from './faqPage'
import aboutPage from './aboutPage'
import servicesPage from './servicesPage'
import contactPage from './contactPage'

export const schemaTypes: SchemaTypeDefinition[] = [
    globalSettings,
    project,
    service,
    homePage,
    blogPost,
    faq,
    pricingPage,
    faqPage,
    aboutPage,
    servicesPage,
    contactPage,
]
