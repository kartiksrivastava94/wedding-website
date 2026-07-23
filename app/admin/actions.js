"use server";

import { redirect } from "next/navigation";
import {
  checkAdminPassword,
  setAdminCookie,
  clearAdminCookie,
} from "@/lib/auth";

export async function adminLogin(prevState, formData) {
  if (!checkAdminPassword(formData.get("password"))) {
    return { error: "Incorrect password." };
  }
  await setAdminCookie();
  redirect("/admin");
}

export async function adminLogout() {
  await clearAdminCookie();
  redirect("/admin");
}
