export const navigation = {
  HOME: '/',
  PLANS: '/plans',
  INSURANCE: (id?: string | null) => `/insurance?planId=${id}`,
} as const
