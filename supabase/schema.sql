-- RSVP table. Run this once in the Supabase SQL editor
-- (Dashboard → SQL Editor → New query → paste → Run).

create table if not exists public.rsvps (
  id             uuid primary key default gen_random_uuid(),
  created_at     timestamptz not null default now(),
  track          text not null check (track in ('cocktail', 'cocktailstay', 'main')),
  name           text not null,
  email          text not null,
  phone          text,
  whatsapp_optin boolean default false,
  attending      text,
  party_size     integer,
  events         text[] default '{}',
  dec1_night     text,          -- only set for cocktail-track guests
  flights_status text,
  travel_dates   text,
  dietary        text,
  message        text
);

-- Migration for tables created before these columns existed.
-- Safe to run repeatedly (no-ops if the columns already exist).
alter table public.rsvps add column if not exists phone text;
alter table public.rsvps add column if not exists whatsapp_optin boolean default false;
alter table public.rsvps add column if not exists flights_status text;

-- Allow the third track ('cocktailstay') on tables created before it existed.
alter table public.rsvps drop constraint if exists rsvps_track_check;
alter table public.rsvps add constraint rsvps_track_check
  check (track in ('cocktail', 'cocktailstay', 'main'));

-- Row-level security ON, with no public policies: the browser can never read or
-- write this table directly. All writes come from the server via the service
-- role key (which bypasses RLS), so responses stay private.
alter table public.rsvps enable row level security;

-- Handy view of responses, newest first (use in the Table/SQL editor).
-- Dropped first because 'create or replace' can't reorder/rename existing
-- view columns when new ones are inserted in the middle.
drop view if exists public.rsvps_recent;
create view public.rsvps_recent as
  select created_at, track, name, email, phone, whatsapp_optin, attending,
         party_size, events, dec1_night, flights_status, travel_dates,
         dietary, message
  from public.rsvps
  order by created_at desc;
