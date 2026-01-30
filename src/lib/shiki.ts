import { codeToHtml } from "shiki";

export async function highlightCode(
  code: string,
  lang: string,
  theme: "github-dark-default" | "github-light-default" = "github-dark-default",
) {
  return codeToHtml(code, {
    lang,
    theme,
  });
}
