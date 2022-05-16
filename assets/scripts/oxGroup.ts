
import { _decorator, Component, Node, Label, Color, Sprite, Tween, tween, Vec3 } from 'cc';
import { oxItem } from './oxItem';
const { ccclass, property } = _decorator;
import store from './store'

@ccclass('oxGroup')
export class oxGroup extends Component {

  @property(Label)
  private label1: Label = null;
  @property(Label)
  private label2: Label = null;
  @property(Label)
  private label3: Label = null;
  @property(Label)
  private label4: Label = null;
  @property(Label)
  private label5: Label = null;
  @property(Label)
  private label6: Label = null;
  @property(Label)
  private label7: Label = null;
  @property(Label)
  private label8: Label = null;
  @property(Label)
  private label9: Label = null;
  @property(Sprite)
  private winLine: Sprite = null;
  @property(Node)
  drawNode: Node = null;

  private oxs: Array<Label> = []

  private myTween: Tween<Node> = null;

  start() {
    this.oxs = [this.label1, this.label2, this.label3, this.label4, this.label5, this.label6, this.label7, this.label8, this.label9];
    this.resetData();
    this.myTween = tween(this.drawNode);

    this.drawNode.setScale(Vec3.ZERO);

    /** 出現優勝者 */
    store.on("hasWinner", () => {
      this.showWinLine();
    });

    /** 重置 */
    store.on("resetData", () => {
      this.resetData();
      this.hideDraw();
    });

    store.on("showDraw", () => {
      this.showDraw();
    });

    store.on("updateRound", () => {
      this.hideDraw();
      this.drawNode.active = false;
    });
  }

  resetData() {
    this.winLine.enabled = false;
    this.oxs.forEach((x, i) => {
      x.string = "　";
      x.enabled = true;
      x.color = new Color(255, 255, 255, 0);
      const cpt = x.getComponent(oxItem);
      cpt.index = i;
      cpt.hasValue = false;
    });
  }

  showWinLine() {
    const config = store.getWinLineConfig();

    // const p = this.winLine.node.getPosition();
    // console.log(p);
    this.winLine.node.setPosition(config.p.x, config.p.y, 0);

    // const r = this.winLine.node.getRotation();
    // console.log(r);
    this.winLine.node.setRotationFromEuler(0, 0, config.r.z);

    this.winLine.enabled = true;
  }

  hideDraw() {
    if (this.myTween) {
      this.myTween.stop();
      this.myTween = null;
      this.drawNode.setScale(Vec3.ZERO);
      this.drawNode.active = false;
    }
  }

  showDraw() {
    this.myTween = tween(this.drawNode);
    this.myTween
      .call(() => {
        this.drawNode.setScale(Vec3.ZERO);
        this.drawNode.active = true;
      })
      .to(0, { scale: Vec3.ZERO })
      .to(0.3, { scale: Vec3.ONE })
      .delay(1.5)
      .to(0.2, { scale: Vec3.ZERO })
      .call(() => {
        this.drawNode.active = false;
      })
      .start();
  }

}