export default function gate7(ending) {
  if (ending === "GATE NO 4") {
    return [
      { latitude: 23.35443, longitude: 85.4131 },
      { latitude: 23.35443, longitude: 85.41305 },
      { latitude: 23.353, longitude: 85.41302 },
      { latitude: 23.3503, longitude: 85.413 },
      { latitude: 23.3501, longitude: 85.4131 },
      { latitude: 23.3501, longitude: 85.4132 },
    ];
  } else if (ending === "GATE NO 5") {
    return [
      { latitude: 23.35443, longitude: 85.41296 },
      { latitude: 23.35443, longitude: 85.41305 },
      { latitude: 23.353, longitude: 85.41302 },
      { latitude: 23.3503, longitude: 85.413 },
      { latitude: 23.3501, longitude: 85.4131 },
      { latitude: 23.3501, longitude: 85.4132 },
    ];
  } else if (ending === "GATE NO 1") {
    return [
      { latitude: 23.35577, longitude: 85.41309 },
      { latitude: 23.35443, longitude: 85.41305 },
      { latitude: 23.353, longitude: 85.41302 },
      { latitude: 23.3503, longitude: 85.413 },
      { latitude: 23.3501, longitude: 85.4131 },
      { latitude: 23.3501, longitude: 85.4132 },
    ];
  } else if (ending === "IC") {
    [
      { latitude: 23.3501, longitude: 85.4132 },
      { latitude: 23.3501, longitude: 85.4133 },
      { latitude: 23.35013, longitude: 85.4133 },
    ];
  } else if (ending === "WORKSHOP") {
    [
      { latitude: 23.3501, longitude: 85.4132 },
      { latitude: 23.3501, longitude: 85.41356 },
      { latitude: 23.35014, longitude: 85.41356 },
    ];
  } else if (ending === "AUDITORIUM") {
    return [
      { latitude: 23.35342, longitude: 85.41325 },
      { latitude: 23.35397, longitude: 85.41335 },
      { latitude: 23.35398, longitude: 85.41332 },
      { latitude: 23.3544, longitude: 85.41326 },
      { latitude: 23.35443, longitude: 85.4131 },
      { latitude: 23.35443, longitude: 85.41305 },
      { latitude: 23.353, longitude: 85.41302 },
      { latitude: 23.3503, longitude: 85.413 },
      { latitude: 23.3501, longitude: 85.4131 },
      { latitude: 23.3501, longitude: 85.4132 },
    ];
  } else if (ending === "YOGA & NATUROPATHY") {
    return [
      { latitude: 23.3501, longitude: 85.4132 },
      { latitude: 23.3502, longitude: 85.41446 },
      { latitude: 23.35029, longitude: 85.4144 },
      { latitude: 23.3503, longitude: 85.4142 },
    ];
  } else if (ending === "BASKETBALL COURT") {
    return [
      { latitude: 23.35455, longitude: 85.41329 },
      { latitude: 23.35455, longitude: 85.41325 },
      { latitude: 23.3544, longitude: 85.41326 },
      { latitude: 23.35443, longitude: 85.4131 },
      { latitude: 23.35443, longitude: 85.4131 },
      { latitude: 23.35443, longitude: 85.41305 },
      { latitude: 23.353, longitude: 85.41302 },
      { latitude: 23.3503, longitude: 85.413 },
      { latitude: 23.3501, longitude: 85.4131 },
      { latitude: 23.3501, longitude: 85.4132 },
    ];
  } else if (ending === "SBPS PLAYGROUND") {
    return [
      { latitude: 23.35394, longitude: 85.4135 },
      { latitude: 23.35397, longitude: 85.41335 },
      { latitude: 23.35398, longitude: 85.41332 },
      { latitude: 23.3544, longitude: 85.41326 },
      { latitude: 23.35443, longitude: 85.4131 },
      { latitude: 23.35443, longitude: 85.41305 },
      { latitude: 23.353, longitude: 85.41302 },
      { latitude: 23.3503, longitude: 85.413 },
      { latitude: 23.3501, longitude: 85.4131 },
      { latitude: 23.3501, longitude: 85.4132 },
    ];
  } else if (ending === "NURSING BLOCK") {
    return [
      { latitude: 23.3501, longitude: 85.4132 },
      { latitude: 23.3501, longitude: 85.4133 },
      { latitude: 23.3501, longitude: 85.4133 },
      { latitude: 23.3501, longitude: 85.41356 },
      { latitude: 23.35015, longitude: 85.41426 },
      { latitude: 23.34978, longitude: 85.41426 },
      { latitude: 23.3498, longitude: 85.41438 },
    ];
  } else if (ending === "PLAYGROUND") {
    return [
      { latitude: 23.3501, longitude: 85.4132 },
      { latitude: 23.3501, longitude: 85.4133 },
      { latitude: 23.3501, longitude: 85.4133 },
      { latitude: 23.3501, longitude: 85.41356 },
      { latitude: 23.35015, longitude: 85.41426 },
      { latitude: 23.34978, longitude: 85.41426 },
      { latitude: 23.3498, longitude: 85.41418 },
    ];
  } else if (ending === "OLD PARKING") {
    return [
      { latitude: 23.35013, longitude: 85.4133 },
      { latitude: 23.3501, longitude: 85.4133 },
      { latitude: 23.3502, longitude: 85.41446 },
      { latitude: 23.34994, longitude: 85.41463 },
      { latitude: 23.34936, longitude: 85.41495 },
      { latitude: 23.34934, longitude: 85.4149 },
    ];
  } else {
    return [];
  }
}
