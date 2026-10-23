// product §4.2 #0 HeroCLI terminal: REUSE the homepage CliWindow (TrustedAnswers/CliWindow.jsx) with the CLI-page
// boot transcript (ASCII banner, welcome, project create/run) via its `bootScript` prop. The `.ta-root` scope carries
// the ported terminal CSS; the dark shell colours come from TrustedAnswers.css ([data-theme='dark'] .ta-root vars);
// cli.css only sizes the hero instance (.pc-cli-terminal: 622×550 shell, toolbar 12/8, 14px terminal text).
// Typed commands still run through CliWindow's own command table and append below.
import CliWindow from '../../../components/sections/TrustedAnswers/CliWindow.jsx'
import { PROMPT_PREFIX } from '../../../components/sections/TrustedAnswers/cliData.js'
import '../../../components/sections/TrustedAnswers/TrustedAnswers.css'

const BANNER = `███╗  ███╗ ████████╗ ███╗  ███╗                     
███║  ███║ ███╔═███║ ╚███╗███╔╝    _____  __    ____
█████████║ ████████║  ╚█████╔╝    / ___/ / /   /  _/
███╔══███║ ███╔════╝  ███╔███╗   / /    / /    / /  
███║  ███║ ███║ ███╗ ███╔╝╚███╗ / /___ / /__ _/ /   
███║  ███║ ████████║ ███║  ███║ \\____//____//___/   
╚══╝  ╚══╝ ╚═══════╝ ╚══╝  ╚══╝                      `

const BOOT = [
  BANNER,
  '',
  'Welcome to the Hex CLI.',
  'Type a command and press Enter. Try `hex help` to get started.',
  '',
  `${PROMPT_PREFIX}hex project create “Galactic Revenue Insights”`,
  '       ✓ Created project',
  '       ID: (019d4584)',
  '       Title: Galactic Revenue Insights',
  '',
  `${PROMPT_PREFIX}hex project run 019d4584`,
  '       ✓ Project run triggered',
  '       Project ID: (019d4584)',
  '       Run ID: (019d6376)',
  '       Status: Running',
  '',
].map((text) => ({ type: 'line', text }))

export default function HeroTerminal() {
  return (
    <div className="ta-root pc-cli-terminal">
      <CliWindow bootScript={BOOT} />
    </div>
  )
}
