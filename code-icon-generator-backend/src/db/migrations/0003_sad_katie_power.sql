ALTER TABLE "file_data_progress" ADD COLUMN "id" uuid DEFAULT gen_random_uuid() NOT NULL;--> statement-breakpoint
ALTER TABLE "file_data_progress" ADD COLUMN "created_at" timestamp DEFAULT now();