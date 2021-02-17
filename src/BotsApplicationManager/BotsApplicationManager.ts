import { BotApplicationData } from '../BotApplication/BotApplicationProtocol'
import { IBotsApplicationManager } from './BotsApplicationManagerProtocol'
import { BotApplication } from '../BotApplication/BotApplication'

export class BotsApplicationManager implements IBotsApplicationManager {
  private botsApplication: Map<string, BotApplication> = new Map()

  async add(data: BotApplicationData): Promise<void> {
    const alreadyAdded = this.botsApplication.has(data.token)

    if (alreadyAdded) throw new Error('this bot is already added.')

    const botApplicaiton = new BotApplication(data)

    this.botsApplication.set(data.token, botApplicaiton)
  }

  async modify(data: BotApplicationData): Promise<void> {
    const botApplication = this.botsApplication.get(data.token)

    if (!botApplication) throw new Error('there is no bot application with this token.')

    await botApplication.modify(data.commands)
  }

  async remove(token: string): Promise<void> {
    const botApplication = this.botsApplication.get(token)

    if (!botApplication) throw new Error('there is no bot application with this token.')
    await botApplication.remove()
  }
}
