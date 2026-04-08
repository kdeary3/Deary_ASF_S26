import React from 'react';
import {useForm} from 'react-hook-form';
import {object, string, number} from 'yup';
import {yupResolver} from "@hookform/resolvers/yup"

const App = () => {

    const userSchema = object({
        fname: string()
            .min(1, "Must be more than 5 characters")
            .required("Field is required."),
        password: string()
            .min(8, "Must be between 8 and 12 characters.")
            .max(12, "Must be between 8 and 12 characters.")
            .required("Field is required."),
        age: number()
            .min(1, "Must be at least 1")
            .max(99, "Cannot be more than 99")
            .required("Field is required.")
    })

    const {
        register,
        handleSubmit,
        setValue,
        reset,
        formState: {errors},
    } = useForm({
        resolver: yupResolver(userSchema),
    })

    const onSubmit = (data) => {
        console.log(data)
    }

    const handleChange = (event) => {
        setValue(event.target.name, event.target.value)
        console.log(event)
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label> Name:
                    <input
                        type="text"
                        {...register("fname")}
                        onChange={handleChange}
                    />
                </label>
                {errors.fname && <span>{errors.fname.message}</span>}
                <br/>

                <label> Password:
                    <input
                        type="password"
                        {...register("password")}
                        onChange={handleChange}
                    />
                </label>
                {errors.password && <span>{errors.password.message}</span>}
                <br/>

                <label> Age:
                    <input
                        type="number"
                        {...register("age")}
                        onChange={handleChange}
                    />
                </label>
                {errors.age && <span>{errors.age.message}</span>}
                <br/>

                <button type="submit">Submit</button>
                <br/>
                <button type="reset">Reset</button>
            </form>
        </>
    );
};

export default App;