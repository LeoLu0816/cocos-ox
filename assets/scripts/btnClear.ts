
import { _decorator, Component, Node, Button, game } from 'cc';
import { audioManager } from './audioManager';
import { constant } from './constant';
import { myDialog } from './myDialog';
import store from './store';
const { ccclass, property } = _decorator;

@ccclass('btnClear')
export class btnClear extends Component {

  @property(Node)
  myDialog: Node = null;

  start() {

    this.node.on(Node.EventType.TOUCH_END, btn => {
      audioManager.instance.playSound(constant.AUDIO_SOUND.BTN_CLICK_2);

      this.myDialog.getComponent(myDialog).show({
        title: "-訊息-",
        msg: "確定重置嗎？",
        ok: () => {
          store.clearGame();
        },
        cancel: () => { },
        autoClose: 1000,
      });

    });
  }

}
