import {ButtonCircle} from "../../../../shared";
import { ReactComponent as PrevIcon } from './assets/prev.svg'
import { ReactComponent as PlayIcon } from './assets/play.svg'
import { ReactComponent as NextIcon } from './assets/next.svg'
import styles from './track-controls.module.css'

interface Props {
    disabled?: boolean
    onPrevClick: React.MouseEventHandler<HTMLButtonElement>
    onPlayClick: React.MouseEventHandler<HTMLButtonElement>
    onNextClick: React.MouseEventHandler<HTMLButtonElement>
}

export const TrackControls = ({onPrevClick, onPlayClick, onNextClick, disabled}: Props) => {
    return (
        <div className={styles['player-controls']}>
            <ButtonCircle icon={<PrevIcon />} onClick={onPrevClick} disabled={disabled} />
            <ButtonCircle icon={<PlayIcon />} size="lg" onClick={onPlayClick} disabled={disabled} />
            <ButtonCircle icon={<NextIcon />} onClick={onNextClick} disabled={disabled} />
        </div>
    );
};