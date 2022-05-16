
import { _decorator, Component, Node, Label, Color } from 'cc';
import { audioManager } from './audioManager';
import { constant } from './constant';
const { ccclass, property } = _decorator;

import store from './store'

@ccclass('oxItem')
export class oxItem extends Component {

  @property(Label)
  label: Label = null

  /** true:"O", false:"X" */
  public type: boolean = false;

  /** 已有值 */
  public hasValue: boolean = false;

  /** 該按鈕的索引 */
  public index: number = 0;

  start() {

    // this.label = this.getComponent(Label);

    this.node.on(Node.EventType.TOUCH_END, () => {
      if (this.hasValue || !store.isGaming) return;
      audioManager.instance.playSound(constant.AUDIO_SOUND.BTN_CLICK);
      this.hasValue = true;
      let player = store.players[store.nowPlayerIndex];
      // this._isO = !this._isO;
      const txt = player.type ? "O" : "X";
      this.label.string = txt;
      this.label.color = player.type ? constant.COLOR.O : constant.COLOR.X;
      store.next(this.index);
    });

    store.on("updateRoad", () => {
      const myRoad = store.roadData[this.index];
      console.log(`[updateRoad] ${this.index} myRoad: `, myRoad);

      if (this.hasValue || !store.isGaming) return;
      if (myRoad === undefined) { return }

      let player = store.players[store.nowPlayerIndex];
      const txt = player.type ? "O" : "X";
      this.label.string = txt;
      this.label.color = player.type ? constant.COLOR.O : constant.COLOR.X;
      this.hasValue = true;
    });
  }
}