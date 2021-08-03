
import './App.css';
import React, { useState } from "react"

function CustomHooksUsingArrayFormat(initialState) {

    const [value, setValue] = useState(initialState);
    function onChange(e) {
        setValue(e.target.value);
    }
    return { value, onChange };
}

function App() {

    const {
        value: Username,
        onChange: UsernameOnChange,
    } = CustomHooksUsingObjectFormat("");

    const {
        value: Email,
        onChange: EmailOnChange,
    } = CustomHooksUsingArrayFormat("");

    const {
        value: Password,
        onChange: PasswordOnChange,
    } = CustomHooksUsingArrayFormat("");

    function handleOnSubmit(e) {
        e.preventDefault();
    }

    return (
        <div className="App">
            <form>
                <input
                    type="text"
                    placeholder="User name"
                    value={Username}
                    onChange={(e) => UsernameOnChange(e)}
                />
                <br />
                <input type="email"
                    placeholder="Email"
                    value={Email}
                    onChange={(e) => EmailOnChange(e)} />
                <br />
                <input
                    type="password"
                    placeholder="Password"
                    value={Password}
                    onChange={(e) => PasswordOnChange(e)}
                />
                <br />
                <button type="submit">Submit</button>

            </form>
        </div>
    );
}

export default App;
