import {useEffect, useRef, useState} from "react";
import {Track} from "./types";

export const useTrack = (tracklist: Track[], initialIndex: number = 0) => {
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [trackIndex, setTrackIndex] = useState<number>(initialIndex);
    const [volume, setVolume] = useState<number>(0.25);
    const [time, setTime] = useState<number>(0);

    const ref = useRef(new Audio(tracklist[trackIndex].audioSrc));
    const duration = !isNaN(ref.current.duration) ? ref.current.duration : 0

    ref.current.onloadstart = () => {
        setIsLoading(true)
    };

    ref.current.onloadeddata = () => {
        setIsLoading(false)
    };

    ref.current.onplaying = () => {
        setIsPlaying(true)
    };

    ref.current.onpause = ()=>   {
        setIsPlaying(false)
    };

    useEffect(() => {
        let refValue: HTMLAudioElement | null = null;

        const updateTime = () => {
            setTime(ref.current.currentTime);
        };

        if (ref.current) {
            ref.current.addEventListener('timeupdate', updateTime);
            refValue = ref.current
        }

        return () => {
            if (refValue) {
                refValue.removeEventListener('timeupdate', updateTime);
            }
        };
    }, []);

    useEffect(() => {
        setTrackIndex(initialIndex)
    }, [initialIndex, tracklist]);

    useEffect(() => {
        if (!ref.current) {
            return
        }

        ref.current.src = tracklist[trackIndex].audioSrc;

        if (isPlaying && ref.current.paused) {
            ref.current.play();
        }

        // eslint-disable-next-line
    }, [trackIndex, tracklist]);

    const togglePlay = async () => {
        if (isPlaying && !ref.current.paused) {
            ref.current.pause();
        }

        if (!isPlaying && ref.current.paused) {
            ref.current.volume = volume;
            await ref.current.play();
        }
    };

    const handleSetVolume = (nextVolume: number) => {
        ref.current.volume = nextVolume;
        setVolume(nextVolume);
    }

    const handleSetTime = (nextTime: number) => {
        ref.current.currentTime = nextTime;
        setTime(nextTime);
    }

    const prev = () => {
        const newIndex = (trackIndex - 1 + tracklist.length) % tracklist.length;
        setTrackIndex(newIndex);
    };

    const next = () => {
        const newIndex = (trackIndex + 1) % tracklist.length;
        setTrackIndex(newIndex);
    };

    ref.current.onended = () => {
        setIsPlaying( true)
        next();
    }

    return {
        ref,
        isLoading,
        isPlaying,
        trackIndex,
        currentTrack: tracklist[trackIndex],
        volume,
        time,
        duration,
        togglePlay,
        setTrackIndex,
        setVolume: handleSetVolume,
        setTime: handleSetTime,
        prev,
        next
    }
};