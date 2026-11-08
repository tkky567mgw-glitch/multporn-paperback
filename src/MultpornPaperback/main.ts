import type { Extension, SourceManga } from '@paperback/types'

class MultpornPaperbackExtension implements Extension {
  async initialise(): Promise<void> {
    // No initialization is needed until source integration is implemented.
  }

  async getMangaDetails(_mangaId: string): Promise<SourceManga> {
    throw new Error('Manga detail fetching is not implemented yet.')
  }
}

// The exported name matches the src folder, as expected by the v0.9 extension layout.
export const MultpornPaperback = new MultpornPaperbackExtension()
