// @ts-check

import { viewWorkSection } from "./sections/work_";

export function viewApp() {
  return `
    <div style="max-width: var(--breakpoint-lg)">
    
      ${viewWorkSection()}

    </div>
  `;
}
