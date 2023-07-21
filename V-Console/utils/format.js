import { DATE_FORMAT_VN, DATETIME_FORMAT_VN, TIME_FORMAT } from '@/utils/consts'
import cast from '@/utils/cast'
import { useI18n } from 'vue-i18n'
import dayjs from 'dayjs'
import { formatPhoneNumber, formatPhoneNumberNational } from '@/utils/phoneNumber'

const format = {
  toDatetime(datetime = dayjs(), fmt = DATETIME_FORMAT_VN) {
    const object = dayjs(datetime)
    return object.isValid() ? object.format(fmt) : null
  },
  toDate(datetime = dayjs(), fmt = DATE_FORMAT_VN) {
    return format.toDatetime(datetime, fmt)
  },
  toNumber(number, decimals = 0) {
    return new Intl.NumberFormat(useI18n().locale.value, {
      maximumFractionDigits: decimals,
    }).format(cast.toNumber(number))
  },
  toCurrency(number, currency = 'VND') {
    return new Intl.NumberFormat(useI18n().locale.value, {
      style: 'currency',
      currency,
      maximumFractionDigits: 0,
    }).format(cast.toNumber(number))
  },
  toPhoneNumber: formatPhoneNumber,
  toPhoneNumberNational: formatPhoneNumberNational,
}

export default format
