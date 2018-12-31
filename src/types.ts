export interface StoreState {
  oidc: OidcData
}

declare interface OidcData {
  user: any,
  isLoadingUser: boolean
}
