import { Client } from 'discord.js'

import { BotApplicationData, IBotApplication } from './BotApplicationProtocol'

export class BotApplication implements IBotApplication {
  private client: Client = new Client()
  public commands: number[] = []

  constructor(private data: BotApplicationData) {}

  async start(): Promise<void> {
    await this.client.login(this.data.token)

    console.log(`Logged in as: ${this.client.user?.username}`)
  }

  async modify(newCommands: number[]): Promise<void> {
    this.commands = newCommands
  }

  async remove(): Promise<void> {
    await this.client.destroy()
  }
}
