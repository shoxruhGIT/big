export const calculatePrice = (resources) => {
  const { vcpu, ram, ssd, gpu } = resources;
  return parseFloat(
    (vcpu * 0.04 + ram * 0.01 + ssd * 0.005 + gpu * 0.07).toFixed(2)
  );
};

export const calculatePriceComponents = (resources) => {
  const { vcpu, ram, ssd, gpu } = resources;

  const cpuPrice = vcpu * 0.04;
  const ramPrice = ram * 0.01;
  const ssdPrice = ssd * 0.005;
  const gpuPrice = gpu * 0.07;
  const totalPrice = cpuPrice + ramPrice + ssdPrice + gpuPrice;

  return {
    cpuPrice,
    ramPrice,
    ssdPrice,
    gpuPrice,
    totalPrice,
  };
};

export const getServerCredentials = () => {
  const randomIP = `192.168.${Math.floor(Math.random() * 225)}.${Math.floor(
    Math.random() * 225
  )}`;

  const root = "root";
  const password = generateSecurePassword();

  return {
    ip: randomIP,
    root,
    password,
  };
};

const generateSecurePassword = () => {
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=";

  let password = "";

  for (let i = 0; i < 12; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }

  return password;
};
