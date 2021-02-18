import { BotApplication } from '../BotApplication/BotApplication'
import { BotApplicationData } from '../BotApplication/BotApplicationProtocol'

export interface IBotsApplicationManager {
  get(token: string): BotApplication | undefined
  add(data: BotApplicationData): Promise<void>
  remove(token: string): Promise<void>
  modify(data: BotApplicationData): Promise<void>
}
