
import { _decorator, AudioSource, resources, AudioClip } from 'cc';
import { constant } from './constant';
const { ccclass, property } = _decorator;

export class audioManager {

  private static _instance: audioManager;
  private static _audioSource?: AudioSource;

  static get instance() {
    if (this._instance) {
      return this._instance;
    }

    this._instance = new audioManager();
    return this._instance;
  }

  soundVolume: number = 1;

  // init AudioManager in GameRoot.
  init(audioSource: AudioSource) {
    audioManager._audioSource = audioSource;
    this.preLoadAll();
  }

  preLoadAll() {
    resources.preloadDir('audio');
  }

  /**
* 播放音乐
* @param {String} name 音乐名称可通过constants.AUDIO_MUSIC 获取
* @param {Boolean} loop 是否循环播放
*/
  playMusic(loop: boolean) {
    const audioSource = audioManager._audioSource!;
    // assert(audioSource, 'AudioManager not inited!');

    if (audioSource.clip && audioSource.playing) return;

    const path = 'audio/' + constant.AUDIO_SOUND.BACKGROUND;
    resources.load(path, AudioClip, (err, clip) => {
      audioSource.volume = 0.5;
      audioSource.clip = clip;
      audioSource.loop = loop;
      audioSource.playOnAwake = true;
      if (!audioSource.playing) {
        audioSource.play();
      }
    });

  }

  /**
   * 播放音效
   * @param {String} name 音效名称可通过constants.AUDIO_SOUND 获取
   */
  playSound(name: string) {
    const audioSource = audioManager._audioSource!;
    // assert(audioSource, 'AudioManager not inited!');

    const path = 'audio/';
    resources.load(path + name, AudioClip, (err, clip) => {
      if (err) {
        console.error(err);
        return;
      }

      audioSource.playOneShot(clip, audioSource.volume ? this.soundVolume / audioSource.volume : 0);
    });

  }
}
