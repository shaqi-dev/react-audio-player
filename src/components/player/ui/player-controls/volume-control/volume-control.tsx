import {forwardRef} from "react";
import {InputRange} from "../../../../shared";
import {ReactComponent as VolumeCrossIcon} from './assets/volume-cross.svg'
import {ReactComponent as VolumeLoudIcon} from './assets/volume-loud.svg'
import styles from './volume-control.module.css'
interface Props extends React.ComponentProps<typeof InputRange> {

}

export const VolumeControl = forwardRef<HTMLInputElement,  Props>(({className, step = 0.01, ...rest}, ref) => {
    return (
        <div className={styles.root}>
            <VolumeCrossIcon />
            <InputRange
                ref={ref}
                size="sm"
                min="0"
                max="1"
                step={step}
                {...rest}
            />
            <VolumeLoudIcon />
        </div>
    );
})