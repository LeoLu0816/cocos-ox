import { Color } from "cc"

export class constant {
    public static AUDIO_SOUND = {
        BACKGROUND: 'background',   //背景音乐

        BTN_CLICK: 'click',
        BTN_CLICK_2: 'click2',
        BTN_CLICK_OX: 'oxClick',

        ROUNDDONE: 'roundDone',
        WIN: 'win',
    }

    public static COLOR = {
        O: new Color(128, 128, 234, 255),
        X: new Color(70, 40, 40, 255),
    }
}