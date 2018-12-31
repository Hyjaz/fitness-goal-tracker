import { createUserManager } from 'redux-oidc'

const settings = {
  authority: "https://accounts.google.com/.well-known/openid-configuration",
  client_id: "242818654871-m0m8rpquaa2tgf37erf78dflv49mkgi2.apps.googleusercontent.com",
  redirect_uri: `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}/callback`,
  response_type: "id_token",
  scope: 'openid profile',
  filterProtocolClaims: true,
  loadUserInfo: true,
}

const userManager = createUserManager(settings);

export default userManager;
