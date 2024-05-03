import HeaderAndText from "./components/HeaderAndText";
import SelectableContainer from "./components/SelectableContainer"
import ToggleYearlyGroup from "./components/stepTwo/ToggleYearlyGroup";
import { useDispatch, useSelector } from 'react-redux'
import { setForm } from '~/stores/form'
import { useEffect, useState } from "react";


export default function StepTwo() {
    const dispatch = useDispatch()
    const initForm = useSelector((state) => state.formStore).form
    const [updatedForm, setUpdatedForm] = useState({ ...initForm })


    const planOptions = {
        yearly: { Arcade: { price: 90 }, Advanced: { price: 120 }, Pro: { price: 150 } },
        monthly: { Arcade: { price: 9 }, Advanced: { price: 12 }, Pro: { price: 15 } },
    }

    const planImages = {
        Arcade: 'icon-arcade.svg',
        Advanced: 'icon-advanced.svg',
        Pro: 'icon-pro.svg',
    }

    useEffect(() => {
        setUpdatedForm(initForm)
    }, [initForm])

    return (
        <div className="flex flex-col gap-5">
            <HeaderAndText header="Select your plan" body="You have the option of monthly or yearly billing." />
            {Object.keys(planOptions[initForm.yearly ? 'yearly' : 'monthly']).map((planName) => {
                return (
                    <div key={planName}>
                        <SelectableContainer selected={initForm.plan === planName} onSelected={() => dispatch(setForm({ ...updatedForm, ...{ plan: planName } }))} content={
                            <div className="flex gap-3">
                                <img src={`/assets/images/${planImages[planName]}`} />
                                <div className="flex flex-col">
                                    <h5 className="text-lg text-marineBlue font-medium">{planName}</h5>
                                    <p className="text-coolGray">{`$${planOptions[initForm.yearly ? 'yearly' : 'monthly'][planName].price}/${initForm.yearly ? 'yr' : 'mo'}`}</p>
                                    {initForm.yearly ? <p className="text-marineBlue text-sm">2 months free</p> : null}
                                </div>
                            </div>
                        } />
                    </div>
                )
            })}
            <ToggleYearlyGroup toggledState={initForm.yearly} onToggled={() => dispatch(setForm({ ...updatedForm, ...{ yearly: !initForm.yearly } }))} />
        </div>
    );
}