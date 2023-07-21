export const Truthy = Object.freeze({
  NO: 0,
  YES: 1,
})

export const TruthyEnum = Object.freeze({
  [Truthy.NO]: 'Không',
  [Truthy.YES]: 'Có',
})

export const ColorRange = ['blue', 'green', 'purple', 'pink', 'orange', 'cyan', 'red']

export const BroadcastMappingParamType = Object.freeze({
  RECIPIENT_INFO: 'recipient.info',
  END_USERS_ZALO: 'end_users_zalo',
  STATIC: 'static',
})

export const BroadcastMappingParamTypeEnum = Object.freeze({
  [BroadcastMappingParamType.RECIPIENT_INFO]: 'Dữ liệu trong file tải lên',
  [BroadcastMappingParamType.END_USERS_ZALO]: 'Dữ liệu của người nhận trong Zalo',
  [BroadcastMappingParamType.STATIC]: 'Giá trị cố định',
})

export const BroadcastMappingParamEndUser = Object.freeze({
  user_id: 'ID tài khoản',
  name: 'Tên tài khoản',
  phone: 'Số điện thoại',
  gender: 'Giới tính',
  birthday: 'Ngày sinh',
  email: 'Email',
  avatar: 'Ảnh đại diện',
  province: 'Tỉnh thành',
  district: 'Quận huyện',
  ward: 'Phường xã',
  address: 'Địa chỉ',
})

export const BroadcastStatus = Object.freeze({
  WAITING: 0,
  SENDING: 1,
  DONE: 2,
  ERROR: 3,
  CANCELED: 4,
})

export const MessageResultEnum = Object.freeze({
  [Truthy.NO]: 'Thất bại',
  [Truthy.YES]: 'Thành công',
})

export const RecipientCollectionStatus = Object.freeze({
  WAITING: 0,
  PROCESSING: 1,
  DONE: 2,
  ERROR: 3,
})

export const SenderPlatform = Object.freeze({
  ZALO_OA: 'Zalo/OA',
  FPT_SMS: 'FPT/SMS',
  INFOBIP_SMS: 'Infobip/SMS',
})

export const SendMode = Object.freeze({
  ZMS: 1,
  ZNS: 2,
  SMS: 3,
})

export const ZMSMessageType = Object.freeze({
  TEXT: 'text',
  LIST: 'list',
  REQUEST_USER_INFO: 'request_user_info',
  MEDIA: 'media',
})

export const ZMSMessageTypeEnum = Object.freeze({
  [ZMSMessageType.TEXT]: 'Văn bản',
  [ZMSMessageType.LIST]: 'Danh sách',
  [ZMSMessageType.REQUEST_USER_INFO]: 'Yêu cầu thông tin',
  //[ZMSMessageTypes.MEDIA]: 'Đa phương tiện',
})

export const ZMSMessageAction = Object.freeze({
  NOTHING: '',
  OPEN_URL: 'oa.open.url',
  QUERY_SHOW: 'oa.query.show',
  QUERY_HIDE: 'oa.query.hide',
  OPEN_SMS: 'oa.open.sms',
  OPEN_PHONE: 'oa.open.phone',
})

export const ZMSMessageActionEnum = Object.freeze({
  [ZMSMessageAction.NOTHING]: 'Không làm gì cả',
  [ZMSMessageAction.OPEN_URL]: 'Mở trang web',
  [ZMSMessageAction.QUERY_SHOW]: 'Gửi tin nhắn văn bản tới OA',
  [ZMSMessageAction.QUERY_HIDE]: 'Gửi tin nhắn văn bản tới OA (ẩn)',
  [ZMSMessageAction.OPEN_SMS]: 'Gửi tin nhắn SMS tới Quản trị viên',
  [ZMSMessageAction.OPEN_PHONE]: 'Gọi điện cho Quản trị viên',
})

export const ZMSSelectImageType = Object.freeze({
  UPLOAD: 1,
  URL: 2,
})

export const ZMSSelectImageTypeEnum = Object.freeze({
  [ZMSSelectImageType.UPLOAD]: 'Tải lên ảnh',
  [ZMSSelectImageType.URL]: 'Nhập URL ảnh',
})

export const ZNSParamTypeEnum = Object.freeze({
  STRING: 'Chuỗi',
  NUMBER: 'Số',
  CURRENCY: 'Số tiền',
  DATE: 'Thời gian',
})
