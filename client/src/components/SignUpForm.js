import { useState } from "react";
import { Button, Error, Input, FormField, Label } from "../styles";

function SignUpForm({ onLogin }) {
    const [fullName, setFullName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [address, setAddress] = useState('')
    const [password, setPassword] = useState('')
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
  
    function handleSubmit(e) {
      e.preventDefault();
      setErrors([]);
      setIsLoading(true);
      fetch("/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullName,
          username,
          email,
          address,
          password
        }),
      }).then((r) => {
        setIsLoading(false);
        if (r.ok) {
          r.json().then((user) => onLogin(user));
        } else {
          r.json().then((err) => setErrors(err.errors));
        }
      });
    }
  
    return (
      <form onSubmit={handleSubmit}>

        <FormField>
          <Label htmlFor="fullname">Full Name</Label>
          <Input
            type="text"
            id="fullName"
            autoComplete="off"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </FormField>

        <FormField>
          <Label htmlFor="username">Username</Label>
          <Input
            type="text"
            id="username"
            autoComplete="off"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </FormField>

        <FormField>
          <Label htmlFor="email">Email</Label>
          <Input
            type="text"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormField>

        <FormField>
          <Label htmlFor="address">Address</Label>
          <Input
            type="text"
            id="address"
            autoComplete="off"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </FormField>

        <FormField>
          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            // autoComplete="current-password"
          />
        </FormField>
        
        <FormField>
          <Button type="submit">{isLoading ? "Loading..." : "Sign Up"}</Button>
        </FormField>
        
        <FormField>
          {errors.map((err) => (
            <Error key={err}>{err}</Error>
          ))}
        </FormField>
      </form>
    );
  }
  
  export default SignUpForm;