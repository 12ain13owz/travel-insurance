// import { ArrowRight, Check, Shield, Star } from 'lucide-react'

// import { Navigation } from '@/app/shared/const/navigation'
// import { Product } from '@/app/shared/interface/product'
// import { Link } from '@/app/shared/ui/link'

// export default function ProductPlan({ plans }: { plans: Product[] }) {
//   return (
//     <section className="container mx-auto px-4 -mt-10">
//       <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-8">
//         {plans.map((plan) => (
//           <div
//             key={plan.name}
//             className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transform transition-transform hover:scale-105
//               ${plan.popular ? 'ring-2 ring-blue-600' : ''}
//             `}
//           >
//             {plan.popular && (
//               <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-500 to-indigo-600 text-white px-4 py-2 rounded-bl-lg font-medium flex items-center">
//                 <Star className="h-4 w-4 fill-current mr-1" />
//                 ยอดนิยม
//               </div>
//             )}

//             <div className="p-8 flex flex-col h-full justify-between">
//               <div className="flex flex-col space-y-4">
//                 <div className="flex gap-4">
//                   <Shield className="h-12 w-12 text-blue-600 mb-4" />
//                   <div>
//                     <h2 className="text-2xl font-bold">{plan.name}</h2>
//                     <p className="text-gray-600">{plan.description}</p>
//                   </div>
//                 </div>

//                 <div className="flex items-baseline mb-6">
//                   <span className="text-5xl font-bold">{plan.price}</span>
//                   <span className="text-gray-500 ml-2">/ บาท</span>
//                 </div>

//                 <div className="bg-gray-50 rounded-xl p-4 mb-6">
//                   <div className="font-medium mb-2">จุดเด่น:</div>
//                   <div className="space-y-1">
//                     {plan.highlights.map((highlight) => (
//                       <div key={highlight} className="flex items-center text-gray-700">
//                         <ArrowRight className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0" />
//                         {highlight}
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 <ul className="space-y-3 mb-8">
//                   {plan.features.map((feature) => (
//                     <li key={feature.text} className="flex items-center text-gray-600">
//                       <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
//                       {feature.text}
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <Link
//                 variant={plan.popular ? 'primary' : 'secondary'}
//                 href={`${Navigation.PURCHASE}/${plan.id}`}
//                 className="flex justify-center"
//               >
//                 ซื้อเลย
//               </Link>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }
