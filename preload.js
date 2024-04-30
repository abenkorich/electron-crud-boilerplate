const { contextBridge, ipcRenderer } = require('electron');

ipcRenderer.on('form-submission-reply', (event, response) => {
  alert(response);
});

contextBridge.exposeInMainWorld('electronAPI', {
  versions: process.versions,
  submitForm: (product) => ipcRenderer.send('submit-form', product),
  handleFormSubmissionReply: (callback) => ipcRenderer.on('form-submission-reply', callback)
});
