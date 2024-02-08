interface Props {
    isLoading?: boolean
    title: string
}

export const TrackTitle = ({isLoading, title}: Props) => {
    return (
        <span>{isLoading ? 'Loading:' : ''} <strong>{title}</strong> {isLoading ? '...' : ''}</span>
    );
};