import { sql } from "drizzle-orm";
import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";

export const users = sqliteTable('users', {
  id: text('id').primaryKey(),
  name: text('name'),
  created: integer("created", { mode: "timestamp_ms" }).default(sql`(STRFTIME('%s', 'now') * 1000)`)
}); 



// export const users = sqliteTable('users', {
//   id: text('id').primaryKey(),
//   fullName: text('fullName'),
//   email: text('email'),
//   username: text('username'),
//   password: text('password'),
//   profileImage: text("profileImage"),
//   refreshToken: text('refreshToken'),
//   role: text('role'),
//   location: text('location'),
//   bio: text('bio'),
//   eventOwner: text('eventOwner'),
//   eventAdmin: text('eventAdmin'),
//   eventMember: text('eventMember'),
//   eventGuest: text('eventGuest'),
//   creatorOfEvents: text('creatorOfEvents'),
//   adminOfChannels: text('adminOfChannels'),
//   creatorOfChannels: text('creatorOfChannels'),
//   created: integer("created", { mode: "timestamp_ms" }).default(sql`(STRFTIME('%s', 'now') * 1000)`)
// });