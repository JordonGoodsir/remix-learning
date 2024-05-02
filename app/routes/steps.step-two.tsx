import { useState } from "react";
import HeaderAndText from "./components/HeaderAndText";
import SelectableContainer from "./components/SelectableContainer"
import ToggleYearlyGroup from "./components/stepTwo/ToggleYearlyGroup";


export default function StepTwo() {
    const [yearlyToggle, setYearlyToggle] = useState(false)

    const planOptions = {
        yearly: { Arcade: { price: 90 }, Advanced: { price: 120 }, Pro: { price: 150 } },
        monthly: { Arcade: { price: 9 }, Advanced: { price: 12 }, Pro: { price: 15 } },
    }

    const [selectedPlan, setSelectedPlan] = useState('')

    const planImages = {
        Arcade: 'icon-arcade.svg',
        Advanced: 'icon-advanced.svg',
        Pro: 'icon-pro.svg',
    }

    return (
        <div className="flex flex-col gap-5">
            <HeaderAndText header="Select your plan" body="You have the option of monthly or yearly billing." />

            {Object.keys(planOptions[yearlyToggle ? 'yearly' : 'monthly']).map((planName) => {
                return (
                    <div key={planName}>
                        <SelectableContainer selected={selectedPlan === planName} onSelected={() => setSelectedPlan(planName)} content={
                            <div className="flex gap-3">
                                <img src={`/assets/images/${planImages[planName]}`} />
                                <div className="flex flex-col">
                                    <h5 className="text-lg text-marineBlue font-medium">{planName}</h5>
                                    <p className="text-coolGray">{`$${planOptions[yearlyToggle ? 'yearly' : 'monthly'][planName].price}/${yearlyToggle ? 'yr' : 'mo'}`}</p>
                                    {yearlyToggle ? <p className="text-marineBlue text-sm">2 months free</p> : null}
                                </div>
                            </div>
                        } />
                    </div>
                )
            })}
            <ToggleYearlyGroup toggledState={yearlyToggle} onToggled={() => setYearlyToggle(!yearlyToggle)} />
        </div>
    );
}