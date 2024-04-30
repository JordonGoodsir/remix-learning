import HeaderAndText from "./components/HeaderAndText";
import CustomInput from "./components/CustomInput";


export default function StepOne() {
    return (
        <div className="flex flex-col gap-5">
            <HeaderAndText header="Personal info" body="Please provide your name, email address, and phone number." />
            <CustomInput label="Name" name="name" placeholder="e.g Stephen King"/>
            <CustomInput label="Email Address" name="name" placeholder="e.g stephenking@lorem.com"/>
            <CustomInput label="Phone Number" name="name" placeholder="e.g +1 234 567 980"/>
        </div>
    );
}