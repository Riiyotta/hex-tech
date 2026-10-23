// CLONE_SPEC §4.13: Bottom CTA "Getting started is easy." (ToutWrapper → BottomCTATout, reference/dom/p2-03-ToutWrapper__Wrapper.html)
import { Button, Reveal } from '../shared'

export default function BottomCta() {
  return (
    <Reveal
      as="section"
      data-section="BottomCta"
      className="relative flex w-full flex-col py-[clamp(70px,3.3203rem_+_3.75vw,100px)]"
    >
      <div className="flex border-y border-dashed border-grid-300">
        <div className="mx-auto flex w-full max-w-[940px] stack:flex-col">
          {/* Left column: flex 1 1 0 + flex-grow 2 → 593 / 347 at 1440 */}
          <div className="flex flex-[1_1_0px] grow-[2] flex-col items-start justify-center py-10 pl-10 pr-[60px]">
            <h3 className="gradient-heading mx-[-6px] mb-2.5 mt-0 !p-0 text-left font-formula text-heading-3 font-extrabold text-ink-loud">
              Getting started is easy.
            </h3>
            <p className="mb-[25px] text-lead-l font-light text-ink">
              Connect Hex to your data warehouse and do more with it immediately.
            </p>
            <div className="flex gap-5">
              <Button
                variant="primary"
                size="lg"
                href="https://app.hex.tech/signup?source=bottom-cta"
                external
                data-tracking-label="Home page bottom cta"
              >
                Get started for free
              </Button>
              <Button variant="secondary" size="lg" href="/request-a-demo/" data-tracking-label="Home page bottom contact cta">
                Talk to us
              </Button>
            </div>
          </div>
          <div className="flex flex-[1_1_0px] flex-col items-start justify-center border-l border-dashed border-grid-300 py-10 pl-10 pr-[60px] stack:border-l-0 stack:border-t">
            <p className="mb-5 text-body font-light text-ink">Check out all of our plans to fit your team or organization.</p>
            <Button variant="secondary" size="md" href="/pricing/" data-tracking-label="Home page bottom pricing cta">
              See our plans
            </Button>
          </div>
        </div>
      </div>
    </Reveal>
  )
}
