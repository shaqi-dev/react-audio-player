import {forwardRef} from "react";
import {clsx} from "clsx";
import styles from "./input-range.module.css";

interface Props extends Omit<React.ComponentProps<'input'>, 'type' | 'children' | 'size'>{
    size?: 'sm' | 'base'
}

export const InputRange = forwardRef<HTMLInputElement, Props>(({size = 'base', className, ...rest}, ref) => {
    return (
        <input ref={ref} className={clsx(styles.root, styles[size], className)} type="range" {...rest} />
    );
})