export default function HeaderAndText({ header, body }) {
    return (
        <div className="flex flex-col gap-3">
            <h3 className="text-marineBlue text-2xl font-bold lg:text-3xl">{header}</h3>
            <p className="text-coolGray">{body}</p>
        </div>
    );
}