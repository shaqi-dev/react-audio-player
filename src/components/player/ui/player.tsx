import {clsx} from "clsx";
import {DurationControl, TrackControls, VolumeControl} from "./player-controls";
import {useTrack} from "../model";
import {TrackCoverImage} from "./track-cover-image";
import {TrackTitle} from "./track-title";
import {tracklist} from "../lib";
import styles from './player.module.css'


const INITIAL_TRACK_INDEX = 0


export const Player = () => {
    const {
        isPlaying,
        isLoading,
        currentTrack,
        volume,
        time,
        duration,
        togglePlay,
        setVolume,
        setTime,
        prev,
        next
    } = useTrack(tracklist, INITIAL_TRACK_INDEX)

    console.log('isLoading', isLoading)

    const handleVolumeChange: React.ChangeEventHandler<HTMLInputElement> = (e): void => {
        setVolume(Number(e.target.value))
    }

    const handleTimeChange: React.ChangeEventHandler<HTMLInputElement> = (e): void => {
        setTime(Number(e.target.value))
    }

    return (
        <div className={clsx(styles.root)}>
            <TrackControls onNextClick={next} onPlayClick={togglePlay} onPrevClick={prev} disabled={isLoading} />
            <div className={clsx(styles.main)}>
                <VolumeControl value={volume} onChange={handleVolumeChange} disabled={isLoading} />
                <TrackTitle isLoading={isLoading} title={currentTrack.title} />
                <DurationControl value={time} max={duration} onChange={handleTimeChange} disabled={isLoading} />
            </div>
            <TrackCoverImage src={currentTrack.coverSrc} title={currentTrack.title} isPlaying={isPlaying} />
        </div>
    );
};