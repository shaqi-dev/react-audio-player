import {clsx} from "clsx";
import styles from "./track-cover-image.module.css";


interface Props {
    src: string
    title: string
    isPlaying: boolean
}

export const TrackCoverImage = ({src, title, isPlaying}: Props) => {

    return (
        <div className={styles.wrapper}>
            <div  className={clsx(styles.root, isPlaying && styles.spinning)}>
                <img className={styles.image} src={src} alt={`${title} cover`} />
            </div>
        </div>
    );
};