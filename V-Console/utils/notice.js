import { notification } from 'ant-design-vue'

const call = (type, message, options = {}) => notification[type]({ message, ...options })

const notice = {
  success(message, options = {}) {
    return call('success', message, options)
  },
  error(message, options = {}) {
    return call('error', message, options)
  },
  info(message, options = {}) {
    return call('info', message, options)
  },
  warning(message, options = {}) {
    return call('warning', message, options)
  },
}

export default notice
