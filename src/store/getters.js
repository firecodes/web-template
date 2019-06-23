const getters = {
  size: state => state.app.size,
  device: state => state.app.device,
  winPage: state => state.env.winPage,
  errorLogs: state => state.errorLog.logs
}
export default getters
