export default function OnOutClick({ eventClick, valueEventClick }: { eventClick: () => void, valueEventClick: boolean }): JSX.Element {
    return (
        <div className={(valueEventClick ? "fixed left-0 right-0 top-0 bottom-0 z-0" : "")} onClick={eventClick}></div>
    );
}
