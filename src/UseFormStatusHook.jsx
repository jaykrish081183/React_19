import { useFormStatus } from "react-dom";
const UseFormStatusHook = () => {
    const handleSubmit = async () => {
        await new Promise(resolve => setTimeout(resolve, 3000));
    }
    function CustomerForm() {
        const { pending } = useFormStatus();
        return (
            <div>
                <input type="text" name="name" />
                <input type="password" name="pass" />
                <button disabled={pending}>{pending ? 'Submitting...' : 'Submit'}</button>
            </div>
        )
    }
    return (
        <div>
            <h1>UseFormStatusHook</h1>
            <form action={handleSubmit}>
                <CustomerForm />
            </form><hr /><hr/>
        </div >
    )
}
export default UseFormStatusHook;