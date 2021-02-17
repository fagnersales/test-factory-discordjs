export interface BotApplicationData {
  token: string
  commands: number[]
}

export interface IBotApplication {
  start(): Promise<void>
  modify(newCommands: number[]): Promise<void>
  remove(): Promise<void>
}
