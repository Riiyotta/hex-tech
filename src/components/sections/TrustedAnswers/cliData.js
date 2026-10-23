// Hex CLI demo data, copied verbatim from the live InteractiveTerminal bundle
// (Hex_ The Analytics platform… _files/2-6jw4q299v7b.js). Used by CliWindow.jsx.

export const PROMPT_PREFIX = '→ ~'
export const SPINNER_FRAMES = ['⠋', '⠙', '⠹', '⠸', '⠼', '⠴', '⠦', '⠧', '⠇', '⠏']
export const CLI_DOCS_LINK = 'https://learn.hex.tech/docs/api-integrations/cli'

// HomeTrustedAnswers bootScript (rendered instantly on mount)
export const BOOT_SCRIPT = [
  { type: 'line', text: 'hex thread create "Get me NexaCorp’s Q3 sales by product line"' },
  { type: 'line', text: '' },
  { type: 'line', text: '   Thread ID: 019fb3c7-0dbe-7550-b735-7590006ecc27' },
  { type: 'line', text: '   Created: 2026-07-30T16:06:34.601Z' },
  { type: 'line', text: '   URL: https://nexacorp.hex.tech/hex/thread/019fb3c7-0dbe-7550-b735-7590006ecc27' },
  { type: 'line', text: '' },
]
export const LINK_HREF_OVERRIDES = {
  'https://nexacorp.hex.tech/hex/thread/019fb3c7-0dbe-7550-b735-7590006ecc27': 'https://hex.tech/product/threads/',
}

export const MAGIC_ART = `
------------------------------------------
------------------------+++%*+++=---------
----------------------=*=**@@@@@@#=-------
--------------------=**++%@@@#---#=-------
-------------------+=+=++%@@@*----*=------
------------+###@%##+*+%%@@@#-------------
------------=*@@@@@@@@@@@@@@@%#-----------
--------------=%@@@#*%@@%@@@@@@@+---------
------------------+#%%+@@@%@@@@@@%=-------
-----------------%+@@%*@@@@@@@@=----------
-----------------%@%+@@@@@@@@@@@*---------
---------------#@@=-+@#=%@@@@@@@@@=-------
--------------=#*=--+@@##@@==*@@@@@@=-----
------------=**#@#=##@#%@@####*+@@@@@=----
------------%@%%+-=#*##@@@#@%@@@##@@@%----
--+#=------+*-=%*#=%*@@@@@+=%+%*@@@@@%----
--=*@#--+#**#@%@@*=*@@@@#*@@@*=*#*@@@@*---
-=#**+##*-+@*###%*=+@@@%+#@@@@@*%#@*@@@=--
--=++#@@@%*@*##@@*#*%*@#+#@#*@@@@@@@@@@+--
------=@@@@@*%@#%*@*@@@@*%@@*@@@@@@@@@@#--
------=%@@@@#@@@@*@@%=*@@@@@*@@@@@@@@@@#--
------=%@@@@*@@@@+@@@@@@@@@@+@@@@@@@@@@@*-
-------%@@@@*@@@@+%+@@@@+#@@@@@@@@@@@@@@#-
------=#*@@@#@@@@*%+%@@@@@@@@@@@@@@@@@@@#-
-------**@@@@@%@@*=+=#@@@@@@@@@@@@@@@@@@#-
--------+@@@@@%@@*=+=#@@#%@@@%*@@@@@@@@**-
----------+#*#=+#*=-=*%**%@@*@@*%@@*#*#---
---------------------=+--+=*=*------------
`.trim().split('\n')

export const LISTS = {
  projects: [{name:"Galactic Revenue Model (v2)",id:"019d4e86"},{name:"Core Worlds Sales Analysis",id:"019d4ed4"},{name:"Mid-Rim Growth Trends",id:"019d4f21"},{name:"Outer Rim Expansion Dashboard",id:"019d4f2c"},{name:"Product Line Performance (Q3)",id:"019d4f6d"}],
  connections: [{name:"Warehouse — prod",id:"conn_8a2f"},{name:"Snowflake analytics",id:"conn_3c91"},{name:"BigQuery marketing",id:"conn_7dde"}],
  collections: [{name:"NexaCorp — Executive North Star",id:"col_11aa"},{name:"Nexa 360 — Customer health",id:"col_22bb"},{name:"NexaPulse — Weekly KPI pack",id:"col_33cc"},{name:"Nexa Revenue — ARR & NRR",id:"col_44dd"},{name:"Nexa Field — Regional performance",id:"col_55ee"},{name:"Nexa Launch — GTM & adoption",id:"col_66ff"},{name:"Nexa Trust — Security & compliance",id:"col_77a0"},{name:"Nexa Support — CSAT & ticket trends",id:"col_88b1"}],
  groups: [{name:"Data team",id:"grp_01"},{name:"RevOps",id:"grp_02"},{name:"Finance",id:"grp_03"},{name:"Marketing",id:"grp_04"},{name:"Sales",id:"grp_05"},{name:"Product",id:"grp_06"},{name:"Engineering",id:"grp_07"},{name:"Customer Success",id:"grp_08"},{name:"Support",id:"grp_09"},{name:"HR",id:"grp_10"},{name:"Legal",id:"grp_11"},{name:"IT",id:"grp_12"}],
  users: [{name:"Ada Lovelace",id:"usr_9f01"},{name:"Grace Hopper",id:"usr_9f02"},{name:"Katherine Johnson",id:"usr_9f03"},{name:"Marie Curie",id:"usr_9f04"},{name:"Nikola Tesla",id:"usr_9f05"},{name:"Albert Einstein",id:"usr_9f06"},{name:"Isaac Newton",id:"usr_9f07"},{name:"Galileo Galilei",id:"usr_9f08"},{name:"Richard Feynman",id:"usr_9f09"},{name:"Niels Bohr",id:"usr_9f10"},{name:"Louis Pasteur",id:"usr_9f11"},{name:"Rosalind Franklin",id:"usr_9f12"}],
}
export const LIST_LABELS = {projects:"Projects",connections:"Connections",collections:"Collections",groups:"Groups",users:"Users"}

export const COMMAND_GROUPS = [{id:"app",description:"Manage and run Hex apps"},{id:"project",description:"Manage projects"},{id:"cell",description:"Manage cells in a project"},{id:"run",description:"Manage and inspect runs"},{id:"connection",description:"Manage data connections"},{id:"collection",description:"Manage workspace collections"},{id:"group",description:"Manage workspace groups"},{id:"user",description:"Manage workspace users"},{id:"magic",description:"A little terminal enchantment"}]

export const COMMANDS = [{match:"hex help",description:"Show help",outcome:{kind:"rootHelp"}},{match:"hex magic",description:"Summon ASCII wizardry",loadingMs:250,outcome:{kind:"magic"}},{match:"hex app",description:"Manage Hex apps",group:"app",isGroupRoot:!0,groupUsage:"hex app [command] [options]",outcome:{kind:"submenu"}},{match:"hex app run",description:"Run a Hex app for a project",loadingMs:250,group:"app",subLabel:"run",subHelp:"Run a Hex app for a project",outcome:{kind:"docs"}},{match:"hex project",description:"Manage projects",group:"project",isGroupRoot:!0,groupUsage:"hex project [command] [options]",outcome:{kind:"submenu"}},{match:"hex project create",description:"Create a new project",loadingMs:250,group:"project",subLabel:"create",subHelp:"Create a new project (with title)",outcome:{kind:"docs"}},{match:"hex project list",description:"List accessible projects",loadingMs:750,group:"project",subLabel:"list",subHelp:"List accessible projects",outcome:{kind:"list",list:"projects"}},{match:"hex project get",description:"Get project details",loadingMs:250,group:"project",subLabel:"get",subHelp:"Get details for a project",outcome:{kind:"docs"}},{match:"hex project open",description:"Open a project in the browser",loadingMs:250,group:"project",subLabel:"open",subHelp:"Open a project in the browser",outcome:{kind:"docs"}},{match:"hex project run",description:"Run the draft version of a project",loadingMs:250,group:"project",subLabel:"run",subHelp:"Run the draft version of a project",outcome:{kind:"docs"}},{match:"hex cell",description:"Manage cells",group:"cell",isGroupRoot:!0,groupUsage:"hex cell [command] [options]",outcome:{kind:"submenu"}},{match:"hex cell list",description:"List cells in a project",loadingMs:750,group:"cell",subLabel:"list",subHelp:"List cells for a project",outcome:{kind:"docs"}},{match:"hex cell get",description:"Get cell details",loadingMs:250,group:"cell",subLabel:"get",subHelp:"Get details for a cell",outcome:{kind:"docs"}},{match:"hex cell create",description:"Create a cell",loadingMs:250,group:"cell",subLabel:"create",subHelp:"Create a cell (type, source, project)",outcome:{kind:"docs"}},{match:"hex cell update",description:"Update a cell",loadingMs:250,group:"cell",subLabel:"update",subHelp:"Update a cell",outcome:{kind:"docs"}},{match:"hex cell delete",description:"Delete a cell",loadingMs:250,group:"cell",subLabel:"delete",subHelp:"Delete a cell",outcome:{kind:"docs"}},{match:"hex cell run",description:"Run a cell",loadingMs:250,group:"cell",subLabel:"run",subHelp:"Run a cell",outcome:{kind:"docs"}},{match:"hex run",description:"Manage runs",group:"run",isGroupRoot:!0,groupUsage:"hex run [command] [options]",outcome:{kind:"submenu"}},{match:"hex run list",description:"List runs for a project",loadingMs:750,group:"run",subLabel:"list",subHelp:"List runs for a project",outcome:{kind:"docs"}},{match:"hex run status",description:"Inspect run status",loadingMs:250,group:"run",subLabel:"status",subHelp:"Get status for a run",outcome:{kind:"docs"}},{match:"hex run cancel",description:"Cancel a run",loadingMs:250,group:"run",subLabel:"cancel",subHelp:"Cancel a run",outcome:{kind:"docs"}},{match:"hex connection",description:"Manage connections",group:"connection",isGroupRoot:!0,groupUsage:"hex connection [command] [options]",outcome:{kind:"submenu"}},{match:"hex connection list",description:"List data connections",loadingMs:750,group:"connection",subLabel:"list",subHelp:"List data connections",outcome:{kind:"list",list:"connections"}},{match:"hex connection get",description:"Get connection details",loadingMs:250,group:"connection",subLabel:"get",subHelp:"Get details for a connection",outcome:{kind:"docs"}},{match:"hex collection",description:"Manage collections",group:"collection",isGroupRoot:!0,groupUsage:"hex collection [command] [options]",outcome:{kind:"submenu"}},{match:"hex collection list",description:"List collections",loadingMs:750,group:"collection",subLabel:"list",subHelp:"List workspace collections",outcome:{kind:"list",list:"collections"}},{match:"hex collection get",description:"Get collection details",loadingMs:250,group:"collection",subLabel:"get",subHelp:"Get details for a collection",outcome:{kind:"docs"}},{match:"hex group",description:"Manage groups",group:"group",isGroupRoot:!0,groupUsage:"hex group [command] [options]",outcome:{kind:"submenu"}},{match:"hex group list",description:"List groups",loadingMs:750,group:"group",subLabel:"list",subHelp:"List workspace groups",outcome:{kind:"list",list:"groups"}},{match:"hex group get",description:"Get group details",loadingMs:250,group:"group",subLabel:"get",subHelp:"Get details for a group",outcome:{kind:"docs"}},{match:"hex group create",description:"Create a group",loadingMs:250,group:"group",subLabel:"create",subHelp:"Create a workspace group",outcome:{kind:"docs"}},{match:"hex group delete",description:"Delete a group",loadingMs:250,group:"group",subLabel:"delete",subHelp:"Delete a workspace group",outcome:{kind:"docs"}},{match:"hex user",description:"Manage users",group:"user",isGroupRoot:!0,groupUsage:"hex user [command] [options]",outcome:{kind:"submenu"}},{match:"hex user list",description:"List workspace users",loadingMs:750,group:"user",subLabel:"list",subHelp:"List workspace users",outcome:{kind:"list",list:"users"}},{match:"hex user get",description:"Get user details",loadingMs:250,group:"user",subLabel:"get",subHelp:"Get details for a user",outcome:{kind:"docs"}}]
