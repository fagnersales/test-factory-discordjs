import { firestore } from './firebase'
import { botApplicationManager } from './BotsApplicationManager'

const botsCollection = firestore.collection('bots')

botsCollection.onSnapshot((query) => {
  query.docChanges().forEach((change) => {
    const { token, commands, start } = change.doc.data()
    console.log('new change')
    if (token && commands) {
      const botApplication = botApplicationManager.get(token)

      if (change.type === 'added') {
        if (start === true && !botApplication) {
          console.log('Adding a new bot!')
          botApplicationManager.add({ token, commands })
        }
      }

      if (change.type === 'modified') {
        if (start === true && botApplication) {
          console.log('Modifying an existing bot!')
          return botApplicationManager.modify({ token, commands })
        }

        if (start === false && botApplication) {
          console.log('Turning off an existing bot!')
          return botApplicationManager.remove(token)
        }

        if (start === true && !botApplication) {
          console.log('Adding a new bot!')
          botApplicationManager.add({ token, commands })
        }
      }

      if (change.type === 'removed') {
        console.log('Turning off an existing bot!')
        botApplicationManager.remove(token)
      }
    }
  })
})
