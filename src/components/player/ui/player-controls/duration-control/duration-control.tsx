import {forwardRef} from "react";
import {InputRange} from "../../../../shared";

interface Props extends React.ComponentProps<typeof InputRange> {
    max: number
}

export const DurationControl = forwardRef<HTMLInputElement,  Props>(({className, max, step = 1, ...rest}, ref) => {
    console.log(rest.value)

    return (
        <InputRange
            ref={ref}
            min="0"
            max={max}
            step={step}
            {...rest}
        />
    );
})