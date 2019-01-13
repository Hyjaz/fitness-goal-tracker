import { createUserManager } from 'redux-oidc'

const settings = {
  authority: "https://accounts.google.com/.well-known/openid-configuration",
  client_id: process.env.CLIENT_ID,
  redirect_uri: `${window.location.protocol}//${window.location.hostname}${window.location.port ? `:${window.location.port}` : ''}/callback`,
  response_type: "id_token",
  scope: 'openid profile',
  filterProtocolClaims: true,
  loadUserInfo: true,
}

const userManager = createUserManager(settings);

export default userManager;
