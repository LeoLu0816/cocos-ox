
import { _decorator, Component, Node, Button, director, AudioSource,  game as gameE } from 'cc';
import { audioManager } from './audioManager';
const { ccclass, property } = _decorator;

@ccclass('welcome')
export class welcome extends Component {

  @property(Button)
  enterGame: Button = null;

  @property(AudioSource)
  private _audioSource: AudioSource = null!;

  onLoad() {
    // const audioSource = this.getComponent(AudioSource)!;
    // this._audioSource = audioSource;
    // gameE.addPersistRootNode(audioSource.node);

    // init AudioManager
    // audioManager.instance.init(this._audioSource);
  }

  start() {
    director.preloadScene("game", function () {
      console.log('Game scene preloaded');
    });
    this.enterGame.node.on(Node.EventType.TOUCH_END, () => {
      director.loadScene("game");
    })
  }

}