import HeaderAndText from "./components/HeaderAndText";
import { useSelector } from 'react-redux'
import { addOnOptions, planOptions } from "~/globals/planData";
import { useNavigate } from "@remix-run/react";
import { useLocation } from "@remix-run/react";


export default function StepFour() {
  const initForm = useSelector((state) => state.formStore).form
  const navigate = useNavigate();
  const isFinished = useLocation().search === '?finished=true';
  console.error(isFinished)


  const totalPrice = planOptions[initForm.yearly ? 'yearly' : 'monthly'][initForm.plan]?.price + initForm.addOns.reduce((total, addOn) => total += addOnOptions[addOn]?.price[initForm.year ? 'yearly' : 'monthly'], 0)

  if (!isFinished) {
    return (
      <div className="flex flex-col gap-5">
        <HeaderAndText header="Finishing up" body="Double-check everything looks OK before confirming." />
        <div className="rounded-md p-5 bg-alabaster flex flex-col gap-3">
          <div className="flex flex-col">
            <p className="text-marineBlue font-semibold">{`${initForm.plan}(${initForm.yearly ? 'Yearly' : 'Monthly'})`}</p>
            <div className="flex justify-between">
              <p onClick={() => navigate('/steps/step-two')} className="underline text-coolGray">Change</p>
              <p className="text-marineBlue font-semibold">{`$${planOptions[initForm.yearly ? 'yearly' : 'monthly'][initForm.plan]?.price}/${initForm.yearly ? 'yr' : 'mo'}`}</p>
            </div>
          </div>

          <div className="bg-coolGray h-px w-full" />
          {initForm.addOns.map((addOn) => {
            return (
              <div key={addOn} className="flex justify-between">
                <p className="text-coolGray">{addOn}</p>
                <p className="text-marineBlue">{`+$${addOnOptions[addOn]?.price[initForm.yearly ? 'yearly' : 'monthly']}/${initForm.yearly ? 'yr' : 'mo'}`}</p>
              </div>
            )
          })}
        </div>

        <div className="flex justify-between px-5">
          <p className="text-coolGray">{`Total (per ${initForm.yearly ? 'year' : 'month'})`}</p>
          <p className="text-purplishBlue font-semibold text-md">{`$${totalPrice}/${initForm.yearly ? 'yr' : 'mo'}`}</p>
        </div>
      </div>
    );
  } else {

    return (
      <div className="flex flex-col gap-5 py-10 text-center items-center">
        <img className="h-[55px] w-[55px]" src="/assets/images/icon-thank-you.svg" />
        <HeaderAndText header="Thank you!" body="Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com." />
      </div>
    )

  }
}