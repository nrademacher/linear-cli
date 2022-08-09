import {
  logAllProjects,
  logActiveProjects,
  logActiveIssues,
  logAllIssues,
} from "@linear";

const PROJECTS_NAMESPACE_ARG = "projects";
const ISSUES_NAMESPACE_ARG = "issues";

if (Deno.args[0] === ISSUES_NAMESPACE_ARG) {
  if (Deno.args[1] === "list" || Deno.args[1] === "l") {
    if (Deno.args[2] === "--active" || Deno.args[2] === "-a") {
      await logActiveIssues();
    } else {
      await logAllIssues();
    }
  }
} else if (Deno.args[0] === PROJECTS_NAMESPACE_ARG) {
  if (Deno.args[1] === "list" || Deno.args[1] === "l") {
    if (Deno.args[2] === "--active" || Deno.args[2] === "-a") {
      await logActiveProjects();
    } else {
      await logAllProjects();
    }
  }
}
