export default function Toggle({ toggledState = false, onToggled = () => { } }) {
    return (
        <div onClick={() => onToggled()} className="flex items-center rounded-full w-[38px] bg-marineBlue">
            <div className={`bg-white rounded-full m-1 h-[13px] w-[13px] transition ${toggledState ? 'translate-x-[16px]' : ''}`} />
        </div>
    );
}