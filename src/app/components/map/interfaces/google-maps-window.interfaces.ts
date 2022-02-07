
export interface GoogleMapsWindow extends Window {
    gm_authFailure?: () => void;
    google?: typeof google;
  }