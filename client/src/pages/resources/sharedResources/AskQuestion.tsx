/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form';
import { useEffect, useState } from 'react';

function AskQuestion() {
    const inputStyles = `w-full mx-auto rounded-lg bg-gray-200 px-5 py-3 placeholder-black`;

    /* Destructuring syntax so that we can reference the register, trigger, formState(errors) object as just register, trigger and errors rather then useForm.register making it simpiler [cleaner code] */
    /* register -> Registers form inputs, so the form can track the inputted values along with validation rules */
    /* trigger -> Manually triggers validation for all registered fields so you can perform validation before submitting */
    /* errors -> contains info about validation errors that might have occurred for a registered field so we can display such error messages in an easy way */
    const {
        register,
        trigger,
        formState: { errors },
    } = useForm();

    /* aync because we want to await for async functions to complete before we start execution of our code again */
    /* e is the eventObject and has its own type but for time's sake, we just put any */
    /* Once the validation checks are complete (await trigger) then isValid stores a boolean val of that execution */
    /* if it isn't valid, then we prevent the default behavior, which is the form being submitted */

    const onSubmit = async (e: React.FormEvent) => {
        const isValid = await trigger();
        if (!isValid) {
            e.preventDefault();
        }
    };

    const formSubmitKey: string | undefined = import.meta.env
        .VITE_REACT_APP_FORM_SUBMIT_KEY;
    return (
        <div className="w-1/2 mx-auto">
            <form
                target="_blank"
                onSubmit={onSubmit}
                action={`https://formsubmit.co/${formSubmitKey}`}
                method="POST"
            >
                {/* ...register (takes that input and places it underneath the name section so that we can access if there are any errors ) */}
                {/* It is followed by the specific validation checks (required -> true and maxlength of 100 characters) */}
                <input
                    className={inputStyles}
                    type="text"
                    placeholder="ASK A QUESTION"
                    {...register('Question', {
                        required: true,
                        maxLength: 100,
                    })}
                />
                {/* if there are any errors for the name attribute that was just inputted then check to see the type and display the appropriate text */}
                {errors.Question && (
                    <p className="mt-1 text-primary-500">
                        {errors.Question.type === 'required' &&
                            'This field is required.'}
                        {errors.Question.type === 'maxLength' &&
                            'Max Length is 100 characters.'}
                    </p>
                )}

                <div className="flex justify-center">
                    <button
                        type="submit"
                        className="mt-5 mb-12 rounded-lg bg-blue-100 px-20 py-3 transition duration-500 hover:text-white"
                    >
                        SUBMIT
                    </button>
                </div>
            </form>
        </div>
    );
}

export default AskQuestion;
