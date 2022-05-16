
import { _decorator, Component, Node, Label, Button, tween, Tween, Vec3, Event } from 'cc';
import { audioManager } from './audioManager';
import { constant } from './constant';
const { ccclass, property } = _decorator;

interface dialogConfig {
  title?: string;
  msg: string;
  ok?: Function;
  cancel?: Function;
  autoClose?: number;
}

@ccclass('myDialog')
export class myDialog extends Component {

  @property(Label)
  titleTxt: Label = null;
  @property(Label)
  bodyTxt: Label = null;
  @property(Button)
  btnOk: Button = null;
  @property(Button)
  btnCancel: Button = null;
  @property(Node)
  mask: Node = null;
  @property(Node)
  content: Node = null;

  private _callBack_OK: Function = () => { };
  private _callBack_Cancel: Function = () => { };

  private myTween: Tween<Node> = null;
  private _vec_hide: Vec3 = null;

  start() {
    // 直接隱藏
    this._vec_hide = new Vec3(0.7, 0.7, 1);
    this.node.active = false;

    /** 遮罩事件 */
    this.mask.on(Node.EventType.TOUCH_START, e => {
      /** 停止傳播事件 */
      return e.propagationStopped = true;
    });

    /** 確定按鈕 */
    this.btnOk.node.on(Node.EventType.TOUCH_END, e => {
      audioManager.instance.playSound(constant.AUDIO_SOUND.BTN_CLICK_2);
      this._callBack_OK && this._callBack_OK();
      this.hide();
    });

    /** 取消按鈕 */
    this.btnCancel.node.on(Node.EventType.TOUCH_END, e => {
      audioManager.instance.playSound(constant.AUDIO_SOUND.BTN_CLICK_2);
      this._callBack_Cancel && this._callBack_Cancel();
      this.hide();
    });

  }

  show(config: dialogConfig) {
    if (!config) return;

    this._callBack_OK = config.ok;
    this._callBack_Cancel = config.cancel;
    this.titleTxt.string = config.title || "提示訊息";
    this.bodyTxt.string = config.msg || "";


    this.myTween = tween(this.content);
    this.myTween
      .call(() => {
        this.node.setScale(Vec3.ONE);
        this.content.setScale(this._vec_hide);
        this.node.active = true;
      })
      .to(0.2, { scale: Vec3.ONE })
      .call(() => {
      })
      .start();

  }

  hide() {
    this.myTween = tween(this.content);
    this.myTween
      .to(0.1, { scale: this._vec_hide })
      .call(() => {
        this.node.setScale(Vec3.ZERO);
        this.node.active = false;
      })
      .start();
  }

}
