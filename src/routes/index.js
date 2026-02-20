// Responsável por juntar todas as rotas que vão estar em aquivos diferentes
import { tickets } from "./tickest.js";
import { parseRoutePath } from "../utils/parseRoutePath.js";

export const routes = [...tickets].map((route) => ({
  ...route,
  path: parseRoutePath(route.path),
}))

