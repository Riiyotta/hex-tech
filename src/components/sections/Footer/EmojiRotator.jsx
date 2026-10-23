// CLONE_SPEC §6.8 footer emoji rotator: the shared Rotator (src/components/shared/Rotator.jsx) with a 20px
// square window and EmojiGlyph options. Timing (1200ms rotation, .8s slide/fade-out, 1.76s fade-in) lives there.
import Rotator from '../../shared/Rotator.jsx'

export const FOOTER_EMOJIS = ['🥖', '🍷', '🛌', '💜', '🥨', '🛹', '🍤', '🧄', '🍞', '🥥', '⛳', '🤞', '✨', '🔊', '🎧', '🌊', '🍀', '🤠', '🎷', '🍩', '☕', '🥟', '🍺', '🍰', '🔮', '🔒']

const SIZE = 20

const renderEmoji = (emoji) => (
  <label>
    <span className="emoji-glyph">{emoji}</span>
  </label>
)

export default function EmojiRotator({ options = FOOTER_EMOJIS }) {
  return <Rotator items={options} itemHeight={SIZE} renderItem={renderEmoji} optionClassName="footer-rotator__option" />
}
