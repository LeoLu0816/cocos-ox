
import { _decorator, Component, Node, Label, AudioSource, game as gameE, ToggleComponent } from 'cc';
import { oxGroup } from './oxGroup';
import { playerInfo } from './playerInfo';
import { audioManager } from './audioManager';

const { ccclass, property } = _decorator;
import store from './store'
import { constant } from './constant';

@ccclass('game')
export class GameRoot extends Component {

  @property(Node)
  oxGroup: Node = null;

  @property(Node)
  playerInfo1: Node = null;

  @property(Node)
  playerInfo2: Node = null;

  @property(Label)
  nowRundNode: Label = null;

  @property(Label)
  drawRundNode: Label = null;

  @property(AudioSource)
  private _audioSource: AudioSource = null!;

  @property(Node)
  myDialog: Node = null;

  @property(ToggleComponent)
  useAiChk: ToggleComponent = null;

  onLoad() {
    const audioSource = this.getComponent(AudioSource)!;
    this._audioSource = audioSource;
    gameE.addPersistRootNode(this.node);
    gameE.addPersistRootNode(this.myDialog);

    // init AudioManager
    audioManager.instance.init(this._audioSource);

    // 預設開啟AI
    store.gameInfo.useAi = true;
    this.useAiChk.interactable = true;
    this.useAiChk.isChecked = store.gameInfo.useAi;
    this.useAiChk.node.on("toggle", () => {
      const { isChecked } = this.useAiChk;
      store.gameInfo.useAi = isChecked;
    });
  }

  start() {
    /** 更新場數 */
    store.on("updateRound", () => {
      this.useAiChk.interactable = false;
      this.nowRundNode.getComponent(Label).string = `${store.gameInfo.round}`;
    });

    /** 更新平手 */
    store.on("updateDrawCount", () => {
      this.drawRundNode.getComponent(Label).string = `${store.gameInfo.drawCount}`;
    });

    store.on("hasWinner", () => {
      audioManager.instance.playSound(constant.AUDIO_SOUND.WIN);
    });

    store.on("clearGame", () => {
      this.useAiChk.interactable = true;
      store.gameInfo.useAi = this.useAiChk.isChecked;
    })

    this.playerInfo1.getComponent(playerInfo).myPlayerIndex = 0;
    this.playerInfo2.getComponent(playerInfo).myPlayerIndex = 1;

    audioManager.instance.playMusic(true);
  }


}