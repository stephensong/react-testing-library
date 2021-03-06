import {Simulate as ReactSimulate} from 'react-dom/test-utils'
import waitForExpect from 'wait-for-expect'

interface RenderResult {
  container: HTMLDivElement
  unmount: VoidFunction
  queryByTestId: (id: string) => HTMLElement | null
  getByTestId: (id: string) => HTMLElement
  queryByText: (id: string) => HTMLElement | null
  getByText: (id: string) => HTMLElement
  queryByPlaceholderText: (id: string) => HTMLElement | null
  getByPlaceholderText: (id: string) => HTMLElement
  queryByLabelText: (id: string) => HTMLElement | null
  getByLabelText: (id: string) => HTMLElement
}

export function render(
  ui: React.ReactElement<any>,
  options?: {container: HTMLElement},
): RenderResult

export function flushPromises(): Promise<void>

export const Simulate: typeof ReactSimulate

export function waitForExpect(): typeof waitForExpect

export default function wait(
  callback?: () => void,
  options?: {
    timeout?: number
    interval?: number
  },
): Promise<void>
