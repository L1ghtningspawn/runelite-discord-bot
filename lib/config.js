module.exports = {
  // Minimum level of messages that are logged to console
  logLevel: process.env.LOG_LEVEL || 'info',
  // Bot command prefix in Discord server
  prefix: '!',
  databases: {
    // Path to database holding custom commands
    commands: './db.json',
    // Path to database holding links between GitHub user id and Discord user id
    githubUsers: './gh_users.json'
  },
  // Name of Discord role that will be used to check if user can be announced
  streamerRole: 'streamer',
  // Name of Discord channel where streamers will be announced
  streamerChannel: 'twitch',
  // Channels where custom commands will be ignored
  noCustomCommandsChannels: ['development'],
  // URL to icon that is used for bot custom embeds
  logoUrl: 'https://raw.githubusercontent.com/runelite/runelite.net/master/public/img/runelite_logo.png',
  // GitHub API token used to avoid rejection from GitHub API when request limit is reached
  githubToken: "9f2b5af8e6c91a6f505aca1d05594fc00ae61f9a",
  // This is token used for bot to login, must be from Discord Application who has bot enabled
  discordToken: "NjIzNTg1MTgwOTUwNTkzNTU2.XqMmWw.4Oh6dfIkBCmh0OJMgCsxPwzlJNI",
  // Used for getting information about streamer from Twitch API
  twitchClientId: process.env.TWITCH_CLIENT_ID,
  // Used for connecting Discord and GitHub accounts
  github: {
    clientId: process.env.GITHUB_AUTH_CLIENT_ID,
    clientSecret: process.env.GITHUB_AUTH_CLIENT_SECRET,
    authedRole: 'github-verified',
    contributedRole: 'github-contributor',
    pluginHubContributedRole: 'pluginhub-contributor',
    organization: 'runelite'
  },
  // GitHub repositories to fetch contributors from
  contributorRepos: [
    'runelite/runelite',
    'runelite/launcher',
    'runelite/runelite.net'
  ],
  // GitHub repository to fetch plugin hub contributors from
  pluginHubRepo: 'runelite/plugin-hub'
}
