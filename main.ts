import {
  ACTIVE_FLAG_ARG,
  ACTIVE_FLAG_SHORTHAND_ARG,
  ISSUES_NAMESPACE_ARG,
  ISSUES_NAMESPACE_SHORHAND_ARG,
  LIST_SUB_NAMESPACE_ARG,
  LIST_SUB_NAMESPACE_SHORTHAND_ARG,
  PROJECTS_NAMESPACE_ARG,
  PROJECTS_NAMESPACE_SHORTHAND_ARG,
  RANDOM_SUB_NAMESPACE_ARG,
  RANDOM_SUB_NAMESPACE_SHORTHAND_ARG,
} from "./api/constants.ts";
import {
  printAllProjects,
  printActiveProjects,
  printActiveIssues,
  printAllIssues,
  printRandomActiveProject,
  printRandomProject,
} from "@linear";

if (
  Deno.args[0] === ISSUES_NAMESPACE_ARG ||
  Deno.args[0] === ISSUES_NAMESPACE_SHORHAND_ARG
) {
  if (
    Deno.args[1] === LIST_SUB_NAMESPACE_ARG ||
    Deno.args[1] === LIST_SUB_NAMESPACE_SHORTHAND_ARG
  ) {
    if (
      Deno.args[2] === ACTIVE_FLAG_ARG ||
      Deno.args[2] === ACTIVE_FLAG_SHORTHAND_ARG
    ) {
      await printActiveIssues();
    } else {
      await printAllIssues();
    }
  }
} else if (
  Deno.args[0] === PROJECTS_NAMESPACE_ARG ||
  Deno.args[0] === PROJECTS_NAMESPACE_SHORTHAND_ARG
) {
  if (
    Deno.args[1] === LIST_SUB_NAMESPACE_ARG ||
    Deno.args[1] === LIST_SUB_NAMESPACE_SHORTHAND_ARG
  ) {
    if (
      Deno.args[2] === ACTIVE_FLAG_ARG ||
      Deno.args[2] === ACTIVE_FLAG_SHORTHAND_ARG
    ) {
      await printActiveProjects();
    } else {
      await printAllProjects();
    }
  } else if (
    Deno.args[1] === RANDOM_SUB_NAMESPACE_ARG ||
    Deno.args[1] === RANDOM_SUB_NAMESPACE_SHORTHAND_ARG
  ) {
    if (
      Deno.args[2] === ACTIVE_FLAG_ARG ||
      Deno.args[2] === ACTIVE_FLAG_SHORTHAND_ARG
    ) {
      await printRandomActiveProject();
    } else {
      await printRandomProject();
    }
  }
}
