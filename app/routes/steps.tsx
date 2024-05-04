import { LoaderFunctionArgs } from "@remix-run/node";
import { Link, Outlet, json, useBeforeUnload, useLoaderData } from "@remix-run/react";
import { useLocation } from "@remix-run/react";
import CustomButton from "~/routes/components/CustomButton"
import { useNavigate } from "@remix-run/react";
import { useEffect } from "react";
import { useSelector } from 'react-redux'


export default function Index() {
  const steps = [
    { route: '/steps', requiredFields: [] },
    { route: '/steps/step-two', requiredFields: ['email', 'mobileNumber', 'name'] },
    { route: '/steps/step-three', requiredFields: ['email', 'mobileNumber', 'name', 'plan'] },
    { route: '/steps/step-four', requiredFields: ['email', 'mobileNumber', 'name', 'plan'] },
  ]
  const currentPath = useLocation().pathname;
  const currentPathIndex = steps.findIndex((step) => step.route === currentPath)
  const navigate = useNavigate();

  const initForm = useSelector((state) => state.formStore).form

  const canVisit = (index: number) => {
    return !!!steps[index].requiredFields.filter((field) => !initForm[field]).length
  }

  useEffect(() => {
    if (!canVisit(currentPathIndex)) {
      navigate('/steps')
    }
  })

  return (
    <div className="relative flex flex-col overflow-hidden h-screen">
      <div className="flex z-20 relative w-full justify-center basis-auto shrink-0 pt-8 mb-5">
        <div className="flex gap-3">
          {steps.map((step, index) => {
            return (
              <Link to={step.route} key={index + '_nav'}
                className={`flex items-center justify-center border rounded-full h-[35px] w-[35px] ${currentPath === step.route ? 'bg-lightBlue text-black border-0' : 'border-white text-white'}`}
              >
                {index + 1}
              </Link>
            )
          })}
        </div>
      </div>

      <img className="w-full z-10 absolute top-0 left-0 right-0 bottom-0" src="/assets/images/bg-sidebar-mobile.svg" />


      <div className="h-full relative basis-auto shrink-1 grow-1 overflow-y-auto overflow-x-hidden bg-lightGray">
        <div className="flex z-20 relative bg-white px-6 py-7 rounded-sm mx-5 rounded-xl shadow mb-5">
          <Outlet />
        </div>
      </div>
      <div className="z-20 relative flex basis-auto shrink-0 justify-self-end p-5 justify-between">
        {currentPathIndex > 0 ? <CustomButton clicked={() => navigate(steps[currentPathIndex - 1].route)} type="noBorder" text="Go Back" /> : <div />}
        {currentPathIndex < (steps.length - 1) ? <CustomButton clicked={() => navigate(steps[currentPathIndex + 1].route)} type="secondary" text="Next Step" disabled={!canVisit(currentPathIndex + 1)} /> : <CustomButton type="primary" text="Confirm" />}
      </div>


    </div>
  );
}