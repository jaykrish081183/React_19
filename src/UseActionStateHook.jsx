import { useActionState } from "react";
const UseActionStateHook = () => {
    const handleSubmit = async (prevData, formData) => {
        const name = formData.get("name")?.trim();
        const email = formData.get("email")?.trim();
        const password = formData.get("password")?.trim();
        // Validation
        if (!name) return { error: "Name is required" };
        if (!email) return { error: "Email is required" };
        if (!password) return { error: "Password is required" };
        if (password.length < 8) return { error: "Password must be at least 8 characters long" };
        if (password.length > 16) return { error: "Password must be less than 16 characters long" };
        if (password.includes(" ")) return { error: "Password must not contain spaces" };
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).+$/;
        if (!passwordRegex.test(password)) {
            return { error: "Password must contain at least one uppercase, one lowercase, one number, and one special character" };
        }
        await new Promise(resolve => setTimeout(resolve, 2000));
        return { name, email, password };
    };
    const [data, action, isPending] = useActionState(handleSubmit, undefined);
    return (
        <div style={{ fontFamily: "Arial", padding: "20px" }}>
            <h1>Use Action State Hook Example</h1>
            <form action={action}>
                <input type="text" defaultValue={data?.name} name="name" placeholder="Enter Name" /><br /><br />
                <input type="email" defaultValue={data?.email} name="email" placeholder="Enter Email" /><br /><br />
                <input type="password" defaultValue={data?.password} name="password" placeholder="Enter Password" /><br /><br />
                <button type="submit" disabled={isPending}>
                    {isPending ? "Submitting..." : "Submit"}
                </button>
            </form><br />
            {data?.error && <p style={{ color: "red" }}>{data.error}</p>}
            {data?.name && (
                <div style={{ marginTop: "10px", color: "green" }}>
                    <h3>Form Data Submitted:</h3>
                    <p><strong>Name:</strong> {data.name}</p>
                    <p><strong>Email:</strong> {data.email}</p>
                    <p><strong>Password:</strong> {data.password}</p>
                </div>
            )}
        </div>
    );
};
export default UseActionStateHook;