
import { Suspense, lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from '@/layouts/MainLayout'
import LoadingSpinner from '@/components/ui/LoadingSpinner'

// Lazy load pages for better performance
const HomePage = lazy(() => import('@/pages/HomePage'))
const FeaturesPage = lazy(() => import('@/pages/FeaturesPage'))
const CaseStudiesPage = lazy(() => import('@/pages/CaseStudiesPage'))
const HowItWorksPage = lazy(() => import('@/pages/HowItWorksPage'))
const DevelopersPage = lazy(() => import('@/pages/DevelopersPage'))
const AboutPage = lazy(() => import('@/pages/AboutPage'))
const BlogPage = lazy(() => import('@/pages/BlogPage'))
const BlogPostPage = lazy(() => import('@/pages/BlogPostPage'))
const PricingPage = lazy(() => import('@/pages/PricingPage'))
const NotFoundPage = lazy(() => import('@/pages/NotFoundPage'))

function App() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><LoadingSpinner size="lg" /></div>}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="features" element={<FeaturesPage />} />
          <Route path="case-studies" element={<CaseStudiesPage />} />
          <Route path="how-it-works" element={<HowItWorksPage />} />
          <Route path="developers" element={<DevelopersPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/:slug" element={<BlogPostPage />} />
          <Route path="pricing" element={<PricingPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App
  