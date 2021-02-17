import { BotApplicationData } from '../BotApplication/BotApplicationProtocol'

export interface IBotsApplicationManager {
  add(data: BotApplicationData): Promise<void>
  remove(token: string): Promise<void>
}
