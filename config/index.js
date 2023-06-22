const dev = process.env.NODE_ENV !== "production";

export const server = dev
  ? "https://test1.trigan.org"
  : "https://test1.trigan.org";
  // : "https://frightened-threads-colt.cyclic.app";
