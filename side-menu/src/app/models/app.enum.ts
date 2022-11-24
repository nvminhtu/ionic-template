// export Enum
// Enum theo cap tot nhat la string
export enum AppEnumEvents {
  HandleGoBackVehicleInsuranceAdd = 'HandleGoBackVehicleInsuranceAdd', // gan string luon cho gia tri hang
  HandleGoBackReport = 'HandleGoBackReport',
  HasNewReport = 'HasNewReport',
  NewReportViewed = 'NewReportViewed',
  ViewedRoadside = 'ViewedRoadside',
  IsAuthenticated = 'IsAuthenticated',
  Logout = 'Logout',
  ShowLoading = 'ShowLoading',
  CrashDetected = 'CrashDetected',
  NeedResetPassword = 'NeedResetPassword',
  UnauthorizedAccount = 'UnauthorizedAccount',
  DtcFound = 'DtcFound',
  ChangeHomePage = 'ChangeHomePage',
  HandleGoBackUpdateVehicle = 'HandleGoBackUpdateVehicle',
  ClickNotification = 'ClickNotification',
  HasNewNotification = 'HasNewNotification',
  SetNotificationsPassive = 'SetNotificationsPassive',
}
export enum AppYoutubers {
  ShowSubscriber, // 0
  ShowEditors, // 1
  ShowViewers, // 2
  ShowMembers, // ...
  ShowLikers, // ..
  ShowHaters, // ..
  ShowCommentors,
}
