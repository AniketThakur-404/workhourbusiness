export default function ValuesSection() {
  return (
    <section className="values-section">
      <div className="values-head section-pad">
        <p className="eyebrow teal">What moves us</p>
        <h2>
          The work is complex.
          <br />
          <em>The direction is clear.</em>
        </h2>
      </div>

      <div className="value-grid">
        <article className="value value-0">
          <div className="value-meta">
            <span className="value-no">01</span>
            <svg
              aria-hidden="true"
              className="value-icon"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.4"
              viewBox="0 0 100 100"
            >
              <path d="M50 12 79 23v22c0 18-12 30-29 41-17-11-29-23-29-41V23Z" />
              <path d="m34 49 11 11 22-24" />
            </svg>
          </div>
          <h3>Resilience</h3>
          <p>
            Resilience means making thoughtful adjustments as needs change.
            Across recruitment, workspaces, travel, events, learning, and
            business planning, each specialist service starts with the context
            and priorities of the organization it supports.
          </p>
        </article>

        <article className="value value-1">
          <div className="value-meta">
            <span className="value-no">02</span>
            <svg
              aria-hidden="true"
              className="value-icon"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.4"
              viewBox="0 0 100 100"
            >
              <path d="M36 65c0-8-12-14-12-30a26 26 0 1 1 52 0c0 16-12 22-12 30ZM38 75h24m-20 9h16" />
              <path d="M50 2v8m-34 2 7 7m54-7-7 7M7 37h10m66 0h10" />
            </svg>
          </div>
          <h3>Pioneering</h3>
          <p>
            Pioneering begins with a willingness to explore new approaches.
            Workhour Business brings distinct service areas together so
            organizations can consider new ideas and practical next steps.
          </p>
        </article>

        <article className="value value-2">
          <div className="value-meta">
            <span className="value-no">03</span>
            <svg
              aria-hidden="true"
              className="value-icon"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.4"
              viewBox="0 0 100 100"
            >
              <path d="M14 82h72M20 75V43h14v32m9 0V29h14v46m9 0V17h14v58" />
              <path d="m16 34 22-18 16 9L81 8" />
              <path d="M68 8h13v13" />
            </svg>
          </div>
          <h3>Legacy</h3>
          <p>
            A lasting contribution is built through purposeful work and
            considered decisions. The group’s businesses support organizations at
            different stages, from planning and people needs to learning,
            travel, events, and workspace.
          </p>
        </article>
      </div>
    </section>
  );
}
