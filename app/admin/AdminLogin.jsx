"use client";

import { useActionState } from "react";
import { adminLogin } from "./actions";

const initialState = { error: null };

export default function AdminLogin() {
  const [state, formAction, pending] = useActionState(adminLogin, initialState);
  return (
    <main className="gate-page">
      <div className="gate-card">
        <p className="subtitle">RSVP dashboard</p>
        <h1>Sign in</h1>
        <form action={formAction} className="gate">
          <label htmlFor="password">Admin password</label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="off"
            autoFocus
            required
            className="input"
          />
          {state?.error && <p className="alert alert-error">{state.error}</p>}
          <button className="btn" type="submit" disabled={pending}>
            {pending ? "Checking…" : "Enter"}
          </button>
        </form>
      </div>
    </main>
  );
}
