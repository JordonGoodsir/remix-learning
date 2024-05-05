import { LoaderFunctionArgs } from "@remix-run/node";
import { Link, Outlet, json, useBeforeUnload, useLoaderData } from "@remix-run/react";
import { useLocation } from "@remix-run/react";
import CustomButton from "~/routes/components/CustomButton"
import { useNavigate } from "@remix-run/react";
import { useEffect } from "react";
import { useSelector } from 'react-redux'


export default function Index() {
  const steps = [
    { route: '/steps', requiredFields: [], title: 'YOUR INFO' },
    { route: '/steps/step-two', requiredFields: ['email', 'mobileNumber', 'name'], title: 'SELECT PLAN' },
    { route: '/steps/step-three', requiredFields: ['email', 'mobileNumber', 'name', 'plan'], title: 'ADD-ONS' },
    { route: '/steps/step-four', requiredFields: ['email', 'mobileNumber', 'name', 'plan'], title: 'SUMMARY' },
  ]
  const currentPath = useLocation().pathname;
  const currentPathIndex = steps.findIndex((step) => step.route === currentPath)
  const navigate = useNavigate();
  const isFinished = useLocation().search === '?finished=true';



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
      <div className="flex z-20 relative w-full justify-center basis-auto shrink-0 pt-8 mb-5 lg:hidden">
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

      <img className="w-full z-10 absolute top-0 left-0 right-0 bottom-0 lg:hidden" src="/assets/images/bg-sidebar-mobile.svg" />


      <div className="h-full relative basis-auto shrink-1 grow-1 overflow-y-auto overflow-x-hidden bg-lightGray lg:flex lg:items-center lg:justify-center">
        <div className="flex z-20 relative bg-white p-5 rounded-sm mx-4 rounded-xl shadow mb-5 lg:w-[950px] lg:w-full lg:h-[540px]">

          <div className="hidden h-full rounded-lg bg-[url(/assets/images/bg-sidebar-desktop.svg)] bg-bottom bg-no-repeat lg:flex flex-col w-[275px] p-8 gap-8">
            {steps.map((step, index) => {
              return (
                <div className="flex items-center gap-3">
                  <Link to={step.route} key={index + '_nav'}
                    className={`flex items-center justify-center border rounded-full h-[35px] w-[35px] ${currentPath === step.route ? 'bg-lightBlue text-black border-0' : 'border-white text-white'}`}
                  >
                    {index + 1}
                  </Link>
                  <div className="flex flex-col text-white">
                    <p className="text-xs">{`STEP ${index + 1}`}</p>
                    <p className="font-semibold text-sm">{step.title}</p>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="flex flex-col lg:pt-10 h-full lg:items-center lg:justify-between w-full">
            <div className="lg:w-[450px] flex flex-col">
              <div className="grow-1 shrink-1 basis-auto">
                <Outlet />
              </div>

              {!isFinished ?
                <div className="hidden z-20 relative lg:flex basis-auto shrink-0 justify-self-end p-5 justify-between basis-auto grow-1">
                  {currentPathIndex > 0 ? <CustomButton clicked={() => navigate(steps[currentPathIndex - 1].route)} type="noBorder" text="Go Back" /> : <div />}
                  {currentPathIndex < (steps.length - 1) ? <CustomButton clicked={() => navigate(steps[currentPathIndex + 1].route)} type="secondary" text="Next Step" disabled={!canVisit(currentPathIndex + 1)} /> : <CustomButton clicked={() => navigate({ pathname: '/steps/step-four', search: '?finished=true' })} type="primary" text="Confirm" />}
                </div>
                : null
              }
            </div>
          </div>
        </div>
      </div>

      {!isFinished ?
        <div className="lg:hidden z-20 relative flex basis-auto shrink-0 justify-self-end p-5 justify-between">
          {currentPathIndex > 0 ? <CustomButton clicked={() => navigate(steps[currentPathIndex - 1].route)} type="noBorder" text="Go Back" /> : <div />}
          {currentPathIndex < (steps.length - 1) ? <CustomButton clicked={() => navigate(steps[currentPathIndex + 1].route)} type="secondary" text="Next Step" disabled={!canVisit(currentPathIndex + 1)} /> : <CustomButton clicked={() => navigate({ pathname: '/steps/step-four', search: '?finished=true' })} type="primary" text="Confirm" />}
        </div>
        : null
      }


    </div>
  );
}