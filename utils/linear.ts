import { type Issue, LinearClient, type Project } from "@linear/sdk";
import { config } from "dotenv";

const client = new LinearClient({
  apiKey: Deno.env.get("LINEAR_API_KEY") || config().LINEAR_API_KEY,
});

// Projects
async function getProjects(): Promise<Project[]> {
  const projects = await client.projects();
  return projects.nodes;
}

export async function logAllProjects(): Promise<void> {
  const projects = await getProjects();
  let projectNumber = 1;
  for (const project of projects) {
    console.info(`${projectNumber}. ${project.name}`);
    projectNumber += 1;
  }
}

export async function logActiveProjects(): Promise<void> {
  const projects = await getProjects();
  const activeProjects = projects.filter((project) =>
    project.state === "started"
  );
  let projectNumber = 1;
  for (const project of activeProjects) {
    console.info(`${projectNumber}. ${project.name}`);
    projectNumber += 1;
  }
}

// Issues
async function getIssues(): Promise<Issue[]> {
  const issues = await client.issues();
  return issues.nodes;
}

export async function logAllIssues(): Promise<void> {
  const issues = await getIssues();
  let issueNumber = 1;
  for (const issue of issues) {
    console.info(`${issueNumber}. ${issue.title}`);
    issueNumber += 1;
  }
}

export async function logActiveIssues(): Promise<void> {
  const issues = await getIssues();
  const activeIssues = issues.filter((issue) =>
    !issue.canceledAt && !issue.completedAt
  );
  let issueNumber = 1;
  for (const issue of activeIssues) {
    console.info(`${issueNumber}. ${issue.title}`);
    issueNumber += 1;
  }
}
