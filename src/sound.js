// Âm thanh tự tổng hợp bằng WebAudio (không cần file âm thanh)
import { S } from './state.js';

let AC = null, musicGain = null, musicTimer = null;
export function audioUnlock() {
  if (!AC) { try { AC = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { return; } }
  if (AC.state === 'suspended') AC.resume();
  if (S.music && !musicTimer) startMusic();
}

function tone(f, d, { type = 'sine', vol = 0.12, at = 0, to = null, dest = null } = {}) {
  const t = AC.currentTime + at, o = AC.createOscillator(), g = AC.createGain();
  o.type = type; o.frequency.setValueAtTime(f, t); if (to) o.frequency.exponentialRampToValueAtTime(to, t + d);
  g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(vol, t + 0.01); g.gain.exponentialRampToValueAtTime(0.0001, t + d);
  o.connect(g); g.connect(dest || AC.destination); o.start(t); o.stop(t + d + 0.05);
}

export function sfx(k) {
  if (!AC || !S.sound) return;
  try {
    switch (k) {
      case 'tap': tone(700, 0.06, { type: 'triangle', vol: 0.06 }); break;
      case 'plant': tone(380, 0.08, { type: 'triangle' }); tone(520, 0.1, { type: 'triangle', at: 0.06 }); break;
      case 'harvest': tone(520, 0.1, { to: 900, type: 'triangle' }); break;
      case 'coin': tone(988, 0.08, { type: 'square', vol: 0.05 }); tone(1319, 0.2, { type: 'square', vol: 0.05, at: 0.07 }); break;
      case 'collect': [660, 880].forEach((f, i) => tone(f, 0.1, { type: 'triangle', at: i * 0.06 })); break;
      case 'build': [262, 330, 392].forEach((f, i) => tone(f, 0.12, { type: 'square', vol: 0.05, at: i * 0.07 })); break;
      case 'level': [523, 659, 784, 1047, 1319].forEach((f, i) => tone(f, 0.25, { type: 'triangle', vol: 0.14, at: i * 0.1 })); break;
      case 'no': tone(240, 0.18, { to: 170, vol: 0.08 }); break;
      case 'chop': tone(160, 0.1, { type: 'square', vol: 0.06 }); tone(120, 0.12, { type: 'square', vol: 0.05, at: 0.12 }); break;
      case 'ship': tone(196, 0.5, { type: 'sawtooth', vol: 0.05 }); tone(147, 0.6, { type: 'sawtooth', vol: 0.05, at: 0.45 }); break;
      case 'moo': tone(180, 0.35, { to: 140, type: 'sawtooth', vol: 0.04 }); break;
      case 'cluck': tone(900, 0.05, { type: 'square', vol: 0.03 }); tone(1100, 0.05, { type: 'square', vol: 0.03, at: 0.07 }); break;
    }
  } catch (e) { }
}

// Nhạc nền nhẹ nhàng, lặp lại
const MEL = [67, 72, 76, 74, 72, 67, 69, 72, 71, 67, 64, 67, 72, 76, 79, 77, 76, 72, 74, 76, 72, 0, 0, 0];
const BASS = [48, 48, 53, 53, 55, 55, 48, 48];
export function startMusic() {
  if (!AC || musicTimer) return;
  musicGain = AC.createGain(); musicGain.gain.value = 0.35; musicGain.connect(AC.destination);
  let step = 0; const beat = 0.32;
  const hz = n => 440 * Math.pow(2, (n - 69) / 12);
  musicTimer = setInterval(() => {
    if (!S.music || AC.state !== 'running') return;
    const n = MEL[step % MEL.length];
    if (n) tone(hz(n), beat * 0.9, { type: 'triangle', vol: 0.05, dest: musicGain });
    if (step % 3 === 0) tone(hz(BASS[Math.floor(step / 3) % BASS.length]), beat * 2.5, { type: 'sine', vol: 0.06, dest: musicGain });
    step++;
  }, beat * 1000);
}
export function stopMusic() { clearInterval(musicTimer); musicTimer = null; musicGain?.disconnect(); }
