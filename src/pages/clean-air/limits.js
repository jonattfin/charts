import { Colors } from "@blueprintjs/core";

export function getLimits(type) {
  if (type === 'pm10') {
    return [
      { val: 0, color: Colors.GREEN5, label: 'Good' },
      { val: 51, color: Colors.GREEN4, label: 'Moderate' },
      { val: 101, color: Colors.RED5, label: 'Unhealthy' },
      { val: 201, color: Colors.RED4, label: 'Very Unhealthy' },
      { val: 301, color: Colors.ROSE1, label: 'Hazardous' },
    ]
  } else if (type === 'pm25') {
    return [
      { val: 0, color: Colors.GREEN5, label: 'Good' },
      { val: 30, color: Colors.GREEN4, label: 'Moderate' },
      { val: 100, color: Colors.ROSE1, label: 'Hazardous' },
    ];
  }

  return [];
}
