import { plans } from '@/app/shared/mock/plans'

import ProductHeader from './components/product-header'
import ProductInfo from './components/product-info'
import ProductPlan from './components/product-plan'
import ProductTrust from './components/product-trust'

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-100">
      <ProductHeader></ProductHeader>
      <ProductPlan plans={plans}></ProductPlan>
      <ProductTrust></ProductTrust>
      <ProductInfo></ProductInfo>
    </div>
  )
}
