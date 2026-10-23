// Slack demo window (InteractiveFeatureSlack): outer browser-window chrome (traffic lights + "Slack"
// title) around an inner window with the thread. Markup is the live DOM (./partials); the thread pane
// is an intent-scroll pane and the window shows the 8-bit cursor like the other interactive windows.
import { useRef } from 'react'
import IntentScrollable from './IntentScrollable.jsx'
import EightBitCursor, { useHover } from './EightBitCursor.jsx'
import toolbarHtml from './partials/slack-toolbar.html?raw'
import threadHtml from './partials/slack-thread.html?raw'

export default function SlackWindow() {
  const windowRef = useRef(null)
  const hovering = useHover(windowRef)
  return (
    <div
      ref={windowRef}
      role="group"
      aria-label="Product demonstration of Hex answering a question in Slack"
      className="ta-mock InteractiveFeatureWrapper-styles__Wrapper-sc-b5f0eae9-3 InteractiveFeatureWrapper-styles__OuterBrowserWindow-sc-b5f0eae9-4 bVBKNg kcGtOg"
    >
      <div className="contents" dangerouslySetInnerHTML={{ __html: toolbarHtml }} />
      <div className="InteractiveFeatureWrapper-styles__Wrapper-sc-b5f0eae9-3 InteractiveFeatureWrapper-styles__InnerBrowserWindow-sc-b5f0eae9-9 bVBKNg kUtIZy">
        <IntentScrollable className="InteractiveFeatureSlack__Content-sc-22abb7e5-1 kNhOTK">
          <div className="contents" dangerouslySetInnerHTML={{ __html: threadHtml }} />
        </IntentScrollable>
      </div>
      <EightBitCursor isHovering={hovering} />
    </div>
  )
}
