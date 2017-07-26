# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170726162043) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "events", force: :cascade do |t|
    t.integer  "group_id",    null: false
    t.integer  "host_id",     null: false
    t.string   "title",       null: false
    t.datetime "datetime",    null: false
    t.string   "location",    null: false
    t.text     "description"
    t.string   "image_url"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["group_id", "host_id"], name: "index_events_on_group_id_and_host_id", unique: true, using: :btree
  end

  create_table "groups", force: :cascade do |t|
    t.string   "owner_id",    null: false
    t.string   "category"
    t.string   "title",       null: false
    t.text     "description"
    t.string   "location"
    t.string   "image_url"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["owner_id"], name: "index_groups_on_owner_id", using: :btree
  end

  create_table "memberships", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "group_id",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id", "group_id"], name: "index_memberships_on_user_id_and_group_id", using: :btree
  end

  create_table "rsvps", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "event_id",   null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id", "event_id"], name: "index_rsvps_on_user_id_and_event_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "username",        null: false
    t.string   "password_digest", null: false
    t.string   "session_token",   null: false
    t.string   "first_name"
    t.string   "last_name"
    t.string   "location"
    t.text     "about"
    t.string   "image_url"
    t.datetime "created_at",      null: false
    t.datetime "updated_at",      null: false
    t.index ["first_name", "image_url", "session_token"], name: "index_users_on_first_name_and_image_url_and_session_token", unique: true, using: :btree
  end

end
