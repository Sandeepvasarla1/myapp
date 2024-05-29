import { Formik } from "formik"
const Formik2 = () => {
    const 
    return (
        <div>
            <form action="" onSubmit={}>
                <label htmlFor="">Name :</label>        
                <input type="text" name="name" id="name" />

                <label>Lastname : </label>
                <input type="text" name="lastname" id="lastname" />

                <label htmlFor="">Email</label>
                <input type="email" name="email" id="email" />

                <label htmlFor="">Password</label>
                <input type="password" name="password" id="password" />

                <button>Submit</button>
            </form>
        </div>
    )
}
export default Formik2