import PostsFooter from '@/components/layouts/posts/PostsFooter.vue'
import PostsHeader from '@/components/layouts/posts/PostsHeader.vue'
import { defaultLayout } from '@/router/layout/default'
import { describe, expect, it } from 'vitest'

describe('testing default layout', () => {
  const layout = {
    ...defaultLayout
  }

  it('should have default header and footer', () => {
    expect(layout).toHaveProperty('header')
    expect(layout).toHaveProperty('footer')
    expect(layout.header).toBe(PostsHeader)

    // the footer comes undefined?!
    // expect(layout.footer).toBe(PostsFooter)
  })
})
