import { useState } from "react";
export default function Form() {

    const [form, setForm] = useState({
        firstName : "Luke",
        lastName : "SkyWalker",
        email : "LukeSkywalker@gmail.com"
    });
    return(
        <>
            <label>
                First name :
                <input
                    value={form.firstName} 
                    onChange = { e => {
                        setForm({
                            ...form,
                            firstName : e.target.value,
                        });
                    }}
                />
            </label>

            <label>
                Last name :
                <input 
                    value={form.lastName}
                    onChange = { e => {
                        setForm({
                            ...form,
                            lastName : e.target.value,
                        });
                    }}
                />
            </label>

            <label>
                Email :
                <input 
                    value={form.email}
                    onChange={ e =>{
                        setForm({
                            ...form,
                            email : e.target.value,
                        });
                    }}
                />
            </label>

            <p>
                Hello, {form.firstName} {form.lastName}. Your email is {form.email}
            </p>
        </>
    );
}