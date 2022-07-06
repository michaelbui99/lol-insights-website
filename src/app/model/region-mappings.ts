import { Region } from './region';

export class RegionMappings {
  static regionMappings: Map<string, Region>;

  constructor() {
    Object.values(Region).forEach((value) => {
      RegionMappings.regionMappings.set(value.toString(), value);
    });
  }
}
