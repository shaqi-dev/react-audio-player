import {forwardRef} from "react";
import {clsx} from "clsx";
import styles from './button-circle.module.css'

interface Props extends Omit<React.ComponentProps<'button'>, 'children'>{
    size?: 'base' | 'lg'
    icon: React.ReactNode
}

export const ButtonCircle = forwardRef<HTMLButtonElement, Props>(({className, icon, size = 'base', ...rest}, ref): React.ReactElement => {
    return (
        <button ref={ref} className={clsx(styles.root, styles[size], className)} {...rest}>
            {icon}
        </button>
    );
});