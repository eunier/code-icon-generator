SELECT id, hash, created_at
	FROM drizzle.__drizzle_migrations;
	
--------------------------------------------------------------------------------
SELECT id, sha, truncated, url, created_at
	FROM public.git_repo;
	
SELECT id, mode, path, sha, size, type, url, file_data_id, git_repo_id, created_at
	FROM public.tree_item;
	
SELECT id, content, encoding, node_id, sha, size, url, created_at
	FROM public.file_data;
	
SELECT file_data_to_fetch, id, created_at
	FROM public.file_data_progress;

--------------------------------------------------------------------------------
