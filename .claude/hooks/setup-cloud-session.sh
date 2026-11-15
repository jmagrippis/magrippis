#!/bin/bash
set -euo pipefail

[ "${CLAUDE_CODE_REMOTE:-}" = true ] || exit 0

# SessionStart stdout becomes Claude's context
exec 1>&2

cd "$CLAUDE_PROJECT_DIR"

vp install --frozen-lockfile

node_and_pnpm_path_export="$(VP_SHELL=bash vp env print | grep '^export ')"
if [ -n "${CLAUDE_ENV_FILE:-}" ] && ! grep -qxF "$node_and_pnpm_path_export" "$CLAUDE_ENV_FILE" 2>/dev/null; then
	echo "$node_and_pnpm_path_export" >>"$CLAUDE_ENV_FILE"
fi

vp -C apps/web exec playwright install
