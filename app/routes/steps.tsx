import { LoaderFunctionArgs } from "@remix-run/node";
import { Outlet, json, useLoaderData } from "@remix-run/react";
import { useLocation } from "@remix-run/react";

export const loader = async (all: LoaderFunctionArgs) => {
  console.error(all)
  return json(all)
}


export default function Index() {
  const steps = [
    '/steps',
    '/steps/step-two',
    '/steps/step-three',
    '/steps/step-four',
  ]
  const data = useLoaderData()
  console.error(data)
  const currentPath = useLocation().pathname;

  return (
    <div className="relative flex flex-col overflow-hidden h-screen">

      <div className="flex z-20 relative w-full justify-center basis-auto shrink-0 pt-8 mb-5">
        <div className="flex gap-3">
          {steps.map((step, index) => {
            return (
              <div key={index + '_nav'}
                className={`flex items-center justify-center border rounded-full h-[35px] w-[35px] ${currentPath === step ? 'bg-lightBlue text-black border-0' : 'border-white text-white'}`}
              >
                {index + 1}
              </div>
            )
          })}
        </div>
      </div>

      <img className="w-full z-10 absolute top-0 left-0 right-0 bottom-0" src="/assets/images/bg-sidebar-mobile.svg" />


      <div className="h-full relative basis-auto shrink-1 grow-1 overflow-hidden bg-lightGray">
        <div className="flex z-20 relative bg-white p-8 rounded-sm mx-5 rounded-xl shadow mb-5">
          <Outlet />
        </div>
      </div>

      <div className="z-20 relative flex basis-auto shrink-0 justify-self-end p-5">
        bottom bar
      </div>


    </div>
  );
}