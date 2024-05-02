import Toggle from "../Toggle";

export default function ToggleYearlyGroup(props) {
    return (
        <div className="w-full flex text-lg font-medium rounded-md gap-5 items-center justify-center bg-alabaster p-5">
            <p className={`${props.toggledState ? 'text-lightGray' : 'text-marineBlue'}`}>Monthly</p>
            <Toggle {...props} />
            <p className={`${props.toggledState ? 'text-marineBlue' : 'text-lightGray'}`}>Yearly</p>
        </div>
    );
}