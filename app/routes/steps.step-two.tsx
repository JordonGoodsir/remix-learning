import HeaderAndText from "./components/HeaderAndText";
import SelectableContainer from "./components/SelectableContainer"


export default function StepTwo() {
    const yearlyToggle = false

    const planOptions = {
        yearly: [{ price: '90', name: 'Arcade' }, { price: '120', name: 'Advanced' }, { price: '150', name: 'Pro' },],
        monthly: [{ price: '9', name: 'Arcade' }, { price: '12', name: 'Advanced' }, { price: '15', name: 'Pro' },]
    }

    const planImages = {
        Arcade: 'icon-arcade.svg',
        Advanced: 'icon-advanced.svg',
        Pro: 'icon-pro.svg',
    }

    return (
        <div className="flex flex-col gap-5">
            <HeaderAndText header="Select your plan" body="You have the option of monthly or yearly billing." />

            {planOptions[yearlyToggle ? 'yearly' : 'monthly'].map((option) => {
                return (
                    <SelectableContainer selected={false} content={
                        <div className="flex gap-2">
                            <img src={`/assets/images/${planImages[option.name]}`} />
                            <div className="flex flex-col">
                                <h5>{option.name}</h5>
                                <p>{`$${option.price}/${yearlyToggle ? 'yr' : 'mo'}`}</p>
                            </div>
                        </div>
                    } />
                )
            })}
        </div>
    );
}