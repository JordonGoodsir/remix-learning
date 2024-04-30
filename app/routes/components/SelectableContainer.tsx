export default function HeaderAndText({ selected = false, content }) {
    return (
        <div className={`p-3 w-full border-2 rounded-md ${selected ? 'bg-[#F8F9FE] border-[#504C99]' : 'bg-white border border-lightGray'}`}>
            {content}
        </div>
    );
}