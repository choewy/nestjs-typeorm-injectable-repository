import { resolve } from 'path';

export class ConfigPath {
  public static makeFilePath(...paths: string[]) {
    return paths.map((path) => resolve(path));
  }
}
