export default function CustomInput({ label = 'input', name = 'input', defaultValue = '', placeholder = 'Type here...', callBack = (e) => { } }) {
    return (
        <div className="flex flex-col gap-1">
            <label className="text-marineBlue text-sm">{label}</label>
            <input className="border rounded-sm border-coolGray px-3 py-2" name={name} defaultValue={defaultValue} placeholder={placeholder} onChange={(e) => callBack(e)} />
        </div>
    );
}