import { fallbackPortfolio } from "@/data/fallbackPortfolio";

export type Project = {
  title: string;
  description: string;
  image: string;
  url: string;
  tags: string[];
  featured?: boolean;
  order?: number;
};

export async function getPortfolioProjects(): Promise<Project[]> {
  const apiKey = process.env.GOOGLE_SHEETS_API_KEY;
  const sheetId = process.env.GOOGLE_SHEET_ID;
  const range = process.env.GOOGLE_SHEET_RANGE || "Portfolio!A:G";

  if (!apiKey || !sheetId) {
    return fallbackPortfolio as Project[];
  }

  try {
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;
    const res = await fetch(url);

    if (!res.ok) {
      return fallbackPortfolio as Project[];
    }

    const data = (await res.json()) as { values?: string[][] };
    const rows = data.values || [];

    if (rows.length < 2) {
      return fallbackPortfolio as Project[];
    }

    const headers = rows[0].map((h: string) => h.toLowerCase().trim());
    const projects: Project[] = [];

    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];
      if (!row || row.length === 0) continue;

      const project: Record<string, string> = {};
      headers.forEach((header: string, index: number) => {
        project[header] = (row[index] || "").trim();
      });

      if (!project.title) continue;

      projects.push({
        title: project.title,
        description: project.description,
        image: project.image,
        url: project.url,
        tags: project.tags
          ? project.tags.split(",").map((t: string) => t.trim()).filter(Boolean)
          : [],
        featured: project.featured === "true" || project.featured === "TRUE",
        order: project.order ? Number(project.order) : undefined,
      });
    }

    return projects.sort((a, b) => (a.order || 0) - (b.order || 0));
  } catch (error) {
    return fallbackPortfolio as Project[];
  }
}
