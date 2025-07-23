import { IStaticMethods } from 'flyonui/flyonui'

declare global {
  interface Window {
    HSStaticMethods: IStaticMethods
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    flatpickr: any // You can use a more specific type if needed
  }
}

export {}
