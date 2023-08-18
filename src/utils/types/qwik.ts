import type { QRL } from '@builder.io/qwik';

export type OnInput = QRL<
  (event: InputEvent, element: HTMLInputElement) => void
>;
