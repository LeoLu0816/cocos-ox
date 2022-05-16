
import { EventTarget } from 'cc';
const eventTarget = new EventTarget();

/** 勝利條件 */
const winnerDefind = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6]
];

const winLineConfig = [
  { p: { x: 0, y: 200 }, r: { z: 0 } }, { p: { x: 0, y: 0 }, r: { z: 0 } }, { p: { x: 0, y: -200 }, r: { z: 0 } },
  { p: { x: -200, y: 0 }, r: { z: 90 } }, { p: { x: 0, y: 0 }, r: { z: 90 } }, { p: { x: 200, y: 0 }, r: { z: 90 } },
  { p: { x: 0, y: 0 }, r: { z: -45 } }, { p: { x: 0, y: 0 }, r: { z: 45 } }
]

/** 遊戲資訊 */
interface GameInfo {

  /** 目前場次 */
  round: number;

  /** 平手次數 */
  drawCount: number;

  /** 是否與AI對戰 */
  useAi: boolean;

}

/** 玩家資訊 */
interface Player {

  /** 識別用 */
  id: number;

  /** 玩家名稱 */
  name: string;

  /** O或X */
  type: boolean;

  /** 該局獲勝 */
  winCount: number;

  /** 該局次數 */
  step: number;

}

class Store extends EventTarget {

  p1: number;
  cb: Function;

  players: Player[] = [];
  gameInfo: GameInfo = null;
  /** 該局的玩家 */
  nowPlayerIndex: number = -1;

  /** 盤上的OX資料 */
  roadData = [];

  /** 勝利的盤索引 */
  winLineIndex = 0;

  /** 對戰中 */
  isGaming = false;

  /** 本場勝利者的索引 */
  winPlayerIndex = -1;

  /** 該局的步數, 用於判斷是否平手 */
  roundStep: 0;

  constructor() {
    super();

    const p1: Player = {
      id: 1,
      name: '玩家1',
      type: true,
      winCount: 0,
      step: 0,
    }
    const p2: Player = {
      id: 2,
      name: '玩家2',
      type: false,
      winCount: 0,
      step: 0,
    }

    this.gameInfo = {
      round: 0,
      drawCount: 0,
      useAi: false,
    }

    this.players = [p1, p2];

    this.resetData();
  }

  clearGame() {
    this.players.forEach(x => {
      x.winCount = 0;
      x.step = 0;
    });
    this.gameInfo.round = 0;
    this.gameInfo.drawCount = 0;
    this.gameInfo.useAi = false;
    this.resetData();
    this.emit("updatePlayerInfo");
    this.emit("updateRound");
    this.emit("updateDrawCount");
    this.emit("clearGame");
    this.emit("roundDone");

  }

  resetData() {

    this.winPlayerIndex = -1;
    this.isGaming = false;
    this.roundStep = 0;
    this.nowPlayerIndex = -1;

    this.roadData = new Array(9).fill(undefined);

    this.emit("resetData");
  }

  init() {

  }

  startRound() {
    this.resetData();
    this.isGaming = true;
    this.gameInfo.round++;
    this.roundStep = 0;
    this.emit("updateRound");
    this.nowPlayerIndex = 0;
    this.emit("updatePlayerInfo");
  }

  /** 判斷目前該局是否已結束(出現優勝者) */
  checkWinner(): boolean {
    let isWin = false;

    const player = this.players[this.nowPlayerIndex];
    const checkType: boolean = player.type;
    const mySetIndex: number[] = this.roadData.map((v, i) => ({ i, v })).filter(x => x.v === checkType).map(x => x.i);
    // console.log(`${player.name} set:`, mySetIndex);
    isWin = winnerDefind.some((wv, wi) => {
      // const n1 = wv[0];
      // const n2 = wv[1];
      // const n3 = wv[2];
      // console.log(`check index`, wv);
      // let w1 = mySetIndex.indexOf(n1) >= 0;
      // let w2 = mySetIndex.indexOf(n2) >= 0;
      // let w3 = mySetIndex.indexOf(n3) >= 0;
      // console.log(`check index`, [w1, w2, w3]);
      const isWin = wv.every(x => mySetIndex.indexOf(x) >= 0);
      if (isWin) this.winLineIndex = wi;
      return isWin;
    });

    // console.log(`${player.name} win: ${isWin}`);

    return isWin;
  }

  getWinLineConfig() {
    return winLineConfig[this.winLineIndex];
  }

  checkDraw() {
    return this.roundStep >= 9;
  }

  /**
   * 執行下個回合
   * @param index 該局的索引
   */
  next(index) {
    const player = this.players[this.nowPlayerIndex];
    this.roadData[index] = player.type;
    player.step++;
    this.roundStep++;
    if (this.checkWinner()) {
      player.winCount++;
      this.winPlayerIndex = this.nowPlayerIndex;
      this.isGaming = false;
      // this.resetData();
      this.emit("hasWinner");
      this.emit("roundDone");
    } else if (this.checkDraw()) {
      this.isGaming = false;
      this.gameInfo.drawCount++;
      this.nowPlayerIndex = -1;
      this.emit("updateDrawCount");
      this.emit("roundDone");
      this.emit("showDraw");
    } else {
      this.nowPlayerIndex = this.nowPlayerIndex === 0 ? 1 : 0;
    }
    this.emit("updatePlayerInfo");
  }
}

export default new Store();