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
SELECT id, content, encoding, node_id, sha, size, url, created_at
	FROM file_data
where url = 'https://api.github.com/repos/PKief/vscode-material-icon-theme/git/blobs/dd47d7b8bba9caebbd5fe44fea612dd74f3cc5da'
and encoding = 'base64'
and node_id = 'MDQ6QmxvYjY3ODMxMzcyOmRkNDdkN2I4YmJhOWNhZWJiZDVmZTQ0ZmVhNjEyZGQ3NGYzY2M1ZGE='
and sha = 'dd47d7b8bba9caebbd5fe44fea612dd74f3cc5da'
and size = 404
and content == 'PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3Lncz\nLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTIxIDE2LjVjMCAuMzgtLjIxLjcx\nLS41My44OGwtNy45IDQuNDRjLS4xNi4xMi0uMzYuMTgtLjU3LjE4cy0uNDEt\nLjA2LS41Ny0uMThsLTcuOS00LjQ0QS45OTEuOTkxIDAgMCAxIDMgMTYuNXYt\nOWMwLS4zOC4yMS0uNzEuNTMtLjg4bDcuOS00LjQ0Yy4xNi0uMTIuMzYtLjE4\nLjU3LS4xOHMuNDEuMDYuNTcuMThsNy45IDQuNDRjLjMyLjE3LjUzLjUuNTMu\nODh2OU0xMiA0LjE1IDYuMDQgNy41IDEyIDEwLjg1bDUuOTYtMy4zNUwxMiA0\nLjE1TTUgMTUuOTFsNiAzLjM4di02LjcxTDUgOS4yMXY2LjdtMTQgMHYtNi43\nbC02IDMuMzd2Ni43MXoiIHN0eWxlPSJmaWxsOiMyOWI2ZjYiLz48L3N2Zz4=\n';

--------------------------------------------------------------------------------
SELECT id, sha, truncated, url, created_at
	FROM public.git_repo;
	
SELECT id, mode, path, sha, size, type, url, file_data_id, git_repo_id, created_at
	FROM public.tree_item order by path desc;
	
SELECT id, content, encoding, node_id, sha, size, url, created_at
	FROM public.file_data;

-- get tree_item by second git_repo "c354ecf2-cd09-4904-bd4b-7e4b84baac75"
select * 
from tree_item 
where tree_item.git_repo_id = 'c354ecf2-cd09-4904-bd4b-7e4b84baac75'
and file_data_id is not null;

-- get file_data of tree_item of second git_repo
select * 
from file_data 
where id in (
	select tree_item.file_data_id
	from tree_item 
	where tree_item.git_repo_id = 'c354ecf2-cd09-4904-bd4b-7e4b84baac75'
)

--
select t.*, f.*
from tree_item t
join file_data f on t.file_data_id = f.id
where t.git_repo_id = 'c354ecf2-cd09-4904-bd4b-7e4b84baac75'

-- delete
-- begin;
-- update tree_item
-- set file_data_id = null
-- where file_data_id in (
-- 	select tree_item.file_data_id
-- 	from tree_item 
-- 	where tree_item.git_repo_id = 'c354ecf2-cd09-4904-bd4b-7e4b84baac75'
-- );

-- delete from file_data f
-- where f.id not in (
-- 	select tree_item.file_data_id
-- 	from tree_item 
-- 	where tree_item.git_repo_id = 'c555f78a-cbc8-4aee-80f6-4ea43f3f9a46'
-- );

-- delete from tree_item t
-- where t.git_repo_id = 'c354ecf2-cd09-4904-bd4b-7e4b84baac75';

-- delete from git_repo
-- where id = 'c354ecf2-cd09-4904-bd4b-7e4b84baac75';

-- -- rollback;
-- -- commit;

--------------------------------------------------------------------------------
	
SELECT id, mode, path, sha, size, type, url, file_data_id, git_repo_id, created_at
	FROM public.tree_item
	ORDER BY path;
	
SELECT *
FROM public.tree_item
WHERE git_repo_id = 'c354ecf2-cd09-4904-bd4b-7e4b84baac75'

SELECT *
FROM public.tree_item
WHERE git_repo_id = 'c354ecf2-cd09-4904-bd4b-7e4b84baac75'

--------------------------------------------------------------------------------
SELECT *
FROM public.tree_item
WHERE file_data_id is null

select * from file_data_progress;
--------------------------------------------------------------------------------