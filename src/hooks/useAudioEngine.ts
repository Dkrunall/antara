import { useRef, useEffect } from 'react';

export type DrumStyle = 'techno' | 'afro';

export function useAudioEngine() {
    const audioCtxRef = useRef<AudioContext | null>(null);

    useEffect(() => {
        // Lazily initialize the AudioContext 
        const AudioContextClass = (window.AudioContext || (window as any).webkitAudioContext) as typeof AudioContext;
        if (AudioContextClass && !audioCtxRef.current) {
            audioCtxRef.current = new AudioContextClass();
        }
    }, []);

    const playKick = (time: number, style: DrumStyle = 'techno') => {
        if (!audioCtxRef.current) return;
        const ctx = audioCtxRef.current;

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.connect(gain);
        gain.connect(ctx.destination);

        if (style === 'techno') {
            // Punchy, tight techno kick
            osc.frequency.setValueAtTime(150, time);
            osc.frequency.exponentialRampToValueAtTime(0.01, time + 0.5);

            gain.gain.setValueAtTime(1.5, time);
            gain.gain.exponentialRampToValueAtTime(0.01, time + 0.5);

            osc.start(time);
            osc.stop(time + 0.5);
        } else {
            // Deeper, looser Afro house kick
            osc.frequency.setValueAtTime(100, time);
            osc.frequency.exponentialRampToValueAtTime(20, time + 0.6);

            gain.gain.setValueAtTime(1.5, time);
            gain.gain.exponentialRampToValueAtTime(0.01, time + 0.6);

            osc.start(time);
            osc.stop(time + 0.6);
        }
    };

    const playClap = (time: number, style: DrumStyle = 'techno') => {
        if (!audioCtxRef.current) return;
        const ctx = audioCtxRef.current;

        // Noise buffer for clap/snare
        const bufferSize = ctx.sampleRate * 0.5;
        const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let i = 0; i < bufferSize; i++) {
            data[i] = Math.random() * 2 - 1;
        }

        const noise = ctx.createBufferSource();
        noise.buffer = buffer;

        const noiseFilter = ctx.createBiquadFilter();
        noiseFilter.type = 'bandpass';
        noiseFilter.frequency.value = style === 'techno' ? 1000 : 800;

        const noiseGain = ctx.createGain();
        noiseGain.gain.setValueAtTime(1, time);
        noiseGain.gain.exponentialRampToValueAtTime(0.01, time + 0.2);

        noise.connect(noiseFilter);
        noiseFilter.connect(noiseGain);
        noiseGain.connect(ctx.destination);

        noise.start(time);
    };

    const playHat = (time: number, style: DrumStyle = 'techno') => {
        if (!audioCtxRef.current) return;
        const ctx = audioCtxRef.current;

        // Metallic synthesized hi-hat
        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const osc3 = ctx.createOscillator();
        const osc4 = ctx.createOscillator();
        const osc5 = ctx.createOscillator();
        const osc6 = ctx.createOscillator();

        const bandpass = ctx.createBiquadFilter();
        bandpass.type = 'bandpass';
        bandpass.frequency.value = 10000;

        const highpass = ctx.createBiquadFilter();
        highpass.type = 'highpass';
        highpass.frequency.value = 7000;

        const gain = ctx.createGain();

        osc1.frequency.value = 200;
        osc2.frequency.value = 300;
        osc3.frequency.value = 400;
        osc4.frequency.value = 500;
        osc5.frequency.value = 600;
        osc6.frequency.value = 700;

        osc1.type = 'square';
        osc2.type = 'square';
        osc3.type = 'square';
        osc4.type = 'square';
        osc5.type = 'square';
        osc6.type = 'square';

        osc1.connect(bandpass);
        osc2.connect(bandpass);
        osc3.connect(bandpass);
        osc4.connect(bandpass);
        osc5.connect(bandpass);
        osc6.connect(bandpass);

        bandpass.connect(highpass);
        highpass.connect(gain);
        gain.connect(ctx.destination);

        const dur = style === 'techno' ? 0.05 : 0.1;
        gain.gain.setValueAtTime(0.3, time);
        gain.gain.exponentialRampToValueAtTime(0.01, time + dur);

        osc1.start(time); osc2.start(time); osc3.start(time); osc4.start(time); osc5.start(time); osc6.start(time);
        osc1.stop(time + dur); osc2.stop(time + dur); osc3.stop(time + dur); osc4.stop(time + dur); osc5.stop(time + dur); osc6.stop(time + dur);
    };

    const playPerc = (time: number, style: DrumStyle = 'techno') => {
        if (!audioCtxRef.current) return;
        const ctx = audioCtxRef.current;

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.connect(gain);
        gain.connect(ctx.destination);

        if (style === 'techno') {
            // Techy synth blip
            osc.type = 'sine';
            osc.frequency.setValueAtTime(600, time);
            osc.frequency.exponentialRampToValueAtTime(300, time + 0.1);

            gain.gain.setValueAtTime(0.4, time);
            gain.gain.exponentialRampToValueAtTime(0.01, time + 0.1);

            osc.start(time);
            osc.stop(time + 0.1);
        } else {
            // Afro tribal tom
            osc.type = 'sine';
            osc.frequency.setValueAtTime(200, time);
            osc.frequency.exponentialRampToValueAtTime(50, time + 0.2);

            gain.gain.setValueAtTime(0.6, time);
            gain.gain.exponentialRampToValueAtTime(0.01, time + 0.2);

            osc.start(time);
            osc.stop(time + 0.2);
        }
    };

    const playBaseMusic = (time: number, stepOffet: number, style: DrumStyle = 'techno') => {
        if (!audioCtxRef.current) return;
        const ctx = audioCtxRef.current;

        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        const filter = ctx.createBiquadFilter();

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        if (style === 'techno') {
            // Acid techno rolling bassline
            osc.type = 'sawtooth';

            // 16-step bassline pattern frequencies
            const rootFreq = 55; // A1
            const pattern = [rootFreq, rootFreq, rootFreq * 1.5, rootFreq, rootFreq * 1.2, rootFreq, rootFreq, rootFreq * 2];
            const freq = pattern[stepOffet % pattern.length];

            osc.frequency.setValueAtTime(freq, time);

            filter.type = 'lowpass';
            // Envelope on the filter for that acid squelch
            filter.frequency.setValueAtTime(200, time);
            filter.frequency.exponentialRampToValueAtTime(800, time + 0.1);
            filter.frequency.exponentialRampToValueAtTime(100, time + 0.2);
            filter.Q.value = 10;

            gain.gain.setValueAtTime(0.3, time);
            gain.gain.exponentialRampToValueAtTime(0.01, time + 0.2);

            osc.start(time);
            osc.stop(time + 0.2);
        } else {
            // Afro house deep sub drone
            osc.type = 'sine';

            // Slower changing deep drone
            const rootFreq = 41.2; // E1
            const pattern = [rootFreq, rootFreq, rootFreq, rootFreq * 1.2, rootFreq * 1.2, rootFreq * 1.2, rootFreq * 0.8, rootFreq * 0.8];
            const freq = pattern[Math.floor((stepOffet % 32) / 4)]; // Changes every 4 steps

            osc.frequency.setValueAtTime(freq, time);

            filter.type = 'lowpass';
            filter.frequency.value = 150;

            // Long, sustained envelope
            gain.gain.setValueAtTime(0.5, time);
            gain.gain.setTargetAtTime(0.2, time + 0.1, 0.5);

            osc.start(time);
            osc.stop(time + 0.5); // Plays longer than the step
        }
    };

    const getAudioContext = () => audioCtxRef.current;

    return { playKick, playClap, playHat, playPerc, playBaseMusic, getAudioContext };
}
