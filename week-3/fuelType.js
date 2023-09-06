const fuelType = (vehicleType, platColor, cc) => {
  if (vehicleType === 'motor' || platColor === 'kuning') return 'BBM subsidi';
  if (cc < 1500) return 'PERTAMAX';
  return 'PERTAMAX TURBO';
};

function fuelType2(vehicleType, platColor, cc) {
  if (vehicleType === 'motor' || platColor === 'kuning') return 'BBM subsidi';
  if (cc < 1500) return 'PERTAMAX';
  return 'PERTAMAX TURBO';
};