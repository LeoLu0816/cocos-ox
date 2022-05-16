
import { _decorator, Component, Node, Label, Sprite, Color } from 'cc';
import { constant } from './constant';
import store from './store';
const { ccclass, property } = _decorator;

@ccclass('playerInfo')
export class playerInfo extends Component {

  public myPlayerIndex: number;

  @property(Label)
  pName: Label = null;

  @property(Label)
  winCount: Label = null;

  @property(Label)
  step: Label = null;

  @property(Label)
  winImg: Label = null;

  @property(Label)
  useTypeStr: Label = null;

  @property(Sprite)
  bg: Sprite = null;

  private _color_nowStep: Color = new Color(100, 200, 100, 220);
  private _color_nextStep: Color = new Color(150, 150, 150, 220);

  start() {
    this.winImg.node.active = false;
    this.useTypeStr.color = this.myPlayerIndex === 0 ? constant.COLOR.O : constant.COLOR.X;
    this.bg.color = this._color_nextStep;
    store.on("updatePlayerInfo", () => {
      this.updateInfo();
    });
    this.updateInfo();
  }

  updateInfo() {
    const player = store.players[this.myPlayerIndex];
    this.pName.getComponent(Label).string = player.name;
    this.winCount.getComponent(Label).string = `${player.winCount}`;
    this.step.getComponent(Label).string = `${player.step}`;

    /** 改背景顏色 */
    if (store.nowPlayerIndex === this.myPlayerIndex) {
      this.bg.color = this._color_nowStep;
    } else {
      this.bg.color = this._color_nextStep;
    }

    if (store.winPlayerIndex === this.myPlayerIndex) {
      this.winImg.node.active = true;
    } else {
      this.winImg.node.active = false;
    }
  }

}
