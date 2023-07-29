export function createConnectedPoints(
  source: {
    x: number;
    y: number;
  },
  destination: {
    x: number;
    y: number;
  }
) {
  return [source.x, source.y, destination.x, destination.y];
}
