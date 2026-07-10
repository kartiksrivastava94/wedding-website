"use server";

import { redirect } from "next/navigation";
import { trackForCode, setTrackCookie } from "@/lib/auth";

// Landing-page action: validate the access code, set the track cookie,
// and send the guest into their version of the site.
export async function submitCode(prevState, formData) {
  const code = formData.get("code");
  const track = trackForCode(code);
  if (!track) {
    return { error: "That code doesn’t match. Please check your invitation." };
  }
  await setTrackCookie(track);
  redirect("/home");
}
