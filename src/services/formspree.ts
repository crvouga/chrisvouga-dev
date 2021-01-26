// dashboard: https://formspree.io/forms/xqkgwwnv/integration
export const getContactFormEndpoint = () => {
  const endpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT;
  if (endpoint) {
    return endpoint;
  }
  throw new Error("process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT is undefined");
};
