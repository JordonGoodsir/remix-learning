import HeaderAndText from "./components/HeaderAndText";
import SelectableContainer from "./components/SelectableContainer"
import ToggleYearlyGroup from "./components/stepTwo/ToggleYearlyGroup";
import { useDispatch, useSelector } from 'react-redux'
import { setForm } from '~/stores/form'
import { useEffect, useState } from "react";


export default function StepFour() {
    const initForm = useSelector((state) => state.formStore).form

    return (
        <div className="flex flex-col gap-5">
            <HeaderAndText header="Select your plan" body="You have the option of monthly or yearly billing." />
        </div>
    );
}