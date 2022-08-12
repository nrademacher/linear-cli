import {
  printAllProjects,
  printActiveProjects,
  printActiveIssues,
  printAllIssues,
  printRandomActiveProject,
  printRandomProject,
} from "@linear";

const PROJECTS_NAMESPACE_ARG = "projects";
const ISSUES_NAMESPACE_ARG = "issues";

if (Deno.args[0] === ISSUES_NAMESPACE_ARG) {
  if (Deno.args[1] === "list" || Deno.args[1] === "l") {
    if (Deno.args[2] === "--active" || Deno.args[2] === "-a") {
      await printActiveIssues();
    } else {
      await printAllIssues();
    }
  }
} else if (Deno.args[0] === PROJECTS_NAMESPACE_ARG) {
  if (Deno.args[1] === "list" || Deno.args[1] === "l") {
    if (Deno.args[2] === "--active" || Deno.args[2] === "-a") {
      await printActiveProjects();
    } else {
      await printAllProjects();
    }
  } else if (Deno.args[1] === "random" || Deno.args[1] === "r") {
    if (Deno.args[2] === "--active" || Deno.args[2] === "-a") {
      await printRandomActiveProject();
    } else {
      await printRandomProject();
    }
  }
}
