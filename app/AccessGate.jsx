"use client";

import { useActionState } from "react";
import { submitCode } from "./actions";

const initialState = { error: null };

export default function AccessGate() {
  const [state, formAction, pending] = useActionState(submitCode, initialState);
  return (
    <form action={formAction} className="gate">
      <label htmlFor="code">Enter your access code</label>
      <input
        id="code"
        name="code"
        type="text"
        autoComplete="off"
        autoFocus
        required
        className="input"
        placeholder="Access code"
      />
      {state?.error && <p className="alert alert-error">{state.error}</p>}
      <button className="btn" type="submit" disabled={pending}>
        {pending ? "Checking…" : "Enter"}
      </button>
    </form>
  );
}
