import dayjs from 'dayjs'
import cast from '@/utils/cast'
import duration from 'dayjs/plugin/duration'
import relativeTime from 'dayjs/plugin/relativeTime'
import { TIME_FORMAT } from '@/utils/consts'

export const calculateDuration = (start, end) => {
  start = cast.toDayjs(start)
  end = cast.toDayjs(end)

  dayjs.extend(duration)
  dayjs.extend(relativeTime)
  return dayjs.duration(end.diff(start)).format(TIME_FORMAT)
}
