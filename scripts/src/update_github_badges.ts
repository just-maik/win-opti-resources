#!/usr/bin/env bun

const START_MARKER = "<!-- github-project-badges:start -->";
const END_MARKER = "<!-- github-project-badges:end -->";
const BADGE_BLOCK_RE =
  /(?:\r?\n)*<!-- github-project-badges:start -->\r?\n.*?\r?\n<!-- github-project-badges:end -->(?:\r?\n)*/gs;
const GITHUB_HEADING_RE =
  /^(?<heading>###\s+.*?\]\((?<url>https:\/\/github\.com\/[^\s)#?]+)(?:[?#][^\s)]*)?\).*)$/gim;

function repositoryFromUrl(url: string): [string, string] | null {
  const parts = new URL(url).pathname.split("/").filter(Boolean);
  if (parts.length !== 2) return null;

  const owner = parts[0];
  const repository = parts?.[1]?.endsWith(".git")
    ? parts[1].slice(0, -4)
    : parts[1];
  if (!owner || !repository) return null;
  return [owner, repository];
}

function badgeBlock(owner: string, repository: string): string {
  const badgeOwner = encodeURIComponent(owner);
  const badgeRepository = encodeURIComponent(repository);
  const githubUrl = `https://github.com/${owner}/${repository}`;
  const shieldsUrl = "https://img.shields.io/github";
  const badges = [
    [
      "Last release",
      `${shieldsUrl}/release-date/${badgeOwner}/${badgeRepository}?label=last%20release`,
      `${githubUrl}/releases/latest`,
    ],
    [
      "Last commit",
      `${shieldsUrl}/last-commit/${badgeOwner}/${badgeRepository}`,
      `${githubUrl}/commits`,
    ],
    [
      "Contributors",
      `${shieldsUrl}/contributors/${badgeOwner}/${badgeRepository}?label=contributors`,
      `${githubUrl}/graphs/contributors`,
    ],
    [
      "GitHub stars",
      `${shieldsUrl}/stars/${badgeOwner}/${badgeRepository}`,
      `${githubUrl}/stargazers`,
    ],
  ];
  const badgeMarkdown = badges
    .map(
      ([label, imageUrl, targetUrl]) =>
        `[![${label}](${imageUrl})](${targetUrl})`,
    )
    .join(" ");

  return `${START_MARKER}\n${badgeMarkdown}\n${END_MARKER}`;
}

function markerCount(content: string, marker: string): number {
  return content.split(marker).length - 1;
}

function updateMarkdown(content: string): [string, number] {
  if (
    markerCount(content, START_MARKER) !== markerCount(content, END_MARKER)
  ) {
    throw new Error("unmatched GitHub badge block marker");
  }

  content = content.replace(BADGE_BLOCK_RE, "\n\n");
  let projectCount = 0;
  const updated = content.replace(
    GITHUB_HEADING_RE,
    (...args: unknown[]): string => {
      const groups = args.at(-1) as
        | { heading: string; url: string }
        | undefined;
      if (!groups) return String(args[0]);

      const repository = repositoryFromUrl(groups.url);
      if (!repository) return groups.heading;

      projectCount += 1;
      return `${groups.heading}\n\n${badgeBlock(...repository)}`;
    },
  );
  return [updated, projectCount];
}

function printHelp(): void {
  console.log(`Usage: update_github_badges.ts [--check] [path]

Add status badges below GitHub project headings.

Arguments:
  path       Markdown file to update (default: README.md)

Options:
  --check    Exit with status 1 instead of writing when badges need updating
  -h, --help Show this help message`);
}

function parseArgs(args: string[]): { check: boolean; path: string } {
  let check = false;
  let path = "README.md";
  let hasPath = false;

  for (const arg of args) {
    if (arg === "-h" || arg === "--help") {
      printHelp();
      process.exit(0);
    }
    if (arg === "--check") {
      check = true;
      continue;
    }
    if (arg.startsWith("-")) throw new Error(`unknown option: ${arg}`);
    if (hasPath) throw new Error("only one Markdown path may be provided");
    path = arg;
    hasPath = true;
  }

  return { check, path };
}

const args = parseArgs(Bun.argv.slice(2));
const original = await Bun.file(args.path).text();
const [updated, projectCount] = updateMarkdown(original);

if (updated === original) {
  console.log(`GitHub badges are current (${projectCount} projects).`);
} else if (args.check) {
  console.log(`GitHub badges need updating (${projectCount} projects).`);
  process.exitCode = 1;
} else {
  await Bun.write(args.path, updated);
  console.log(
    `Updated GitHub badges for ${projectCount} projects in ${args.path}.`,
  );
}
