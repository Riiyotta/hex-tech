// §4.6 project-window sequences, copied from the RSC payload (`projectWindows`) in the saved page.
// Each window cycles its frames; the prompt for each frame is typed before the frame fades in.
const IMG = '/assets/images/conversational-analytics'

export const PROJECT_WINDOWS = [
  [
    {
      alt: 'Market explorer map of 24,806 prospective US accounts as clustered dots',
      prompt: 'Explore customer demand across the US',
      promptWordsPerMinute: [331, 344, 334, 330, 311],
      src: `${IMG}/example-app-market-explorer-1.jpg`,
    },
    {
      alt: 'Market explorer map of US customer demand shown as a heatmap',
      prompt: 'Show demand as a heatmap',
      promptWordsPerMinute: [420],
      src: `${IMG}/example-app-market-explorer-2.jpg`,
    },
    {
      alt: 'Market explorer comparing Phoenix, Denver, and Atlanta next to a US heatmap',
      prompt: 'Make it easy to compare three locations',
      promptWordsPerMinute: [420],
      src: `${IMG}/example-app-market-explorer-3.jpg`,
    },
    {
      alt: 'Dark high-contrast Market explorer comparing Phoenix, Denver, and Atlanta',
      prompt: 'Give this a dark, high-contrast control-room look',
      promptWordsPerMinute: [420],
      src: `${IMG}/example-app-market-explorer-4.jpg`,
    },
  ],
  [
    {
      alt: 'NexaCorp subscription revenue line chart at $550k, down 8.4% from April to September',
      prompt: 'Track revenue across the business',
      promptWordsPerMinute: [420],
      src: `${IMG}/example-app-revenue-pulse-1.jpg`,
    },
    {
      alt: 'Editorial NexaCorp revenue report with a $550k line chart from April to September',
      prompt: 'Style this like an editorial business report',
      promptWordsPerMinute: [420],
      src: `${IMG}/example-app-revenue-pulse-2.jpg`,
    },
    {
      alt: 'Editorial NexaCorp revenue report with labeled monthly bars from April to September',
      prompt: 'Use bars instead, and label the values',
      promptWordsPerMinute: [420],
      src: `${IMG}/example-app-revenue-pulse-3.jpg`,
    },
    {
      alt: 'Revenue report headed “West drove most of the decline,” with 68% of the decrease called out',
      prompt: 'Put the key takeaway first',
      promptWordsPerMinute: [420],
      src: `${IMG}/example-app-revenue-pulse-4.jpg`,
    },
  ],
  [
    {
      alt: 'NexaCorp Q4 pricing forecast of $428k projected revenue with a dashed line after today',
      prompt: 'See next quarter’s revenue forecast',
      promptWordsPerMinute: [420],
      src: `${IMG}/example-app-pricing-lab-1.jpg`,
    },
    {
      alt: 'Interactive pricing forecast with a 5% price-change slider, $428k projected revenue, and 64% margin',
      prompt: 'Turn this forecast into an interactive pricing tool',
      promptWordsPerMinute: [420],
      src: `${IMG}/example-app-pricing-lab-2.jpg`,
    },
    {
      alt: 'Pricing forecast with a shaded range band around the projected line, $452k revenue, and 61% margin',
      prompt: 'Make the forecast range easier to read',
      promptWordsPerMinute: [420],
      src: `${IMG}/example-app-pricing-lab-3.jpg`,
    },
    {
      alt: 'Side-by-side pricing scenarios comparing current pricing at $428k with a 5% discount at $452k',
      prompt: 'Compare the scenarios side by side',
      promptWordsPerMinute: [420],
      src: `${IMG}/example-app-pricing-lab-4.jpg`,
    },
  ],
  [
    {
      alt: 'NexaCorp customer portfolio table of 283 accounts with ARR and usage change',
      prompt: 'Keep an eye on customer accounts',
      promptWordsPerMinute: [420],
      src: `${IMG}/example-app-account-watch-1.jpg`,
    },
    {
      alt: 'Priority-account board with Needs Review, Ready to contact, and In progress columns',
      prompt: 'Organize these accounts into a follow-up board',
      promptWordsPerMinute: [420],
      src: `${IMG}/example-app-account-watch-2.jpg`,
    },
    {
      alt: 'Priority-account board with warm pastel columns for Needs Review, Ready to contact, and In progress',
      prompt: 'Make it feel warmer and more approachable',
      promptWordsPerMinute: [420],
      src: `${IMG}/example-app-account-watch-3.jpg`,
    },
    {
      alt: 'Priority-account board with red and green monthly usage trends on each card',
      prompt: 'Make the usage trends easier to scan',
      promptWordsPerMinute: [420],
      src: `${IMG}/example-app-account-watch-4.jpg`,
    },
  ],
]
