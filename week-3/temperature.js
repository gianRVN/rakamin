const temperature = (value) => {
  if (value >= -100 && value <= 0) return "minus";
  if (value > 0 && value <= 100) return "cair";
  if (value > 100 && value <= 500) return "uap";
  return "tidak terdefinisi"
};

function temperature2(value) {
  if (value >= -100 && value <= 0) return "minus";
  if (value > 0 && value <= 100) return "cair";
  if (value > 100 && value <= 500) return "uap";

  return "tidak terdefinisi";
}