import HeaderAndText from "./components/HeaderAndText";
import CustomInput from "./components/CustomInput";
import { useDispatch, useSelector } from 'react-redux'
import { setForm } from '~/stores/form'
import { useEffect, useState } from "react";




export default function StepOne() {
    const dispatch = useDispatch()
    const initForm = useSelector((state) => state.formStore).form
    const [updatedForm, setUpdatedForm] = useState({ ...initForm })

    useEffect(() => {
        setUpdatedForm(initForm)
    }, [initForm])

    return (
        <div className="flex flex-col gap-5">
            <HeaderAndText header="Personal info" body="Please provide your name, email address, and phone number." />
            <CustomInput label="Name" name="name" defaultValue={initForm.name} placeholder="e.g Stephen King" callBack={(e) => dispatch(setForm({ ...updatedForm, ...{ name: e.target.value } }))} />
            <CustomInput label="Email Address" name="name" defaultValue={initForm.email} placeholder="e.g stephenking@lorem.com" callBack={(e) => dispatch(setForm({ ...updatedForm, ...{ email: e.target.value } }))} />
            <CustomInput label="Phone Number" name="name" defaultValue={initForm.mobileNumber} placeholder="e.g +1 234 567 980" callBack={(e) => dispatch(setForm({ ...updatedForm, ...{ mobileNumber: e.target.value } }))} />
        </div>
    );
}
