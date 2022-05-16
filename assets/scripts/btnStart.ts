
import { _decorator, Component, Node, Button, Label } from 'cc';
import { audioManager } from './audioManager';
import { constant } from './constant';
import store from './store';
const { ccclass, property } = _decorator;

@ccclass('btnStart')
export class btnStart extends Component {

  private _canClick = true;

  start() {
    this.node.on(Node.EventType.TOUCH_END, e => {
      if(!this._canClick) return;

      audioManager.instance.playSound(constant.AUDIO_SOUND.BTN_CLICK_2);

      /** 開始遊戲 */
      store.startRound();

      /** disable button */
      const btn = this.getComponent(Button);
      btn.interactable = false;
      this._canClick = false;

      /** 更改內部文字 */
      const btnTxt = this.node.getChildByName("Label").getComponent(Label);
      btnTxt.string = "下局";

      // audioManager.instance.playMusic(true);
    });

    store.on("roundDone", () => {
      const btn = this.getComponent(Button);
      btn.interactable = true;
      this._canClick = true;
    });

    store.on("clearGame", () => {
      /** 更改內部文字 */
      const btnTxt = this.node.getChildByName("Label").getComponent(Label);
      btnTxt.string = "開始";
    })
  }
}
