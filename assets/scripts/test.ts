
import { _decorator, Component, director, Button } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('test')
export class test extends Component {
  @property(Button)
  enterGame: Button = null;

  start() {
    director.preloadScene("test2", function (err, scene) {
      console.log('test2 scene preloaded');
    });
    this.enterGame.node.on(Button.EventType.CLICK, () => {
      director.loadScene("test2");
    });
  }
}
