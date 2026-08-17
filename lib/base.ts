export const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const withBase = (path: string) => (base ? `${base}${path}` : path);
