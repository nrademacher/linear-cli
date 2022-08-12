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

async function getActiveProjects(): Promise<Project[]> {
    const projects = await getProjects()
  return projects.filter((project) =>
    project.state === "started"
  );
}

export async function printAllProjects(): Promise<void> {
  const projects = await getProjects();
  let projectNumber = 1;
  for (const project of projects) {
    console.info(`${projectNumber}. ${project.name}`);
    projectNumber += 1;
  }
}

export async function printActiveProjects(): Promise<void> {
  const activeProjects = await getActiveProjects()
  let projectNumber = 1;
  for (const project of activeProjects) {
    console.info(`${projectNumber}. ${project.name}`);
    projectNumber += 1;
  }
}

export async function printRandomProject(): Promise<void> {
    const projects = await getProjects()
    const randomIdx = Math.floor(Math.random() * projects.length)
    console.info(projects[randomIdx].name)
}

export async function printRandomActiveProject(): Promise<void> {
    const activeProjects = await getActiveProjects()
    const randomIdx = Math.floor(Math.random() * activeProjects.length)
    console.info(activeProjects[randomIdx].name)
}

// Issues
async function getIssues(): Promise<Issue[]> {
  const issues = await client.issues();
  return issues.nodes;
}

export async function printAllIssues(): Promise<void> {
  const issues = await getIssues();
  let issueNumber = 1;
  for (const issue of issues) {
    console.info(`${issueNumber}. ${issue.title}`);
    issueNumber += 1;
  }
}

export async function printActiveIssues(): Promise<void> {
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
