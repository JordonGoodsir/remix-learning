import HeaderAndText from "./components/HeaderAndText";
import SelectableContainer from "./components/SelectableContainer"
import { useDispatch, useSelector } from 'react-redux'
import { setForm } from '~/stores/form'
import { useEffect, useState } from "react";


export default function StepThree() {

  const dispatch = useDispatch()
  const initForm = useSelector((state) => state.formStore).form
  const [updatedForm, setUpdatedForm] = useState({ ...initForm })

  const addAddOn = (addOn) => {

    const foundAddOnIndex = initForm.addOns.findIndex((extra) => addOn === extra)

    let updatedAddOns = [...initForm.addOns]

    if (foundAddOnIndex > -1) {
      updatedAddOns.splice(foundAddOnIndex, 1)
    } else {
      updatedAddOns.push(addOn)
    }

    dispatch(setForm({ ...updatedForm, ...{ addOns: updatedAddOns } }))
  }

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
            <SelectableContainer selected={initForm.addOns.includes(addOn)} onSelected={() => addAddOn(addOn)} content={
              <div className="flex gap-3 justify-between items-center">
                <div className="flex gap-3 items-center">
                  <div className={`h-5 w-5 flex items-center justify-center rounded-md ${initForm.addOns.includes(addOn) ? 'bg-purplishBlue' : 'bg-white border border-coolGrey'}`}>{initForm.addOns.includes(addOn) ? <img src="/assets/images/icon-checkmark.svg" /> : null}</div>
                  <div className="flex flex-col">
                    <h5 className="text-marineBlue font-medium">{addOn}</h5>
                    <p className="text-coolGray text-xs">{addOnOptions[addOn].description}</p>
                  </div>
                </div>
                <p className="text-purplishBlue text-sm">{`+$${addOnOptions[addOn].price[initForm.yearly ? 'yearly' : 'monthly']}/${initForm.yearly ? 'yr' : 'mo'}`}</p>
              </div>
            } />
          </div>
        )
      })}
    </div>
  );
}