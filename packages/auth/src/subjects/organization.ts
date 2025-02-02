import { z } from 'zod'

import { organizationSchema } from '../models/organization'

export const organizationSubject = z.tuple([
  z.union([
    z.literal('delete'),
    z.literal('manage'),
    z.literal('update'),
    z.literal('transfer-ownership'),
  ]),
  z.union([z.literal('Organization'), organizationSchema]),
])

export type OrganizationSubject = z.infer<typeof organizationSubject>
