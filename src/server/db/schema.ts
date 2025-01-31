// Example model schema from the Drizzle docs
// https://orm.drizzle.team/docs/sql-schema-declaration

import { integer, sqliteTable, text } from 'drizzle-orm/sqlite-core';

export const customerTable = sqliteTable('customer', {
  customerId: integer('customerId').primaryKey(),
  companyName: text('companyName').notNull(),
  contactName: text('contactName').notNull(),
});

export const users = sqliteTable("users", {
  id: integer('id').primaryKey({autoIncrement:true}), 
  username: text('username').notNull().unique(), 
  email: text('email').notNull().unique(), 
  password: text('password').notNull(),
  createdAt: integer('created_at').default(Math.floor(Date.now() / 1000)),
})