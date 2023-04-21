const normalizePort = (val: unknown): string | number | false => {
  if (typeof val === "number") {
    return val;
  }

  const port = parseInt(val as string, 10);

  if (!isNaN(port)) {
    // named pipe
    return port;
  }

  return false;
};

export default normalizePort;
