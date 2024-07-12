import { contextBridge } from 'electron'

if (!process.contextIsolated) {
  console.error('contextIsolated must be enabled in BrowserWindow')
}

try {
  contextBridge.exposeInMainWorld('context', {
    //TODO
  })
} catch (error) {
  console.error(error)
}
