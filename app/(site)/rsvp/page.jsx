import { getTrackInfo } from "@/lib/auth";
import { site } from "@/lib/site";
import Content from "../_components/Content";
import RsvpForm from "./RsvpForm";

export default async function Rsvp() {
  const { cocktail, dec1Stay } = await getTrackInfo();

  return (
    <Content>
      <h1>RSVP</h1>
      <p className="lead">
        Please respond by <strong>1 October, 2026</strong> so we can confirm
        your room and headcount.
      </p>

      <RsvpForm cocktail={cocktail} dec1Stay={dec1Stay} />

      <p className="muted" style={{ marginTop: "2rem" }}>
        Prefer to reply directly? Email us at{" "}
        <a href={`mailto:${site.contactEmail}`}>{site.contactEmail}</a>.
      </p>
    </Content>
  );
}
