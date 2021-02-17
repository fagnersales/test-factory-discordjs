import { firestore } from './firebase'
import { botApplicationManager } from './BotsApplicationManager'

const botsCollection = firestore.collection('bots')

botsCollection.onSnapshot((query) => {
  query.docChanges().forEach((change) => {
    const { token, commands } = change.doc.data()

    if (token && commands) {
      if (change.type === 'added') {
        botApplicationManager.add({ token, commands })
      }

      if (change.type === 'modified') {
        botApplicationManager.modify(commands)
      }

      if (change.type === 'removed') {
        botApplicationManager.remove(token)
      }
    }
  })
})
