import { useState } from "react";
import HeaderAndText from "./components/HeaderAndText";
import SelectableContainer from "./components/SelectableContainer"
import ToggleYearlyGroup from "./components/stepTwo/ToggleYearlyGroup";


export default function StepThree() {
  const [yearlyToggle, setYearlyToggle] = useState(false)
  const [selectedAddOns, setSelectedAddOns] = useState([])

  const addAddOn = (addOn) => {

    const foundAddOnIndex = selectedAddOns.findIndex((extra) => addOn === extra)

    let updatedAddOns = [...selectedAddOns]

    if(foundAddOnIndex > -1) { 
      updatedAddOns.splice(foundAddOnIndex, 1)
    } else { 
      updatedAddOns.push(addOn)
    }

    setSelectedAddOns(updatedAddOns)

  }


  // const addOnOptions = {
  //   yearly: { 'Online service': { price: 10 }, 'Larger storage': { price: 20 }, 'Customizable Profile': { price: 20 } },
  //   monthly: { 'Online service': { price: 1 }, 'Larger storage': { price: 2 }, 'Customizable Profile': { price: 2 } },
  // }

  const addOnOptions = {
    'Online service': { price: { monthly: 1, yearly: '10' }, description: 'Access to multiplayer games' },
    'Larger storage': { price: { monthly: 2, yearly: '20' }, description: 'Extra 1TB of cloud save' },
    'Customizable Profile': { price: { monthly: 2, yearly: '20' }, description: 'Custom theme on your profile' }
  }



  return (
    <div className="flex flex-col gap-5">
      <HeaderAndText header="Select your plan" body="You have the option of monthly or yearly billing." />

      {Object.keys(addOnOptions).map((addOn) => {
        return (
          <div key={addOn}>
            <SelectableContainer selected={selectedAddOns.includes(addOn)} onSelected={() => addAddOn(addOn)} content={
              <div className="flex gap-3 justify-between">
                <div className="flex flex-col">
                  <h5 className="text-lg text-marineBlue font-medium">{addOn}</h5>
                  <p className="text-lightGray">{addOnOptions[addOn].description}</p>
                </div>
                <p className="text-coolGray">{`$${addOnOptions[addOn].price[yearlyToggle ? 'yearly' : 'monthly']}/${yearlyToggle ? 'yr' : 'mo'}`}</p>
              </div>
            } />
          </div>
        )
      })}
    </div>
  );
}