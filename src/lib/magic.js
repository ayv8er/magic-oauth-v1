import { Magic } from "magic-sdk";
import { OAuthExtension } from '@magic-ext/oauth';

export const magic = new Magic("pk_live_4BB2713F29DC9392", {
    extensions: [new OAuthExtension()],
});