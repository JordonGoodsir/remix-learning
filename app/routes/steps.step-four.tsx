import HeaderAndText from "./components/HeaderAndText";
import { useSelector } from 'react-redux'
import { addOnOptions, planOptions } from "~/globals/planData";


export default function StepFour() {


  const initForm = useSelector((state) => state.formStore).form

  const totalPrice = planOptions[initForm.year ? 'yearly' : 'monthly'][initForm.plan].price + initForm.addOns.reduce((total, addOn) => total += addOnOptions[addOn].price[initForm.year ? 'yearly' : 'monthly'], 0)

  return (
    <div className="flex flex-col gap-5">
      <HeaderAndText header="Finishing up" body="Double-check everything looks OK before confirming." />
      <div className="rounded-md p-5 bg-alabaster flex flex-col gap-3">
        <p>{`${initForm.plan}(${initForm.yearly ? 'Yearly' : 'Monthly'})`}</p>
        <div className="flex justify-between">
          <p className="underline">Change</p>
          <p>{`$${planOptions[initForm.year ? 'yearly' : 'monthly'][initForm.plan].price}`}</p>
        </div>
        <div className="bg-coolGray h-px w-full" />
        {initForm.addOns.map((addOn) => {
          return (
            <div className="flex justify-between">
              <p>{addOn}</p>
              <p>{`$${addOnOptions[addOn].price[initForm.year ? 'yearly' : 'monthly']}`}</p>
            </div>
          )
        })}
      </div>

      <div className="flex justify-between">
        <p>{`Total(per ${initForm.yearly ? 'year' : 'month'})`}</p>
        <p>{`$${totalPrice}/${initForm.yearly ? 'yr' : 'mo'}`}</p>

      </div>
    </div>
  );
}