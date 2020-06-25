const SERVER = `https://localhost`;
const SERVERNGROK = `https://023aa5e7c17d.ngrok.io`;
const SERVERLOGIN = `https://2ab2504ca67b.ngrok.io`
const PORT = `44318`;
const API = 'api';

export const URL_SERVER = `${SERVER}:${PORT}/${API}`;
export const URL_SERVERLOGINAPI = `${SERVER}:${PORT}/${API}`;

export const URL_SERVERNGROK = `${SERVERNGROK}/${API}`;
export const URL_SERVERLOGIN = `${SERVERLOGIN}/${API}/Seguridad/Login`;

/* Rutas locales */
export const GET_MOVIMIENTOS = `${URL_SERVERNGROK}/Cfdi`;
