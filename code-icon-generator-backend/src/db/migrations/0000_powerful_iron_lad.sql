CREATE TABLE IF NOT EXISTS "file_data" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"content" text NOT NULL,
	"encoding" text NOT NULL,
	"node_id" text NOT NULL,
	"sha" text NOT NULL,
	"size" numeric NOT NULL,
	"url" text NOT NULL,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "git_repo" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"sha" text NOT NULL,
	"truncated" boolean NOT NULL,
	"url" text NOT NULL,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "tree_item" (
	"id" uuid PRIMARY KEY DEFAULT gen_random_uuid() NOT NULL,
	"mode" text NOT NULL,
	"path" text NOT NULL,
	"sha" text NOT NULL,
	"size" numeric NOT NULL,
	"type" text NOT NULL,
	"url" text NOT NULL,
	"file_data_id" uuid NOT NULL,
	"git_repo_id" uuid,
	"created_at" timestamp DEFAULT now()
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "tree_item" ADD CONSTRAINT "tree_item_file_data_id_file_data_id_fk" FOREIGN KEY ("file_data_id") REFERENCES "file_data"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "tree_item" ADD CONSTRAINT "tree_item_git_repo_id_git_repo_id_fk" FOREIGN KEY ("git_repo_id") REFERENCES "git_repo"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
