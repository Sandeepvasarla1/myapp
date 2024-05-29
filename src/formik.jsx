    import { useFormik } from "formik"
    const Formik = () => {
        const formik = useFormik({
            initialValues: {
                name : "",
                email: "",
                password: ""
            },
            onSubmit:(values) => {
                console.log(values)
            },
            validate: (values) => {
                let errors = {};
                if (!values.name) {
                    errors.name = "Please type your name";
                }
                if (!values.email) {
                    errors.email = "Please type your email";
                }
                if (!values.password) {
                    errors.password = "Please type your password";
                }
                return errors;
            }
            
        })
        // console.log(formik.values)/
        return (
            <div>
                <form action="" autoComplete="off" onSubmit={formik.handleSubmit}>
                    <label htmlFor="">Name:</label>
                    <input type="text" name="name" id="name" value={formik.values.name} onChange={formik.handleChange}/>
                    {formik.errors.name?<div>{formik.errors.name}</div>: null}

                    <label htmlFor="">Email:</label>
                    <input type="email" name="email" id="email" value ={formik.values.email} onChange={formik.handleChange}/>
                    {formik.errors.email?<div>{formik.errors.email}</div>: null}

                    <label htmlFor="">Password:</label>
                    <input type="password" name="password" id="password" value = {formik.values.password} onChange={formik.handleChange}/>
                    {formik.errors.password?<div>{formik.errors.password}</div>: null}

                    <button type="">Submit</button>
                </form>
            </div> 
        )
    }

    export default Formik