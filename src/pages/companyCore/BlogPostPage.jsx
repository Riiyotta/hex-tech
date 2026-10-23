// /blog/introducing-generative-data-apps/ (company §4.5, T5 article template). Dark route; the article header sits on the
// dark checkered row and the content slab is re-scoped to the light theme with ThemeScope. Title, dek, meta, TOC,
// headings, callout and kicker are the recorded copy (§7.6); body paragraphs are neutral placeholders sized to the
// live line counts, with the recorded media (4 videos, 2 images) in their recorded positions.
import { Button, Callout, ContentSection, FooterRow, ThemeScope } from '../../components/shared'
import { ICON, SocialShare } from './common.jsx'
import RichText, { RtImage, RtVideo, placeholderText as ph } from './RichText.jsx'
import post from './data/blogPost.js'

const URL = 'https://hex.tech/blog/introducing-generative-data-apps/'
const MEDIA = '/assets/pages/company/blog-post/'
const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
const [H1, H2, H3, H4] = post.sections.slice(1).map((s) => s.heading)

function P({ lines, seed, link }) {
  return (
    <p>
      {ph(lines, seed)}
      {link && (
        <>
          {' '}
          <a href={link} target="_blank" rel="noopener noreferrer">
            Placeholder link
          </a>
          .
        </>
      )}
    </p>
  )
}

function ArticleHeader() {
  return (
    <div className="cc-post-header" data-section="ArticleHeader">
      <div className="cc-post-header__info">
        <h6 className="cc-post-header__eyebrow">
          <a href="/blog/">Blog</a>
        </h6>
        <h1 className="cc-post-header__title">{post.title}</h1>
        <p className="cc-post-header__dek">{post.dek}</p>
        <div className="cc-post-header__meta">
          <div>
            <div>{post.author}</div>
            <div className="cc-post-header__tag">{post.category}</div>
            <div>{post.date}</div>
          </div>
          <SocialShare title={post.title} url={URL} gap={16} className="cc-share--header" />
        </div>
      </div>
      <div className="cc-post-hero">
        <div className="cc-post-hero__video">
          <iframe
            src="https://www.youtube.com/embed/2FjG6-mq3EA?enablejsapi=1"
            title={post.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  )
}

function Aside() {
  return (
    <aside className="cc-post-aside">
      <div className="cc-post-aside__inner">
        <nav>
          <h5 className="m-0 text-[14px] font-semibold uppercase leading-[1.571] tracking-[-0.025em] text-ink-muted">In this article</h5>
          <ul>
            {post.toc.map((t) => (
              <li key={t}>
                <a href={`#${slug(t)}`}>{t}</a>
              </li>
            ))}
          </ul>
        </nav>
        <Button variant="primary" size="lg" block href="https://app.hex.tech/signup?source=blog-toc" external>
          Get started for free
        </Button>
      </div>
    </aside>
  )
}

function ArticleBody() {
  return (
    <ThemeScope theme="light" className="cc-post-slab" data-section="ArticleBody">
      <Aside />
      <div className="cc-post-text" style={{ marginRight: '20%', marginLeft: 0 }}>
        <RichText>
          <p>
            <strong>tl;dr:</strong> {ph(2, 0).slice(0, 140)}
          </p>
          <Callout icon={ICON.knowledge} className="mb-[40px]">
            <p>
              Want to learn more about Generative data apps? Register for our{' '}
              <a href="https://events.hex.tech/generative-apps-launch-event/" target="_blank" rel="noopener noreferrer">
                webinar on May 14th
              </a>{' '}
              to hear directly from Olivia &amp; our CEO, Barry.
            </p>
          </Callout>
          <P lines={3} seed={1} />
          <P lines={5} seed={2} />
          <P lines={2} seed={3} />
          <P lines={3} seed={4} link="https://learn.hex.tech/docs/share-insights/apps/generative-apps" />
          <RtVideo src={`${MEDIA}video-0f7089c9.mp4`} />

          <h2 id={slug(H1)}>{H1}</h2>
          <P lines={2} seed={0} />
          <P lines={3} seed={1} />
          <P lines={1} seed={2} />
          <P lines={2} seed={3} />
          <RtVideo src={`${MEDIA}video-85802d34.mp4`} />
          <P lines={4} seed={4} />
          <RtVideo src={`${MEDIA}video-37d3248e.mp4`} />

          <h2 id={slug(H2)}>{H2}</h2>
          <P lines={2} seed={0} link="/product/context-studio/" />
          <ul>
            <li>Placeholder list item one</li>
            <li>Placeholder list item two</li>
            <li>Placeholder list item three</li>
            <li>
              {ph(2, 1).slice(0, 110)} <a href="https://learn.hex.tech/docs/agent-management/context-management/reference-repositories" target="_blank" rel="noopener noreferrer">Placeholder link</a>
            </li>
            <li>{ph(2, 2).slice(0, 120)}</li>
          </ul>
          <RtImage
            src={`${MEDIA}an-image-showing-a-hex-generative-data-app-suppo-05f07ef0.png`}
            alt="An image showing a Hex generative data app supported by you organization's context"
            width={1480}
            height={832}
          />
          <P lines={3} seed={3} />
          <RtImage src={`${MEDIA}img-b94e8e0e.jpg`} width={1480} height={912} />
          <P lines={8} seed={4} link="/product/cli/" />

          <h2 id={slug(H3)}>{H3}</h2>
          <P lines={9} seed={0} />
          <P lines={3} seed={1} link="https://learn.hex.tech/docs/connect-to-data/data-connections/data-connections-introduction#workspace-data-connection-permissions" />
          <RtVideo src={`${MEDIA}video-928c0b14.mp4`} />
          <P lines={1} seed={2} />

          <h2 id={slug(H4)}>{H4}</h2>
          <p>
            {ph(3, 3).slice(0, 190)}{' '}
            <a href="mailto:support@hex.tech" target="_blank" rel="noopener noreferrer">
              support@hex.tech
            </a>
            .
          </p>
          <P lines={3} seed={4} />
        </RichText>
        <SocialShare title={post.title} url={URL} gap={16} className="cc-share--body" />
        <div className="cc-kicker">
          <div className="mb-[25px]">
            This is something we think a lot about at Hex, where we're creating a platform that makes it easy to build and share interactive data products which can help teams be more impactful.
            <br />
            <br />
            If this is is interesting, click below to get started, or to check out opportunities to join our team.
          </div>
          <div className="cc-kicker__buttons">
            <Button variant="secondary" size="md" href="https://app.hex.tech/signup?source=blog-kicker" external className="cc-kicker__btn">
              ✨ Get started for free
            </Button>
            <Button variant="secondary" size="md" href="/careers/" className="cc-kicker__btn">
              👩‍💻 Open roles
            </Button>
          </div>
        </div>
      </div>
    </ThemeScope>
  )
}

export default function BlogPostPage() {
  return (
    <div className="cc-blog">
      <ContentSection className="!overflow-x-clip">
        <div className="flex flex-col pt-[200px]">
          <ArticleHeader />
          <ArticleBody />
        </div>
      </ContentSection>
      <FooterRow />
    </div>
  )
}
