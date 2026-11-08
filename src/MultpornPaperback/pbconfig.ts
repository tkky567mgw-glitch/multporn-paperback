import { ContentRating, SourceIntents, type ExtensionInfo } from '@paperback/types'

const config = {
  version: '0.1.0',
  name: 'Multporn Paperback',
  icon: 'icon.png',
  developers: [{ name: 'Project maintainer' }],
  description: 'Paperback 0.9 extension scaffold; source integration is not implemented yet.',
  contentRating: ContentRating.ADULT,
  badges: [],
  capabilities: [SourceIntents.NONE],
} satisfies ExtensionInfo

export default config
