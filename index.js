function distanceFromHqInBlocks(currentLocation) {
    const hqLocation = 42; // Headquarters at block 42
    if (currentLocation >= hqLocation) {
      return currentLocation - hqLocation;
    } else {
      return hqLocation - currentLocation;
    }
  }

  function distanceFromHqInFeet(currentLocation) {
    const feetPerBlock = 264;
    const hqLocation = 42; // Headquarters at block 42
    let distanceInBlocks;
  
    if (currentLocation >= hqLocation) {
      distanceInBlocks = currentLocation - hqLocation;
    } else {
      distanceInBlocks = hqLocation - currentLocation;
    }
  
    return distanceInBlocks * feetPerBlock;


  }

  function distanceTravelledInFeet(start, destination) {
    const feetPerBlock = 264;
    let distanceInBlocks;
  
    if (start <= destination) {
      distanceInBlocks = destination - start;
    } else {
      distanceInBlocks = start - destination;
    }
  
    return distanceInBlocks * feetPerBlock;
  }

  function calculatesFarePrice(start, destination) {
    const feetPerBlock = 264;
    const freeFeet = 400;
    const twoCentsPerFoot = 0.02;
    const maxFeetChargeable = 2000;
    const maxFeetAllowed = 2500;
  
    let distanceInFeet = Math.abs(destination - start) * feetPerBlock;
  
    if (distanceInFeet <= freeFeet) {
      return 0; // Free sample
    } else if (distanceInFeet > freeFeet && distanceInFeet <= maxFeetChargeable) {
      let feetBeyondFree = distanceInFeet - freeFeet;
      return feetBeyondFree * twoCentsPerFoot; // 2 cents per foot within chargeable range
    } else if (distanceInFeet > maxFeetChargeable && distanceInFeet <= maxFeetAllowed) {
      return 25; // $25 for distance over 2000 feet
    } else {
      return 'cannot travel over 2500 feet; // Limit exceeded
    }
  }
