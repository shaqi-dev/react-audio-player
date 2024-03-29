import styles from "./root-layout.module.css";
import {clsx} from "clsx";

export const RootLayout = ({className, children, ...rest}: React.ComponentProps<'main'>) => {
    return (
        <main className={clsx(styles.root, className)} {...rest}>
            {children}
        </main>
    );
};