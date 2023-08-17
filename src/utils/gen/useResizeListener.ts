import type { QRL } from '@builder.io/qwik';
import { useOnWindow, useVisibleTask$ } from '@builder.io/qwik';

export function useResizeListener(
  handler: QRL<(event: Event) => void>,
  directHandler: QRL<(width: number, height: number) => void>
) {
  // ---On First Render
  useVisibleTask$(() => {
    if (window.innerWidth && window.innerHeight) {
      const width = window.innerWidth;
      const height = window.innerHeight;
      directHandler(width, height);
    }
  });
  // ---On Window Resize
  useOnWindow('resize', handler);
}
