import Toggle from "../Toggle";

export default function ToggleYearlyGroup(props) {
    return (
        <div className="w-full flex rounded-md gap-5 items-center justify-center bg-alabaster p-5">
            <p className={`${props.toggledState ? 'text-lightGray' : 'text-marineBlue'}`}>Yearly</p>
            <Toggle {...props} />
            <p className={`${props.toggledState ? 'text-marineBlue' : 'text-lightGray'}` }>Monthly</p>
        </div>
    );
}