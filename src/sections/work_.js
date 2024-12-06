// @ts-check

import { data } from "../../content";

export function viewWorkSection() {
  return `
    <section>
        Work
        <div>
            ${data.work.map((work, index) => {
              // xs={12} sm={6} md={4}
              return `
                <div>
                    ${work.jobTitle}
                </div>
              `;
            })}
        </div>
    </section>
    `;
}
