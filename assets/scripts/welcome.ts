
import { _decorator, Component, Node, Button, director } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('welcome')
export class welcome extends Component {

  @property(Button)
  enterGame: Button = null;

  start() {
    director.preloadScene("game", function () {
      console.log('Game scene preloaded');
    });
    this.enterGame.node.on(Node.EventType.TOUCH_END, () => {
      director.loadScene("game");
    })
  }

}