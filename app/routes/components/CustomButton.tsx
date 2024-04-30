export default function HeaderAndText({ type = "secondary", text = 'Button', disabled = false, clicked = () => {}}) {
    const buttonTypes = {
        primary: 'text-white bg-purplishBlue',
        secondary: 'text-white bg-marineBlue',
        noBorder: 'text-coolGrey'
    }

    return (
        <div onClick={() => clicked()} className={`${buttonTypes[type]} ${disabled ? 'opacity-50 cursor-no-drop' : 'cursor-pointer'} rounded-md px-4 h-[40px] flex items-center justify-center min-w-[100px]`}>
            {text}
        </div>
    );
}