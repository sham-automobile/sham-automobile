'use client'

/**
 * This route is responsible for the built-in authoring environment using Sanity Studio.
 * All routes under your studio path is handled by this file using Next.js' catch-all routes:
 * https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
 *
 * You can learn more about the next-sanity package here:
 * https://github.com/sanity-io/next-sanity
 */

import dynamic from 'next/dynamic'
import config from '../../../sanity.config'

// Dynamically import Sanity Studio to reduce initial bundle size
const NextStudio = dynamic(() => import('next-sanity/studio').then(mod => ({ default: mod.NextStudio })), {
  ssr: false,
  loading: () => (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto mb-4"></div>
        <p className="text-gray-600">Lade Sanity Studio...</p>
      </div>
    </div>
  )
})

export default function StudioPage() {
  return <NextStudio config={config} />
}
